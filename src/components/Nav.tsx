import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Research", to: "/research" },
  { label: "Creative Coding", to: "/art" },
  { label: "Games", to: "/games" },
  { label: "Tangible", to: "/tangible" },
  { label: "Ongoing", to: "/ongoing" },
  { label: "Plog", to: "/plog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/82 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8"
        aria-label="Primary navigation"
      >
        <Link
          to="/"
          className="flex items-baseline gap-2 rounded-sm font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-ember"
          onClick={() => setOpen(false)}
          aria-label="Roi portfolio home"
        >
          <span className="font-serif text-lg leading-none">Roi</span>
          <span className="text-[0.62rem] uppercase tracking-[0.18em] text-graphite">
            portfolio
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-ember ${
                  isActive ? "bg-ink text-paper" : "text-graphite hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
      {open ? (
        <div className="border-t border-ink/10 bg-paper px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-base font-medium ${
                    isActive ? "bg-ink text-paper" : "text-graphite"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
