import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/questions";
import { useProgress } from "@/lib/storage";
import { CategoryCard } from "@/components/site/CategoryCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnglishQuest — A Daily Reader for the English Language" },
      { name: "description", content: "An editorial English practice journal. Grammar, vocabulary, reading, and more — set in serif, kept in your browser." },
    ],
  }),
  component: Home,
});

const pillars = [
  { numeral: "I", title: "Read closely.", text: "Every prompt is short, every explanation considered. You learn by attending to the sentence." },
  { numeral: "II", title: "Answer plainly.", text: "Four options, one truth. Mistakes are met with reasoning, not with shame." },
  { numeral: "III", title: "Return tomorrow.", text: "A few minutes a day, gently kept. The streak you build is yours, not ours." },
];

const faqs = [
  { q: "Is it really free?", a: "Yes — no accounts, no payments, no advertising. The whole work runs in your browser." },
  { q: "Will I be tracked?", a: "No. Your progress is written to localStorage on this device. We have no server to write to." },
  { q: "Does my progress sync across devices?", a: "It does not. Each device keeps its own journal. We think that's a feature." },
  { q: "How long should a session take?", a: "Five minutes is plenty. The point is the rhythm, not the volume." },
];

function Home() {
  const [progress] = useProgress();
  const today = new Date().toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const totalQ = categories.reduce((s, c) => s + c.questions.length, 0);

  return (
    <div>
      {/* MASTHEAD */}
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b border-foreground/20 py-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>Vol. I · No. 01</span>
            <span className="hidden sm:inline serif-italic normal-case tracking-normal text-sm">A reader for the English language</span>
            <span>{today}</span>
          </div>

          <div className="grid gap-10 py-14 md:grid-cols-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8"
            >
              <p className="small-caps text-xs text-muted-foreground">The Front Page</p>
              <h1 className="mt-4 font-display text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95]">
                Improve your English,
                <br />
                <span className="italic">one sentence</span> at a time.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A quiet, editorial place to practise the language — grammar set in serif, vocabulary printed with care, your progress kept in your own pocket.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  to="/practice"
                  className="border border-foreground bg-foreground px-7 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  Begin reading
                </Link>
                <Link to="/daily" className="ink-link serif-italic text-lg">
                  or take today's challenge →
                </Link>
              </div>
            </motion.div>

            {/* Reader's ledger card */}
            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4"
            >
              <div className="border border-foreground/20 bg-card p-6">
                <div className="flex items-baseline justify-between">
                  <p className="small-caps text-xs text-muted-foreground">Reader's Ledger</p>
                  <span className="serif-italic text-xs text-muted-foreground">private</span>
                </div>
                <hr className="my-4 border-t border-foreground/15" />
                <LedgerRow label="Days kept" value={`${progress.streak}`} suffix={progress.streak === 1 ? "day" : "days"} />
                <LedgerRow label="Highest mark" value={`${progress.bestScore}`} suffix="%" />
                <LedgerRow label="Quizzes read" value={`${progress.totalQuizzes}`} suffix="total" />
                <hr className="my-4 border-t border-foreground/15" />
                <p className="text-xs italic text-muted-foreground">
                  Saved in this browser, on this device. Nowhere else.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* THREE PILLARS — editorial three-column */}
      <section className="border-y border-foreground/15 bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-3xl sm:text-4xl">A method, in three parts.</h2>
            <span className="hidden serif-italic text-sm text-muted-foreground sm:inline">An essay in brief</span>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:divide-x md:divide-foreground/15">
            {pillars.map((p, i) => (
              <motion.div
                key={p.numeral}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <div className="font-display text-5xl italic text-muted-foreground">{p.numeral}.</div>
                <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground drop-cap">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES — index of sections */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-6 border-b border-foreground/20 pb-4">
          <div>
            <p className="small-caps text-xs text-muted-foreground">Section II</p>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl">Index of practice.</h2>
          </div>
          <Link to="/practice" className="ink-link hidden text-sm sm:inline">View all eight →</Link>
        </div>
        <div className="mt-8 grid gap-px bg-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 4).map((c, i) => (
            <CategoryCard key={c.slug} category={c} completions={progress.categoryCompletions[c.slug] ?? 0} index={i} />
          ))}
        </div>
      </section>

      {/* DAILY — feature spread */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid items-stretch gap-px bg-foreground/15 md:grid-cols-2">
          <div className="bg-card p-8 sm:p-12">
            <p className="small-caps text-xs text-muted-foreground">The Daily Column</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Five questions. <span className="italic">One day.</span> Kept by you.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              A fresh, seeded selection drawn each morning from every section of the book. Print it on your mind, then come back tomorrow.
            </p>
            <Link
              to="/daily"
              className="mt-7 inline-flex border border-foreground bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Read today's column →
            </Link>
          </div>
          <div className="bg-background p-8 sm:p-12">
            <p className="small-caps text-xs text-muted-foreground">Excerpt</p>
            <p className="mt-4 font-display text-2xl italic leading-snug sm:text-3xl">
              "Despite the rain, the marathon proceeded as planned."
            </p>
            <p className="mt-2 text-xs text-muted-foreground">— What does the sentence imply?</p>
            <ol className="mt-6 space-y-2 text-sm">
              {["The event was cancelled.", "The event continued anyway.", "The event was shortened."].map((o, i) => (
                <li key={i} className={cn(
                  "flex gap-3 border-b border-foreground/10 py-2",
                  i === 1 && "font-medium"
                )}>
                  <span className="serif-italic w-5 text-muted-foreground">{["a","b","c"][i]}.</span>
                  <span>{o}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* STATS — ledger */}
      <section className="border-y border-foreground/15 bg-card">
        <div className="mx-auto grid max-w-6xl gap-px bg-foreground/15 px-0 sm:grid-cols-3">
          <Stat label="Entries in the library" value={`${totalQ}+`} />
          <Stat label="Sections of practice" value="8" />
          <Stat label="Subscription fee" value="—" suffix="free, always" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="small-caps text-xs text-muted-foreground">Correspondence</p>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl">Letters to the editor.</h2>
        <div className="mt-8 divide-y divide-foreground/15 border-y border-foreground/15">
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>
    </div>
  );
}

function LedgerRow({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="flex items-baseline justify-between py-2">
      <span className="small-caps text-xs text-muted-foreground">{label}</span>
      <span className="font-display text-2xl num-tabular">
        {value}
        {suffix && <span className="ml-1 text-xs italic text-muted-foreground">{suffix}</span>}
      </span>
    </div>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="bg-card px-6 py-10 text-center">
      <div className="font-display text-6xl leading-none">{value}</div>
      <div className="mt-3 small-caps text-xs text-muted-foreground">{label}</div>
      {suffix && <div className="mt-1 serif-italic text-sm text-muted-foreground">{suffix}</div>}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-xl">{q}</span>
        <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform text-muted-foreground", open && "rotate-180")} />
      </button>
      <div className={cn("grid overflow-hidden transition-all", open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{a}</div>
      </div>
    </div>
  );
}
