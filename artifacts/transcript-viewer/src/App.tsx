import { useState, useCallback, useRef, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Search, X, Moon, Sun, Menu, ChevronLeft,
  BookOpen, GraduationCap, FileText, ChevronRight, MessageCircle,
} from "lucide-react";
import transcriptsData from "@/data/maths2/transcripts.json";
import type { TranscriptsData, Video, Week } from "@/types";
import { searchTranscripts } from "@/lib/search";
import { findVideoByCode, findClosestSegmentIndex } from "@/lib/curriculum";
import { Sidebar } from "@/components/Sidebar";
import { TranscriptView } from "@/components/TranscriptView";
import { SearchResults } from "@/components/SearchResults";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { CurriculumView } from "@/components/CurriculumView";
import { NotesView } from "@/components/NotesView";
import { HomePage } from "@/components/HomePage";
import { GlobalSearchResults } from "@/components/GlobalSearchResults";
import { AIGroupPage } from "@/components/AIGroupPage";
import { cn } from "@/lib/utils";

const data = transcriptsData as unknown as TranscriptsData;

type CourseTab = "transcripts" | "curriculum" | "notes";
type TranscriptsMode = "welcome" | "transcript" | "search";

const COURSE_META: Record<string, { name: string; level: string; semester: string }> = {
  maths2: {
    name: "Mathematics for Data Science II",
    level: "Foundation",
    semester: "Semester 2",
  },
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Derive current page & course from URL path
  const pathParts = location.pathname.split("/").filter(Boolean);
  const appPage: "home" | "course" | "aigroup" =
    pathParts[0] === "ai-group" ? "aigroup" :
    pathParts[0] === "course" ? "course" : "home";
  const activeCourse: string | null = appPage === "course" ? (pathParts[1] ?? null) : null;

  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [courseTab, setCourseTab] = useState<CourseTab>("transcripts");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
  const [highlightSegmentIndex, setHighlightSegmentIndex] = useState<number | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => { if (debounceTimer.current) clearTimeout(debounceTimer.current); };
  }, [searchQuery]);

  const searchResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return searchTranscripts(data, debouncedQuery, null);
  }, [debouncedQuery]);

  const transcriptsMode: TranscriptsMode = useMemo(() => {
    if (debouncedQuery.trim()) return "search";
    if (selectedVideo) return "transcript";
    return "welcome";
  }, [debouncedQuery, selectedVideo]);

  const handleOpenCourse = useCallback((courseId: string, withQuery?: string) => {
    navigate(`/course/${courseId}`);
    setCourseTab("transcripts");
    if (withQuery) {
      setSearchQuery(withQuery);
      setDebouncedQuery(withQuery);
    } else {
      setSearchQuery("");
      setDebouncedQuery("");
    }
  }, [navigate]);

  const handleGoHome = useCallback(() => {
    navigate("/");
    setSearchQuery("");
    setDebouncedQuery("");
    setSidebarOpen(false);
  }, [navigate]);

  const handleGoAIGroup = useCallback(() => {
    navigate("/ai-group");
    setSidebarOpen(false);
  }, [navigate]);

  const handleSelectVideo = useCallback((video: Video, week: Week, segmentIndex?: number) => {
    setSelectedVideo(video);
    setSelectedWeek(week);
    setHighlightSegmentIndex(segmentIndex ?? null);
    setSearchQuery("");
    setDebouncedQuery("");
    setSidebarOpen(false);
    setCourseTab("transcripts");
  }, []);

  const handleSearchResultSelect = useCallback((video: Video, week: Week, segmentIndex?: number) => {
    setSelectedVideo(video);
    setSelectedWeek(week);
    setHighlightSegmentIndex(segmentIndex ?? null);
    setDebouncedQuery("");
    setSearchQuery("");
  }, []);

  const handleNavigateToTranscript = useCallback((code: string, timestamp: string) => {
    const found = findVideoByCode(data, code);
    if (!found) return;
    const segmentIndex = found.video.available
      ? findClosestSegmentIndex(found.video, timestamp)
      : null;
    setSelectedVideo(found.video);
    setSelectedWeek(found.week);
    setHighlightSegmentIndex(segmentIndex);
    setSearchQuery("");
    setDebouncedQuery("");
    setCourseTab("transcripts");
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
    setDebouncedQuery("");
    searchInputRef.current?.focus();
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim()) setCourseTab("transcripts");
  };

  const courseMeta = activeCourse ? COURSE_META[activeCourse] : null;
  const showMobileMenuBtn = appPage === "course";
  const isGlobalSearch = appPage === "home" && debouncedQuery.trim().length > 0;
  const searchPlaceholder =
    appPage === "home"
      ? "Search across all courses... (e.g. vector, gradient)"
      : "Search transcripts...";

  const COURSE_TABS: { id: CourseTab; label: string; icon: typeof BookOpen }[] = [
    { id: "transcripts", label: "Transcripts", icon: BookOpen },
    { id: "curriculum", label: "Curriculum", icon: GraduationCap },
    { id: "notes", label: "Notes", icon: FileText },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <header className="flex-shrink-0 border-b border-border bg-card z-10">
        <div className="flex items-center h-12 px-3 gap-2">
          {showMobileMenuBtn && (
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors flex-shrink-0"
            >
              {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 flex-shrink-0 group mr-1"
          >
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="hidden sm:block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              BS in Data Science
            </span>
          </button>

          {appPage === "course" && courseMeta && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0" />
              <span className="text-xs text-muted-foreground hidden sm:flex items-center gap-1 flex-shrink-0">
                {courseMeta.level}
                <ChevronRight className="w-3 h-3 opacity-40" />
                {courseMeta.semester}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0 hidden sm:block" />
              <span className="text-xs font-medium text-foreground truncate max-w-[140px] sm:max-w-none flex-shrink min-w-0">
                {courseMeta.name}
              </span>
            </>
          )}

          <div className="flex-1" />

          <div className="flex-1 max-w-md relative hidden sm:block">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            <input
              ref={searchInputRef}
              type="search"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full h-8 pl-8 pr-8 rounded-md text-sm bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={() => setDarkMode((v) => !v)}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={handleGoAIGroup}
            className={cn(
              "flex items-center gap-1.5 h-8 px-2.5 rounded-md text-xs font-semibold transition-colors flex-shrink-0",
              appPage === "aigroup"
                ? "bg-violet-600 text-white"
                : "bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/60"
            )}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Free AI Group</span>
          </button>

          <a
            href="https://chat.whatsapp.com/FFjFQZSHYzyLTu4rdLuwGu?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 h-8 px-2.5 rounded-md text-xs font-semibold bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-colors flex-shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Request Course Access</span>
          </a>
        </div>

        {appPage === "course" && (
          <div className="flex items-center gap-0.5 px-3 pb-0 border-t border-border/50">
            {COURSE_TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => { setCourseTab(id); setSidebarOpen(false); }}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors border-b-2 -mb-px",
                  courseTab === id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}

            {courseTab === "transcripts" && (
              <div className="flex-1 flex items-center justify-end pb-1 sm:hidden">
                <div className="relative w-40">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
                  <input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full h-7 pl-6 pr-6 rounded-md text-xs bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40"
                  />
                  {searchQuery && (
                    <button onClick={clearSearch} className="absolute right-1.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-20"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {appPage === "aigroup" && (
          <main className="flex-1 overflow-hidden">
            <AIGroupPage />
          </main>
        )}

        {appPage === "home" && (
          <main className="flex-1 overflow-hidden">
            {isGlobalSearch ? (
              <GlobalSearchResults
                query={debouncedQuery}
                onOpenCourse={handleOpenCourse}
              />
            ) : (
              <HomePage onOpenCourse={handleOpenCourse} />
            )}
          </main>
        )}

        {appPage === "course" && (
          <>
            {courseTab === "transcripts" && (
              <aside
                className={cn(
                  "flex-shrink-0 w-64 border-r border-sidebar-border overflow-hidden z-30",
                  "md:flex md:flex-col md:relative md:translate-x-0",
                  sidebarOpen
                    ? "fixed inset-y-0 left-0 top-[88px] flex flex-col shadow-xl"
                    : "hidden md:flex"
                )}
              >
                <Sidebar
                  weeks={data.weeks}
                  selectedVideoId={selectedVideo?.id ?? null}
                  onSelectVideo={handleSelectVideo}
                  searchQuery={searchQuery}
                />
              </aside>
            )}

            <main className="flex-1 overflow-hidden relative">
              {courseTab === "transcripts" && (
                <>
                  {transcriptsMode === "welcome" && (
                    <WelcomeScreen
                      data={data}
                      onSearchFocus={() => searchInputRef.current?.focus()}
                      onSelectVideo={handleSelectVideo}
                      onOpenNotes={() => setCourseTab("notes")}
                      onOpenCurriculum={() => setCourseTab("curriculum")}
                    />
                  )}
                  {transcriptsMode === "transcript" && selectedVideo && selectedWeek && (
                    <TranscriptView
                      video={selectedVideo}
                      week={selectedWeek}
                      searchQuery=""
                      highlightSegmentIndex={highlightSegmentIndex}
                    />
                  )}
                  {transcriptsMode === "search" && (
                    <SearchResults
                      results={searchResults}
                      query={debouncedQuery}
                      onSelectVideo={handleSearchResultSelect}
                    />
                  )}
                </>
              )}
              {courseTab === "curriculum" && (
                <CurriculumView
                  onNavigateToTranscript={handleNavigateToTranscript}
                  sidebarOpen={sidebarOpen}
                  onSidebarClose={() => setSidebarOpen(false)}
                />
              )}
              {courseTab === "notes" && (
                <NotesView
                  sidebarOpen={sidebarOpen}
                  onSidebarClose={() => setSidebarOpen(false)}
                  onNavigateToTranscript={handleNavigateToTranscript}
                />
              )}
            </main>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
