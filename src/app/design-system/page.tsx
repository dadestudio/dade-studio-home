"use client";

import { useTheme } from "next-themes";
import s from "./design-system.module.css";

function ThemeToggleBtn() {
  const { setTheme, resolvedTheme } = useTheme();
  /* resolvedTheme is undefined during SSR; treat undefined as not-dark */
  const isDark = resolvedTheme === "dark";

  return (
    <button
      className={s.themeBtn}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        {isDark ? (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </>
        )}
      </svg>
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

export default function DesignSystemPage() {
  return (
    <div className={s.dsRoot}>
      {/* Skip link */}
      <a
        href="#main"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "0";
          e.currentTarget.style.width = "auto";
          e.currentTarget.style.height = "auto";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
          e.currentTarget.style.width = "1px";
          e.currentTarget.style.height = "1px";
        }}
      >
        Skip to main content
      </a>

      {/* HEADER */}
      <header className={s.dsHeader} role="banner">
        <a
          href="#main"
          className={s.logoLockup}
          aria-label="Dade Studio Design System home"
        >
          <img
            src="/assets/brand/logo-d.png"
            alt="Dade Studio"
            width={40}
            height={40}
          />
          <span>
            dade.studio <span>/ design system</span>
          </span>
        </a>
        <ThemeToggleBtn />
      </header>

      {/* HERO */}
      <section className={s.dsHero} aria-labelledby="hero-title">
        <div className={s.dsHeroPill} aria-hidden="true">
          v1.0 - April 2026
        </div>
        <h1 id="hero-title">
          The Dade.Studio
          <br />
          <em>Design System</em>
        </h1>
        <p>
          Every token, component, and pattern for dade.studio,
          contentcrib.studio, and maas.dade.studio. Modern CSS, no frameworks,
          Lighthouse-100 by default.
        </p>
      </section>

      <div className={s.dsLayout}>
        {/* SIDENAV */}
        <nav className={s.dsSidenav} aria-label="Design system navigation">
          <div className={s.sidenavGroup}>
            <div className={s.sidenavLabel}>Foundation</div>
            <a href="#colors">Color Tokens</a>
            <a href="#typography">Typography</a>
            <a href="#spacing">Spacing + Grid</a>
            <a href="#motion">Motion</a>
          </div>
          <div className={s.sidenavGroup}>
            <div className={s.sidenavLabel}>Components</div>
            <a href="#buttons">Buttons</a>
            <a href="#badges">Badges + Tags</a>
            <a href="#cards">Cards</a>
            <a href="#callouts">Callouts</a>
            <a href="#forms">Forms</a>
            <a href="#nav-section">Navigation</a>
            <a href="#tables">Data Tables</a>
            <a href="#images">Image Patterns</a>
          </div>
          <div className={s.sidenavGroup}>
            <div className={s.sidenavLabel}>Patterns</div>
            <a href="#section-patterns">Section Patterns</a>
            <a href="#iconography">Iconography</a>
            <a href="#lighthouse">Lighthouse</a>
          </div>
          <div className={s.sidenavGroup}>
            <div className={s.sidenavLabel}>Handoff</div>
            <a href="#cursor-handoff">Cursor Handoff Backlog</a>
          </div>
        </nav>

        {/* MAIN */}
        <main id="main" className={s.dsMain}>

          {/* ============ COLORS ============ */}
          <section className={s.dsSection} id="colors" aria-labelledby="colors-title">
            <div className={s.sectionTag}>01 / Foundation</div>
            <h2 className={s.sectionTitle} id="colors-title">Color Tokens</h2>
            <p className={s.sectionDesc}>
              OKLCH for all tokens. color-mix() math is predictable in OKLCH - lightness stays
              perceptually consistent. Every pairing is WCAG AA verified.
            </p>

            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "var(--s4)" }}>
              Brand Primitives
            </h3>
            <div className={s.swatchGrid}>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "#F0243E" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--brand-crimson</div>
                  <div className={s.swatchVal}>#F0243E / oklch(50.8% 0.231 17.2)</div>
                  <span className={`${s.swatchRatio} ${s.warnRatio}`}>
                    4.3:1 - AA Large only, not body text on white
                  </span>
                </div>
              </div>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "#5BBCD4" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--brand-cyan</div>
                  <div className={s.swatchVal}>#5BBCD4 / oklch(72.4% 0.098 212.1)</div>
                  <span className={`${s.swatchRatio} ${s.pass}`}>3.1:1 on dark bg - use as accent only</span>
                </div>
              </div>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "#F2D541" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--brand-yellow</div>
                  <div className={s.swatchVal}>#F2D541 / oklch(88.6% 0.172 97.3)</div>
                  <span className={`${s.swatchRatio} ${s.pass}`}>AA 4.9:1 on dark bg</span>
                </div>
              </div>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "#5C4B8A" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--brand-purple</div>
                  <div className={s.swatchVal}>#5C4B8A / oklch(38.4% 0.129 295.1)</div>
                  <span className={`${s.swatchRatio} ${s.pass}`}>AA 7.2:1 on white</span>
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, margin: "var(--s8) 0 var(--s4)" }}>
              Semantic States
            </h3>
            <div className={s.swatchGrid}>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "oklch(58% 0.16 145)" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--success</div>
                  <div className={s.swatchVal}>oklch(58% 0.16 145)</div>
                  <span className={`${s.swatchRatio} ${s.pass}`}>AA 4.6:1</span>
                </div>
              </div>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "oklch(62% 0.16 72)" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--warning</div>
                  <div className={s.swatchVal}>oklch(62% 0.16 72)</div>
                  <span className={`${s.swatchRatio} ${s.pass}`}>AA 4.5:1</span>
                </div>
              </div>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "oklch(54% 0.2 27)" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--error</div>
                  <div className={s.swatchVal}>oklch(54% 0.2 27)</div>
                  <span className={`${s.swatchRatio} ${s.pass}`}>AA 5.1:1</span>
                </div>
              </div>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "oklch(60% 0.14 240)" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--info</div>
                  <div className={s.swatchVal}>oklch(60% 0.14 240)</div>
                  <span className={`${s.swatchRatio} ${s.pass}`}>AA 4.6:1</span>
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, margin: "var(--s8) 0 var(--s4)" }}>
              Surface Scale - Light + Dark
            </h3>
            <div className={s.swatchGrid}>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "oklch(98.5% 0.003 240)", borderBottom: "1px solid #eee" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--bg-base (light)</div>
                  <div className={s.swatchVal}>oklch(98.5% 0.003 240)</div>
                </div>
              </div>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "oklch(95.8% 0.006 240)" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--bg-subtle (light)</div>
                  <div className={s.swatchVal}>oklch(95.8% 0.006 240)</div>
                </div>
              </div>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "oklch(13% 0.015 260)" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--bg-base (dark)</div>
                  <div className={s.swatchVal}>oklch(13% 0.015 260)</div>
                </div>
              </div>
              <div className={s.swatch}>
                <div className={s.swatchColor} style={{ background: "oklch(17% 0.018 260)" }} />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>--bg-surface (dark)</div>
                  <div className={s.swatchVal}>oklch(17% 0.018 260)</div>
                </div>
              </div>
            </div>
            <div className={s.a11yNote} role="note">
              <span className={s.a11yTag}>A11Y</span>
              <span>
                Crimson (#F0243E) is 4.3:1 on white - passes AA for large text (18pt+/14pt bold) and
                UI components only. Never use it for body text on white. Cyan never as text on white.
                Yellow text only on dark surfaces.
              </span>
            </div>
          </section>

          {/* ============ TYPOGRAPHY ============ */}
          <section className={s.dsSection} id="typography" aria-labelledby="type-title">
            <div className={s.sectionTag}>02 / Foundation</div>
            <h2 className={s.sectionTitle} id="type-title">Typography Scale</h2>
            <p className={s.sectionDesc}>
              Inter Variable for display through body. JetBrains Mono for code, labels, metadata. All
              sizes are fluid clamps - smooth scaling, no breakpoint jumps.
            </p>

            {[
              {
                label: "Display / text-6xl",
                meta: "clamp(3.75rem, 2.5rem+6.25vw, 6.5rem) • wght 900 • ls -0.04em • lh 1.0",
                style: { fontSize: "var(--text-6xl)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0 },
                text: "Design.",
                code: "font-size: var(--text-6xl); font-weight: 900; letter-spacing: -0.04em; line-height: 1.0;",
              },
              {
                label: "Hero / text-5xl",
                meta: "clamp(3rem, 2rem+5vw, 5rem) • wght 900 • ls -0.035em • lh 1.0",
                style: { fontSize: "var(--text-5xl)", fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.0 },
                text: "Builder. Creator.",
                code: "font-size: var(--text-5xl); font-weight: 900; letter-spacing: -0.035em; line-height: 1.0;",
              },
              {
                label: "H1 / text-4xl",
                meta: "clamp(2.25rem, 1.7rem+2.75vw, 3.5rem) • wght 800 • ls -0.03em • lh 1.05",
                style: { fontSize: "var(--text-4xl)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 },
                text: "Work that ships.",
                code: "font-size: var(--text-4xl); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05;",
              },
              {
                label: "H2 / text-3xl",
                meta: "clamp(1.875rem, 1.5rem+1.875vw, 2.625rem) • wght 800 • ls -0.025em • lh 1.1",
                style: { fontSize: "var(--text-3xl)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1 },
                text: "Selected work.",
                code: "font-size: var(--text-3xl); font-weight: 800; letter-spacing: -0.025em; line-height: 1.1;",
              },
              {
                label: "H3 / text-2xl",
                meta: "clamp(1.5rem, 1.3rem+1vw, 2rem) • wght 700 • ls -0.02em • lh 1.2",
                style: { fontSize: "var(--text-2xl)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 },
                text: "Brand identity for indie labels.",
                code: "font-size: var(--text-2xl); font-weight: 700; letter-spacing: -0.02em; line-height: 1.2;",
              },
              {
                label: "Body Large / text-xl",
                meta: "clamp(1.25rem, 1.15rem+0.5vw, 1.5rem) • wght 400 • lh 1.65",
                style: { fontSize: "var(--text-xl)", color: "var(--text-secondary)", lineHeight: 1.65 },
                text: "Design and technology aren't different disciplines here - they're the same problem approached from two angles.",
                code: "font-size: var(--text-xl); line-height: 1.65; color: var(--text-secondary);",
              },
              {
                label: "Body / text-base",
                meta: "clamp(1rem, 0.95rem+0.25vw, 1.0625rem) • wght 400 • lh 1.6",
                style: { fontSize: "var(--text-base)", color: "var(--text-secondary)", lineHeight: 1.6 },
                text: "The studio handles branding, web design, and marketing strategy for creators and small businesses. Projects are scoped, delivered on time, and built to last beyond the launch.",
                code: "font-size: var(--text-base); line-height: 1.6; color: var(--text-secondary);",
              },
            ].map(({ label, meta, style, text, code }) => (
              <div className={s.specimen} key={label}>
                <div className={s.specimenMeta}>
                  <strong>{label}</strong>
                  <span>{meta}</span>
                </div>
                <div className={s.specimenPreview} style={style as React.CSSProperties}>
                  {text}
                </div>
                <div className={s.specimenCode}>{code}</div>
              </div>
            ))}

            {/* Code specimen */}
            <div className={s.specimen}>
              <div className={s.specimenMeta}>
                <strong>Code / JetBrains Mono</strong>
                <span>text-sm &bull; wght 400-600 &bull; lh 1.7</span>
              </div>
              <div
                className={s.specimenPreview}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-sm)",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "var(--brand-purple)", fontWeight: 600 }}>const</span>{" "}
                <span style={{ color: "var(--brand-cyan)" }}>studio</span> ={" "}
                <span style={{ color: "var(--brand-crimson)" }}>{"{"}</span>
                <br />
                &nbsp;&nbsp;name:{" "}
                <span style={{ color: "oklch(62% 0.16 72)" }}>&quot;dade.studio&quot;</span>,
                <br />
                &nbsp;&nbsp;output:{" "}
                <span style={{ color: "oklch(62% 0.16 72)" }}>&quot;things that ship&quot;</span>
                <br />
                <span style={{ color: "var(--brand-crimson)" }}>{"}"}</span>
              </div>
              <div className={s.specimenCode}>
                font-family: var(--font-mono); font-size: var(--text-sm); line-height: 1.7;
              </div>
            </div>

            <div className={s.a11yNote} role="note">
              <span className={s.a11yTag}>A11Y</span>
              <span>
                Body text never drops below var(--text-sm) (~14px). Font weight never below 400. One
                h1 per page. Heading levels never skip. Line length capped at 72ch for readability.
              </span>
            </div>
          </section>

          {/* ============ SPACING ============ */}
          <section className={s.dsSection} id="spacing" aria-labelledby="spacing-title">
            <div className={s.sectionTag}>03 / Foundation</div>
            <h2 className={s.sectionTitle} id="spacing-title">Spacing + Layout Grid</h2>
            <p className={s.sectionDesc}>
              4px base unit. All spacing is multiples of 4. Containers use --w-* tokens. Grid: CSS
              auto-fill for component grids, 12-col for page layouts.
            </p>
            <div className={s.surfaceBoxLg}>
              {[
                ["--s1", 4, "0.25rem / 4px"],
                ["--s2", 8, "0.5rem / 8px"],
                ["--s3", 12, "0.75rem / 12px"],
                ["--s4", 16, "1rem / 16px"],
                ["--s6", 24, "1.5rem / 24px"],
                ["--s8", 32, "2rem / 32px"],
                ["--s12", 48, "3rem / 48px"],
                ["--s16", 64, "4rem / 64px"],
                ["--s24", 96, "6rem / 96px"],
                ["--s32", 128, "8rem / 128px"],
              ].map(([label, width, val]) => (
                <div className={s.spaceRow} key={label as string}>
                  <span className={s.spaceLabel}>{label}</span>
                  <div className={s.spaceBar} style={{ width: `${width}px` }} />
                  <span className={s.spaceVal}>{val}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, margin: "var(--s8) 0 var(--s4)" }}>
              Container Widths
            </h3>
            <div className={s.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Token</th>
                    <th scope="col">Value</th>
                    <th scope="col">Use</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["--w-sm", "640px", "Prose, blog, narrow"],
                    ["--w-md", "768px", "Single-column pages"],
                    ["--w-lg", "1024px", "Standard page"],
                    ["--w-xl", "1280px", "Wide / 2-col"],
                    ["--w-2xl", "1536px", "Full-bleed with gutters"],
                  ].map(([token, val, use]) => (
                    <tr key={token}>
                      <td><code className={s.inlineCode}>{token}</code></td>
                      <td>{val}</td>
                      <td>{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ============ MOTION ============ */}
          <section className={s.dsSection} id="motion" aria-labelledby="motion-title">
            <div className={s.sectionTag}>04 / Foundation</div>
            <h2 className={s.sectionTitle} id="motion-title">Motion Principles</h2>
            <p className={s.sectionDesc}>
              Hover the cards to feel each curve. Motion communicates state, not personality. Every
              animation has a <code className={s.inlineCode}>prefers-reduced-motion</code> fallback.
            </p>
            <div className={s.motionGrid}>
              {[
                ["Expo Out", "Snappy decel, default"],
                ["Circ Out", "Smooth, natural"],
                ["In-Out", "Modals, panels"],
                ["Spring", "Playful, alive"],
              ].map(([name, sub]) => (
                <div className={s.motionCard} tabIndex={0} key={name}>
                  <div className={s.motionBall} aria-hidden="true" />
                  <div className={s.motionName}>{name}</div>
                  <div className={s.motionSub}>{sub}</div>
                </div>
              ))}
            </div>
            <div className={`${s.tableWrap} ${s.mt6}`}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Token</th>
                    <th scope="col">Value</th>
                    <th scope="col">When</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["--dur-fast", "120ms", "Color, opacity, border"],
                    ["--dur-base", "200ms", "Hover, focus, small transforms"],
                    ["--dur-slow", "350ms", "Card lifts, theme switch, panels"],
                    ["--ease-expo", "cubic-bezier(0.16,1,0.3,1)", "Default for enters"],
                  ].map(([token, val, when]) => (
                    <tr key={token}>
                      <td><code className={s.inlineCode}>{token}</code></td>
                      <td>{val}</td>
                      <td>{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ============ BUTTONS ============ */}
          <section className={s.dsSection} id="buttons" aria-labelledby="btn-title">
            <div className={s.sectionTag}>05 / Components</div>
            <h2 className={s.sectionTitle} id="btn-title">Buttons</h2>
            <p className={s.sectionDesc}>
              All buttons: min-height 44px, visible focus ring, active press. Disabled: 0.4 opacity +
              cursor not-allowed.
            </p>

            <div className={s.componentBox}>
              <div className={s.componentLabel}>Variants</div>
              <button className={`${s.btn} ${s.btnPrimary} ${s.btnMd}`}>Primary</button>
              <button className={`${s.btn} ${s.btnSecondary} ${s.btnMd}`}>Secondary</button>
              <button className={`${s.btn} ${s.btnGhost} ${s.btnMd}`}>Ghost</button>
              <button className={`${s.btn} ${s.btnCyan} ${s.btnMd}`}>Cyan</button>
              <button className={`${s.btn} ${s.btnYellow} ${s.btnMd}`}>Yellow</button>
              <button className={`${s.btn} ${s.btnPurple} ${s.btnMd}`}>Purple</button>
            </div>

            <div className={s.componentBox}>
              <div className={s.componentLabel}>Sizes</div>
              <button className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`}>Small</button>
              <button className={`${s.btn} ${s.btnPrimary} ${s.btnMd}`}>Medium</button>
              <button className={`${s.btn} ${s.btnPrimary} ${s.btnLg}`}>Large</button>
              <button className={`${s.btn} ${s.btnPrimary} ${s.btnXl}`}>XLarge</button>
            </div>

            <div className={s.componentBox}>
              <div className={s.componentLabel}>States</div>
              <button className={`${s.btn} ${s.btnPrimary} ${s.btnMd}`}>Default</button>
              <button
                className={`${s.btn} ${s.btnPrimary} ${s.btnMd}`}
                style={{ outline: "2.5px solid var(--brand-crimson)", outlineOffset: "3px" }}
              >
                Focus
              </button>
              <button className={`${s.btn} ${s.btnPrimary} ${s.btnMd}`} disabled aria-disabled="true">
                Disabled
              </button>
              <button className={`${s.btn} ${s.btnSecondary} ${s.btnMd}`} disabled aria-disabled="true">
                Disabled 2ndary
              </button>
            </div>

            <div className={s.componentBox}>
              <div className={s.componentLabel}>With Lucide icons (inline SVG)</div>
              <button className={`${s.btn} ${s.btnPrimary} ${s.btnMd}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Continue
              </button>
              <button className={`${s.btn} ${s.btnSecondary} ${s.btnMd}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download
              </button>
              <button className={`${s.btn} ${s.btnGhost} ${s.btnMd}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Schedule
              </button>
            </div>

            <div className={s.a11yNote} role="note">
              <span className={s.a11yTag}>A11Y</span>
              <span>
                Focus ring: 2.5px crimson, 3px offset. Icon-only buttons require{" "}
                <code className={s.inlineCode}>aria-label</code>. Never use div or span as buttons.
                All interactive elements operable by keyboard.
              </span>
            </div>
          </section>

          {/* ============ BADGES ============ */}
          <section className={s.dsSection} id="badges" aria-labelledby="badge-title">
            <div className={s.sectionTag}>06 / Components</div>
            <h2 className={s.sectionTitle} id="badge-title">Badges + Tags</h2>
            <p className={s.sectionDesc}>
              JetBrains Mono, all-caps, 10px. Used for categories, states, metadata labels. Never for
              primary navigation.
            </p>
            <div className={s.componentBox}>
              <div className={s.componentLabel}>Brand colors</div>
              <span className={`${s.badge} ${s.badgeCrimson}`}>Crimson</span>
              <span className={`${s.badge} ${s.badgeCyan}`}>Cyan</span>
              <span className={`${s.badge} ${s.badgeYellow}`}>Yellow</span>
              <span className={`${s.badge} ${s.badgePurple}`}>Purple</span>
            </div>
            <div className={s.componentBox}>
              <div className={s.componentLabel}>State badges</div>
              <span className={`${s.badge} ${s.badgeSuccess}`}>Published</span>
              <span className={`${s.badge} ${s.badgeWarning}`}>In Review</span>
              <span className={`${s.badge} ${s.badgeError}`}>Overdue</span>
              <span className={`${s.badge} ${s.badgeInfo}`}>In Progress</span>
              <span className={`${s.badge} ${s.badgeNeutral}`}>Draft</span>
            </div>
            <div className={s.componentBox}>
              <div className={s.componentLabel}>Category examples</div>
              <span className={`${s.badge} ${s.badgeCyan}`}>Branding</span>
              <span className={`${s.badge} ${s.badgePurple}`}>Web Design</span>
              <span className={`${s.badge} ${s.badgeCrimson}`}>AI Tools</span>
              <span className={`${s.badge} ${s.badgeYellow}`}>Marketing</span>
              <span className={`${s.badge} ${s.badgeNeutral}`}>Merch</span>
            </div>
          </section>

          {/* ============ CARDS ============ */}
          <section className={s.dsSection} id="cards" aria-labelledby="cards-title">
            <div className={s.sectionTag}>07 / Components</div>
            <h2 className={s.sectionTitle} id="cards-title">Cards</h2>
            <p className={s.sectionDesc}>
              Hover for lift + shadow. Accent bar top takes any brand color. Card footer uses
              --bg-subtle.
            </p>
            <div className={s.grid2}>
              <article className={s.card}>
                <div className={s.cardAccent} style={{ background: "var(--brand-crimson)" }} />
                <div className={s.cardBody}>
                  <span className={`${s.badge} ${s.badgeCrimson}`} style={{ marginBottom: "var(--s3)" }}>
                    Branding
                  </span>
                  <div className={s.cardTitle}>Brand Identity System</div>
                  <div className={s.cardDesc}>
                    Complete visual identity from strategy to assets. Logo, color, type, usage guide.
                  </div>
                </div>
                <div className={s.cardFooter}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)" }}>
                    4-6 weeks
                  </span>
                  <button className={`${s.btn} ${s.btnGhost} ${s.btnSm}`}>View case</button>
                </div>
              </article>
              <article className={s.card}>
                <div className={s.cardAccent} style={{ background: "var(--brand-cyan)" }} />
                <div className={s.cardBody}>
                  <span className={`${s.badge} ${s.badgeCyan}`} style={{ marginBottom: "var(--s3)" }}>
                    Web Design
                  </span>
                  <div className={s.cardTitle}>Marketing Site</div>
                  <div className={s.cardDesc}>
                    Fast, accessible marketing sites. Next.js or Squarespace, always performance-first.
                  </div>
                </div>
                <div className={s.cardFooter}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)" }}>
                    3-5 weeks
                  </span>
                  <button className={`${s.btn} ${s.btnGhost} ${s.btnSm}`}>View case</button>
                </div>
              </article>
              <article className={s.card}>
                <div
                  className={s.cardAccent}
                  style={{ background: "linear-gradient(90deg,var(--brand-crimson),var(--brand-purple))" }}
                />
                <div className={s.cardBody}>
                  <span className={`${s.badge} ${s.badgePurple}`} style={{ marginBottom: "var(--s3)" }}>
                    AI Tools
                  </span>
                  <div className={s.cardTitle}>MaaS Platform</div>
                  <div className={s.cardDesc}>
                    Infrastructure for deploying AI-native tools. Claude, Open WebUI, LM Studio
                    integrations.
                  </div>
                </div>
                <div className={s.cardFooter}>
                  <span className={`${s.badge} ${s.badgeSuccess}`}>Active</span>
                  <button className={`${s.btn} ${s.btnGhost} ${s.btnSm}`}>Explore</button>
                </div>
              </article>
              <article className={s.card}>
                <div className={s.cardAccent} style={{ background: "var(--brand-yellow)" }} />
                <div className={s.cardBody}>
                  <span className={`${s.badge} ${s.badgeYellow}`} style={{ marginBottom: "var(--s3)" }}>
                    Content
                  </span>
                  <div className={s.cardTitle}>Content Retainer</div>
                  <div className={s.cardDesc}>
                    Monthly creative output. Social, email, assets, copy - all branded and
                    on-schedule.
                  </div>
                </div>
                <div className={s.cardFooter}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)" }}>
                    Ongoing
                  </span>
                  <button className={`${s.btn} ${s.btnGhost} ${s.btnSm}`}>Learn more</button>
                </div>
              </article>
            </div>
          </section>

          {/* ============ CALLOUTS ============ */}
          <section className={s.dsSection} id="callouts" aria-labelledby="callouts-title">
            <div className={s.sectionTag}>08 / Components</div>
            <h2 className={s.sectionTitle} id="callouts-title">Callouts</h2>
            <div className={s.flexCol} style={{ gap: "var(--s3)" }}>
              <div className={`${s.callout} ${s.calloutBrand}`} role="note">
                <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--brand-crimson)" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4m0 4h.01" />
                </svg>
                <div>
                  <div className={s.calloutTitle} style={{ color: "var(--brand-crimson)" }}>Brand note</div>
                  <div className={s.calloutBody}>
                    Studio-level callout for announcements or editorial asides. Bold left border is
                    always 4px brand color.
                  </div>
                </div>
              </div>
              <div className={`${s.callout} ${s.calloutSuccess}`} role="note">
                <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <div className={s.calloutTitle} style={{ color: "var(--success)" }}>Success</div>
                  <div className={s.calloutBody}>Project file exported and ready for download.</div>
                </div>
              </div>
              <div className={`${s.callout} ${s.calloutWarning}`} role="alert">
                <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2.5" aria-hidden="true">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <div>
                  <div className={s.calloutTitle} style={{ color: "var(--warning)" }}>Warning</div>
                  <div className={s.calloutBody}>
                    This will overwrite existing tokens. Export your current version first.
                  </div>
                </div>
              </div>
              <div className={`${s.callout} ${s.calloutError}`} role="alert">
                <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--error)" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <div>
                  <div className={`${s.calloutTitle} ${s.calloutError}`} style={{ color: "var(--error)" }}>Error</div>
                  <div className={s.calloutBody}>
                    Build failed. Check the console - usually a missing CSS variable or bad import
                    path.
                  </div>
                </div>
              </div>
              <div className={`${s.callout} ${s.calloutInfo}`} role="note">
                <svg className={s.calloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--info)" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <div>
                  <div className={s.calloutTitle} style={{ color: "var(--info)" }}>Info</div>
                  <div className={s.calloutBody}>
                    Dark mode auto-enables on system preference. Toggle overrides per session only.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ FORMS ============ */}
          <section className={s.dsSection} id="forms" aria-labelledby="forms-title">
            <div className={s.sectionTag}>09 / Components</div>
            <h2 className={s.sectionTitle} id="forms-title">Form Elements</h2>
            <div className={s.grid2}>
              <div className={`${s.surfaceBox} ${s.flexCol} ${s.gap5}`}>
                <div className={`${s.flexCol} ${s.gap2}`}>
                  <label className={s.formLabel} htmlFor="f-name">Full name</label>
                  <input className={s.input} type="text" id="f-name" placeholder="Dade Smith" autoComplete="name" />
                  <span className={s.formHint}>As it appears on your brief.</span>
                </div>
                <div className={`${s.flexCol} ${s.gap2}`}>
                  <label className={s.formLabel} htmlFor="f-email">Email</label>
                  <input className={s.input} type="email" id="f-email" placeholder="you@studio.com" autoComplete="email" />
                </div>
                <div className={`${s.flexCol} ${s.gap2}`}>
                  <label className={s.formLabel} htmlFor="f-msg">Project scope</label>
                  <textarea
                    className={s.input}
                    id="f-msg"
                    rows={4}
                    placeholder="Tell me what you're building..."
                    style={{ resize: "vertical", minHeight: 100 }}
                  />
                </div>
                <button className={`${s.btn} ${s.btnPrimary} ${s.btnLg} ${s.btnFull}`} type="submit">
                  Send brief
                </button>
              </div>
              <div className={`${s.surfaceBox} ${s.flexCol} ${s.gap5}`}>
                <div className={`${s.flexCol} ${s.gap2}`}>
                  <label className={s.formLabel} htmlFor="f-err">Email (error state)</label>
                  <input
                    className={`${s.input} ${s.inputErr}`}
                    type="email"
                    id="f-err"
                    defaultValue="notvalid"
                    aria-invalid="true"
                    aria-describedby="err1"
                  />
                  <span className={s.formErr} id="err1" role="alert">
                    Enter a valid email address.
                  </span>
                </div>
                <div className={`${s.flexCol} ${s.gap2}`}>
                  <label className={s.formLabel} htmlFor="f-select">Service type</label>
                  <select className={s.input} id="f-select">
                    <option value="">Select...</option>
                    <option>Brand Identity</option>
                    <option>Web Design</option>
                    <option>Content Retainer</option>
                    <option>AI Tools / MaaS</option>
                  </select>
                </div>
                <div style={{ display: "flex", gap: "var(--s3)", alignItems: "flex-start" }}>
                  <input
                    type="checkbox"
                    id="f-check"
                    style={{ width: 18, height: 18, accentColor: "var(--brand-crimson)", cursor: "pointer", flexShrink: 0, marginTop: 2 }}
                  />
                  <label
                    htmlFor="f-check"
                    style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", cursor: "pointer" }}
                  >
                    I&apos;ve read the process doc and understand typical timelines.
                  </label>
                </div>
              </div>
            </div>
            <div className={`${s.a11yNote} ${s.mt4}`} role="note">
              <span className={s.a11yTag}>A11Y</span>
              <span>
                All inputs: explicit <code className={s.inlineCode}>for</code>/
                <code className={s.inlineCode}>id</code> pairs. Error state:{" "}
                <code className={s.inlineCode}>aria-invalid=&quot;true&quot;</code> +{" "}
                <code className={s.inlineCode}>aria-describedby</code>. Focus ring always visible.
                Never hide labels with placeholder-only approach.
              </span>
            </div>
          </section>

          {/* ============ NAV ============ */}
          <section className={s.dsSection} id="nav-section" aria-labelledby="nav-title">
            <div className={s.sectionTag}>10 / Components</div>
            <h2 className={s.sectionTitle} id="nav-title">Navigation</h2>
            <nav className={s.navDemo} aria-label="Primary nav demo">
              <div className={s.navInner}>
                <a
                  href="#"
                  aria-label="Dade Studio home"
                  style={{ display: "flex", alignItems: "center", gap: "var(--s3)" }}
                >
                  <img src="/assets/brand/logo-d.png" alt="Dade Studio" width={40} height={40} />
                  <span style={{ fontWeight: 700, fontSize: "var(--text-sm)", letterSpacing: "-0.02em" }}>
                    dade.studio
                  </span>
                </a>
                <ul className={s.navLinks} role="list">
                  <li><a href="#" aria-current="page">Work</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">MaaS</a></li>
                </ul>
                <button className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`}>Start a project</button>
              </div>
            </nav>
            <div className={`${s.a11yNote} ${s.mt4}`} role="note">
              <span className={s.a11yTag}>A11Y</span>
              <span>
                Nav landmark with unique <code className={s.inlineCode}>aria-label</code>. Active
                link: <code className={s.inlineCode}>aria-current=&quot;page&quot;</code>. Mobile menu
                must be keyboard operable before JS. Skip-to-main link in DOM before nav.
              </span>
            </div>
          </section>

          {/* ============ TABLES ============ */}
          <section className={s.dsSection} id="tables" aria-labelledby="tables-title">
            <div className={s.sectionTag}>11 / Components</div>
            <h2 className={s.sectionTitle} id="tables-title">Data Tables</h2>
            <div className={s.tableWrap}>
              <table>
                <caption>Active projects</caption>
                <thead>
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Client</th>
                    <th scope="col">Status</th>
                    <th scope="col">Due</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Brand Identity</strong></td>
                    <td style={{ color: "var(--text-secondary)" }}>Wavefront Recs</td>
                    <td><span className={`${s.badge} ${s.badgeInfo}`}>In Progress</span></td>
                    <td style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)" }}>May 15</td>
                    <td><button className={`${s.btn} ${s.btnGhost} ${s.btnSm}`} style={{ padding: "4px 12px" }}>Open</button></td>
                  </tr>
                  <tr>
                    <td><strong>Marketing Site</strong></td>
                    <td style={{ color: "var(--text-secondary)" }}>Prism Studio</td>
                    <td><span className={`${s.badge} ${s.badgeWarning}`}>In Review</span></td>
                    <td style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)" }}>May 2</td>
                    <td><button className={`${s.btn} ${s.btnGhost} ${s.btnSm}`} style={{ padding: "4px 12px" }}>Open</button></td>
                  </tr>
                  <tr>
                    <td><strong>Content Retainer</strong></td>
                    <td style={{ color: "var(--text-secondary)" }}>CTRL Mag</td>
                    <td><span className={`${s.badge} ${s.badgeSuccess}`}>Published</span></td>
                    <td style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)" }}>Ongoing</td>
                    <td><button className={`${s.btn} ${s.btnGhost} ${s.btnSm}`} style={{ padding: "4px 12px" }}>Open</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={`${s.a11yNote} ${s.mt4}`} role="note">
              <span className={s.a11yTag}>A11Y</span>
              <span>
                Tables always have <code className={s.inlineCode}>caption</code> and{" "}
                <code className={s.inlineCode}>scope=&quot;col&quot;</code>. Tables never reflow to
                cards - they scroll horizontally. Complex tables need{" "}
                <code className={s.inlineCode}>headers</code> attributes.
              </span>
            </div>
          </section>

          {/* ============ IMAGES ============ */}
          <section className={s.dsSection} id="images" aria-labelledby="img-title">
            <div className={s.sectionTag}>12 / Components</div>
            <h2 className={s.sectionTitle} id="img-title">Image Patterns</h2>
            <p className={s.sectionDesc}>
              Always <code className={s.inlineCode}>picture</code> with AVIF + WebP. Explicit
              dimensions prevent CLS. <code className={s.inlineCode}>fetchpriority=&quot;high&quot;</code>{" "}
              on LCP image only.
            </p>
            <div className={s.grid3}>
              <div>
                <div
                  style={{
                    borderRadius: "var(--r-xl)",
                    overflow: "hidden",
                    aspectRatio: "16/9",
                    background: "var(--bg-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  16:9 image
                </div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)", marginTop: "var(--s2)" }}>
                  Default: radius-xl, explicit aspect-ratio
                </p>
              </div>
              <div>
                <div
                  style={{
                    borderRadius: "var(--r-xl)",
                    overflow: "hidden",
                    aspectRatio: "16/9",
                    background: "linear-gradient(135deg,oklch(13% 0.015 260),oklch(25% 0.02 260))",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "var(--s4)",
                  }}
                >
                  <span style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "white" }}>
                    Overlay gradient
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)", marginTop: "var(--s2)" }}>
                  Dark bottom gradient for text legibility
                </p>
              </div>
              <div>
                <div
                  style={{
                    borderRadius: "var(--r-xl)",
                    overflow: "hidden",
                    aspectRatio: "16/9",
                    background: "linear-gradient(135deg,color-mix(in srgb,var(--brand-crimson) 60%,oklch(13% 0 0)),color-mix(in srgb,var(--brand-cyan) 60%,oklch(13% 0 0)))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "white",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Duotone
                </div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-secondary)", marginTop: "var(--s2)" }}>
                  CSS duotone: desaturate + color blend
                </p>
              </div>
            </div>
            <div className={`${s.specimen} ${s.mt6}`}>
              <div className={s.specimenMeta}>
                <strong>Production image markup</strong>
              </div>
              <pre className={s.specimenCode} style={{ whiteSpace: "pre" }}>{`<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" width="1280" height="720"
       alt="Descriptive alt text"
       loading="eager" fetchpriority="high" decoding="async">
</picture>`}</pre>
            </div>
          </section>

          {/* ============ SECTION PATTERNS ============ */}
          <section className={s.dsSection} id="section-patterns" aria-labelledby="patterns-title">
            <div className={s.sectionTag}>13 / Patterns</div>
            <h2 className={s.sectionTitle} id="patterns-title">Section Patterns</h2>
            <p className={s.sectionDesc}>
              Live mini-previews. Each pattern is self-contained and composable.
            </p>

            <div className={s.patternWrap}>
              <div className={s.patternBar}>
                <span>Hero - gradient field + dual CTA</span>
                <span className={`${s.badge} ${s.badgeNeutral}`}>Pattern A</span>
              </div>
              <div className={s.miniHero}>
                <div className={s.miniHeroTag}>Builder &bull; Creator &bull; Technologist</div>
                <h3>
                  Design that
                  <br />
                  <span style={{ color: "var(--brand-crimson)" }}>ships things.</span>
                </h3>
                <p>
                  A one-person studio doing brand identity, web design, and AI tooling for creators
                  who want craft without the agency overhead.
                </p>
                <div className={s.miniHeroBtns}>
                  <button className={`${s.btn} ${s.btnPrimary} ${s.btnLg}`}>See the work</button>
                  <button className={`${s.btn} ${s.btnSecondary} ${s.btnLg}`}>Start a project</button>
                </div>
              </div>
            </div>

            <div className={s.patternWrap}>
              <div className={s.patternBar}>
                <span>Feature Grid - icon cards</span>
                <span className={`${s.badge} ${s.badgeNeutral}`}>Pattern B</span>
              </div>
              <div className={s.featureGrid}>
                <div className={s.featureCard}>
                  <div className={s.featureIcon} style={{ background: "var(--accent-crimson-bg)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-crimson)" strokeWidth="2.5" aria-hidden="true">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className={s.featureTitle}>Brand Identity</div>
                  <div className={s.featureDesc}>Strategy-first visual systems. Logo, color, type, usage guide.</div>
                </div>
                <div className={s.featureCard}>
                  <div className={s.featureIcon} style={{ background: "var(--accent-cyan-bg)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-cyan)" strokeWidth="2.5" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <div className={s.featureTitle}>Web Design</div>
                  <div className={s.featureDesc}>Fast, accessible marketing sites. Next.js or Squarespace.</div>
                </div>
                <div className={s.featureCard}>
                  <div className={s.featureIcon} style={{ background: "var(--accent-purple-bg)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-purple)" strokeWidth="2.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className={s.featureTitle}>AI Tooling</div>
                  <div className={s.featureDesc}>Claude-native workflows, local LLM deployment, MaaS.</div>
                </div>
                <div className={s.featureCard}>
                  <div className={s.featureIcon} style={{ background: "var(--accent-yellow-bg)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-yellow)" strokeWidth="2.5" aria-hidden="true">
                      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <div className={s.featureTitle}>Content Retainer</div>
                  <div className={s.featureDesc}>Monthly creative output. Social, email, assets, copy.</div>
                </div>
              </div>
            </div>

            <div className={s.patternWrap}>
              <div className={s.patternBar}>
                <span>Pricing Tiers</span>
                <span className={`${s.badge} ${s.badgeNeutral}`}>Pattern C</span>
              </div>
              <div className={s.pricingRow}>
                <div className={s.priceCard}>
                  <div className={s.priceTier}>Starter</div>
                  <div className={s.priceAmount}>$2,400<sub>/mo</sub></div>
                  <div className={s.pricePeriod}>Content Crib entry tier</div>
                  <ul className={s.priceList}>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      8 assets per month
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      Brand guidelines applied
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      2 revision rounds
                    </li>
                  </ul>
                  <button className={`${s.btn} ${s.btnSecondary} ${s.btnMd} ${s.btnFull}`}>Get started</button>
                </div>
                <div className={`${s.priceCard} ${s.priceCardFeatured}`}>
                  <div className={s.priceBadge}>Most popular</div>
                  <div className={s.priceTier}>Studio</div>
                  <div className={s.priceAmount}>$4,800<sub>/mo</sub></div>
                  <div className={s.pricePeriod}>Full retainer access</div>
                  <ul className={s.priceList}>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      20 assets / month
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      Strategy + design + copy
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      Priority turnaround
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      Slack async access
                    </li>
                  </ul>
                  <button className={`${s.btn} ${s.btnPrimary} ${s.btnMd} ${s.btnFull}`}>Get started</button>
                </div>
                <div className={s.priceCard}>
                  <div className={s.priceTier}>Custom</div>
                  <div className={s.priceAmount} style={{ fontSize: "var(--text-3xl)" }}>Let&apos;s talk</div>
                  <div className={s.pricePeriod}>Scoped or ongoing</div>
                  <ul className={s.priceList}>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      Any scope, any cadence
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      AI workflow integration
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      MaaS infra included
                    </li>
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" style={{ flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                      Direct founder access
                    </li>
                  </ul>
                  <button className={`${s.btn} ${s.btnSecondary} ${s.btnMd} ${s.btnFull}`}>Contact</button>
                </div>
              </div>
            </div>
          </section>

          {/* ============ ICONOGRAPHY ============ */}
          <section className={s.dsSection} id="iconography" aria-labelledby="icon-title">
            <div className={s.sectionTag}>14 / Patterns</div>
            <h2 className={s.sectionTitle} id="icon-title">Iconography</h2>
            <p className={s.sectionDesc}>
              Lucide icons - inline SVG only. 24x24 viewBox, stroke-width 2.5, currentColor. No icon
              fonts. No emoji as UI elements. Tree-shakeable: import only what you use.
            </p>

            <div className={s.iconGrid}>
              {[
                { name: "arrow-right", d: <path d="M5 12h14M12 5l7 7-7 7" /> },
                { name: "download", d: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></> },
                { name: "clock", d: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></> },
                { name: "check", d: <polyline points="20 6 9 17 4 12" /> },
                { name: "x", d: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> },
                { name: "menu", d: <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></> },
                { name: "external-link", d: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" /></> },
                { name: "mail", d: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
                { name: "search", d: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></> },
                { name: "settings", d: <><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" /></> },
                { name: "user", d: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></> },
                { name: "heart", d: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /> },
              ].map(({ name, d }) => (
                <div className={s.iconCell} key={name}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {d}
                  </svg>
                  <span className={s.iconLabel}>{name}</span>
                </div>
              ))}
            </div>

            <div className={`${s.specimen} ${s.mt6}`}>
              <div className={s.specimenMeta}>
                <strong>Icon usage pattern</strong>
              </div>
              <pre className={s.specimenCode} style={{ whiteSpace: "pre" }}>{`<!-- Decorative icon (most cases) -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="..."/>
</svg>

<!-- Icon-only interactive button -->
<button aria-label="Download file">
  <svg width="24" height="24" viewBox="0 0 24 24" ... aria-hidden="true">...</svg>
</button>`}</pre>
            </div>

            <div className={s.a11yNote} role="note">
              <span className={s.a11yTag}>A11Y</span>
              <span>
                Decorative icons: always <code className={s.inlineCode}>aria-hidden=&quot;true&quot;</code>.
                Standalone interactive icons: <code className={s.inlineCode}>aria-label</code> on the
                parent button. Never use <code className={s.inlineCode}>title</code> alone for
                accessibility. Minimum icon size in UI: 20px. Preferred: 24px.
              </span>
            </div>
          </section>

          {/* ============ LIGHTHOUSE ============ */}
          <section className={s.dsSection} id="lighthouse" aria-labelledby="lh-title">
            <div className={s.sectionTag}>15 / Performance</div>
            <h2 className={s.sectionTitle} id="lh-title">Lighthouse 100 Checklist</h2>
            <p className={s.sectionDesc}>
              Non-negotiable before any page ships. Budget: LCP &lt;2.0s, CLS &lt;0.05, INP &lt;200ms,
              TBT &lt;100ms on mid-tier mobile simulated 4G.
            </p>

            <div className={s.checklist}>
              {[
                {
                  title: "LCP under 2.0s - hero image + font both resolved",
                  desc: "LCP element is almost always the hero image or the largest heading. Use fetchpriority=\"high\" on the LCP image, preload both variable fonts, and inline critical CSS so nothing blocks the first paint. Target: under 2.0s on Moto G4 throttled 4G.",
                },
                {
                  title: "CLS under 0.05 - no late-loading layout shift",
                  desc: "Every image has explicit width and height attributes. All media containers use aspect-ratio. Font swap uses size-adjust metric overrides to match fallback metrics. No ads, embeds, or injected content without reserved space.",
                },
                {
                  title: "INP under 200ms - no long tasks on main thread",
                  desc: "All JS is defer or type=\"module\". No synchronous third-party scripts. Event handlers are lightweight - never trigger layout or paint inside a click handler. JS budget: 30KB gzipped total per page.",
                },
                {
                  title: "Image pipeline: AVIF + WebP + explicit dims + fetchpriority",
                  desc: "Every image: <picture> with AVIF source first, WebP fallback, JPG/PNG last. Explicit width and height. loading=\"lazy\" below fold, loading=\"eager\" above. fetchpriority=\"high\" on the single LCP image only. Responsive srcset with width descriptors for images over 400px wide.",
                },
                {
                  title: "Font loading: variable, preload, font-display swap, size-adjust",
                  desc: "<link rel=\"preload\" as=\"font\" type=\"font/woff2\" crossorigin> for both Inter Variable and JetBrains Mono. font-display: swap on both. Add size-adjust, ascent-override, descent-override to the fallback @font-face to eliminate CLS during the swap period.",
                },
                {
                  title: "Critical CSS inlined, non-critical deferred",
                  desc: "Everything the browser needs to paint above-the-fold lives in an inline <style> block in <head>. Below-fold CSS: <link rel=\"stylesheet\" media=\"print\" onload=\"this.media='all'\">. Zero render-blocking external stylesheets. No @import in CSS.",
                },
                {
                  title: "Accessibility: WCAG AA contrast, focus rings, keyboard nav",
                  desc: "Body text 4.5:1 minimum. UI components and large text 3:1 minimum. All focus rings visible at 2.5px with 3px offset in both light and dark mode. Tab order matches visual order. No keyboard traps. All interactive elements operable without a mouse.",
                },
                {
                  title: "SEO: semantic HTML, meta, canonical, Open Graph",
                  desc: "<html lang=\"en\">. One h1 per page. Proper heading hierarchy, no skips. header, main, nav, footer landmarks. Meta description 120-160 chars. <link rel=\"canonical\">. og:title, og:description, og:image (1200x630), og:url, twitter:card on every page.",
                },
                {
                  title: "prefers-reduced-motion respected globally",
                  desc: "Global rule in the base layer collapses all animation and transition durations to 0.01ms when the user prefers reduced motion. No motion conveys information alone - every animated state has a static equivalent. Parallax and auto-play video: disabled under reduced-motion.",
                },
                {
                  title: "No-JS baseline - core content works without JavaScript",
                  desc: "Navigation, all copy, all images, and primary CTAs render and are clickable with JS disabled. JS is progressive enhancement only: dark mode toggle, mobile nav open/close, any animations. Never gate content behind a JS condition. Forms submit to a real endpoint without JS intercept.",
                },
              ].map(({ title, desc }) => (
                <div className={s.checkItem} key={title}>
                  <div className={s.checkMark} aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className={s.checkTitle}>{title}</div>
                    <div className={s.checkDesc}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ============ CURSOR HANDOFF ============ */}
          <section className={s.dsSection} id="cursor-handoff" aria-labelledby="handoff-title">
            <div className={s.sectionTag}>16 / Handoff</div>
            <h2 className={s.sectionTitle} id="handoff-title">Cursor Handoff Backlog</h2>
            <p className={s.sectionDesc}>
              Operator checklist for any future AI agent picking up the Dade Studio design system. Read
              this before touching tokens, logo assets, or font loading. Every item here is a hard
              constraint - not a preference.
            </p>

            <div className={s.checklist}>
              {[
                {
                  title: "Token source of truth: this artifact, @layer tokens block",
                  desc: "All design tokens live in artifacts/01-design-system.html, inside the inline <style> element in <head>, under @layer tokens { :root { ... } } (light defaults) and [data-theme=\"dark\"] { ... } (dark overrides). When porting to the production site, extract this block verbatim into app/globals.css or equivalent. Do not rewrite the OKLCH values - they were hand-tuned for AA contrast.",
                },
                {
                  title: "Logo asset: /assets/brand/logo-d.png - never regenerate",
                  desc: "The canonical logo is a 1,425x1,425 PNG at /assets/brand/logo-d.png. There is no SVG variant and none should be created. Do not trace, redraw, or \"optimize\" this mark. Every logo appearance in the system uses <img src=\"/assets/brand/logo-d.png\" alt=\"Dade Studio\" width=\"40\" height=\"40\" />. If a size other than 40px is needed, adjust width/height attributes but keep the source file unchanged.",
                },
                {
                  title: "Font assets: self-hosted variable WOFF2, no third-party CDN",
                  desc: "Fonts are served from the same origin: /assets/fonts/InterVariable.woff2 and /assets/fonts/JetBrainsMono[wght].woff2. The @font-face declarations sit outside @layer tokens and use format(\"woff2-variations\") with the full weight range (100 900 for Inter, 100 800 for JetBrains Mono) and font-display: swap. Never add a Google Fonts <link>, @import, or any third-party CDN preload. Self-hosting is mandatory.",
                },
                {
                  title: "CSS custom property naming: one scheme, no aliases",
                  desc: "All custom properties follow these namespaces: --color-* or semantic surface/text names (--bg-base, --text-primary), --brand-* for brand primitives (--brand-crimson, --brand-cyan, --brand-yellow, --brand-purple), --space-* or --s1..--s32 for spacing, --radius-* or --r-sm..--r-full for radius, --text-* for type scale, --dur-* / --ease-* for motion, --w-* for container widths. Do not introduce parallel schemes.",
                },
                {
                  title: "Product naming: Memory as a Service (MaaS)",
                  desc: "The AI product hosted at maas.dade.studio is Memory as a Service, short-form MaaS. It is persistent AI memory that spans tools (Claude, Cursor, Open WebUI, LM Studio) - not a model router, not a multi-model API, not an LLM fleet. The acronym never expands to a model-routing phrase.",
                },
                {
                  title: "Accessibility baseline: already verified, do not regress",
                  desc: "All token pairings are WCAG AA verified. Crimson (#F0243E) at 4.3:1 passes for large text and UI components only - never apply it to body copy on white. Focus rings are 2.5px crimson with 3px offset across both themes. The logo image has alt=\"Dade Studio\", not empty and not decorative. Do not weaken any of these.",
                },
                {
                  title: "Known deviations: see Artifact 5 appendix",
                  desc: "See Artifact 5 (Brand Handoff Brief) Known deviations to fix before port appendix for the full deviation log. That appendix is the single place where drift between this design system and the live site is tracked; reconcile against it before porting any section into production.",
                },
              ].map(({ title, desc }) => (
                <div className={s.checkItem} key={title}>
                  <div className={s.checkMark} aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className={s.checkTitle}>{title}</div>
                    <div className={s.checkDesc}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* FOOTER */}
      <footer className={s.dsFooter} role="contentinfo">
        <span>dade.studio design system v1.0 - April 2026</span>
        <nav className={s.footerNav} aria-label="Footer navigation">
          <a href="https://dade.studio/work">Work</a>
          <a href="https://dade.studio/services">Services</a>
          <a href="https://dade.studio/about">About</a>
          <a href="https://dade.studio/contact">Contact</a>
        </nav>
      </footer>
    </div>
  );
}
