type PcbTone = "cyan" | "violet" | "steel";

interface PcbRoute {
  d: string;
  tone: PcbTone;
  soft?: boolean;
}

interface PcbNode {
  x: number;
  y: number;
  r: number;
  tone: PcbTone;
}

/* Circuit routing for the board. Coordinates live in the 1400x900 board module:
   the same space the board itself was drawn in, so a route can travel the full
   width or height of the module and run past the content that sits above it. */
const ROUTES: PcbRoute[] = [
  /* top band — a four-trace parallel bus that diverges */
  { d: "M 0 68 H 320 V 100 H 620", tone: "cyan" },
  { d: "M 0 78 H 240", tone: "cyan", soft: true },
  { d: "M 0 88 H 430", tone: "cyan", soft: true },
  { d: "M 0 98 H 300", tone: "steel", soft: true },

  /* top band — long cross-section routes with repeated 90-degree turns */
  { d: "M 620 100 H 700 V 74 H 980 V 130 H 1180 V 168 H 1250", tone: "cyan" },
  { d: "M 620 100 V 138", tone: "cyan", soft: true },
  { d: "M 1060 130 V 186 H 940 V 220", tone: "cyan", soft: true },
  { d: "M 800 220 H 1120 V 200 H 1240", tone: "violet" },
  { d: "M 1120 68 H 1306", tone: "violet" },
  { d: "M 1180 96 H 1300", tone: "cyan", soft: true },
  { d: "M 1330 40 V 176", tone: "steel", soft: true },

  /* top band — the band between the heading and the first lane */
  { d: "M 0 232 H 180 V 244 H 520", tone: "cyan" },
  { d: "M 1400 226 H 1120 V 238 H 700", tone: "violet" },
  { d: "M 860 238 V 220", tone: "cyan", soft: true },
  { d: "M 340 244 V 224 H 470", tone: "cyan", soft: true },
  { d: "M 240 244 V 226 H 120", tone: "steel", soft: true },

  /* left margin — long vertical trunks down the edge of the section */
  { d: "M 24 30 V 232 H 88 V 372 H 24 V 670 H 88 V 870", tone: "cyan" },
  { d: "M 58 30 V 96 H 44 V 512 H 88 V 520 H 44 V 870", tone: "violet" },
  { d: "M 92 30 V 226 H 58 V 358 H 92 V 388", tone: "steel", soft: true },
  { d: "M 24 470 H 88", tone: "cyan", soft: true },
  { d: "M 88 560 V 620 H 58 V 812", tone: "steel", soft: true },

  /* right margin — a second pair of trunks, offset from the left ones */
  { d: "M 1306 40 V 130 H 1378 V 370 H 1306 V 520 H 1378 V 646 H 1306 V 870", tone: "cyan" },
  { d: "M 1342 30 V 226 H 1306 V 380 H 1342 V 496 H 1378 V 646", tone: "violet" },
  { d: "M 1378 700 V 812 H 1306", tone: "cyan", soft: true },
  { d: "M 1342 560 V 646", tone: "violet", soft: true },

  /* the bands between the lanes — traces pass behind the panels and re-emerge */
  { d: "M 0 366 H 620 V 384 H 1400", tone: "cyan" },
  { d: "M 200 366 V 380", tone: "cyan", soft: true },
  { d: "M 780 384 V 364 H 700", tone: "cyan", soft: true },
  { d: "M 0 512 H 700 V 500 H 1400", tone: "violet" },
  { d: "M 340 512 V 524 H 470", tone: "cyan", soft: true },
  { d: "M 1120 500 V 516 H 1230", tone: "cyan", soft: true },
  { d: "M 0 652 H 1040 V 666 H 1400", tone: "cyan" },
  { d: "M 560 652 V 662", tone: "violet", soft: true },
  { d: "M 1160 666 V 654 H 1060", tone: "cyan", soft: true },

  /* lower band */
  { d: "M 0 800 H 520 V 786 H 1040", tone: "cyan" },
  { d: "M 1400 826 H 1180 V 810 H 900", tone: "violet" },
  { d: "M 300 800 V 820 H 560", tone: "cyan", soft: true },
  { d: "M 700 786 V 806", tone: "steel", soft: true },
  { d: "M 1180 810 V 832", tone: "violet", soft: true },
];

/* Solder pads: route endpoints, real branch points and a few selected bends.
   All small, so they read as vias rather than as glowing orbs. */
