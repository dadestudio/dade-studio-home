"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import s from "./developer.module.css";

function ThemeToggleBtn() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      className={s.themeBtn}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        {isDark ? (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </>
        )}
      </svg>
      <span>{isDark ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}

const SECTIONS = [
  { id: "overview", num: "00", label: "Overview" },
  { id: "tokens", num: "01", label: "Token Map" },
  { id: "components", num: "02", label: "Component Inventory" },
  { id: "performance", num: "03", label: "Performance Budget" },
  { id: "fonts", num: "04", label: "Font Pipeline" },
  { id: "images", num: "05", label: "Image Pipeline" },
  { id: "css", num: "06", label: "CSS Architecture" },
  { id: "files", num: "07", label: "File Structure" },
  { id: "naming", num: "08", label: "Naming Conventions" },
  { id: "stack", num: "09", label: "Stack Ports" },
  { id: "rules", num: "10", label: "Non-Negotiables" },
  { id: "deviations", num: "11", label: "Known Deviations" },
];

const ARTIFACTS = [
  { href: "/design-system", num: "A1", label: "Design System" },
  { href: "/studio", num: "A2", label: "Studio Homepage" },
  { href: "/case-study", num: "A3", label: "Case Study" },
  { href: "/products", num: "A4", label: "Product Landing" },
];

