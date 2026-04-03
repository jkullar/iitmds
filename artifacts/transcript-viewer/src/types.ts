export interface TranscriptSegment {
  time: number;
  timestamp: string;
  text: string;
}

export interface Video {
  id: string;
  code: string;
  title: string;
  youtubeUrl: string;
  available: boolean;
  unavailableReason?: string;
  segments: TranscriptSegment[];
}

export interface Week {
  key: string;
  label: string;
  topic: string;
  videos: Video[];
}

export interface TranscriptsData {
  weeks: Week[];
  totalVideos: number;
  availableVideos: number;
}

export interface SearchResult {
  video: Video;
  week: Week;
  matchingSegments: Array<TranscriptSegment & { segmentIndex: number }>;
}
