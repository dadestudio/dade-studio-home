import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConceptSwitcher } from "../_components/concept-switcher";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Signal",
  description:
    "An editorial Dade.Studio website direction for design-led websites and RemainFrame.",
};

const services = [
  {
    number: "01",
    title: "Direction",
    body: "Find the sharp idea, the useful structure, and the voice that makes the site feel like it belongs to you.",
    note: "Positioning · content shape · art direction",
  },
  {
    number: "02",
    title: "Design",
    body: "Turn that point of view into a responsive visual system with type, color, rhythm, and reusable parts.",
    note: "Web design · design systems · prototyping",
  },
  {
    number: "03",
    title: "Build",
    body: "Carry the approved direction into accessible, production-minded code without sanding off the character.",
    note: "Front-end build · responsive QA · launch support",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Find the point",
    body: "Get clear on the audience, the offer, and the one idea the site should make memorable.",
  },
  {
    number: "02",
    title: "Make the system",
    body: "Structure, type, color, and components become a direction you can judge in context.",
  },
  {
    number: "03",
    title: "Build it for real",
    body: "The approved direction moves into responsive code, with accessibility handled as part of the design.",
  },
  {
    number: "04",
    title: "Launch and learn",
    body: "Put the useful version into the world, see where it strains, and refine from evidence.",
  },
] as const;

const faqs = [
  {
    question: "What kinds of websites are a good fit?",
    answer:
      "Marketing sites, product sites, focused portfolios, and clear new directions for an existing website. The best fit is a founder or small team that wants the site to feel authored, not assembled.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes. Direction, interface design, and front-end implementation can stay in one process. If a project needs a specialist outside that lane, I make that boundary clear early.",
  },
  {
    question: "Where does RemainFrame fit?",
    answer:
      "Web design is the studio's primary focus. RemainFrame is the second: the home of Hermes, a custom AI secretary built around one recurring job and the way a business actually works.",
  },
  {
    question: "How do we start?",
    answer:
      "Send a short note about what you are making, what is not working yet, and what you want the website to help people understand. I will reply with the clearest next step.",
  },
] as const;

