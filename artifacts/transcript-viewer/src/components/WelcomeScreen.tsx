import { useMemo } from "react";
import { BookOpen, Search, Video, GraduationCap, FileText, Map, ChevronRight } from "lucide-react";
import type { TranscriptsData, Video as VideoType, Week } from "@/types";
import { cn } from "@/lib/utils";
import curriculumData from "@/data/maths2/curriculum.json";
import type { CurriculumData } from "@/types";

const curriculum = curriculumData as unknown as CurriculumData;

const weekThemeMap: Record<string, { theme: string; concepts: number }> = Object.fromEntries(
  curriculum.weeks.map((w) => [w.week, { theme: w.theme, concepts: w.concepts.length }])
);

const WEEK_COLORS: Record<string, { bg: string; border: string; text: string; dot: string; hover: string }> = {
  refresher: { bg: "bg-teal-50 dark:bg-teal-950/30",    border: "border-teal-200 dark:border-teal-800",      text: "text-teal-700 dark:text-teal-300",    dot: "bg-teal-500",    hover: "hover:border-teal-400 dark:hover:border-teal-600" },
  week1:     { bg: "bg-blue-50 dark:bg-blue-950/30",    border: "border-blue-200 dark:border-blue-800",      text: "text-blue-700 dark:text-blue-300",    dot: "bg-blue-500",    hover: "hover:border-blue-400 dark:hover:border-blue-600" },
  week2:     { bg: "bg-indigo-50 dark:bg-indigo-950/30",border: "border-indigo-200 dark:border-indigo-800",  text: "text-indigo-700 dark:text-indigo-300",dot: "bg-indigo-500",  hover: "hover:border-indigo-400 dark:hover:border-indigo-600" },
  week3:     { bg: "bg-violet-50 dark:bg-violet-950/30",border: "border-violet-200 dark:border-violet-800",  text: "text-violet-700 dark:text-violet-300",dot: "bg-violet-500",  hover: "hover:border-violet-400 dark:hover:border-violet-600" },
  week4:     { bg: "bg-purple-50 dark:bg-purple-950/30",border: "border-purple-200 dark:border-purple-800",  text: "text-purple-700 dark:text-purple-300",dot: "bg-purple-500",  hover: "hover:border-purple-400 dark:hover:border-purple-600" },
  week5:     { bg: "bg-fuchsia-50 dark:bg-fuchsia-950/30",border:"border-fuchsia-200 dark:border-fuchsia-800",text:"text-fuchsia-700 dark:text-fuchsia-300",dot:"bg-fuchsia-500",hover:"hover:border-fuchsia-400 dark:hover:border-fuchsia-600" },
  week6:     { bg: "bg-pink-50 dark:bg-pink-950/30",    border: "border-pink-200 dark:border-pink-800",      text: "text-pink-700 dark:text-pink-300",    dot: "bg-pink-500",    hover: "hover:border-pink-400 dark:hover:border-pink-600" },
  week7:     { bg: "bg-rose-50 dark:bg-rose-950/30",    border: "border-rose-200 dark:border-rose-800",      text: "text-rose-700 dark:text-rose-300",    dot: "bg-rose-500",    hover: "hover:border-rose-400 dark:hover:border-rose-600" },
  week8:     { bg: "bg-orange-50 dark:bg-orange-950/30",border: "border-orange-200 dark:border-orange-800",  text: "text-orange-700 dark:text-orange-300",dot: "bg-orange-500",  hover: "hover:border-orange-400 dark:hover:border-orange-600" },
  week9:     { bg: "bg-amber-50 dark:bg-amber-950/30",  border: "border-amber-200 dark:border-amber-800",    text: "text-amber-700 dark:text-amber-300",  dot: "bg-amber-500",   hover: "hover:border-amber-400 dark:hover:border-amber-600" },
  week10:    { bg: "bg-yellow-50 dark:bg-yellow-950/30",border: "border-yellow-200 dark:border-yellow-800",  text: "text-yellow-700 dark:text-yellow-300",dot: "bg-yellow-500",  hover: "hover:border-yellow-400 dark:hover:border-yellow-600" },
  week11:    { bg: "bg-lime-50 dark:bg-lime-950/30",    border: "border-lime-200 dark:border-lime-800",      text: "text-lime-700 dark:text-lime-300",    dot: "bg-lime-500",    hover: "hover:border-lime-400 dark:hover:border-lime-600" },
  special:   { bg: "bg-cyan-50 dark:bg-cyan-950/30",    border: "border-cyan-200 dark:border-cyan-800",      text: "text-cyan-700 dark:text-cyan-300",    dot: "bg-cyan-500",    hover: "hover:border-cyan-400 dark:hover:border-cyan-600" },
};