const NODES: PcbNode[] = [
  { x: 620, y: 100, r: 3.2, tone: "cyan" },
  { x: 240, y: 78, r: 2.4, tone: "cyan" },
  { x: 430, y: 88, r: 2.4, tone: "cyan" },
  { x: 300, y: 98, r: 2.4, tone: "steel" },
  { x: 620, y: 138, r: 2.4, tone: "cyan" },
  { x: 980, y: 130, r: 2.6, tone: "cyan" },
  { x: 1180, y: 130, r: 3.2, tone: "cyan" },
  { x: 1250, y: 168, r: 2.8, tone: "cyan" },
  { x: 1060, y: 130, r: 2.8, tone: "cyan" },
  { x: 940, y: 186, r: 2.4, tone: "cyan" },
  { x: 940, y: 220, r: 2.8, tone: "cyan" },
  { x: 1120, y: 200, r: 2.6, tone: "violet" },
  { x: 1240, y: 200, r: 2.8, tone: "violet" },
  { x: 1306, y: 68, r: 3.2, tone: "violet" },
  { x: 1300, y: 96, r: 2.4, tone: "cyan" },
  { x: 1330, y: 176, r: 2.4, tone: "steel" },
  { x: 520, y: 244, r: 3, tone: "cyan" },
  { x: 180, y: 232, r: 2.4, tone: "cyan" },
  { x: 700, y: 238, r: 3, tone: "violet" },
  { x: 1120, y: 226, r: 2.6, tone: "violet" },
  { x: 860, y: 238, r: 2.8, tone: "cyan" },
  { x: 470, y: 224, r: 2.6, tone: "cyan" },
  { x: 340, y: 244, r: 2.4, tone: "cyan" },
  { x: 120, y: 226, r: 2.4, tone: "steel" },

  { x: 88, y: 232, r: 2.8, tone: "cyan" },
  { x: 24, y: 372, r: 3, tone: "cyan" },
  { x: 88, y: 670, r: 2.8, tone:"cyan" },
  { x: 58, y: 96, r: 2.6, tone: "violet" },
  { x: 44, y: 96, r: 2.4, tone: "violet" },
  { x: 88, y: 512, r: 2.6, tone: "violet" },
  { x: 88, y: 520, r: 2.4, tone: "violet" },
  { x: 92, y: 226, r: 2.4, tone: "steel" },
  { x: 58, y: 226, r: 2.4, tone: "steel" },
  { x: 92, y: 388, r: 2.6, tone: "steel" },
  { x: 88, y: 470, r: 2.4, tone: "cyan" },
  { x: 88, y: 560, r: 2.4, tone: "steel" },
  { x: 58, y: 812, r: 2.6, tone: "steel" },

  { x: 1306, y: 130, r: 2.8, tone: "cyan" },
  { x: 1306, y: 226, r: 2.6, tone: "violet" },
  { x: 1306, y: 380, r: 2.8, tone: "violet" },
  { x: 1378, y: 496, r: 2.8, tone: "violet" },
  { x: 1378, y: 370, r: 2.8, tone: "cyan" },
  { x: 1306, y: 520, r: 2.8, tone: "cyan" },
  { x: 1342, y: 646, r: 2.8, tone: "violet" },
  { x: 1306, y: 812, r: 2.8, tone: "cyan" },

  { x: 200, y: 380, r: 2.4, tone: "cyan" },
  { x: 700, y: 364, r: 2.6, tone: "cyan" },
  { x: 470, y: 524, r: 2.6, tone: "cyan" },
  { x: 1230, y: 516, r: 2.6, tone: "cyan" },
  { x: 560, y: 662, r: 2.4, tone: "violet" },
  { x: 1060, y: 654, r: 2.6, tone: "cyan" },
  { x: 560, y: 820, r: 2.6, tone: "cyan" },
  { x: 700, y: 806, r: 2.4, tone: "steel" },
  { x: 1180, y: 832, r: 2.4, tone: "violet" },
];

const strokeClass = (tone: PcbTone, soft?: boolean) => `pcb-${tone}${soft ? "-soft" : ""}`;

/* The board module is 1400x900 user units. The global layer has no viewBox of
   its own, so one user unit is exactly one CSS pixel and the module is painted
   at its native 1:1 scale: the trace geometry, node sizes and stroke weights
   are identical to the Technical Skills board this replaces, neither stretched
   nor rescaled. */
const BOARD_WIDTH = 1400;
const BOARD_HEIGHT = 900;

