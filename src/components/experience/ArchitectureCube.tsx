"use client";

// ─── Layer data ───────────────────────────────────────────────────────────────
interface LayerDef {
  id: string;
  label: string;
  tech: string;
  color: string;       // CSS color for accent
  colorRgb: string;    // r,g,b for rgba()
  icon: React.ReactNode;
}

const LAYERS: LayerDef[] = [
  {
    id: "frontend",
    label: "FRONTEND",
    tech: "React.js · Next.js",
    color: "#22d3ee",
    colorRgb: "34,211,238",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="16" height="11" rx="2" />
        <path d="M7 17h6M10 14v3" />
        <path d="M6.5 8.5l2.5 2-2.5 2M11 10.5h3" />
      </svg>
    ),
  },
  {
    id: "backend",
    label: "BACKEND",
    tech: "Node · Express · NestJS · Python",
    color: "#a78bfa",
    colorRgb: "167,139,250",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" aria-hidden>
        <rect x="2" y="4" width="16" height="5" rx="1.5" />
        <rect x="2" y="11" width="16" height="5" rx="1.5" />
        <circle cx="14.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "database",
    label: "DATABASE",
    tech: "PostgreSQL · MongoDB · Redis",
    color: "#34d399",
    colorRgb: "52,211,153",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" aria-hidden>
        <ellipse cx="10" cy="5" rx="7" ry="2.5" />
        <path d="M3 5v4c0 1.38 3.13 2.5 7 2.5S17 10.38 17 9V5" />
        <path d="M3 9v4c0 1.38 3.13 2.5 7 2.5S17 14.38 17 13V9" />
      </svg>
    ),
  },
  {
    id: "deployment",
    label: "DEPLOYMENT",
    tech: "Docker · AWS · CI/CD",
    color: "#60a5fa",
    colorRgb: "96,165,250",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3.5 12.5c-1.5 0-2.5-1.2-2.5-2.5a2.5 2.5 0 012.5-2.5C3.7 5.3 5.5 4 7.5 4a4 4 0 014 4H12a2.5 2.5 0 010 5H3.5z" />
        <path d="M10 12.5v4M8 15l2 2 2-2" />
      </svg>
    ),
  },
];

// ─── Single isometric block ───────────────────────────────────────────────────
// CSS 3D prism: three faces positioned in 3D space.
//
// Block dimensions (px):
//   W = width of front/top face
//   H = height of front face
//   D = depth (thickness) — used for top face height and side face width
//
// Face transforms (applied inside a preserve-3d container that is already
// rotated to the viewing angle):
//
//   Front face : no transform (sits at Z=0, faces viewer)
//   Top face   : rotateX(90deg) then translateZ(-H) — hinges up from top edge
//   Side face  : rotateY(-90deg) then translateZ(W) — hinges right from right edge
//                (negative because we rotate then translate in local space)

const W = 200; // front face width  (px)
const H = 52;  // front face height (px)
const D = 28;  // depth             (px)

// The whole stack is rotated so we see top + front + right side:
//   rotateX(-22deg)  tilts top face into view
//   rotateY(-28deg)  reveals right side face
// These are applied to the outer scene wrapper, NOT to individual faces.

interface BlockProps {
  layer: LayerDef;
  index: number;
}

const Block = ({ layer, index }: BlockProps) => {
  const { color, colorRgb, label, tech, icon } = layer;

  return (
    <div
      className="arch-block"
      style={{
        width: W,
        height: H,
        // stagger entrance
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* ── FRONT FACE ── */}
      <div
        className="arch-face arch-face-front"
        style={{
          width: W,
          height: H,
          background: `linear-gradient(135deg,
            rgba(${colorRgb},0.13) 0%,
            rgba(${colorRgb},0.06) 100%)`,
          borderColor: `rgba(${colorRgb},0.55)`,
          boxShadow: `
            inset 0 1px 0 rgba(${colorRgb},0.35),
            0 0 18px -6px rgba(${colorRgb},0.4)`,
        }}
      >
        {/* icon — left side */}
        <span
          className="arch-face-icon"
          style={{ color, width: 20, height: 20 }}
        >
          {icon}
        </span>

        {/* label — center/right */}
        <span
          className="arch-face-label"
          style={{ color }}
        >
          {label}
        </span>

        {/* tech — bottom */}
        <span className="arch-face-tech">
          {tech}
        </span>
      </div>

      {/* ── TOP FACE ── */}
      <div
        className="arch-face arch-face-top"
        style={{
          width: W,
          height: D,
          background: `linear-gradient(180deg,
            rgba(${colorRgb},0.28) 0%,
            rgba(${colorRgb},0.14) 100%)`,
          borderColor: `rgba(${colorRgb},0.5)`,
        }}
      />

      {/* ── RIGHT SIDE FACE ── */}
      <div
        className="arch-face arch-face-side"
        style={{
          width: D,
          height: H,
          background: `linear-gradient(180deg,
            rgba(${colorRgb},0.22) 0%,
            rgba(${colorRgb},0.08) 100%)`,
          borderColor: `rgba(${colorRgb},0.35)`,
        }}
      />
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const ArchitectureCube = () => {
  return (
    <figure
      className="arch-cube-wrapper group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card p-4 transition-[border-color] duration-300 hover:border-accent/40 sm:p-5"
      aria-label="System architecture diagram"
    >
      {/* card decorations */}
      <div aria-hidden className="arch-grid pointer-events-none absolute inset-0" />
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-accent/40 transition-colors duration-300 group-hover:bg-accent/70" />
      <span aria-hidden className="absolute right-3 top-3 h-3 w-3 border-r border-t border-border transition-colors duration-300 group-hover:border-accent/60" />
      <span aria-hidden className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-border transition-colors duration-300 group-hover:border-accent/60" />

      {/* header */}
      <figcaption className="relative flex items-center gap-2">
        <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          System Architecture
        </span>
        <span aria-hidden className="h-px flex-1 bg-border" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
          4 Layers
        </span>
      </figcaption>

      {/* 3D scene */}
      <div className="arch-cube-scene relative mt-4 flex flex-1 items-center justify-center">
        {/*
          .arch-cube-viewport: owns perspective
          .arch-cube-rotator: applies the viewing angle rotation
                              rotateX(-22deg) rotateY(-28deg)
          .arch-cube-stack:   preserve-3d, stacks blocks vertically
        */}
        <div className="arch-cube-viewport">
          <div className="arch-cube-rotator">
            <div className="arch-cube-stack">
              {LAYERS.map((layer, i) => (
                <Block key={layer.id} layer={layer} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ArchitectureCube;
