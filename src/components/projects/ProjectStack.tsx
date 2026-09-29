import { ChevronDown } from "lucide-react";

interface ProjectStackProps {
  stack: string[];
  primaryStack: string[];
}

const ProjectStack = ({ stack, primaryStack }: ProjectStackProps) => {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Stack
      </p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {primaryStack.map((tech) => (
          <li key={tech}>
            <span className="mono-chip transition-colors duration-200 hover:border-accent/50 hover:text-foreground sm:text-[11px]">
              {tech}
            </span>
          </li>
        ))}
      </ul>
      <details className="group mt-2.5">
        <summary className="inline-flex cursor-pointer list-none select-none items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
          View stack
          <ChevronDown
            aria-hidden
            className="size-3 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>
        <div className="mt-2.5 border-t border-border pt-2.5">
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 sm:grid-cols-3">
            {stack.map((tech) => (
              <li key={tech} className="font-mono text-[10px] leading-none text-muted-foreground">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
};

export default ProjectStack;