/**
 * The one and only circuit-board background on the page. It is a single
 * instance mounted once, in the root layout, OUTSIDE <main> and above every
 * section, and the same 1400x900 module repeats across it (an SVG <pattern>,
 * not a second copy of the art) so the board reads as one continuous technical
 * environment rather than one board per section. Nothing else on the site
 * mounts a copy: there is no per-section instance to restrict the traces to
 * About, Skills or any other section.
 *
 * `absolute inset-0` against the root layout's `relative isolate` wrapper, which
 * spans the whole document, makes the layer exactly as tall as the page. The
 * board therefore scrolls WITH the content instead of hanging on the viewport:
 * the traces move up past the cards as you scroll, the way a printed circuit
 * sheet does, rather than staying welded to the screen. `h-full` plus
 * `min-h-full` (100% of the document-tall wrapper) is the floor, so the layer
 * can never be shorter than the page on a stubby document.
 *
 * Continuous coverage needs no scaling: this SVG has NO viewBox, so one user
 * unit is one CSS pixel and the 1400x900 <pattern> (patternUnits=userSpaceOnUse)
 * simply tiles more rows downward as the layer grows. There is no intrinsic
 * aspect ratio to preserve, so `preserveAspectRatio` is meaningless here and is
 * deliberately not set.
 *
 * The wrapper establishes the stacking context, so the board sits at -z-10 above
 * the page background and the sections sit above the board at z-10.
 *
 * Purely decorative: out of document flow, inert to pointer events and clipped
 * by its own box. Nothing in it can intercept a click or affect layout.
 *
 * The whole layer carries NO container opacity any more. Brightness is one
 * control, on the SVG (`opacity-20`), because a dim wrapper was silently
 * multiplying the traces down to nothing: 0.2 x 0.65 = 0.13, which is how a
 * "vibrant" palette still rendered as a dim smudge. The trace colours and stroke
 * weights live in globals.css under `.dark`.
 *
 * Every trace is a single 1px stroke. The wide "bloom" pass that used to render
 * the same routes a second time at 3.2px is gone: at any opacity that survived
 * the layer opacity, a 3.2px halo read as a glow around the lines rather than as
 * a trace, which is exactly the thick-glow look this layer is meant to avoid.
 *
 * The routes themselves are drawn in the module's outer bands — the left and
 * right margin trunks and the horizontal inter-lane bands — and `.pcb-section__art`
 * masks the board so those bands read at full strength in the page margins and
 * fall away to a faint ghost behind the centred content column. That is what
 * keeps traces in the gutters and card gaps without drawing them through the
 * body copy; see the mask for the exact edge arithmetic.
 *
 * Every section card still paints its own 90%-opaque glass backdrop on top of
 * the layer, so a trace can never be read through a card's text area.
 */
const PcbSectionBackground = () => {
  return (
    <div
      aria-hidden
      className="pcb-section pointer-events-none absolute inset-0 -z-10 h-full w-full min-h-full overflow-hidden"
    >
      {/* Dual-color ambient spot blurs, painted BEHIND the circuit traces.
          `-z-10` rather than `z-0`: the SVG is a static in-flow element, so a
          z-0 orb would sort ABOVE it (positioned descendants paint after static
          ones) and wash the very traces it is meant to backlight. Negative z
          is contained by the wrapper's own stacking context, so the glows can
          never escape behind the page.

          Both are `absolute`, so they are positioned against the DOCUMENT-tall
          layer and scroll with it: -top-20/-left-20 puts the first at the very
          top of the page, while top-1/3 puts the second a third of the way down
          the whole page (not a third down the viewport — that is what changes
          with a scrolling canvas). */}
      <div className="pointer-events-none absolute -top-32 -left-32 -z-10 h-[600px] w-[600px] rounded-full bg-cyan-500/12 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-32 -z-10 h-[600px] w-[600px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <svg
        className="pcb-section__art opacity-20"
        role="presentation"
        focusable="false"
      >
        <defs>
          <pattern
            id="pcb-board-module"
            width={BOARD_WIDTH}
            height={BOARD_HEIGHT}
            patternUnits="userSpaceOnUse"
          >
            <g className="pcb-section__trace">
              {ROUTES.map((route) => (
                <path key={route.d} d={route.d} className={strokeClass(route.tone, route.soft)} />
              ))}
            </g>
            <g className="pcb-section__node">
              {NODES.map((node) => (
                <circle
                  key={`${node.x}-${node.y}`}
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  className={`pcb-pad pcb-pad-${node.tone}`}
                />
              ))}
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pcb-board-module)" />
      </svg>
    </div>
  );
};

export default PcbSectionBackground;
