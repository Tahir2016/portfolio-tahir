import { Cloud, Database, Monitor, Server, type LucideIcon } from "lucide-react";

interface TechCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  // Tailwind utility classes — static strings, safe for purge
  cardBorder: string;
  cardBg: string;
  iconBorder: string;
  iconBg: string;
  iconColor: string;
  labelColor: string;
  pillBorder: string;
  pillBg: string;
  pillColor: string;
  techs: string[];
}

const CATEGORIES: TechCategory[] = [
  {
    id: "01",
    label: "Frontend",
    icon: Monitor,
    cardBorder: "border-accent-cyan/30 hover:border-accent-cyan/60",
    cardBg: "bg-accent-cyan/[0.06]",
    iconBorder: "border-accent-cyan/35",
    iconBg: "bg-accent-cyan/10",
    iconColor: "text-accent-cyan",
    labelColor: "text-accent-cyan",
    pillBorder: "border-accent-cyan/25",
    pillBg: "bg-accent-cyan/[0.07]",
    pillColor: "text-accent-cyan",
    techs: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: "02",
    label: "Backend",
    icon: Server,
    cardBorder: "border-accent-violet/30 hover:border-accent-violet/60",
    cardBg: "bg-accent-violet/[0.06]",
    iconBorder: "border-accent-violet/35",
    iconBg: "bg-accent-violet/10",
    iconColor: "text-accent-violet",
    labelColor: "text-accent-violet",
    pillBorder: "border-accent-violet/25",
    pillBg: "bg-accent-violet/[0.07]",
    pillColor: "text-accent-violet",
    techs: ["Node.js", "Express.js", "NestJS", "Python", "Django", "FastAPI"],
  },
  {
    id: "03",
    label: "Database",
    icon: Database,
    cardBorder: "border-accent-green/30 hover:border-accent-green/60",
    cardBg: "bg-accent-green/[0.06]",
    iconBorder: "border-accent-green/35",
    iconBg: "bg-accent-green/10",
    iconColor: "text-accent-green",
    labelColor: "text-accent-green",
    pillBorder: "border-accent-green/25",
    pillBg: "bg-accent-green/[0.07]",
    pillColor: "text-accent-green",
    techs: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    id: "04",
    label: "DevOps",
    icon: Cloud,
    cardBorder: "border-accent-yellow/30 hover:border-accent-yellow/60",
    cardBg: "bg-accent-yellow/[0.06]",
    iconBorder: "border-accent-yellow/35",
    iconBg: "bg-accent-yellow/10",
    iconColor: "text-accent-yellow",
    labelColor: "text-accent-yellow",
    pillBorder: "border-accent-yellow/25",
    pillBg: "bg-accent-yellow/[0.07]",
    pillColor: "text-accent-yellow",
    techs: ["Docker", "AWS", "CI/CD"],
  },
];

const TechnologyStack = () => {
  return (
    <article className="cyber-glass group relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-white/85 p-5 shadow-lg backdrop-blur-md transition-[border-color] duration-300 hover:border-accent/40 dark:border-slate-800/50 dark:bg-[#0b101b]/90 sm:p-6">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-accent/40 transition-colors duration-300 group-hover:bg-accent/70" />

      {/* panel header */}
      <div className="flex items-center gap-2">
        <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Technology Stack
        </span>
      </div>

      {/* four category cards — height is purely content-driven */}
      <div className="mt-3 flex flex-col gap-2">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className={`rounded-lg border p-3 transition-[border-color,box-shadow] duration-200 ${cat.cardBorder} ${cat.cardBg}`}
            >
              {/* category header row */}
              <div className="flex items-center gap-2.5">
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-md border ${cat.iconBorder} ${cat.iconBg} ${cat.iconColor}`}
                >
                  <Icon aria-hidden className="size-4" />
                </span>
                <span className={`font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] ${cat.labelColor}`}>
                  {cat.label}
                </span>
                <span className={`ml-auto font-mono text-[9px] tracking-[0.1em] opacity-50 ${cat.labelColor}`}>
                  {cat.id}
                </span>
              </div>

              {/* tech pills */}
              <div className="mt-2 flex flex-wrap gap-1">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-[10.5px] leading-[1.6] transition-[border-color] duration-150 ${cat.pillBorder} ${cat.pillBg} ${cat.pillColor}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default TechnologyStack;
