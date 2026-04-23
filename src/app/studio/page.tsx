"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./studio.module.css";

export default function StudioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      {/* NAV */}
      <header className={styles.siteNav} role="banner">
        <div className={styles.navInner}>
          <Link href="/" className={styles.navLogo} aria-label="Dade Studio home">
            <img src="/assets/brand/logo-d.png" className={styles.navLogoMark} alt="Dade Studio mark" width={36} height={36} />
            dade.studio
          </Link>

          <nav aria-label="Primary navigation">
            <ul className={styles.navLinks} role="list">
              <li>
                <Link href="/work" className="active">
                  Work
                </Link>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="https://maas.dade.studio" target="_blank" rel="noopener noreferrer">
                  MaaS
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.navCta}>
            <Link href="/start" className={`${styles.btn} ${styles.btnPrimary}`}>
              Start a project
            </Link>
          </div>

          <button
            className={styles.navMobileBtn}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation"
        aria-modal="true"
      >
        <div className={styles.mobileMenuInner}>
          <Link href="/work" onClick={closeMenu}>
            Work
          </Link>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="https://maas.dade.studio" target="_blank" rel="noopener noreferrer">
            MaaS
          </a>
          <Link href="/start" onClick={closeMenu} className={styles.mobileMenuCta}>
            Start a project
          </Link>
        </div>
      </div>

      <main id="main">
        {/* HERO */}
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroBg} aria-hidden="true">
            <div className={styles.heroBlobPurple}></div>
          </div>

          <div className={styles.heroInner}>
            <div>
              <div className={styles.heroEyebrow} aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                  <circle cx="5" cy="5" r="5" fill="currentColor" />
                </svg>
                Available for new projects
              </div>

              <h1 className={styles.heroHeadline} id="hero-title">
                Dade.Studio
              </h1>

              <p className={styles.heroBody}>
                Managed AI memory, brand systems, and web experiences for creators, founders, and
                small teams. Built by one person. Maintained so it stays alive.
              </p>

              <div className={styles.heroActions}>
                <Link href="/work" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnXl}`}>
                  See the work
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/start" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLg}`}>
                  Start a project
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div
                className={styles.codeWindow}
                role="img"
                aria-label="Code snippet showing the studio's tech stack"
              >
                <div className={styles.codeTitlebar}>
                  <div className={styles.codeDots}>
                    <div className={`${styles.dot} ${styles.dotR}`}></div>
                    <div className={`${styles.dot} ${styles.dotY}`}></div>
                    <div className={`${styles.dot} ${styles.dotG}`}></div>
                  </div>
                  <span className={styles.codeFilename}>studio.config.ts</span>
                </div>
                <pre className={styles.codeBody}>
                  <span className={styles.cComment}>{"// studio.config.ts"}</span>
                  {"\n"}
                  <span className={styles.cKeyword}>export const</span>{" "}
                  <span className={styles.cFn}>studio</span> = {"{"}
                  {"\n  "}
                  <span className={styles.cProp}>owner</span>:{" "}
                  <span className={styles.cString}>{"'Dade'"}</span>,{"\n  "}
                  <span className={styles.cProp}>primary</span>:{" "}
                  <span className={styles.cString}>{"'Memory as a Service'"}</span>,{"\n  "}
                  <span className={styles.cProp}>stack</span>: [
                  <span className={styles.cString}>{"'Notion'"}</span>,{" "}
                  <span className={styles.cString}>{"'GitHub'"}</span>,{" "}
                  <span className={styles.cString}>{"'Cursor'"}</span>,{" "}
                  <span className={styles.cString}>{"'Supabase'"}</span>],{"\n  "}
                  <span className={styles.cProp}>voice</span>:{" "}
                  <span className={styles.cString}>{"'Calm. Specific. Built to last.'"}</span>,
                  {"\n  "}
                  <span className={styles.cProp}>booking</span>:{" "}
                  <span className={styles.cString}>{"'https://dade.studio/start'"}</span>,{"\n"}
                  {"}"} <span className={styles.cKeyword}>as const</span>;
                </pre>
              </div>
            </div>
          </div>

          <div className={styles.scrollHint} aria-hidden="true">
            <div className={styles.scrollBar}></div>
            <span>Scroll</span>
          </div>
        </section>

        {/* TICKER */}
        <div className={styles.tickerWrap} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {[0, 1].map((dup) => (
              <div key={dup} style={{ display: "contents" }}>
                <span className={styles.tickerItem}>
                  <span
                    className={styles.tickerDot}
                    style={{ background: "var(--color-brand-crimson)" }}
                  ></span>
                  Brand Identity
                </span>
                <span className={styles.tickerItem}>
                  <span
                    className={styles.tickerDot}
                    style={{ background: "var(--color-brand-cyan)" }}
                  ></span>
                  Web Design
                </span>
                <span className={styles.tickerItem}>
                  <span
                    className={styles.tickerDot}
                    style={{ background: "var(--color-brand-yellow)" }}
                  ></span>
                  AI Tooling
                </span>
                <span className={styles.tickerItem}>
                  <span
                    className={styles.tickerDot}
                    style={{ background: "var(--color-brand-purple)" }}
                  ></span>
                  Content Strategy
                </span>
                <span className={styles.tickerItem}>
                  <span
                    className={styles.tickerDot}
                    style={{ background: "var(--color-brand-crimson)" }}
                  ></span>
                  Motion Design
                </span>
                <span className={styles.tickerItem}>
                  <span
                    className={styles.tickerDot}
                    style={{ background: "var(--color-brand-cyan)" }}
                  ></span>
                  Merch Design
                </span>
                <span className={styles.tickerItem}>
                  <span
                    className={styles.tickerDot}
                    style={{ background: "var(--color-brand-yellow)" }}
                  ></span>
                  Marketing Systems
                </span>
                <span className={styles.tickerItem}>
                  <span
                    className={styles.tickerDot}
                    style={{ background: "var(--color-brand-purple)" }}
                  ></span>
                  Memory Systems
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className={styles.section} id="services" aria-labelledby="services-title">
          <div className={styles.sectionEyebrow}>What I do</div>
          <div className={styles.servicesHeader}>
            <h2 className={styles.sectionTitle} id="services-title">
              Three ways to
              <br />
              <em>work together.</em>
            </h2>
            <a
              href="#contact"
              className={`${styles.btn} ${styles.btnSecondary} ${styles.servicesHeaderCta}`}
            >
              Work with me
            </a>
          </div>

          <div className={styles.servicesGrid}>
            {/* Memory System */}
            <div className={styles.serviceCard}>
              <div
                className={styles.serviceCardBg}
                style={{ background: "var(--color-brand-purple)" }}
              ></div>
              <span className={styles.serviceNum}>01</span>
              <div
                className={styles.serviceIcon}
                style={{ background: "var(--color-ds-accent-purple-bg)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-brand-purple)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M8 7h8M8 11h8M8 15h5" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Memory System</h3>
              <p className={styles.serviceDesc}>
                Your AI, finally working like a coworker. Managed AI memory that gives every tool
                you use persistent context - your brand, your business, your history. $199-$799/mo.
              </p>
              <div className={styles.serviceTags}>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>Notion</span>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>GitHub</span>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>Cursor</span>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>Supabase</span>
              </div>
              <a href="https://maas.dade.studio" target="_blank" rel="noopener noreferrer" className={styles.serviceLink} style={{ color: "var(--color-brand-cyan)" }}>
                Explore Memory as a Service
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Web + Brand Build */}
            <div className={styles.serviceCard}>
              <div
                className={styles.serviceCardBg}
                style={{ background: "var(--color-brand-cyan)" }}
              ></div>
              <span className={styles.serviceNum}>02</span>
              <div
                className={styles.serviceIcon}
                style={{ background: "var(--color-ds-accent-cyan-bg)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-brand-cyan)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Web + Brand Build</h3>
              <p className={styles.serviceDesc}>
                Sites and identity systems that don&apos;t rot. Fixed-scope builds on a modern stack
                (Next.js, Tailwind, shadcn/ui). Shipped in weeks, not months.
              </p>
              <div className={styles.serviceTags}>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>Next.js</span>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>Tailwind</span>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>shadcn/ui</span>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>Brand systems</span>
              </div>
              <Link
                href="/work"
                className={styles.serviceLink}
                style={{ color: "var(--color-brand-cyan)" }}
              >
                View selected work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Studio Retainer */}
            <div className={styles.serviceCard}>
              <div
                className={styles.serviceCardBg}
                style={{ background: "var(--color-brand-crimson)" }}
              ></div>
              <span className={styles.serviceNum}>03</span>
              <div
                className={styles.serviceIcon}
                style={{ background: "var(--color-ds-accent-crimson-bg)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-brand-crimson)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Studio Retainer</h3>
              <p className={styles.serviceDesc}>
                Ongoing design + AI ops, one partner. Monthly retainer for teams who want a calm,
                consistent creative and technical partner. By application.
              </p>
              <div className={styles.serviceTags}>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>Design systems</span>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>Web maintenance</span>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>AI workflows</span>
                <span className={`${styles.badge} ${styles.badgeNeutral}`}>Monthly cadence</span>
              </div>
              <Link
                href="/start"
                className={styles.serviceLink}
                style={{ color: "var(--color-brand-crimson)" }}
              >
                Apply via Start
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section
          className={`${styles.section} ${styles.sectionWorkPt0}`}
          id="work"
          aria-labelledby="work-title"
        >
          <div className={styles.workHeader}>
            <div>
              <div className={styles.sectionEyebrow}>Selected work</div>
              <h2 className={styles.sectionTitle} id="work-title">
                Projects that
                <br />
                <em>matter.</em>
              </h2>
            </div>
            <Link href="/work" className={`${styles.btn} ${styles.btnSecondary}`}>
              All projects
            </Link>
          </div>

          <div className={styles.workGrid} role="list">
            <div className={`${styles.workCard} ${styles.span8}`} role="listitem">
              <Link
                href="/work/wavefront"
                className={styles.workItem}
                aria-label="Wavefront Recordings - brand identity case study"
              >
                <div className={`${styles.workThumb} ${styles.workThumbWide} ${styles.gradWF}`}>
                  <div className={styles.workThumbInner}>WF</div>
                </div>
                <div className={styles.workMeta}>
                  <span className={styles.workClient}>Wavefront Recordings</span>
                  <h3 className={styles.workTitle}>
                    Full brand identity for an indie electronic label
                  </h3>
                  <div className={styles.workTags}>
                    <span className={`${styles.badge} ${styles.badgeCrimson}`}>Branding</span>
                    <span className={`${styles.badge} ${styles.badgeNeutral}`}>Logo</span>
                    <span className={`${styles.badge} ${styles.badgeNeutral}`}>Type system</span>
                  </div>
                  <span className={styles.workArrow}>
                    View case study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            <div className={`${styles.workCard} ${styles.span4}`} role="listitem">
              <Link
                href="/work/prism"
                className={styles.workItem}
                aria-label="Prism Studio - marketing site case study"
              >
                <div
                  className={`${styles.workThumb} ${styles.workThumbSquare} ${styles.gradPS}`}
                >
                  <div className={`${styles.workThumbInner} ${styles.workThumbInnerSm}`}>PS</div>
                </div>
                <div className={styles.workMeta}>
                  <span className={styles.workClient}>Prism Studio</span>
                  <h3 className={styles.workTitle}>Marketing site + CMS</h3>
                  <div className={styles.workTags}>
                    <span className={`${styles.badge} ${styles.badgeCyan}`}>Web Design</span>
                  </div>
                  <span className={styles.workArrow}>
                    View case
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            <div className={`${styles.workCard} ${styles.span5}`} role="listitem">
              <Link
                href="/work/maas"
                className={styles.workItem}
                aria-label="MaaS - product landing page case study"
              >
                <div className={`${styles.workThumb} ${styles.gradMaaS}`}>
                  <div className={styles.workThumbInner}>MaaS</div>
                </div>
                <div className={styles.workMeta}>
                  <span className={styles.workClient}>Dade.Studio internal</span>
                  <h3 className={styles.workTitle}>
                    MaaS - Memory as a Service platform design
                  </h3>
                  <div className={styles.workTags}>
                    <span className={`${styles.badge} ${styles.badgePurple}`}>AI Tools</span>
                    <span className={`${styles.badge} ${styles.badgeNeutral}`}>Web Design</span>
                  </div>
                  <span className={styles.workArrow}>
                    View case study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            <div className={`${styles.workCard} ${styles.span7}`} role="listitem">
              <Link
                href="/work/ctrl"
                className={styles.workItem}
                aria-label="CTRL Magazine - content retainer case study"
              >
                <div className={`${styles.workThumb} ${styles.workThumbWide} ${styles.gradCTRL}`}>
                  <div className={`${styles.workThumbInner} ${styles.workThumbInnerDark}`}>
                    CTRL
                  </div>
                </div>
                <div className={styles.workMeta}>
                  <span className={styles.workClient}>CTRL Magazine</span>
                  <h3 className={styles.workTitle}>
                    Ongoing content retainer - social, email, editorial design
                  </h3>
                  <div className={styles.workTags}>
                    <span className={`${styles.badge} ${styles.badgeYellow}`}>Content</span>
                    <span className={`${styles.badge} ${styles.badgeNeutral}`}>12 months</span>
                  </div>
                  <span className={styles.workArrow}>
                    View case study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <div className={styles.aboutStrip} id="about">
          <div className={styles.aboutInner}>
            <div className={styles.aboutPortrait} aria-hidden="true">
              <div className={styles.aboutPortraitGrid}></div>
              <img src="/assets/brand/logo-d.png" className={styles.aboutPortraitLogo} alt="Dade Studio mark on portrait panel" width={100} height={100} />
              <div className={styles.aboutPortraitLabel}>
                Dade - Builder, Creator, Technologist
              </div>
            </div>

            <div>
              <div className={styles.aboutOverline}>About the studio</div>
              <h2 className={styles.aboutHeading}>
                I design and I code.
                <br />
                Both. Always.
              </h2>
              <p className={styles.aboutPara}>
                The studio runs on the idea that the line between design and engineering is a
                billing artifact, not a real boundary. When the same person who designs the system
                also builds it, the gaps close.
              </p>
              <p className={styles.aboutPara}>
                I&apos;ve spent the better part of a decade doing brand work for indie labels,
                content creators, and small tech teams - while also shipping AI infrastructure,
                managed memory across tools, and building the workflows I use in client work.
                Everything here is something I&apos;ve actually run in production.
              </p>
              <p className={styles.aboutPara}>
                Currently accepting new projects. Typical scope: 3-12 weeks.
              </p>

              <div className={styles.aboutSkills} aria-label="Technical skills">
                <span className={styles.skillTag}>Brand identity</span>
                <span className={styles.skillTag}>Web design</span>
                <span className={styles.skillTag}>Next.js</span>
                <span className={styles.skillTag}>Claude API</span>
                <span className={styles.skillTag}>Open WebUI</span>
                <span className={styles.skillTag}>Docker</span>
                <span className={styles.skillTag}>Figma</span>
                <span className={styles.skillTag}>Squarespace</span>
                <span className={styles.skillTag}>Notion</span>
                <span className={styles.skillTag}>GitHub</span>
                <span className={styles.skillTag}>Cursor</span>
                <span className={styles.skillTag}>Supabase</span>
              </div>

              <a href="#contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
                Start a project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <section className={styles.section} aria-labelledby="process-title">
          <div className={styles.sectionEyebrow}>How it works</div>
          <h2 className={styles.sectionTitle} id="process-title">
            No mystery. No
            <br />
            <em>agency theater.</em>
          </h2>
          <p className={styles.sectionBody}>
            Clear scopes, direct communication, working files handed over at the end. You know what
            you&apos;re getting before it starts.
          </p>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div
                className={styles.processNum}
                style={{ color: "var(--color-brand-crimson)" }}
                aria-hidden="true"
              >
                01
              </div>
              <h3 className={styles.processTitle}>Brief + scope</h3>
              <p className={styles.processDesc}>
                We define what you actually need - not the maximalist version. I write a clear
                scope document and price it honestly before any money changes hands.
              </p>
            </div>
            <div className={styles.processStep}>
              <div
                className={styles.processNum}
                style={{ color: "var(--color-brand-cyan)" }}
                aria-hidden="true"
              >
                02
              </div>
              <h3 className={styles.processTitle}>Strategy first</h3>
              <p className={styles.processDesc}>
                Before pixels: positioning, audience, and reference. The work you&apos;ll see in
                week four is grounded in decisions made in week one.
              </p>
            </div>
            <div className={styles.processStep}>
              <div
                className={styles.processNum}
                style={{ color: "var(--color-brand-yellow)" }}
                aria-hidden="true"
              >
                03
              </div>
              <h3 className={styles.processTitle}>Design + build</h3>
              <p className={styles.processDesc}>
                Iteration in the open. You see progress weekly, not a finished comp after six weeks
                of silence. Feedback is structured, revisions are scoped.
              </p>
            </div>
            <div className={styles.processStep}>
              <div
                className={styles.processNum}
                style={{ color: "var(--color-brand-purple)" }}
                aria-hidden="true"
              >
                04
              </div>
              <h3 className={styles.processTitle}>Handoff + launch</h3>
              <p className={styles.processDesc}>
                You get the working files, the system documentation, and a launch-ready build. No
                dependency on me to make future edits.
              </p>
            </div>
          </div>
        </section>

        {/* WORK CROSS-LINK */}
        <section className={`${styles.sectionSm} ${styles.workCross}`} aria-labelledby="work-cross-title">
          <div className={styles.workCrossInner}>
            <p className={styles.sectionBody} id="work-cross-title" style={{ maxWidth: "none", margin: 0 }}>
              Case studies and testimonials live on the{" "}
              <Link href="/work" className={styles.workCrossLink}>
                Work
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* KNOWN DEVIATIONS */}
        <section className={styles.sectionSm} id="known-deviations" aria-labelledby="deviations-title">
          <div className={styles.deviationsInner}>
            <div className={styles.sectionEyebrow}>Appendix</div>
            <h2 className={styles.sectionTitle} id="deviations-title">
              Known deviations
            </h2>
            <p className={styles.sectionBody} style={{ marginBottom: "var(--s6)" }}>
              Items called out here are intentional in this static artifact; reconcile before
              porting to production.
            </p>
            <ul className={styles.deviationsList}>
              <li>
                <strong>MaaS = Memory as a Service.</strong> Replace any leftover vendor-swap or
                prompt-routing language with copy about persistent memory across your tools.
              </li>
              <li>
                <strong>Stack narrative.</strong> Business-facing stack is Notion, GitHub, Cursor,
                and Supabase - not private mesh or VPN tooling.
              </li>
              <li>
                <strong>Logo and fonts.</strong> Canonical mark is{" "}
                <code>/assets/brand/logo-d.png</code>; body fonts load from{" "}
                <code>/assets/fonts/</code> only.
              </li>
              <li>
                <strong>Selected work tiles.</strong> Case study blurbs in the grid are placeholders
                until each /work route ships final copy.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaBand} id="contact" aria-labelledby="cta-title">
          <div className={styles.ctaBandBg} aria-hidden="true"></div>
          <div className={styles.ctaBandNoise} aria-hidden="true"></div>
          <div className={styles.ctaInner}>
            <div className={styles.ctaLabel}>Ready when you are</div>
            <h2 className={styles.ctaHeading} id="cta-title">
              Let&apos;s build
              <br />
              <em>something real.</em>
            </h2>
            <p className={styles.ctaSub}>
              Tell me what you&apos;re working on. I&apos;ll respond within one business day with
              honest thoughts on scope, timeline, and fit.
            </p>
            <div className={styles.ctaActions}>
              <a href="mailto:hello@dade.studio" className={styles.btnCtaPrimary}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@dade.studio
              </a>
              <a href="https://cal.com/dade" target="_blank" rel="noopener noreferrer" className={styles.btnCtaSecondary}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book a call
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.siteFooter} role="contentinfo">
        <div className={styles.footerInner}>
          <div>
            <div className={styles.footerLogo}>
              <img src="/assets/brand/logo-d.png" alt="Dade Studio mark" width={32} height={32} />
              <span className={styles.footerLogoText}>dade.studio</span>
            </div>
            <nav className={styles.footerLinks} aria-label="Footer links">
              <Link href="/work">Work</Link>
              <Link href="/start">Start a project</Link>
              <a href="https://maas.dade.studio" target="_blank" rel="noopener noreferrer">
                maas.dade.studio
              </a>
              <a href="https://retro.dade.studio" target="_blank" rel="noopener noreferrer">
                retro.dade.studio
              </a>
              <a href="https://blog.dade.studio" target="_blank" rel="noopener noreferrer">
                blog.dade.studio
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>&copy; 2026 Dade.Studio - All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
