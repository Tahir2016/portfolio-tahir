import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";

const EducationSection = () => {
  return (
    <Section
      id="education"
      ariaLabel="Education and certifications"
      className="relative isolate !pt-4 sm:!pt-5 lg:!pt-6"
    >
      <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0 -z-10" />

      <Container>
        {/* ── Section label ── */}
        <div className="reveal">
          <SectionLabel index="05">Education</SectionLabel>
        </div>

        {/* ── Two cards ── */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">

          {/* ── CARD 01 — Education (cyan) ── */}
          <article
            className="cyber-glass cyber-glass-cyan reveal group relative flex flex-col rounded-xl border border-accent-cyan/30 bg-white/85 p-4 shadow-lg backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-accent-cyan/60 dark:border-slate-800/50 dark:bg-[#0b101b]/90"
            style={{ animationDelay: "60ms" }}
          >
            {/* Top accent line */}
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-accent-cyan/50 transition-colors duration-300 group-hover:bg-accent-cyan/80" />
            {/* Corner brackets */}
            <span aria-hidden className="absolute right-3 top-3 h-3 w-3 border-r border-t border-accent-cyan/30 transition-colors duration-300 group-hover:border-accent-cyan/60" />
            <span aria-hidden className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-accent-cyan/30 transition-colors duration-300 group-hover:border-accent-cyan/60" />

            {/* Icon + content row */}
            <div className="flex gap-5">
              {/* Icon */}
              <div className="shrink-0">
                <span className="grid size-14 place-items-center rounded-xl border border-accent-cyan/35 bg-accent-cyan/10 text-accent-cyan">
                  <GraduationCap aria-hidden className="size-7" />
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[11px] leading-none tracking-[0.18em] text-accent-cyan/70">
                  01
                </span>

                <h2 className="mt-1 text-[1.45rem] font-bold leading-[1.15] tracking-tight text-foreground">
                  Bachelor of Business
                  <br />
                  Administration
                </h2>

                <p className="mt-2 text-[15px] font-semibold text-foreground/90">
                  DR Kakade College
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  <MapPin aria-hidden className="size-3.5 shrink-0 text-muted-foreground/60" />
                  <span className="text-[13.5px] text-muted-foreground">
                    Pune, Maharashtra
                  </span>
                </div>

                <div className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-accent-cyan/30 bg-accent-cyan/8 px-3 py-1.5">
                  <Calendar aria-hidden className="size-3.5 shrink-0 text-accent-cyan" />
                  <span className="font-mono text-[12px] tracking-[0.08em] text-accent-cyan">
                    2022 — 2025
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* ── CARD 02 — Certification (purple) ── */}
          <article
            className="cyber-glass cyber-glass-violet reveal group relative flex flex-col rounded-xl border border-accent-violet/30 bg-white/85 p-4 shadow-lg backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-accent-violet/60 dark:border-slate-800/50 dark:bg-[#0b101b]/90"
            style={{ animationDelay: "140ms" }}
          >
            {/* Top accent line */}
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-accent-violet/50 transition-colors duration-300 group-hover:bg-accent-violet/80" />
            {/* Corner brackets */}
            <span aria-hidden className="absolute right-3 top-3 h-3 w-3 border-r border-t border-accent-violet/30 transition-colors duration-300 group-hover:border-accent-violet/60" />
            <span aria-hidden className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-accent-violet/30 transition-colors duration-300 group-hover:border-accent-violet/60" />

            {/* Icon + content row */}
            <div className="flex gap-5">
              {/* Icon */}
              <div className="shrink-0">
                <span className="grid size-14 place-items-center rounded-xl border border-accent-violet/35 bg-accent-violet/10 text-accent-violet">
                  <Award aria-hidden className="size-7" />
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[11px] leading-none tracking-[0.18em] text-accent-violet/70">
                    02
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-violet">
                    Certification
                  </span>
                </div>

                <h2 className="mt-1 text-[1.45rem] font-bold leading-[1.15] tracking-tight text-foreground">
                  Advanced Prompt Engineering
                  <br />
                  with ChatGPT
                </h2>

                <p className="mt-2 text-[15px] font-semibold text-foreground/90">
                  UpGrad
                </p>

                <div className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-accent-violet/30 bg-accent-violet/8 px-3 py-1.5">
                  <Calendar aria-hidden className="size-3.5 shrink-0 text-accent-violet" />
                  <span className="font-mono text-[12px] tracking-[0.08em] text-accent-violet">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </article>

        </div>
      </Container>
    </Section>
  );
};

export default EducationSection;
