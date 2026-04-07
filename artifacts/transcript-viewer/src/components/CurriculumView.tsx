import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { ExternalLink, BookOpen, FlaskConical, ChevronDown, ChevronRight, GraduationCap, Search, X, Star, CheckCircle2, Circle, Loader2 } from "lucide-react";
import curriculumData from "@/data/maths2/curriculum.json";
import type { CurriculumData, CurriculumConcept, CurriculumWeek } from "@/types";
import { cn } from "@/lib/utils";

const curriculum = curriculumData as unknown as CurriculumData;

interface CurriculumViewProps {
  onNavigateToTranscript: (code: string, timestamp: string) => void;
  sidebarOpen: boolean;
  onSidebarClose: () => void;
  scrollRestorePos?: number;
  onScrollSave?: (pos: number) => void;
  completedCodes?: Set<string>;
  togglingCodes?: Set<string>;
  onToggleVideo?: (code: string) => void;
}

const WEEK_ORDER = [
  "refresher", "week1", "week2", "week3", "week4", "week5",
  "week6", "week7", "week8", "week9", "week10", "week11", "special",
];

const weekColors: Record<string, string> = {
  refresher: "bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800",
  week1: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  week2: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
  week3: "bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
  week4: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  week5: "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-800",
  week6: "bg-pink-500/15 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800",
  week7: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
  week8: "bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  week9: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  week10: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
  week11: "bg-lime-500/15 text-lime-700 dark:text-lime-300 border-lime-200 dark:border-lime-800",
  special: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
};

const weekDotColors: Record<string, string> = {
  refresher: "bg-teal-500",
  week1: "bg-blue-500",
  week2: "bg-indigo-500",
  week3: "bg-violet-500",
  week4: "bg-purple-500",
  week5: "bg-fuchsia-500",
  week6: "bg-pink-500",
  week7: "bg-rose-500",
  week8: "bg-orange-500",
  week9: "bg-amber-500",
  week10: "bg-yellow-500",
  week11: "bg-lime-500",
  special: "bg-cyan-500",
};

function ConceptCard({
  concept,
  weekKey,
  onNavigate,
  completedCodes,
  togglingCodes,
  onToggleVideo,
}: {
  concept: CurriculumConcept;
  weekKey: string;
  onNavigate: (code: string, timestamp: string) => void;
  completedCodes?: Set<string>;
  togglingCodes?: Set<string>;
  onToggleVideo?: (code: string) => void;
}) {
  const [practiceOpen, setPracticeOpen] = useState(false);
  const colorClass = weekColors[weekKey] ?? weekColors.week1;

  // Use concept name as the unique key (video code is shared across concepts)
  const conceptKey = concept.name;
  const isDone = completedCodes?.has(conceptKey) ?? false;
  const isToggling = togglingCodes?.has(conceptKey) ?? false;

  return (
    <div className={cn(
      "bg-card border rounded-lg overflow-hidden transition-colors",
      isDone ? "border-green-500/40 bg-green-500/5 dark:bg-green-500/5" : "border-card-border"
    )}>
      <div className="px-4 py-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap min-w-0">
            {/* Check/uncomplete button */}
            {onToggleVideo && (
              <button
                onClick={(e) => { e.stopPropagation(); onToggleVideo(conceptKey); }}
                disabled={isToggling}
                className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
                title={isDone ? "Mark incomplete" : "Mark complete"}
              >
                {isToggling ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : (
                  <Circle className="w-4 h-4" />
                )}
              </button>
            )}
            <h3 className={cn(
              "text-sm font-semibold leading-snug transition-colors",
              isDone ? "text-muted-foreground" : "text-foreground"
            )}>{concept.name}</h3>
            {concept.is_prerequisite && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 flex-shrink-0">
                <Star className="w-2.5 h-2.5" />
                Prereq
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Introduced</span>
          <button
            onClick={() => onNavigate(concept.introduced_in.code, concept.introduced_in.timestamp)}
            className={cn(
              "inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium border transition-colors hover:opacity-80",
              colorClass
            )}
          >
            <BookOpen className="w-3 h-3" />
            <span className="font-mono">{concept.introduced_in.code}</span>
            <span className="opacity-70">@ {concept.introduced_in.timestamp}</span>
          </button>
          {concept.introduced_in.examples_count != null && concept.introduced_in.examples_count > 0 && (
            <span className="text-[10px] text-muted-foreground">
              {concept.introduced_in.examples_count} example{concept.introduced_in.examples_count !== 1 ? "s" : ""}
            </span>
          )}
          <a
            href={concept.introduced_in.deep_link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-muted-foreground/50 hover:text-primary transition-colors"
            title="Open in YouTube"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {concept.practiced_in.length > 0 && (
        <div className="border-t border-card-border">
          <button
            onClick={() => setPracticeOpen((v) => !v)}
            className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-muted/40 transition-colors"
          >
            <FlaskConical className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            <span className="text-xs text-muted-foreground flex-1">
              Practiced in {concept.practiced_in.reduce((s, p) => s + p.problems_count, 0)} problem{concept.practiced_in.reduce((s, p) => s + p.problems_count, 0) !== 1 ? "s" : ""}
              {" "}across {concept.practiced_in.length} tutorial{concept.practiced_in.length !== 1 ? "s" : ""}
            </span>
            {practiceOpen ? (
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            )}
          </button>

          {practiceOpen && (
            <div className="px-4 pb-3 space-y-2.5">
              {concept.practiced_in.map((tut) => (
                <div key={tut.code} className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-semibold text-muted-foreground">{tut.code}</span>
                    <span className="text-[10px] text-muted-foreground/60">{tut.problems_count} problem{tut.problems_count !== 1 ? "s" : ""}</span>
                  </div>
                  {tut.problems.map((prob, i) => (
                    <button
                      key={i}
                      onClick={() => onNavigate(tut.code, prob.timestamp)}
                      className="w-full flex gap-2 p-2 rounded-md bg-muted/40 hover:bg-muted/70 transition-colors text-left group"
                    >
                      <span className="text-[10px] font-mono text-primary/60 flex-shrink-0 pt-0.5 min-w-[3rem] text-right">
                        {prob.timestamp}
                      </span>
                      <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors leading-snug">
                        {prob.summary}
                      </p>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function WeekSection({
  week,
  concepts,
  onNavigate,
  completedCodes,
  togglingCodes,
  onToggleVideo,
}: {
  week: CurriculumWeek;
  concepts: CurriculumConcept[];
  onNavigate: (code: string, timestamp: string) => void;
  completedCodes?: Set<string>;
  togglingCodes?: Set<string>;
  onToggleVideo?: (code: string) => void;
}) {
  const dotColor = weekDotColors[week.week] ?? "bg-gray-500";
  const practiceCount = concepts.reduce((s, c) => s + c.practiced_in.length, 0);
  const doneInWeek = completedCodes
    ? concepts.filter((c) => completedCodes.has(c.name)).length
    : null;

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-3 pb-2 border-b border-border">
        <span className={cn("w-3 h-3 rounded-full flex-shrink-0", dotColor)} />
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-bold text-foreground">
            {week.label}
            <span className="ml-2 text-xs font-normal text-muted-foreground">— {week.theme}</span>
          </h2>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground flex-shrink-0">
          {doneInWeek !== null && (
            <span className={cn(
              "flex items-center gap-1 font-mono font-medium",
              doneInWeek === concepts.length ? "text-green-600 dark:text-green-400" : "text-muted-foreground"
            )}>
              <CheckCircle2 className="w-3 h-3" />
              {doneInWeek}/{concepts.length}
            </span>
          )}
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {concepts.length} concepts
          </span>
          {practiceCount > 0 && (
            <span className="flex items-center gap-1">
              <FlaskConical className="w-3 h-3" />
              {concepts.reduce((s, c) => s + c.practiced_in.reduce((ss, p) => ss + p.problems_count, 0), 0)} problems
            </span>
          )}
        </div>
      </div>
      <div className="grid gap-2 grid-cols-2">
        {concepts.map((concept) => (
          <ConceptCard
            key={concept.name}
            concept={concept}
            weekKey={week.week}
            onNavigate={onNavigate}
            completedCodes={completedCodes}
            togglingCodes={togglingCodes}
            onToggleVideo={onToggleVideo}
          />
        ))}
      </div>
    </section>
  );
}

export function CurriculumView({
  onNavigateToTranscript, sidebarOpen, onSidebarClose, scrollRestorePos, onScrollSave,
  completedCodes, togglingCodes, onToggleVideo,
}: CurriculumViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Restore scroll position when returning from transcript.
  // Double-RAF defers until after content has fully painted so scrollHeight is correct.
  useEffect(() => {
    if (!scrollRestorePos) return;
    let raf1: number, raf2: number;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = scrollRestorePos;
        }
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Capture scroll position just before jumping to a transcript
  const handleNavigate = useCallback((code: string, timestamp: string) => {
    if (onScrollSave && scrollContainerRef.current) {
      onScrollSave(scrollContainerRef.current.scrollTop);
    }
    onNavigateToTranscript(code, timestamp);
  }, [onNavigateToTranscript, onScrollSave]);

  const sortedWeeks = useMemo(
    () =>
      WEEK_ORDER
        .map((key) => curriculum.weeks.find((w) => w.week === key))
        .filter(Boolean) as CurriculumWeek[],
    []
  );

  const filteredWeeks = useMemo(() => {
    const weeksToShow = selectedWeek
      ? sortedWeeks.filter((w) => w.week === selectedWeek)
      : sortedWeeks;

    if (!searchQuery.trim()) return weeksToShow.map((w) => ({ week: w, concepts: w.concepts }));

    const q = searchQuery.toLowerCase();
    return weeksToShow
      .map((w) => ({
        week: w,
        concepts: w.concepts.filter((c) => c.name.toLowerCase().includes(q)),
      }))
      .filter((w) => w.concepts.length > 0);
  }, [sortedWeeks, selectedWeek, searchQuery]);

  const totalShown = filteredWeeks.reduce((s, w) => s + w.concepts.length, 0);

  // Count only actual concept completions (concept names), not mixed video codes
  const conceptDoneCount = useMemo(() => {
    if (!completedCodes) return null;
    return sortedWeeks.reduce(
      (s, w) => s + w.concepts.filter((c) => completedCodes.has(c.name)).length,
      0
    );
  }, [completedCodes, sortedWeeks]);

  const handleSelectWeek = (weekKey: string | null) => {
    setSelectedWeek(weekKey);
    onSidebarClose();
  };

  return (
    <div className="h-full flex overflow-hidden">
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-20"
          onClick={onSidebarClose}
        />
      )}

      <aside
        className={cn(
          "flex-shrink-0 w-64 border-r border-border bg-card flex flex-col z-30",
          "md:flex md:relative md:translate-x-0",
          sidebarOpen ? "fixed inset-y-0 left-0 flex shadow-xl" : "hidden md:flex"
        )}
      >
        <div className="p-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              placeholder="Filter concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-8 pl-8 pr-7 rounded-md text-sm bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          <button
            onClick={() => handleSelectWeek(null)}
            className={cn(
              "w-full text-left px-3 py-2 flex items-center gap-2.5 text-sm transition-colors",
              selectedWeek === null
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            )}
          >
            <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="flex-1 leading-tight">All weeks</span>
            {conceptDoneCount !== null ? (
              <span className="text-[10px] tabular-nums font-medium text-green-600 dark:text-green-400">
                {conceptDoneCount}/{curriculum.total_concepts}
              </span>
            ) : (
              <span className="text-[10px] tabular-nums opacity-60">{curriculum.total_concepts}</span>
            )}
          </button>

          <div className="my-1 mx-3 border-t border-border/50" />

          {sortedWeeks.map((w) => {
            const dot = weekDotColors[w.week] ?? "bg-gray-500";
            const weekDone = completedCodes
              ? w.concepts.filter((c) => completedCodes.has(c.name)).length
              : null;
            const allDone = weekDone !== null && weekDone === w.concepts.length;
            return (
              <button
                key={w.week}
                onClick={() => handleSelectWeek(w.week)}
                className={cn(
                  "w-full text-left px-3 py-2 flex items-center gap-2.5 text-sm transition-colors",
                  selectedWeek === w.week
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                {allDone ? (
                  <CheckCircle2 className="w-2.5 h-2.5 flex-shrink-0 text-green-500" />
                ) : (
                  <span className={cn("w-2 h-2 rounded-full flex-shrink-0", dot)} />
                )}
                <span className="flex-1 leading-tight text-xs">{w.label}</span>
                {weekDone !== null ? (
                  <span className={cn(
                    "text-[10px] tabular-nums",
                    allDone ? "text-green-600 dark:text-green-400 font-medium" : "opacity-60"
                  )}>
                    {weekDone}/{w.concepts.length}
                  </span>
                ) : (
                  <span className="text-[10px] tabular-nums opacity-60">{w.concepts.length}</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="p-3 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{curriculum.total_concepts} concepts</span>
          <span className="flex items-center gap-1"><FlaskConical className="w-3 h-3" />{curriculum.total_problems} problems</span>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {(searchQuery || selectedWeek) && (
          <div className="flex-shrink-0 px-5 pt-3 pb-0">
            <p className="text-xs text-muted-foreground">
              Showing <span className="font-medium text-foreground">{totalShown}</span> concept{totalShown !== 1 ? "s" : ""}
              {selectedWeek && <> in <span className="font-medium text-foreground">{sortedWeeks.find(w => w.week === selectedWeek)?.label}</span></>}
            </p>
          </div>
        )}

        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto scrollbar-thin px-5 py-4">
          {filteredWeeks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 gap-2 text-center">
              <p className="text-sm font-medium text-foreground">No concepts match</p>
              <p className="text-xs text-muted-foreground">Try a different search term</p>
            </div>
          ) : (
            filteredWeeks.map(({ week, concepts }) => (
              <WeekSection
                key={week.week}
                week={week}
                concepts={concepts}
                onNavigate={handleNavigate}
                completedCodes={completedCodes}
                togglingCodes={togglingCodes}
                onToggleVideo={onToggleVideo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