export default function SignalPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      <header className={styles.siteHeader}>
        <div className={styles.navShell}>
          <Link className={styles.brand} href="/" aria-label="Dade Studio home">
            <Image
              className={styles.brandMark}
              src="/assets/brand/logo-d.png"
              alt=""
              width={36}
              height={36}
              priority
            />
            <span className={styles.brandText}>Dade.Studio</span>
          </Link>

          <nav className={styles.navLinks} aria-label="Signal page navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
          </nav>

          <a className={styles.navCta} href="#contact">
            Start a project
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="signal-title">
          <div className={styles.heroMeta}>
            <span>Independent design + code studio</span>
            <span>Web direction / 01</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span aria-hidden="true" />
                Web design, first.
              </p>
              <h1 id="signal-title">
                <span>Websites</span>
                <span className={styles.heroAccent}>with a point</span>
                <span>of view.</span>
              </h1>
              <p className={styles.heroIntro}>
                Design-led websites for founders and small teams who care how the thing works and
                how it feels.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#contact">
                  Start a website
                  <span aria-hidden="true">↘</span>
                </a>
                <a className={styles.textLink} href="#work">
                  See selected work
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className={styles.browserWrap} aria-hidden="true">
              <div className={styles.browserShadow} />
              <div className={styles.browser}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.browserUrl}>your-idea.com</div>
                  <span className={styles.browserMenu}>•••</span>
                </div>
                <div className={styles.browserCanvas}>
                  <div className={styles.mockNav}>
                    <strong>POINT/01</strong>
                    <span>Work&nbsp;&nbsp; About&nbsp;&nbsp; Contact</span>
                  </div>
                  <div className={styles.mockHero}>
                    <span className={styles.mockKicker}>MAKE IT CLEAR</span>
                    <p>
                      A clear idea,
                      <br />
                      made <em>useful.</em>
                    </p>
                  </div>
                  <div className={styles.mockGrid}>
                    <div className={styles.mockCardDark}>
                      <span>01</span>
                      <strong>Direction</strong>
                    </div>
                    <div className={styles.mockCardLight}>
                      <span>02</span>
                      <strong>System</strong>
                    </div>
                    <div className={styles.mockCardRed}>
                      <span>03</span>
                      <strong>Build</strong>
                    </div>
                  </div>
                </div>
              </div>
              <span className={styles.browserNote}>Not decoration. A working point of view.</span>
            </div>
          </div>

          <div className={styles.heroLedger} aria-label="Studio capabilities">
            <span>Strategy</span>
            <span>Web design</span>
            <span>Front-end</span>
            <span>One clear process</span>
          </div>
        </section>

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>01 / Services</p>
            <h2 id="services-title">
              Clear thinking.
              <br />
              Distinct surfaces.
              <br />
              Real builds.
            </h2>
            <p>
              I shape the idea, design the system, and build the site. The thread stays intact from
              first sketch to responsive page.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.number}>
                <span className={styles.cardNumber}>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <small>{service.note}</small>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.workSection}`} id="work" aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>02 / Selected work</p>
            <h2 id="work-title">Things with a reason to exist.</h2>
            <p>
              Current RemainFrame work, the studio&apos;s own working system, and one clearly
              labeled speculative study.
            </p>
          </div>

          <div className={styles.workGrid}>
            <article className={`${styles.projectCard} ${styles.projectLarge}`}>
              <a
                className={styles.projectLink}
                href="#contact"
              >
                <div className={`${styles.projectVisual} ${styles.remainframeVisual}`} aria-hidden="true">
                  <span className={styles.rfWordmark}>RemainFrame</span>
                  <div className={styles.rfFrame}>
                    <span>YOU LEFT OFF HERE</span>
                    <strong>Continue →</strong>
                  </div>
                  <span className={styles.rfOrbit} />
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.projectMeta}>
                    <span>Custom AI secretary / ongoing</span>
                    <span>01</span>
                  </div>
                  <h3>RemainFrame</h3>
                  <p>
                    RemainFrame is the brand. Hermes is the custom AI secretary, shaped around
                    one recurring job and expanded only where it proves useful.
                  </p>
                  <span className={styles.projectAction}>
                    Ask about RemainFrame <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            </article>

            <article className={`${styles.projectCard} ${styles.projectSmall}`}>
              <Link className={styles.projectLink} href="/design-system">
                <div className={`${styles.projectVisual} ${styles.systemVisual}`} aria-hidden="true">
                  <span className={styles.systemLogo}>D</span>
                  <div className={styles.systemType}>
                    <strong>Aa</strong>
                    <span>Direct / useful / alive</span>
                  </div>
                  <div className={styles.swatches}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.projectMeta}>
                    <span>Studio system / in use</span>
                    <span>02</span>
                  </div>
                  <h3>Dade.Studio system</h3>
                  <p>An evolving identity and interface system made to support the studio&apos;s own work.</p>
                  <span className={styles.projectAction}>
                    View the system <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            </article>

            <article className={`${styles.projectCard} ${styles.projectWide}`}>
              <Link className={`${styles.projectLink} ${styles.wideLink}`} href="/case-study">
                <div className={`${styles.projectVisual} ${styles.wavefrontVisual}`} aria-hidden="true">
                  <span className={styles.waveLabel}>SPECULATIVE</span>
                  <div className={styles.waveLines}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>WAVE/FRONT</strong>
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.projectMeta}>
                    <span>Speculative identity study</span>
                    <span>03</span>
                  </div>
                  <h3>Wavefront</h3>
                  <p>
                    An explicitly speculative study of how an identity language might stretch into
                    a responsive website.
                  </p>
                  <span className={styles.projectAction}>
                    View the study <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            </article>
          </div>
        </section>

        <section className={styles.remainframeBand} aria-labelledby="remainframe-title">
          <div className={styles.remainframeTopline}>
            <span>Second focus / RemainFrame</span>
            <span>Hermes / custom AI secretary</span>
          </div>
          <div className={styles.remainframeLayout}>
            <h2 id="remainframe-title">Start with one recurring job.</h2>
            <div className={styles.remainframeCopy}>
              <p>Hermes learns how the business works and grows only where it earns a place.</p>
              <a href="#contact">
                Ask about RemainFrame
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <span className={styles.bandMark} aria-hidden="true">
            R/F
          </span>
        </section>

        <section className={styles.section} id="process" aria-labelledby="process-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>03 / Process</p>
            <h2 id="process-title">Four moves. One continuous thread.</h2>
            <p>
              Enough structure to keep decisions clear. Enough room for the work to get better as
              we learn what it needs.
            </p>
          </div>

          <ol className={styles.processGrid}>
            {process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.aboutSection} id="about" aria-labelledby="about-title">
          <div className={styles.aboutIndex}>
            <span>04 / Solo studio</span>
            <span>Design ↔ Code</span>
          </div>
          <div className={styles.aboutGrid}>
            <h2 id="about-title">
              I design and
              <br />
              I code. <em>Both.</em>
            </h2>
            <div className={styles.aboutCopy}>
              <p>
                The person shaping the idea is also the person making it work in the browser. Fewer
                handoffs, clearer decisions, and craft that survives the build.
              </p>
              <p>
                I work best with founders and small teams who want an active collaborator, a clear
                point of view, and a website they can stand behind.
              </p>
              <a href="#contact">
                Tell me what you are making
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} aria-labelledby="faq-title">
          <div className={styles.faqHeading}>
            <p className={styles.sectionNumber}>05 / FAQ</p>
            <h2 id="faq-title">Useful questions, direct answers.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className={styles.contact} id="contact">
          <p className={styles.contactKicker}>Have a website that should feel like yours?</p>
          <h2>Let&apos;s make the point clear.</h2>
          <a
            className={styles.emailLink}
            href="mailto:hello@dade.studio?subject=Website%20project"
          >
            hello@dade.studio
            <span aria-hidden="true">↗</span>
          </a>
          <div className={styles.footerLine}>
            <span>Dade.Studio / Design + code</span>
            <a href="#main">Back to top ↑</a>
          </div>
        </footer>
      </main>

      <ConceptSwitcher active="01" />
    </div>
  );
}
