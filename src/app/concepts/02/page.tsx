import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConceptSwitcher } from "../_components/concept-switcher";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "After Dark",
  description:
    "A cinematic Dade.Studio direction for distinctive web design, working builds, and RemainFrame.",
};

const services = [
  {
    number: "01",
    title: "Direction & strategy",
    description:
      "Positioning, content hierarchy, and a clear creative premise before the surface work begins.",
    detail: "Site map · page goals · art direction",
  },
  {
    number: "02",
    title: "Visual design",
    description:
      "A responsive interface system with typography, color, composition, and motion working as one idea.",
    detail: "Key pages · responsive states · design system",
  },
  {
    number: "03",
    title: "Production build",
    description:
      "The design becomes a fast, accessible website with the real details resolved in the browser.",
    detail: "Front-end build · content setup · launch handoff",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Find the signal",
    description:
      "Clarify what the site needs to say, who needs to hear it, and what should happen next.",
  },
  {
    number: "02",
    title: "Set the direction",
    description:
      "Turn strategy into a visual premise, then pressure-test it on the pages that matter most.",
  },
  {
    number: "03",
    title: "Build the real thing",
    description:
      "Move into code early enough that responsiveness, motion, and content shape the final design.",
  },
  {
    number: "04",
    title: "Refine and release",
    description:
      "Finish the edge cases, run the essential checks, and prepare a clean path to launch.",
  },
] as const;

const faqs = [
  {
    question: "What kind of website work is a good fit?",
    answer:
      "Focused marketing sites, studio and portfolio sites, product stories, and identity-led web refreshes are the natural center of the practice.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. Strategy, visual design, and front-end implementation stay connected from the first direction through the working build.",
  },
  {
    question: "Can we start before every detail is decided?",
    answer:
      "Yes. The opening phase is designed to sort the message, scope, and visual ambition before committing to a full direction.",
  },
  {
    question: "Where does RemainFrame fit?",
    answer:
      "RemainFrame is the studio’s second focus and the home of Hermes, a custom AI secretary built around one recurring job and the way a business actually works.",
  },
] as const;

