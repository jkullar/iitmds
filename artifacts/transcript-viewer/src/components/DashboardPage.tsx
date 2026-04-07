import { useState, useEffect, useCallback, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  User, Phone, Mail, Lock, LogOut, BookOpen,
  Edit3, Check, X, Loader2,
  ArrowLeft, Eye, EyeOff, TrendingUp, BookMarked, GraduationCap,
  CalendarClock, Zap, Trophy, Video, FileText, Lightbulb,
} from "lucide-react";
import { COURSE_REGISTRY, type CourseInfo } from "@/lib/courseRegistry";
import type { TranscriptsData } from "@/types";
import { cn } from "@/lib/utils";

interface ProgressItem {
  userId: string;
  courseId: string;
  videoCode: string;
  completedAt: string;
}

interface Subscription {
  id: string;
  userId: string;
  courseId: string;
  degreeId: string;
  subscribedAt: string;
  trackingTypes: string[];
}

async function apiFetch(path: string, opts?: RequestInit) {
  const res = await fetch(path, { credentials: "include", ...opts });
  const body = await res.json();
  if (!res.ok) throw new Error(body?.error ?? "Request failed");
  return body;
}

// ─── Timeline prediction ──────────────────────────────────────────────────────
// effectiveFraction: 0–1 weighted completion across selected types
type TimelineResult =
  | { status: "done" }
  | { status: "not_started" }
  | { status: "in_progress"; pctPerDay: number; daysLeft: number; completionDate: Date };

function computeTimeline(subscribedAt: string, effectiveFraction: number): TimelineResult {
  if (effectiveFraction >= 1) return { status: "done" };
  if (effectiveFraction <= 0) return { status: "not_started" };

  const now = Date.now();
  const start = new Date(subscribedAt).getTime();
  const daysElapsed = Math.max(1, (now - start) / 86_400_000);
  const ratePerDay = effectiveFraction / daysElapsed;
  const remaining = 1 - effectiveFraction;
  const daysLeft = Math.round(remaining / ratePerDay);
  const completionDate = new Date(now + daysLeft * 86_400_000);
  // pctPerDay: how many percentage points of the course per day
  const pctPerDay = ratePerDay * 100;
  return { status: "in_progress", pctPerDay, daysLeft, completionDate };
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function TimelineSection({ subscribedAt, effectiveFraction }: {
  subscribedAt: string; effectiveFraction: number;
}) {
  const tl = computeTimeline(subscribedAt, effectiveFraction);

  if (tl.status === "done") {
    return (
      <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/25 text-green-700 dark:text-green-400">
        <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="text-xs font-medium">All tracked items complete! 🎉</span>
      </div>
    );
  }

  if (tl.status === "not_started") {
    return (
      <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/60 border border-border/50 text-muted-foreground">
        <CalendarClock className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="text-xs">Mark your first item to see your projected finish date.</span>
      </div>
    );
  }

  const { pctPerDay, daysLeft, completionDate } = tl;
  const rateLabel = pctPerDay >= 1
    ? `${pctPerDay.toFixed(1)}%/day`
    : `${(pctPerDay * 7).toFixed(1)}%/week`;
  const timeLabel = daysLeft > 365
    ? `~${Math.round(daysLeft / 30)} months`
    : daysLeft > 60
    ? `~${Math.round(daysLeft / 7)} weeks`
    : `~${daysLeft} day${daysLeft !== 1 ? "s" : ""}`;

  return (
    <div className="mt-3 rounded-lg border border-border/60 bg-muted/30 px-3 py-2.5 space-y-1.5">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Zap className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
          <span>Pace: <span className="font-medium text-foreground">{rateLabel}</span></span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarClock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <span>Finish in <span className="font-medium text-foreground">{timeLabel}</span></span>
        </div>
      </div>
      <div className="text-xs text-muted-foreground">
        Projected: <span className="font-semibold text-foreground">{formatDate(completionDate)}</span>
        <span className="ml-1.5 text-muted-foreground/70 italic text-[10px]">(adjusts as you learn)</span>
      </div>
    </div>
  );
}

// ─── Tracking Type Chip ───────────────────────────────────────────────────────

type TrackType = "videos" | "concepts" | "notes";

const TRACK_LABELS: Record<TrackType, { label: string; Icon: typeof Video }> = {
  videos:   { label: "Videos",   Icon: Video },
  concepts: { label: "Concepts", Icon: Lightbulb },
  notes:    { label: "Notes",    Icon: FileText },
};

function TrackingTypeChips({
  selected,
  onChange,
  saving,
}: {
  selected: TrackType[];
  onChange: (types: TrackType[]) => void;
  saving: boolean;
}) {
  const toggle = (type: TrackType) => {
    const next = selected.includes(type)
      ? selected.filter((t) => t !== type)
      : [...selected, type];
    if (next.length === 0) return;
    onChange(next);
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold flex-shrink-0">Track:</span>
      {(["videos", "concepts", "notes"] as TrackType[]).map((type) => {
        const { label, Icon } = TRACK_LABELS[type];
        const active = selected.includes(type);
        return (
          <button
            key={type}
            onClick={() => toggle(type)}
            disabled={saving}
            className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-medium border transition-colors",
              active
                ? "bg-primary/15 border-primary/40 text-primary"
                : "bg-muted/40 border-border/50 text-muted-foreground hover:border-border hover:text-foreground"
            )}
          >
            <Icon className="w-3 h-3" />
            {label}
          </button>
        );
      })}
      {saving && <Loader2 className="w-3 h-3 animate-spin text-muted-foreground flex-shrink-0" />}
    </div>
  );
}

