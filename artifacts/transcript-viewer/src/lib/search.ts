import type { TranscriptsData, SearchResult, Week, Video, TranscriptSegment } from "@/types";

export function searchTranscripts(
  data: TranscriptsData,
  query: string,
  weekFilter: string | null
): SearchResult[] {
  if (!query.trim()) return [];

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 1);

  if (terms.length === 0) return [];

  const results: SearchResult[] = [];

  for (const week of data.weeks) {
    if (weekFilter && week.key !== weekFilter) continue;

    for (const video of week.videos) {
      if (!video.available) continue;

      const matchingSegments: Array<TranscriptSegment & { segmentIndex: number }> = [];

      for (let i = 0; i < video.segments.length; i++) {
        const seg = video.segments[i];
        const lower = seg.text.toLowerCase();
        const allMatch = terms.every((term) => lower.includes(term));
        if (allMatch) {
          matchingSegments.push({ ...seg, segmentIndex: i });
        }
      }

      if (matchingSegments.length > 0) {
        results.push({ video, week, matchingSegments });
      }
    }
  }

  // Results are already in week/video order from iterating data.weeks in sequence

  return results;
}

export function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;
  const terms = query
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 1);
  if (terms.length === 0) return text;

  const pattern = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

export function getFullTranscriptText(video: Video): string {
  return video.segments.map((s) => `[${s.timestamp}] ${s.text}`).join("\n");
}

export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
