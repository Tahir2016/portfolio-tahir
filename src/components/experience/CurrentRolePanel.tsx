import { Building2, MapPin } from "lucide-react";
import TechBadgeCloud from "@/components/experience/TechBadgeCloud";
import SectionLabel from "@/components/SectionLabel";
import { currentRole } from "@/data/experienceData";

const CurrentRolePanel = () => {
  return (
      <article className="cyber-glass group relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-white/85 p-5 shadow-lg backdrop-blur-md transition-[border-color,background-color] duration-300 hover:border-accent/40 dark:border-slate-800/50 dark:bg-[#0b101b]/90 sm:p-6">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-accent/40 transition-colors duration-300 group-hover:bg-accent/70"
      />

      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-2">
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent-green" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {currentRole.label}
          </span>
        </span>
        <span className="mono-chip border-accent/40 bg-accent/10 px-2 py-1 text-[11px] text-accent">
          [ {currentRole.tenure} ]
        </span>
      </div>

      {/* Role heading — scales down on narrow screens so the role stays on
          one line; 2rem from ~460px up, so the desktop size is untouched */}
      <h3 className="mt-4 text-[clamp(1.5rem,7vw,2rem)] font-semibold leading-tight tracking-tight text-foreground">
        {currentRole.role}
      </h3>

      {/* Company + location */}
      <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5">
        <span className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground">
          <Building2 aria-hidden className="size-4 shrink-0 text-accent" />
          {currentRole.company}
        </span>
        <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground">
          <MapPin aria-hidden className="size-4 shrink-0 text-muted-foreground/70" />
          {currentRole.location}
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground">
        {currentRole.description}
      </p>

      {/* Technologies */}
      <div className="mt-4 border-t border-border pt-3">
        <SectionLabel>Primary Technologies</SectionLabel>
        <div className="mt-3">
          <TechBadgeCloud />
        </div>
      </div>
    </article>
  );
};

export default CurrentRolePanel;
