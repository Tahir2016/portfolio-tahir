import Image from "next/image";
import { aboutData } from "@/data/aboutData";
import { contactData } from "@/data/contactData";

const CircuitTraces = () => (
  <svg
    aria-hidden
    viewBox="0 0 200 240"
    preserveAspectRatio="none"
    className="pointer-events-none absolute -inset-x-12 -inset-y-10 text-accent-cyan/30"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="square"
      vectorEffect="non-scaling-stroke"
    >
      {/* left traces */}
      <path d="M38 48 H22 V38" />
      <path d="M38 72 H16 V82" />
      <path d="M38 100 H24 V90" />
      <path d="M38 128 H16 V138" />
      <path d="M38 156 H22 V166" />
      <path d="M38 184 H24 V194" />
      {/* right traces */}
      <path d="M162 48 H178 V38" />
      <path d="M162 72 H184 V82" />
      <path d="M162 100 H176 V90" />
      <path d="M162 128 H184 V138" />
      <path d="M162 156 H178 V166" />
      <path d="M162 184 H176 V194" />
      {/* top traces */}
      <path d="M70 24 V10" />
      <path d="M90 24 V4" />
      <path d="M100 24 V10" />
      <path d="M118 24 V4" />
      <path d="M136 24 V10" />
      {/* bottom traces */}
      <path d="M70 210 V224" />
      <path d="M90 210 V230" />
      <path d="M100 210 V224" />
      <path d="M118 210 V230" />
      <path d="M136 210 V224" />
    </g>
    <g fill="currentColor">
      <circle cx="22" cy="38" r="1.6" />
      <circle cx="16" cy="82" r="1.6" />
      <circle cx="24" cy="90" r="1.6" />
      <circle cx="16" cy="138" r="1.6" />
      <circle cx="22" cy="166" r="1.6" />
      <circle cx="24" cy="194" r="1.6" />
      <circle cx="178" cy="38" r="1.6" />
      <circle cx="184" cy="82" r="1.6" />
      <circle cx="176" cy="90" r="1.6" />
      <circle cx="184" cy="138" r="1.6" />
      <circle cx="178" cy="166" r="1.6" />
      <circle cx="176" cy="194" r="1.6" />
      <circle cx="70" cy="10" r="1.6" />
      <circle cx="90" cy="4" r="1.6" />
      <circle cx="100" cy="10" r="1.6" />
      <circle cx="118" cy="4" r="1.6" />
      <circle cx="136" cy="10" r="1.6" />
      <circle cx="70" cy="224" r="1.6" />
      <circle cx="90" cy="230" r="1.6" />
      <circle cx="100" cy="224" r="1.6" />
      <circle cx="118" cy="230" r="1.6" />
      <circle cx="136" cy="224" r="1.6" />
    </g>
  </svg>
);

const PortraitFrame = () => {
  return (
    <div className="group relative mx-auto w-[220px] sm:w-[235px] lg:w-[250px]">
      <CircuitTraces />

      {/* Outer glow border */}
      <div className="relative rounded-[20px] bg-[linear-gradient(150deg,color-mix(in_srgb,var(--accent-cyan)_85%,transparent),color-mix(in_srgb,var(--accent)_15%,transparent)_50%,color-mix(in_srgb,var(--accent-violet)_50%,transparent))] p-[1.5px] shadow-[0_0_52px_-12px_color-mix(in_srgb,var(--accent-cyan)_80%,transparent)] transition-shadow duration-300 group-hover:shadow-[0_0_70px_-10px_color-mix(in_srgb,var(--accent-cyan)_95%,transparent)]">
        {/* Inner card */}
        <div className="relative overflow-hidden rounded-[19px] bg-card">

          {/* Dashed inner frame */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-2 z-10 rounded-2xl border border-dashed border-accent-cyan/20"
          />

          {/* Portrait image — aspect-[3/4] */}
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/images/profile.jpg"
              alt={`${aboutData.name} — ${aboutData.role}`}
              fill
              sizes="(max-width: 767px) 220px, (max-width: 1023px) 235px, 250px"
              className="object-cover object-top"
              priority
            />
            {/* Bottom gradient fade for badge legibility */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-card/95 via-card/40 to-transparent"
            />
          </div>
        </div>
      </div>

      {/* Badge — sits outside overflow-hidden, overlaps portrait bottom edge */}
      <div className="absolute inset-x-3 bottom-0 z-20 translate-y-[40%] inline-flex w-[calc(100%-1.5rem)] flex-col items-center justify-center rounded-3xl border border-white/15 bg-card/75 px-4 py-2.5 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.7)] backdrop-blur-md">
        <p className="text-[0.95rem] font-extrabold uppercase leading-tight tracking-[0.1em] text-foreground">
          {aboutData.name}
        </p>
        <p className="mt-0.5 text-[10.5px] font-medium tracking-wide text-muted-foreground">
          {aboutData.role}
          <span aria-hidden className="mx-1 text-accent-cyan">•</span>
          {contactData.location}
        </p>
      </div>

      {/* Corner brackets: REMOVED. These four marks were the last cyan
          corner-bracket frame on the page; the target design has none, so the
          portrait's own rounded border is the frame. The name/role badge below
          is untouched. */}
    </div>
  );
};

export default PortraitFrame;
