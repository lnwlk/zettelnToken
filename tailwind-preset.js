const {
  colors,
  semantic,
  statusColors,
  destructiveColors,
  actionTypeColors,
  radius,
  shadow,
  fontFamily,
  boxShadowColor,
} = require("./tokens");

/**
 * Shared Tailwind preset. Consume it in each project's tailwind.config.js:
 *
 *   // App (native) — stack after nativewind/preset
 *   presets: [require("nativewind/preset"), require("zettelnToken/tailwind-preset")]
 *
 *   // Website & docs
 *   presets: [require("zettelnToken/tailwind-preset")]
 *
 * Exposes the raw palette (bg-zettelnSand, …) plus semantic utilities
 * (bg-surface, text-mutedForeground, border-border, …) and the shared radius.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors,
        ...semantic,
        ...statusColors,
        ...destructiveColors,
        ...actionTypeColors,
      },
      borderRadius: {
        zetteln: radius,
      },
      boxShadow: {
        "zetteln-sm": shadow.sm,
        "zetteln-card": shadow.card,
        "zetteln-popover": shadow.popover,
        "zetteln-dialog": shadow.dialog,
      },
      fontFamily,
      boxShadowColor,
    },
  },
};
