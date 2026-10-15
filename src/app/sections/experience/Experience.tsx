import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import CapabilityHighlights from "@/components/experience/CapabilityHighlights";
import CurrentRolePanel from "@/components/experience/CurrentRolePanel";
import ExperienceSummary from "@/components/experience/ExperienceSummary";
import ProfessionalProjectCard from "@/components/experience/ProfessionalProjectCard";
import ResponsibilityPanel from "@/components/experience/ResponsibilityPanel";
import TechnologyStack from "@/components/experience/TechnologyStack";
import { professionalProjects } from "@/data/experienceData";

const ExperienceSection = () => {
  return (
    <Section
      id="experience"
      ariaLabel="Professional experience"
      className="relative isolate !pt-7"
    >
      <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="section-glow pointer-events-none absolute inset-0 -z-10" />

      {/* ── 1. Section header ── */}
      <Container>
        <div className="reveal">
          <SectionLabel index="04">Experience</SectionLabel>
        </div>

        {/* ── 2. Intro + experience panels ── */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-stretch lg:gap-5">

          {/* ── LEFT: intro + capability tiles ── */}
          <div
            className="reveal flex min-w-0 flex-col"
            style={{ animationDelay: "40ms" }}
          >
            <h2 className="text-[clamp(1.9rem,3.2vw,2.4rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              <span className="block">3+ Years of</span>
              <span className="block">Building Real</span>
              <span className="block text-accent">Products</span>
            </h2>

            <p className="mt-3 text-base leading-[1.6] text-muted-foreground">
              I have 3+ years of professional experience building and shipping
              production-grade Full Stack applications. Alongside this work, I
              continue developing my skills in Generative AI and Agentic AI,
              including LLM integrations, RAG, and agent workflows.
            </p>

            <div className="mt-5 flex-1">
              <CapabilityHighlights />
            </div>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:items-stretch lg:gap-5">
            {/* ── Experience card ── */}
            <div
              className="reveal flex min-w-0"
              style={{ animationDelay: "100ms" }}
            >
              <CurrentRolePanel />
            </div>

            {/* ── Technology stack panel ── */}
            <div
              className="reveal flex min-w-0"
              style={{ animationDelay: "160ms" }}
            >
              <TechnologyStack />
            </div>
          </div>
        </div>
      </Container>

      {/* ── 3. Key responsibilities ── */}
      <Container className="mt-8">
        <div className="reveal">
          <SectionLabel>Key Responsibilities</SectionLabel>
        </div>
        <div className="mt-3">
          <ResponsibilityPanel />
        </div>
      </Container>

      {/* ── 4. Professional projects ── */}
      <Container className="mt-8">
        <div className="reveal">
          <SectionLabel trailing="Real-world products built during my professional experience">
            Professional Projects
          </SectionLabel>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {professionalProjects.map((project, index) => (
            <div
              key={project.number}
              className="reveal flex min-w-0"
              style={{ animationDelay: `${100 + index * 80}ms` }}
            >
              <ProfessionalProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>

      {/* ── 5. Experience summary ── */}
      <Container className="mt-3">
        <div className="reveal">
          <ExperienceSummary />
        </div>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