// ─── Single Course Progress Card ─────────────────────────────────────────────

function CourseProgressCard({
  course,
  userId,
  subscribedAt,
  initialTrackingTypes,
}: {
  course: CourseInfo;
  userId: string;
  subscribedAt: string;
  initialTrackingTypes: string[];
}) {
  const navigate = useNavigate();
  const data = course.transcripts as TranscriptsData;

  const [progress, setProgress] = useState<ProgressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [trackingTypes, setTrackingTypes] = useState<TrackType[]>(
    (initialTrackingTypes as TrackType[]).filter((t) => ["videos", "concepts", "notes"].includes(t))
  );
  const [savingTypes, setSavingTypes] = useState(false);

  useEffect(() => {
    apiFetch(`/api/progress?courseId=${course.courseId}`)
      .then((d) => setProgress(d.progress))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [course.courseId, userId]);

  const handleTrackingTypesChange = useCallback(async (types: TrackType[]) => {
    setTrackingTypes(types);
    setSavingTypes(true);
    try {
      await apiFetch(`/api/subscriptions/${course.courseId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackingTypes: types }),
      });
    } catch {}
    setSavingTypes(false);
  }, [course.courseId]);

  // Per-type counts
  const totalVideos = data.weeks.reduce((s, w) => s + w.videos.length, 0);
  const totalConcepts = course.totalConcepts;
  const totalNotes = course.totalNotes;

  const videoDone   = progress.filter((p) => p.videoCode.startsWith("v:")).length;
  const conceptDone = progress.filter((p) => !p.videoCode.startsWith("v:") && !p.videoCode.startsWith("note:")).length;
  const noteDone    = progress.filter((p) => p.videoCode.startsWith("note:")).length;

  // Equal-weight: each selected type contributes 1/N to overall completion
  // fraction = average of (done_i / total_i) across selected types
  const fractions: number[] = [];
  if (trackingTypes.includes("videos")   && totalVideos   > 0) fractions.push(videoDone   / totalVideos);
  if (trackingTypes.includes("concepts") && totalConcepts > 0) fractions.push(conceptDone / totalConcepts);
  if (trackingTypes.includes("notes")    && totalNotes    > 0) fractions.push(noteDone    / totalNotes);

  const effectiveFraction = fractions.length > 0
    ? fractions.reduce((s, f) => s + f, 0) / fractions.length
    : 0;

  const pct = Math.round(effectiveFraction * 100);

  return (
    <div className="rounded-xl border border-border bg-card p-4 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
            {course.level} · {course.semester}
          </div>
          <h3 className="font-semibold text-foreground text-sm leading-snug">{course.name}</h3>
        </div>
        <button
          onClick={() => navigate(`/${course.degreeSlug}/${course.courseId}`)}
          className="flex-shrink-0 flex items-center gap-1 text-xs text-primary hover:underline mt-0.5"
        >
          <BookOpen className="w-3 h-3" />
          Open
        </button>
      </div>

      {/* Tracking type selector */}
      <TrackingTypeChips
        selected={trackingTypes}
        onChange={handleTrackingTypesChange}
        saving={savingTypes}
      />

      {/* Progress bar */}
      {loading ? (
        <div className="h-6 flex items-center">
          <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <>
          <div>
            {/* Overall progress bar */}
            <div className="flex items-center gap-3 mb-2.5">
              <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    pct === 100 ? "bg-green-500" : "bg-primary"
                  )}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-sm font-bold text-foreground flex-shrink-0 w-10 text-right">{pct}%</span>
            </div>

            {/* Per-type mini bars — each contributes equally */}
            <div className="space-y-1.5">
              {trackingTypes.includes("videos") && (
                <div className="flex items-center gap-2">
                  <Video className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-500"
                      style={{ width: `${totalVideos > 0 ? Math.round(videoDone / totalVideos * 100) : 0}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground flex-shrink-0 w-16 text-right">
                    {videoDone}/{totalVideos}
                  </span>
                </div>
              )}
              {trackingTypes.includes("concepts") && (
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-violet-500 transition-all duration-500"
                      style={{ width: `${totalConcepts > 0 ? Math.round(conceptDone / totalConcepts * 100) : 0}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground flex-shrink-0 w-16 text-right">
                    {conceptDone}/{totalConcepts}
                  </span>
                </div>
              )}
              {trackingTypes.includes("notes") && (
                <div className="flex items-center gap-2">
                  <FileText className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-500 transition-all duration-500"
                      style={{ width: `${totalNotes > 0 ? Math.round(noteDone / totalNotes * 100) : 0}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground flex-shrink-0 w-16 text-right">
                    {noteDone}/{totalNotes}
                  </span>
                </div>
              )}
            </div>
          </div>

          <TimelineSection
            subscribedAt={subscribedAt}
            effectiveFraction={effectiveFraction}
          />
        </>
      )}
    </div>
  );
}

// ─── Progress Tab ─────────────────────────────────────────────────────────────

function ProgressTab({ userId }: { userId: string }) {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/api/subscriptions")
      .then((d) => setSubscriptions(d.subscriptions))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (subscriptions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <BookMarked className="w-8 h-8 text-muted-foreground/50" />
        </div>
        <div>
          <p className="font-semibold text-foreground">No courses tracked yet</p>
          <p className="text-sm text-muted-foreground mt-1">
            Open a course and click <span className="font-medium">"Track Progress"</span> to start tracking.
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <GraduationCap className="w-4 h-4" />
          Browse courses
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {subscriptions.map((sub) => {
        const course = COURSE_REGISTRY[sub.courseId];
        if (!course) return null;
        return (
          <CourseProgressCard
            key={sub.courseId}
            course={course}
            userId={userId}
            subscribedAt={sub.subscribedAt}
            initialTrackingTypes={sub.trackingTypes ?? ["videos", "concepts", "notes"]}
          />
        );
      })}
    </div>
  );
}

// ─── Profile Tab ─────────────────────────────────────────────────────────────

function InfoRow({ icon, label, value, muted }: { icon: React.ReactNode; label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-muted-foreground flex-shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{label}</div>
        <div className={cn("text-sm font-medium truncate", muted && "text-muted-foreground")}>{value}</div>
      </div>
    </div>
  );
}

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        {icon}{label}
      </label>
      {children}
    </div>
  );
}

