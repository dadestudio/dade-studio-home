import Image from "next/image";
import Link from "next/link";
import styles from "./printroom.module.css";
import SiteHeader from "./site-header";
import ProjectInquiry, { ServiceInquiryLink } from "./project-inquiry";
import { faqs, services, studioEmail } from "./studio-content";

const process = [
  {
    number: "01",
    title: "Find the real need",
    body: "We name what feels unclear, broken, slow, or unfinished and define a useful result.",
  },
  {
    number: "02",
    title: "Agree on the scope",
    body: "You receive a written scope, price, and delivery plan before project work begins.",
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
    title: "Website design + build",
    detail: "Clear offer / responsive build",
  },
  {
    number: "02",
    title: "Graphic design",
    detail: "Launch / product / everyday visuals",
  },
  {
    number: "03",
    title: "Merch-store design + setup",
    detail: "Storefront / product graphics / setup",
  },
] as const;

export default function PrintroomSite() {
  return (
    <div className={styles.page}>
      <Link className={styles.skipLink} href="#main">
        Skip to main content
      </Link>

      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroMeta}>
            <span>Websites / graphics / merch stores</span>
            <span>Design / build / set up</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span aria-hidden="true" />
                Independent creative + digital studio
              </p>
              <h1 id="hero-title">
                Make your business easier to{" "}
                <span className={styles.heroAccent}>
                  <span>understand</span>
                  {" "}
                  <span>and choose.</span>
                </span>
              </h1>
              <p className={styles.heroIntro}>
                Websites, graphics, and merch stores for small businesses and independent
                creators. Work directly with Dade to turn an unclear or unfinished idea into
                something useful.
              </p>
              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  href="#contact"
                >
                  Tell me what you need made
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link className={styles.textLink} href="#services">
                  See all services
                  <span aria-hidden="true">↓</span>
                </Link>
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
              <Link className={styles.capabilityCta} href="#contact">
                Start a project
                <span aria-hidden="true">↘</span>
              </Link>
            </div>
          </div>

          <div className={styles.heroLedger} aria-label="Studio capabilities">
            <span>Website design + build</span>
            <span>Graphic design</span>
            <span>Merch-store design + setup</span>
            <span>Work directly with Dade</span>
          </div>
        </section>

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionNumber}>01 / Services</p>
            <h2 id="services-title">Start with one useful result.</h2>
            <p>
              A focused website, a set of graphics, or a merch store. We agree on the scope,
              price, and delivery plan before project work begins.
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
                <ServiceInquiryLink className={styles.serviceLink} service={service.title}>
                  {service.cta}
                  <span aria-hidden="true">↗</span>
                </ServiceInquiryLink>
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
            <span>02 / Studio project</span>
            <span>Self-owned / in development</span>
          </div>
          <div className={styles.remainframeFeature}>
            <div className={styles.remainframeCopy}>
              <p className={styles.remainframeLabel}>RemainFrame / a Dade Studio project</p>
              <h2 id="remainframe-title">Exploring a better way to handle recurring work.</h2>
              <p>
                RemainFrame is my own project in development, exploring how AI can support
                recurring small-business work while people stay in control. It is part of the
                studio&apos;s ongoing work. For a website, graphics, or merch store, start with
                the services above.
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
              <Link href="#contact">
                Start a conversation
                <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.shopFeature} id="shop" aria-labelledby="shop-title">
          <div className={styles.shopTopline}>
            <span>05 / Studio project</span>
            <span>Real products / online checkout / fulfilled by Fourthwall</span>
          </div>
          <div className={styles.shopShell}>
            <div className={styles.shopIntro}>
              <p className={styles.shopEyebrow}>Self-owned store / Original Dade Studio work</p>
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
          Websites / graphics / merch stores
        </p>
        <h2>Tell me what you need made.</h2>
        <p className={styles.contactSupport}>
          A short note about your business, what you need, and any deadline is enough to start.
        </p>
        <ProjectInquiry />
        <a
          className={styles.emailAddress}
          href={`mailto:${studioEmail}?subject=Dade%20Studio%20project%20inquiry`}
        >
          Prefer to write directly? {studioEmail}
        </a>
        <div className={styles.footerLine}>
          <span>Dade.Studio / Web design + creative services</span>
          <span className={styles.footerLinks}>
            <Link href="/bot-privacy">Bot privacy</Link>
            <Link href="#main">Back to top ↑</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
