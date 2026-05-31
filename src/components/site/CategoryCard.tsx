import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Icon } from "./Icon";
import type { Category } from "@/lib/questions";

export function CategoryCard({ category, completions = 0, index = 0 }: { category: Category; completions?: number; index?: number }) {
  const count = category.questions.length || "All";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <Link
        to="/quiz/$category"
        params={{ category: category.slug }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
      >
        <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${category.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
        <div className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${category.accent} text-white shadow-glow`}>
          <Icon name={category.icon} className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
        <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted-foreground">
          <span>{count} questions</span>
          {completions > 0 && <span className="rounded-full bg-accent px-2 py-1 text-accent-foreground">×{completions} completed</span>}
        </div>
        <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
          Start
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </Link>
    </motion.div>
  );
}
