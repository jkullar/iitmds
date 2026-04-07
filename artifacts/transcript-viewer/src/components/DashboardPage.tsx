import { useState, useEffect, useCallback, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  User, Phone, Mail, Lock, LogOut, BookOpen, CheckCircle2,
  Circle, ChevronDown, ChevronRight, Edit3, Check, X, Loader2,
  ArrowLeft, Eye, EyeOff, TrendingUp, BookMarked, GraduationCap,
  CalendarClock, Zap, Trophy,
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
}

async function apiFetch(path: string, opts?: RequestInit) {
  const res = await fetch(path, { credentials: "include", ...opts });
  const body = await res.json();
  if (!res.ok) throw new Error(body?.error ?? "Request failed");
  return body;
}

// ─── Timeline prediction ──────────────────────────────────────────────────────
type TimelineResult =
  | { status: "done" }
  | { status: "not_started" }
  | { status: "in_progress"; ratePerDay: number; daysLeft: number; completionDate: Date };

function computeTimeline(subscribedAt: string, progress: ProgressItem[], totalVideos: number): TimelineResult {
  const completed = progress.length;
  const remaining = totalVideos - completed;
  if (remaining === 0) return { status: "done" };
  if (completed === 0) return { status: "not_started" };

  const now = Date.now();
  const start = new Date(subscribedAt).getTime();
  const daysElapsed = Math.max(1, (now - start) / 86_400_000);
  const ratePerDay = completed / daysElapsed;
  const daysLeft = Math.round(remaining / ratePerDay);
  const completionDate = new Date(now + daysLeft * 86_400_000);
  return { status: "in_progress", ratePerDay, daysLeft, completionDate };
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function TimelineSection({ subscribedAt, progress, totalVideos }: {
  subscribedAt: string; progress: ProgressItem[]; totalVideos: number;
}) {
  const tl = computeTimeline(subscribedAt, progress, totalVideos);

  if (tl.status === "done") {
    return (
      <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/25 text-green-700 dark:text-green-400">
        <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="text-xs font-medium">Course complete! 🎉</span>
      </div>
    );
  }

  if (tl.status === "not_started") {
    return (
      <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/60 border border-border/50 text-muted-foreground">
        <CalendarClock className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="text-xs">Complete your first video to see your projected finish date.</span>
      </div>
    );
  }

  const { ratePerDay, daysLeft, completionDate } = tl;
  const rateLabel = ratePerDay >= 1
    ? `${ratePerDay.toFixed(1)} videos/day`
    : `${Math.round(7 * ratePerDay * 10) / 10} videos/week`;
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
        Projected completion: <span className="font-semibold text-foreground">{formatDate(completionDate)}</span>
        <span className="ml-1.5 text-muted-foreground/70 italic text-[10px]">(adjusts as you learn faster)</span>
      </div>
    </div>
  );
}

// ─── Single Course Progress Card ─────────────────────────────────────────────

