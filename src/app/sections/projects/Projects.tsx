import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projectsData";

const featured = projectsData.find((project) => project.tier === "featured");
const secondary = projectsData.filter((project) => project.tier === "secondary");
const supporting = projectsData.filter((project) => project.tier === "compact");

const ProjectsSection = () => {
  return (
    <Section
      id="projects"
      ariaLabel="Personal projects"
      className="relative isolate !pt-8 sm:!pt-10 lg:!pt-12"
    >
      <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="section-glow pointer-events-none absolute inset-0 -z-10" />

      <Container>
        <SectionHeading
          label="Personal Projects"
          index="03"
          title="Independent projects exploring AI, full-stack development, and modern web systems."
        />
      </Container>

      <Container className="mt-6 lg:mt-8">
        {featured && (
          <div className="reveal">
            <FeaturedProject project={featured} />
          </div>
        )}

        <div className="card-grid-2 mt-6 lg:mt-8">
          {secondary.map((project, index) => (
            <div
              key={project.title}
              className="reveal h-full"
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3">
          {supporting.map((project, index) => (
            <div
              key={project.title}
              className="reveal h-full"
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProjectsSection;