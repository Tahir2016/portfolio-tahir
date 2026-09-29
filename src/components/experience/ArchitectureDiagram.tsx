"use client";

import type { ArchitectureLayer } from "@/utils/types";

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
}

// ─── Isometric cube geometry ──────────────────────────────────────────────────
//
//  The cube has a CENTER VERTICAL EDGE as the dominant feature.
//  Two vertical faces meet at that edge:
//
//    LEFT FACE  (icon)  ←  center edge  →  RIGHT FACE (label)
//
//  Top face is a rhombus connecting the top edges of both faces.
//
//  Coordinate system (all in SVG user units):
//
//    CX, CY  = top of the center vertical edge
//    LW      = width of left face  (recedes left)
//    RW      = width of right face (faces viewer, slightly wider)
//    FH      = height of both vertical faces
//    SY      = vertical skew of the outer top corners (isometric angle)
//
//  Left face corners:
//    top-right  = (CX,       CY)
//    top-left   = (CX - LW,  CY + SY)   ← skewed up-left
//    bot-left   = (CX - LW,  CY + SY + FH)
//    bot-right  = (CX,       CY + FH)
//
//  Right face corners:
//    top-left   = (CX,       CY)
//    top-right  = (CX + RW,  CY + SY)   ← skewed up-right
//    bot-right  = (CX + RW,  CY + SY + FH)
//    bot-left   = (CX,       CY + FH)
//
//  Top face (rhombus):
//    left       = (CX - LW,  CY + SY)
//    top        = (CX,       CY - SY)   ← apex
//    right      = (CX + RW,  CY + SY)
//    center     = (CX,       CY)
//
// ─────────────────────────────────────────────────────────────────────────────

const LW  = 52;   // left face width
const RW  = 88;   // right face width
const FH  = 46;   // face height
const SY  = 14;   // skew Y (isometric angle)

// Horizontal center of the cube (center edge X)
const CX  = 72;
// Step between block tops
const STEP = 78;
// First block top Y
const Y0  = 38;

// Total SVG dimensions
const SVG_W = 300;
const SVG_H  = Y0 + 4 * STEP + FH + SY + 32;

// ─── Polygon point helpers ────────────────────────────────────────────────────
const p = (coords: [number, number][]) =>
  coords.map(([x, y]) => `${+x.toFixed(2)},${+y.toFixed(2)}`).join(" ");

const leftFacePts  = (cx: number, cy: number) => p([
  [cx,      cy],
  [cx - LW, cy + SY],
  [cx - LW, cy + SY + FH],
  [cx,      cy + FH],
]);

const rightFacePts = (cx: number, cy: number) => p([
  [cx,      cy],
  [cx + RW, cy + SY],
  [cx + RW, cy + SY + FH],
  [cx,      cy + FH],
]);

const topFacePts   = (cx: number, cy: number) => p([
  [cx - LW, cy + SY],
  [cx,      cy - SY],
  [cx + RW, cy + SY],
  [cx,      cy],
]);

// ─── Per-layer visual config ──────────────────────────────────────────────────
interface LayerCfg {
  label: string;
  tech: string[];
  color: string;
  colorDim: string;
  colorTop: string;
  icon: React.ReactNode;
}

const LAYERS: LayerCfg[] = [
  {
    label: "FRONTEND",
    tech: ["React.js", "Next.js"],
    color: "#22d3ee",
    colorDim: "#0e7490",
    colorTop: "#a5f3fc",
    icon: (
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-10" y="-8" width="20" height="13" rx="2" strokeWidth="1.5" />
        <path d="M-5 5h10M0 5v4" strokeWidth="1.4" />
        <path d="M-4 0l2.5 2.5L-4 5" strokeWidth="1.2" />
        <path d="M1 2.5h4" strokeWidth="1.2" />
      </g>
    ),
  },
  {
    label: "BACKEND",
    tech: ["Node.js", "Express.js", "NestJS", "Python", "Django", "FastAPI"],
    color: "#a78bfa",
    colorDim: "#5b21b6",
    colorTop: "#ddd6fe",
    icon: (
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <rect x="-10" y="-9" width="20" height="6" rx="1.5" strokeWidth="1.4" />
        <rect x="-10" y="0"  width="20" height="6" rx="1.5" strokeWidth="1.4" />
        <circle cx="6"  cy="-6" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="6"  cy="3"  r="1.2" fill="currentColor" stroke="none" />
        <circle cx="2"  cy="-6" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="2"  cy="3"  r="1.2" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    label: "DATABASE",
    tech: ["PostgreSQL", "MongoDB", "Redis"],
    color: "#34d399",
    colorDim: "#065f46",
    colorTop: "#a7f3d0",
    icon: (
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <ellipse cx="0" cy="-6" rx="9" ry="3.5" strokeWidth="1.4" />
        <path d="M-9-6v5c0 1.93 4.03 3.5 9 3.5S9 0.93 9-1v-5" strokeWidth="1.4" />
        <path d="M-9-1c0 1.93 4.03 3.5 9 3.5S9 0.93 9-1" strokeWidth="1" strokeDasharray="2.5 2" />
      </g>
    ),
  },
  {
    label: "DEPLOYMENT",
    tech: ["Docker", "AWS", "CI/CD"],
    color: "#60a5fa",
    colorDim: "#1e3a8a",
    colorTop: "#bfdbfe",
    icon: (
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-8 1c-2.2 0-3.5-1.8-3.5-3.5A3.5 3.5 0 01-8-6c.2-2.8 2.4-5 5-5a5 5 0 015 5h.5A3 3 0 0112 1H-8z" strokeWidth="1.3" />
        <path d="M0 1v6M-3 5l3 3 3-3" strokeWidth="1.3" />
      </g>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const ArchitectureDiagram = ({ layers }: ArchitectureDiagramProps) => {
  const merged = layers.map((l, i) => ({ ...l, ...LAYERS[i] }));

  return (
    <figure className="cyber-glass iso-arch group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card p-4 transition-[border-color] duration-300 hover:border-accent/40 sm:p-5">
      <div aria-hidden className="arch-grid pointer-events-none absolute inset-0" />
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-accent/40 transition-colors duration-300 group-hover:bg-accent/70" />

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

      <div className="relative mt-3 flex flex-1 items-center justify-center">
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full"
          style={{ maxHeight: "440px" }}
          role="img"
          aria-label="Isometric system architecture: Frontend, Backend, Database, Deployment"
        >
          <defs>
            {merged.map((layer, i) => (
              <filter key={i} id={`glow${i}`} x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            ))}
            <clipPath id="svgClip">
              <rect x="0" y="0" width={SVG_W} height={SVG_H} />
            </clipPath>
          </defs>

          {/* ── connectors ── */}
          {merged.slice(0, -1).map((layer, i) => {
            // connector runs from bottom of center edge to top of next block's center edge
            const y1 = Y0 + i * STEP + FH;           // bottom of center edge i
            const y2 = Y0 + (i + 1) * STEP - SY;     // top face apex of next block
            const midY = (y1 + y2) / 2;
            return (
              <g key={`c${i}`} clipPath="url(#svgClip)">
                <line
                  x1={CX} y1={y1 + 1}
                  x2={CX} y2={y2 - 1}
                  stroke={layer.color}
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity="0.45"
                />
                {/* chevron */}
                <path
                  d={`M${CX - 4},${midY - 3} L${CX},${midY + 3} L${CX + 4},${midY - 3}`}
                  fill="none"
                  stroke={layer.color}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                {/* animated travelling dot */}
                <circle r="2.2" fill={layer.color} opacity="0">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.6}s`}
                    path={`M${CX},${y1 + 1} L${CX},${y2 - 1}`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.9;0.9;0"
                    keyTimes="0;0.15;0.85;1"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.6}s`}
                  />
                </circle>
              </g>
            );
          })}

          {/* ── isometric blocks ── */}
          {merged.map((layer, i) => {
            const cy = Y0 + i * STEP;

            // face center points for content placement
            // Left face center X: CX - LW/2, center Y: cy + SY/2 + FH/2
            const iconX = CX - LW / 2;
            const iconY = cy + SY / 2 + FH / 2;

            // Right face: label sits in upper portion
            // Right face center X: CX + RW/2, skewed
            const labelX = CX + RW / 2 + 2;
            const labelY = cy + SY / 2 + FH / 2 - 4;

            // Tech list: to the right of the entire cube
            const techX = CX + RW + 14;
            const techY = cy + SY + 4;

            return (
              <g key={layer.label}>
                {/* glow halo */}
                <ellipse
                  cx={CX + (RW - LW) / 2}
                  cy={cy + SY / 2 + FH / 2}
                  rx={(LW + RW) / 2 + 8}
                  ry={FH / 2 + 10}
                  fill={layer.color}
                  opacity="0.07"
                  filter={`url(#glow${i})`}
                />

                {/* ── LEFT FACE (icon) — darker, receding ── */}
                <polygon
                  points={leftFacePts(CX, cy)}
                  fill={layer.colorDim}
                  fillOpacity="0.35"
                  stroke={layer.color}
                  strokeWidth="0.8"
                  strokeOpacity="0.6"
                />
                {/* left face inner highlight on top edge */}
                <line
                  x1={CX - LW + 2} y1={cy + SY + 1}
                  x2={CX - 1}       y2={cy + 1}
                  stroke={layer.colorTop}
                  strokeWidth="0.7"
                  opacity="0.5"
                />

                {/* ── RIGHT FACE (label) — lighter, facing viewer ── */}
                <polygon
                  points={rightFacePts(CX, cy)}
                  fill={layer.color}
                  fillOpacity="0.12"
                  stroke={layer.color}
                  strokeWidth="1"
                  strokeOpacity="0.85"
                />
                {/* right face inner highlight on top edge */}
                <line
                  x1={CX + 1}       y1={cy + 1}
                  x2={CX + RW - 2}  y2={cy + SY + 1}
                  stroke={layer.colorTop}
                  strokeWidth="0.8"
                  opacity="0.55"
                />

                {/* ── TOP FACE (rhombus) ── */}
                <polygon
                  points={topFacePts(CX, cy)}
                  fill={layer.colorTop}
                  fillOpacity="0.22"
                  stroke={layer.color}
                  strokeWidth="0.8"
                  strokeOpacity="0.75"
                />

                {/* ── CENTER VERTICAL EDGE — the dominant line ── */}
                <line
                  x1={CX} y1={cy}
                  x2={CX} y2={cy + FH}
                  stroke={layer.colorTop}
                  strokeWidth="1.5"
                  opacity="0.9"
                />

                {/* bottom glow line */}
                <line
                  x1={CX - LW} y1={cy + SY + FH}
                  x2={CX + RW} y2={cy + SY + FH}
                  stroke={layer.color}
                  strokeWidth="1.2"
                  opacity="0.2"
                />

                {/* offset ghost plate behind right face */}
                <polygon
                  points={rightFacePts(CX + 2, cy + 2)}
                  fill="none"
                  stroke={layer.color}
                  strokeWidth="0.5"
                  strokeOpacity="0.18"
                />

                {/* ── ICON on left face ── */}
                <g
                  transform={`translate(${iconX}, ${iconY})`}
                  color={layer.colorTop}
                  opacity="0.95"
                >
                  {layer.icon}
                </g>

                {/* ── LABEL on right face ── */}
                {/* layer number — small, top of right face */}
                <text
                  x={CX + 6}
                  y={cy + SY / 2 + 9}
                  fontFamily="ui-monospace, monospace"
                  fontSize="7.5"
                  fill={layer.color}
                  opacity="0.65"
                  letterSpacing="0.06em"
                >
                  L0{i + 1}
                </text>
                {/* main label */}
                <text
                  x={labelX}
                  y={labelY}
                  fontFamily="ui-monospace, monospace"
                  fontSize="10.5"
                  fontWeight="700"
                  fill={layer.color}
                  letterSpacing="0.13em"
                  textAnchor="middle"
                >
                  {layer.label}
                </text>

                {/* ── TECH LIST — right of cube ── */}
                {layer.tech.map((t, ti) => {
                  // 2-column layout for Backend (6 items)
                  const col = ti >= 3 ? 1 : 0;
                  const row = ti >= 3 ? ti - 3 : ti;
                  const tx = techX + col * 62;
                  const ty = techY + row * 13;
                  return (
                    <g key={t}>
                      <circle cx={tx} cy={ty + 3.5} r="1.8" fill={layer.color} opacity="0.75" />
                      <text
                        x={tx + 6}
                        y={ty + 7}
                        fontFamily="ui-monospace, monospace"
                        fontSize="8"
                        fill="#94a3b8"
                        letterSpacing="0.02em"
                      >
                        {t}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
};

export default ArchitectureDiagram;
