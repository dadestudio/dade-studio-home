import Image from "next/image";
import Link from "next/link";
import styles from "./printroom.module.css";
import SiteHeader from "./site-header";

const services = [
  {
    number: "01",
    title: "Web design + builds",
    body: "Clear, distinctive small-business websites that explain the offer, build trust, and work smoothly across screen sizes.",
    cta: "Plan a website",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20website%20project",
    emphasis: "primary",
  },
  {
    number: "02",
    title: "Branding + graphic design",
    body: "A distinct visual identity, campaign graphics, social assets, print pieces, and everyday business materials that work together.",
    cta: "Make the visuals work",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20branding%20and%20graphic%20design%20project",
    emphasis: "standard",
  },
  {
    number: "03",
    title: "Tailored tools + workflows",
    body: "Custom dashboards, digital tools, and practical workflows shaped around how your business actually gets work done.",
    cta: "Improve a workflow",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20tailored%20tool%20or%20workflow",
    emphasis: "secondary",
  },
  {
    number: "04",
    title: "Coaching + teaching",
    body: "Patient, one-on-one coaching to use your tools with confidence, make clearer decisions, and keep work moving.",
    cta: "Book practical help",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20coaching%20or%20teaching",
    emphasis: "standard",
  },
  {
    number: "05",
    title: "Practical marketing support",
    body: "Clarify your offer, strengthen your website copy, and choose what to communicate next.",
    cta: "Clarify the message",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20marketing%20support",
    emphasis: "standard",
  },
  {
    number: "06",
    title: "Merch + product design",
    body: "Original artwork, merchandise, and product visuals designed to feel considered, useful, and worth putting into the world.",
    cta: "Develop a product",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20merch%20or%20product%20design",
    emphasis: "standard",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Find the real need",
    body: "We name what feels unclear, broken, slow, or unfinished and define a useful result.",
  },
  {
    number: "02",
    title: "Set the direction",
    body: "I turn the goal into a focused creative and practical direction you can judge in context.",
  },
  {
    number: "03",
    title: "Make it together",
    body: "You see the work as it develops, so decisions stay clear and the result stays connected to you.",
  },
  {
    number: "04",
    title: "Put it to work",
    body: "We launch, publish, or hand off something useful, with a clear path for what comes next.",
  },
] as const;

const faqs = [
  {
    question: "What can I hire you for?",
    answer:
      "Websites, branding, graphic design, tailored tools and workflows, coaching, product design, and practical marketing support.",
  },
  {
    question: "Can we start small?",
    answer:
      "Yes. A focused project is often the best place to start. We can solve the immediate need first and expand only when it makes sense.",
  },
  {
    question: "Is RemainFrame part of Dade Studio?",
    answer:
      "Yes. RemainFrame is my dedicated custom AI secretary service. If recurring work is the problem, it may be the best place to start.",
  },
  {
    question: "Do I need to know exactly what I need?",
    answer:
      "No. Share the problem, idea, or unfinished piece, and I will help identify the most useful first step.",
  },
  {
    question: "Is the Studio Shop a real store?",
    answer:
      "Yes. The products shown here are real and available to order through the Studio Shop. Fourthwall handles checkout and fulfillment.",
  },
] as const;

const shopOrigin = "https://merch.dade.studio";

const shopPieces = [
  {
    name: "Rave Owl",
    href: `${shopOrigin}/products/rave-owl`,
    image: "/assets/merch/rave-owl.jpg",
  },
  {
    name: "Morning Mountains",
    href: `${shopOrigin}/products/morning-mountains`,
    image: "/assets/merch/morning-mountains.jpg",
  },
  {
    name: "Sunset Mountains",
    href: `${shopOrigin}/products/sunset-mountains`,
    image: "/assets/merch/sunset-mountains.jpg",
  },
] as const;

