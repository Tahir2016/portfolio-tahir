import AboutSection from "./sections/about/About";
import SkillsSection from "./sections/skills/Skill";
import ProjectsSection from "./sections/projects/Projects";
import ExperienceSection from "./sections/experience/Experience";
import EducationSection from "./sections/education/Education";
import ContactSection from "./sections/contact/Contact";

export default function HomePage() {
  return (
    <>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}