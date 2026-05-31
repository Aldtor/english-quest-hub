import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            English<span className="text-gradient-brand">Quest</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A premium, frontend-only English practice platform. Build fluency one question at a time.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/practice" className="hover:text-foreground">Practice</Link></li>
            <li><Link to="/daily" className="hover:text-foreground">Daily Challenge</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Made with</h4>
          <p className="mt-3 text-sm text-muted-foreground">
            React · TypeScript · Tailwind. No backend, no signup, all yours.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EnglishQuest. Crafted for learners everywhere.
      </div>
    </footer>
  );
}