const capabilityMenu = [
  {
    number: "01",
    title: "Web design + builds",
    detail: "Clear offer / responsive build",
  },
  {
    number: "02",
    title: "Branding + graphics",
    detail: "Identity / useful visual pieces",
  },
  {
    number: "03",
    title: "Tailored tools + workflows",
    detail: "Dashboards / practical workflows",
  },
  {
    number: "04",
    title: "Coaching + teaching",
    detail: "Patient help / clearer decisions",
  },
] as const;

export default function PrintroomSite() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroMeta}>
            <span>Websites / branding / tailored tools</span>
            <span>Design / build / teach</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span aria-hidden="true" />
                Independent creative + digital studio
              </p>
              <h1 id="hero-title">
                Websites that make your business easier to{" "}
                <span className={styles.heroAccent}>
                  <span>understand</span>
                  {" "}
                  <span>and choose.</span>
                </span>
              </h1>
              <p className={styles.heroIntro}>
                I design and build clear, distinctive websites for small businesses. When the site
                needs more, I can shape the branding, graphics, and practical digital tools around
                it.
              </p>
              <div className={styles.heroActions}>
                <a
                  className={styles.primaryButton}
                  href="mailto:dade@remainframe.com?subject=Dade%20Studio%20website%20project"
                >
                  Start a website project
                  <span aria-hidden="true">↗</span>
                </a>
                <a className={styles.textLink} href="#services">
                  See all services
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className={styles.heroCapability} aria-label="Dade Studio project capabilities">
              <div className={styles.capabilityHeader}>
                <Image
                  src="/assets/brand/logo-d.png"
                  alt=""
                  width={68}
                  height={68}
                  sizes="68px"
                />
                <div>
                  <span>Project menu</span>
                  <strong>Dade Studio</strong>
                </div>
              </div>
              <div className={styles.capabilityIntro}>
                <span>What we can make together</span>
                <span>Focused work / useful result</span>
              </div>
              <ol className={styles.capabilityList}>
                {capabilityMenu.map((item) => (
                  <li key={item.number}>
                    <span>{item.number}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.detail}</small>
                    </div>
                  </li>
                ))}
              </ol>
              <a className={styles.capabilityCta} href="#contact">
                Start a website project
                <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <div className={styles.heroLedger} aria-label="Studio capabilities">
            <span>Web design + builds</span>
            <span>Branding + graphics</span>
            <span>Tailored tools + workflows</span>
            <span>Coaching + teaching</span>
          </div>
        </section>

        <section
          className={styles.remainframeBand}
          id="remainframe"
          aria-labelledby="remainframe-title"
        >
          <div className={styles.remainframeTopline}>
            <span>01 / RemainFrame</span>
            <span>Custom AI secretary for small business</span>
          </div>
          <div className={styles.remainframeFeature}>
            <div className={styles.remainframeCopy}>
              <p className={styles.remainframeLabel}>A complementary Dade Studio service</p>
              <h2 id="remainframe-title">Get recurring work off your plate.</h2>
              <p>
                Dade Studio helps people understand and choose your business. RemainFrame helps the
                recurring work behind it keep moving. It is my custom AI secretary service for
                small businesses, starting with one useful job in the tools and routines you
                already use.
              </p>
              <a href="https://remainframe.com">
                Explore RemainFrame
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <a
              className={styles.remainframeImage}
              href="https://remainframe.com"
              aria-label="Visit RemainFrame"
            >
              <Image
                src="/assets/remainframe/remainframe-card-portrait.jpg"
                alt="RemainFrame artwork reading: You stay in control."
                width={1080}
                height={1350}
                sizes="(max-width: 760px) calc(100vw - 46px), (max-width: 1180px) min(760px, calc(100vw - 48px)), 47vw"
              />
            </a>
          </div>
        </section>

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>02 / Services</p>
            <h2 id="services-title">What needs to work better?</h2>
            <p>
              Start with the website. If the work needs more, I can connect the brand, tools, and
              supporting pieces into one clear result.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article
                className={`${styles.serviceCard} ${
                  service.emphasis === "primary"
                    ? styles.serviceCardFeatured
                    : service.emphasis === "secondary"
                      ? styles.serviceCardPriority
                      : ""
                }`}
                key={service.number}
              >
                <span className={styles.cardNumber}>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <a className={styles.serviceLink} href={service.href}>
                  {service.cta}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="process" aria-labelledby="process-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>03 / Process</p>
            <h2 id="process-title">A clear path from idea to useful result.</h2>
            <p>
              Enough structure to keep decisions clear, with room to improve the work as we go.
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
            <span>04 / The studio</span>
            <span>One person / start to finish</span>
          </div>
          <div className={styles.aboutGrid}>
            <h2 id="about-title">
              One person, from first conversation to <em>finished work.</em>
            </h2>
            <div className={styles.aboutCopy}>
              <p>
                I&apos;m Dade. I bring creative direction, design, practical technology, and
                patient teaching into one working relationship. I stay close to the work from the
                first conversation through the finished result.
              </p>
              <p>
                I work best with people and small businesses who want an active collaborator,
                honest guidance, and something useful they can put into the world.
              </p>
              <a href="#contact">
                Start a conversation
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.shopFeature} id="shop" aria-labelledby="shop-title">
          <div className={styles.shopTopline}>
            <span>05 / Studio shop</span>
            <span>Real products / online checkout / fulfilled by Fourthwall</span>
          </div>
          <div className={styles.shopShell}>
            <div className={styles.shopIntro}>
              <p className={styles.shopEyebrow}>Open storefront / Original Dade Studio work</p>
              <h2 id="shop-title">The Studio Shop is open.</h2>
              <p>
                Every product shown here is available to order now. Browse original Dade Studio
                artwork, choose what you want, and check out through Fourthwall, which handles
                payment and fulfillment.
              </p>
              <a
                className={styles.shopCta}
                href={shopOrigin}
                target="_blank"
                rel="noreferrer"
              >
                Open the live Studio Shop
                <span aria-hidden="true">↗</span>
              </a>
              <small>Secure checkout + fulfillment through Fourthwall</small>
            </div>

            <div className={styles.shopProducts}>
              {shopPieces.map((piece) => (
                <a
                  className={styles.shopProduct}
                  href={piece.href}
                  target="_blank"
                  rel="noreferrer"
                  key={piece.name}
                >
                  <div className={styles.shopProductImage}>
                    <Image
                      src={piece.image}
                      alt={`${piece.name} artwork printed on a shirt`}
                      width={720}
                      height={960}
                      sizes="(max-width: 760px) 70vw, (max-width: 1080px) 29vw, 18vw"
                    />
                  </div>
                  <span className={styles.shopProductMeta}>
                    <span>{piece.name}</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.faqSection}`}
          aria-labelledby="faq-title"
        >
          <div className={styles.faqHeading}>
            <p className={styles.sectionNumber}>06 / FAQ</p>
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
      </main>

      <footer className={styles.contact} id="contact">
        <p className={styles.contactKicker}>
          Ready for a clearer website and a better-connected business?
        </p>
        <h2>Tell me what needs to work better.</h2>
        <p className={styles.contactSupport}>
          A short note about your business, the current site, and what feels stuck is enough.
        </p>
        <a
          className={styles.emailLink}
          href="mailto:dade@remainframe.com?subject=Dade%20Studio%20project%20inquiry"
        >
          Start a website conversation
          <span aria-hidden="true">↗</span>
        </a>
        <a
          className={styles.emailAddress}
          href="mailto:dade@remainframe.com?subject=Dade%20Studio%20project%20inquiry"
        >
          dade@remainframe.com
        </a>
        <div className={styles.footerLine}>
          <span>Dade.Studio / Web design + creative services</span>
          <span className={styles.footerLinks}>
            <Link href="/bot-privacy">Bot privacy</Link>
            <a href="#main">Back to top ↑</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
