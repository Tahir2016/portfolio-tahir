"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Personal Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [menuOpen]);

  /* HUD frame.

     Glass: bg-background is --background, which IS #080c14 in dark mode, so the
     bar is the requested deep slate while still following the theme in light
     (a hardcoded bg-[#080c14] would punch a dark hole in a white page). The board
     behind it is only 20% opaque now, so /80 + backdrop-blur-xl is enough to
     bury the traces without the bar going fully opaque.

     Height stays h-16, never h-20: globals.css sets section[id]
     scroll-margin-top: 5rem (80px), which is tuned to clear a 64px bar plus its
     border with ~15px of breathing room. An 80px bar would consume the whole
     margin and every #about/#skills jump would land with the heading tucked
     under the header.

     Padding steps 4 -> 6 -> 8 instead of jumping straight to px-4 sm:px-8: the
     desktop row carries the logo, 7 links and the toggle, and at the lg
     breakpoint (1024px) it is already close to full. Reserving the 32px padding
     for xl, where there is room, avoids clipping the last link. */
  return (
      <header className="sticky top-0 z-50 w-full border-b border-accent/15 bg-background/80 backdrop-blur-xl shadow-lg dark:shadow-cyan-950/20">
      {/* HUD circuit trace along the bottom edge: cyan in, transparent at both
          ends, so the bar is lit across its middle and fades out at the corners
          instead of ending on a hard rule. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-fuchsia-500/0"
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 xl:px-8"
      >
        <a href="#about" className="group flex items-center gap-3 rounded-md">
          {/* HUD-bracketed monogram: a padded cyan box, lit on hover. border/bg
              are --accent (cyan in dark, teal in light) rather than a hardcoded
              cyan, so the frame follows the theme. */}
          <span className="grid shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 p-1.5 font-mono text-xs font-semibold leading-none text-accent transition-[border-color,box-shadow] duration-300 group-hover:border-accent/70 group-hover:[box-shadow:0_0_12px_-2px_rgba(34,211,238,0.55)]">
            TP
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-foreground">Tahir Pathan</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
              Full Stack Developer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-accent drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                    : "text-muted-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/resume/Tahir_Pathans_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-200 hover:text-accent"
          >
            View Resume
          </a>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-muted-foreground transition-colors duration-200 hover:border-accent/60 hover:text-accent lg:hidden"
          >
            {menuOpen ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <ul className="mx-auto grid w-full max-w-7xl gap-1 px-5 py-4 sm:px-6">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-md px-3 py-2.5 font-mono text-sm uppercase tracking-[0.12em] transition-colors hover:text-accent ${
                      isActive ? "bg-muted text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="/resume/Tahir_Pathans_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2.5 font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-accent"
              >
                View Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}