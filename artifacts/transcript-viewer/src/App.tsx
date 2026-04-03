import { useState, useCallback, useRef, useMemo, useEffect } from "react";
import { Search, X, Moon, Sun, Menu, ChevronLeft } from "lucide-react";
import transcriptsData from "@/data/transcripts.json";
import type { TranscriptsData, Video, Week } from "@/types";
import { searchTranscripts } from "@/lib/search";
import { Sidebar } from "@/components/Sidebar";
import { TranscriptView } from "@/components/TranscriptView";
import { SearchResults } from "@/components/SearchResults";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { cn } from "@/lib/utils";

const data = transcriptsData as unknown as TranscriptsData;

type ViewMode = "welcome" | "transcript" | "search";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
  const [highlightSegmentIndex, setHighlightSegmentIndex] = useState<number | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery]);

  const searchResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return searchTranscripts(data, debouncedQuery, null);
  }, [debouncedQuery]);

  const viewMode: ViewMode = useMemo(() => {
    if (debouncedQuery.trim()) return "search";
    if (selectedVideo) return "transcript";
    return "welcome";
  }, [debouncedQuery, selectedVideo]);

  const handleSelectVideo = useCallback(
    (video: Video, week: Week, segmentIndex?: number) => {
      setSelectedVideo(video);
      setSelectedWeek(week);
      setHighlightSegmentIndex(segmentIndex ?? null);
      setSearchQuery("");
      setDebouncedQuery("");
      setSidebarOpen(false);
    },
    []
  );

  const handleSearchResultSelect = useCallback(
    (video: Video, week: Week, segmentIndex?: number) => {
      setSelectedVideo(video);
      setSelectedWeek(week);
      setHighlightSegmentIndex(segmentIndex ?? null);
      setDebouncedQuery("");
      setSearchQuery("");
    },
    []
  );

  const clearSearch = () => {
    setSearchQuery("");
    setDebouncedQuery("");
    searchInputRef.current?.focus();
  };

  const focusSearch = () => {
    searchInputRef.current?.focus();
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <header className="flex-shrink-0 h-12 border-b border-border bg-card flex items-center px-3 gap-2 z-10">
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors"
        >
          {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Search transcripts... (e.g. eigenvalue, gradient)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-8 pl-8 pr-8 rounded-md text-sm bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <button
          onClick={() => setDarkMode((v) => !v)}
          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-20"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside
          className={cn(
            "flex-shrink-0 w-64 border-r border-sidebar-border overflow-hidden z-30",
            "md:flex md:flex-col md:relative md:translate-x-0",
            sidebarOpen
              ? "fixed inset-y-0 left-0 top-12 flex flex-col shadow-xl"
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

        <main className="flex-1 overflow-hidden relative">
          {viewMode === "welcome" && (
            <WelcomeScreen data={data} onSearchFocus={focusSearch} />
          )}
          {viewMode === "transcript" && selectedVideo && selectedWeek && (
            <TranscriptView
              video={selectedVideo}
              week={selectedWeek}
              searchQuery=""
              highlightSegmentIndex={highlightSegmentIndex}
            />
          )}
          {viewMode === "search" && (
            <SearchResults
              results={searchResults}
              query={debouncedQuery}
              onSelectVideo={handleSearchResultSelect}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
