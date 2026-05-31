import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import confetti from "canvas-confetti";
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
      { title: "The Verdict — EnglishQuest" },
      { name: "description", content: "Your reading mark." },
    ],
  }),
  component: Results,
});

function message(p: number) {
  if (p === 100) return "Faultless. The page is yours.";
  if (p >= 80) return "Outstanding — a clear, careful read.";
  if (p >= 60) return "Solid. A little more, and you'll be there.";
  if (p >= 40) return "A good start. Return tomorrow.";
  return "Keep at it — every reading sharpens the next.";
}

function Results() {
  const { correct, total, category } = Route.useSearch();
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const cat = getCategory(category);

  useEffect(() => {
    if (percent >= 80) {
      const end = Date.now() + 800;
      const colors = ["#1c1917", "#57534e", "#a8a29e", "#e7e5e4"];
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
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="border-y border-foreground/30 py-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground flex items-center justify-between">
          <span>The Verdict</span>
          <span>{cat?.name ?? "Practice"}</span>
        </div>

        <div className="py-12 text-center">
          <p className="small-caps text-xs text-muted-foreground">Your mark</p>
          <div className="mt-3 font-display text-[clamp(7rem,22vw,12rem)] leading-[0.85] num-tabular">
            {percent}<span className="text-5xl italic text-muted-foreground">%</span>
          </div>
          <p className="mt-4 serif-italic text-2xl">{message(percent)}</p>
        </div>

        <div className="grid grid-cols-3 divide-x divide-foreground/15 border-y border-foreground/15">
          <Cell label="Score" value={`${correct}/${total}`} />
          <Cell label="Correct" value={String(correct)} />
          <Cell label="Missed" value={String(total - correct)} />
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/quiz/$category"
            params={{ category }}
            className="inline-flex flex-1 items-center justify-center border border-foreground bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-background hover:text-foreground"
          >
            Read it again
          </Link>
          <Link
            to="/practice"
            className="inline-flex flex-1 items-center justify-center border border-foreground/30 px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            Back to the library
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-5 text-center">
      <div className="small-caps text-[10px] text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-3xl num-tabular">{value}</div>
    </div>
  );
}
