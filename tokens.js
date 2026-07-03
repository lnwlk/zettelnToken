/**
 * Zetteln design tokens — the single source of truth.
 *
 * Edit values HERE. The Tailwind preset (tailwind-preset.js) and the CSS
 * variables (tokens.css, generated via `npm run build:css`) both derive from
 * this file, so a change here propagates to the app, website, and docs.
 */

// Brand palette — keep in sync with the Notion brand spec.
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

const fontFamily = {
  sans: ["zettelnFont"],
  zettelnBold: ["zettelnFont-Bold"],
};

const boxShadowColor = {
  zettelnSandDark: "#c9bfa8",
  zettelnBlue: "#93bcfd",
};

module.exports = { colors, fontFamily, boxShadowColor };
