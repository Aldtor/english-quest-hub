import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/practice", label: "Practice" },
  { to: "/daily", label: "Daily" },
  { to: "/about", label: "About" },
] as const;

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <svg viewBox="0 0 28 28" className="h-7 w-7 shrink-0" fill="none" aria-hidden>
        <rect x="1" y="1" width="26" height="26" rx="7" fill="currentColor" className="text-foreground" />
        <path d="M9 9 h10 M9 14 h10 M9 19 h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-background" />
        <circle cx="22" cy="19" r="2.4" fill="currentColor" className="text-secondary" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-[-0.02em]">
        English<span className="text-secondary">Quest</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-muted"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/practice"
            className="hidden items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
          >
            Start
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-foreground/15 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-foreground/10 md:hidden",
          open ? "max-h-96" : "max-h-0",
          "transition-all duration-300"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