export default function DeveloperPage() {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-64px 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={s.devRoot}>
      <div className={s.pageWrap}>
        <aside className={s.sidebar} aria-label="Document navigation">
          <div className={s.sidebarLogo}>
            <img src="/assets/brand/logo-d.png" alt="Dade Studio" width={40} height={40} />
            <div>
              <div className={s.sidebarLogoText}>dade.studio</div>
              <div className={s.sidebarLogoMeta}>Handoff v1.0</div>
            </div>
          </div>

          <div>
            <div className={s.sidebarSectionTitle}>Document</div>
            <div className={s.sidebarLinks}>
              {SECTIONS.map(({ id, num, label }) => (
                <a key={id} href={`#${id}`} className={activeId === id ? "active" : undefined} style={activeId === id ? { color: "var(--brand-crimson)", background: "var(--accent-crimson-bg)", fontWeight: 600 } : undefined}>
                  <span className={s.sidebarNum}>{num}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className={s.sidebarSectionTitle}>Artifacts</div>
            <div className={s.sidebarLinks}>
              {ARTIFACTS.map(({ href, num, label }) => (
                <a key={href} href={href}>
                  <span className={s.sidebarNum}>{num}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className={s.sidebarTheme}>
            <ThemeToggleBtn />
          </div>
        </aside>

        <main id="main" className={s.mainContent}>
          {/* HEADER */}
          <div className={s.docHeader} id="overview">
            <div className={s.docEyebrow}>Dade.Studio / Design System v1.0</div>
            <h1 className={s.docTitle}>Developer Handoff Brief</h1>
            <p className={s.docDesc}>
              Everything Cursor Agent (or a human developer) needs to port this design system into production. Token map, component inventory, performance budget, font and image pipelines, file structure, naming conventions, and stack-specific notes. Read this before writing a line of production code.
            </p>
            <div className={s.docMeta}>
              <span className={s.docMetaPill}>Version 1.0</span>
              <span className={s.docMetaPill}>April 2026</span>
              <span className={s.docMetaPill}>Stack-agnostic</span>
              <span className={s.docMetaPill}>CSS variables + vanilla HTML/CSS/JS</span>
              <span>&bull; Applies to: dade.studio, contentcrib.studio, maas.dade.studio, future microsites</span>
            </div>
          </div>

          {/* 01 TOKEN MAP */}
          <section className={s.docSection} id="tokens">
            <div className={s.sectionMarker}>01 / Token Map</div>
            <h2 className={s.sectionHeading}>CSS Variable Structure</h2>

            <p className={s.prose}>
              All design decisions live as CSS custom properties on <code className={s.inlineCode}>:root</code>. Dark mode overrides are scoped to <code className={s.inlineCode}>[data-theme=&quot;dark&quot;]</code> - not <code className={s.inlineCode}>@media (prefers-color-scheme)</code> alone - so user preference can override system preference via JS with no FOUC.
            </p>

            <div className={`${s.callout} ${s.calloutBrand}`}>
              <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--brand-crimson)" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
              <div>
                <div className={s.calloutTitle} style={{ color: "var(--brand-crimson)" }}>Critical rule</div>
                <div className={s.calloutBody}>Never hardcode a color hex in a component. Always reference a CSS variable. If a token doesn&apos;t exist for what you need, add it to the token map first, then use it. This is the only rule that has no exceptions.</div>
              </div>
            </div>

            <h3 className={`${s.sectionSubheading} ${s.sectionSubheadingFirst}`}>Brand Primitives</h3>
            <div className={s.tableWrap}>
              <table>
                <thead><tr><th>Token</th><th>Value</th><th>OKLCH</th><th>Use</th></tr></thead>
                <tbody>
                  <tr><td><code>--brand-crimson</code></td><td><span className={s.colorDot} style={{ background: "#F0243E" }} />#F0243E</td><td>oklch(50.8% 0.231 17.2)</td><td>Primary CTA, active states, error-adjacent accents. <strong>Not</strong> body text on white (4.3:1 only).</td></tr>
                  <tr><td><code>--brand-cyan</code></td><td><span className={s.colorDot} style={{ background: "#5BBCD4" }} />#5BBCD4</td><td>oklch(72.4% 0.098 212.1)</td><td>MaaS accent, secondary highlights, links on dark. Never as text on white.</td></tr>
                  <tr><td><code>--brand-yellow</code></td><td><span className={s.colorDot} style={{ background: "#F2D541" }} />#F2D541</td><td>oklch(88.6% 0.172 97.3)</td><td>Warning states, warm accents, text on dark backgrounds only.</td></tr>
                  <tr><td><code>--brand-purple</code></td><td><span className={s.colorDot} style={{ background: "#5C4B8A" }} />#5C4B8A</td><td>oklch(38.4% 0.129 295.1)</td><td>AI/tech features, gradient pairs with crimson. 7.2:1 on white - safe for body text.</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className={s.sectionSubheading}>Surface + Text Tokens (Light / Dark)</h3>
            <div className={s.codeBlock}>
              <div className={s.codeBlockHeader}><span className={s.codeFilename}>tokens.css</span><span className={s.codeLang}>CSS</span></div>
              <pre>{`/* Light (default) */
:root {
  --bg-base:     oklch(98.5% 0.003 240);  /* page background */
  --bg-surface:  oklch(100%   0     0);   /* cards, panels */
  --bg-subtle:   oklch(95.8% 0.006 240);  /* hover, footer backgrounds */
  --bg-muted:    oklch(92%   0.008 240);  /* code bg, input disabled */

  --text-primary:   oklch(12% 0.02 260);   /* headings, labels */
  --text-secondary: oklch(38% 0.025 260);  /* body copy */
  --text-tertiary:  oklch(58% 0.018 260);  /* placeholders, captions */
  --text-inverse:   oklch(98% 0.003 240);  /* text on dark surfaces */

  --border-subtle:  oklch(88% 0.01 240);   /* dividers, card borders */
  --border-default: oklch(78% 0.015 240);  /* input borders */
}

/* Dark override */
[data-theme="dark"] {
  --bg-base:     oklch(13%  0.015 260);
  --bg-surface:  oklch(17%  0.018 260);
  --bg-subtle:   oklch(20%  0.02  260);
  --bg-muted:    oklch(24%  0.022 260);
  --text-primary:   oklch(95%  0.008 240);
  --text-secondary: oklch(70%  0.015 240);
  --text-tertiary:  oklch(50%  0.015 240);
  --border-subtle:  oklch(25%  0.02  260);
  --border-default: oklch(32%  0.025 260);
}`}</pre>
            </div>

            <h3 className={s.sectionSubheading}>Accent + Semantic Tokens</h3>
            <div className={s.tableWrap}>
              <table>
                <thead><tr><th>Token</th><th>Light value</th><th>Dark value</th><th>Use</th></tr></thead>
                <tbody>
                  <tr><td><code>--accent-crimson-bg</code></td><td>oklch(97% 0.02 17.2)</td><td>oklch(20% 0.05 17.2)</td><td>Badge/tag background for crimson labels</td></tr>
                  <tr><td><code>--accent-cyan-bg</code></td><td>oklch(97% 0.015 212.1)</td><td>oklch(20% 0.04 212.1)</td><td>Info callouts, a11y notes, MaaS accents</td></tr>
                  <tr><td><code>--accent-yellow-bg</code></td><td>oklch(98% 0.02 97.3)</td><td>oklch(20% 0.04 97.3)</td><td>Warning badge backgrounds</td></tr>
                  <tr><td><code>--accent-purple-bg</code></td><td>oklch(97% 0.015 295.1)</td><td>oklch(20% 0.04 295.1)</td><td>AI/tech feature badge backgrounds</td></tr>
                  <tr><td><code>--success</code></td><td colSpan={2}>oklch(58% 0.16 145)</td><td>Form success, check icons, status indicators</td></tr>
                  <tr><td><code>--warning</code></td><td colSpan={2}>oklch(62% 0.16 72)</td><td>Warning callouts, review states</td></tr>
                  <tr><td><code>--error</code></td><td colSpan={2}>oklch(54% 0.2 27)</td><td>Form errors, destructive actions</td></tr>
                  <tr><td><code>--info</code></td><td colSpan={2}>oklch(60% 0.14 240)</td><td>Informational callouts</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className={s.sectionSubheading}>Spacing + Radius + Shadow Tokens</h3>
            <div className={s.codeBlock}>
              <div className={s.codeBlockHeader}><span className={s.codeFilename}>tokens - spacing, radius, shadow</span><span className={s.codeLang}>CSS</span></div>
              <pre>{`/* Spacing - 4px base unit, multiples of 4 */
--s1: 0.25rem; /* 4px  */   --s2: 0.5rem;   /* 8px  */
--s3: 0.75rem; /* 12px */   --s4: 1rem;     /* 16px */
--s5: 1.25rem; /* 20px */   --s6: 1.5rem;   /* 24px */
--s8: 2rem;    /* 32px */   --s10: 2.5rem;  /* 40px */
--s12: 3rem;   /* 48px */   --s16: 4rem;    /* 64px */
--s20: 5rem;   /* 80px */   --s24: 6rem;    /* 96px */
--s32: 8rem;   /* 128px */

/* Radius */
--r-sm:   4px;     /* badges, small chips */
--r-md:   8px;     /* buttons (default), inputs */
--r-lg:   12px;    /* cards, callouts */
--r-xl:   20px;    /* large cards, panels */
--r-2xl:  28px;    /* hero sections, feature cards */
--r-full: 9999px;  /* pills, avatars, tags */

/* Shadow - light / dark values differ (see dark token block) */
--shadow-sm: 0 1px 2px rgb(0 0 0/.06), 0 1px 3px rgb(0 0 0/.04);
--shadow-md: 0 4px 6px rgb(0 0 0/.07), 0 2px 4px rgb(0 0 0/.05);
--shadow-lg: 0 10px 20px rgb(0 0 0/.1), 0 4px 8px rgb(0 0 0/.06);
--shadow-xl: 0 20px 40px rgb(0 0 0/.12), 0 8px 16px rgb(0 0 0/.07);

/* Motion */
--ease-expo:   cubic-bezier(0.16, 1, 0.3, 1);    /* default enters */
--ease-circ:   cubic-bezier(0, 0.55, 0.45, 1);    /* smooth positional motion */
--dur-fast:  120ms;  /* color/border swaps */
--dur-base:  200ms;  /* hover, focus */
--dur-slow:  350ms;  /* reveals, theme switch */

/* Container widths */
--w-sm:  640px;   /* prose, narrow */
--w-md:  768px;   /* single-col */
--w-lg:  1024px;  /* standard */
--w-xl:  1280px;  /* wide / 2-col */
--w-2xl: 1536px;  /* full-bleed with gutters */`}</pre>
            </div>
          </section>

          {/* 02 COMPONENT INVENTORY */}
          <section className={s.docSection} id="components">
            <div className={s.sectionMarker}>02 / Component Inventory</div>
            <h2 className={s.sectionHeading}>Component Inventory</h2>
            <p className={s.prose}>Every component defined in the design system. Column &quot;Drift risk&quot; flags which components are most likely to be incorrectly implemented - pay extra attention to these during porting.</p>

            <div className={s.componentGrid}>
              <div className={s.componentCard}>
                <div className={s.componentName}>Button</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeCrimson}`}>High drift risk</span></div>
                <div className={s.componentDesc}>6 variants (primary, secondary, ghost, cyan, yellow, purple). 4 sizes (sm/md/lg/xl). Must maintain: 2px border on all, min-height 44px, active press transform, focus ring 2.5px crimson 3px offset, disabled 0.4 opacity.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Badge / Tag</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeNeutral}`}>Low drift risk</span></div>
                <div className={s.componentDesc}>JetBrains Mono, 10px, all-caps, letter-spacing 0.08-0.1em. 9 color variants. Never decorative-only - always label something semantic. Never use emoji as badge content.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Card</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeYellow}`}>Medium drift risk</span></div>
                <div className={s.componentDesc}>Always: border-radius var(--r-xl), 1px border on --border-subtle, hover lift translateY(-2px) + shadow-lg + border-default. Accent bar is 4px height, full width, any brand color. Footer background --bg-subtle.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Callout</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeNeutral}`}>Low drift risk</span></div>
                <div className={s.componentDesc}>4px left border, no full border. role=&quot;note&quot; for informational, role=&quot;alert&quot; for warning/error. Icon is always decorative (aria-hidden). 5 variants matching semantic states + brand.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Form inputs</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeCrimson}`}>High drift risk</span></div>
                <div className={s.componentDesc}>Must: min-height 44px, explicit label with for/id, focus ring 3px crimson glow, error state aria-invalid + aria-describedby, never label-less with placeholder only. -webkit-appearance: none on mobile.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Navigation</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeCrimson}`}>High drift risk</span></div>
                <div className={s.componentDesc}>Fixed positioning, backdrop-filter blur(16px). Skip link in DOM before nav. Mobile menu: aria-expanded on trigger, role=&quot;dialog&quot; on drawer, Escape key closes, body overflow:hidden when open. aria-current=&quot;page&quot; on active link.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Data table</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeYellow}`}>Medium drift risk</span></div>
                <div className={s.componentDesc}>Always: caption, scope=&quot;col&quot; on headers, overflow-x:auto on wrapper (never reflow to cards). Complex tables need headers attribute on cells. Row hover on tbody only.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Logo mark</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeCrimson}`}>High drift risk</span></div>
                <div className={s.componentDesc}>Always an <code className={s.inlineCode}>&lt;img&gt;</code> tag pointing at <code className={s.inlineCode}>/assets/brand/logo-d.png</code>. Canonical asset is a 1,425x1,425 PNG - raster is source of truth, no SVG variant exists, never regenerate from prompts. Set explicit <code className={s.inlineCode}>width</code>/<code className={s.inlineCode}>height</code> attributes and meaningful <code className={s.inlineCode}>alt</code> (&quot;Dade Studio&quot;). The parent link carries <code className={s.inlineCode}>aria-label</code> if the mark stands alone.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Image treatment</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeYellow}`}>Medium drift risk</span></div>
                <div className={s.componentDesc}>Always picture with AVIF + WebP sources. Explicit width/height attributes. aspect-ratio on container. fetchpriority=&quot;high&quot; on single LCP image only. loading=&quot;lazy&quot; below fold.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Icons</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeNeutral}`}>Low drift risk</span></div>
                <div className={s.componentDesc}>Lucide icon set, inline SVG only. 24x24 viewBox, stroke-width 2.5, currentColor. Decorative: aria-hidden=&quot;true&quot;. Interactive standalone: aria-label on parent button. Never icon fonts, never emoji as UI.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>FAQ accordion</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeYellow}`}>Medium drift risk</span></div>
                <div className={s.componentDesc}>CSS max-height transition (not JS height animation). aria-expanded on trigger button. One open at a time pattern. Escape key closes. No layout shift on toggle - max-height must be set high enough.</div>
              </div>
              <div className={s.componentCard}>
                <div className={s.componentName}>Pull quote</div>
                <div className={s.componentTags}><span className={`${s.badge} ${s.badgeNeutral}`}>Low drift risk</span></div>
                <div className={s.componentDesc}>4px left border in brand color. blockquote element. Attribution in cite or separate element, never as plain p. Large decorative quote mark via ::before - aria-hidden or kept presentational.</div>
              </div>
            </div>
          </section>

          {/* 03 PERFORMANCE BUDGET */}
          <section className={s.docSection} id="performance">
            <div className={s.sectionMarker}>03 / Performance Budget</div>
            <h2 className={s.sectionHeading}>Performance Budget</h2>
            <p className={s.prose}>These targets are non-negotiable. Measure on Lighthouse mobile simulation (Moto G4, 4G throttled) before any PR merges to main. If a page misses the budget, it does not ship.</p>

            <div style={{ margin: "var(--s6) 0", display: "flex", flexDirection: "column", gap: "var(--s2)" }} role="list" aria-label="Performance targets">
              <div className={s.budgetRow} role="listitem">
                <span className={s.budgetMetric}>LCP</span>
                <span className={s.budgetTarget}>&lt; 2.0s</span>
                <div className={s.budgetBarWrap}><div className={s.budgetBar} style={{ width: "40%", background: "var(--success)" }} /></div>
                <span className={s.budgetNote}>Largest Contentful Paint on 4G mid-tier mobile</span>
              </div>
              <div className={s.budgetRow} role="listitem">
                <span className={s.budgetMetric}>CLS</span>
                <span className={s.budgetTarget}>&lt; 0.05</span>
                <div className={s.budgetBarWrap}><div className={s.budgetBar} style={{ width: "15%", background: "var(--success)" }} /></div>
                <span className={s.budgetNote}>Cumulative Layout Shift - no font swap shift, no image shift</span>
              </div>
              <div className={s.budgetRow} role="listitem">
                <span className={s.budgetMetric}>INP</span>
                <span className={s.budgetTarget}>&lt; 200ms</span>
                <div className={s.budgetBarWrap}><div className={s.budgetBar} style={{ width: "40%", background: "var(--success)" }} /></div>
                <span className={s.budgetNote}>Interaction to Next Paint - no long tasks blocking main thread</span>
              </div>
              <div className={s.budgetRow} role="listitem">
                <span className={s.budgetMetric}>TBT</span>
                <span className={s.budgetTarget}>&lt; 100ms</span>
                <div className={s.budgetBarWrap}><div className={s.budgetBar} style={{ width: "20%", background: "var(--success)" }} /></div>
                <span className={s.budgetNote}>Total Blocking Time - no large JS bundles on critical path</span>
              </div>
              <div className={s.budgetRow} role="listitem">
                <span className={s.budgetMetric}>JS budget</span>
                <span className={s.budgetTarget}>&lt; 30KB</span>
                <div className={s.budgetBarWrap}><div className={s.budgetBar} style={{ width: "30%", background: "var(--brand-cyan)" }} /></div>
                <span className={s.budgetNote}>Gzipped per page - JS is progressive enhancement only</span>
              </div>
              <div className={s.budgetRow} role="listitem">
                <span className={s.budgetMetric}>Lighthouse</span>
                <span className={s.budgetTarget}>100/100/100/100</span>
                <div className={s.budgetBarWrap}><div className={s.budgetBar} style={{ width: "100%", background: "linear-gradient(90deg,var(--brand-crimson),var(--brand-purple))" }} /></div>
                <span className={s.budgetNote}>Perf / A11y / Best Practices / SEO - all four, always</span>
              </div>
            </div>

            <div className={`${s.callout} ${s.calloutWarn}`}>
              <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2.5" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              <div>
                <div className={s.calloutTitle} style={{ color: "var(--warning)" }}>What kills the budget most often</div>
                <div className={s.calloutBody}>Third-party scripts on the critical path (analytics, chat widgets, tag managers). Unoptimized hero images without explicit dimensions. Render-blocking stylesheets via @import. Missing font preloads causing late FOUT. Adding any of these without measuring first will blow the budget.</div>
              </div>
            </div>
          </section>

          {/* 04 FONT PIPELINE */}
          <section className={s.docSection} id="fonts">
            <div className={s.sectionMarker}>04 / Font Pipeline</div>
            <h2 className={s.sectionHeading}>Font Loading Strategy</h2>
            <p className={s.prose}>Two variable fonts, self-hosted from <code className={s.inlineCode}>/assets/fonts/</code>. One WOFF2 file each. Zero third-party DNS lookups, zero multiple-weight requests. This is the complete loading strategy - do not deviate from it or CLS will spike.</p>

            <div className={s.codeBlock}>
              <div className={s.codeBlockHeader}><span className={s.codeFilename}>head - font loading</span><span className={s.codeLang}>HTML</span></div>
              <pre>{`<!-- Step 1: Preload the self-hosted WOFF2 files before any other request -->
