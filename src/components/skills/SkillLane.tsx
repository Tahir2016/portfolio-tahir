import { ArrowLeft, ArrowRight } from "lucide-react";
import SkillTag from "@/components/skills/SkillTag";
import { accentBg, accentText, accentLine } from "@/components/skills/accentClasses";
import type { MarqueeDirection, SkillAccent } from "@/data/skillsData";

interface SkillLaneProps {
  number: string;
  title: string;
  technologies: string[];
  direction: MarqueeDirection;
  accent: SkillAccent;
  nested?: { label: string; detail: string };
}

const REPEATS = 4;

const laneGlowClass: Record<SkillAccent, string> = {
  cyan:   "skill-lane-cyan",
  violet: "skill-lane-violet",
  blue:   "skill-lane-blue",
  green:  "skill-lane-green",
};

const laneBorderClass: Record<SkillAccent, string> = {
  cyan:   "skill-lane-border-cyan",
  violet: "skill-lane-border-violet",
  blue:   "skill-lane-border-blue",
  green:  "skill-lane-border-green",
};

const laneTopLine: Record<SkillAccent, string> = {
  cyan:   "bg-gradient-to-r from-transparent via-accent-cyan/70 to-transparent",
  violet: "bg-gradient-to-r from-transparent via-accent-violet/70 to-transparent",
  blue:   "bg-gradient-to-r from-transparent via-accent-blue/70 to-transparent",
  green:  "bg-gradient-to-r from-transparent via-accent-green/70 to-transparent",
};

const SkillLane = ({ number, title, technologies, direction, accent, nested }: SkillLaneProps) => {
  const MarqueeArrow = direction === "right-to-left" ? ArrowLeft : ArrowRight;
  const reversed = direction === "left-to-right";
  const entries = Array.from({ length: REPEATS }, () => technologies).flat();
  const nestedDetail = (tech: string) =>
    nested && nested.label === tech ? nested.detail : undefined;

  return (
    <article className={`cyber-glass glass-surface relative rounded-xl border bg-white/85 p-4 shadow-lg backdrop-blur-md transition-[border-color,box-shadow] duration-300 dark:border-slate-800/50 dark:bg-[#0b101b]/90 sm:p-6 ${laneGlowClass[accent]} ${laneBorderClass[accent]}`}>
      {/* HUD top accent line */}
      <span aria-hidden className={`pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-xl opacity-80 ${laneTopLine[accent]}`} />
      <header className="flex items-center gap-3">
        <span aria-hidden className={`size-1.5 shrink-0 rounded-full ${accentBg[accent]}`} />
        <h3
          className={`whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.25em] sm:text-xs ${accentText[accent]}`}
        >
          {number} / {title}
        </h3>
        <span aria-hidden className={`h-px flex-1 ${accentLine[accent]}`} />
      </header>

      <div className="marquee-viewport marquee-animated mt-5">
        <ul
          aria-hidden
          className={`marquee-track ${
            reversed ? "marquee-track--left-to-right" : "marquee-track--right-to-left"
          }`}
        >
          {entries.map((tech, index) => {
            const isCopyStart = index % technologies.length === 0;
            return (
              <li key={`${tech}-${index}`} className="flex shrink-0 items-center gap-2.5">
                {isCopyStart && (
                  <MarqueeArrow
                    aria-hidden
                    className="size-3.5 shrink-0 text-muted-foreground/50"
                  />
                )}
                <SkillTag label={tech} accent={accent} nested={nestedDetail(tech)} />
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="marquee-static mt-5">
        {technologies.map((tech) => (
          <li key={tech}>
            <SkillTag label={tech} accent={accent} nested={nestedDetail(tech)} />
          </li>
        ))}
      </ul>

      <ul className="sr-only">
        {technologies.map((tech) => {
          const detail = nested && nested.label === tech ? ` — ${nested.detail}` : "";
          return <li key={tech}>{tech}{detail}</li>;
        })}
      </ul>
    </article>
  );
};

export default SkillLane;