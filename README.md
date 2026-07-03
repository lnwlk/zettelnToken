# zettelnToken

Shared design tokens — the single source of truth for Zetteln's colors, fonts,
and shadows across the **app** (Expo + NativeWind), the **website**, and the
**docs** site.

## Files

| File | Purpose |
|------|---------|
| `tokens.js` | Raw token values. **Edit here.** Everything else derives from it. |
| `tailwind-preset.js` | Tailwind preset consuming `tokens.js`. For Tailwind/NativeWind projects. |
| `tokens.css` | CSS custom properties (`--zetteln-red`, …). For non-Tailwind consumers. Generated — run `npm run build:css` after editing `tokens.js`. |
| `fonts/` | The actual font files (`zettelnFont`, `zettelnFont-Bold`) so every project loads them from one place. |

## Install (separate-repo setup)

Each project adds it as a git dependency:

```bash
npm install github:lnwlk/zettelnToken
```

## Use

### Tailwind / NativeWind (app, website, docs)

```js
// tailwind.config.js
module.exports = {
  // App (native): stack AFTER nativewind so tokens win
  presets: [require("nativewind/preset"), require("zettelnToken/tailwind-preset")],
  // Website / docs:
  // presets: [require("zettelnToken/tailwind-preset")],
};
```

Then `bg-zettelnSand`, `text-zettelnRed`, `font-zettelnBold`, etc. work everywhere.

### Plain CSS (any non-Tailwind consumer)

```css
@import "zettelnToken/tokens.css";
.badge { background: var(--zetteln-sand); color: var(--zetteln-dark-blue); }
```

## Editing tokens

1. Change values in `tokens.js`.
2. Run `npm run build:css`.
3. Commit & push. Bump the version so consumers can pin.
