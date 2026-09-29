"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

const INPUTS = ["PDF", "DOCX", "PPTX", "WEBSITE", "YOUTUBE"];
const OUTPUTS = ["NOTES", "SUMMARY", "QUIZ", "FLASHCARDS", "STUDY GUIDE", "CHAT"];

const ProjectPipeline = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const stageStyle = (delay: string) =>
    ({ "--stage-delay": delay }) as React.CSSProperties;

  return (
    <section
      ref={ref}
      aria-label="AI Study Assistant product pipeline"
      className={`flex h-full flex-col justify-center pipeline-anim ${
        active ? "pipeline-active" : ""
      }`}
    >
      <div className="pipeline-stage" style={stageStyle("0s")}>
        <div className="relative overflow-hidden rounded-lg border border-border bg-card p-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-pattern opacity-60"
          />
          <div className="relative flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-cyan sm:text-[11px]">
              Learning Material
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Input
            </span>
          </div>
          <ul className="relative mt-3 flex flex-wrap gap-1.5">
            {INPUTS.map((input) => (
              <li key={input}>
                <span className="mono-chip transition-colors duration-200 hover:border-accent-cyan/50 hover:text-foreground sm:text-[11px]">
                  {input}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden
        className="pipeline-connector my-1.5 flex items-center gap-3 px-6"
        style={stageStyle("0.1s")}
      >
        <span className="h-px flex-1 bg-border" />
        <ArrowDown className="size-3 text-muted-foreground/70" />
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="pipeline-stage" style={stageStyle("0.15s")}>
        <div className="relative overflow-hidden rounded-lg border border-accent-cyan/40 bg-card p-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-pattern opacity-60"
          />
          <div className="relative flex flex-col items-center gap-1.5 text-center">
            <span className="flex items-center gap-2">
              <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-accent-green" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-cyan sm:text-[11px]">
                AI Processing
              </span>
            </span>
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
              FastAPI · Python · pgvector
            </p>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pipeline-connector my-1.5 flex items-center gap-3 px-6"
        style={stageStyle("0.25s")}
      >
        <span className="h-px flex-1 bg-border" />
        <ArrowDown className="size-3 text-muted-foreground/70" />
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="pipeline-stage" style={stageStyle("0.3s")}>
        <div className="relative overflow-hidden rounded-lg border border-border bg-card p-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-pattern opacity-60"
          />
          <div className="relative flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-green sm:text-[11px]">
              Study Resources
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Output
            </span>
          </div>
          <ul className="relative mt-3 grid grid-cols-2 gap-1.5">
            {OUTPUTS.map((output) => (
              <li key={output}>
                <span className="flex items-center gap-1.5 rounded border border-border bg-muted px-2 py-1.5 font-mono text-[9px] uppercase leading-none tracking-[0.06em] text-foreground transition-colors duration-200 hover:border-accent-green/50 sm:text-[10px]">
                  <span aria-hidden className="size-1 rounded-sm bg-accent-green" />
                  {output}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectPipeline;