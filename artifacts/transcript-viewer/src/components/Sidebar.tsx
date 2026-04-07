import { useState } from "react";
import { BookOpen, ChevronDown, ChevronRight, GraduationCap, Video, AlertCircle, CheckCircle2, Circle, Loader2 } from "lucide-react";
import type { Week, Video as VideoType } from "@/types";
import { cn } from "@/lib/utils";
import curriculumData from "@/data/maths2/curriculum.json";
import type { CurriculumData } from "@/types";

const curriculum = curriculumData as unknown as CurriculumData;
const weekThemes: Record<string, string> = Object.fromEntries(
  curriculum.weeks.map((w) => [w.week, w.theme])
);

interface SidebarProps {
  weeks: Week[];
  selectedVideoId: string | null;
  onSelectVideo: (video: VideoType, week: Week) => void;
  searchQuery: string;
  completedCodes?: Set<string>;
  togglingCodes?: Set<string>;
  onToggleVideo?: (code: string) => void;
}

const weekColors: Record<string, string> = {
  week1:     "bg-blue-500",
  week2:     "bg-indigo-500",
  week3:     "bg-violet-500",
  week4:     "bg-purple-500",
  week5:     "bg-fuchsia-500",
  week6:     "bg-pink-500",
  week7:     "bg-rose-500",
  week8:     "bg-orange-500",
  week9:     "bg-amber-500",
  week10:    "bg-yellow-500",
  week11:    "bg-lime-500",
  refresher: "bg-teal-500",
  special:   "bg-cyan-500",
};

function getVideoType(code: string): "L" | "T" | null {
  if (/_L\d+$/.test(code)) return "L";
  if (/_T\d+$/.test(code)) return "T";
  return null;
}

const WEEK_ORDER = ["refresher", "week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "special"];

export function Sidebar({ weeks, selectedVideoId, onSelectVideo, searchQuery, completedCodes, togglingCodes, onToggleVideo }: SidebarProps) {
  const [expandedWeeks, setExpandedWeeks] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    const ordered = WEEK_ORDER.filter((k) => weeks.find((w) => w.key === k));
    if (ordered.length > 0) initial.add(ordered[0]);
    return initial;
  });

  const orderedWeeks = WEEK_ORDER.map((key) => weeks.find((w) => w.key === key)).filter(Boolean) as Week[];

  const toggleWeek = (key: string) => {
    setExpandedWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const totalAvailable = weeks.reduce((sum, w) => sum + w.videos.filter((v) => v.available).length, 0);

  const trackingEnabled = !!onToggleVideo;

  return (
    <nav className="h-full flex flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-sidebar-border flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
          <GraduationCap className="w-4 h-4 text-primary-foreground" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-sidebar-foreground truncate leading-snug">Maths for Data Science II</p>
          <p className="text-[10px] text-sidebar-foreground/50 truncate">Lin. Algebra &amp; Multivariable Calc</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin py-1.5">
        {orderedWeeks.map((week) => {
          const isExpanded = expandedWeeks.has(week.key);
          const colorClass = weekColors[week.key] ?? "bg-gray-500";
          const theme = weekThemes[week.key];
          const lectures = week.videos.filter((v) => /_L\d+$/.test(v.code));
          const tutorials = week.videos.filter((v) => /_T\d+$/.test(v.code));

          const weekDone = trackingEnabled && completedCodes
            ? week.videos.filter((v) => completedCodes.has("v:" + v.code)).length
            : 0;
          const weekTotal = week.videos.length;
          const weekAllDone = trackingEnabled && weekDone === weekTotal && weekTotal > 0;

          return (
            <div key={week.key}>
              <button
                onClick={() => toggleWeek(week.key)}
                className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-sidebar-accent transition-colors group"
              >
                <span className={cn(
                  "w-2 h-2 rounded-full flex-shrink-0 mt-0.5",
                  weekAllDone ? "bg-green-500" : colorClass
                )} />
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-sidebar-foreground/90 truncate leading-tight">
                      {week.label}
                    </span>
                    {lectures.length > 0 && tutorials.length > 0 && (
                      <span className="text-[9px] text-sidebar-foreground/40 flex-shrink-0">
                        {lectures.length}L·{tutorials.length}T
                      </span>
                    )}
                  </div>
                  {theme && (
                    <span className="text-[10px] text-sidebar-foreground/45 block truncate leading-tight">
                      {theme.length > 38 ? theme.slice(0, 36) + "…" : theme}
                    </span>
                  )}
                </div>
                {trackingEnabled && completedCodes && (
                  <span className={cn(
                    "text-[9px] font-mono flex-shrink-0",
                    weekAllDone ? "text-green-500" : "text-sidebar-foreground/35"
                  )}>
                    {weekDone}/{weekTotal}
                  </span>
                )}
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5 text-sidebar-foreground/40 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-sidebar-foreground/40 flex-shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div className="pb-1">
                  {week.videos.map((video) => {
                    const isSelected = video.id === selectedVideoId;
                    const vtype = getVideoType(video.code);
                    const vKey = "v:" + video.code;
                    const isDone = completedCodes?.has(vKey) ?? false;
                    const isToggling = togglingCodes?.has(vKey) ?? false;

                    return (
                      <div
                        key={video.id}
                        className={cn(
                          "flex items-center gap-1 pl-4 pr-2 transition-colors",
                          isSelected
                            ? "bg-sidebar-primary/20"
                            : "hover:bg-sidebar-accent"
                        )}
                      >
                        {trackingEnabled && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleVideo!(vKey);
                            }}
                            disabled={isToggling}
                            className="flex-shrink-0 p-0.5 text-sidebar-foreground/40 hover:text-green-500 transition-colors"
                            title={isDone ? "Mark incomplete" : "Mark complete"}
                          >
                            {isToggling ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : isDone ? (
                              <CheckCircle2 className="w-3 h-3 text-green-500" />
                            ) : (
                              <Circle className="w-3 h-3" />
                            )}
                          </button>
                        )}

                        <button
                          onClick={() => onSelectVideo(video, week)}
                          className={cn(
                            "flex-1 flex items-center gap-2 py-1.5 text-left min-w-0",
                            isSelected
                              ? "text-sidebar-primary"
                              : "text-sidebar-foreground/70 hover:text-sidebar-foreground"
                          )}
                        >
                          <span className="flex-shrink-0">
                            {video.available ? (
                              <Video className="w-2.5 h-2.5 opacity-50" />
                            ) : (
                              <AlertCircle className="w-2.5 h-2.5 text-destructive/60" />
                            )}
                          </span>

                          {vtype && (
                            <span className={cn(
                              "text-[9px] font-bold px-1 py-0.5 rounded flex-shrink-0 leading-none",
                              vtype === "L"
                                ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                                : "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400"
                            )}>
                              {vtype}
                            </span>
                          )}

                          <span className={cn(
                            "text-[11px] leading-snug truncate font-medium flex-1 min-w-0",
                            isDone && "line-through opacity-50"
                          )}>
                            {video.title}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="px-3 py-3 border-t border-sidebar-border flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3 h-3 text-sidebar-foreground/40" />
          <span className="text-[10px] text-sidebar-foreground/40">
            {totalAvailable} / {weeks.reduce((s, w) => s + w.videos.length, 0)} transcripts available
          </span>
        </div>
      </div>
    </nav>
  );
}
