import { useState, useCallback, useRef, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Search, X, Moon, Sun, Menu, ChevronLeft,
  BookOpen, GraduationCap, FileText, ChevronRight, MessageCircle, LogIn,
  BookmarkCheck, BookmarkPlus, Loader2,
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
import { useAuth } from "@/context/AuthContext";
import { COURSE_REGISTRY } from "@/lib/courseRegistry";
import { cn } from "@/lib/utils";

const data = transcriptsData as unknown as TranscriptsData;

type CourseTab = "transcripts" | "curriculum" | "notes";
type TranscriptsMode = "welcome" | "transcript" | "search";

// ─── Track Progress Button ────────────────────────────────────────────────────
function TrackProgressButton({
  user,
  isSubscribed,
  toggling,
  onToggle,
}: {
  user: { name: string } | null;
  isSubscribed: boolean | null;
  toggling: boolean;
  onToggle: () => void;
}) {
  if (!user) {
    // Not logged in — show "Track Progress" prompting login
    return (
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 h-7 px-3 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors flex-shrink-0"
      >
        <BookmarkPlus className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Track Progress</span>
      </button>
    );
  }

  if (isSubscribed === null || toggling) {
    return (
      <span className="flex items-center gap-1.5 h-7 px-3 rounded-full border border-border text-xs text-muted-foreground flex-shrink-0">
        <Loader2 className="w-3 h-3 animate-spin" />
      </span>
    );
  }

  if (isSubscribed) {
    return (
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 h-7 px-3 rounded-full bg-green-500/10 border border-green-500/30 text-xs font-medium text-green-700 dark:text-green-400 hover:bg-red-500/10 hover:border-red-400/30 hover:text-red-600 dark:hover:text-red-400 transition-colors flex-shrink-0 group"
        title="Click to untrack"
      >
        <BookmarkCheck className="w-3.5 h-3.5 group-hover:hidden" />
        <X className="w-3.5 h-3.5 hidden group-hover:inline" />
        <span className="hidden sm:inline group-hover:hidden">Tracking</span>
        <span className="hidden sm:group-hover:inline">Untrack</span>
      </button>
    );
  }

  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 h-7 px-3 rounded-full border border-primary/40 bg-primary/5 text-xs font-medium text-primary hover:bg-primary/15 transition-colors flex-shrink-0"
    >
      <BookmarkPlus className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">Track Progress</span>
    </button>
  );
}

const COURSE_META: Record<string, { name: string; level: string; semester: string; degreeSlug: string }> = {
  maths2: {
    name: "Mathematics for Data Science II",
    level: "Foundation",
    semester: "Semester 2",
    degreeSlug: "bs-data-science",
  },
};

