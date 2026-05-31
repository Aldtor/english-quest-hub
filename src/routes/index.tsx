import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame, Trophy, Sparkles, ArrowRight, Target, Zap, BookOpen, BarChart3, ChevronDown } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/questions";
import { useProgress } from "@/lib/storage";
import { CategoryCard } from "@/components/site/CategoryCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnglishQuest — Improve Your English One Question at a Time" },
      { name: "description", content: "Practice English daily with quizzes on grammar, vocabulary, synonyms, antonyms, reading comprehension and more." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Target, title: "Focused practice", text: "Bite-sized questions across 7 categories, designed to build real fluency." },
  { icon: Zap, title: "Instant feedback", text: "Every answer comes with a clear explanation so you actually learn." },
  { icon: Flame, title: "Daily streaks", text: "Show up every day and watch your streak — and your skills — grow." },
  { icon: BarChart3, title: "Track progress", text: "Best scores, completions, and streaks saved locally in your browser." },
];

const faqs = [
  { q: "Is EnglishQuest really free?", a: "Yes. No accounts, no payments, no ads. Everything works in your browser." },
  { q: "Do I need to sign up?", a: "Never. Your progress is stored locally with privacy-first localStorage." },
  { q: "Will my progress sync across devices?", a: "Because we don't use a backend, progress stays on the device you practice on." },
  { q: "How often should I practice?", a: "Just a few minutes a day. Consistency builds your streak and your skills." },
];

function Home() {
  const [progress] = useProgress();

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Frontend-only · 100% private · No signup
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Improve Your English{" "}
              <span className="text-gradient-brand">One Question</span> at a Time
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Master grammar, vocabulary, and reading with beautifully crafted quizzes.
              Build a daily habit. Watch your fluency compound.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/practice"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Start Practicing <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/daily"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-semibold transition-colors hover:bg-accent"
              >
                Today's Challenge
              </Link>
            </div>

            {/* badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Badge icon={<Flame className="h-4 w-4 text-orange-500" />} label="Streak" value={`${progress.streak} day${progress.streak === 1 ? "" : "s"}`} />
              <Badge icon={<Trophy className="h-4 w-4 text-amber-500" />} label="Best Score" value={`${progress.bestScore}%`} />
              <Badge icon={<BookOpen className="h-4 w-4 text-primary" />} label="Quizzes" value={`${progress.totalQuizzes}`} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-soft">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Pick a category</h2>
            <p className="mt-2 text-muted-foreground">Eight focused tracks to choose from.</p>
          </div>
          <Link to="/practice" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
            See all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 4).map((c, i) => (
            <CategoryCard key={c.slug} category={c} completions={progress.categoryCompletions[c.slug] ?? 0} index={i} />
          ))}
        </div>
      </section>

      {/* DAILY CHALLENGE PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-glow sm:p-12">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                <Flame className="h-3.5 w-3.5" /> Daily Challenge
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">5 questions. One day. Keep your streak alive.</h2>
              <p className="mt-3 max-w-md text-primary-foreground/90">
                A fresh, hand-picked set every day across all categories. Show up, score, repeat.
              </p>
              <Link
                to="/daily"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-semibold text-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                Take today's challenge <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative hidden md:block">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-sm uppercase tracking-widest text-primary-foreground/80">Today's preview</p>
                <p className="mt-3 font-display text-2xl font-bold leading-snug">
                  "Despite the rain, the marathon proceeded as planned." — what does this imply?
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  {["The event was cancelled", "The event continued anyway", "The event was shortened"].map((o, i) => (
                    <div key={i} className={cn("rounded-xl border border-white/20 bg-white/5 px-4 py-2.5", i === 1 && "border-white/60 bg-white/15")}>
                      {String.fromCharCode(65 + i)}. {o}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Questions in the library" value={`${categories.reduce((s, c) => s + c.questions.length, 0)}+`} />
          <Stat label="Practice categories" value="8" />
          <Stat label="Cost forever" value="Free" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Questions, answered.</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>
    </div>
  );
}

function Badge({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-soft">
      {icon}
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
      <div className="font-display text-4xl font-extrabold text-gradient-brand sm:text-5xl">{value}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={cn("h-5 w-5 transition-transform text-muted-foreground", open && "rotate-180")} />
      </button>
      <div className={cn("grid overflow-hidden transition-all", open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden px-5 text-sm text-muted-foreground">{a}</div>
      </div>
    </div>
  );
}
