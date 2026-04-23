"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import s from "./case-study.module.css";

function ThemeToggleBtn() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
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
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

const TOC = [
  { id: "challenge", num: "01", label: "The challenge" },
  { id: "process", num: "02", label: "Process" },
  { id: "identity", num: "03", label: "Identity system" },
  { id: "type", num: "04", label: "Typography" },
  { id: "applications", num: "05", label: "Applications" },
  { id: "outcomes", num: "06", label: "Outcomes" },
  { id: "deviations", num: "07", label: "Known deviations" },
];

export default function CaseStudyPage() {
  const fillRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string>("challenge");

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      if (fillRef.current) fillRef.current.style.width = Math.min(100, pct).toFixed(1) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-64px 0px -60% 0px", threshold: 0 }
    );
    TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={s.csRoot}>
      <a className={s.skipLink} href="#main">Skip to main content</a>

      <header className={s.siteNav} role="banner">
        <div className={s.navInner}>
          <Link href="/" className={s.navLogo} aria-label="Dade Studio home">
            <img src="/assets/brand/logo-d.png" alt="Dade Studio mark" width={40} height={40} decoding="async" />
            dade.studio
          </Link>

          <a href="/work" className={s.navBack} aria-label="Back to all work">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            All work
          </a>

          <div className={s.navRight}>
            <ThemeToggleBtn />
            <a href="mailto:hello@dade.studio" className={`${s.btn} ${s.btnPrimary}`}>Start a project</a>
          </div>
        </div>
      </header>

      <div className={s.progressBar} aria-hidden="true">
        <div className={s.progressFill} ref={fillRef} />
      </div>

      <main id="main">
        <section className={s.csHero} aria-labelledby="cs-title">
          <div className={s.csHeroBg} aria-hidden="true" />
          <div className={s.csHeroGrid} aria-hidden="true" />
          <div className={s.csHeroGhost} aria-hidden="true">WF</div>

          <p className={s.csHeroRibbon} role="note">Template / Speculative work - not a real client engagement.</p>

          <div className={s.csHeroInner}>
            <a href="/work" className={s.csBackCrumb}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
              Work
            </a>

            <div className={s.csHeroTags}>
              <span className={`${s.badge} ${s.badgeCrimson}`}>Brand Identity</span>
              <span className={`${s.badge} ${s.badgeWhite}`}>2024</span>
              <span className={`${s.badge} ${s.badgeWhite}`}>4 weeks</span>
            </div>

            <h1 className={`${s.csHeroTitle} ${s.fadeUp}`} id="cs-title">
              Wavefront Recordings
            </h1>

            <p className={`${s.csHeroDesc} ${s.fadeUp} ${s.delay1}`}>
              A full brand identity system for an indie electronic label - from positioning strategy to production-ready assets. Built to hold up at any size, on any surface, for years.
            </p>
          </div>
        </section>

        <div className={s.csLayout}>
          <article className={s.csArticle}>
            <div className={s.csInlineMeta} aria-label="Project details">
              <div className={s.csInlineMetaCell}>
                <span className={s.csInlineMetaLabel}>Client</span>
                <span className={s.csInlineMetaValue}>Wavefront Recordings</span>
                <span className={s.csInlineMetaSub}>Brooklyn, NY</span>
              </div>
              <div className={s.csInlineMetaCell}>
                <span className={s.csInlineMetaLabel}>Timeline</span>
                <span className={s.csInlineMetaValue}>4 weeks</span>
                <span className={s.csInlineMetaSub}>Feb - Mar 2024</span>
              </div>
              <div className={s.csInlineMetaCell}>
                <span className={s.csInlineMetaLabel}>Deliverables</span>
                <span className={s.csInlineMetaValue}>Logo system</span>
                <span className={s.csInlineMetaSub}>Color, type, usage guide, asset kit</span>
              </div>
              <div className={s.csInlineMetaCell}>
                <span className={s.csInlineMetaLabel}>Tools</span>
                <span className={s.csInlineMetaValue}>Figma, Illustrator</span>
                <span className={s.csInlineMetaSub}>Notion for documentation</span>
              </div>
            </div>

            {/* CHALLENGE */}
            <section className={s.csSection} id="challenge" aria-labelledby="challenge-title">
              <div className={s.csSectionEyebrow}>01 / The challenge</div>
              <h2 className={s.csSectionTitle} id="challenge-title">A label without a visual language</h2>

              <p className={s.prose}>
                Wavefront had been releasing music for two years on a handshake identity - a wordmark their
                founder designed in Canva, a color palette borrowed from a reference they&apos;d seen elsewhere,
                and no documentation. When the label started getting press and needed to show up on streaming
                platforms, press kits, merchandise, and social simultaneously, nothing held together.
              </p>

              <p className={s.prose}>
                The brief was direct: build something that reads as independent and credible, not polished
                and corporate. Electronic music culture is fluent in design - fans and press will notice if
                the visual identity doesn&apos;t match the music.
              </p>

              <div className={`${s.csCallout} ${s.csCalloutBrand}`}>
                <svg className={s.csCalloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--brand-crimson)" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
                <div>
                  <div className={s.csCalloutTitle} style={{ color: "var(--brand-crimson)" }}>The core constraint</div>
                  <div className={s.csCalloutBody}>The brand needed to work in black-and-white for vinyl pressings and press use, in full color for digital and merchandise, and as a single mark for social profile thumbnails - all without compromise at any scale.</div>
                </div>
              </div>

              <p className={s.prose}>
                The constraint that actually made the project: the label&apos;s aesthetic sits at the
                intersection of Detroit techno, ambient, and experimental club music. The identity needed to
                carry that cultural weight without being on-the-nose about genre signifiers. No waveforms. No
                speaker cones. No things that say &quot;music&quot; the way clip art says music.
              </p>
            </section>

            {/* PROCESS */}
            <section className={s.csSection} id="process" aria-labelledby="process-title">
              <div className={s.csSectionEyebrow}>02 / Process</div>
              <h2 className={s.csSectionTitle} id="process-title">Four weeks, no surprises</h2>

              <p className={s.prose}>
                The project ran in four tight weeks. No exploratory phase that quietly extends into a fifth
                week. The scope was defined in the brief document before any money moved.
              </p>

              <div className={s.processTimeline} aria-label="Project timeline">
                <div className={s.timelineItem}>
                  <div className={s.timelineDot} style={{ background: "var(--brand-crimson)" }}>01</div>
                  <div>
                    <div className={s.timelineWeek}>Week 1</div>
                    <h3 className={s.timelineTitle}>Strategy + positioning</h3>
                    <p className={s.timelineDesc}>Brand audit of the existing assets, competitive review of five comparable labels, and a positioning workshop with the founder. The output was a one-page brand brief: the three words the identity had to communicate, the one thing it had to avoid, and the specific cultural references to pressure-test against.</p>
                    <div className={s.timelineDeliverables}>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Brand brief</span>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Competitive audit</span>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Reference set</span>
                    </div>
                  </div>
                </div>

                <div className={s.timelineItem}>
                  <div className={s.timelineDot} style={{ background: "var(--brand-purple)" }}>02</div>
                  <div>
                    <div className={s.timelineWeek}>Week 2</div>
                    <h3 className={s.timelineTitle}>Logo exploration</h3>
                    <p className={s.timelineDesc}>Three directions, each built from a different conceptual root. Not variations on a theme - genuine alternatives. The directions were presented cold, without narration, to see what landed without explanation. One was eliminated immediately. One needed iteration. One was right.</p>
                    <div className={s.timelineDeliverables}>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>3 logo directions</span>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Presentation deck</span>
                    </div>
                  </div>
                </div>

                <div className={s.timelineItem}>
                  <div className={s.timelineDot} style={{ background: "var(--brand-cyan)" }}>03</div>
                  <div>
                    <div className={s.timelineWeek}>Week 3</div>
                    <h3 className={s.timelineTitle}>System build</h3>
                    <p className={s.timelineDesc}>Logo refinement plus full system build: color palette, type selection, spacing principles, usage rules, and the asset kit structure. Everything documented in Notion as it was built, not retrospectively.</p>
                    <div className={s.timelineDeliverables}>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Final logo</span>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Color system</span>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Type system</span>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Usage rules</span>
                    </div>
                  </div>
                </div>

                <div className={s.timelineItem}>
                  <div className={s.timelineDot} style={{ background: "var(--brand-yellow)" }}>04</div>
                  <div>
                    <div className={s.timelineWeek}>Week 4</div>
                    <h3 className={s.timelineTitle}>Applications + handoff</h3>
                    <p className={s.timelineDesc}>Brand guide document, application mockups across key touchpoints, production files in every required format. The founder received working Figma files, not locked PDFs - so their designer could continue building inside the system.</p>
                    <div className={s.timelineDeliverables}>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Brand guide PDF</span>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Figma source</span>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Asset kit</span>
                      <span className={`${s.badge} ${s.badgeNeutral}`}>Application mockups</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* IDENTITY */}
            <section className={s.csSection} id="identity" aria-labelledby="identity-title">
              <div className={s.csSectionEyebrow}>03 / Identity system</div>
              <h2 className={s.csSectionTitle} id="identity-title">The mark and the palette</h2>

              <p className={s.prose}>
                The logo landed on a geometric interpretation of frequency - not a literal waveform, but a
                grid of intersecting horizontal bands that implies movement and transmission without spelling
                it out. It works as a wordmark, a standalone symbol, and at 32x32px as a favicon.
              </p>

              <div className={s.csImg} style={{ margin: "var(--s8) 0" }} role="img" aria-label="Wavefront Recordings logo on dark background">
                <div className={s.csImgInner} style={{ background: "oklch(12% 0.025 300)", height: 260, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 3, flexDirection: "column" }} aria-hidden="true">
                    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                      <div style={{ width: 120, height: 3, background: "#F0243E", borderRadius: 2 }} />
                      <div style={{ width: 20, height: 3, background: "#F0243E", borderRadius: 2, opacity: 0.4 }} />
                    </div>
                    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                      <div style={{ width: 60, height: 3, background: "#F0243E", borderRadius: 2, opacity: 0.6 }} />
                      <div style={{ width: 80, height: 3, background: "#F0243E", borderRadius: 2 }} />
                      <div style={{ width: 40, height: 3, background: "#F0243E", borderRadius: 2, opacity: 0.3 }} />
                    </div>
                    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                      <div style={{ width: 40, height: 3, background: "#F0243E", borderRadius: 2, opacity: 0.3 }} />
                      <div style={{ width: 100, height: 3, background: "#F0243E", borderRadius: 2 }} />
                      <div style={{ width: 40, height: 3, background: "#F0243E", borderRadius: 2, opacity: 0.5 }} />
                    </div>
                    <div style={{ display: "flex", gap: 3, alignItems: "center", marginTop: 16 }}>
                      <div style={{ fontSize: "clamp(1.2rem,3vw,2rem)", fontWeight: 900, letterSpacing: "0.18em", color: "white", textTransform: "uppercase" }}>WAVEFRONT</div>
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.3em", color: "oklch(55% 0.01 240)", textTransform: "uppercase" }}>RECORDINGS</div>
                  </div>
                </div>
                <div className={s.csImgCaption}>Primary wordmark - dark background application</div>
              </div>

              <p className={s.prose}>
                The palette was built around a core tension: the warmth of analog recording against the
                precision of electronic production. A near-black with warm undertones as the primary surface,
                a warm off-white for text, and a single alert color - a deep amber - for the cases where the
                brand needs to signal something.
              </p>

              <div className={s.brandPalette} role="list" aria-label="Wavefront brand palette">
                <div className={s.paletteSwatch} role="listitem">
                  <div className={s.paletteColor} style={{ background: "oklch(12% 0.025 300)" }} />
                  <div className={s.paletteInfo}>
                    <div className={s.paletteName}>Deep night</div>
                    <div className={s.paletteHex}>#0D0A14</div>
                    <div className={s.paletteRole}>Primary surface</div>
                  </div>
                </div>
                <div className={s.paletteSwatch} role="listitem">
                  <div className={s.paletteColor} style={{ background: "#F0243E" }} />
                  <div className={s.paletteInfo}>
                    <div className={s.paletteName}>Signal red</div>
                    <div className={s.paletteHex}>#F0243E</div>
                    <div className={s.paletteRole}>Accent / alert</div>
                  </div>
                </div>
                <div className={s.paletteSwatch} role="listitem">
                  <div className={s.paletteColor} style={{ background: "oklch(92% 0.008 60)" }} />
                  <div className={s.paletteInfo}>
                    <div className={s.paletteName}>Warm white</div>
                    <div className={s.paletteHex}>#F5F2EB</div>
                    <div className={s.paletteRole}>Primary text</div>
                  </div>
                </div>
                <div className={s.paletteSwatch} role="listitem">
                  <div className={s.paletteColor} style={{ background: "oklch(42% 0.02 260)" }} />
                  <div className={s.paletteInfo}>
                    <div className={s.paletteName}>Studio gray</div>
                    <div className={s.paletteHex}>#4A4A56</div>
                    <div className={s.paletteRole}>Secondary text</div>
                  </div>
                </div>
                <div className={s.paletteSwatch} role="listitem">
                  <div className={s.paletteColor} style={{ background: "oklch(72% 0.14 60)" }} />
                  <div className={s.paletteInfo}>
                    <div className={s.paletteName}>Amber</div>
                    <div className={s.paletteHex}>#D4913A</div>
                    <div className={s.paletteRole}>Warm accent</div>
                  </div>
                </div>
              </div>

              <div className={s.pullQuote} aria-label="Client testimonial">
                <p className={s.pullQuoteText}>The palette was the thing I didn&apos;t know I needed. I&apos;d been picking colors project by project. Having a system that tells you which amber to use - and why - changed how the whole label presents itself.</p>
                <div className={s.pullQuoteAttr}>Jordan M. - Founder, Wavefront Recordings</div>
              </div>
            </section>

            {/* TYPE */}
            <section className={s.csSection} id="type" aria-labelledby="type-title">
              <div className={s.csSectionEyebrow}>04 / Typography</div>
              <h2 className={s.csSectionTitle} id="type-title">The type system</h2>

              <p className={s.prose}>
                The brief called for a type system that read as contemporary and technically precise - not
                retro, not futuristic in a sci-fi way, just correct. Two typefaces: a grotesque for display
                and UI, a mono for metadata, catalog numbers, and technical information.
              </p>

              <div className={s.brandTypeSpecimen} role="img" aria-label="Wavefront brand typography specimen">
                <div className={s.btsHeader}>
                  <span>Display / Neue Haas Grotesk</span>
                  <span>wght 900 &bull; ls -0.04em</span>
                </div>
                <div className={s.btsBody}>
                  <div className={s.btsDisplay}>TRANSMISSION<br />NO. 001</div>
                  <div className={s.btsSub}>Electronic music for the present tense. Releases monthly from Brooklyn.</div>
                  <div className={s.btsMono}>CAT# WFR-2024-001 &bull; FORMAT: DIGITAL + 12&quot; VINYL &bull; BPM: 128</div>
                </div>
              </div>

              <div className={s.csImg2up} role="list" aria-label="Type in application examples">
                <div role="listitem">
                  <div className={s.csImg} style={{ height: 200, background: "oklch(12% 0.025 300)" }}>
                    <div className={s.csImgInner} style={{ height: "100%", flexDirection: "column", gap: 8, padding: "var(--s6)" }}>
                      <div style={{ fontSize: "var(--text-3xl)", fontWeight: 900, letterSpacing: "-0.03em", color: "white", lineHeight: 1 }}>WFR-2024</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#F0243E", letterSpacing: "0.2em", textTransform: "uppercase" }}>New release</div>
                    </div>
                  </div>
                  <div className={s.csImgCaption}>Social card - dark</div>
                </div>
                <div role="listitem">
                  <div className={s.csImg} style={{ height: 200, background: "oklch(92% 0.008 60)" }}>
                    <div className={s.csImgInner} style={{ height: "100%", flexDirection: "column", gap: 8, padding: "var(--s6)" }}>
                      <div style={{ fontSize: "var(--text-3xl)", fontWeight: 900, letterSpacing: "-0.03em", color: "oklch(12% 0.025 300)", lineHeight: 1 }}>WAVEFRONT</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "oklch(42% 0.02 260)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Recordings</div>
                    </div>
                  </div>
                  <div className={s.csImgCaption}>Press kit - light</div>
                </div>
              </div>

              <div className={`${s.csCallout} ${s.csCalloutInfo}`}>
                <svg className={s.csCalloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--brand-cyan)" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                <div>
                  <div className={s.csCalloutTitle} style={{ color: "var(--brand-cyan)" }}>Type decision rationale</div>
                  <div className={s.csCalloutBody}>The mono typeface does double duty: it carries catalog numbers and technical metadata at small sizes while also functioning as a design element in its own right at large sizes. Electronic music culture already reads mono as a meaningful signal - it references both equipment displays and early computer interfaces that shaped the aesthetic.</div>
                </div>
              </div>
            </section>

            {/* APPLICATIONS */}
            <section className={s.csSection} id="applications" aria-labelledby="applications-title">
              <div className={s.csSectionEyebrow}>05 / Applications</div>
              <h2 className={s.csSectionTitle} id="applications-title">The system in the wild</h2>

              <p className={s.prose}>
                The identity was pressure-tested across the touchpoints that matter most for an independent
                label: streaming platform profiles, press kits, merchandise, vinyl sleeves, and social. Each
                context revealed something the system needed to handle that wasn&apos;t in the original
                brief.
              </p>

              <div className={s.appGrid} role="list" aria-label="Brand applications">
                <div className={s.appCard} role="listitem">
                  <div className={s.appThumb} style={{ background: "oklch(12% 0.025 300)" }}>
                    <div className={s.appThumbBg} aria-hidden="true" />
                    <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                      <div style={{ width: 64, height: 64, borderRadius: 12, background: "#F0243E", margin: "0 auto var(--s2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.03em" }}>WF</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "oklch(60% 0.01 240)", letterSpacing: "0.1em" }}>STREAMING PROFILE</div>
                    </div>
                  </div>
                  <div className={s.appLabel}>
                    <div className={s.appName}>Streaming profile</div>
                    <div className={s.appType}>Spotify / Apple Music</div>
                  </div>
                </div>

                <div className={s.appCard} role="listitem">
                  <div className={s.appThumb} style={{ background: "linear-gradient(135deg,oklch(12% 0.025 300),oklch(22% 0.04 290))" }}>
                    <div className={s.appThumbBg} aria-hidden="true" />
                    <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                      <div style={{ fontSize: "var(--text-2xl)", fontWeight: 900, letterSpacing: "0.05em", color: "white", textTransform: "uppercase" }}>WAVE<br />FRONT</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#F0243E", letterSpacing: "0.2em", marginTop: 8 }}>REC.</div>
                    </div>
                  </div>
                  <div className={s.appLabel}>
                    <div className={s.appName}>Vinyl sleeve</div>
                    <div className={s.appType}>12&quot; gatefold</div>
                  </div>
                </div>

                <div className={s.appCard} role="listitem">
                  <div className={s.appThumb} style={{ background: "oklch(92% 0.008 60)" }}>
                    <div className={s.appThumbBg} style={{ backgroundImage: "linear-gradient(oklch(0% 0 0 / 0.04) 1px,transparent 1px),linear-gradient(90deg,oklch(0% 0 0 / 0.04) 1px,transparent 1px)" }} aria-hidden="true" />
                    <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "var(--s4)" }}>
                      <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "oklch(42% 0.02 260)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>PRESS KIT 2024</div>
                      <div style={{ fontSize: "var(--text-xl)", fontWeight: 900, letterSpacing: "-0.02em", color: "oklch(12% 0.025 300)" }}>WAVEFRONT</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#F0243E", letterSpacing: "0.2em", textTransform: "uppercase" }}>RECORDINGS</div>
                    </div>
                  </div>
                  <div className={s.appLabel}>
                    <div className={s.appName}>Press kit cover</div>
                    <div className={s.appType}>PDF / digital</div>
                  </div>
                </div>

                <div className={s.appCard} role="listitem">
                  <div className={s.appThumb} style={{ background: "oklch(18% 0.03 290)" }}>
                    <div className={s.appThumbBg} aria-hidden="true" />
                    <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                      <div style={{ width: 80, height: 80, borderRadius: "50%", background: "oklch(12% 0.025 300)", border: "2px solid #F0243E", margin: "0 auto var(--s2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ fontWeight: 900, letterSpacing: "-0.02em", color: "white", fontSize: "1.1rem" }}>WF</div>
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "oklch(60% 0.01 240)", letterSpacing: "0.15em" }}>MERCH TEE</div>
                    </div>
                  </div>
                  <div className={s.appLabel}>
                    <div className={s.appName}>Merchandise</div>
                    <div className={s.appType}>Apparel + accessories</div>
                  </div>
                </div>

                <div className={s.appCard} role="listitem">
                  <div className={s.appThumb} style={{ background: "oklch(12% 0.025 300)" }}>
                    <div className={s.appThumbBg} aria-hidden="true" />
                    <div style={{ position: "relative", zIndex: 1, width: "100%", padding: "var(--s4)" }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#F0243E", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>New Release</div>
                      <div style={{ fontSize: "var(--text-lg)", fontWeight: 900, color: "white", letterSpacing: "-0.02em", lineHeight: 1.1 }}>Transmission<br />No. 001</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "oklch(55% 0.01 240)", marginTop: 8 }}>@wavefrontrec</div>
                    </div>
                  </div>
                  <div className={s.appLabel}>
                    <div className={s.appName}>Social asset</div>
                    <div className={s.appType}>Instagram / X</div>
                  </div>
                </div>

                <div className={s.appCard} role="listitem">
                  <div className={s.appThumb} style={{ background: "linear-gradient(135deg,#F0243E,oklch(38% 0.129 295.1))" }}>
                    <div className={s.appThumbBg} aria-hidden="true" />
                    <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                      <div style={{ fontSize: "var(--text-3xl)", fontWeight: 900, color: "white", letterSpacing: "-0.03em" }}>WF</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "oklch(90% 0 0 / 0.7)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>Lanyard</div>
                    </div>
                  </div>
                  <div className={s.appLabel}>
                    <div className={s.appName}>Event badge</div>
                    <div className={s.appType}>Lanyard / wristband</div>
                  </div>
                </div>
              </div>

              <div className={s.pullQuote} aria-label="Process note" style={{ borderColor: "var(--brand-purple)", background: "var(--accent-purple-bg)" }}>
                <p className={s.pullQuoteText} style={{ fontSize: "var(--text-xl)" }}>The vinyl sleeve was not in scope. It came up in week four because the system was solid enough that the client wanted to keep going. That&apos;s the version of scope creep that&apos;s actually a good sign.</p>
                <div className={s.pullQuoteAttr}>Dade - Project notes, March 2024</div>
              </div>
            </section>

            {/* OUTCOMES */}
            <section className={s.csSection} id="outcomes" aria-labelledby="outcomes-title">
              <div className={s.csSectionEyebrow}>06 / Outcomes</div>
              <h2 className={s.csSectionTitle} id="outcomes-title">What happened after launch</h2>

              <p className={s.prose}>
                The brand launched alongside a new release in the template timeline. In a typical lifecycle, a
                disciplined system can stay coherent across seasons without forcing a teardown redesign. The
                documentation was written so an in-house designer could keep building inside the rails without
                constant studio check-ins.
              </p>

              <div className={s.outcomeGrid} role="list" aria-label="Project outcomes">
                <div className={s.outcomeCard} role="listitem">
                  <div className={s.outcomeNum} style={{ color: "var(--brand-crimson)" }}>On time</div>
                  <div className={s.outcomeLabel}>Delivery - on brief</div>
                </div>
                <div className={s.outcomeCard} role="listitem">
                  <div className={s.outcomeNum} style={{ color: "var(--brand-cyan)" }}>Stable</div>
                  <div className={s.outcomeLabel}>No forced refresh</div>
                </div>
                <div className={s.outcomeCard} role="listitem">
                  <div className={s.outcomeNum} style={{ color: "var(--brand-yellow)" }}>Several</div>
                  <div className={s.outcomeLabel}>Illustrative applications</div>
                </div>
                <div className={s.outcomeCard} role="listitem">
                  <div className={s.outcomeNum} style={{ color: "var(--brand-cyan)" }}>Low</div>
                  <div className={s.outcomeLabel}>Clarifications after handoff</div>
                </div>
              </div>

              <p className={s.prose}>
                The metric that matters most in this template narrative: follow-up stays light. The
                documentation is complete enough that a new designer can pick it up and apply it without
                repeatedly re-deriving the rules. That is the practical test of whether a brand guide works.
              </p>

              <div className={s.pullQuote}>
                <p className={s.pullQuoteText}>In this speculative write-up, the studio delivers a full identity system on a tight calendar - logo, color, type, and brand guide. The work is framed as holding up across many applications without needing a disruptive redesign immediately afterward.</p>
                <div className={s.pullQuoteAttr}>Client stakeholder - template case study</div>
              </div>
            </section>

            {/* KNOWN DEVIATIONS */}
            <section className={s.csSection} id="deviations" aria-labelledby="deviations-title">
              <div className={s.csSectionEyebrow}>07 / Known deviations</div>
              <h2 className={s.csSectionTitle} id="deviations-title">Known deviations to fix before port</h2>
              <p className={s.prose}>
                This artifact mirrors the shared static stack: self-hosted fonts, PNG logo, canonical tokens,
                purged personal-VPN stack references, Memory as a Service naming, and no Google Fonts links.
                Grep the full artifact set for the strings called out in the developer handoff before porting.
              </p>
              <div className={`${s.csCallout} ${s.csCalloutBrand}`}>
                <svg className={s.csCalloutIcon} viewBox="0 0 24 24" fill="none" stroke="var(--brand-crimson)" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
                <div>
                  <div className={s.csCalloutTitle} style={{ color: "var(--brand-crimson)" }}>Checklist</div>
                  <div className={s.csCalloutBody}>Zero hits for the vendor VPN trio, deprecated model-router product copy, inline logo symbol defs, Google Fonts hosts, legacy color-prefixed custom properties, and dash characters. Logo path stays <code className={s.inlineCode}>/assets/brand/logo-d.png</code> (not <code className={s.inlineCode}>public/assets/</code>).</div>
                </div>
              </div>
            </section>

            <div className={s.ctaBlock}>
              <div>
                <div className={s.ctaLabel}>Work with me</div>
                <div className={s.ctaTitle}>Got a brand that needs<br />this kind of work?</div>
              </div>
              <a href="mailto:hello@dade.studio" className={`${s.btn} ${s.btnPrimary} ${s.btnLg}`} style={{ flexShrink: 0 }}>
                Start a project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>

            <nav className={s.nextProject} aria-label="Other case studies">
              <a href="/work/prism" className={s.nextProjectPrev}>
                <div className={s.nextDir}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
                  Previous
                </div>
                <div className={s.nextTitle}>Prism Studio</div>
                <div className={s.nextSub}>Web design + CMS</div>
              </a>
              <a href="/work/maas" className={s.nextProjectNext}>
                <div className={s.nextDir}>
                  Next
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
                <div className={s.nextTitle}>Memory as a Service</div>
                <div className={s.nextSub}>Persistent memory layer + product design</div>
              </a>
            </nav>
          </article>

          <aside className={s.csSidebar} aria-label="Case study navigation">
            <nav className={s.toc} aria-label="Table of contents">
              <div className={s.tocHeader}>Contents</div>
              <ul className={s.tocList} role="list">
                {TOC.map(({ id, num, label }) => (
                  <li key={id}>
                    <a href={`#${id}`} className={activeId === id ? "active" : undefined} style={activeId === id ? { color: "var(--brand-crimson)", background: "var(--accent-crimson-bg)" } : undefined}>
                      <span className={s.tocNum}>{num}</span> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={s.csSidebarCta}>
              <a href="mailto:hello@dade.studio" className={`${s.btn} ${s.btnPrimary}`}>Start a project</a>
            </div>
          </aside>
        </div>
      </main>

      <footer className={s.siteFooter} role="contentinfo">
        <div className={s.footerSimple}>
          <span>&copy; 2026 Dade.Studio</span>
          <nav aria-label="Footer navigation" className={s.footerNav}>
            <a href="/work">Work</a>
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="/bot-privacy">Bot privacy</a>
            <a href="mailto:hello@dade.studio">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
