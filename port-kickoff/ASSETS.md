# Asset inventory

## Brand
- `/assets/brand/logo-d.png` - canonical Dade Studio D logomark. 1,425 x 1,425 PNG. Source of truth. No SVG variant exists.
- `/assets/brand/README.md` - brand asset usage notes.

## Fonts (self-hosted)
- `/assets/fonts/InterVariable.woff2` - Inter Variable, weight 100-900.
- `/assets/fonts/JetBrainsMono[wght].woff2` - JetBrains Mono Variable, weight 100-800. Literal brackets OK on Vercel; percent-encoded also works.

## Exploratory (NOT shipped)
- `/assets/exploratory/` - Claude-generated "d" variant archived for reference only.

## Physical location
All shipped assets live in `public/assets/` for Vercel serve-root. Referenced from artifacts via absolute `/assets/...` paths.
