import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Flame, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { getDailyQuestions } from "@/lib/questions";
import { QuizRunner } from "@/components/site/QuizRunner";
import { recordDaily, recordQuizCompletion, todayKey, useProgress } from "@/lib/storage";

export const Route = createFileRoute("/daily")({
  head: () => ({
    meta: [
      { title: "Daily Challenge — EnglishQuest" },
      { name: "description", content: "Five fresh questions every day. Keep your streak going." },
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
  const dateStr = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });

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
            if (percent >= 80) confetti({ particleCount: 110, spread: 70, origin: { y: 0.6 } });
          }}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <div className="overflow-hidden rounded-3xl bg-foreground text-background">
        <div className="p-8 sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-medium">
            <Flame className="h-3.5 w-3.5 text-secondary" />
            {dateStr}
          </span>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Today's<br />
            <span className="text-background/70">five questions.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-background/75">
            A fresh mix across every topic. Take a few minutes, see your score, keep the streak.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <Pill label="Streak" value={`${progress.streak}`} suffix={progress.streak === 1 ? "day" : "days"} />
            <Pill
              label="Today"
              value={progress.lastDailyDate === today && progress.lastDailyScore !== null ? `${progress.lastDailyScore}` : "—"}
              suffix={progress.lastDailyDate === today && progress.lastDailyScore !== null ? "%" : ""}
            />
            <Pill label="Status" value={alreadyDoneToday ? "Done" : "Ready"} />
          </div>

          {done ? (
            <div className="mt-8 rounded-2xl border border-background/15 bg-background/10 p-6">
              <CheckCircle2 className="h-7 w-7 text-secondary" />
              <h2 className="mt-3 font-display text-2xl font-semibold">Nice work.</h2>
              <p className="mt-2 text-sm text-background/80">
                You scored <span className="font-semibold text-background">{done.correct} of {done.total}</span>. Come back tomorrow to keep your streak.
              </p>
              <Link to="/practice" className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground">
                Practice more <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ) : alreadyDoneToday ? (
            <div className="mt-8">
              <p className="text-sm text-background/80">You've already finished today's challenge. See you tomorrow.</p>
              <button
                onClick={() => setStarted(true)}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-background/25 px-5 py-2.5 text-sm font-medium text-background hover:bg-background hover:text-foreground"
              >
                Try again anyway
              </button>
            </div>
          ) : (
            <button
              onClick={() => setStarted(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Start today's challenge
              <ArrowUpRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Pill({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="rounded-xl border border-background/15 bg-background/5 px-4 py-3">
      <div className="text-[10px] font-medium uppercase tracking-wider text-background/60">{label}</div>
      <div className="mt-1 font-display text-2xl font-semibold tracking-tight num-tabular">
        {value}
        {suffix && <span className="ml-0.5 text-xs font-normal text-background/60">{suffix}</span>}
      </div>
    </div>
  );
}