const WEEK_ORDER = ["refresher", "week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "special"];

interface WelcomeScreenProps {
  data: TranscriptsData;
  onSearchFocus: () => void;
  onSelectVideo: (video: VideoType, week: Week) => void;
  onOpenNotes: () => void;
  onOpenCurriculum: () => void;
}

export function WelcomeScreen({ data, onSearchFocus, onSelectVideo, onOpenNotes, onOpenCurriculum }: WelcomeScreenProps) {
  const orderedWeeks = useMemo(() => {
    return WEEK_ORDER.map((key) => data.weeks.find((w) => w.key === key)).filter(Boolean) as Week[];
  }, [data.weeks]);

  const totalLectures = data.weeks.reduce((sum, w) => sum + w.videos.filter((v) => /_L\d+$/.test(v.code)).length, 0);
  const totalTutorials = data.weeks.reduce((sum, w) => sum + w.videos.filter((v) => /_T\d+$/.test(v.code)).length, 0);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin">
      <div className="max-w-4xl mx-auto px-5 py-7">

        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">Foundation</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">Semester 2</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs font-mono text-muted-foreground">BSCMA1002</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground leading-tight">Mathematics for Data Science II</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Linear Algebra &amp; Multivariable Calculus</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
          {[
            { label: "Weeks",       value: data.weeks.length,       icon: GraduationCap, color: "text-primary",       sub: "of content"       },
            { label: "Transcripts", value: data.availableVideos,    icon: Video,          color: "text-blue-500",     sub: "videos available"  },
            { label: "Concepts",    value: 270,                      icon: BookOpen,       color: "text-violet-500",   sub: "mapped & linked"   },
            { label: "Notes",       value: 18,                       icon: FileText,       color: "text-emerald-500",  sub: "with timestamps"   },
          ].map(({ label, value, icon: Icon, color, sub }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-3.5 flex items-center gap-3 sm:flex-col sm:items-center sm:text-center sm:gap-1.5 sm:p-4">
              <Icon className={cn("w-4 h-4 flex-shrink-0 sm:mx-auto", color)} />
              <div>
                <div className="text-xl font-bold text-foreground leading-none">{value}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5 hidden sm:block">{sub}</div>
                <div className="text-xs text-muted-foreground sm:hidden">{label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={onSearchFocus}
            className="flex items-center gap-2 h-8 px-3 rounded-lg border border-border bg-card hover:bg-muted/60 text-xs font-medium text-foreground transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            Search all transcripts
          </button>
          <button
            onClick={onOpenNotes}
            className="flex items-center gap-2 h-8 px-3 rounded-lg border border-border bg-card hover:bg-muted/60 text-xs font-medium text-foreground transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-500" />
            Browse Notes
            <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-full font-semibold">18</span>
          </button>
          <button
            onClick={onOpenCurriculum}
            className="flex items-center gap-2 h-8 px-3 rounded-lg border border-border bg-card hover:bg-muted/60 text-xs font-medium text-foreground transition-colors"
          >
            <Map className="w-3.5 h-3.5 text-violet-500" />
            Curriculum Map
            <span className="text-[10px] bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 px-1.5 py-0.5 rounded-full font-semibold">270 concepts</span>
          </button>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Course Content</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {orderedWeeks.map((week) => {
              const themeInfo = weekThemeMap[week.key];
              const colors = WEEK_COLORS[week.key] ?? WEEK_COLORS.week1;
              const lectures = week.videos.filter((v) => /_L\d+$/.test(v.code));
              const tutorials = week.videos.filter((v) => /_T\d+$/.test(v.code));
              const otherVideos = week.videos.filter((v) => !/_[LT]\d+$/.test(v.code));
              const firstAvailable = week.videos.find((v) => v.available);
              const availableCount = week.videos.filter((v) => v.available).length;

              const weekLabel =
                week.key === "refresher" ? "Refresher" :
                week.key === "special"   ? "Special" :
                week.label;

              return (
                <button
                  key={week.key}
                  onClick={() => firstAvailable && onSelectVideo(firstAvailable, week)}
                  disabled={!firstAvailable}
                  className={cn(
                    "text-left p-3.5 rounded-xl border transition-all group",
                    colors.bg, colors.border, colors.hover,
                    firstAvailable
                      ? "hover:shadow-sm cursor-pointer"
                      : "opacity-50 cursor-default"
                  )}
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className={cn("w-2 h-2 rounded-full flex-shrink-0 mt-0.5", colors.dot)} />
                      <span className={cn("text-[11px] font-bold uppercase tracking-wide", colors.text)}>
                        {weekLabel}
                      </span>
                    </div>
                    {firstAvailable && (
                      <ChevronRight className={cn("w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0 mt-0.5", colors.text)} />
                    )}
                  </div>

                  <p className="text-xs font-semibold text-foreground leading-snug mb-2">
                    {themeInfo?.theme ?? week.label}
                  </p>

                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
                    {themeInfo && (
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-2.5 h-2.5" />
                        {themeInfo.concepts} concepts
                      </span>
                    )}
                    {lectures.length > 0 && (
                      <span>{lectures.length} lectures</span>
                    )}
                    {tutorials.length > 0 && (
                      <span>{tutorials.length} tutorials</span>
                    )}
                    {otherVideos.length > 0 && (
                      <span>{otherVideos.length} videos</span>
                    )}
                    {availableCount < week.videos.length && (
                      <span className="text-destructive/70">{availableCount}/{week.videos.length} available</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-[11px] text-muted-foreground text-center mt-6">
          {totalLectures} lectures &middot; {totalTutorials} tutorials &middot; click any week card to start
        </p>
      </div>
    </div>
  );
}
