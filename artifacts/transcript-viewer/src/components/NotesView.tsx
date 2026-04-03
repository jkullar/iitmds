import { FileText, Clock } from "lucide-react";

export function NotesView() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 px-8 text-center">
      <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
        <FileText className="w-7 h-7 text-muted-foreground/60" />
      </div>
      <div>
        <h2 className="text-base font-semibold text-foreground mb-1">Notes</h2>
        <p className="text-sm text-muted-foreground max-w-xs">
          Structured course notes are being prepared and will appear here soon.
        </p>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs text-muted-foreground">
        <Clock className="w-3.5 h-3.5" />
        Coming soon
      </div>
    </div>
  );
}
