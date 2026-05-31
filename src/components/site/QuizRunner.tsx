import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Check, X } from "lucide-react";
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
      const finalCorrect = correct;
      onFinish({ correct: finalCorrect, total, percent: (finalCorrect / total) * 100 });
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
        <span className="font-medium text-muted-foreground">{title}</span>
        <span className="font-mono text-muted-foreground">{minutes}:{seconds}</span>
      </div>

      <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>Question {idx + 1} of {questions.length}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full bg-gradient-brand"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="flex items-center gap-2">
            <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", diffColor)}>{q.difficulty}</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">{q.question}</h2>

          <div className="mt-6 space-y-3">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isSel = i === selected;
              const state =
                selected === null
                  ? "idle"
                  : isAnswer
                    ? "correct"
                    : isSel
                      ? "wrong"
                      : "muted";
              return (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  disabled={selected !== null}
                  className={cn(
                    "group flex w-full items-center justify-between gap-3 rounded-2xl border-2 px-5 py-4 text-left transition-all",
                    state === "idle" && "border-border bg-background hover:border-primary hover:bg-accent/50",
                    state === "correct" && "border-success bg-success/10 text-foreground",
                    state === "wrong" && "border-destructive bg-destructive/10 text-foreground",
                    state === "muted" && "border-border bg-background opacity-60"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className={cn(
                      "grid h-7 w-7 place-items-center rounded-full border text-xs font-bold",
                      state === "correct" && "border-success bg-success text-success-foreground",
                      state === "wrong" && "border-destructive bg-destructive text-destructive-foreground",
                      state === "idle" && "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary",
                      state === "muted" && "border-border text-muted-foreground"
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
                className="mt-6 overflow-hidden"
              >
                <div className={cn(
                  "rounded-2xl border p-4 text-sm",
                  selected === q.answer
                    ? "border-success/30 bg-success/10"
                    : "border-destructive/30 bg-destructive/10"
                )}>
                  <p className="font-semibold">
                    {selected === q.answer ? "Correct!" : "Not quite."}
                  </p>
                  <p className="mt-1 text-muted-foreground">{q.explanation}</p>
                </div>
                <button
                  onClick={next}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
                >
                  {idx + 1 >= questions.length ? "See Results" : "Next Question"}
                  <span className="ml-2">→</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
