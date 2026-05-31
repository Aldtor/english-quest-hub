import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { getDailyQuestions } from "@/lib/questions";
import { QuizRunner } from "@/components/site/QuizRunner";
import { recordDaily, recordQuizCompletion, todayKey, useProgress } from "@/lib/storage";

export const Route = createFileRoute("/daily")({
  head: () => ({
    meta: [
      { title: "The Daily Column — EnglishQuest" },
      { name: "description", content: "Five fresh questions, set each morning. Keep your reading streak." },
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
  const dateStr = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  if (started && !done) {
    return (
      <div className="px-4 py-10 sm:py-16">
        <QuizRunner
          title="The Daily Column"
          questions={questions}
          onFinish={({ correct, total, percent }) => {
            recordQuizCompletion(percent, "daily");
            recordDaily(percent);
            setDone({ correct, total });
            if (percent >= 80) confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ["#1c1917", "#78716c", "#a8a29e"] });
          }}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <div className="border-y border-foreground/30 py-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground flex items-center justify-between">
        <span>The Daily Column</span>
        <span>{dateStr}</span>
      </div>

      <h1 className="mt-10 font-display text-6xl leading-[0.95] sm:text-7xl">
        Today's <span className="italic">five.</span>
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground drop-cap">
        Five hand-picked questions across every section of the book. Take a quiet five minutes — answer plainly, read the reasoning, and keep your streak alive.
      </p>

      <div className="mt-10 grid grid-cols-3 divide-x divide-foreground/15 border-y border-foreground/15">
        <Cell label="Streak" value={`${progress.streak}`} suffix={progress.streak === 1 ? "day" : "days"} />
        <Cell
          label="Today's mark"
          value={progress.lastDailyDate === today && progress.lastDailyScore !== null ? `${progress.lastDailyScore}` : "—"}
          suffix={progress.lastDailyDate === today && progress.lastDailyScore !== null ? "%" : "unread"}
        />
        <Cell label="Status" value={alreadyDoneToday ? "Read" : "Ready"} suffix={alreadyDoneToday ? "✓" : "·"} />
      </div>

      {done ? (
        <div className="mt-10 border border-foreground/20 bg-card p-8">
          <p className="small-caps text-xs text-muted-foreground">Note from the editor</p>
          <h2 className="mt-2 font-display text-3xl">Well read.</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            You scored <span className="font-medium text-foreground">{done.correct} of {done.total}</span>. Return tomorrow to keep your streak.
          </p>
          <Link to="/practice" className="mt-5 inline-block ink-link serif-italic text-base">
            Read another section →
          </Link>
        </div>
      ) : alreadyDoneToday ? (
        <div className="mt-10">
          <p className="serif-italic text-muted-foreground">You've finished today's column. Until tomorrow.</p>
          <button
            onClick={() => setStarted(true)}
            className="mt-4 inline-flex border border-foreground/30 px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            Read it again
          </button>
        </div>
      ) : (
        <button
          onClick={() => setStarted(true)}
          className="mt-10 inline-flex border border-foreground bg-foreground px-7 py-3.5 text-sm text-background transition-colors hover:bg-background hover:text-foreground"
        >
          Begin today's column →
        </button>
      )}
    </div>
  );
}

function Cell({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="px-4 py-5 text-center">
      <div className="small-caps text-[10px] text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-3xl leading-none num-tabular">
        {value}
        {suffix && <span className="ml-1 text-xs italic text-muted-foreground">{suffix}</span>}
      </div>
    </div>
  );
}
