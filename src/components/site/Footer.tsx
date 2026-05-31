import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-foreground/15">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="small-caps text-xs text-muted-foreground">A daily reader for the English language</p>
            <h3 className="mt-3 font-display text-4xl leading-tight">
              English<span className="italic">Quest</span>
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              No accounts. No tracking. No noise. Just a quiet place to read, answer, and improve — one question at a time.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="small-caps text-xs text-muted-foreground">Sections</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/practice" className="ink-link">Practice</Link></li>
              <li><Link to="/daily" className="ink-link">Daily Challenge</Link></li>
              <li><Link to="/about" className="ink-link">About</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="small-caps text-xs text-muted-foreground">Colophon</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Set in <span className="serif-italic">Instrument Serif</span> &amp; Work Sans. Built with React and Tailwind. Stored in your browser, never elsewhere.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-foreground/15 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>№ {new Date().getFullYear()} — Vol. I · Published continuously.</span>
          <span className="serif-italic">Habent sua fata libelli.</span>
        </div>
      </div>
    </footer>
  );
}
