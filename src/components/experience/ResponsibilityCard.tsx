import { Database, Layers, Server, Users, type LucideIcon } from "lucide-react";
import type { Responsibility } from "@/utils/types";

interface ResponsibilityCardProps {
  responsibility: Responsibility;
  /** index 0–3 drives the per-item accent */
  index: number;
}

const icons: Record<Responsibility["icon"], LucideIcon> = {
  layers: Layers,
  server: Server,
  database: Database,
  users: Users,
};

/* cyan / violet / green / amber — matches capability card identity */
const accents = [
  {
    iconBorder: "border-accent-cyan/35",
    iconBg:     "bg-accent-cyan/10",
    iconColor:  "text-accent-cyan",
    number:     "text-accent-cyan",
    title:      "text-accent-cyan/90",
  },
  {
    iconBorder: "border-accent-violet/35",
    iconBg:     "bg-accent-violet/10",
    iconColor:  "text-accent-violet",
    number:     "text-accent-violet",
    title:      "text-accent-violet/90",
  },
  {
    iconBorder: "border-accent-green/35",
    iconBg:     "bg-accent-green/10",
    iconColor:  "text-accent-green",
    number:     "text-accent-green",
    title:      "text-accent-green/90",
  },
  {
    iconBorder: "border-accent-yellow/35",
    iconBg:     "bg-accent-yellow/10",
    iconColor:  "text-accent-yellow",
    number:     "text-accent-yellow",
    title:      "text-accent-yellow/90",
  },
] as const;

const ResponsibilityCard = ({ responsibility, index }: ResponsibilityCardProps) => {
  const Icon = icons[responsibility.icon];
  const ac = accents[index] ?? accents[0];

  return (
    <div className="group flex h-full min-w-0 gap-3 px-4 py-3 transition-colors duration-300 hover:bg-elevated/50">
      {/* Icon — left side */}
      <span
        className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border ${ac.iconBorder} ${ac.iconBg} ${ac.iconColor} transition-colors duration-300`}
      >
        <Icon aria-hidden className="size-4" />
      </span>

      {/* Content — right side */}
      <div className="min-w-0">
        <span className={`font-mono text-[10px] leading-none tracking-[0.14em] ${ac.number}`}>
          {responsibility.number}
        </span>
        <h3 className={`mt-1 font-mono text-[13px] font-semibold uppercase leading-[1.35] tracking-[0.12em] ${ac.title}`}>
          {responsibility.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.45] text-muted-foreground">
          {responsibility.description}
        </p>
      </div>
    </div>
  );
};

export default ResponsibilityCard;