function ProfileTab() {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [saving, setSaving] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [profileSuccess, setProfileSuccess] = useState(false);

  const [pwMode, setPwMode] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [pwSaving, setPwSaving] = useState(false);
  const [pwError, setPwError] = useState<string | null>(null);
  const [pwSuccess, setPwSuccess] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleProfileSave = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setProfileError(null);
    setProfileSuccess(false);
    try {
      const d = await apiFetch("/api/auth/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email: email || null }),
      });
      updateUser(d.user);
      setProfileSuccess(true);
      setEditMode(false);
      setTimeout(() => setProfileSuccess(false), 3000);
    } catch (err: any) {
      setProfileError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordSave = async (e: FormEvent) => {
    e.preventDefault();
    if (newPw.length < 8) { setPwError("New password must be at least 8 characters"); return; }
    setPwSaving(true);
    setPwError(null);
    setPwSuccess(false);
    try {
      await apiFetch("/api/auth/password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword: currentPw, newPassword: newPw }),
      });
      setPwSuccess(true);
      setPwMode(false);
      setCurrentPw(""); setNewPw("");
      setTimeout(() => setPwSuccess(false), 3000);
    } catch (err: any) {
      setPwError(err.message);
    } finally {
      setPwSaving(false);
    }
  };

  if (!user) return null;

  return (
    <div className="space-y-4">
      {/* Profile card */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-foreground text-sm">Personal Info</h3>
          {!editMode ? (
            <button
              onClick={() => { setEditMode(true); setProfileError(null); }}
              className="flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              <Edit3 className="w-3.5 h-3.5" />
              Edit
            </button>
          ) : (
            <button
              onClick={() => { setEditMode(false); setName(user.name); setPhone(user.phone); setEmail(user.email ?? ""); }}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Cancel
            </button>
          )}
        </div>

        {!editMode ? (
          <div className="space-y-3">
            <InfoRow icon={<User className="w-3.5 h-3.5" />} label="Name" value={user.name} />
            <InfoRow icon={<Phone className="w-3.5 h-3.5" />} label="Phone" value={user.phone} />
            <InfoRow icon={<Mail className="w-3.5 h-3.5" />} label="Email" value={user.email ?? "—"} muted={!user.email} />
            {profileSuccess && (
              <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Profile updated
              </p>
            )}
          </div>
        ) : (
          <form onSubmit={handleProfileSave} className="space-y-3">
            <Field label="Name" icon={<User className="w-3.5 h-3.5" />}>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full h-9 px-3 rounded-lg border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm" />
            </Field>
            <Field label="Phone" icon={<Phone className="w-3.5 h-3.5" />}>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full h-9 px-3 rounded-lg border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm" />
            </Field>
            <Field label="Email (optional)" icon={<Mail className="w-3.5 h-3.5" />}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="w-full h-9 px-3 rounded-lg border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm" />
            </Field>
            {profileError && <p className="text-xs text-destructive bg-destructive/10 rounded-md px-3 py-2">{profileError}</p>}
            <button type="submit" disabled={saving} className="w-full h-9 flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors">
              {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
              {saving ? "Saving…" : "Save changes"}
            </button>
          </form>
        )}
      </div>

      {/* Password card */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-muted-foreground" /> Password
          </h3>
          {!pwMode ? (
            <button onClick={() => { setPwMode(true); setPwError(null); }} className="text-xs text-primary hover:underline">Change</button>
          ) : (
            <button onClick={() => { setPwMode(false); setCurrentPw(""); setNewPw(""); }} className="text-xs text-muted-foreground hover:text-foreground">Cancel</button>
          )}
        </div>

        {!pwMode ? (
          <>
            <p className="text-sm text-muted-foreground">••••••••</p>
            {pwSuccess && <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Password updated</p>}
          </>
        ) : (
          <form onSubmit={handlePasswordSave} className="space-y-3">
            <Field label="Current password">
              <div className="relative">
                <input type={showCurrent ? "text" : "password"} value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} required autoComplete="current-password" className="w-full h-9 px-3 pr-9 rounded-lg border border-border bg-muted/30 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm" />
                <button type="button" onClick={() => setShowCurrent((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showCurrent ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </Field>
            <Field label="New password (min. 8 chars)">
              <div className="relative">
                <input type={showNew ? "text" : "password"} value={newPw} onChange={(e) => setNewPw(e.target.value)} required minLength={8} autoComplete="new-password" className="w-full h-9 px-3 pr-9 rounded-lg border border-border bg-muted/30 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm" />
                <button type="button" onClick={() => setShowNew((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showNew ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </Field>
            {pwError && <p className="text-xs text-destructive bg-destructive/10 rounded-md px-3 py-2">{pwError}</p>}
            <button type="submit" disabled={pwSaving} className="w-full h-9 flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors">
              {pwSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
              {pwSaving ? "Saving…" : "Update password"}
            </button>
          </form>
        )}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-destructive/30 text-destructive hover:bg-destructive/5 transition-colors text-sm font-medium"
      >
        <LogOut className="w-4 h-4" />
        Sign out
      </button>
    </div>
  );
}

// ─── Dashboard Page ───────────────────────────────────────────────────────────

type DashTab = "progress" | "profile";

export function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<DashTab>("progress");

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="text-muted-foreground text-sm">You need to be signed in.</p>
        <button onClick={() => navigate("/login")} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
          Sign in
        </button>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Back + header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold text-foreground leading-tight">Dashboard</h1>
            <p className="text-xs text-muted-foreground truncate">{user.name}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-primary">{user.name.charAt(0).toUpperCase()}</span>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 mb-5 border-b border-border">
          {([
            { id: "progress" as DashTab, label: "Progress", Icon: TrendingUp },
            { id: "profile"  as DashTab, label: "Profile",  Icon: User },
          ]).map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 -mb-px transition-colors",
                tab === id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>

        {tab === "progress" && <ProgressTab userId={user.id} />}
        {tab === "profile"  && <ProfileTab />}
      </div>
    </div>
  );
}
