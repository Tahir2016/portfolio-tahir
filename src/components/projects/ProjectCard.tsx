import ProductVisual from "@/components/projects/ProductVisual";
import ProjectLinks from "@/components/projects/ProjectLinks";
import ProjectStack from "@/components/projects/ProjectStack";
import type { ProjectItem } from "@/utils/types";

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const compact = project.tier === "compact";

  return (
    <article className="cyber-glass hud-card glass-surface group relative flex h-full flex-col rounded-xl border border-accent/25 bg-white/85 p-5 shadow-lg backdrop-blur-md transition-[border-color,transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/55 hover:bg-white/95 dark:border-slate-800/50 dark:bg-[#0b101b]/90 dark:hover:bg-[#0b101b]/95 sm:p-6">
      <header className="flex items-center justify-between">
        <span className="font-mono text-sm text-muted-foreground">{project.number}</span>
        <span className="flex items-center gap-2">
          <span aria-hidden className="size-1.5 rounded-full bg-secondary" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            {project.category}
          </span>
        </span>
      </header>

      <h3
        className={`mt-4 font-semibold tracking-tight text-foreground ${
          compact ? "text-lg" : "text-xl sm:text-2xl"
        }`}
      >
        {project.title}
      </h3>

      <p className={`mt-2 leading-relaxed text-muted-foreground ${compact ? "text-sm" : "text-sm sm:text-[15px]"}`}>
        {project.purpose}
      </p>

      <div className="mt-5 transition-transform duration-300 group-hover:-translate-y-0.5">
        <ProductVisual variant={project.visual} />
      </div>

      {!compact && project.features.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.features.map((feature) => (
            <li key={feature}>
              <span className="inline-flex items-center gap-1.5 rounded border border-border bg-muted px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-foreground">
                <span aria-hidden className="size-1 rounded-sm bg-secondary" />
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        {compact ? (
          <ul className="flex flex-wrap gap-1.5">
            {project.primaryStack.map((tech) => (
              <li key={tech}>
                <span className="mono-chip">{tech}</span>
              </li>
            ))}
          </ul>
        ) : (
          <ProjectStack stack={project.stack} primaryStack={project.primaryStack} />
        )}
        <ProjectLinks
          projectNumber={project.number}
          title={project.title}
          github={project.github}
          link={project.link}
          compact={compact}
          className={compact ? "mt-4" : "mt-6"}
        />
      </div>
    </article>
  );
};

export default ProjectCard;