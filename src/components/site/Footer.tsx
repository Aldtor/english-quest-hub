import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-foreground/10 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" aria-hidden>
                <rect x="1" y="1" width="26" height="26" rx="7" fill="currentColor" className="text-foreground" />
                <path d="M9 9 h10 M9 14 h10 M9 19 h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-background" />
                <circle cx="22" cy="19" r="2.4" fill="currentColor" className="text-secondary" />
              </svg>
              <span className="font-display text-lg font-semibold tracking-[-0.02em]">
                English<span className="text-secondary">Quest</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              A simple, modern app to practice English every day. No accounts, no tracking — your progress stays in your browser.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/practice" className="text-foreground/80 hover:text-foreground">Practice</Link></li>
              <li><Link to="/daily" className="text-foreground/80 hover:text-foreground">Daily Challenge</Link></li>
              <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Built with</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              React · TypeScript · Tailwind. No backend, no signup — all yours.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-foreground/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} EnglishQuest</span>
          <span>Made for learners, kept on your device.</span>
        </div>
      </div>
    </footer>
  );
}
