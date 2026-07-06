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
  zettelnBackground: "#efe8e2", // page sand / gray
  zettelnSand: "#f7f1ea", // card/badge sand (warmer than background)
  zettelnSandDark: "#c9bfa8", // borders / shadows on sand
  zettelnBlue: "#93bcfd", // light blue (sicher_abheften)
  zettelnYellow: "#f5bb24", // yellow (aktion_erforderlich)
  zettelnRed: "#eb563f", // red (notfall)
  zettelnRedLight: "#f9ccc5", // red 30% tint (overdue deadline field)
  zettelnDarkBlue: "#141724", // ink / black-blue
  zettelnGray: "#a1a1a1", // grey (outdated / no longer valid)
  zettelnInfoBlue: "#2c68f6", // stronger blue (appeal deadline text)
};

// ---------------------------------------------------------------------------
// Semantic roles — map the palette to UI intent. Web surfaces (dashboard's
// shadcn variables, docs' fumadocs variables) consume these so a card, border,
// or muted label looks identical everywhere even though each app implements the
// component itself. This is the layer that keeps the "doc look" consistent.
// ---------------------------------------------------------------------------
const semantic = {
  background: colors.zettelnBackground, // page background
  surface: colors.zettelnSand, // cards, popovers, inputs
  surfaceMuted: colors.zettelnBackground, // subtle fills on a surface
  foreground: colors.zettelnDarkBlue, // primary text / ink
  mutedForeground: colors.zettelnGray, // secondary / muted text
  border: colors.zettelnSandDark, // borders & dividers
  primary: colors.zettelnInfoBlue, // active / accent
  primaryForeground: colors.zettelnSand, // text/icon on primary
  accent: colors.zettelnBlue, // hover fills (nav, menu items)
  accentForeground: colors.zettelnDarkBlue, // text on accent
  ring: colors.zettelnBlue, // focus ring
  destructive: colors.zettelnRed, // danger actions
  destructiveForeground: colors.zettelnSand, // text on destructive
};

// Shape & elevation — shared so radii and shadows match across surfaces.
const radius = "0.5rem";

const shadow = {
  sm: "0 1px 2px 0 rgba(20, 23, 36, 0.04)",
  DEFAULT:
    "0 1px 3px 0 rgba(20, 23, 36, 0.06), 0 1px 2px -1px rgba(20, 23, 36, 0.06)",
};

const fontFamily = {
  sans: ["zettelnFont"],
  zettelnBold: ["zettelnFont-Bold"],
};

const boxShadowColor = {
  zettelnSandDark: "#c9bfa8",
  zettelnBlue: "#93bcfd",
};

module.exports = {
  colors,
  semantic,
  radius,
  shadow,
  fontFamily,
  boxShadowColor,
};
