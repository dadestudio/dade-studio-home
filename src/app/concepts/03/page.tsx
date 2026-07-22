import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConceptSwitcher } from "../_components/concept-switcher";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "A warm, crafted Dade.Studio concept for thoughtful website strategy, design, and builds.",
};

const services = [
  {
    number: "01",
    title: "Strategy that gives the site a job.",
    description:
      "Before the pixels, we get clear on the audience, the message, and what the website needs to help them do.",
    details: ["Site structure", "Message direction", "Content priorities"],
  },
  {
    number: "02",
    title: "A visual language with a point of view.",
    description:
      "Type, color, pace, and composition become a flexible page system that feels specific to your business.",
    details: ["Art direction", "Responsive page design", "Interface system"],
  },
  {
    number: "03",
    title: "A working build, not a handoff gap.",
    description:
      "The design is carried into the browser with the same care, then refined across screen sizes and real content.",
    details: ["Responsive development", "Interaction details", "Launch-ready handoff"],
  },
] as const;

const process = [
  {
    number: "01",
    title: "Find the center",
    body: "I learn the business, the people it serves, and the decision this website needs to make easier.",
  },
  {
    number: "02",
    title: "Set the direction",
    body: "We align on structure, language, and a visual idea strong enough to guide every page that follows.",
  },
  {
    number: "03",
    title: "Make it real",
    body: "I design and build together, sharing a working site as the system takes shape in the browser.",
  },
  {
    number: "04",
    title: "Test the edges",
    body: "We review the details, smaller screens, and real paths through the site before the final handoff.",
  },
] as const;