function CourseProgressCard({ course, userId, subscribedAt }: { course: CourseInfo; userId: string; subscribedAt: string }) {
  const navigate = useNavigate();
  const data = course.transcripts as TranscriptsData;
  const [progress, setProgress] = useState<ProgressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedWeeks, setExpandedWeeks] = useState<Set<string>>(new Set());
  const [toggling, setToggling] = useState<Set<string>>(new Set());

  useEffect(() => {
    apiFetch(`/api/progress?courseId=${course.courseId}`)
      .then((d) => setProgress(d.progress))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [course.courseId, userId]);

  const completedCodes = new Set(progress.map((p) => p.videoCode));

  const toggleWeek = (id: string) =>
    setExpandedWeeks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleVideo = useCallback(async (code: string) => {
    if (toggling.has(code)) return;
    setToggling((s) => new Set(s).add(code));
    const wasDone = completedCodes.has(code);
    try {
      if (wasDone) {
        await apiFetch("/api/progress", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ courseId: course.courseId, videoCode: code }),
        });
        setProgress((p) => p.filter((x) => x.videoCode !== code));
      } else {
        await apiFetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ courseId: course.courseId, videoCode: code }),
        });
        setProgress((p) => [
          ...p,
          { userId, courseId: course.courseId, videoCode: code, completedAt: new Date().toISOString() },
        ]);
      }
    } catch {}
    setToggling((s) => { const n = new Set(s); n.delete(code); return n; });
  }, [completedCodes, toggling, course.courseId, userId]);

  const totalVideos = data.weeks.reduce((s, w) => s + w.videos.length, 0);
  const totalCompleted = progress.length;
  const pct = totalVideos > 0 ? Math.round((totalCompleted / totalVideos) * 100) : 0;

  return (
    <div className="space-y-3">
      {/* Course summary card */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{course.level} · {course.semester}</span>
            </div>
            <h3 className="font-semibold text-foreground text-sm leading-snug">{course.name}</h3>
          </div>
          <button
            onClick={() => navigate(`/${course.degreeSlug}/${course.courseId}`)}
            className="flex-shrink-0 flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <BookOpen className="w-3 h-3" />
            Open
          </button>
        </div>

        {loading ? (
          <div className="h-6 flex items-center">
            <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-xs font-mono font-semibold text-foreground flex-shrink-0">{totalCompleted}/{totalVideos}</span>
              <span className="text-xs text-muted-foreground flex-shrink-0">{pct}%</span>
            </div>
            <TimelineSection subscribedAt={subscribedAt} progress={progress} totalVideos={totalVideos} />
          </>
        )}
      </div>

      {/* Per-week breakdown */}
      {!loading && (
        <div className="space-y-1.5">
          {data.weeks.map((week) => {
            const weekDone = week.videos.filter((v) => completedCodes.has(v.code)).length;
            const weekPct = week.videos.length > 0 ? Math.round((weekDone / week.videos.length) * 100) : 0;
            const expanded = expandedWeeks.has(week.id);

            return (
              <div key={week.id} className="rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => toggleWeek(week.id)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 bg-card hover:bg-muted/40 transition-colors text-left"
                >
                  {expanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-medium text-foreground truncate">{week.label}</span>
                      <span className="text-[10px] font-mono text-muted-foreground flex-shrink-0">{weekDone}/{week.videos.length}</span>
                    </div>
                    <div className="h-1 rounded-full bg-muted overflow-hidden">
                      <div
                        className={cn("h-full rounded-full transition-all", weekPct === 100 ? "bg-green-500" : "bg-primary/60")}
                        style={{ width: `${weekPct}%` }}
                      />
                    </div>
                  </div>
                </button>

                {expanded && (
                  <div className="border-t border-border divide-y divide-border/50">
                    {week.videos.map((video) => {
                      const done = completedCodes.has(video.code);
                      const inFlight = toggling.has(video.code);
                      return (
                        <div key={video.code} className="flex items-center gap-3 px-4 py-2 bg-card/60">
                          <button
                            onClick={() => toggleVideo(video.code)}
                            disabled={inFlight}
                            className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
                            title={done ? "Mark incomplete" : "Mark complete"}
                          >
                            {inFlight ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            ) : done ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                            ) : (
                              <Circle className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <span className={cn(
                            "text-[10px] font-mono px-1 py-0.5 rounded bg-muted text-muted-foreground flex-shrink-0",
                            done && "opacity-50"
                          )}>
                            {video.code}
                          </span>
                          <span className={cn(
                            "text-xs flex-1 truncate",
                            done ? "line-through text-muted-foreground" : "text-foreground"
                          )}>
                            {video.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
    <div className="space-y-8">
      {subscriptions.map((sub) => {
        const course = COURSE_REGISTRY[sub.courseId];
        if (!course) return null;
        return (
          <CourseProgressCard key={sub.courseId} course={course} userId={userId} subscribedAt={sub.subscribedAt} />
        );
      })}
    </div>
  );
}

// ─── Profile Tab ─────────────────────────────────────────────────────────────

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
              {pwSaving ? "Updating…" : "Update password"}
            </button>
          </form>
        )}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 h-9 rounded-lg border border-destructive/40 text-destructive text-xs font-medium hover:bg-destructive/10 transition-colors"
      >
        <LogOut className="w-3.5 h-3.5" />
        Sign out
      </button>
    </div>
  );
}

function InfoRow({ icon, label, value, muted }: { icon: React.ReactNode; label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-muted-foreground">{icon}</span>
      <span className="text-xs text-muted-foreground w-10 flex-shrink-0">{label}</span>
      <span className={cn("text-sm font-medium", muted ? "text-muted-foreground" : "text-foreground")}>{value}</span>
    </div>
  );
}

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1">
        {icon}{label}
      </label>
      {children}
    </div>
  );
}

// ─── Dashboard Page ───────────────────────────────────────────────────────────

export function DashboardPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<"progress" | "profile">("progress");

  useEffect(() => {
    if (!loading && !user) navigate("/login");
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <img src="/dytadex-logo.png" alt="DytaDex" className="h-7" />
          <span className="text-sm font-semibold text-foreground hidden sm:block">Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-primary">{user.name.charAt(0).toUpperCase()}</span>
          </div>
          <span className="text-sm font-medium text-foreground hidden sm:block">{user.name.split(" ")[0]}</span>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Hello, {user.name.split(" ")[0]} 👋</h1>
          <p className="text-sm text-muted-foreground mt-1">Track your learning progress and manage your account.</p>
        </div>

        <div className="flex border-b border-border mb-6 gap-1">
          <TabBtn active={tab === "progress"} onClick={() => setTab("progress")}>
            <TrendingUp className="w-4 h-4" />
            Progress
          </TabBtn>
          <TabBtn active={tab === "profile"} onClick={() => setTab("profile")}>
            <User className="w-4 h-4" />
            Profile
          </TabBtn>
        </div>

        {tab === "progress" && <ProgressTab userId={user.id} />}
        {tab === "profile" && <ProfileTab />}
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors",
        active
          ? "border-primary text-primary"
          : "border-transparent text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
