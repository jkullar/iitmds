import { Search, ChevronRight, FileText } from "lucide-react";
import type { SearchResult, Week, Video } from "@/types";
import { highlightText } from "@/lib/search";

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  onSelectVideo: (video: Video, week: Week, segmentIndex?: number) => void;
}

export function SearchResults({ results, query, onSelectVideo }: SearchResultsProps) {
  if (results.length === 0 && query.trim()) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-6">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">No results found</p>
          <p className="text-xs text-muted-foreground mt-1">
            Try different keywords or check spelling
          </p>
        </div>
      </div>
    );
  }

  const totalMatches = results.reduce((sum, r) => sum + r.matchingSegments.length, 0);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 px-5 py-3 border-b border-border bg-card">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            Search Results
          </h2>
          <span className="text-xs text-muted-foreground">
            {totalMatches} matches in {results.length} video{results.length !== 1 ? "s" : ""}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">
          Results for <span className="font-medium text-amber-600 dark:text-amber-400">"{query}"</span> — ordered by week
        </p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin divide-y divide-border">
        {results.map((result) => (
          <div key={result.video.id} className="px-5 py-3">
            <button
              onClick={() => onSelectVideo(result.video, result.week)}
              className="w-full text-left group flex items-start gap-2 mb-2"
            >
              <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-mono font-semibold text-primary/80">
                    {result.video.code}
                  </span>
                  <span className="text-xs text-muted-foreground">&mdash;</span>
                  <span className="text-xs text-muted-foreground">{result.week.label}</span>
                </div>
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                  {result.video.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {result.matchingSegments.length} matching segment{result.matchingSegments.length !== 1 ? "s" : ""}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
            </button>

            <div className="space-y-1 ml-6">
              {result.matchingSegments.slice(0, 3).map((seg) => (
                <button
                  key={seg.segmentIndex}
                  onClick={() => onSelectVideo(result.video, result.week, seg.segmentIndex)}
                  className="w-full text-left flex gap-2 p-2 rounded-md hover:bg-muted/60 transition-colors group/seg"
                >
                  <span className="text-xs font-mono text-primary/60 flex-shrink-0 pt-px min-w-[3rem] text-right">
                    {seg.timestamp}
                  </span>
                  <p
                    className="text-xs text-muted-foreground group-hover/seg:text-foreground transition-colors leading-relaxed highlight-text"
                    dangerouslySetInnerHTML={{ __html: highlightText(seg.text, query) }}
                  />
                </button>
              ))}
              {result.matchingSegments.length > 3 && (
                <button
                  onClick={() => onSelectVideo(result.video, result.week)}
                  className="text-xs text-primary/70 hover:text-primary ml-14 transition-colors"
                >
                  +{result.matchingSegments.length - 3} more matches →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
