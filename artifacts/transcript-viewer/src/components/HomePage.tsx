import { useState } from "react";
import { BookOpen, Lock, ChevronRight, GraduationCap, FlaskConical, FileText, Zap, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { DonateModal } from "./DonateModal";

interface HomePageProps {
  onOpenCourse: (courseId: string) => void;
}

interface Course {
  id: string;
  code: string;
  name: string;
  available: boolean;
  stats?: { videos: number; transcripts: number; concepts: number; notes?: number };
}

interface Semester {
  label: string;
  courses: Course[];
}

interface Program {
  id: string;
  label: string;
  shortLabel: string;
  duration: string;
  color: string;
  dotColor: string;
  semesters: Semester[];
}

const PROGRAMS: Program[] = [
  {
    id: "foundation",
    label: "Foundation",
    shortLabel: "Foundation",
    duration: "Year 1",
    color: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30",
    dotColor: "bg-blue-500",
    semesters: [
      {
        label: "Semester 1",
        courses: [
          { id: "", code: "BSCMA1001", name: "Mathematics for Data Science I", available: false },
          { id: "", code: "BSCST1001", name: "Statistics for Data Science I", available: false },
          { id: "", code: "BSCS1001", name: "Computational Thinking", available: false },
          { id: "", code: "BSHS1001", name: "English I", available: false },
        ],
      },
      {
        label: "Semester 2",
        courses: [
          {
            id: "maths2",
            code: "BSCMA1002",
            name: "Mathematics for Data Science II",
            available: true,
            stats: { videos: 110, transcripts: 109, concepts: 270, notes: 18 },
          },
          { id: "", code: "BSCST1002", name: "Statistics for Data Science II", available: false },
          { id: "", code: "BSCS1002", name: "Introduction to Python", available: false },
          { id: "", code: "BSHS1002", name: "English II", available: false },
        ],
      },
    ],
  },
  {
    id: "diploma1",
    label: "Diploma Level 1",
    shortLabel: "Diploma 1",
    duration: "Year 2",
    color: "border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/30",
    dotColor: "bg-violet-500",
    semesters: [
      {
        label: "Semester 3",
        courses: [
          { id: "", code: "BSCMA2001", name: "Mathematics for Data Science III", available: false },
          { id: "", code: "BSCST2001", name: "Statistical Inference", available: false },
          { id: "", code: "BSCS2001", name: "Introduction to Data Science", available: false },
        ],
      },
      {
        label: "Semester 4",
        courses: [
          { id: "", code: "BSCMA2002", name: "Business Data Management", available: false },
          { id: "", code: "BSCS2002", name: "Machine Learning Foundations", available: false },
          { id: "", code: "BSCST2002", name: "Business Analytics", available: false },
        ],
      },
    ],
  },
  {
    id: "diploma2",
    label: "Diploma Level 2",
    shortLabel: "Diploma 2",
    duration: "Year 3",
    color: "border-fuchsia-200 dark:border-fuchsia-800 bg-fuchsia-50 dark:bg-fuchsia-950/30",
    dotColor: "bg-fuchsia-500",
    semesters: [
      {
        label: "Semester 5",
        courses: [
          { id: "", code: "BSCS3001", name: "Machine Learning Practice", available: false },
          { id: "", code: "BSCS3002", name: "Tools in Data Science", available: false },
          { id: "", code: "BSCST3001", name: "Modern Application Development I", available: false },
        ],
      },
      {
        label: "Semester 6",
        courses: [
          { id: "", code: "BSCS3003", name: "Deep Learning", available: false },
          { id: "", code: "BSCST3002", name: "Modern Application Development II", available: false },
          { id: "", code: "BSCS3004", name: "AI: Search Methods for Problem Solving", available: false },
        ],
      },
    ],
  },
  {
    id: "bsc",
    label: "BSc",
    shortLabel: "BSc",
    duration: "Year 4 (Exit)",
    color: "border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30",
    dotColor: "bg-orange-500",
    semesters: [
      {
        label: "Semester 7",
        courses: [
          { id: "", code: "BSCS4001", name: "Programming Concepts with C++", available: false },
          { id: "", code: "BSCS4002", name: "Software Engineering", available: false },
          { id: "", code: "BSCS4003", name: "Databases and Big Data Systems", available: false },
        ],
      },
      {
        label: "Semester 8",
        courses: [
          { id: "", code: "BSCS4004", name: "Computer Systems Design", available: false },
          { id: "", code: "BSCS4005", name: "Industry Capstone Project", available: false },
        ],
      },
    ],
  },
  {
    id: "bs",
    label: "BS",
    shortLabel: "BS",
    duration: "Years 3–4 (Research)",
    color: "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30",
    dotColor: "bg-emerald-500",
    semesters: [
      {
        label: "Advanced Track",
        courses: [
          { id: "", code: "BSCS5001", name: "Algorithmic Thinking", available: false },
          { id: "", code: "BSCS5002", name: "Strategies for Professional Growth", available: false },
          { id: "", code: "BSCS5003", name: "Thesis / Research Project", available: false },
        ],
      },
    ],
  },
];

function CourseCard({ course, onOpen }: { course: Course; onOpen: () => void }) {
  if (!course.available) {
    return (
      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border/50 bg-background/40 opacity-60">
        <Lock className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
        <div className="min-w-0">
          <p className="text-xs font-mono text-muted-foreground/60">{course.code}</p>
          <p className="text-xs text-muted-foreground/80 leading-snug truncate">{course.name}</p>
        </div>
        <span className="ml-auto text-[10px] text-muted-foreground/50 flex-shrink-0">Soon</span>
      </div>
    );
  }

  return (
    <button
      onClick={onOpen}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all text-left group"
    >
      <div className="w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
        <BookOpen className="w-3.5 h-3.5 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-mono font-semibold text-primary/80">{course.code}</p>
        <p className="text-xs font-medium text-foreground leading-snug">{course.name}</p>
        {course.stats && (
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] text-muted-foreground">{course.stats.videos} videos</span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-[10px] text-muted-foreground">{course.stats.transcripts} transcripts</span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-[10px] text-muted-foreground">{course.stats.concepts} concepts</span>
            {course.stats.notes != null && (
              <>
                <span className="text-muted-foreground/30">·</span>
                <span className="text-[10px] text-muted-foreground">{course.stats.notes} notes</span>
              </>
            )}
          </div>
        )}
      </div>
      <ChevronRight className="w-4 h-4 text-primary/60 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
    </button>
  );
}

