import {
  CalendarClock,
  CalendarDays,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  experienceAccentBg,
  experienceAccentText,
  experienceAccentVar,
} from "@/components/experience/experienceAccentClasses";
import type { ProfessionalProject } from "@/utils/types";

interface ProfessionalProjectCardProps {
  project: ProfessionalProject;
}

const icons: Record<ProfessionalProject["icon"], LucideIcon> = {
  users: Users,
  "calendar-clock": CalendarClock,
  "graduation-cap": GraduationCap,
  "calendar-days": CalendarDays,
};

const hudAccentClass: Record<string, string> = {
  cyan:   "hud-card hud-card",
  violet: "hud-card hud-card-violet",
  blue:   "hud-card hud-card-blue",
  green:  "hud-card hud-card-green",
  yellow: "hud-card hud-card-yellow",
};

const cornerAccentClass: Record<string, string> = {
  cyan:   "border-accent-cyan/50 group-hover:border-accent-cyan/90",
  violet: "border-accent-violet/50 group-hover:border-accent-violet/90",
  blue:   "border-accent-blue/50 group-hover:border-accent-blue/90",
  green:  "border-accent-green/50 group-hover:border-accent-green/90",
  yellow: "border-accent-yellow/50 group-hover:border-accent-yellow/90",
};

const ProfessionalProjectCard = ({ project }: ProfessionalProjectCardProps) => {
  const Icon = icons[project.icon];

  return (
    <article
      className={`cyber-glass glass-surface ${hudAccentClass[project.accent]} project-card project-card-${project.accent} group relative flex h-full flex-col rounded-xl border border-border bg-white/85 p-5 shadow-lg backdrop-blur-md hover:bg-white/95 dark:border-slate-800/50 dark:bg-[#0b101b]/90 dark:hover:bg-[#0b101b]/95`}
      style={{ "--project-accent": experienceAccentVar[project.accent] } as React.CSSProperties}
    >
      {/* Left accent bar */}
      <span
        aria-hidden
        className={`absolute left-0 top-4 h-10 w-[3px] ${experienceAccentBg[project.accent]} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
      />
      {/* No corner bracket: the target design drops the "⌐" corner marks, so
          the card edge is the only frame. `cornerAccentClass` survives because
          the header icon below still tints its own border with it. */}

      {/* Header: number + divider */}
      <div className="flex items-center gap-3">
        <span className={`font-mono text-[11px] leading-none ${experienceAccentText[project.accent]}`}>
          {project.number}
        </span>
        <span aria-hidden className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-accent/40" />
      </div>

      {/* Icon + Title row */}
      <div className="mt-3 flex items-start gap-3">
        <span
          className={`grid size-10 shrink-0 place-items-center rounded-lg border bg-muted transition-[border-color,box-shadow] duration-300 group-hover:border-current ${cornerAccentClass[project.accent]} ${experienceAccentText[project.accent]}`}
        >
          <Icon aria-hidden className="size-5" />
        </span>
        <h3 className="text-[15px] font-semibold leading-[1.3] tracking-tight text-foreground">
          {project.title}
        </h3>
      </div>

      {/* Description (was "purpose") — no label */}
      <p className="mt-3 text-[12.5px] leading-[1.55] text-muted-foreground">
        {project.purpose}
      </p>

      {/* Key Features */}
      <div className="mt-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          Key Features
        </p>
        <ul className="mt-1.5 grid grid-cols-2 gap-x-2 gap-y-1">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex min-w-0 items-start gap-1.5 text-[11.5px] leading-[1.4] text-foreground/85"
            >
              <span
                aria-hidden
                className={`mt-[5px] size-1.5 shrink-0 rounded-sm ${experienceAccentBg[project.accent]}`}
              />
              <span className="min-w-0">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mt-auto pt-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          Tech Stack
        </p>
        <ul className="mt-1.5 flex flex-wrap gap-1">
          {project.stack.map((technology) => (
            <li key={technology}>
              <span className="mono-chip px-2 py-1 text-[10px] transition-colors duration-200 hover:border-accent/50 hover:text-foreground">
                {technology}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProfessionalProjectCard;
