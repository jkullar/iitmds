import type { TranscriptsData } from "@/types";
import maths2Raw from "@/data/maths2/transcripts.json";

const maths2Transcripts = maths2Raw as unknown as TranscriptsData;

export interface CourseInfo {
  courseId: string;
  degreeId: string;
  degreeSlug: string;
  name: string;
  shortName: string;
  level: string;
  semester: string;
  transcripts: TranscriptsData;
}

export const COURSE_REGISTRY: Record<string, CourseInfo> = {
  maths2: {
    courseId: "maths2",
    degreeId: "bs-data-science",
    degreeSlug: "bs-data-science",
    name: "Mathematics for Data Science II",
    shortName: "Maths 2",
    level: "Foundation",
    semester: "Semester 2",
    transcripts: maths2Transcripts,
  },
};

export function getCourseInfo(courseId: string): CourseInfo | undefined {
  return COURSE_REGISTRY[courseId];
}
