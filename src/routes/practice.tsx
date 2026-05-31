import { createFileRoute } from "@tanstack/react-router";
import { Search, Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, type Difficulty } from "@/lib/questions";
import { useProgress } from "@/lib/storage";
import { CategoryCard } from "@/components/site/CategoryCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice — EnglishQuest" },
      { name: "description", content: "Choose a category and start practicing English." },
    ],
  }),
  component: Practice,
});

const difficulties: ("All" | Difficulty)[] = ["All", "Easy", "Medium", "Hard"];

function Practice() {
  const [progress] = useProgress();
  const [q, setQ] = useState("");
  const [diff, setDiff] = useState<"All" | Difficulty>("All");

  const filtered = useMemo(() => {
    return categories.filter((c) => {
      const matchesQ = !q || c.name.toLowerCase().includes(q.toLowerCase()) || c.description.toLowerCase().includes(q.toLowerCase());
      const matchesDiff = diff === "All" || c.slug === "mixed" || c.questions.some((qq) => qq.difficulty === diff);
      return matchesQ && matchesDiff;
    });
  }, [q, diff]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Choose your <span className="text-gradient-brand">practice</span></h1>
        <p className="mt-3 text-muted-foreground">Eight focused tracks. Pick one, set the pace, build the habit.</p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search categories..."
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm shadow-soft outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border bg-card p-1 shadow-soft">
          <Filter className="ml-3 h-4 w-4 text-muted-foreground" />
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setDiff(d)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                diff === d ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((c, i) => (
          <CategoryCard key={c.slug} category={c} completions={progress.categoryCompletions[c.slug] ?? 0} index={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">No categories match your search.</p>
      )}
    </div>
  );
}
