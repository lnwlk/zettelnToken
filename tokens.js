/**
 * Zetteln design tokens — the single source of truth.
 *
 * Edit values HERE. The Tailwind preset (tailwind-preset.js) and the CSS
 * variables (tokens.css, generated via `npm run build:css`) both derive from
 * this file, so a change here propagates to the app, website, and docs.
 */

// ---------------------------------------------------------------------------
// Brand palette — raw colors. Keep in sync with the Notion brand spec.
// ---------------------------------------------------------------------------
const colors = {
  zettelnLightSand: "#FDF9F5", // lightest sand (subtle fills / alt surfaces)
  zettelnSand: "#F7F1EA", // muted/secondary sand tint
  zettelnBackground: "#F1EFEC", // page background (Figma)
  zettelnSandDark: "#E0D4C3", // borders / dividers (warm tan)
  zettelnBlue: "#93bcfd", // light blue (sicher_abheften)
  zettelnGreen: "#93fdbc", // mint green (positive / done)
  zettelnYellow: "#f5bb24", // yellow (aktion_erforderlich)
  zettelnRed: "#eb563f", // red (notfall)
  zettelnRedLight: "#f9ccc5", // red 30% tint (overdue deadline field)
  zettelnDarkBlue: "#141724", // ink / black-blue
  zettelnGray: "#a1a1a1", // grey (outdated / no longer valid)
  zettelnInfoBlue: "#447DFC", // primary blue (buttons, active, links)
};

// ---------------------------------------------------------------------------
// Semantic roles — map the palette to UI intent. Web surfaces (dashboard's
// shadcn variables, docs' fumadocs variables) consume these so a card, border,
// or muted label looks identical everywhere even though each app implements the
// component itself. This is the layer that keeps the "doc look" consistent.
// ---------------------------------------------------------------------------
const semantic = {
  background: colors.zettelnBackground, // page background (warm off-white)
  surface: "#ffffff", // raised surfaces: cards, popovers, inputs (white)
  surfaceMuted: colors.zettelnSand, // subtle fills: muted zones, secondary buttons
  foreground: colors.zettelnDarkBlue, // primary text / ink
  mutedForeground: colors.zettelnGray, // secondary / muted text
  border: colors.zettelnSandDark, // borders & dividers
  primary: colors.zettelnInfoBlue, // active / accent
  primaryForeground: colors.zettelnSand, // text/icon on primary
  accent: colors.zettelnBlue, // hover fills (nav, menu items)
  accentForeground: colors.zettelnDarkBlue, // text on accent
  ring: colors.zettelnBlue, // focus ring
  destructive: colors.zettelnRed, // danger actions (solid buttons)
  destructiveForeground: colors.zettelnSand, // text on destructive
};

// ---------------------------------------------------------------------------
// Status scale — soft, tinted status styling (badges, alert boxes, chips).
// Each status has three steps:
//   bg     light tint background (distinct from the sand surfaces)
//   fg     text/icon color on that bg — meets WCAG AA (>= 4.5:1)
//   solid  strong accent for dots, borders, icons, progress fills
// Derived from the brand hues and contrast-validated. For a SOLID danger
// button use the `destructive` role above; for a soft "error" chip use error.
// ---------------------------------------------------------------------------
const status = {
  success: { bg: "#d8f3e6", fg: "#23704a", solid: "#3ab678" }, // green
  warning: { bg: "#f4ebd7", fg: "#7f5f15", solid: "#d99d12" }, // amber/gold
  error: { bg: "#f4dbd7", fg: "#7f2515", solid: "#d3381d" }, // red
  info: { bg: "#d7e0f4", fg: "#15357f", solid: "#124fde" }, // blue
  neutral: { bg: "#e9e6e2", fg: "#544b40", solid: "#897967" }, // warm gray
};

// ---------------------------------------------------------------------------
// Destructive action — delete / remove controls. Distinct from the `error`
// status (which reports a bad state); this is for controls that DO something
// dangerous. `solid`/`fg` drive solid danger buttons; `text` is a WCAG-AA red
// for danger text-links and icons on light surfaces (brand red is too light
// for text). The shadcn --destructive role is driven by semantic.destructive.
// ---------------------------------------------------------------------------
const destructive = {
  solid: colors.zettelnRed, // solid danger button background
  fg: colors.zettelnSand, // text / icon on the solid button
  text: "#b3261e", // danger text-links & icons on light surfaces (AA)
};

// ---------------------------------------------------------------------------
// Action types — the zetteln document-triage taxonomy. A domain alias layer
// over the status scale so these badges read semantically (each: bg/fg/solid).
// ---------------------------------------------------------------------------
const actionTypes = {
  unwichtig: status.neutral, // outdated / not important
  sicherAbheften: status.info, // safe to file (brand: light blue)
  aktionErforderlich: status.warning, // action required (brand: yellow)
  notfall: status.error, // emergency (brand: red)
};

// Flatten a { name: { step: value } } map into camelCase color utilities,
// e.g. { success: { bg } } -> { successBg }.
const flattenSteps = (obj) =>
  Object.fromEntries(
    Object.entries(obj).flatMap(([name, steps]) =>
      Object.entries(steps).map(([step, value]) => [
        `${name}${step[0].toUpperCase()}${step.slice(1)}`,
        value,
      ])
    )
  );

// Flattened for Tailwind color utilities (successBg, notfallSolid, destructiveText …)
const statusColors = flattenSteps(status);
const actionTypeColors = flattenSteps(actionTypes);
const destructiveColors = flattenSteps({ destructive });

// Shape & elevation — shared so radii and shadows match across surfaces.
const radius = "0.5rem";

// Elevation scale — one warm-ink shadow per surface level, increasing depth so
// stacking reads correctly (a dropdown floats above a card, a modal above all).
const shadow = {
  sm: "0 1px 2px 0 rgba(20, 23, 36, 0.06)", // resting: inputs, buttons
  card: "0 1px 3px 0 rgba(20, 23, 36, 0.12), 0 8px 24px -6px rgba(20, 23, 36, 0.20)", // raised cards
  popover:
    "0 4px 10px -2px rgba(20, 23, 36, 0.14), 0 12px 32px -8px rgba(20, 23, 36, 0.24)", // dropdowns, menus, selects
  dialog:
    "0 8px 20px -4px rgba(20, 23, 36, 0.16), 0 32px 64px -16px rgba(20, 23, 36, 0.32)", // modals
};

const fontFamily = {
  sans: ["zettelnFont"],
  zettelnBold: ["zettelnFont-Bold"],
};

const boxShadowColor = {
  zettelnSandDark: colors.zettelnSandDark,
  zettelnBlue: colors.zettelnBlue,
};

module.exports = {
  colors,
  semantic,
  status,
  statusColors,
  destructive,
  destructiveColors,
  actionTypes,
  actionTypeColors,
  radius,
  shadow,
  fontFamily,
  boxShadowColor,
};
