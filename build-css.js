/**
 * Generates tokens.css (CSS custom properties) from tokens.js so that
 * non-Tailwind consumers (plain CSS, a WebView, etc.) can use the same palette.
 *
 * Run: npm run build:css
 */
const fs = require("fs");
const path = require("path");
const { colors } = require("./tokens");

const toKebab = (name) =>
  name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const lines = Object.entries(colors).map(
  ([name, value]) => `  --${toKebab(name)}: ${value};`
);

const css = `/* AUTO-GENERATED from tokens.js — do not edit by hand. Run: npm run build:css */
:root {
${lines.join("\n")}
}
`;

fs.writeFileSync(path.join(__dirname, "tokens.css"), css);
console.log("Wrote tokens.css");
