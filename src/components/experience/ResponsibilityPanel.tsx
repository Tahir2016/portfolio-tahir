import ResponsibilityCard from "@/components/experience/ResponsibilityCard";
import { responsibilities } from "@/data/experienceData";

/**
 * One compact horizontal strip — four equal columns separated by thin
 * technical vertical rules with a centred accent dot, matching the reference.
 */
const ResponsibilityPanel = () => {
  return (
    <div className="cyber-glass relative overflow-hidden rounded-xl border border-border bg-white/85 shadow-lg backdrop-blur-md dark:border-slate-800/50 dark:bg-[#0b101b]/90">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {responsibilities.map((responsibility, index) => (
          <li
            key={responsibility.number}
            className="reveal relative min-w-0"
            style={{ animationDelay: `${120 + index * 90}ms` }}
          >
            <ResponsibilityCard responsibility={responsibility} index={index} />

            {/* Thin vertical separator after every column except the last */}
            {index < responsibilities.length - 1 && (
              <span aria-hidden className="pointer-events-none">
                {/* Visible only at lg (4-col) — right edge rule */}
                <span className="absolute inset-y-0 right-0 hidden w-px bg-border lg:block" />
                {/* Accent dot at vertical midpoint */}
                <span className="absolute right-0 top-1/2 hidden size-[7px] -translate-y-1/2 translate-x-[3px] rotate-45 border border-border bg-card lg:block" />
              </span>
            )}

            {/* sm: horizontal separator between rows in 2-col layout */}
            {index % 2 === 0 && index < responsibilities.length - 1 && (
              <span
                aria-hidden
                className="absolute bottom-0 left-4 right-4 h-px bg-border sm:hidden"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsibilityPanel;
