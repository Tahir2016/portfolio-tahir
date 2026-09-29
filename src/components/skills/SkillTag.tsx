import type { SkillAccent } from "@/data/skillsData";
import { accentHoverBorder, accentHoverGlow } from "@/components/skills/accentClasses";

interface SkillTagProps {
  label: string;
  accent: SkillAccent;
  nested?: string;
}

const SkillTag = ({ label, accent, nested }: SkillTagProps) => {
  return (
    <span
      className={[
        "tech-tag inline-flex items-center gap-1.5 rounded-md border border-skill-tag-border bg-skill-tag px-2.5 py-1.5 font-mono text-[11px] leading-none text-foreground",
        "transition-[border-color,background-color,color,transform,box-shadow] duration-200",
        accentHoverBorder[accent],
        accentHoverGlow[accent],
        "hover:-translate-y-px hover:bg-skill-tag-hover",
      ].join(" ")}
    >
      <span aria-hidden className="shrink-0 text-muted-foreground/55">
        [
      </span>
      {nested ? (
        <span className="flex flex-col items-start gap-1">
          <span className="shrink-0 font-medium leading-none">{label}</span>
          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground leading-none">
            {nested}
          </span>
        </span>
      ) : (
        <span className="shrink-0 font-medium">{label}</span>
      )}
      <span aria-hidden className="shrink-0 text-muted-foreground/55">
        ]
      </span>
    </span>
  );
};

export default SkillTag;