import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Trophy, RotateCcw, LayoutGrid, Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { getCategory } from "@/lib/questions";

interface Search {
  correct: number;
  total: number;
  category: string;
}

export const Route = createFileRoute("/results")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    correct: Number(s.correct ?? 0),
    total: Number(s.total ?? 0),
    category: String(s.category ?? "mixed"),
  }),
  head: () => ({
    meta: [
      { title: "Quiz Results — EnglishQuest" },
      { name: "description", content: "Your English quiz results." },
    ],
  }),
  component: Results,
});

function message(p: number) {
  if (p === 100) return "Flawless. Truly impressive.";
  if (p >= 80) return "Outstanding work — you're on fire!";
  if (p >= 60) return "Solid effort. A little more and you're there.";
  if (p >= 40) return "Good start. Practice makes perfect.";
  return "Keep going — every attempt makes you sharper.";
}

function Results() {
  const { correct, total, category } = Route.useSearch();
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const cat = getCategory(category);

  useEffect(() => {
    if (percent >= 80) {
      const end = Date.now() + 800;
      const colors = ["#6366f1", "#a855f7", "#22d3ee"];
      (function frame() {
        confetti({ particleCount: 4, angle: 60, spread: 70, origin: { x: 0 }, colors });
        confetti({ particleCount: 4, angle: 120, spread: 70, origin: { x: 1 }, colors });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  }, [percent]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-glow sm:p-12"
      >
        <div className="text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow">
            <Trophy className="h-10 w-10" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">{cat?.name ?? "Quiz"} complete</p>
          <h1 className="mt-2 font-display text-6xl font-extrabold text-gradient-brand sm:text-7xl">{percent}%</h1>
          <p className="mt-3 text-lg font-medium">{message(percent)}</p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <Stat label="Score" value={`${correct}/${total}`} />
          <Stat label="Correct" value={String(correct)} icon={<Check className="h-4 w-4 text-success" />} />
          <Stat label="Incorrect" value={String(total - correct)} icon={<X className="h-4 w-4 text-destructive" />} />
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/quiz/$category"
            params={{ category }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow"
          >
            <RotateCcw className="h-4 w-4" /> Retry Quiz
          </Link>
          <Link
            to="/practice"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold hover:bg-accent"
          >
            <LayoutGrid className="h-4 w-4" /> Back to Categories
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function Stat({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4 text-center">
      <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">{icon}{label}</div>
      <div className="mt-1 font-display text-2xl font-bold">{value}</div>
    </div>
  );
}
