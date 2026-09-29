import type { SkillAccent } from "@/data/skillsData";

export const accentText: Record<SkillAccent, string> = {
  cyan: "text-accent-cyan",
  violet: "text-accent-violet",
  blue: "text-accent-blue",
  green: "text-accent-green",
};

export const accentBg: Record<SkillAccent, string> = {
  cyan: "bg-accent-cyan",
  violet: "bg-accent-violet",
  blue: "bg-accent-blue",
  green: "bg-accent-green",
};

export const accentLine: Record<SkillAccent, string> = {
  cyan: "bg-accent-cyan/40",
  violet: "bg-accent-violet/40",
  blue: "bg-accent-blue/40",
  green: "bg-accent-green/40",
};

export const accentHoverBorder: Record<SkillAccent, string> = {
  cyan: "hover:border-accent-cyan/60",
  violet: "hover:border-accent-violet/60",
  blue: "hover:border-accent-blue/60",
  green: "hover:border-accent-green/60",
};

export const accentHoverGlow: Record<SkillAccent, string> = {
  cyan:   "hover:[box-shadow:0_0_10px_-2px_rgba(34,211,238,0.50)]",
  violet: "hover:[box-shadow:0_0_10px_-2px_rgba(167,139,250,0.50)]",
  blue:   "hover:[box-shadow:0_0_10px_-2px_rgba(96,165,250,0.50)]",
  green:  "hover:[box-shadow:0_0_10px_-2px_rgba(52,211,153,0.50)]",
};