<link rel="preload"
      href="/assets/fonts/InterVariable.woff2"
      as="font" type="font/woff2" crossorigin>
<link rel="preload"
      href="/assets/fonts/JetBrainsMono[wght].woff2"
      as="font" type="font/woff2" crossorigin>

<!-- Step 2: Declare @font-face blocks in the stylesheet (see type.css) -->
<!-- No external stylesheet link needed. No preconnect needed. -->`}</pre>
            </div>

            <div className={`${s.callout} ${s.calloutInfo}`}>
              <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--brand-cyan)" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
              <div>
                <div className={s.calloutTitle} style={{ color: "var(--brand-cyan)" }}>Self-hosted, not CDN</div>
                <div className={s.calloutBody}>Both variable fonts ship from <code className={s.inlineCode}>/assets/fonts/</code> on the same origin as the HTML. Source: Inter Variable from <code className={s.inlineCode}>rsms.me/inter/</code>, JetBrains Mono variable from the JetBrains fonts repo. No third-party font hosts, no preconnect handshakes. Same <code className={s.inlineCode}>font-display: swap</code> strategy applies.</div>
              </div>
            </div>

            <h3 className={s.sectionSubheading}>@font-face + Size-Adjust for Zero CLS</h3>
            <p className={s.prose}>Declare both variable fonts with <code className={s.inlineCode}>format(&quot;woff2-variations&quot;)</code>. Add <code className={s.inlineCode}>size-adjust</code>, <code className={s.inlineCode}>ascent-override</code>, and <code className={s.inlineCode}>descent-override</code> to a fallback @font-face so the fallback matches Inter&apos;s metrics. This eliminates layout shift during the swap period. These declarations live outside <code className={s.inlineCode}>@layer tokens</code> (@font-face cannot be cascade-layered).</p>

            <div className={s.codeBlock}>
              <div className={s.codeBlockHeader}><span className={s.codeFilename}>type.css</span><span className={s.codeLang}>CSS</span></div>
              <pre>{`/* Self-hosted variable fonts - place outside @layer tokens */
