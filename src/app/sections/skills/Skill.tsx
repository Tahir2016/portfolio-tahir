import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import SkillLane from "@/components/skills/SkillLane";
import { skillsData } from "@/data/skillsData";

const SkillsSection = () => {
  return (
    <Section
      id="skills"
      ariaLabel="Technical skills"
      className="relative isolate overflow-hidden !pt-8 sm:!pt-10 lg:!pt-12"
    >
      <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="section-glow pointer-events-none absolute inset-0 -z-10" />

      <Container className="relative z-10">
        <SectionHeading
          label="Technical Skills"
          index="02"
          title="Technical Skills"
          subtitle="Technologies and tools I work with across the full application stack."
        />
      </Container>

      <Container className="relative z-10 mt-6 lg:mt-8">
        <div className="space-y-6 lg:space-y-8">
          {skillsData.map((group) => (
            <SkillLane key={group.number} {...group} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SkillsSection;
