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
    <Link to="/" className="group flex items-baseline gap-2">
      {/* Hand-drawn quill-in-inkwell mark, themed to the site */}
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 -mb-1 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 26 C 11 18, 18 12, 27 5" />
        <path d="M22 7 L 27 5 L 25 10 Z" fill="currentColor" />
        <path d="M5 26 q 4 -2 8 -1" />
        <ellipse cx="9" cy="27.5" rx="5" ry="1.2" fill="currentColor" opacity=".55" />
      </svg>
      <span className="font-display text-2xl leading-none">
        English<span className="italic">Quest</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/15 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:after:absolute data-[status=active]:after:-bottom-[22px] data-[status=active]:after:left-0 data-[status=active]:after:right-0 data-[status=active]:after:h-px data-[status=active]:after:bg-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-foreground/20 text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/practice"
            className="hidden items-center gap-2 border border-foreground bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-background hover:text-foreground md:inline-flex"
          >
            Begin
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-foreground/20 md:hidden"
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
              className="border-b border-foreground/10 py-3 text-sm font-medium text-muted-foreground last:border-b-0 hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