export default function FieldNotesPage() {
  return (
    <div className={styles.page} id="top">
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/" aria-label="Dade Studio home">
            <Image
              className={styles.logo}
              src="/assets/brand/logo-d.png"
              alt=""
              width={42}
              height={42}
              priority
            />
            <span>dade.studio</span>
          </Link>

          <nav className={styles.primaryNav} aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
          </nav>

          <a className={styles.headerCta} href="#contact">
            Start a project <span aria-hidden="true">↘</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section className={`${styles.hero} ${styles.shell}`} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true">✦</span> Independent design &amp; build studio
            </p>
            <h1 id="hero-title">
              Websites made
              <br />
              with <em>both hands.</em>
            </h1>
            <p className={styles.heroLead}>
              Strategy, visual design, and a working build from one studio, made for
              owner-led businesses that care about the details.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                Tell me about your site <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.textLink} href="#work">
                See selected work <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className={styles.heroFootnote} aria-label="Studio services">
              <span>Strategy</span>
              <span>Visual design</span>
              <span>Working build</span>
            </div>
          </div>

          <div className={styles.heroCollage} aria-hidden="true">
            <div className={styles.gridSheet}>
              <div className={styles.sheetTop}>
                <span>FIELD / 03</span>
                <span>IN PROGRESS</span>
              </div>
              <div className={styles.sheetHeading}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles.sheetLayout}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className={styles.terracottaCut} />
            <div className={styles.sunDisc}>
              <span>think</span>
              <span>make</span>
              <span>refine</span>
            </div>
            <div className={styles.blueTicket}>
              <span>ONE STUDIO</span>
              <strong>01 → ∞</strong>
              <span>ONE THREAD</span>
            </div>
            <div className={styles.pencilNote}>
              <span>small decisions</span>
              <strong>add up.</strong>
            </div>
            <div className={styles.tape} />
            <div className={styles.stitches} />
          </div>
        </section>

        <section className={styles.services} id="services" aria-labelledby="services-title">
          <div className={styles.shell}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={styles.sectionLabel}>01 / Web design &amp; build</p>
                <h2 id="services-title">One connected process, from the first idea to the final page.</h2>
              </div>
              <p>
                The strongest websites do more than look polished. They make the business
                easier to understand, trust, and choose. Every part of the process stays
                connected so the final build holds onto the original idea.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <article className={styles.serviceCard} key={service.number}>
                  <div className={styles.cardNumber}>{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className={styles.serviceNote}>
              <span className={styles.noteMark} aria-hidden="true">✦</span>
              <p>
                One conversation all the way through. No relay race between strategy,
                design, and development.
              </p>
              <a href="mailto:hello@dade.studio?subject=Website%20project">
                Talk about a website <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className={`${styles.work} ${styles.shell}`} id="work" aria-labelledby="work-title">
          <div className={styles.workHeading}>
            <div>
              <p className={styles.sectionLabel}>02 / Selected work</p>
              <h2 id="work-title">A few things on the table.</h2>
            </div>
            <p>
              Product thinking, studio systems, and exploratory identity work, each labeled
              for exactly what it is.
            </p>
          </div>

          <div className={styles.workGrid}>
            <article className={`${styles.workCard} ${styles.remainCard}`}>
              <a
                href="#contact"
                className={styles.workCardLink}
              >
                <div className={`${styles.workVisual} ${styles.remainVisual}`} aria-hidden="true">
                  <div className={styles.rfFrame}>
                    <span>RF</span>
                  </div>
                  <div className={styles.rfTabs}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <p>The context stays.</p>
                </div>
                <div className={styles.workBody}>
                  <p className={styles.workStatus}>Custom AI secretary / active</p>
                  <h3>RemainFrame / Hermes</h3>
                  <p>
                    Hermes takes on one recurring job with the context and judgment of how that
                    business actually works.
                  </p>
                  <span className={styles.cardLinkLabel}>
                    Ask about RemainFrame <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            </article>

            <article className={`${styles.workCard} ${styles.systemCard}`}>
              <Link href="/design-system" className={styles.workCardLink}>
                <div className={`${styles.workVisual} ${styles.systemVisual}`} aria-hidden="true">
                  <div className={styles.systemD}>D.</div>
                  <div className={styles.swatches}>
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.measure}>12 / 24 / 48</div>
                </div>
                <div className={styles.workBody}>
                  <p className={styles.workStatus}>Studio system · Ongoing</p>
                  <h3>Dade.Studio system</h3>
                  <p>
                    An evolving identity and interface system that gives the studio one
                    reusable visual language.
                  </p>
                  <span className={styles.cardLinkLabel}>
                    See the system <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            </article>

            <article className={`${styles.workCard} ${styles.waveCard}`}>
              <Link href="/case-study" className={styles.workCardLink}>
                <div className={`${styles.workVisual} ${styles.waveVisual}`} aria-hidden="true">
                  <div className={styles.waveOrb}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.waveWord}>WAVE<br />FRONT</div>
                  <div className={styles.waveIndex}>STUDY / 001</div>
                </div>
                <div className={styles.workBody}>
                  <p className={styles.workStatus}>Speculative identity study · Not client work</p>
                  <h3>Wavefront</h3>
                  <p>
                    An exploratory identity system for an imagined independent record label,
                    built to test a complete brand process.
                  </p>
                  <span className={styles.cardLinkLabel}>
                    Read the study <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            </article>
          </div>
        </section>

        <section className={styles.remainFrame} aria-labelledby="remainframe-title">
          <div className={`${styles.shell} ${styles.remainFrameInner}`}>
            <div className={styles.remainFrameCopy}>
              <p className={styles.sectionLabel}>03 / RemainFrame</p>
              <p className={styles.remainFrameKicker}>Hermes, your custom AI secretary.</p>
              <h2 id="remainframe-title">Recurring work, handled with context.</h2>
              <p className={styles.remainFrameText}>
                RemainFrame is the brand behind Hermes, a custom AI secretary shaped around one
                recurring job and the way a business actually works. It grows only where it
                proves useful.
              </p>
              <a
                className={styles.remainFrameLink}
                href="#contact"
              >
                Ask about RemainFrame <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className={styles.bookComposition} aria-hidden="true">
              <div className={styles.backPage}>
                <span>CONTEXT</span>
              </div>
              <div className={styles.middlePage}>
                <span>DECISIONS</span>
              </div>
              <div className={styles.frontPage}>
                <div className={styles.bookTopline}>
                  <span>THE BUSINESS BOOK</span>
                  <span>01</span>
                </div>
                <strong>What your<br />business knows.</strong>
                <div className={styles.bookRules}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.bookSeal}>RF</div>
              </div>
              <div className={styles.bookTab}>kept in context</div>
            </div>
          </div>
        </section>

        <section className={`${styles.process} ${styles.shell}`} id="process" aria-labelledby="process-title">
          <div className={styles.processHeading}>
            <p className={styles.sectionLabel}>04 / Process</p>
            <h2 id="process-title">Thoughtful does not have to mean complicated.</h2>
            <p>
              The process stays visible, conversational, and centered on the decisions that
              move the work forward.
            </p>
          </div>

          <ol className={styles.processList}>
            {process.map((step) => (
              <li key={step.number}>
                <div className={styles.processNumber}>{step.number}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.about} id="about" aria-labelledby="about-title">
          <div className={`${styles.shell} ${styles.aboutGrid}`}>
            <div className={styles.aboutCard} aria-hidden="true">
              <span className={styles.aboutCardLabel}>A small studio note</span>
              <p>one studio</p>
              <p>one conversation</p>
              <p>one connected build</p>
              <span className={styles.aboutAsterisk}>✦</span>
            </div>

            <div className={styles.aboutCopy}>
              <p className={styles.sectionLabel}>05 / About</p>
              <h2 id="about-title">Small studio. Full attention.</h2>
              <p className={styles.aboutLead}>
                You work directly with the person thinking through the strategy, making the
                design, and building the site.
              </p>
              <p>
                I keep those parts in the same pair of hands because each decision informs the
                next. There are fewer handoffs, less lost context, and more room to care about
                the small things that make a website feel considered.
              </p>
              <div className={styles.goodFit}>
                <span>Usually a good fit</span>
                <p>Owner-led businesses · Detail-minded teams · People ready to collaborate</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.faq} ${styles.shell}`} aria-labelledby="faq-title">
          <div className={styles.faqHeading}>
            <p className={styles.sectionLabel}>06 / A few practical notes</p>
            <h2 id="faq-title">Questions before the first email.</h2>
          </div>

          <div className={styles.faqList}>
            <details>
              <summary>What kind of websites do you take on?</summary>
              <p>
                Brand-led marketing sites, portfolios, focused company sites, and launch pages
                where the story and the experience need to work together.
              </p>
            </details>
            <details>
              <summary>Do you handle both design and development?</summary>
              <p>
                Yes. Strategy, visual design, and the working build are shaped as one connected
                project, so the idea does not get diluted between phases.
              </p>
            </details>
            <details>
              <summary>Can we start with an existing brand?</summary>
              <p>
                Absolutely. A website can extend a strong identity that already exists, or help
                clarify the visual system when the current pieces need more structure.
              </p>
            </details>
            <details>
              <summary>What happens first?</summary>
              <p>
                Send a short note about the business, the website you have now, and what needs
                to change. We can begin with the problem before prescribing the project.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className={styles.contact} id="contact" aria-labelledby="contact-title">
        <div className={`${styles.shell} ${styles.contactInner}`}>
          <div>
            <p className={styles.contactLabel}>Have a website in mind?</p>
            <h2 id="contact-title">Let&apos;s make the useful thing beautiful.</h2>
          </div>
          <div className={styles.contactDetails}>
            <p>
              Tell me about your business, what needs to change, and where the website is now.
            </p>
            <a
              className={styles.emailLink}
              href="mailto:hello@dade.studio?subject=Website%20project"
            >
              hello@dade.studio <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.footerLine}>
            <span>Website strategy · Visual design · Working build</span>
            <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </footer>

      <ConceptSwitcher active="03" />
    </div>
  );
}
