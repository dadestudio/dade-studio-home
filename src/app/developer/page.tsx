"use client";

import { useTheme } from "next-themes";
import styles from "./developer.module.css";

const docLinks = [
  { id: "overview", label: "00 Overview" },
  { id: "tokens", label: "01 Token Map" },
  { id: "components", label: "02 Component Inventory" },
  { id: "performance", label: "03 Performance Budget" },
  { id: "fonts", label: "04 Font Pipeline" },
  { id: "images", label: "05 Image Pipeline" },
  { id: "css", label: "06 CSS Architecture" },
  { id: "files", label: "07 File Structure" },
  { id: "naming", label: "08 Naming Conventions" },
  { id: "stack", label: "09 Stack Ports" },
  { id: "rules", label: "10 Non-Negotiables" },
  { id: "deviations", label: "11 Known Deviations" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      className={styles.themeButton}
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      <span aria-hidden="true">{isDark ? "Moon" : "Sun"}</span>
      <span>{isDark ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}

export default function DeveloperPage() {
  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <aside className={styles.sidebar} aria-label="Developer handoff navigation">
          <a href="#overview" className={styles.logoWrap} aria-label="Dade Studio handoff">
            <img src="/assets/brand/logo-d.png" alt="Dade Studio" width={40} height={40} />
            <div>
              <div className={styles.logoTitle}>dade.studio</div>
              <div className={styles.logoMeta}>Handoff v1.0</div>
            </div>
          </a>

          <div className={styles.navLabel}>Document</div>
          <nav className={styles.nav}>
            {docLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.themeWrap}>
            <ThemeToggle />
          </div>
        </aside>

        <main className={styles.main} id="main">
          <header className={styles.header} id="overview">
            <p className={styles.eyebrow}>Dade.Studio / Design System v1.0</p>
            <h1 className={styles.title}>Developer Handoff Brief</h1>
            <p className={styles.description}>
              Everything needed to port this design system into production. Token map,
              component inventory, performance budget, font and image pipelines, file
              structure, naming conventions, and stack-specific notes.
            </p>
            <div className={styles.metaRow}>
              <span className={styles.metaPill}>Version 1.0</span>
              <span className={styles.metaPill}>April 2026</span>
              <span className={styles.metaPill}>Stack-agnostic</span>
              <span className={styles.metaPill}>CSS variables + Next.js</span>
            </div>
          </header>

          <section className={styles.section} id="tokens">
            <p className={styles.sectionMarker}>01 / Token Map</p>
            <h2 className={styles.sectionHeading}>CSS variable structure</h2>
            <p className={styles.prose}>
              Keep all design decisions in CSS custom properties and scope dark mode to
              theme selectors so user preference can override system preference.
            </p>
            <div className={styles.calloutBrand}>
              <p className={styles.calloutTitle}>Critical rule</p>
              <p className={styles.calloutBody}>
                Never hardcode a color in components. Always reference token variables.
              </p>
            </div>
          </section>

          <section className={styles.section} id="components">
            <p className={styles.sectionMarker}>02 / Component Inventory</p>
            <h2 className={styles.sectionHeading}>High drift risk components</h2>
            <div className={styles.grid}>
              <article className={styles.card}>
                <h3>Button</h3>
                <p>
                  Preserve min 44px targets, 2px borders, focus ring, and active press
                  transform.
                </p>
              </article>
              <article className={styles.card}>
                <h3>Navigation</h3>
                <p>
                  Preserve landmark semantics, skip link order, mobile dialog behavior,
                  and keyboard handling.
                </p>
              </article>
              <article className={styles.card}>
                <h3>Form inputs</h3>
                <p>
                  Keep explicit label associations and required error attributes on each
                  invalid field.
                </p>
              </article>
              <article className={styles.card}>
                <h3>Logo mark</h3>
                <p>
                  Always use an image tag with <code>/assets/brand/logo-d.png</code> and
                  explicit width and height.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.section} id="performance">
            <p className={styles.sectionMarker}>03 / Performance Budget</p>
            <h2 className={styles.sectionHeading}>Non-negotiable targets</h2>
            <ul className={styles.ruleList}>
              <li>LCP below 2.0s on mobile simulation</li>
              <li>CLS below 0.05 with explicit media dimensions</li>
              <li>INP below 200ms with strict JS budget</li>
              <li>TBT below 100ms, no critical path script bloat</li>
              <li>Lighthouse 100 across Perf, A11y, Best Practices, and SEO</li>
            </ul>
          </section>

          <section className={styles.section} id="fonts">
            <p className={styles.sectionMarker}>04 / Font Pipeline</p>
            <h2 className={styles.sectionHeading}>Self-hosted variable fonts</h2>
            <p className={styles.prose}>
              Use local Inter Variable and JetBrains Mono variable WOFF2 files from{" "}
              <code>/assets/fonts/</code>. No third-party font requests.
            </p>
          </section>

          <section className={styles.section} id="images">
            <p className={styles.sectionMarker}>05 / Image Pipeline</p>
            <h2 className={styles.sectionHeading}>Responsive image requirements</h2>
            <ul className={styles.ruleList}>
              <li>Prefer AVIF with WebP fallback</li>
              <li>Always set width and height attributes</li>
              <li>Apply loading behavior by viewport position</li>
              <li>Reserve layout with matching aspect ratio</li>
            </ul>
          </section>

          <section className={styles.section} id="css">
            <p className={styles.sectionMarker}>06 / CSS Architecture</p>
            <h2 className={styles.sectionHeading}>Layering and dark mode</h2>
            <p className={styles.prose}>
              Keep token variables centralized. Use data-theme or html.dark selectors for
              dark mode token overrides and avoid visual inversion shortcuts.
            </p>
          </section>

          <section className={styles.section} id="files">
            <p className={styles.sectionMarker}>07 / File Structure</p>
            <h2 className={styles.sectionHeading}>Canonical app structure</h2>
            <p className={styles.prose}>
              Componentized route structure with stable token and asset locations remains
              the default for Next.js deployment.
            </p>
          </section>

          <section className={styles.section} id="naming">
            <p className={styles.sectionMarker}>08 / Naming Conventions</p>
            <h2 className={styles.sectionHeading}>Consistent naming patterns</h2>
            <p className={styles.prose}>
              Keep token names, class names, and component names aligned to avoid
              implementation drift between contributors and agents.
            </p>
          </section>

          <section className={styles.section} id="stack">
            <p className={styles.sectionMarker}>09 / Stack Ports</p>
            <h2 className={styles.sectionHeading}>Primary shipping stack</h2>
            <p className={styles.prose}>
              Next.js on Vercel remains the primary implementation target with metadata
              exports and local asset hosting.
            </p>
          </section>

          <section className={styles.section} id="rules">
            <p className={styles.sectionMarker}>10 / Non-Negotiables</p>
            <h2 className={styles.sectionHeading}>Rules that block merge</h2>
            <ul className={styles.ruleList}>
              <li>One h1 per page and valid heading order</li>
              <li>Visible focus styles for every interactive element</li>
              <li>No placeholder-only input labeling</li>
              <li>Core content works with JavaScript disabled</li>
              <li>Dark mode is designed, not inverted</li>
            </ul>
          </section>

          <section className={styles.section} id="deviations">
            <p className={styles.sectionMarker}>11 / Known Deviations</p>
            <h2 className={styles.sectionHeading}>Fixes already applied</h2>
            <div className={styles.calloutInfo}>
              <p className={styles.calloutTitle}>Memory as a Service</p>
              <p className={styles.calloutBody}>
                MaaS refers to Memory as a Service and positioning must stay consistent
                across all artifacts and route copy.
              </p>
            </div>
            <div className={styles.calloutInfo}>
              <p className={styles.calloutTitle}>Pricing lock</p>
              <p className={styles.calloutBody}>
                Foundation $199, Active Memory $399, Full Intelligence $799. Beta pricing
                stays 20 percent off.
              </p>
            </div>
            <div className={styles.calloutInfo}>
              <p className={styles.calloutTitle}>Logo lock</p>
              <p className={styles.calloutBody}>
                Canonical logo is PNG only at <code>/assets/brand/logo-d.png</code>.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