export default function AfterDarkPage() {
  return (
    <div className={styles.page} id="top">
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.siteHeader}>
        <a className={styles.brand} href="#top" aria-label="Dade Studio, back to top">
          <Image
            className={styles.brandMark}
            src="/assets/brand/logo-d.png"
            alt=""
            width={38}
            height={38}
            priority
          />
          <span>dade.studio</span>
        </a>

        <nav className={styles.primaryNav} aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#remainframe">RemainFrame</a>
          <a href="#about">About</a>
        </nav>

        <a className={styles.headerCta} href="#contact">
          Start a project
          <span aria-hidden="true">↘</span>
        </a>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroAura} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" /> Independent web design + build
            </p>
            <h1 id="hero-title">
              Make the internet
              <span>feel like yours.</span>
            </h1>
            <p className={styles.heroIntro}>
              Distinctive websites where strategy, visual design, and the working build come
              from one studio.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                Tell me what you’re making
                <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.textButton} href="#work">
                See selected work
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className={styles.heroProof} aria-label="Core studio disciplines">
              <span>Strategy</span>
              <span>Visual design</span>
              <span>Production build</span>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualCoordinates}>39.7392° N / 104.9903° W</div>
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <span className={styles.browserDots}>
                  <i />
                  <i />
                  <i />
                </span>
                <span>dade.studio / new-site</span>
                <span>01</span>
              </div>
              <div className={styles.browserCanvas}>
                <div className={styles.canvasGrid} />
                <div className={styles.canvasKicker}>FORM / FUNCTION / FEELING</div>
                <div className={styles.canvasTitle}>
                  Clear
                  <span>and</span>
                  unmistakable.
                </div>
                <div className={styles.canvasFooter}>
                  <span>Design with a point of view</span>
                  <span>Scroll to enter ↓</span>
                </div>
              </div>
            </div>
            <div className={styles.floatingCard}>
              <span>01</span>
              <strong>Find the signal.</strong>
              <small>Then give it a shape.</small>
            </div>
            <div className={styles.paletteCard}>
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.statusPill}>
              <span /> Built in the browser
            </div>
          </div>

          <div className={styles.heroIndex} aria-hidden="true">
            <span>DADE / AFTER DARK</span>
            <span>02 / 03</span>
          </div>
        </section>

        <aside className={styles.manifesto} aria-label="Studio point of view">
          <p>Distinct enough to remember.</p>
          <p>Clear enough to use.</p>
          <span aria-hidden="true">✦</span>
        </aside>

        <section className={styles.services} id="services" aria-labelledby="services-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionKicker}>Web design is the main event</p>
            <h2 id="services-title">A website with a point of view.</h2>
          </div>
          <div className={styles.servicesIntro}>
            <p>
              Not a template dressed for the occasion. A clear idea translated into a site
              that looks like your business, sounds like your business, and works for the
              people you want to reach.
            </p>
            <p>
              Design and implementation stay in the same hands, so the strongest decisions
              survive all the way to the browser.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.number}>
                <span className={styles.cardNumber}>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <small>{service.detail}</small>
              </article>
            ))}
          </div>

          <div className={styles.deliverables}>
            <p>Built around the work your site actually needs</p>
            <ul>
              <li>Content structure</li>
              <li>Art direction</li>
              <li>Responsive page design</li>
              <li>Front-end implementation</li>
              <li>Interaction details</li>
              <li>Launch-ready handoff</li>
            </ul>
          </div>
        </section>

        <section className={styles.work} id="work" aria-labelledby="work-title">
          <div className={styles.workHeader}>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionKicker}>Selected work and active studies</p>
              <h2 id="work-title">Proof takes more than a pretty frame.</h2>
            </div>
            <p>
              A mix of studio-owned work and clearly labeled exploration. Each one tests a
              different way to make an idea coherent, useful, and unmistakably itself.
            </p>
          </div>

          <div className={styles.workGrid}>
            <article className={`${styles.workCard} ${styles.remainframeCard}`}>
              <a
                className={styles.workVisual}
                href="#contact"
                aria-label="Ask about RemainFrame"
              >
                <span className={styles.workLabel}>Product story / interface direction</span>
                <div className={styles.rfWordmark}>RemainFrame</div>
                <div className={styles.rfRail}>
                  <span>one recurring job</span>
                  <i />
                  <span>earned context</span>
                  <i />
                  <span>careful growth</span>
                </div>
                <span className={styles.visualArrow}>↗</span>
              </a>
              <div className={styles.workBody}>
                <div>
                  <p>RemainFrame / Hermes</p>
                  <span>Custom AI secretary</span>
                </div>
                <p>Recurring business work, handled with the context and judgment it needs.</p>
              </div>
            </article>

            <article className={`${styles.workCard} ${styles.systemCard}`}>
              <Link
                className={styles.workVisual}
                href="/design-system"
                aria-label="View the Dade.Studio design system"
              >
                <span className={styles.workLabel}>Identity system / web framework</span>
                <div className={styles.systemLetters}>
                  <span>D</span>
                  <span>S</span>
                </div>
                <div className={styles.systemSwatches}>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className={styles.systemRuler}>00&nbsp;&nbsp; 04&nbsp;&nbsp; 08&nbsp;&nbsp; 12</div>
              </Link>
              <div className={styles.workBody}>
                <div>
                  <p>Dade.Studio system</p>
                  <span>Ongoing studio work</span>
                </div>
                <p>An evolving identity and web language built to hold varied creative work.</p>
              </div>
            </article>

            <article className={`${styles.workCard} ${styles.wavefrontCard}`}>
              <Link
                className={styles.workVisual}
                href="/case-study"
                aria-label="View the Wavefront speculative identity study"
              >
                <span className={styles.workLabel}>Speculative identity study</span>
                <div className={styles.waveGlyph}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.waveName}>WAVEFRONT</div>
                <span className={styles.visualArrow}>↗</span>
              </Link>
              <div className={styles.workBody}>
                <div>
                  <p>Wavefront</p>
                  <span>Speculative</span>
                </div>
                <p>A self-initiated identity study, presented as exploration rather than client work.</p>
              </div>
            </article>
          </div>
        </section>

        <section
          className={styles.remainframe}
          id="remainframe"
          aria-labelledby="remainframe-title"
        >
          <div className={styles.rfGlow} aria-hidden="true" />
          <div className={styles.rfCopy}>
            <p className={styles.sectionKicker}>Second focus / RemainFrame</p>
            <h2 id="remainframe-title">A custom AI secretary for work that keeps coming back.</h2>
            <p className={styles.rfLead}>
              Start with one recurring job. Expand only where it proves useful.
            </p>
            <p className={styles.rfDescription}>
              RemainFrame is the brand. Hermes is the custom AI secretary, tailored to a
              business&apos;s tools, context, and recurring work.
            </p>
            <a
              className={styles.primaryButton}
              href="#contact"
            >
              Ask about RemainFrame
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.rfSequence} aria-label="RemainFrame growth principle">
            <div className={styles.sequenceHeader}>
              <span>USEFULNESS / BEFORE SCALE</span>
              <span>01 / 03</span>
            </div>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <strong>Begin</strong>
                  <small>One useful job</small>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Earn</strong>
                  <small>A reliable place</small>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Grow</strong>
                  <small>Only with reason</small>
                </div>
              </li>
            </ol>
            <div className={styles.sequenceFooter}>
              <span>Context</span>
              <span>Continuity</span>
              <span>Control</span>
            </div>
          </div>
        </section>

        <section className={styles.process} id="process" aria-labelledby="process-title">
          <div className={styles.processIntro}>
            <p className={styles.sectionKicker}>A short, connected process</p>
            <h2 id="process-title">From first conversation to working site.</h2>
            <p>
              Fewer handoffs keep the idea intact. Each phase answers a different question,
              then gives the next one something solid to build on.
            </p>
          </div>
          <ol className={styles.processList}>
            {process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.about} id="about" aria-labelledby="about-title">
          <div className={styles.aboutStatement}>
            <p className={styles.sectionKicker}>Independent by design</p>
            <h2 id="about-title">
              The person shaping the idea is also shaping the build.
            </h2>
          </div>
          <div className={styles.aboutBody}>
            <p>
              Dade.Studio is a solo practice spanning strategy, visual design, and front-end
              implementation. That range is the operating model: one line of thought from
              what the site needs to do to how every detail behaves on screen.
            </p>
            <div className={styles.capabilityGrid}>
              <div>
                <span>Design</span>
                <p>Direction, identity thinking, type, layout, interaction, and responsive systems.</p>
              </div>
              <div>
                <span>Implementation</span>
                <p>Production-minded front-end work, accessibility, performance, and handoff.</p>
              </div>
            </div>
            <a className={styles.textButton} href="#contact">
              Bring me the complicated part
              <span aria-hidden="true">↘</span>
            </a>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <div className={styles.faqHeading}>
            <p className={styles.sectionKicker}>Before you write</p>
            <h2 id="faq-title">A few useful answers.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <i aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.contact} id="contact">
        <div className={styles.contactGlow} aria-hidden="true" />
        <p className={styles.sectionKicker}>Have a website in mind?</p>
        <h2>Let’s make it impossible to confuse with anyone else’s.</h2>
        <a
          className={styles.contactLink}
          href="mailto:hello@dade.studio?subject=Website%20project"
        >
          <span>hello@dade.studio</span>
          <i aria-hidden="true">↗</i>
        </a>
        <div className={styles.footerBottom}>
          <a className={styles.footerBrand} href="#top">
            <Image
              src="/assets/brand/logo-d.png"
              alt=""
              width={32}
              height={32}
            />
            <span>Dade.Studio</span>
          </a>
          <p>Web design first. RemainFrame second. Good ideas throughout.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <ConceptSwitcher active="02" />
    </div>
  );
}
