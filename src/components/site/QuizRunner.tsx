import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, X, ArrowRight, Flame, Sparkles, SkipForward, Pause, Play, Clock } from "lucide-react";
import type { Question } from "@/lib/questions";
import { cn } from "@/lib/utils";

interface Props {
  questions: Question[];
  onFinish: (result: {
    correct: number;
    total: number;
    percent: number;
    timeSec: number;
    bestStreak: number;
    review: { q: Question; chosen: number | null }[];
  }) => void;
  title: string;
  /** Seconds per question; 0 disables. Default 30 */
  perQuestionSeconds?: number;
}

export function QuizRunner({ questions, onFinish, title, perQuestionSeconds = 30 }: Props) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [time, setTime] = useState(0);
  const [qTime, setQTime] = useState(perQuestionSeconds);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [fiftyUsed, setFiftyUsed] = useState(false);
  const reviewRef = useRef<{ q: Question; chosen: number | null }[]>([]);

  const q = questions[idx];
  const answered = selected !== null;
  const progress = ((idx + (answered ? 1 : 0)) / questions.length) * 100;

  // Global timer
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setTime((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [paused]);

  // Per-question countdown
  useEffect(() => {
    setQTime(perQuestionSeconds);
  }, [idx, perQuestionSeconds]);

  useEffect(() => {
    if (paused || answered || perQuestionSeconds === 0) return;
    if (qTime <= 0) {
      // time out — record as skipped (no answer)
      reviewRef.current.push({ q, chosen: null });
      setSelected(-1);
      setStreak(0);
      return;
    }
    const t = setTimeout(() => setQTime((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [qTime, answered, paused, perQuestionSeconds, q]);

  const choose = useCallback(
    (i: number) => {
      if (answered) return;
      setSelected(i);
      reviewRef.current.push({ q, chosen: i });
      if (i === q.answer) {
        setCorrect((c) => c + 1);
        setStreak((s) => {
          const ns = s + 1;
          setBestStreak((b) => Math.max(b, ns));
          return ns;
        });
      } else {
        setStreak(0);
      }
    },
    [answered, q]
  );

  const next = useCallback(() => {
    if (idx + 1 >= questions.length) {
      const total = questions.length;
      onFinish({
        correct,
        total,
        percent: (correct / total) * 100,
        timeSec: time,
        bestStreak,
        review: reviewRef.current,
      });
      return;
    }
    setIdx((n) => n + 1);
    setSelected(null);
    setHiddenOptions([]);
  }, [idx, questions.length, correct, onFinish, time, bestStreak]);

  const skip = useCallback(() => {
    if (answered) return;
    reviewRef.current.push({ q, chosen: null });
    setSelected(-1);
    setStreak(0);
  }, [answered, q]);

  const useFifty = useCallback(() => {
    if (fiftyUsed || answered) return;
    const wrong = q.options.map((_, i) => i).filter((i) => i !== q.answer);
    // shuffle and pick 2
    for (let i = wrong.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wrong[i], wrong[j]] = [wrong[j], wrong[i]];
    }
    setHiddenOptions(wrong.slice(0, 2));
    setFiftyUsed(true);
  }, [fiftyUsed, answered, q]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const k = e.key.toLowerCase();
      if (!answered) {
        if (["1", "2", "3", "4"].includes(k)) {
          const i = parseInt(k, 10) - 1;
          if (i < q.options.length && !hiddenOptions.includes(i)) choose(i);
        }
        if (["a", "b", "c", "d"].includes(k)) {
          const i = k.charCodeAt(0) - 97;
          if (i < q.options.length && !hiddenOptions.includes(i)) choose(i);
        }
        if (k === "s") skip();
        if (k === "h") useFifty();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (k === "p") setPaused((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answered, q.options.length, hiddenOptions, choose, next, skip, useFifty]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  const diffColor = useMemo(() => {
    return q.difficulty === "Easy"
      ? "bg-success/15 text-success border-success/30"
      : q.difficulty === "Medium"
        ? "bg-warning/20 text-warning-foreground border-warning/30"
        : "bg-destructive/15 text-destructive border-destructive/30";
  }, [q.difficulty]);

  const qPct = perQuestionSeconds > 0 ? (qTime / perQuestionSeconds) * 100 : 100;
  const qLow = perQuestionSeconds > 0 && qTime <= 5 && !answered;
  const isTimeout = selected === -1;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Top bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</span>
        <div className="flex items-center gap-2">
          {streak >= 2 && (
            <span className="inline-flex items-center gap-1 rounded-full border border-warning/30 bg-warning/10 px-2.5 py-1 text-xs font-medium text-warning-foreground">
              <Flame className="h-3.5 w-3.5" /> {streak} streak
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-card px-2.5 py-1 font-mono text-xs num-tabular text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> {minutes}:{seconds}
          </span>
          <button
            onClick={() => setPaused((p) => !p)}
            title={paused ? "Resume (P)" : "Pause (P)"}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-foreground/10 bg-card text-muted-foreground hover:text-foreground"
          >
            {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Progress */}
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

      {/* Question dots */}
      <div className="mt-3 flex flex-wrap gap-1">
        {questions.map((_, i) => {
          const r = reviewRef.current[i];
          const state = i === idx ? "current" : !r ? "todo" : r.chosen === null ? "skip" : r.chosen === questions[i].answer ? "ok" : "bad";
          return (
            <span
              key={i}
              className={cn(
                "h-1.5 flex-1 min-w-[10px] rounded-full",
                state === "current" && "bg-foreground/60",
                state === "todo" && "bg-foreground/10",
                state === "ok" && "bg-success",
                state === "bad" && "bg-destructive",
                state === "skip" && "bg-warning"
              )}
            />
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-6 rounded-3xl border border-foreground/10 bg-card p-6 shadow-soft sm:p-8"
        >
          {/* Meta row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium", diffColor)}>
              {q.difficulty}
            </span>
            {perQuestionSeconds > 0 && (
              <div className="flex items-center gap-2">
                <span className={cn("font-mono text-xs num-tabular", qLow ? "text-destructive" : "text-muted-foreground")}>
                  {Math.max(0, qTime)}s
                </span>
                <div className="h-1 w-24 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className={cn("h-full", qLow ? "bg-destructive" : "bg-foreground/60")}
                    animate={{ width: `${qPct}%` }}
                    transition={{ duration: 0.4, ease: "linear" }}
                  />
                </div>
              </div>
            )}
          </div>

          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
            {q.question}
          </h2>

          {/* Options */}
          <div className="mt-7 space-y-2.5">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isSel = i === selected;
              const hidden = hiddenOptions.includes(i);
              const state =
                !answered ? "idle" : isAnswer ? "correct" : isSel ? "wrong" : "muted";
              return (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  disabled={answered || hidden}
                  className={cn(
                    "group flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-3.5 text-left transition-all",
                    hidden && "pointer-events-none opacity-25 line-through",
                    state === "idle" && !hidden && "border-foreground/10 bg-background hover:border-foreground/40 hover:bg-muted hover:-translate-y-0.5",
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

          {/* Helpers row */}
          {!answered && (
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <button
                onClick={useFifty}
                disabled={fiftyUsed}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border border-foreground/10 px-3 py-1.5 font-medium transition-colors",
                  fiftyUsed ? "opacity-40" : "hover:bg-muted"
                )}
                title="Remove two wrong answers (H)"
              >
                <Sparkles className="h-3.5 w-3.5" /> 50/50 {fiftyUsed && "· used"}
              </button>
              <button
                onClick={skip}
                className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 px-3 py-1.5 font-medium hover:bg-muted"
                title="Skip this question (S)"
              >
                <SkipForward className="h-3.5 w-3.5" /> Skip
              </button>
              <span className="ml-auto hidden text-muted-foreground sm:inline">
                Shortcuts: <kbd className="rounded border border-foreground/15 px-1">A–D</kbd> answer · <kbd className="rounded border border-foreground/15 px-1">Enter</kbd> next
              </span>
            </div>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className={cn(
                  "mt-6 rounded-2xl border p-4 text-sm",
                  isTimeout
                    ? "border-warning/40 bg-warning/10"
                    : selected === q.answer
                      ? "border-success/30 bg-success/10"
                      : "border-destructive/30 bg-destructive/10"
                )}>
                  <p className="font-semibold">
                    {isTimeout ? "Skipped" : selected === q.answer ? "Correct" : "Not quite"}
                  </p>
                  {selected !== q.answer && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Correct answer: <span className="font-semibold text-foreground">{String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}</span>
                    </p>
                  )}
                  <p className="mt-2 text-muted-foreground">{q.explanation}</p>
                </div>
                <button
                  onClick={next}
                  autoFocus
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

      {/* Pause overlay */}
      {paused && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-background/70 backdrop-blur-sm">
          <div className="rounded-2xl border border-foreground/10 bg-card p-6 text-center shadow-glow">
            <p className="font-display text-xl font-semibold">Paused</p>
            <p className="mt-1 text-sm text-muted-foreground">Press P or click to resume</p>
            <button
              onClick={() => setPaused(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background"
            >
              <Play className="h-4 w-4" /> Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
