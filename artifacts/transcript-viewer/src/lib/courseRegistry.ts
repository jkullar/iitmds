import type { TranscriptsData, CurriculumData } from "@/types";
import maths2Raw from "@/data/maths2/transcripts.json";
import maths2CurriculumRaw from "@/data/maths2/curriculum.json";
import maths2NotesRaw from "@/data/maths2/notes.json";

const maths2Transcripts = maths2Raw as unknown as TranscriptsData;
const maths2Curriculum = maths2CurriculumRaw as unknown as CurriculumData;
const maths2Notes = maths2NotesRaw as { id: string }[];

export interface CourseInfo {
  courseId: string;
  degreeId: string;
  degreeSlug: string;
  name: string;
  shortName: string;
  level: string;
  semester: string;
  transcripts: TranscriptsData;
  totalConcepts: number;
  totalNotes: number;
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
    totalConcepts: maths2Curriculum.weeks.reduce((s, w) => s + w.concepts.length, 0),
    totalNotes: maths2Notes.length,
  },
};

export function getCourseInfo(courseId: string): CourseInfo | undefined {
  return COURSE_REGISTRY[courseId];
}
