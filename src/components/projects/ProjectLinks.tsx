import { ArrowUpRight, Github } from "lucide-react";

interface ProjectLinksProps {
  projectNumber: string;
  title: string;
  github?: string;
  link?: string;
  compact?: boolean;
  className?: string;
}

const ProjectLinks = ({
  projectNumber,
  title,
  github,
  link,
  compact = false,
  className = "",
}: ProjectLinksProps) => {
  if (!github && !link) return null;

  if (compact) {
    if (!github) return null;
    return (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${projectNumber} ${title} GitHub repository`}
        className={`grid size-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors duration-200 hover:border-accent/60 hover:text-accent ${className}`}
      >
        <Github className="size-4" aria-hidden />
      </a>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${projectNumber} ${title} live demo`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-sm font-medium text-accent-foreground transition-colors duration-200 hover:bg-accent/90"
        >
          Live Demo
          <ArrowUpRight className="size-3.5 transition-transform duration-200" aria-hidden />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${projectNumber} ${title} GitHub repository`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/60 hover:text-accent"
        >
          GitHub
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;