const DEGREE_SLUGS = new Set(["bs-data-science"]);

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const pathParts = location.pathname.split("/").filter(Boolean);

  const appPage: "home" | "course" | "aigroup" =
    pathParts[0] === "ai-group" ? "aigroup" :
    (DEGREE_SLUGS.has(pathParts[0]) && pathParts[1]) ? "course" : "home";
  const activeCourse: string | null = appPage === "course" ? (pathParts[1] ?? null) : null;

  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [courseTab, setCourseTab] = useState<CourseTab>("transcripts");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
  const [highlightSegmentIndex, setHighlightSegmentIndex] = useState<number | null>(null);
  const [sourceTab, setSourceTab] = useState<"curriculum" | "notes" | null>(null);
  const curriculumScrollPosRef = useRef<number>(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const expandedInputRef = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─── Subscription state ────────────────────────────────────────────────────
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);
  const [subscriptionToggling, setSubscriptionToggling] = useState(false);

  // ─── Progress state (shared with CurriculumView) ──────────────────────────
  const [progressCodes, setProgressCodes] = useState<Set<string>>(new Set());
  const [togglingCodes, setTogglingCodes] = useState<Set<string>>(new Set());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Fetch subscription status whenever course or login state changes
  useEffect(() => {
    if (!activeCourse || !user) { setIsSubscribed(null); return; }
    fetch(`/api/subscriptions`, { credentials: "include" })
      .then((r) => r.json())
      .then((d) => {
        const subs: { courseId: string }[] = d.subscriptions ?? [];
        setIsSubscribed(subs.some((s) => s.courseId === activeCourse));
      })
      .catch(() => setIsSubscribed(null));
  }, [activeCourse, user]);

  const handleSubscriptionToggle = useCallback(async () => {
    if (!user) { navigate("/login"); return; }
    if (subscriptionToggling || !activeCourse) return;
    const courseInfo = COURSE_REGISTRY[activeCourse];
    if (!courseInfo) return;
    setSubscriptionToggling(true);
    try {
      if (isSubscribed) {
        await fetch("/api/subscriptions", {
          method: "DELETE",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ courseId: activeCourse }),
        });
        setIsSubscribed(false);
      } else {
        await fetch("/api/subscriptions", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ courseId: activeCourse, degreeId: courseInfo.degreeId }),
        });
        setIsSubscribed(true);
      }
    } catch {}
    setSubscriptionToggling(false);
  }, [user, activeCourse, isSubscribed, subscriptionToggling, navigate]);

  // Fetch progress for the active course (for CurriculumView checkmarks)
  useEffect(() => {
    if (!activeCourse || !user) { setProgressCodes(new Set()); return; }
    fetch(`/api/progress?courseId=${activeCourse}`, { credentials: "include" })
      .then((r) => r.json())
      .then((d) => {
        setProgressCodes(new Set((d.progress as { videoCode: string }[]).map((p) => p.videoCode)));
      })
      .catch(() => {});
  }, [activeCourse, user]);

  const toggleProgress = useCallback(async (code: string) => {
    if (!user) { navigate("/login"); return; }
    if (!activeCourse || togglingCodes.has(code)) return;
    const wasDone = progressCodes.has(code);
    setProgressCodes((prev) => { const n = new Set(prev); wasDone ? n.delete(code) : n.add(code); return n; });
    setTogglingCodes((prev) => new Set(prev).add(code));
    try {
      await fetch("/api/progress", {
        method: wasDone ? "DELETE" : "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: activeCourse, videoCode: code }),
      });
    } catch {
      setProgressCodes((prev) => { const n = new Set(prev); wasDone ? n.add(code) : n.delete(code); return n; });
    }
    setTogglingCodes((prev) => { const n = new Set(prev); n.delete(code); return n; });
  }, [user, activeCourse, progressCodes, togglingCodes, navigate]);

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
    const degreeSlug = COURSE_META[courseId]?.degreeSlug ?? "bs-data-science";
    navigate(`/${degreeSlug}/${courseId}`);
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
    setSearchExpanded(false);
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
    // Remember which tab the user came from so we can show a back button
    setCourseTab((prev) => {
      if (prev === "curriculum" || prev === "notes") setSourceTab(prev);
      return "transcripts";
    });
    setSelectedVideo(found.video);
    setSelectedWeek(found.week);
    setHighlightSegmentIndex(segmentIndex);
    setSearchQuery("");
    setDebouncedQuery("");
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
    setDebouncedQuery("");
    searchInputRef.current?.focus();
    expandedInputRef.current?.focus();
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim()) setCourseTab("transcripts");
  };

  const handleExpandSearch = () => {
    setSearchExpanded(true);
    setTimeout(() => expandedInputRef.current?.focus(), 50);
  };

  const handleCollapseSearch = () => {
    setSearchExpanded(false);
    setSearchQuery("");
    setDebouncedQuery("");
  };

  const courseMeta = activeCourse ? COURSE_META[activeCourse] : null;

  // Dynamic page title + meta description per route
  useEffect(() => {
    const setMeta = (title: string, description: string) => {
      document.title = title;
      const desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (desc) desc.content = description;
      const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
      if (ogTitle) ogTitle.content = title;
      const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = description;
    };
    if (appPage === "aigroup") {
      setMeta(
        "Free AI Discussion Group — DytaDex AI",
        "Join a free weekly community discussion group on Artificial Intelligence topics. Open for everyone, hosted on WhatsApp. Powered by DytaDex AI."
      );
    } else if (appPage === "course" && courseMeta) {
      setMeta(
        `${courseMeta.name} — DytaDex AI`,
        `Full transcripts, concept map and AI-generated notes for ${courseMeta.name} (${courseMeta.level}, ${courseMeta.semester}) from the BS in Data Science degree.`
      );
    } else {
      setMeta(
        "DytaDex AI — BS in Data Science Study Hub",
        "Transcripts, concept maps, AI-generated notes and full-text search for every lecture in the BS in Data Science degree. Study smarter with DytaDex AI."
      );
    }
  }, [appPage, courseMeta]);

  const showMobileMenuBtn = appPage === "course" && !searchExpanded;
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

          {/* Mobile sidebar toggle */}
          {showMobileMenuBtn && (
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors flex-shrink-0"
            >
              {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          )}

          {/* Brand: DytaDex logo + AI */}
          {!searchExpanded && (
            <button
              onClick={handleGoHome}
              className="flex items-center gap-1.5 flex-shrink-0 group"
            >
              <img
                src="/dytadex-logo.png"
                alt="DytaDex"
                className="h-6 w-auto"
              />
              <span className="text-sm font-bold text-[#3ab5b0] tracking-wide hidden sm:block" style={{ fontFamily: "'Advent Pro', sans-serif" }}>
                Frontier AI
              </span>
            </button>
          )}

          {/* Course breadcrumb */}
          {!searchExpanded && appPage === "course" && courseMeta && (
            <div className="hidden sm:flex items-center gap-1.5 min-w-0 flex-shrink">
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0" />
              <button
                onClick={handleGoHome}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap flex-shrink-0"
              >
                BS Data Science
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0" />
              <span className="text-xs font-medium text-foreground truncate min-w-0">
                {courseMeta.name}
              </span>
            </div>
          )}

          <div className="flex-1" />

          {/* Expandable search */}
          {searchExpanded ? (
            <div className="flex-1 flex items-center gap-2 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                <input
                  ref={expandedInputRef}
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
                onClick={handleCollapseSearch}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              {/* BS Data Science nav button */}
              <button
                onClick={handleGoHome}
                className={cn(
                  "flex items-center gap-1.5 h-8 px-2.5 rounded-md text-xs font-semibold transition-colors flex-shrink-0",
                  appPage === "home" || appPage === "course"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                title="BS in Data Science"
              >
                <GraduationCap className="w-4 h-4" />
                <span className="hidden md:inline">BS Data Science</span>
              </button>

              {/* Free AI Group nav button */}
              <button
                onClick={handleGoAIGroup}
                className={cn(
                  "flex items-center gap-1.5 h-8 px-2.5 rounded-md text-xs font-semibold transition-colors flex-shrink-0",
                  appPage === "aigroup"
                    ? "bg-violet-600 text-white"
                    : "bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/60"
                )}
                title="Free AI Group"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden md:inline">Free AI Group</span>
              </button>

              {/* Request Course Access */}
              <a
                href="https://chat.whatsapp.com/FFjFQZSHYzyLTu4rdLuwGu?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 h-8 px-2.5 rounded-md text-xs font-semibold bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-colors flex-shrink-0"
                title="Request Course Access"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden md:inline">Request Course</span>
              </a>

              {/* Search icon — expands on click */}
              <button
                onClick={handleExpandSearch}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Dark mode toggle — icon only */}
              <button
                onClick={() => setDarkMode((v) => !v)}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
                title={darkMode ? "Light mode" : "Dark mode"}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* User avatar / Login button */}
              {user ? (
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/15 hover:bg-primary/25 transition-colors flex-shrink-0"
                  title={`Dashboard — ${user.name}`}
                >
                  <span className="text-xs font-bold text-primary">{user.name.charAt(0).toUpperCase()}</span>
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
                  title="Sign in"
                >
                  <LogIn className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>

        {appPage === "course" && (
          <div className="flex items-center gap-0.5 px-3 pb-0 border-t border-border/50">
            {COURSE_TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  // Fresh manual navigation to Curriculum always starts at top
                  if (id === "curriculum") curriculumScrollPosRef.current = 0;
                  setCourseTab(id);
                  setSidebarOpen(false);
                  setSourceTab(null);
                }}
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

            {/* Right side: mobile search (transcripts only) + track progress button */}
            <div className="flex-1 flex items-center justify-end gap-2 pb-1">
              {courseTab === "transcripts" && (
                <div className="sm:hidden relative w-36">
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
              )}
              <TrackProgressButton
                user={user}
                isSubscribed={isSubscribed}
                toggling={subscriptionToggling}
                onToggle={handleSubscriptionToggle}
              />
            </div>
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
                      onSearchFocus={handleExpandSearch}
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
                      sourceTab={sourceTab}
                      onGoBack={() => {
                        if (sourceTab) {
                          setCourseTab(sourceTab);
                          setSourceTab(null);
                        }
                      }}
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
                  scrollRestorePos={curriculumScrollPosRef.current}
                  onScrollSave={(pos) => { curriculumScrollPosRef.current = pos; }}
                  completedCodes={user ? progressCodes : undefined}
                  togglingCodes={togglingCodes}
                  onToggleVideo={user ? toggleProgress : undefined}
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
