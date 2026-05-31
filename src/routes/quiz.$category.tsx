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
    const pool = shuffleQuestions(cat.questions);
    return pool.slice(0, Math.min(10, pool.length));
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
