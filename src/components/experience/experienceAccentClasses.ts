import type { ExperienceAccent } from "@/utils/types";

export const experienceAccentText: Record<ExperienceAccent, string> = {
  cyan: "text-accent-cyan",
  violet: "text-accent-violet",
  blue: "text-accent-blue",
  green: "text-accent-green",
  yellow: "text-accent-yellow",
};

export const experienceAccentBg: Record<ExperienceAccent, string> = {
  cyan: "bg-accent-cyan",
  violet: "bg-accent-violet",
  blue: "bg-accent-blue",
  green: "bg-accent-green",
  yellow: "bg-accent-yellow",
};

export const experienceAccentNode: Record<ExperienceAccent, string> = {
  cyan: "border-accent-cyan bg-accent-cyan/25",
  violet: "border-accent-violet bg-accent-violet/25",
  blue: "border-accent-blue bg-accent-blue/25",
  green: "border-accent-green bg-accent-green/25",
  yellow: "border-accent-yellow bg-accent-yellow/25",
};

export const experienceAccentVar: Record<ExperienceAccent, string> = {
  cyan: "var(--accent-cyan)",
  violet: "var(--accent-violet)",
  blue: "var(--accent-blue)",
  green: "var(--accent-green)",
  yellow: "var(--accent-yellow)",
};
