import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import type { Question } from "@/lib/questions";
import { cn } from "@/lib/utils";

interface Props {
  questions: Question[];
  onFinish: (result: { correct: number; total: number; percent: number }) => void;
  title: string;
}

export function QuizRunner({ questions, onFinish, title }: Props) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [time, setTime] = useState(0);

  const q = questions[idx];
  const progress = ((idx + (selected !== null ? 1 : 0)) / questions.length) * 100;

  useEffect(() => {
    const t = setInterval(() => setTime((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setCorrect((c) => c + 1);
  };

  const next = () => {
    if (idx + 1 >= questions.length) {
      const total = questions.length;
      onFinish({ correct, total, percent: (correct / total) * 100 });
      return;
    }
    setIdx(idx + 1);
    setSelected(null);
  };

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  const diffColor = useMemo(() => {
    return q.difficulty === "Easy"
      ? "bg-success/15 text-success"
      : q.difficulty === "Medium"
        ? "bg-warning/20 text-warning-foreground"
        : "bg-destructive/15 text-destructive";
  }, [q.difficulty]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center justify-between text-sm">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</span>
        <span className="font-mono text-xs text-muted-foreground num-tabular">{minutes}:{seconds}</span>
      </div>

      <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>Question {idx + 1} of {questions.length}</span>
        <span className="num-tabular">{Math.round(progress)}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-foreground"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-8 rounded-3xl border border-foreground/10 bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="flex items-center gap-2">
            <span className={cn("rounded-full px-3 py-1 text-xs font-medium", diffColor)}>{q.difficulty}</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">{q.question}</h2>

          <div className="mt-7 space-y-2.5">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isSel = i === selected;
              const state =
                selected === null ? "idle" : isAnswer ? "correct" : isSel ? "wrong" : "muted";
              return (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  disabled={selected !== null}
                  className={cn(
                    "group flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-3.5 text-left transition-all",
                    state === "idle" && "border-foreground/10 bg-background hover:border-foreground/40 hover:bg-muted",
                    state === "correct" && "border-success/40 bg-success/10",
                    state === "wrong" && "border-destructive/40 bg-destructive/10",
                    state === "muted" && "border-foreground/10 bg-background opacity-55"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className={cn(
                      "grid h-7 w-7 place-items-center rounded-lg border text-xs font-semibold",
                      state === "correct" && "border-success bg-success text-success-foreground",
                      state === "wrong" && "border-destructive bg-destructive text-destructive-foreground",
                      state === "idle" && "border-foreground/15 text-muted-foreground group-hover:border-foreground/40 group-hover:text-foreground",
                      state === "muted" && "border-foreground/10 text-muted-foreground"
                    )}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="font-medium">{opt}</span>
                  </span>
                  {state === "correct" && <Check className="h-5 w-5 text-success" />}
                  {state === "wrong" && <X className="h-5 w-5 text-destructive" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {selected !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className={cn(
                  "mt-6 rounded-2xl border p-4 text-sm",
                  selected === q.answer ? "border-success/30 bg-success/10" : "border-destructive/30 bg-destructive/10"
                )}>
                  <p className="font-semibold">{selected === q.answer ? "Correct" : "Not quite"}</p>
                  <p className="mt-1 text-muted-foreground">{q.explanation}</p>
                </div>
                <button
                  onClick={next}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
                >
                  {idx + 1 >= questions.length ? "See results" : "Next question"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
