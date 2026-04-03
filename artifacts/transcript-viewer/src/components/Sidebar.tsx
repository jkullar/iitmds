import { useState } from "react";
import { BookOpen, ChevronDown, ChevronRight, GraduationCap, Video, AlertCircle } from "lucide-react";
import type { Week, Video as VideoType } from "@/types";
import { cn } from "@/lib/utils";

interface SidebarProps {
  weeks: Week[];
  selectedVideoId: string | null;
  onSelectVideo: (video: VideoType, week: Week) => void;
  searchQuery: string;
}

export function Sidebar({ weeks, selectedVideoId, onSelectVideo, searchQuery }: SidebarProps) {
  const [expandedWeeks, setExpandedWeeks] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (weeks.length > 0) initial.add(weeks[0].key);
    return initial;
  });

  const toggleWeek = (key: string) => {
    setExpandedWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const weekColors: Record<string, string> = {
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
    refresher: "bg-teal-500",
    special: "bg-cyan-500",
  };

  return (
    <nav className="h-full flex flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-2.5 px-4 py-4 border-b border-sidebar-border flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
          <GraduationCap className="w-4.5 h-4.5 text-primary-foreground" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-sidebar-foreground truncate leading-tight">Lin. Algebra</p>
          <p className="text-xs text-sidebar-foreground/50 truncate leading-tight">& Multivariable Calc</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin py-2">
        {weeks.map((week) => {
          const isExpanded = expandedWeeks.has(week.key);
          const availableCount = week.videos.filter((v) => v.available).length;
          const colorClass = weekColors[week.key] ?? "bg-gray-500";

          return (
            <div key={week.key}>
              <button
                onClick={() => toggleWeek(week.key)}
                className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-sidebar-accent transition-colors group"
              >
                <span className={cn("w-2 h-2 rounded-full flex-shrink-0", colorClass)} />
                <div className="flex-1 min-w-0 text-left">
                  <span className="text-xs font-semibold text-sidebar-foreground/90 block truncate">
                    {week.label}
                  </span>
                  <span className="text-[10px] text-sidebar-foreground/45 block truncate leading-tight">
                    {availableCount}/{week.videos.length} videos
                  </span>
                </div>
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
                    return (
                      <button
                        key={video.id}
                        onClick={() => onSelectVideo(video, week)}
                        className={cn(
                          "w-full flex items-start gap-2 pl-7 pr-3 py-1.5 transition-colors text-left group",
                          isSelected
                            ? "bg-sidebar-primary/20 text-sidebar-primary"
                            : "hover:bg-sidebar-accent text-sidebar-foreground/70 hover:text-sidebar-foreground"
                        )}
                      >
                        <span className="flex-shrink-0 mt-0.5">
                          {video.available ? (
                            <Video className="w-3 h-3 opacity-60" />
                          ) : (
                            <AlertCircle className="w-3 h-3 text-destructive/70" />
                          )}
                        </span>
                        <span className="text-[11px] leading-snug truncate font-medium">
                          <span className="opacity-60 font-mono text-[10px]">{video.code}</span>
                          <br />
                          <span className="text-[11px]">{video.title}</span>
                        </span>
                      </button>
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
            {weeks.reduce((sum, w) => sum + w.videos.filter((v) => v.available).length, 0)} transcripts available
          </span>
        </div>
      </div>
    </nav>
  );
}
