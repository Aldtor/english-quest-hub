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

  const diffLabel = useMemo(() => q.difficulty.toLowerCase(), [q.difficulty]);

  return (
    <div className="mx-auto max-w-3xl px-2">
      {/* Editorial masthead */}
      <div className="border-y border-foreground/30 py-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground flex items-center justify-between">
        <span>{title}</span>
        <span className="font-mono num-tabular">{minutes}:{seconds}</span>
      </div>

      <div className="mt-3 flex items-baseline justify-between text-xs text-muted-foreground">
        <span className="small-caps">Question {idx + 1} of {questions.length}</span>
        <span className="serif-italic">{diffLabel}</span>
      </div>
      <div className="mt-2 h-px w-full bg-foreground/15">
        <motion.div
          className="h-full bg-foreground"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={q.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-10"
        >
          <p className="small-caps text-xs text-muted-foreground">No. {String(idx + 1).padStart(2, "0")}</p>
          <h2 className="mt-3 font-display text-3xl leading-[1.1] sm:text-4xl">{q.question}</h2>

          <ol className="mt-8 divide-y divide-foreground/15 border-y border-foreground/15">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isSel = i === selected;
              const state =
                selected === null ? "idle" : isAnswer ? "correct" : isSel ? "wrong" : "muted";
              return (
                <li key={i}>
                  <button
                    onClick={() => choose(i)}
                    disabled={selected !== null}
                    className={cn(
                      "group flex w-full items-baseline justify-between gap-4 py-4 text-left transition-colors",
                      state === "idle" && "hover:bg-foreground hover:text-background hover:px-3",
                      state === "correct" && "bg-foreground text-background px-3",
                      state === "wrong" && "line-through text-muted-foreground px-3",
                      state === "muted" && "opacity-50"
                    )}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="serif-italic w-5 text-current/70">{String.fromCharCode(97 + i)}.</span>
                      <span className="font-medium">{opt}</span>
                    </span>
                    {state === "correct" && <Check className="h-5 w-5 shrink-0" />}
                    {state === "wrong" && <X className="h-5 w-5 shrink-0" />}
                  </button>
                </li>
              );
            })}
          </ol>

          <AnimatePresence>
            {selected !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-8 border-l-2 border-foreground pl-5">
                  <p className="small-caps text-xs text-muted-foreground">
                    {selected === q.answer ? "Editor's note · correct" : "Editor's note · not quite"}
                  </p>
                  <p className="mt-2 font-display text-xl italic leading-snug">{q.explanation}</p>
                </div>
                <button
                  onClick={next}
                  className="mt-8 inline-flex border border-foreground bg-foreground px-7 py-3 text-sm text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  {idx + 1 >= questions.length ? "See the verdict →" : "Next question →"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
