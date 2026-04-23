"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import s from "./products.module.css";

export default function ProductsPage() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  return (
    <div className={`${s.pRoot} ${isLight ? s.light : ""}`}>
      <header className={s.siteNav} role="banner">
        <div className={`${s.wrapper} ${s.navInner}`}>
          <Link href="/" className={s.navLogo} aria-label="Dade Studio Memory as a Service home">
            <img src="/assets/brand/logo-d.png" alt="Dade Studio" width={40} height={40} />
            <span>dade.studio / MaaS</span>
          </Link>
          <nav aria-label="Primary navigation">
            <ul className={s.navLinks}>
              <li><a href="#problem">Problem</a></li>
              <li><a href="#access">How it works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#cta">Waitlist</a></li>
            </ul>
          </nav>
          <a href="#cta" className={`${s.btn} ${s.btnPrimary}`}>Join waitlist</a>
        </div>
      </header>

      <main id="main">
        <section className={s.hero} aria-labelledby="hero-title">
          <div className={s.wrapper}>
            <span className={s.badge}>Memory as a Service</span>
            <h1 id="hero-title">Your AI, finally working like a coworker.</h1>
            <p className={s.heroSub}>Persistent memory across every tool you use. Built and maintained for you.</p>
            <ul className={s.heroBullets} aria-label="Product highlights">
              <li>Works across every AI tool you already use.</li>
              <li>Your brand, business, and history - in one private repo.</li>
              <li>Managed end-to-end. You don&apos;t touch the stack.</li>
            </ul>
          </div>
        </section>

        <section className={s.section} id="problem" aria-labelledby="problem-title">
          <div className={`${s.wrapper} ${s.grid2}`}>
            <div>
              <h2 id="problem-title">Why memory changes everything</h2>
              <p className={s.heroSub}>Memory as a Service keeps your context persistent so tools stop resetting your work every session.</p>
            </div>
            <div className={`${s.card} ${s.problemList}`}>
              <p><strong>Context amnesia</strong> - Every new chat starts from zero. You re-explain your business, your brand, your history, every single time.</p>
              <p><strong>Brand drift</strong> - Your AI guesses at voice because it has no reference. Copy comes back generic, off-tone, forgettable.</p>
              <p><strong>Knowledge fragmentation</strong> - Notes live in Notion, chats in ChatGPT, code in Cursor, briefs in Claude. Nothing talks to anything.</p>
              <p><strong>Onboarding friction</strong> - Every new tool costs days of context-loading before it produces anything useful.</p>
              <p><strong>Decision fatigue</strong> - You carry the full mental model because no tool holds it for you.</p>
            </div>
          </div>
        </section>

        <section className={s.sectionCompact} id="access" aria-labelledby="access-title">
          <div className={`${s.wrapper} ${s.grid2}`}>
            <div>
              <h2 id="access-title">How it works</h2>
              <p className={s.heroSub}>Three access points keep memory available wherever you work.</p>
            </div>
            <div className={s.accessPoints}>
              <article className={s.accessItem}>
                <h3>From any AI tool</h3>
                <p>Memory surfaces as a connector inside Claude, ChatGPT, Cursor, and the MCP-compatible clients you already use.</p>
              </article>
              <article className={s.accessItem}>
                <h3>From your workspace</h3>
                <p>Your Notion, Drive, and GitHub stay the source of truth. Memory syncs from them, not around them.</p>
              </article>
              <article className={s.accessItem}>
                <h3>From GitHub</h3>
                <p>Your private memory repo is yours. Portable. Auditable. Never locked in.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={s.sectionCompact} id="infra" aria-labelledby="infra-title">
          <div className={s.wrapper}>
            <div className={s.card}>
              <h2 id="infra-title">Infrastructure model</h2>
              <p>Each client gets a private GitHub repo with per-client isolation and no shared tenancy.</p>
              <p>Your repo stays your source of memory truth and can be audited or moved at any time.</p>
            </div>
          </div>
        </section>

        <section className={s.sectionCompact} id="pricing" aria-labelledby="pricing-title">
          <div className={s.wrapper}>
            <h2 id="pricing-title">Pricing</h2>
            <p className={s.heroSub}>Simple monthly tiers for managed memory operations.</p>
            <div className={s.pricingGrid} role="list" aria-label="Pricing tiers">
              <div className={s.priceCard} role="listitem">
                <h3>Foundation</h3>
                <p className={s.price}>$199/mo</p>
                <p>Core memory setup and maintenance across your current stack.</p>
              </div>
              <div className={s.priceCard} role="listitem">
                <h3>Active Memory</h3>
                <p className={s.price}>$399/mo</p>
                <p>Deeper sync coverage, expanded support, and active memory tuning.</p>
              </div>
              <div className={s.priceCard} role="listitem">
                <h3>Full Intelligence</h3>
                <p className={s.price}>$799/mo</p>
                <p>Full managed memory operations for multi-tool, multi-workflow teams.</p>
              </div>
            </div>
            <p className={s.priceNote}>Beta cohort pricing - founding clients lock in 20% off for life: $159 / $319 / $639.</p>
          </div>
        </section>

        <section className={s.sectionCompact} id="claude-memory" aria-labelledby="claude-memory-title">
          <div className={`${s.wrapper} ${s.notice}`}>
            <h2 id="claude-memory-title">Why not just use Claude Memory?</h2>
            <p>Claude Memory only works in Claude. ChatGPT Memory only in ChatGPT. Cursor doesn&apos;t know either one exists. Memory as a Service works across every AI tool you run - that&apos;s the $199 to $799 you&apos;re paying for. Portable by design. Never locked to one vendor.</p>
          </div>
        </section>

        <section className={s.sectionCompact} aria-labelledby="testimonials-title">
          <div className={s.wrapper}>
            <h2 id="testimonials-title">Customer feedback</h2>
            {/* testimonials: empty until real quotes ship */}
          </div>
        </section>

        <section className={s.cta} id="cta" aria-labelledby="cta-title">
          <div className={s.ctaInner}>
            <span className={s.badge}>Waitlist</span>
            <h2 id="cta-title">Bring persistent memory to your stack</h2>
            <p>Share your current tools and workflow. We will map memory integration and onboard you directly.</p>

            <form action="#waitlist" method="POST" className={s.ctaForm} aria-label="Early access request form">
              <label htmlFor="email-cta" className={s.visuallyHidden}>Email address</label>
              <input type="email" id="email-cta" name="email" placeholder="your@email.com" required />
              <button type="submit" className={`${s.btn} ${s.btnPrimary}`} style={{ flexShrink: 0 }}>
                Join the waitlist
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </form>

            <div className={s.knownDeviations} id="deviations">
              <h3>Known Deviations</h3>
              <ul>
                <li>MaaS positioning is locked to Memory as a Service across this artifact.</li>
                <li>Inline SVG logo symbols are removed in favor of /assets/brand/logo-d.png.</li>
                <li>External Google Fonts links are removed in favor of local /assets/fonts files.</li>
                <li>No fabricated proof blocks are rendered until real customer evidence ships.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className={s.pFooter} role="contentinfo">
        <div className={`${s.wrapper} ${s.footerInner}`}>
          <div className={s.footerBrand}>
            <img src="/assets/brand/logo-d.png" alt="Dade Studio mark" width={40} height={40} />
            <span>dade.studio / Memory as a Service</span>
          </div>
          <p className={s.footerCopy}>© 2026 Dade.Studio - Memory as a Service by Dade Studio. <a href="/bot-privacy">Bot privacy</a></p>
        </div>
      </footer>
    </div>
  );
}
