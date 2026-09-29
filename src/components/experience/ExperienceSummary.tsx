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

const ExperienceSummary = () => {
  return (
    <div className="cyber-glass relative overflow-hidden rounded-xl border border-border bg-white/85 shadow-lg backdrop-blur-md dark:border-slate-800/50 dark:bg-[#0b101b]/90">
      <ul className="grid grid-cols-2 lg:grid-cols-4">
        {experienceSummary.map((item, index) => {
          const Icon = summaryIcons[index];
          const ac = accents[index];
          return (
            <li
              key={item.label}
              className={`relative flex items-start gap-3 px-4 py-4 transition-colors duration-300 hover:bg-elevated lg:items-center lg:py-3
                ${index % 2 === 0 ? "border-r border-border lg:border-r-0" : ""}
                ${index < 2 ? "border-b border-border lg:border-b-0" : ""}
                ${index < 3 ? "lg:border-r lg:border-border" : ""}
              `}
            >
              {/* Icon — accent-colored */}
              <span
                className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border ${ac.iconBorder} ${ac.iconBg} ${ac.iconColor} transition-colors duration-300 lg:mt-0`}
              >
                <Icon aria-hidden className="size-4" />
              </span>

              {/* Number + title + description */}
              <div className="min-w-0">
                <div className="flex items-baseline gap-1.5">
                  <span className={`font-mono text-[10px] leading-none tracking-[0.14em] ${ac.number}`}>
                    {summaryNumbers[index]}
                  </span>
                  <span className={`font-mono text-[10.5px] font-semibold uppercase leading-none tracking-[0.12em] ${ac.title}`}>
                    {item.label}
                  </span>
                </div>
                <p className="mt-1 text-[12px] leading-[1.3] text-muted-foreground">
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