@font-face {
  font-family: "Inter";
  src: url("/assets/fonts/InterVariable.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-display: swap;
}
@font-face {
  font-family: "JetBrains Mono";
  src: url("/assets/fonts/JetBrainsMono%5Bwght%5D.woff2") format("woff2-variations");
  font-weight: 100 800;
  font-display: swap;
}

/* Fallback that matches Inter's metrics - eliminates CLS */
@font-face {
  font-family: "InterFallback";
  src: local('Arial');
  ascent-override:  90%;
  descent-override: 22%;
  line-gap-override: 0%;
  size-adjust:      107%;
}

/* Primary family stack - Inter leads, calibrated fallback next */
--font-sans: "Inter", InterFallback, ui-sans-serif, system-ui, sans-serif;`}</pre>
            </div>

            <h3 className={s.sectionSubheading}>Typography Scale - CSS</h3>
            <div className={s.codeBlock}>
              <div className={s.codeBlockHeader}><span className={s.codeFilename}>type-scale.css</span><span className={s.codeLang}>CSS</span></div>
              <pre>{`/* Fluid type scale - all sizes clamp between two breakpoints */
/* Pattern: clamp(min, preferred, max) */
--text-xs:   clamp(0.694rem,  0.67rem  + 0.12vw, 0.75rem);
--text-sm:   clamp(0.833rem,  0.8rem   + 0.17vw, 0.875rem);
--text-base: clamp(1rem,      0.95rem  + 0.25vw, 1.0625rem);
--text-lg:   clamp(1.125rem,  1.07rem  + 0.27vw, 1.25rem);
--text-xl:   clamp(1.25rem,   1.15rem  + 0.5vw,  1.5rem);
--text-2xl:  clamp(1.5rem,    1.3rem   + 1vw,    2rem);
--text-3xl:  clamp(1.875rem,  1.5rem   + 1.875vw, 2.625rem);
--text-4xl:  clamp(2.25rem,   1.7rem   + 2.75vw, 3.5rem);
--text-5xl:  clamp(3rem,      2rem     + 5vw,    5rem);
--text-6xl:  clamp(3.75rem,   2.5rem   + 6.25vw, 6.5rem);

/* Heading usage reference:
   Display / 6xl: hero wordmark, giant section numbers
   Hero   / 5xl: hero headlines
   H1     / 4xl: page titles
   H2     / 3xl: section titles
   H3     / 2xl: subsection titles, card titles
   H4     / xl:  smaller card titles
   Body   / base: all body copy
   Small  / sm: captions, footnotes, help text
   Mono   / xs-sm: badges, labels, metadata */`}</pre>
            </div>
          </section>

          {/* 05 IMAGE PIPELINE */}
          <section className={s.docSection} id="images">
            <div className={s.sectionMarker}>05 / Image Pipeline</div>
            <h2 className={s.sectionHeading}>Image Pipeline</h2>
            <p className={s.prose}>Every image in production must go through this pipeline. No exceptions for &quot;it&apos;s just a small image&quot; - small images still cause CLS if they&apos;re missing dimensions.</p>

            <h3 className={s.sectionSubheading}>Format Requirements</h3>
            <div className={s.tableWrap}>
              <table>
                <thead><tr><th>Format</th><th>Use case</th><th>Tool</th><th>Quality setting</th></tr></thead>
                <tbody>
                  <tr><td><strong>AVIF</strong></td><td>Primary format for all photography, illustrations, screenshots</td><td>Squoosh, sharp, @squoosh/lib</td><td>Quality 60-75 for photos, 80 for UI screenshots</td></tr>
                  <tr><td><strong>WebP</strong></td><td>Fallback for browsers without AVIF (Safari &lt;16)</td><td>cwebp, sharp, imagemin-webp</td><td>Quality 80-85</td></tr>
                  <tr><td><strong>PNG</strong></td><td>Final fallback only, or logos/icons with transparency that aren&apos;t SVG</td><td>oxipng, pngquant</td><td>Lossless or quality 80+</td></tr>
                  <tr><td><strong>SVG</strong></td><td>All logos, icons, geometric illustrations</td><td>SVGO</td><td>Minified, viewBox preserved, presentational attrs removed</td></tr>
                  <tr><td><strong>JPEG</strong></td><td>Not used as a source format - convert everything to AVIF+WebP</td><td>--</td><td>--</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className={s.sectionSubheading}>Markup Pattern</h3>
            <div className={s.doDont}>
              <div className={s.doBox}>
                <div className={s.doHeader}>Do</div>
                <pre className={s.doBody}>{`<picture>
  <source
    srcset="hero-640.avif 640w,
            hero-1280.avif 1280w"
    type="image/avif">
  <source
    srcset="hero-640.webp 640w,
            hero-1280.webp 1280w"
    type="image/webp">
  <img
    src="hero.jpg"
    width="1280" height="720"
    alt="Descriptive alt text"
    loading="eager"
    fetchpriority="high"
    decoding="async">
</picture>`}</pre>
              </div>
              <div className={s.dontBox}>
                <div className={s.dontHeader}>Don&apos;t</div>
                <pre className={s.dontBody}>{`/* Missing: dimensions, AVIF, WebP */
<img
  src="hero.jpg"
  alt="Hero image"
>

/* Also wrong: fetchpriority on
   non-LCP images causes priority
   inversion - use sparingly */
<img
  src="logo.png"
  fetchpriority="high"
>`}</pre>
              </div>
            </div>

            <h3 className={s.sectionSubheading}>Responsive srcset Rules</h3>
            <div className={s.ruleList}>
              <div className={s.ruleItem}>
                <span className={s.ruleNum}>R1</span>
                <div className={s.ruleText}>Generate srcset widths at: <strong>320, 640, 768, 1024, 1280, 1536, 1920px</strong>. Never generate sizes larger than the source image.</div>
              </div>
              <div className={s.ruleItem}>
                <span className={s.ruleNum}>R2</span>
                <div className={s.ruleText}>Add the <code className={s.inlineCode}>sizes</code> attribute whenever the image isn&apos;t full viewport width. Example: <code className={s.inlineCode}>sizes=&quot;(max-width: 1024px) 100vw, 50vw&quot;</code> for a 2-col grid image.</div>
              </div>
              <div className={s.ruleItem}>
                <span className={s.ruleNum}>R3</span>
                <div className={s.ruleText}><code className={s.inlineCode}>fetchpriority=&quot;high&quot;</code> goes on exactly <strong>one</strong> image per page - the LCP element. On interior pages this is usually the case study hero. On the homepage it&apos;s the hero background or the largest visible image above the fold.</div>
              </div>
              <div className={s.ruleItem}>
                <span className={s.ruleNum}>R4</span>
                <div className={s.ruleText}>All images below the fold get <code className={s.inlineCode}>loading=&quot;lazy&quot;</code>. Images in the initial viewport get <code className={s.inlineCode}>loading=&quot;eager&quot;</code>. Never set <code className={s.inlineCode}>loading=&quot;lazy&quot;</code> on LCP.</div>
              </div>
              <div className={s.ruleItem}>
                <span className={s.ruleNum}>R5</span>
                <div className={s.ruleText}>Every image container must have <code className={s.inlineCode}>aspect-ratio</code> set in CSS matching the image&apos;s natural ratio. This reserves space before the image loads and prevents CLS regardless of font or network conditions.</div>
              </div>
            </div>
          </section>

          {/* 06 CSS ARCHITECTURE */}
          <section className={s.docSection} id="css">
            <div className={s.sectionMarker}>06 / CSS Architecture</div>
            <h2 className={s.sectionHeading}>CSS Architecture</h2>

            <h3 className={`${s.sectionSubheading} ${s.sectionSubheadingFirst}`}>Layer Order</h3>
            <div className={s.codeBlock}>
              <div className={s.codeBlockHeader}><span className={s.codeFilename}>layer-order.css</span><span className={s.codeLang}>CSS</span></div>
              <pre>{`/* Declare all layers at the top of the stylesheet in priority order.
   Later layers win over earlier layers (unlike normal specificity). */
@layer base, tokens, components, utilities;

@layer tokens {
  /* All CSS custom properties */
}

@layer base {
  /* Reset, html/body, :focus-visible, global typography */
}

@layer components {
  /* .btn, .card, .nav, .badge - all component styles */
}

@layer utilities {
  /* One-off overrides, .sr-only, .truncate, layout helpers */
  /* Utilities win over components without !important */
}`}</pre>
            </div>

            <h3 className={s.sectionSubheading}>Critical CSS Strategy</h3>
            <div className={s.codeBlock}>
              <div className={s.codeBlockHeader}><span className={s.codeFilename}>head - critical CSS pattern</span><span className={s.codeLang}>HTML</span></div>
              <pre>{`<head>
  <!-- Critical CSS inlined - everything above the fold -->
  <style>
    /* tokens + base + nav + hero styles only */
    /* Target: < 14KB before gzip */
  </style>

  <!-- Below-fold CSS deferred via print media trick -->
  <link
    rel="stylesheet"
    href="/css/below-fold.css"
    media="print"
    onload="this.media='all'"
  >
  <noscript>
    <link rel="stylesheet" href="/css/below-fold.css">
  </noscript>
</head>`}</pre>
            </div>

            <h3 className={s.sectionSubheading}>Dark Mode Implementation</h3>
            <div className={s.codeBlock}>
              <div className={s.codeBlockHeader}><span className={s.codeFilename}>theme.js</span><span className={s.codeLang}>JS</span></div>
              <pre>{`// Complete theme system - place in <script> before </body>
(function () {
  const SUN  = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2..."/>';
  const MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const isDark = t === 'dark';
    const btn = document.getElementById('theme-btn');
    if (btn) {
      btn.setAttribute('aria-pressed', String(isDark));
      document.getElementById('theme-label').textContent = isDark ? 'Dark' : 'Light';
      document.getElementById('theme-icon').innerHTML = isDark ? MOON : SUN;
    }
  }

  // Load order: localStorage -> system preference -> default light
  const saved = localStorage.getItem('ds-theme');
  const sys   = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (sys ? 'dark' : 'light'));

  // Respond to OS-level changes only when no manual override is stored
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      if (!localStorage.getItem('ds-theme')) applyTheme(e.matches ? 'dark' : 'light');
    });

  window.toggleTheme = () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'light' : 'dark';
    localStorage.setItem('ds-theme', next);
    applyTheme(next);
  };
})();`}</pre>
            </div>

            <div className={`${s.callout} ${s.calloutWarn}`}>
              <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2.5" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              <div>
                <div className={s.calloutTitle} style={{ color: "var(--warning)" }}>FOUC prevention</div>
                <div className={s.calloutBody}>Set <code className={s.inlineCode}>data-theme</code> on <code className={s.inlineCode}>&lt;html&gt;</code> before the document paints. In Next.js, use the <code className={s.inlineCode}>script</code> prop on <code className={s.inlineCode}>_document</code> with <code className={s.inlineCode}>strategy=&quot;beforeInteractive&quot;</code>. In static HTML, place the theme-reading script in a <code className={s.inlineCode}>&lt;script&gt;</code> tag immediately after <code className={s.inlineCode}>&lt;html&gt;</code>, before <code className={s.inlineCode}>&lt;body&gt;</code>. Never read theme from JS after the first paint.</div>
              </div>
            </div>

            <h3 className={s.sectionSubheading}>Reduced Motion</h3>
            <div className={s.codeBlock}>
              <div className={s.codeBlockHeader}><span className={s.codeFilename}>reduced-motion.css</span><span className={s.codeLang}>CSS</span></div>
              <pre>{`/* Global reduced motion - include in @layer base */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration:       0.01ms !important;
    animation-iteration-count: 1      !important;
    transition-duration:       0.01ms !important;
    scroll-behavior:           auto   !important;
  }
}

