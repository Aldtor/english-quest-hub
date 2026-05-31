import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Flame, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { getDailyQuestions } from "@/lib/questions";
import { QuizRunner } from "@/components/site/QuizRunner";
import { recordDaily, recordQuizCompletion, todayKey, useProgress } from "@/lib/storage";

export const Route = createFileRoute("/daily")({
  head: () => ({
    meta: [
      { title: "Daily Challenge — EnglishQuest" },
      { name: "description", content: "5 fresh English questions every day. Keep your streak alive." },
    ],
  }),
  component: Daily,
});

function Daily() {
  const today = todayKey();
  const questions = useMemo(() => getDailyQuestions(today, 5), [today]);
  const [progress] = useProgress();
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState<{ correct: number; total: number } | null>(null);
  const alreadyDoneToday = progress.lastDailyDate === today && !started && !done;

  if (started && !done) {
    return (
      <div className="px-4 py-10 sm:py-16">
        <QuizRunner
          title="Daily Challenge"
          questions={questions}
          onFinish={({ correct, total, percent }) => {
            recordQuizCompletion(percent, "daily");
            recordDaily(percent);
            setDone({ correct, total });
            if (percent >= 80) confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
          }}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-glow sm:p-12">
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            <Flame className="h-3.5 w-3.5" /> {new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">Today's Challenge</h1>
          <p className="mt-3 max-w-md text-primary-foreground/90">
            Five hand-picked questions across every category. Take a few minutes, score points, keep your streak alive.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Pill label="Streak" value={`${progress.streak} 🔥`} />
            <Pill label="Today's score" value={progress.lastDailyDate === today && progress.lastDailyScore !== null ? `${progress.lastDailyScore}%` : "—"} />
            <Pill label="Status" value={alreadyDoneToday ? "Completed" : "Ready"} />
          </div>

          {done ? (
            <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <CheckCircle2 className="h-8 w-8" />
              <h2 className="mt-3 font-display text-2xl font-bold">Nice work!</h2>
              <p className="mt-1 text-primary-foreground/90">You scored {done.correct} / {done.total}. Come back tomorrow to keep your streak.</p>
              <Link to="/practice" className="mt-5 inline-flex rounded-full bg-background px-5 py-2.5 font-semibold text-foreground shadow-soft">
                Practice more
              </Link>
            </div>
          ) : alreadyDoneToday ? (
            <div className="mt-8">
              <p className="text-primary-foreground/90">You've already completed today's challenge. See you tomorrow!</p>
              <button
                onClick={() => setStarted(true)}
                className="mt-4 inline-flex rounded-full bg-background px-5 py-2.5 font-semibold text-foreground shadow-soft"
              >
                Practice again
              </button>
            </div>
          ) : (
            <button
              onClick={() => setStarted(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 font-semibold text-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              Start Today's Challenge →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
      <div className="text-xs uppercase tracking-widest text-primary-foreground/70">{label}</div>
      <div className="mt-1 font-display text-xl font-bold">{value}</div>
    </div>
  );
}
