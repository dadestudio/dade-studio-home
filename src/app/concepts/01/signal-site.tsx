import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    number: "01",
    title: "Branding",
    body: "A clear visual identity people can recognize and you can actually use.",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20branding%20project",
  },
  {
    number: "02",
    title: "Graphic design",
    body: "Campaign graphics, social assets, print pieces, and everyday business materials.",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20graphic%20design%20project",
  },
  {
    number: "03",
    title: "Merch + product design",
    body: "Original art and branded products made to be worth wearing, using, or selling.",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20merch%20or%20product%20design",
  },
  {
    number: "04",
    title: "Web design + builds",
    body: "Focused websites that explain the offer, feel intentional, and work on every screen.",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20website%20project",
  },
  {
    number: "05",
    title: "Tailored tools + workflows",
    body: "Useful dashboards, tools, and workflows shaped around how your work actually gets done.",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20tailored%20tool%20or%20workflow",
  },
  {
    number: "06",
    title: "Coaching + teaching",
    body: "Practical, one-on-one help using your tools, making decisions, and moving the work forward.",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20coaching%20or%20teaching",
  },
  {
    number: "07",
    title: "Practical marketing support",
    body: "Clearer offers, stronger messaging, and grounded ways to reach the right people.",
    href: "mailto:dade@remainframe.com?subject=Dade%20Studio%20marketing%20support",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Clarify the need",
    body: "We define what needs to change, who it is for, and what a useful result looks like.",
  },
  {
    number: "02",
    title: "Shape the direction",
    body: "I turn the goal into a focused creative and practical direction you can judge in context.",
  },
  {
    number: "03",
    title: "Make the work",
    body: "Design, building, or hands-on guidance happens in one clear, collaborative process.",
  },
  {
    number: "04",
    title: "Put it to use",
    body: "Launch it, publish it, wear it, or make it part of the way your business works.",
  },
] as const;

const faqs = [
  {
    question: "What can I hire you for?",
    answer:
      "Branding, graphic design, merch and product design, websites, tailored tools and workflows, coaching, and practical marketing support.",
  },
  {
    question: "Can we start with something small?",
    answer:
      "Yes. A focused project is often the best place to start. We can solve the immediate need first and expand only when it makes sense.",
  },
  {
    question: "Where does RemainFrame fit?",
    answer:
      "RemainFrame is my custom AI secretary service for small businesses. It starts with one recurring job and grows only where it proves useful.",
  },
  {
    question: "How do we start?",
    answer:
      "Send a short note about what you are making, what is not working, or what you want help learning. I will reply with the clearest next step.",
  },
] as const;

const shopPieces = [
  {
    name: "Sunset Mountains",
    href: "https://merch.dade.studio/products/sunset-mountains",
    image: "/assets/merch/sunset-mountains.jpg",
  },
  {
    name: "Girl Retro Wave",
    href: "https://merch.dade.studio/products/girl-retro-wave-shirt",
    image: "/assets/merch/girl-retro-wave-shirt.jpg",
  },
  {
    name: "Rave Owl",
    href: "https://merch.dade.studio/products/rave-owl",
    image: "/assets/merch/rave-owl.jpg",
  },
] as const;

