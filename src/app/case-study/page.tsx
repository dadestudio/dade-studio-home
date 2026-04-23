import Link from "next/link";
import styles from "./case-study.module.css";

const toc = [
  { id: "challenge", number: "01", label: "The challenge" },
  { id: "process", number: "02", label: "Process" },
  { id: "identity", number: "03", label: "Identity system" },
  { id: "type", number: "04", label: "Typography" },
  { id: "applications", number: "05", label: "Applications" },
  { id: "outcomes", number: "06", label: "Outcomes" },
  { id: "deviations", number: "07", label: "Known deviations" },
];

const timeline = [
  {
    week: "Week 1",
    title: "Strategy and positioning",
    body: "Brand audit, competitive review, and a focused workshop to define what the identity needed to communicate and what it needed to avoid.",
    badges: ["Brand brief", "Competitive audit", "Reference set"],
  },
  {
    week: "Week 2",
    title: "Logo exploration",
    body: "Three distinct conceptual directions were tested, narrowed, and iterated based on what communicated best without explanation.",
    badges: ["3 logo directions", "Presentation deck"],
  },
  {
    week: "Week 3",
    title: "System build",
    body: "Final mark refinement plus color, type, layout principles, usage rules, and documentation built in parallel.",
    badges: ["Final logo", "Color system", "Type system", "Usage rules"],
  },
  {
    week: "Week 4",
    title: "Applications and handoff",
    body: "Application mocks, export package, and practical handoff files so the in-house designer could keep building inside the system.",
    badges: ["Brand guide", "Source files", "Asset kit", "Application mocks"],
  },
];