export function HomePage({ onOpenCourse }: HomePageProps) {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            BS in Data Science
          </h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Study materials, transcripts, concept maps and notes for every course in the degree.
          </p>
          <div className="flex items-center justify-center gap-6 mt-5">
            {[
              { icon: GraduationCap, label: "46 Courses" },
              { icon: FlaskConical, label: "12,000+ Concepts" },
              { icon: FileText, label: "5,000+ Transcripts" },
              { icon: BookOpen, label: "800+ Notes" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {PROGRAMS.map((prog) => (
            <div key={prog.id} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground">
              <span className={cn("w-2 h-2 rounded-full", prog.dotColor)} />
              {prog.shortLabel}
              <span className="text-muted-foreground/50">{prog.duration}</span>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className={cn("rounded-xl border p-5", program.color)}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className={cn("w-3 h-3 rounded-full flex-shrink-0", program.dotColor)} />
                <h2 className="text-sm font-bold text-foreground">{program.label}</h2>
                <span className="text-xs text-muted-foreground">{program.duration}</span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {program.semesters.map((sem) => (
                  <div key={sem.label}>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {sem.label}
                    </h3>
                    <div className="space-y-1.5">
                      {sem.courses.map((course) => (
                        <CourseCard
                          key={course.code}
                          course={course}
                          onOpen={() => onOpenCourse(course.id)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>🇮🇳 Made in India</span>
            <span className="text-muted-foreground/30">·</span>
            <span>✨ Made with AI</span>
          </div>
          <p className="text-center text-xs text-muted-foreground max-w-md">
            More courses will be added over time. Transcripts and curriculum maps are AI-extracted from official lecture videos.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
            <Zap className="w-3 h-3 text-amber-500" />
            <span className="tabular-nums font-medium text-foreground">2,847,392</span>
            <span>AI tokens used to build &amp; update this site</span>
          </div>
          <button
            onClick={() => setShowDonate(true)}
            className="flex items-center gap-1.5 text-xs font-medium text-rose-500 hover:text-rose-600 transition-colors"
          >
            <Heart className="w-3 h-3 fill-rose-500" />
            Please donate to keep this website running
          </button>
        </div>
      </div>
      {showDonate && <DonateModal onClose={() => setShowDonate(false)} />}
    </div>
  );
}
