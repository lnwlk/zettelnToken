/**
 * Generates tokens.css (CSS custom properties) from tokens.js so that
 * non-Tailwind consumers use the same palette. Emits three groups:
 *
 *   1. --zetteln-<color>        raw brand palette (hex)
 *   2. --zetteln-<role>         semantic roles (hex)      e.g. --zetteln-surface
 *   3. --zetteln-hsl-<role>     semantic roles as "H S% L%" triplets, for
 *                               shadcn-style `hsl(var(--x))` theming (dashboard)
 *
 * Run: npm run build:css
 */
const fs = require("fs");
const path = require("path");
const { colors, semantic, radius } = require("./tokens");

const toKebab = (name) =>
  name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// #rrggbb -> "H S% L%" (space-separated, shadcn-compatible)
function hexToHslTriplet(hex) {
  const m = hex.replace("#", "");
  const r = parseInt(m.slice(0, 2), 16) / 255;
  const g = parseInt(m.slice(2, 4), 16) / 255;
  const b = parseInt(m.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  const H = Math.round(h * 360);
  const S = Math.round(s * 100);
  const L = Math.round(l * 100);
  return `${H} ${S}% ${L}%`;
}

const paletteVars = Object.entries(colors).map(
  ([name, value]) => `  --${toKebab(name)}: ${value};`
);

const semanticHex = Object.entries(semantic).map(
  ([name, value]) => `  --zetteln-${toKebab(name)}: ${value};`
);

const semanticHsl = Object.entries(semantic).map(
  ([name, value]) =>
    `  --zetteln-hsl-${toKebab(name)}: ${hexToHslTriplet(value)};`
);

const css = `/* AUTO-GENERATED from tokens.js — do not edit by hand. Run: npm run build:css */
:root {
  /* --- Brand palette (hex) --- */
${paletteVars.join("\n")}

  /* --- Semantic roles (hex) --- */
${semanticHex.join("\n")}

  /* --- Semantic roles as HSL triplets, for shadcn hsl(var(--x)) theming --- */
${semanticHsl.join("\n")}

  /* --- Shape --- */
  --zetteln-radius: ${radius};
}
`;

fs.writeFileSync(path.join(__dirname, "tokens.css"), css);
console.log("Wrote tokens.css");