/* Never convey information through motion alone.
   Animated state must have a static equivalent. */`}</pre>
            </div>
          </section>

          {/* 07 FILE STRUCTURE */}
          <section className={s.docSection} id="files">
            <div className={s.sectionMarker}>07 / File Structure</div>
            <h2 className={s.sectionHeading}>File Structure</h2>
            <p className={s.prose}>Canonical structure for a Next.js on Vercel deployment. Adapt for static HTML by replacing app/ with pages/ and moving CSS to a flat /css/ directory. Squarespace: inject custom CSS via Design &gt; Custom CSS; inject JS via Code Injection.</p>

            <pre className={s.fileTree} aria-label="Recommended file structure">{`dade.studio/
├─ app/
│  ├─ work/
│  │  └─ [slug]/
│  │     └─ page.tsx       case study template
│  ├─ layout.tsx            root layout - fonts, meta, theme script
│  └─ page.tsx               homepage
├─ components/
│  ├─ ui/
│  │  ├─ Button.tsx          all variants + sizes
│  │  ├─ Badge.tsx
│  │  ├─ Card.tsx
│  │  ├─ Callout.tsx
│  │  ├─ Input.tsx
│  │  └─ Logo.tsx            <img> wrapper for /assets/brand/logo-d.png
│  ├─ sections/
│  │  ├─ Hero.tsx            studio homepage hero variant
│  │  ├─ WorkGrid.tsx
│  │  ├─ ServicesGrid.tsx
│  │  ├─ CtaBand.tsx
│  │  └─ Footer.tsx
│  └─ layout/
│     ├─ SiteNav.tsx
│     └─ SkipLink.tsx
├─ styles/
│  ├─ tokens.css             all CSS custom properties - never edit elsewhere
│  ├─ base.css               reset, global, :focus-visible
│  ├─ type.css               font-face, size scale, heading defaults
│  └─ motion.css             animations, reduced-motion override
├─ public/
│  ├─ assets/
│  │  ├─ brand/
│  │  │  └─ logo-d.png        1,425x1,425 canonical mark - raster source of truth
│  │  └─ fonts/
│  │     ├─ InterVariable.woff2
│  │     └─ JetBrainsMono[wght].woff2
│  └─ images/
│     ├─ work/               case study images - AVIF + WebP pairs
│     └─ og/                 1200x630 Open Graph images per page
├─ next.config.ts
└─ tsconfig.json`}</pre>
          </section>

          {/* 08 NAMING */}
          <section className={s.docSection} id="naming">
            <div className={s.sectionMarker}>08 / Naming Conventions</div>
            <h2 className={s.sectionHeading}>Naming Conventions</h2>
            <p className={s.prose}>Consistent naming makes Cursor Agent and human developers reach the same answer without deliberating. Follow these exactly - do not improvise alternatives mid-project.</p>

            <div className={s.namingGrid}>
              <div className={s.namingCard}>
                <div className={s.namingHeader}>CSS Custom Properties</div>
                <div className={s.namingBody}>
                  <div className={s.namingRow}><span className={s.namingPattern}>--brand-&#123;color&#125;</span><span className={s.namingDesc}>Brand primitives: crimson, cyan, yellow, purple</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>--bg-&#123;level&#125;</span><span className={s.namingDesc}>Surface levels: base, surface, subtle, muted</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>--text-&#123;role&#125;</span><span className={s.namingDesc}>Text roles: primary, secondary, tertiary, inverse</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>--border-&#123;weight&#125;</span><span className={s.namingDesc}>Border weights: subtle, default, strong</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>--accent-&#123;color&#125;-bg</span><span className={s.namingDesc}>Tinted accent surfaces for badges/callouts</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>--s&#123;n&#125;</span><span className={s.namingDesc}>Spacing tokens: s1 through s32</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>--r-&#123;size&#125;</span><span className={s.namingDesc}>Radius tokens: sm, md, lg, xl, 2xl, full</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>--text-&#123;scale&#125;</span><span className={s.namingDesc}>Type scale: xs, sm, base, lg, xl, 2xl...6xl</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>--w-&#123;size&#125;</span><span className={s.namingDesc}>Container widths: sm, md, lg, xl, 2xl</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>--dur-&#123;speed&#125;</span><span className={s.namingDesc}>Durations: fast, base, slow, enter</span></div>
                </div>
              </div>

              <div className={s.namingCard}>
                <div className={s.namingHeader}>CSS Class Names</div>
                <div className={s.namingBody}>
                  <div className={s.namingRow}><span className={s.namingPattern}>.btn</span><span className={s.namingDesc}>Base button class - always paired with variant</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>.btn-primary</span><span className={s.namingDesc}>Variant modifier</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>.btn-lg</span><span className={s.namingDesc}>Size modifier</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>.badge-&#123;color&#125;</span><span className={s.namingDesc}>Badge color variant</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>.card</span><span className={s.namingDesc}>Card container</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>.card-body / .card-footer</span><span className={s.namingDesc}>Card subcomponents</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>.callout-&#123;type&#125;</span><span className={s.namingDesc}>Callout variant: brand, success, warning, error, info</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>.cs-&#123;element&#125;</span><span className={s.namingDesc}>Case study specific elements: cs-hero, cs-layout</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>.prose</span><span className={s.namingDesc}>Long-form body copy container</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>.section-&#123;element&#125;</span><span className={s.namingDesc}>Section anatomy: section-title, section-eyebrow</span></div>
                </div>
              </div>

              <div className={s.namingCard}>
                <div className={s.namingHeader}>React Component Names</div>
                <div className={s.namingBody}>
                  <div className={s.namingRow}><span className={s.namingPattern}>Button</span><span className={s.namingDesc}>PascalCase, matches CSS block name</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>variant=&quot;primary&quot;</span><span className={s.namingDesc}>Prop names match CSS modifier suffix</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>size=&quot;lg&quot;</span><span className={s.namingDesc}>Size props match CSS size suffix</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>SiteNav</span><span className={s.namingDesc}>Layout components prefixed by scope</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>WorkGrid</span><span className={s.namingDesc}>Section components named by content type</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>CtaBand</span><span className={s.namingDesc}>CTA sections named by layout shape</span></div>
                </div>
              </div>

              <div className={s.namingCard}>
                <div className={s.namingHeader}>File Naming</div>
                <div className={s.namingBody}>
                  <div className={s.namingRow}><span className={s.namingPattern}>Button.tsx</span><span className={s.namingDesc}>Component files: PascalCase</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>tokens.css</span><span className={s.namingDesc}>CSS files: lowercase hyphen</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>hero-1280.avif</span><span className={s.namingDesc}>Image files: kebab-case with width suffix</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>og-homepage.png</span><span className={s.namingDesc}>OG images: og- prefix + page slug</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>page.tsx</span><span className={s.namingDesc}>Next.js pages: lowercase (framework convention)</span></div>
                  <div className={s.namingRow}><span className={s.namingPattern}>use-theme.ts</span><span className={s.namingDesc}>Hooks: use- prefix, kebab-case</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* 09 STACK PORTS */}
          <section className={s.docSection} id="stack">
            <div className={s.sectionMarker}>09 / Stack Ports</div>
            <h2 className={s.sectionHeading}>Stack-Specific Porting Notes</h2>

            <h3 className={`${s.sectionSubheading} ${s.sectionSubheadingFirst}`}>Next.js on Vercel (primary)</h3>
            <div className={s.ruleList}>
              <div className={s.ruleItem}><span className={s.ruleNum}>N1</span><div className={s.ruleText}><strong>Font loading:</strong> Use <code className={s.inlineCode}>next/font/local</code> pointing at the WOFF2 files in <code className={s.inlineCode}>public/assets/fonts/</code>. Pass <code className={s.inlineCode}>variable: &apos;--font-inter&apos;</code> and <code className={s.inlineCode}>display: &apos;swap&apos;</code>. Do <em>not</em> use third-party web font services - fonts are self-hosted from our own origin.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>N2</span><div className={s.ruleText}><strong>Images:</strong> Use <code className={s.inlineCode}>next/image</code> for all raster images. It handles AVIF/WebP conversion, srcset generation, and lazy loading automatically. Set <code className={s.inlineCode}>priority=&#123;true&#125;</code> on the LCP image only - this is next/image&apos;s equivalent of <code className={s.inlineCode}>fetchpriority=&quot;high&quot;</code>.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>N3</span><div className={s.ruleText}><strong>Theme script:</strong> In <code className={s.inlineCode}>app/layout.tsx</code>, add the theme-reading script as a <code className={s.inlineCode}>&lt;script dangerouslySetInnerHTML&gt;</code> with <code className={s.inlineCode}>id=&quot;theme-script&quot;</code> inside <code className={s.inlineCode}>&lt;html&gt;</code>, before <code className={s.inlineCode}>&lt;body&gt;</code>. This prevents FOUC on page load.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>N4</span><div className={s.ruleText}><strong>Tokens:</strong> Import <code className={s.inlineCode}>styles/tokens.css</code> in the root layout, not in individual components. Tokens are global and should only be loaded once.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>N5</span><div className={s.ruleText}><strong>Metadata:</strong> Use the <code className={s.inlineCode}>metadata</code> export in each page file for Open Graph, canonical, and description. Never use raw meta tags in JSX for these - the metadata API handles deduplication correctly.</div></div>
            </div>

            <h3 className={s.sectionSubheading}>Squarespace Custom CSS</h3>
            <div className={s.ruleList}>
              <div className={s.ruleItem}><span className={s.ruleNum}>S1</span><div className={s.ruleText}><strong>Token injection:</strong> All CSS custom properties go in Design &gt; Custom CSS. Put them inside <code className={s.inlineCode}>:root &#123;&#125;</code> at the top, before any selectors. Squarespace&apos;s own styles load before Custom CSS so tokens applied to <code className={s.inlineCode}>:root</code> are available globally.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>S2</span><div className={s.ruleText}><strong>Font loading:</strong> Upload <code className={s.inlineCode}>InterVariable.woff2</code> and <code className={s.inlineCode}>JetBrainsMono[wght].woff2</code> as file assets, then add <code className={s.inlineCode}>&lt;link rel=&quot;preload&quot;&gt;</code> and matching <code className={s.inlineCode}>@font-face</code> blocks in Settings &gt; Advanced &gt; Code Injection &gt; Header. Point the <code className={s.inlineCode}>src</code> URLs at the uploaded file paths. No third-party font hosts. Use <code className={s.inlineCode}>font-display: swap</code>.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>S3</span><div className={s.ruleText}><strong>Dark mode:</strong> Squarespace doesn&apos;t support <code className={s.inlineCode}>data-theme</code> natively. Add the theme toggle script in Code Injection &gt; Footer. The <code className={s.inlineCode}>data-theme</code> attribute on <code className={s.inlineCode}>document.documentElement</code> works the same way.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>S4</span><div className={s.ruleText}><strong>Components:</strong> Most of the system&apos;s components can be added via Code Blocks (injected HTML). For repeating components like nav, use Code Injection &gt; Header for critical pieces. Performance will be lower than Next.js - Squarespace injects its own JS and can&apos;t be fully optimized.</div></div>
            </div>

            <h3 className={s.sectionSubheading}>Static HTML</h3>
            <p className={s.prose}>The reference artifacts (01-04) are already static HTML and run without a build step. Copy the token block from <code className={s.inlineCode}>01-design-system.html</code> to any new page&apos;s <code className={s.inlineCode}>&lt;style&gt;</code> block. For multi-page sites, extract tokens to a <code className={s.inlineCode}>tokens.css</code> file and link it as the first stylesheet. Everything else remains the same.</p>
          </section>

          {/* 10 NON-NEGOTIABLES */}
          <section className={s.docSection} id="rules">
            <div className={s.sectionMarker}>10 / Non-Negotiables</div>
            <h2 className={s.sectionHeading}>Non-Negotiable Rules</h2>
            <p className={s.prose}>These are the things that must not drift during porting, refactoring, or feature additions. If a PR violates any of these, it does not merge.</p>

            <div className={s.ruleList}>
              <div className={s.ruleItem}><span className={s.ruleNum}>01</span><div className={s.ruleText}><strong>Never hardcode a color.</strong> Every color value in a component must reference a CSS custom property from the token map. If you need a color that doesn&apos;t have a token, add the token first.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>02</span><div className={s.ruleText}><strong>One h1 per page, no heading level skips.</strong> H1 is the page title. Never jump from H1 to H3. Never use headings for visual sizing - use CSS classes for that. Heading hierarchy is document structure, not visual hierarchy.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>03</span><div className={s.ruleText}><strong>All interactive elements have visible focus rings.</strong> The 2.5px crimson ring with 3px offset is the standard. MaaS uses cyan instead. Never remove <code className={s.inlineCode}>:focus-visible</code> styling. Never use <code className={s.inlineCode}>outline: none</code> without a custom replacement that passes 4.5:1 contrast.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>04</span><div className={s.ruleText}><strong>All form inputs have explicit label associations.</strong> <code className={s.inlineCode}>for</code>/<code className={s.inlineCode}>id</code> pairs, always. <code className={s.inlineCode}>aria-label</code> only as a last resort. Error messages use <code className={s.inlineCode}>aria-invalid</code> and <code className={s.inlineCode}>aria-describedby</code>. Never placeholder-only labeling.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>05</span><div className={s.ruleText}><strong>Touch targets are minimum 44x44px.</strong> All buttons, links, checkboxes, and interactive elements. If visual size is smaller, use padding to meet the target without changing the visual size.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>06</span><div className={s.ruleText}><strong>prefers-reduced-motion is always respected.</strong> The global reset in @layer base covers all animations. Any JS animation must also check <code className={s.inlineCode}>window.matchMedia(&apos;(prefers-reduced-motion: reduce)&apos;).matches</code> before running.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>07</span><div className={s.ruleText}><strong>Core content works without JavaScript.</strong> Navigation links, all body copy, images, and primary CTAs must be functional without JS. Enhancements like mobile menu open/close, theme toggle, and FAQ accordion are progressive - the page must not be broken without them.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>08</span><div className={s.ruleText}><strong>Every page has: canonical, meta description, og:title, og:description, og:image (1200x630), og:url, twitter:card.</strong> These are not optional for SEO pages. Generate them per-page, not globally with the same content on every page.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>09</span><div className={s.ruleText}><strong>The logo is always <code className={s.inlineCode}>&lt;img src=&quot;/assets/brand/logo-d.png&quot;&gt;</code>.</strong> The canonical asset is a 1,425x1,425 PNG - raster is the source of truth, no SVG variant exists, and the mark must never be regenerated from a prompt. Set explicit <code className={s.inlineCode}>width</code>/<code className={s.inlineCode}>height</code>, use meaningful <code className={s.inlineCode}>alt</code> (&quot;Dade Studio&quot;) when the logo stands alone, and put <code className={s.inlineCode}>alt=&quot;&quot;</code> on the image with <code className={s.inlineCode}>aria-label</code> on the parent link only when the link text already names the site. Never a background-image.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>10</span><div className={s.ruleText}><strong>Lighthouse 100/100/100/100 before merge.</strong> Not 98. Not &quot;mostly 100&quot;. All four scores on mobile simulation. Run it on the deployed preview URL, not localhost. Lighthouse scores differ between local and CDN-served builds.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>11</span><div className={s.ruleText}><strong>Dark mode must be genuinely designed, not inverted.</strong> Dark mode surfaces use the <code className={s.inlineCode}>[data-theme=&quot;dark&quot;]</code> token overrides. Never use <code className={s.inlineCode}>filter: invert()</code> as a dark mode implementation. Images that look wrong in dark mode need a dark-specific <code className={s.inlineCode}>&lt;source media=&quot;(prefers-color-scheme: dark)&quot;&gt;</code> variant.</div></div>
              <div className={s.ruleItem}><span className={s.ruleNum}>12</span><div className={s.ruleText}><strong>No inline styles for recurring patterns.</strong> Inline styles are acceptable for one-off positioning tweaks or dynamic values (progress bar width, etc.). They are not acceptable for colors, fonts, spacing, or anything that should be a token or component class. If you write the same inline style twice, it becomes a class.</div></div>
            </div>

            <div className={`${s.callout} ${s.calloutOk}`} style={{ marginTop: "var(--s8)" }}>
              <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              <div>
                <div className={s.calloutTitle} style={{ color: "var(--success)" }}>You&apos;re ready to build</div>
                <div className={s.calloutBody}>This document plus the four reference artifacts contain everything needed to implement the system correctly. When in doubt: check the design system reference page first, look for the component, read the a11y note, then build. If something isn&apos;t in the system, add it to the system before shipping it.</div>
              </div>
            </div>
          </section>

          {/* 11 KNOWN DEVIATIONS */}
          <section className={s.docSection} id="deviations">
            <div className={s.sectionMarker}>11 / Known Deviations</div>
            <h2 className={s.sectionHeading}>Known deviations to fix before port</h2>
            <p className={s.prose}>Items in this list have been corrected in this artifact but may still be present in adjacent artifacts, earlier drafts, or cached generations. Fix any remaining instance before porting to production. Nothing below is optional.</p>

            <div className={s.ruleList}>
              <div className={s.ruleItem}>
                <span className={s.ruleNum}>D1</span>
                <div className={s.ruleText}><strong>MaaS = Memory as a Service.</strong> Earlier drafts framed the product as a model-routing or LLM-fleet service, and that framing is deprecated across all artifacts. Copy has been rewritten to the memory framing (persistent AI memory across tools).</div>
              </div>
              <div className={s.ruleItem}>
                <span className={s.ruleNum}>D2</span>
                <div className={s.ruleText}><strong>Vendor-specific VPN tooling removed from all business-facing artifacts.</strong> Personal-use tooling only, not part of the stack narrative.</div>
              </div>
              <div className={s.ruleItem}>
                <span className={s.ruleNum}>D3</span>
                <div className={s.ruleText}><strong>Canonical logo is <code className={s.inlineCode}>/assets/brand/logo-d.png</code>, a 1,425x1,425 PNG.</strong> No SVG variant exists. Never regenerate from prompts.</div>
              </div>
              <div className={s.ruleItem}>
                <span className={s.ruleNum}>D4</span>
                <div className={s.ruleText}><strong>Content Retainer card replaced with a Memory System card on Artifact 2 (studio homepage),</strong> demoting content/brand services behind the MaaS primary offer.</div>
              </div>
            </div>

            <div className={`${s.callout} ${s.calloutBrand}`} style={{ marginTop: "var(--s8)" }}>
              <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--brand-crimson)" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
              <div>
                <div className={s.calloutTitle} style={{ color: "var(--brand-crimson)" }}>Before you ship</div>
                <div className={s.calloutBody}>Grep the full artifact set for the deprecated vendor VPN name, the model-router product phrasing, <code className={s.inlineCode}>&lt;symbol id=&quot;logo-d&quot;&gt;</code>, <code className={s.inlineCode}>&lt;symbol id=&quot;d-logo&quot;&gt;</code>, <code className={s.inlineCode}>fonts.googleapis.com</code>, and <code className={s.inlineCode}>fonts.gstatic.com</code>. All six counts must be zero before the port is considered clean.</div>
              </div>
            </div>

            <div className={s.docFooter}>
              <span>Dade.Studio Design System v1.0 - April 2026</span>
              <nav aria-label="Artifact links" className={s.docFooterNav}>
                <a href="/design-system">Design System</a>
                <a href="/studio">Homepage</a>
                <a href="/case-study">Case Study</a>
                <a href="/products">Product Landing</a>
                <a href="/bot-privacy">Bot privacy</a>
              </nav>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
