import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Trophy, RotateCcw, LayoutGrid, Check, X } from "lucide-react";
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
      { title: "Your results — EnglishQuest" },
      { name: "description", content: "Quiz results." },
    ],
  }),
  component: Results,
});

function message(p: number) {
  if (p === 100) return "Perfect. Couldn't have gone better.";
  if (p >= 80) return "Excellent — you're on a roll.";
  if (p >= 60) return "Solid effort. Almost there.";
  if (p >= 40) return "Good start. Keep going.";
  return "Every attempt makes the next one sharper.";
}

function Results() {
  const { correct, total, category } = Route.useSearch();
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const cat = getCategory(category);

  useEffect(() => {
    if (percent >= 80) {
      const end = Date.now() + 800;
      (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  }, [percent]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="overflow-hidden rounded-3xl border border-foreground/10 bg-card p-8 shadow-soft sm:p-12"
      >
        <div className="text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-foreground text-background">
            <Trophy className="h-8 w-8" />
          </div>
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">{cat?.name ?? "Quiz"} · complete</p>
          <div className="mt-3 font-display text-[clamp(5rem,18vw,9rem)] font-semibold leading-[0.9] tracking-[-0.04em] num-tabular">
            {percent}<span className="text-4xl text-muted-foreground">%</span>
          </div>
          <p className="mt-3 text-lg font-medium">{message(percent)}</p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3">
          <Cell label="Score" value={`${correct}/${total}`} />
          <Cell label="Correct" value={String(correct)} icon={<Check className="h-3.5 w-3.5 text-success" />} />
          <Cell label="Missed" value={String(total - correct)} icon={<X className="h-3.5 w-3.5 text-destructive" />} />
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/quiz/$category"
            params={{ category }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
          >
            <RotateCcw className="h-4 w-4" /> Try again
          </Link>
          <Link
            to="/practice"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-background px-6 py-3 text-sm font-medium hover:bg-muted"
          >
            <LayoutGrid className="h-4 w-4" /> All topics
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function Cell({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-foreground/10 bg-background px-4 py-3 text-center">
      <div className="flex items-center justify-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{icon}{label}</div>
      <div className="mt-1 font-display text-2xl font-semibold tracking-tight num-tabular">{value}</div>
    </div>
  );
}
