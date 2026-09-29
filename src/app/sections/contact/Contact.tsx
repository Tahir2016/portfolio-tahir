import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactFormPanel from "@/components/contact/ContactFormPanel";
import ContactSocials from "@/components/contact/ContactSocials";
import PortraitFrame from "@/components/contact/PortraitFrame";

const STATEMENT_LINES = [
  "HAVE A PROJECT",
  "IN MIND OR JUST",
  "WANT TO SAY",
  "HELLO? DROP",
  "ME A MESSAGE",
  "AND I'LL",
  "RESPOND",
  "SOON.",
];

const ContactSection = () => {
  return (
    <Section
      id="contact"
      ariaLabel="Contact"
      className="relative isolate !pt-4 !pb-0 sm:!pt-5 lg:!pt-6"
    >
      <div aria-hidden className="grid-pattern pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="section-glow pointer-events-none absolute inset-0 -z-10" />

      <Container>
        {/* Section header */}
        <div className="reveal">
          <SectionLabel index="06">Contact</SectionLabel>
        </div>

        {/*
          12-col grid — each area gets exactly 4 columns on lg+.
          On md: left stacks above center, form stays right.
          On mobile: single column.
        */}
        <div className="mt-8 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">

          {/* ── LEFT col-span-4 — statement ── */}
          <div
            className="reveal @container min-w-0 self-center md:col-start-1 md:row-start-1 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:self-start lg:pt-8"
            style={{ animationDelay: "40ms" }}
          >
            <h2 className="text-[clamp(1.8rem,9cqw,3rem)] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-foreground">
              {STATEMENT_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* ── CENTER col-span-5 shifted left — portrait + CTA ── */}
          <div
            className="reveal min-w-0 flex flex-col items-center justify-center gap-6 md:col-start-1 md:row-start-2 lg:col-span-5 lg:col-start-4 lg:row-start-1 lg:pt-8"
            style={{ animationDelay: "100ms" }}
          >
            <div className="lg:-translate-x-4">
              <PortraitFrame />
            </div>

            {/* CTA slogan — strong size, inline flow */}
            <p className="w-full pt-6 text-center text-[clamp(1.3rem,2.6vw,2rem)] font-bold uppercase leading-[1.15] tracking-[-0.01em] text-foreground lg:mt-10 lg:pt-0">
              <span className="block">LET&apos;S BUILD</span>
              <span className="block text-accent">SOMETHING EXCEPTIONAL</span>
              <span className="block">TOGETHER!</span>
            </p>
          </div>

          {/* ── RIGHT col-span-4 — form ── */}
          <div
            className="reveal min-w-0 md:col-start-2 md:row-start-1 md:row-end-3 lg:col-span-4 lg:col-start-9 lg:row-start-1"
            style={{ animationDelay: "160ms" }}
          >
            <ContactFormPanel />
          </div>
        </div>

        {/* ── Contact details + socials — full width below main composition ── */}
        <div className="reveal mt-12" style={{ animationDelay: "220ms" }}>
          <ContactDetails />
        </div>
        <div className="reveal mt-4" style={{ animationDelay: "280ms" }}>
          <ContactSocials />
        </div>
      </Container>

      {/* Footer */}
      <Container className="mt-10 pb-6">
        <div className="reveal flex items-center justify-center gap-4">
          <span className="h-px w-8 shrink-0 bg-border sm:w-16" />
          <p className="whitespace-nowrap font-mono text-xs tracking-wide text-muted-foreground">
            Made with ❤️ by Tahir Pathan
          </p>
          <span className="h-px w-8 shrink-0 bg-border sm:w-16" />
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
