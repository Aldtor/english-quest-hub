import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./Icon";
import type { Category } from "@/lib/questions";

export function CategoryCard({ category, completions = 0, index = 0 }: { category: Category; completions?: number; index?: number }) {
  const count = category.questions.length || "All";
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <Link
        to="/quiz/$category"
        params={{ category: category.slug }}
        className="group relative flex h-full flex-col rounded-2xl border border-foreground/10 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-soft"
      >
        <div className="flex items-start justify-between">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
            <Icon name={category.icon} className="h-5 w-5 stroke-[1.6]" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">{num}</span>
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em]">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
        <div className="mt-auto flex items-end justify-between pt-6">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{count} questions</span>
            {completions > 0 && (
              <>
                <span className="text-foreground/20">·</span>
                <span className="font-medium text-secondary">×{completions} done</span>
              </>
            )}
          </div>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
