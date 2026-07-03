const { colors, fontFamily, boxShadowColor } = require("./tokens");

/**
 * Shared Tailwind preset. Consume it in each project's tailwind.config.js:
 *
 *   // App (native) — stack after nativewind/preset
 *   presets: [require("nativewind/preset"), require("zettelnToken/tailwind-preset")]
 *
 *   // Website & docs
 *   presets: [require("zettelnToken/tailwind-preset")]
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  theme: {
    extend: {
      colors,
      fontFamily,
      boxShadowColor,
    },
  },
};
