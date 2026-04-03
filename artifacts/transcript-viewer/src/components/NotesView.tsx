import { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { cn } from "@/lib/utils";
import { ChevronRight, Search, X } from "lucide-react";
import notesRaw from "@/data/notes.json";

interface Note {
  id: string;
  number: number;
  title: string;
  section: string;
  content: string;
}

const notes = notesRaw as Note[];

const SECTIONS = [
  "Refresher Week",
  "Weeks 1–4 · Linear Algebra Foundations",
  "Weeks 5–8 · Linear Algebra Advanced",
  "Weeks 9–11 · Multivariable Calculus",
  "Special Week",
];

function toNoteId(link: string): string | null {
  const m = link.match(/^(\d+)\s*-\s*/);
  if (m) return m[1];
  const found = notes.find(
    (n) => n.title.toLowerCase() === link.replace(/^\d+\s*-\s*/, "").toLowerCase()
  );
  return found?.id ?? null;
}

interface NotesViewProps {
  sidebarOpen: boolean;
  onSidebarClose: () => void;
}

export function NotesView({ sidebarOpen, onSidebarClose }: NotesViewProps) {
  const [selectedId, setSelectedId] = useState<string>("1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return notes;
    return notes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.content.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const selectedNote = notes.find((n) => n.id === selectedId) ?? notes[1];

  const grouped = useMemo(() => {
    return SECTIONS.map((section) => ({
      section,
      notes: filteredNotes.filter((n) => n.section === section),
    })).filter((g) => g.notes.length > 0);
  }, [filteredNotes]);

  const handleSelectNote = (id: string) => {
    setSelectedId(id);
    onSidebarClose();
  };

  const processContent = (content: string) =>
    content.replace(/\[\[([^\]]+)\]\]/g, (_, link) => {
      const id = toNoteId(link);
      if (id) return `[${link}](#note-${id})`;
      return `\`${link}\``;
    });

  return (
    <div className="h-full flex overflow-hidden">
      <aside
        className={cn(
          "flex-shrink-0 w-64 border-r border-border bg-card flex flex-col",
          "md:flex md:relative md:translate-x-0",
          sidebarOpen
            ? "fixed inset-y-0 left-0 z-30 flex shadow-xl"
            : "hidden md:flex"
        )}
      >
        <div className="p-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-8 pl-8 pr-7 rounded-md text-sm bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          {grouped.map(({ section, notes: sNotes }) => (
            <div key={section} className="mb-1">
              <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                {section}
              </div>
              {sNotes.map((note) => (
                <button
                  key={note.id}
                  onClick={() => handleSelectNote(note.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 flex items-start gap-2 text-sm transition-colors rounded-none",
                    selectedId === note.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  )}
                >
                  <span className="flex-shrink-0 text-[11px] font-mono mt-0.5 w-5 text-right opacity-50">
                    {note.number}
                  </span>
                  <span className="leading-tight">
                    {note.title.replace(/_/g, " ")}
                  </span>
                </button>
              ))}
            </div>
          ))}
          {grouped.length === 0 && (
            <p className="px-4 py-6 text-sm text-muted-foreground text-center">
              No notes match "{searchQuery}"
            </p>
          )}
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-20"
          onClick={onSidebarClose}
        />
      )}

      <main className="flex-1 overflow-y-auto">
        {selectedNote ? (
          <div className="max-w-3xl mx-auto px-6 py-8">
            <div className="md:hidden mb-4 text-xs text-muted-foreground">
              {selectedNote.section} · Note {selectedNote.number}
            </div>

            <div className="mb-2 text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {selectedNote.section}
            </div>

            <article className="prose prose-sm dark:prose-invert max-w-none prose-headings:font-semibold prose-h1:text-xl prose-h2:text-base prose-h2:mt-8 prose-h2:mb-3 prose-h3:text-sm prose-h3:mt-5 prose-h3:mb-2 prose-p:leading-relaxed prose-li:leading-relaxed prose-table:text-xs prose-th:font-semibold prose-td:py-1.5 prose-blockquote:border-primary/40 prose-blockquote:text-muted-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-pre:bg-muted prose-pre:border prose-pre:border-border">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  a: ({ href, children }) => {
                    if (href?.startsWith("#note-")) {
                      const noteId = href.replace("#note-", "");
                      return (
                        <button
                          onClick={() => handleSelectNote(noteId)}
                          className="text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary transition-colors font-medium cursor-pointer"
                        >
                          {children}
                        </button>
                      );
                    }
                    return (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    );
                  },
                }}
              >
                {processContent(selectedNote.content)}
              </ReactMarkdown>
            </article>

            <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
              {notes.find((n) => n.number === selectedNote.number - 1) ? (
                <button
                  onClick={() =>
                    handleSelectNote(String(selectedNote.number - 1))
                  }
                  aria-label="Previous note"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
                  <span>
                    {
                      notes.find((n) => n.number === selectedNote.number - 1)
                        ?.title
                    }
                  </span>
                </button>
              ) : (
                <span />
              )}
              {notes.find((n) => n.number === selectedNote.number + 1) ? (
                <button
                  onClick={() =>
                    handleSelectNote(String(selectedNote.number + 1))
                  }
                  aria-label="Next note"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group ml-auto"
                >
                  <span>
                    {
                      notes.find((n) => n.number === selectedNote.number + 1)
                        ?.title
                    }
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
            Select a topic from the list
          </div>
        )}
      </main>
    </div>
  );
}
