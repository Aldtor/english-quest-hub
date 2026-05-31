import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Heart, Target, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EnglishQuest" },
      { name: "description", content: "Learn about EnglishQuest's mission to make English practice beautiful, daily, and free." },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Target, title: "Purpose", text: "Make English practice as effortless as scrolling. Bite-sized, beautiful, and built around real comprehension." },
  { icon: BookOpen, title: "Methodology", text: "Active recall plus immediate explanations. Every question teaches; every mistake builds intuition." },
  { icon: Zap, title: "Daily practice", text: "Small, consistent reps compound. Streaks make the habit visible — and addictive in the best way." },
  { icon: Heart, title: "Yours alone", text: "No accounts. No tracking. Your progress lives in your browser. Practice in peace." },
];

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">About <span className="text-gradient-brand">EnglishQuest</span></h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A premium, frontend-only English practice platform built for learners who want a beautiful daily ritual — not another login screen.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-soft">
              <p.icon className="h-5 w-5 text-primary" />
            </div>
            <h2 className="mt-4 font-display text-lg font-bold">{p.title}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-gradient-soft p-8 text-center">
        <h2 className="font-display text-2xl font-bold">Ready to begin?</h2>
        <p className="mt-2 text-sm text-muted-foreground">A few minutes a day is all it takes.</p>
        <Link to="/practice" className="mt-5 inline-flex rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow">
          Start practicing
        </Link>
      </div>
    </div>
  );
}
