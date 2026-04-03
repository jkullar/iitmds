import { BookOpen, Search, Video, GraduationCap } from "lucide-react";
import type { TranscriptsData } from "@/types";

interface WelcomeScreenProps {
  data: TranscriptsData;
  onSearchFocus: () => void;
}

export function WelcomeScreen({ data, onSearchFocus }: WelcomeScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 text-center">
      <div className="max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Linear Algebra & Multivariable Calculus
        </h1>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Browse and search through {data.availableVideos} video transcripts across {data.weeks.length} weeks of course material.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-card border border-card-border rounded-xl p-4">
            <div className="text-2xl font-bold text-primary">{data.weeks.length}</div>
            <div className="text-xs text-muted-foreground mt-0.5">Weeks</div>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-4">
            <div className="text-2xl font-bold text-primary">{data.totalVideos}</div>
            <div className="text-xs text-muted-foreground mt-0.5">Videos</div>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-4">
            <div className="text-2xl font-bold text-primary">{data.availableVideos}</div>
            <div className="text-xs text-muted-foreground mt-0.5">Transcripts</div>
          </div>
        </div>

        <div className="space-y-3 text-left">
          <div className="flex items-center gap-3 p-3 bg-card border border-card-border rounded-lg">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <Video className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-foreground">Browse by week</p>
              <p className="text-xs text-muted-foreground">Select any video from the sidebar</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-card border border-card-border rounded-lg">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
              <Search className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>
            <button onClick={onSearchFocus} className="text-left">
              <p className="text-xs font-medium text-foreground">Full-text search</p>
              <p className="text-xs text-muted-foreground">Search across all transcripts instantly</p>
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-card border border-card-border rounded-lg">
            <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-foreground">Jump to timestamps</p>
              <p className="text-xs text-muted-foreground">Click any timestamp to open on YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