export default function CaseStudyPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      <header className={styles.nav}>
        <div className={styles.navInner}>
          <Link className={styles.logo} href="/" aria-label="Dade Studio home">
            <img src="/assets/brand/logo-d.png" alt="Dade Studio" width={40} height={40} />
            <span>dade.studio</span>
          </Link>
          <Link className={styles.backLink} href="/work">
            All work
          </Link>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroGhost} aria-hidden="true">
            CS
          </div>

          <p className={styles.ribbon}>Template / Speculative work - not a real client engagement.</p>

          <div className={styles.heroInner}>
            <Link href="/work" className={styles.crumb}>
              Work
            </Link>

            <div className={styles.heroTags}>
              <span className={`${styles.badge} ${styles.badgeCrimson}`}>Brand identity</span>
              <span className={`${styles.badge} ${styles.badgeWhite}`}>2026 template</span>
              <span className={`${styles.badge} ${styles.badgeWhite}`}>4 weeks</span>
            </div>

            <h1 id="hero-title" className={styles.heroTitle}>
              Case Study Template
            </h1>
            <p className={styles.heroBody}>
              A complete identity system for an independent electronic label - from positioning and mark
              design through practical assets built for real-world use.
            </p>
          </div>
        </section>

        <div className={styles.layout}>
          <article className={styles.article}>
            <section className={styles.metaSection} aria-label="Case study contents and project details">
              <div className={styles.toc}>
                <div className={styles.tocHeader}>Contents</div>
                <ul className={styles.tocList}>
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>
                        <span>{item.number}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.metaGrid}>
                <div className={styles.metaCell}>
                  <span>Client</span>
                  <strong>Independent music label</strong>
                  <small>Template location</small>
                </div>
                <div className={styles.metaCell}>
                  <span>Timeline</span>
                  <strong>4 weeks</strong>
                  <small>Defined scope</small>
                </div>
                <div className={styles.metaCell}>
                  <span>Deliverables</span>
                  <strong>Identity system</strong>
                  <small>Mark, color, type, guide</small>
                </div>
                <div className={styles.metaCell}>
                  <span>Tools</span>
                  <strong>Figma, Illustrator</strong>
                  <small>Notion documentation</small>
                </div>
              </div>
            </section>

            <section className={styles.section} id="challenge" aria-labelledby="challenge-title">
              <p className={styles.eyebrow}>01 / The challenge</p>
              <h2 id="challenge-title">A label without a visual language</h2>
              <p>
                The team had momentum but no consistent identity system. Every release reused different
                colors, typography, and mark treatments. As visibility grew, that inconsistency became a
                product problem, not just a design problem.
              </p>
              <p>
                The goal was clear - create something independent and credible without drifting into
                generic corporate styling. The system had to scale from social thumbnails to physical
                print without losing character.
              </p>
            </section>

            <section className={styles.section} id="process" aria-labelledby="process-title">
              <p className={styles.eyebrow}>02 / Process</p>
              <h2 id="process-title">Four weeks, no surprises</h2>
              <div className={styles.timeline}>
                {timeline.map((step, index) => (
                  <div className={styles.timelineItem} key={step.week}>
                    <div className={styles.timelineDot}>{String(index + 1).padStart(2, "0")}</div>
                    <div className={styles.timelineContent}>
                      <p className={styles.timelineWeek}>{step.week}</p>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                      <div className={styles.timelineBadges}>
                        {step.badges.map((badge) => (
                          <span key={badge}>{badge}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section} id="identity" aria-labelledby="identity-title">
              <p className={styles.eyebrow}>03 / Identity system</p>
              <h2 id="identity-title">A mark and palette built for range</h2>
              <p>
                The selected mark implies motion and signal without relying on literal visual cliches. It
                works as a full lockup, a compact symbol, and a small digital avatar while staying
                recognizable.
              </p>
              <div className={styles.paletteGrid}>
                <div>
                  <div className={`${styles.swatch} ${styles.swatchBase}`} />
                  <p>Primary surface</p>
                </div>
                <div>
                  <div className={`${styles.swatch} ${styles.swatchCrimson}`} />
                  <p>Signal accent</p>
                </div>
                <div>
                  <div className={`${styles.swatch} ${styles.swatchLight}`} />
                  <p>Text support</p>
                </div>
                <div>
                  <div className={`${styles.swatch} ${styles.swatchNeutral}`} />
                  <p>Secondary UI</p>
                </div>
              </div>
            </section>

            <section className={styles.section} id="type" aria-labelledby="type-title">
              <p className={styles.eyebrow}>04 / Typography</p>
              <h2 id="type-title">Type decisions for clarity and texture</h2>
              <p>
                The system uses a modern sans for high-impact messaging and a mono companion for metadata,
                catalog context, and technical labels. This keeps long-form copy readable while preserving
                the right visual tone for release details.
              </p>
              <div className={styles.callout}>
                <h3>Type decision rationale</h3>
                <p>
                  Mono elements provide practical structure at small sizes and meaningful visual identity
                  at large sizes. This pairing improves scanability across social cards, press materials,
                  and product surfaces.
                </p>
              </div>
            </section>

            <section className={styles.section} id="applications" aria-labelledby="applications-title">
              <p className={styles.eyebrow}>05 / Applications</p>
              <h2 id="applications-title">Pressure tested across touchpoints</h2>
              <p>
                The system was validated against streaming profiles, release artwork, press kits, and
                merch concepts. Testing across these contexts revealed practical constraints early, which
                made final handoff easier and more durable.
              </p>
              <div className={styles.applicationGrid}>
                <div>
                  <strong>Streaming profile</strong>
                  <small>Platform avatars and headers</small>
                </div>
                <div>
                  <strong>Release cover</strong>
                  <small>Digital and print variants</small>
                </div>
                <div>
                  <strong>Press kit</strong>
                  <small>Editorial-ready assets</small>
                </div>
                <div>
                  <strong>Merch assets</strong>
                  <small>Apparel and event collateral</small>
                </div>
              </div>
            </section>

            <section className={styles.section} id="outcomes" aria-labelledby="outcomes-title">
              <p className={styles.eyebrow}>06 / Outcomes</p>
              <h2 id="outcomes-title">What happened after launch</h2>
              <p>
                The template narrative keeps outcomes genericized. Delivery is on brief, system coherence
                is stable, and follow-up clarification load remains low because the documentation is
                explicit and practical.
              </p>
              <div className={styles.outcomeGrid}>
                <div>
                  <strong>On brief</strong>
                  <small>Delivery quality</small>
                </div>
                <div>
                  <strong>Stable</strong>
                  <small>System continuity</small>
                </div>
                <div>
                  <strong>Flexible</strong>
                  <small>Application range</small>
                </div>
                <div>
                  <strong>Low</strong>
                  <small>Post-handoff friction</small>
                </div>
              </div>
            </section>

            <section className={styles.section} id="deviations" aria-labelledby="deviations-title">
              <p className={styles.eyebrow}>07 / Known deviations</p>
              <h2 id="deviations-title">Port checklist for production routes</h2>
              <p>
                Keep naming and positioning locked. Memory as a Service appears consistently, pricing stays
                at $199, $399, and $799 with beta 20 percent off, and the canonical logo path remains
                `/assets/brand/logo-d.png`.
              </p>
            </section>

            <section className={styles.cta} aria-label="Start a project">
              <div>
                <p>Work with Dade Studio</p>
                <h2>Need this caliber of system work?</h2>
              </div>
              <a href="mailto:hello@dade.studio">Start a project</a>
            </section>
          </article>

          <aside className={styles.sidebar} aria-label="Case study sidebar">
            <a href="mailto:hello@dade.studio" className={styles.sidebarCta}>
              Start a project
            </a>
          </aside>
        </div>
      </main>
    </div>
  );
}
