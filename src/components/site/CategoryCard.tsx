import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
        className="group relative flex h-full flex-col border border-foreground/15 bg-card p-6 transition-colors hover:bg-foreground hover:text-background"
      >
        <div className="flex items-baseline justify-between">
          <span className="font-display text-xl italic opacity-60">№ {num}</span>
          <Icon name={category.icon} className="h-5 w-5 stroke-[1.4]" />
        </div>
        <hr className="my-5 border-t border-current opacity-25" />
        <h3 className="font-display text-3xl leading-[1.05]">{category.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-background/75">
          {category.description}
        </p>
        <div className="mt-auto flex items-end justify-between pt-8">
          <div className="text-xs">
            <div className="small-caps opacity-60">Entries</div>
            <div className="font-display text-2xl leading-none">{count}</div>
          </div>
          {completions > 0 && (
            <div className="text-right text-xs">
              <div className="small-caps opacity-60">Read</div>
              <div className="font-display text-2xl leading-none italic">×{completions}</div>
            </div>
          )}
          <span className="serif-italic text-sm underline underline-offset-4 decoration-current/40 group-hover:decoration-current">
            Open →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