export default function SignalSite() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      <header className={styles.siteHeader}>
        <div className={styles.navShell}>
          <Link className={styles.brand} href="/" aria-label="Dade Studio home">
            <span className={styles.brandMonogram} aria-hidden="true">
              D
            </span>
            <span className={styles.brandText}>Dade.Studio</span>
          </Link>

          <nav className={styles.navLinks} aria-label="Primary navigation">
            <a href="#shop">Shop</a>
            <a href="#services">Services</a>
            <a href="#remainframe">RemainFrame</a>
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
            <span>Independent creative + digital studio</span>
            <span>Design / build / teach</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span aria-hidden="true" />
                Creative work, made useful.
              </p>
              <h1 id="signal-title">
                <span>Your ideas.</span>
                <span className={styles.heroAccent}>Made useful.</span>
                <span>Made real.</span>
              </h1>
              <p className={styles.heroIntro}>
                Branding, graphics, merch, websites, tailored digital tools, and hands-on guidance
                for people building something real.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#contact">
                  Tell me what you need
                  <span aria-hidden="true">↘</span>
                </a>
                <a
                  className={styles.textLink}
                  href="https://merch.dade.studio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shop the art
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className={styles.heroArt}>
              <span className={styles.heroArtSun} aria-hidden="true" />
              <a
                className={styles.heroProduct}
                href="https://merch.dade.studio/products/girl-retro-wave-shirt"
                target="_blank"
                rel="noreferrer"
                aria-label="Shop the Girl Retro Wave shirt"
              >
                <Image
                  src="/assets/merch/girl-retro-wave-shirt.jpg"
                  alt="Yellow shirt featuring Dade's Girl Retro Wave artwork"
                  width={720}
                  height={960}
                  sizes="(max-width: 760px) 62vw, 30vw"
                  priority
                />
              </a>
              <span className={styles.heroArtLabel}>
                Original art
                <br />
                on real products
              </span>
              <a
                className={styles.heroArtLink}
                href="https://merch.dade.studio"
                target="_blank"
                rel="noreferrer"
              >
                Shop live ↗
              </a>
            </div>
          </div>

          <div className={styles.heroLedger} aria-label="Studio capabilities">
            <span>Branding</span>
            <span>Design</span>
            <span>Merch + product</span>
            <span>Web + digital</span>
          </div>
        </section>

        <section className={styles.shopFeature} id="shop" aria-labelledby="shop-title">
          <div className={styles.shopShell}>
            <div className={styles.shopIntro}>
              <p className={styles.shopEyebrow}>Studio shop / Live now</p>
              <h2 id="shop-title">The art is already out in the world.</h2>
              <p>
                Original artwork, translated into things you can wear and keep. The shop is also
                a working example of the studio&apos;s merch and product-design work.
              </p>
              <a
                className={styles.shopCta}
                href="https://merch.dade.studio"
                target="_blank"
                rel="noreferrer"
              >
                Shop every piece
                <span aria-hidden="true">↗</span>
              </a>
              <small>merch.dade.studio / fulfilled by Fourthwall</small>
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
                      sizes="(max-width: 760px) 76vw, (max-width: 1080px) 30vw, 22vw"
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

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>01 / Services</p>
            <h2 id="services-title">What I can help you make.</h2>
            <p>
              Start with one thing. I can handle a focused piece or connect several pieces into one
              clear result.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.number}>
                <span className={styles.cardNumber}>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <a className={styles.serviceLink} href={service.href}>
                  Ask about this
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
        <section
          className={styles.remainframeBand}
          id="remainframe"
          aria-labelledby="remainframe-title"
        >
          <div className={styles.remainframeTopline}>
            <span>02 / RemainFrame</span>
            <span>Custom AI secretary for small business</span>
          </div>
          <div className={styles.remainframeFeature}>
            <a
              className={styles.remainframeImage}
              href="https://remainframe.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit RemainFrame"
            >
              <Image
                src="/assets/remainframe/remainframe-card.png"
                alt="RemainFrame brand artwork"
                width={1200}
                height={630}
                sizes="(max-width: 760px) calc(100vw - 36px), 58vw"
              />
            </a>
            <div className={styles.remainframeCopy}>
              <p className={styles.remainframeLabel}>Another way I help small businesses</p>
              <h2 id="remainframe-title">Get recurring work off your plate.</h2>
              <p>
                RemainFrame is my custom AI secretary service. It starts with one recurring job,
                fits the way your business already works, and expands only when it proves useful.
              </p>
              <a href="https://remainframe.com" target="_blank" rel="noreferrer">
                Explore RemainFrame
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
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
            <span>Design / build / teach</span>
          </div>
          <div className={styles.aboutGrid}>
            <h2 id="about-title">
              I design, build,
              <br />
              and <em>teach.</em>
            </h2>
            <div className={styles.aboutCopy}>
              <p>
                I bring creative direction and practical execution together, so the idea does not
                get lost between the conversation and the finished work.
              </p>
              <p>
                I work best with people and small businesses who want an active collaborator,
                honest guidance, and something useful they can put into the world.
              </p>
              <a href="#contact">
                Tell me what you need
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
          <p className={styles.contactKicker}>
            Need something to look better, work better, or finally get made?
          </p>
          <h2>Tell me what you need.</h2>
          <a
            className={styles.emailLink}
            href="mailto:dade@remainframe.com?subject=Dade%20Studio%20project%20inquiry"
          >
            Email Dade
            <span aria-hidden="true">↗</span>
          </a>
          <div className={styles.footerLine}>
            <span>Dade.Studio / Creative + digital services</span>
            <a href="#main">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
