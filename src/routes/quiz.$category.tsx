import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { getCategory, shuffleQuestions } from "@/lib/questions";
import { QuizRunner } from "@/components/site/QuizRunner";
import { recordQuizCompletion } from "@/lib/storage";

export const Route = createFileRoute("/quiz/$category")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.category} quiz — EnglishQuest` },
      { name: "description", content: `Practice ${params.category} questions on EnglishQuest.` },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { category } = Route.useParams();
  const navigate = useNavigate();
  const cat = getCategory(category);

  const questions = useMemo(() => {
    if (!cat) return [];
    const key = `eq:seen:${cat.slug}`;
    let seen: string[] = [];
    if (typeof sessionStorage !== "undefined") {
      try { seen = JSON.parse(sessionStorage.getItem(key) || "[]"); } catch {}
    }
    const wanted = Math.min(10, cat.questions.length);
    let remaining = cat.questions.filter((q) => !seen.includes(q.id));
    // If not enough unseen left to fill a full round, reset the seen list.
    if (remaining.length < wanted) {
      seen = [];
      remaining = cat.questions;
    }
    const pool = shuffleQuestions(remaining).slice(0, wanted);
    if (typeof sessionStorage !== "undefined") {
      try {
        sessionStorage.setItem(key, JSON.stringify([...seen, ...pool.map((q) => q.id)]));
      } catch {}
    }
    return pool;
  }, [cat]);

  if (!cat) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Category not found</h1>
        <p className="mt-2 text-muted-foreground">That category doesn't exist.</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">No questions yet</h1>
        <p className="mt-2 text-muted-foreground">Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-10 sm:py-16">
      <QuizRunner
        title={cat.name}
        questions={questions}
        onFinish={({ correct, total, percent }) => {
          recordQuizCompletion(percent, cat.slug);
          navigate({
            to: "/results",
            search: { correct, total, category: cat.slug },
          });
        }}
      />
    </div>
  );
}
