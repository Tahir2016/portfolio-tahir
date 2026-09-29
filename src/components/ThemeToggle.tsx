"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const isDark = resolvedTheme === "dark";

  /* HUD capsule: rounded, cyan-outlined, glowing on hover. border/bg are
     --accent (cyan in dark, teal in light) so the control follows the theme
     instead of staying a hardcoded dark pill on a light page. */
  return (
    <button
      type="button"
      aria-label={!mounted ? "Toggle theme" : isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-muted-foreground transition-colors duration-200 hover:border-accent/60 hover:text-accent"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4" aria-hidden />
        ) : (
          <Moon className="size-4" aria-hidden />
        )
      ) : (
        <span className="size-4" aria-hidden />
      )}
    </button>
  );
}