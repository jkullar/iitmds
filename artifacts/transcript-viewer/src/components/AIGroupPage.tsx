import { useState } from "react";
import { BrainCircuit, MessageCircle, ShieldAlert, Lightbulb, Rocket, Sparkles, Users, CheckCircle2, Clock, Zap, Heart } from "lucide-react";
import { DonateModal } from "./DonateModal";

const WA_LINK = "https://chat.whatsapp.com/GiZzhBVwGytGN0yIW4N6rF";

const TOPICS = [
  {
    icon: BrainCircuit,
    title: "AI Fundamentals",
    desc: "What is AI, ML, and Generative AI? Break down the buzzwords.",
    color: "bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400",
  },
  {
    icon: Rocket,
    title: "AI in Development",
    desc: "How AI is changing coding, tools, and workflows for developers.",
    color: "bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Real-World Applications",
    desc: "AI in healthcare, business, education, and everyday life.",
    color: "bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
  },
  {
    icon: ShieldAlert,
    title: "Ethics & Impact",
    desc: "Job displacement, bias, privacy, and responsible AI use.",
    color: "bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400",
  },
  {
    icon: Sparkles,
    title: "Getting Started",
    desc: "Resources, tools, and paths for beginners to learn AI.",
    color: "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Rocket,
    title: "Latest Trends",
    desc: "New models, breakthroughs, and what's coming next in AI.",
    color: "bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: MessageCircle,
    title: "Open Discussion",
    desc: "Not a lecture. A real conversation where everyone's voice matters.",
    color: "bg-cyan-100 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Get the Weekly Topic",
    desc: "Each week we share the upcoming discussion topic and agenda in the group.",
  },
  {
    num: "02",
    title: "Show Up & Participate",
    desc: "Join the session, introduce yourself, and dive into the conversation.",
  },
  {
    num: "03",
    title: "Learn & Connect",
    desc: "Walk away with new knowledge, resources, and connections every week.",
  },
];

function JoinButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-xl font-semibold bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${large ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm"}`}
    >
      <svg viewBox="0 0 24 24" className={large ? "w-5 h-5" : "w-4 h-4"} fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Join the WhatsApp Group
    </a>
  );
}

export function AIGroupPage() {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin bg-background" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-indigo-500/5 to-cyan-400/10 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-5 pt-16 pb-14 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#25D366]/10 text-[#128C7E] dark:text-[#25D366] border border-[#25D366]/20 mb-5">
            Free · Weekly · Open for Everyone
          </span>

          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Discussions About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Artificial Intelligence
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            A weekly open discussion where anyone can join to learn, share ideas, and explore the world of AI. No experience needed.
          </p>

          <JoinButton large />
          <p className="text-xs text-muted-foreground mt-3">
            Join the group to get notified about upcoming sessions
          </p>
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-6">
          <p className="text-sm text-foreground leading-relaxed mb-3">
            AI is reshaping the world. This is your space to understand it, discuss it, and connect with others who care about its impact.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Each session is 60–90 minutes and follows a flexible format. The agenda changes every week based on what the community wants to explore.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tap the button below to join our WhatsApp group and stay in the loop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {[
            { icon: Users, text: "Connect with curious minds, developers, students, and professionals." },
            { icon: CheckCircle2, text: "Consistent weekly sessions so you can grow your knowledge over time." },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
              <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* ── HOW IT WORKS ─────────────────────────────── */}
        <h2 className="text-xl font-bold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="bg-card border border-border rounded-xl p-5">
              <div className="text-2xl font-black text-violet-500/20 dark:text-violet-400/20 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {num}
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── TOPICS ───────────────────────────────────── */}
        <h2 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Topics We Explore
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          Every session covers a different angle of AI. Here are some of the areas we dive into.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {TOPICS.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground mb-0.5">{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SESSION DETAILS ───────────────────────────── */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Session Details
          </h2>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">60 – 90 Minutes</p>
              <p className="text-xs text-muted-foreground">Per session</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Exact day, time, and agenda are shared each week in the WhatsApp group. Join the group so you never miss a session.
          </p>
          <div className="flex justify-center">
            <JoinButton large />
          </div>
        </div>

        {/* ── FOOTER ───────────────────────────────────── */}
        <div className="mt-4 pt-6 border-t border-border/50 flex flex-col items-center gap-3 pb-8">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>🇮🇳 Made in India</span>
            <span className="text-muted-foreground/30">·</span>
            <span>✨ Made with AI</span>
          </div>
          <p className="text-center text-xs text-muted-foreground max-w-md">
            This is a community discussion group, not an official institution.
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
