import ProjectLinks from "@/components/projects/ProjectLinks";
import ProjectPipeline from "@/components/projects/ProjectPipeline";
import ProjectStack from "@/components/projects/ProjectStack";
import type { ProjectItem } from "@/utils/types";

interface FeaturedProjectProps {
  project: ProjectItem;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <article className="cyber-glass cyber-glass-cyan group relative overflow-hidden rounded-xl border border-border bg-white/85 p-5 shadow-lg backdrop-blur-md transition-[border-color,background-color] duration-300 hover:border-accent-cyan/50 dark:border-slate-800/50 dark:bg-[#0b101b]/90 sm:p-8">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-accent-cyan/40 transition-colors duration-300 group-hover:bg-accent-cyan/70"
      />

      <div className="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2 lg:gap-y-8">
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-muted-foreground">{project.number}</span>
            <span className="flex items-center gap-2">
              <span aria-hidden className="size-1.5 rounded-full bg-accent-green" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-cyan">
                {project.category}
              </span>
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.purpose}
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-3">
          <div className="rounded-lg border border-border bg-muted/50 p-3 sm:p-4">
            <ProjectPipeline />
          </div>
        </div>

        {project.features.length > 0 && (
          <div className="lg:col-start-1 lg:row-start-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Features
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.features.map((feature) => (
                <li key={feature}>
                  <span className="inline-flex items-center gap-1.5 rounded border border-border bg-muted px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-foreground">
                    <span aria-hidden className="size-1 rounded-sm bg-accent-cyan" />
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-3">
          <ProjectStack stack={project.stack} primaryStack={project.primaryStack} />
          <ProjectLinks
            projectNumber={project.number}
            title={project.title}
            github={project.github}
            link={project.link}
          />
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;