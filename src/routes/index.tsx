import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/questions";
import { useProgress } from "@/lib/storage";
import { CategoryCard } from "@/components/site/CategoryCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnglishQuest — Practice English Every Day" },
      { name: "description", content: "A clean, modern English practice app. Grammar, vocabulary, reading and more. No signup. Your progress stays in your browser." },
    ],
  }),
  component: Home,
});

const pillars = [
  { tag: "01", title: "Bite-sized practice", text: "Short sessions you'll actually finish. Pick a topic, answer a few questions, move on." },
  { tag: "02", title: "Learn from every answer", text: "Plain-language explanations on every question — so a wrong answer still teaches something." },
  { tag: "03", title: "Build a streak", text: "A few minutes a day adds up. Your streak lives quietly in your browser, just for you." },
];

const faqs = [
  { q: "Is it really free?", a: "Yes — no accounts, no payments, no ads. The whole app runs in your browser." },
  { q: "Will I be tracked?", a: "No. Your progress is written to localStorage on this device. There's no server to send it to." },
  { q: "Does my progress sync between devices?", a: "It doesn't. Each device keeps its own progress on purpose." },
  { q: "How long should a session take?", a: "About five minutes. The point is the habit, not the volume." },
];

function Home() {
  const [progress] = useProgress();
  const totalQ = categories.reduce((s, c) => s + c.questions.length, 0);

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Free · No signup · Saved on your device
              </span>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
                Practice English,
                <br />
                <span className="text-secondary">a few minutes</span> a day.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A simple, modern way to sharpen grammar, vocabulary and reading. Pick a topic, answer a few questions, see why — that's it.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/practice"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Start practicing
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/daily"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Today's challenge
                </Link>
              </div>
            </motion.div>

            {/* Progress card */}
            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4"
            >
              <div className="rounded-2xl border border-foreground/10 bg-card p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Your progress</p>
                  <span className="text-[10px] text-muted-foreground">private · local</span>
                </div>
                <div className="mt-5 space-y-4">
                  <Stat label="Streak" value={`${progress.streak}`} suffix={progress.streak === 1 ? "day" : "days"} />
                  <Stat label="Best score" value={`${progress.bestScore}`} suffix="%" />
                  <Stat label="Quizzes done" value={`${progress.totalQuizzes}`} />
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-foreground/10 bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">How it works</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">Simple loop. Real progress.</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.tag}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-foreground/10 bg-background p-7 transition-colors hover:border-foreground/30"
              >
                <span className="font-mono text-xs text-secondary">{p.tag}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Topics</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">Pick where to start.</h2>
          </div>
          <Link to="/practice" className="ink-link hidden text-sm text-muted-foreground hover:text-foreground sm:inline">View all eight →</Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 4).map((c, i) => (
            <CategoryCard key={c.slug} category={c} completions={progress.categoryCompletions[c.slug] ?? 0} index={i} />
          ))}
        </div>
      </section>

      {/* DAILY */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-foreground text-background">
          <div className="grid items-stretch gap-10 p-8 sm:p-12 md:grid-cols-2 md:p-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Daily challenge
              </span>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl">
                Five questions.<br />
                <span className="text-background/70">Every day.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-background/75">
                A fresh selection across every topic. Take a few minutes, see how you did, keep your streak alive.
              </p>
              <Link
                to="/daily"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Take today's challenge
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative rounded-2xl border border-background/15 bg-background/5 p-7">
              <p className="text-xs font-medium uppercase tracking-wider text-background/60">Sample question</p>
              <p className="mt-4 font-display text-2xl font-medium leading-snug sm:text-3xl">
                "Despite the rain, the marathon proceeded as planned."
              </p>
              <p className="mt-2 text-sm text-background/70">What does the sentence imply?</p>
              <div className="mt-6 space-y-2">
                {["The event was cancelled", "The event continued anyway", "The event was shortened"].map((o, i) => (
                  <div key={i} className={cn(
                    "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm",
                    i === 1
                      ? "border-secondary bg-secondary/15 font-medium"
                      : "border-background/15 bg-background/5 text-background/80"
                  )}>
                    <span className="font-mono text-xs text-background/50">{["a","b","c"][i]}</span>
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="border-y border-foreground/10 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-foreground/10">
          <Number value={`${totalQ}+`} label="Questions" />
          <Number value="8" label="Topics" />
          <Number value="$0" label="Forever" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">FAQ</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">Common questions.</h2>
        <div className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-foreground/10 pb-3 last:border-b-0 last:pb-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-display text-2xl font-semibold tracking-tight num-tabular">
        {value}
        {suffix && <span className="ml-1 text-xs font-normal text-muted-foreground">{suffix}</span>}
      </span>
    </div>
  );
}

function Number({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 py-12 text-center">
      <div className="font-display text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">{value}</div>
      <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-lg font-medium tracking-tight">{q}</span>
        <ChevronDown className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>
      <div className={cn("grid overflow-hidden transition-all", open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{a}</div>
      </div>
    </div>
  );
}
