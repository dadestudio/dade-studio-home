# Global fixes applied across Arts 1-5

1. **Tailscale purge.** All Tailscale / tailnet / MagicDNS references removed from business-facing artifacts. studio.config.ts card kept .ts visual; content replaced with real stack (Notion / GitHub / Cursor / Supabase).
2. **MaaS naming.** "Models as a Service" -> "Memory as a Service" everywhere. Long-form "Memory as a Service", short "MaaS".
3. **Logo hygiene.** Canonical asset `/assets/brand/logo-d.png` (1,425x1,425 PNG, no SVG). Inline SVG symbol/use removed. Refs swapped to `<img src="/assets/brand/logo-d.png" alt="Dade Studio" width="40" height="40" />`.
4. **Self-hosted fonts.** Google Fonts link replaced with @font-face pointing at `/assets/fonts/InterVariable.woff2` and `/assets/fonts/JetBrainsMono[wght].woff2`.
5. **Token parity.** Art 1 naming scheme enforced across 2-5. Orphan reconciliation: `--dur-enter` dropped, `--border-strong` -> `--border-default`, rest kept.
6. **Accessibility.** Axe clean. Contrast fixes within locked palette. Focus rings on interactives. Alt text on logo imgs.
