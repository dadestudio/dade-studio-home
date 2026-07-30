import Image from "next/image";
import Link from "next/link";
import styles from "./printroom.module.css";

const services = [
  {
    number: "01",
    title: "Web design + builds",
    body: "Focused websites that make the offer clear, feel intentional, and work on every screen.",
    cta: "Plan a website",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20website%20project",
    featured: true,
  },
  {
    number: "02",
    title: "Branding",
    body: "A distinct visual identity people can recognize and you can use with confidence.",
    cta: "Build a brand",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20branding%20project",
    featured: false,
  },
  {
    number: "03",
    title: "Graphic design",
    body: "Campaign graphics, social assets, print pieces, and everyday business materials.",
    cta: "Make a design",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20graphic%20design%20project",
    featured: false,
  },
  {
    number: "04",
    title: "Tailored tools + workflows",
    body: "Useful dashboards, digital tools, and workflows shaped around how your work gets done.",
    cta: "Improve a workflow",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20tailored%20tool%20or%20workflow",
    featured: false,
  },
  {
    number: "05",
    title: "Coaching + teaching",
    body: "Patient, one-on-one help using your tools, making decisions, and moving work forward.",
    cta: "Book practical help",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20coaching%20or%20teaching",
    featured: false,
  },
  {
    number: "06",
    title: "Practical marketing support",
    body: "Clearer offers, stronger messaging, and grounded ways to reach the right people.",
    cta: "Clarify the message",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20marketing%20support",
    featured: false,
  },
  {
    number: "07",
    title: "Merch + product design",
    body: "Original art and branded products made to be worth wearing, using, or selling.",
    cta: "Develop a product",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20merch%20or%20product%20design",
    featured: false,
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
      "No. Tell me what feels unclear, broken, slow, or unfinished. I will help identify the most useful first step.",
  },
] as const;

const shopPieces = [
  {
    name: "Rave Owl",
    href: "https://merch.dade.studio/products/rave-owl",
    image: "/assets/merch/rave-owl.jpg",
  },
  {
    name: "Morning Mountains",
    href: "https://merch.dade.studio/products/morning-mountains",
    image: "/assets/merch/morning-mountains.jpg",
  },
  {
    name: "Sunset Mountains",
    href: "https://merch.dade.studio/products/sunset-mountains",
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
    title: "Tailored digital tools",
    detail: "Dashboards / practical workflows",
  },
  {
    number: "04",
    title: "Coaching + guidance",
    detail: "Patient help / clearer decisions",
  },
] as const;

export default function PrintroomSite() {
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
              width={34}
              height={34}
              sizes="34px"
            />
            <span className={styles.brandText}>Dade.Studio</span>
          </Link>

          <nav className={styles.navLinks} aria-label="Primary navigation">
            <a href="#remainframe">RemainFrame</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#shop">Shop</a>
          </nav>

          <a className={styles.navCta} href="#contact">
            <span className={styles.navCtaLabel}>Start a project</span>
            <span className={styles.navCtaLabelShort}>Project</span>
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroMeta}>
            <span>Independent creative + digital studio</span>
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
                <span className={styles.heroAccent}>understand and choose.</span>
              </h1>
              <p className={styles.heroIntro}>
                I design and build clear, distinctive websites for small businesses, then support
                the branding, graphics, tools, and guidance that help the work hold together.
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
                Bring me the part that is not working
                <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <div className={styles.heroLedger} aria-label="Studio capabilities">
            <span>Web design + builds</span>
            <span>Branding + graphics</span>
            <span>Tailored tools</span>
            <span>Coaching + support</span>
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
              <p className={styles.remainframeLabel}>When the problem keeps coming back</p>
              <h2 id="remainframe-title">Get recurring work off your plate.</h2>
              <p>
                RemainFrame is my custom AI secretary service for small businesses. We start with
                one recurring job, fit it into the way you already work, and expand only after it
                proves useful.
              </p>
              <a href="https://remainframe.com">
                See how RemainFrame works
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <a
              className={styles.remainframeImage}
              href="https://remainframe.com"
              aria-label="Visit RemainFrame"
            >
              <Image
                src="/assets/remainframe/remainframe-card.png"
                alt="RemainFrame brand artwork"
                width={1200}
                height={630}
                sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1080px) calc(100vw - 48px), 57vw"
              />
            </a>
          </div>
        </section>

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>02 / Services</p>
            <h2 id="services-title">What needs to work better?</h2>
            <p>
              Start with the part holding you back. I can solve one focused need or connect the
              pieces into a more complete result.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article
                className={`${styles.serviceCard} ${
                  service.featured ? styles.serviceCardFeatured : ""
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
              One person from first conversation to{" "}
              <em>finished work.</em>
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
            <span>Live work / fulfilled by Fourthwall</span>
          </div>
          <div className={styles.shopShell}>
            <div className={styles.shopIntro}>
              <p className={styles.shopEyebrow}>Original art / Out in the world</p>
              <h2 id="shop-title">Studio ideas, made into real things.</h2>
              <p>
                The shop is where my illustration and product-design work lives. It is one working
                example of how studio ideas become finished things people can buy and use.
              </p>
              <a
                className={styles.shopCta}
                href="https://merch.dade.studio"
                target="_blank"
                rel="noreferrer"
              >
                Visit the shop
                <span aria-hidden="true">↗</span>
              </a>
              <small>merch.dade.studio</small>
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
          Have a website, brand, or workflow that needs to work better?
        </p>
        <h2>Tell me what&apos;s getting in the way.</h2>
        <p className={styles.contactSupport}>A short note is enough.</p>
        <a
          className={styles.emailLink}
          href="mailto:dade@remainframe.com?subject=Dade%20Studio%20project%20inquiry"
        >
          Email Dade about a project
          <span aria-hidden="true">↗</span>
        </a>
        <a
          className={styles.emailAddress}
          href="mailto:dade@remainframe.com?subject=Dade%20Studio%20project%20inquiry"
        >
          dade@remainframe.com
        </a>
        <div className={styles.footerLine}>
          <span>Dade.Studio / Creative + digital services</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
