import { primaryTechnologies } from "@/data/experienceData";

const techAccentMap: Record<string, string> = {
  "React.js": "text-[#61DAFB]",
  "Next.js": "text-foreground/80",
  TypeScript: "text-[#3178C6]",
  JavaScript: "text-[#F7DF1E]",
  "Node.js": "text-[#339933]",
  "Express.js": "text-foreground/70",
  NestJS: "text-[#E0234E]",
  Python: "text-[#3776AB]",
  Django: "text-[#092E20]",
  FastAPI: "text-[#009688]",
  PostgreSQL: "text-[#4169E1]",
  MongoDB: "text-[#47A248]",
  Redis: "text-[#DC382D]",
  "Tailwind CSS": "text-[#06B6D4]",
  Docker: "text-[#2496ED]",
  AWS: "text-[#FF9900]",
  JWT: "text-accent-violet",
  "CI/CD": "text-accent-green",
};

const TechIcon = ({ tech, className }: { tech: string; className?: string }) => {
  const cls = `shrink-0 ${className ?? ""}`;
  switch (tech) {
    case "React.js":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <circle cx="12" cy="12" r="2.05" />
          <g stroke="currentColor" strokeWidth="1.1" fill="none">
            <ellipse rx="10" ry="3.8" cx="12" cy="12" />
            <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(60 12 12)" />
            <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.93 14.36L9.5 8.5v7H8V7h1.07l6.5 8.07V7H17v9.36h-1.07z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path fill="var(--card, #fff)" d="M13.5 11.5h2.5v1.2h-1.3v4.8H13.5v-4.8H12V11.5h1.5zm-3.5 1.2c.6 0 1 .4 1 1v2.6c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-.8h1.2v.6h1.1v-.8L8 14.8c-.6-.2-1-.6-1-1.2v-.9c0-.6.4-1 1-1h2z" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path fill="var(--card, #fff)" d="M7 16.5c0 .8.4 1.5 1.5 1.5s1.5-.7 1.5-1.5V12H8.8v4.3c0 .3-.1.5-.3.5s-.3-.2-.3-.5v-.3H7v.5zm5-4.5h1.2v3.8c0 .3.1.5.4.5s.4-.2.4-.5V12H15v3.8c0 1-.6 1.7-1.6 1.7s-1.4-.7-1.4-1.7V12z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.18L19 8.5v7L12 19.82 5 15.5v-7L12 4.18z" />
          <path d="M12 7a5 5 0 100 10A5 5 0 0012 7zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" opacity=".5" />
        </svg>
      );
    case "Express.js":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M3 8h18M3 12h12M3 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "NestJS":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M14.13 2.04c-.28-.1-.57.06-.65.34l-3.5 11.5-3.5-11.5a.5.5 0 00-.65-.34C3.5 3.2 2 6.4 2 10c0 5.52 4.48 10 10 10s10-4.48 10-10c0-3.6-1.5-6.8-3.73-7.96z" />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M12 2C9.5 2 8 3.1 8 4.5V7h4v1H5.5C4.1 8 3 9.3 3 11v3c0 1.7 1.1 3 2.5 3H7v-2.5C7 13.1 8.1 12 9.5 12H14c1.4 0 2.5-1.1 2.5-2.5V4.5C16.5 3.1 14.5 2 12 2zm-1 2a1 1 0 110 2 1 1 0 010-2z" />
          <path d="M12 22c2.5 0 4-1.1 4-2.5V17h-4v-1h6.5c1.4 0 2.5-1.3 2.5-3v-3c0-1.7-1.1-3-2.5-3H17v2.5c0 1.4-1.1 2.5-2.5 2.5H10c-1.4 0-2.5 1.1-2.5 2.5v5C7.5 20.9 9.5 22 12 22zm1-2a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      );
    case "Django":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M11.5 3h2v11.5c0 3-1.5 4.5-4 4.5-1.2 0-2.2-.3-3-.8l.8-1.7c.5.3 1.1.5 1.8.5 1.2 0 2.4-.6 2.4-2.5V3zM15 3h2v7h-2V3z" />
        </svg>
      );
    case "FastAPI":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 5l-4 6h3l-1 4 4-6h-3l1-4z" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <ellipse cx="12" cy="7" rx="7" ry="4" />
          <path d="M5 7v5c0 2.2 3.1 4 7 4s7-1.8 7-4V7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 12v5c0 2.2 3.1 4 7 4s7-1.8 7-4v-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M12 2c-1 4-4 6-4 10a4 4 0 008 0c0-4-3-6-4-10zm0 16.5a1.5 1.5 0 010-3 1.5 1.5 0 010 3z" />
        </svg>
      );
    case "Redis":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <ellipse cx="12" cy="8" rx="8" ry="3" />
          <path d="M4 8v3c0 1.66 3.58 3 8 3s8-1.34 8-3V8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 11v3c0 1.66 3.58 3 8 3s8-1.34 8-3v-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C7.38 16.85 8.49 18 11 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C9.62 13.15 8.51 12 7 12z" />
        </svg>
      );
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M13 5h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zm3 3h2v2h-2V8zm3 0h2v2h-2V8zm-6 0h2v2H7V8zm-3 3h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" />
          <path d="M21.8 12.5c-.4-.3-1.3-.4-2-.3-.1-.7-.5-1.3-1.1-1.7l-.4-.2-.2.4c-.3.5-.4 1.3-.1 1.8-.2.1-.5.2-.7.3-.5.1-1 .1-1.5.1H2.1c-.1 1-.1 2 .3 2.9.4.9 1.1 1.6 2 2 1 .4 2.1.6 3.2.6 3 0 5.2-1.4 6.3-3.9.4 0 2.5.1 3.4-1.6.1-.1.2-.3.2-.4l-.2-.1-.5.1z" />
        </svg>
      );
    case "AWS":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M7.5 13.5l-2 4h13l-2-4M6 10c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.5-.5 2.8-1.4 3.9H7.4C6.5 12.8 6 11.5 6 10z" />
          <path d="M9 17.5l1 2h4l1-2" />
        </svg>
      );
    case "JWT":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M12 2a2 2 0 012 2v2.5l2.5-2.5 1.4 1.4-2.5 2.5H18a2 2 0 010 4h-2.6l2.5 2.5-1.4 1.4L14 12.8V15a2 2 0 01-4 0v-2.2l-2.5 2.5-1.4-1.4L8.6 11.4H6a2 2 0 010-4h2.6L6.1 4.9l1.4-1.4L10 6V4a2 2 0 012-2z" />
        </svg>
      );
    case "CI/CD":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M7 6h10M5 8v6a4 4 0 004 4M19 8v6a4 4 0 01-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="3" />
        </svg>
      );
  }
};

const TechBadgeCloud = () => {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {primaryTechnologies.map((technology) => {
        const iconColor = techAccentMap[technology] ?? "text-accent/70";
        return (
          <li key={technology}>
            <span className="inline-flex items-center gap-2 rounded border border-border bg-muted px-2.5 py-1.5 font-mono text-[12px] leading-none text-foreground transition-[border-color,background-color,transform] duration-200 hover:-translate-y-px hover:border-accent/50 hover:bg-elevated">
              <TechIcon tech={technology} className={`size-[18px] ${iconColor}`} />
              {technology}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TechBadgeCloud;
