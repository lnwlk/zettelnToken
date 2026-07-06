# zettelnToken

Shared design tokens — the single source of truth for Zetteln's colors, fonts,
and shadows across the **app** (Expo + NativeWind), the **website**, and the
**docs** site.

## Files

| File | Purpose |
|------|---------|
| `tokens.js` | Raw token values + semantic roles. **Edit here.** Everything else derives from it. |
| `tailwind-preset.js` | Tailwind preset consuming `tokens.js`. For Tailwind/NativeWind projects. |
| `tokens.css` | CSS custom properties. For non-Tailwind consumers. Generated — run `npm run build:css` after editing `tokens.js`. |
| `fonts/` | The actual font files (`zettelnFont`, `zettelnFont-Bold`) so every project loads them from one place. |
| `assets/` | Brand marks — `logo.svg`, `icon.svg` (favicon; theme-aware). One canonical copy for all projects. |

## Token layers

`tokens.js` exposes three layers:

1. **Palette** — raw brand colors (`zettelnSand`, `zettelnRed`, …).
2. **Semantic roles** — palette mapped to UI intent (`surface`, `foreground`, `border`, `mutedForeground`, `primary`, `accent`, `ring`, `destructive`). This is the layer that keeps a card/border/muted-label looking identical across docs and dashboard.
3. **Status scale** — soft, contrast-validated status styling for badges/alerts. Five statuses (`success`, `warning`, `error`, `info`, `neutral`), each with three steps: `bg` (light tint), `fg` (text on the tint, WCAG AA), `solid` (accent for dots/borders/icons). Exposed as Tailwind utilities via `statusColors` (`bg-successBg`, `text-successFg`, `bg-warningSolid`, …) and as `--zetteln-status-<name>-<step>` CSS vars.
4. **Shape/elevation** — `radius`, `shadow`.

`tokens.css` emits each semantic role three ways: `--zetteln-surface` (hex) and
`--zetteln-hsl-surface` (a `H S% L%` triplet for shadcn-style `hsl(var(--x))`
theming, used by the dashboard).

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
