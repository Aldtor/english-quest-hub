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
      { name: "description", content: "Choose a section of the book and begin reading." },
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
      <div className="flex items-baseline justify-between border-b border-foreground/20 pb-5">
        <div>
          <p className="small-caps text-xs text-muted-foreground">Section II · The Library</p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            Choose your <span className="italic">practice.</span>
          </h1>
        </div>
        <p className="hidden serif-italic text-sm text-muted-foreground sm:block">Eight sections, one quiet rhythm.</p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search the index…"
            className="w-full border-0 border-b border-foreground/30 bg-transparent py-3 pl-7 pr-4 text-sm placeholder:italic placeholder:text-muted-foreground/70 outline-none focus:border-foreground"
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="small-caps mr-2 text-xs text-muted-foreground">Level</span>
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setDiff(d)}
              className={cn(
                "px-3 py-1.5 text-xs transition-colors",
                diff === d ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-px bg-foreground/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((c, i) => (
          <CategoryCard key={c.slug} category={c} completions={progress.categoryCompletions[c.slug] ?? 0} index={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-16 text-center serif-italic text-muted-foreground">No entries match your search.</p>
      )}
    </div>
  );
}
