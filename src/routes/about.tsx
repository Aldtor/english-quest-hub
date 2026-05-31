import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EnglishQuest" },
      { name: "description", content: "An editorial English practice journal. Quiet, daily, and entirely yours." },
    ],
  }),
  component: About,
});

const pillars = [
  { num: "I.", title: "Purpose.", text: "Make English practice feel less like an app and more like opening a book — short, beautiful, and worth returning to." },
  { num: "II.", title: "Method.", text: "Active recall paired with immediate, plain-spoken reasoning. Every mistake earns an explanation, never a scold." },
  { num: "III.", title: "Rhythm.", text: "Small, daily reps quietly compound. A streak makes the habit visible — addictive in the best way." },
  { num: "IV.", title: "Privacy.", text: "No accounts. No tracking. No backend at all. Your journal lives in this browser and nowhere else." },
];

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <p className="small-caps text-xs text-muted-foreground">Colophon</p>
      <h1 className="mt-3 font-display text-6xl leading-[0.95] sm:text-7xl">
        On <span className="italic">EnglishQuest.</span>
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground drop-cap">
        EnglishQuest is a small, quiet publication for anyone trying to read, write, and think more clearly in English. There is no login, no leaderboard, no algorithm. There is only the page, the question, and the small private satisfaction of returning tomorrow.
      </p>

      <div className="mt-14 grid gap-12 sm:grid-cols-2">
        {pillars.map((p) => (
          <article key={p.num} className="border-t border-foreground/20 pt-5">
            <div className="font-display text-3xl italic text-muted-foreground">{p.num}</div>
            <h2 className="mt-3 font-display text-2xl">{p.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t-2 border-foreground/30 pt-8 text-center">
        <p className="serif-italic text-xl text-muted-foreground">"A few minutes a day is all it takes."</p>
        <Link
          to="/practice"
          className="mt-6 inline-flex border border-foreground bg-foreground px-7 py-3 text-sm text-background transition-colors hover:bg-background hover:text-foreground"
        >
          Begin reading →
        </Link>
      </div>
    </div>
  );
}
