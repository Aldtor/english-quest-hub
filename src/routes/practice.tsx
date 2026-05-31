import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, type Difficulty } from "@/lib/questions";
import { useProgress } from "@/lib/storage";
import { CategoryCard } from "@/components/site/CategoryCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice — EnglishQuest" },
      { name: "description", content: "Pick a topic and start practicing." },
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
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Practice</p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
          Pick a <span className="text-secondary">topic.</span>
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">Eight focused topics. Choose one, set the pace, build the habit.</p>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search topics…"
            className="w-full rounded-full border border-foreground/15 bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
          />
        </div>
        <div className="flex items-center gap-1 rounded-full border border-foreground/15 bg-card p-1">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setDiff(d)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                diff === d ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((c, i) => (
          <CategoryCard key={c.slug} category={c} completions={progress.categoryCompletions[c.slug] ?? 0} index={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">No topics match your search.</p>
      )}
    </div>
  );
}
