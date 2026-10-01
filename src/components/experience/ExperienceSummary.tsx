import { BarChart2, Box, Briefcase, Users2 } from "lucide-react";
import { experienceSummary } from "@/data/experienceData";

const summaryIcons = [Briefcase, Box, BarChart2, Users2];
const summaryNumbers = ["01", "02", "03", "04"];

/* cyan / violet / green / amber — same identity as capability cards */
const accents = [
  {
    iconBorder: "border-accent-cyan/35",
    iconBg:     "bg-accent-cyan/10",
    iconColor:  "text-accent-cyan",
    number:     "text-accent-cyan/70",
    title:      "text-accent-cyan",
  },
  {
    iconBorder: "border-accent-violet/35",
    iconBg:     "bg-accent-violet/10",
    iconColor:  "text-accent-violet",
    number:     "text-accent-violet/70",
    title:      "text-accent-violet",
  },
  {
    iconBorder: "border-accent-green/35",
    iconBg:     "bg-accent-green/10",
    iconColor:  "text-accent-green",
    number:     "text-accent-green/70",
    title:      "text-accent-green",
  },
  {
    iconBorder: "border-accent-yellow/35",
    iconBg:     "bg-accent-yellow/10",
    iconColor:  "text-accent-yellow",
    number:     "text-accent-yellow/70",
    title:      "text-accent-yellow",
  },
] as const;

const dividers = [
  "border-b border-border md:border-r lg:border-b-0",
  "border-b border-border lg:border-b-0 lg:border-r",
  "border-b border-border md:border-b-0 md:border-r",
  "",
] as const;

const ExperienceSummary = () => {
  return (
    <div className="cyber-glass relative overflow-hidden rounded-xl border border-border bg-white/85 shadow-lg backdrop-blur-md dark:border-slate-800/50 dark:bg-[#0b101b]/90">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {experienceSummary.map((item, index) => {
          const Icon = summaryIcons[index];
          const ac = accents[index];
          return (
            <li
              key={item.label}
              className={`relative flex min-w-0 items-start gap-3 px-4 py-3.5 transition-colors duration-300 hover:bg-elevated md:py-4 lg:items-center lg:py-3 ${dividers[index]}`}
            >
              {/* Icon — accent-colored */}
              <span
                className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border ${ac.iconBorder} ${ac.iconBg} ${ac.iconColor} transition-colors duration-300 lg:mt-0`}
              >
                <Icon aria-hidden className="size-4" />
              </span>

              {/* Number + title + description */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                  <span className={`shrink-0 font-mono text-[10px] leading-none tracking-[0.14em] ${ac.number}`}>
                    {summaryNumbers[index]}
                  </span>
                  <span className={`min-w-0 break-words font-mono text-[10.5px] font-semibold uppercase leading-[1.35] tracking-[0.12em] md:leading-none ${ac.title}`}>
                    {item.label}
                  </span>
                </div>
                <p className="mt-1 min-w-0 text-[12px] leading-[1.45] text-muted-foreground md:leading-[1.3]">
                  {item.text}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceSummary;
