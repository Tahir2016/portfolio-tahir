import CapabilityCard from "@/components/CapabilityCard";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import { aboutData } from "@/data/aboutData";

export default function AboutSection() {
  return (
    <section id="about" aria-label="About" className="relative isolate">
      <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="section-glow pointer-events-none absolute inset-0 -z-10" />

      <Container className="pb-10 pt-10 lg:pb-12 lg:pt-12">
        <div className="reveal">
          <SectionLabel index="01">About / Overview</SectionLabel>
        </div>

        <p
          className="reveal mt-6 text-xl font-medium text-foreground sm:text-2xl"
          style={{ animationDelay: "40ms" }}
        >
          {aboutData.greeting}
        </p>

        <h1
          className="reveal mt-4 max-w-full text-[clamp(1.85rem,7.5vw,2.25rem)] font-semibold leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          <span className="block">{aboutData.role}</span>
          <span className="block text-muted-foreground">{aboutData.subheading}</span>
        </h1>

        <p
          className="reveal mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm"
          style={{ animationDelay: "160ms" }}
        >
          <span aria-hidden className="text-accent">{"//"}</span>
          React.js → Node.js / Python → PostgreSQL / MongoDB → AWS
        </p>

        <p
          className="reveal mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          {aboutData.intro}
        </p>

        <div className="card-grid-2 mt-6 lg:mt-8">
          {aboutData.capabilities.map((capability, index) => (
            <div
              key={capability.id}
              className="reveal h-full"
              style={{ animationDelay: `${320 + index * 90}ms` }}
            >
              <CapabilityCard {...capability} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}