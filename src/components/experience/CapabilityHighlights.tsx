import { BarChart2, Code2, Settings2, Users2, type LucideIcon } from "lucide-react";
import { capabilityHighlights } from "@/data/experienceData";
import type { CapabilityHighlight } from "@/utils/types";

/* Semantic icons per card */
const icons: Record<CapabilityHighlight["icon"], LucideIcon> = {
  layers: Code2,      // Full Stack Development → code icon
  gauge: BarChart2,   // Scalable Systems → performance/chart icon
  rocket: Users2,     // Real World Products → users/community icon
  sparkles: Settings2, // Clean Architecture → settings/system icon
};

/* Per-card accent config — cyan / violet / green / amber */
const cardAccents = [
  {
    /* 01 — Full Stack Development — CYAN */
    border:   "border-accent-cyan/40",
    bg:       "bg-[color-mix(in_srgb,var(--accent-cyan)_8%,var(--card))]",
    glow:     "shadow-[0_0_18px_-4px_color-mix(in_srgb,var(--accent-cyan)_30%,transparent)]",
    iconWrap: "border-accent-cyan/30 bg-[color-mix(in_srgb,var(--accent-cyan)_15%,var(--muted))] text-accent-cyan",
    number:   "text-accent-cyan",
    label:    "text-accent-cyan/90",
    hover:    "hover:border-accent-cyan/70 hover:shadow-[0_0_24px_-4px_color-mix(in_srgb,var(--accent-cyan)_45%,transparent)]",
  },
  {
    /* 02 — Scalable Systems — VIOLET */
    border:   "border-accent-violet/40",
    bg:       "bg-[color-mix(in_srgb,var(--accent-violet)_8%,var(--card))]",
    glow:     "shadow-[0_0_18px_-4px_color-mix(in_srgb,var(--accent-violet)_30%,transparent)]",
    iconWrap: "border-accent-violet/30 bg-[color-mix(in_srgb,var(--accent-violet)_15%,var(--muted))] text-accent-violet",
    number:   "text-accent-violet",
    label:    "text-accent-violet/90",
    hover:    "hover:border-accent-violet/70 hover:shadow-[0_0_24px_-4px_color-mix(in_srgb,var(--accent-violet)_45%,transparent)]",
  },
  {
    /* 03 — Real World Products — GREEN */
    border:   "border-accent-green/40",
    bg:       "bg-[color-mix(in_srgb,var(--accent-green)_8%,var(--card))]",
    glow:     "shadow-[0_0_18px_-4px_color-mix(in_srgb,var(--accent-green)_30%,transparent)]",
    iconWrap: "border-accent-green/30 bg-[color-mix(in_srgb,var(--accent-green)_15%,var(--muted))] text-accent-green",
    number:   "text-accent-green",
    label:    "text-accent-green/90",
    hover:    "hover:border-accent-green/70 hover:shadow-[0_0_24px_-4px_color-mix(in_srgb,var(--accent-green)_45%,transparent)]",
  },
  {
    /* 04 — Clean Architecture — AMBER */
    border:   "border-accent-yellow/40",
    bg:       "bg-[color-mix(in_srgb,var(--accent-yellow)_8%,var(--card))]",
    glow:     "shadow-[0_0_18px_-4px_color-mix(in_srgb,var(--accent-yellow)_30%,transparent)]",
    iconWrap: "border-accent-yellow/30 bg-[color-mix(in_srgb,var(--accent-yellow)_15%,var(--muted))] text-accent-yellow",
    number:   "text-accent-yellow",
    label:    "text-accent-yellow/90",
    hover:    "hover:border-accent-yellow/70 hover:shadow-[0_0_24px_-4px_color-mix(in_srgb,var(--accent-yellow)_45%,transparent)]",
  },
];

const CapabilityHighlights = () => {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {capabilityHighlights.map((capability, index) => {
        const Icon = icons[capability.icon];
        const ac = cardAccents[index];

        return (
          <li key={capability.id} className="min-w-0">
            <div
              className={`group flex h-full flex-col rounded-lg border p-3 transition-[border-color,box-shadow,background-color] duration-300 ${ac.border} ${ac.bg} ${ac.glow} ${ac.hover}`}
            >
              {/* Top row: icon left, number right */}
              <div className="flex items-center justify-between">
                <span className={`grid size-8 shrink-0 place-items-center rounded border ${ac.iconWrap} transition-colors duration-300`}>
                  <Icon aria-hidden className="size-4" />
                </span>
                <span className={`font-mono text-[10px] leading-none tracking-[0.14em] ${ac.number}`}>
                  {capability.id}
                </span>
              </div>
              {/* Label */}
              <span className={`mt-2.5 font-mono text-[10.5px] uppercase leading-[1.45] tracking-[0.07em] ${ac.label}`}>
                {capability.label}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CapabilityHighlights;
