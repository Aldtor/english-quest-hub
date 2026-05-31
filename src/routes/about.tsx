import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, BookOpen, Zap, Heart, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EnglishQuest" },
      { name: "description", content: "A simple, modern English practice app. Quiet, daily, and yours alone." },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Target, title: "Purpose", text: "Make English practice feel as easy as scrolling — short, focused and worth coming back to." },
  { icon: BookOpen, title: "Method", text: "Active recall with immediate, plain-spoken explanations. Every mistake teaches something." },
  { icon: Zap, title: "Rhythm", text: "Small daily reps quietly compound. A streak makes the habit visible — addictive in the best way." },
  { icon: Heart, title: "Yours alone", text: "No accounts. No tracking. No backend. Your progress lives in this browser, on this device." },
];

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">About</p>
      <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
        Built to be <span className="text-secondary">simple.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        EnglishQuest is a small app for anyone who wants to read, write and think more clearly in English. No login, no leaderboard, no algorithm — just the question, the answer, and the quiet satisfaction of coming back tomorrow.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {pillars.map((p) => (
          <article key={p.title} className="rounded-2xl border border-foreground/10 bg-card p-6">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted text-foreground">
              <p.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold tracking-[-0.02em]">{p.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-foreground p-10 text-center text-background">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.025em]">Ready to start?</h2>
        <p className="mt-2 text-sm text-background/75">A few minutes a day is all it takes.</p>
        <Link
          to="/practice"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground"
        >
          Start practicing <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
