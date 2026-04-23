import Link from "next/link";
import styles from "./studio.module.css";

const offers = [
  {
    title: "Memory System",
    body: "Your AI, finally working like a coworker. Managed AI memory that gives every tool you use persistent context.",
    detail: "Starting at $199 per month",
    cta: "Explore MaaS",
    href: "https://maas.dade.studio",
  },
  {
    title: "Web + Brand Build",
    body: "Sites and identity systems that do not rot. Fixed-scope builds on Next.js + Tailwind + shadcn/ui. Shipped in weeks.",
    detail: "Fixed scope engagement",
    cta: "View selected work",
    href: "/work",
    internal: true,
  },
  {
    title: "Studio Retainer",
    body: "Ongoing design + AI ops, one partner. Monthly retainer for teams that need continuous execution.",
    detail: "By application",
    cta: "Apply via Start",
    href: "/start",
    internal: true,
  },
];

const plans = [
  {
    name: "Foundation",
    price: "$199",
    beta: "$159 beta",
    summary: "For creators who need a reliable memory base.",
  },
  {
    name: "Active Memory",
    price: "$399",
    beta: "$319 beta",
    summary: "For teams running Memory as a Service across daily tools.",
  },
  {
    name: "Full Intelligence",
    price: "$799",
    beta: "$639 beta",
    summary: "For full system ownership with higher support cadence.",
  },
];

export default function StudioPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="Dade Studio home">
          <img src="/assets/brand/logo-d.png" alt="Dade Studio" width={40} height={40} />
          <span>dade.studio</span>
        </Link>
        <nav aria-label="Studio navigation">
          <ul className={styles.navList}>
            <li>
              <a href="#offers">Offers</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Available for new projects</p>
            <h1 id="hero-title">Dade.Studio</h1>
            <p className={styles.heroBody}>
              Managed AI memory, brand systems, and web experiences for creators, founders, and
              small teams. Built by one person. Maintained so it stays alive.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/start">
                Start a project
              </Link>
              <Link className={styles.secondaryButton} href="/work">
                See the work
              </Link>
            </div>
          </div>
          <div className={styles.codeCard} aria-label="Studio stack preview">
            <p className={styles.codeTitle}>studio.config.ts</p>
            <pre>
{`export const studio = {
  owner: "Dade",
  primary: "Memory as a Service",
  stack: ["Notion", "GitHub", "Cursor", "Supabase"],
  voice: "Calm. Specific. Built to last."
}`}
            </pre>
          </div>
        </section>

        <section id="offers" className={styles.section} aria-labelledby="offers-title">
          <p className={styles.sectionMarker}>What I do</p>
          <h2 id="offers-title">Three ways to work together.</h2>
          <div className={styles.offerGrid}>
            {offers.map((offer) => (
              <article className={styles.card} key={offer.title}>
                <h3>{offer.title}</h3>
                <p>{offer.body}</p>
                <p className={styles.cardMeta}>{offer.detail}</p>
                {offer.internal ? <Link href={offer.href}>{offer.cta}</Link> : <a href={offer.href}>{offer.cta}</a>}
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
          <p className={styles.sectionMarker}>MaaS pricing</p>
          <h2 id="pricing-title">Memory as a Service plans</h2>
          <p className={styles.sectionIntro}>
            Beta pricing is 20 percent off every tier while onboarding remains limited.
          </p>
          <div className={styles.planGrid}>
            {plans.map((plan) => (
              <article className={styles.planCard} key={plan.name}>
                <h3>{plan.name}</h3>
                <p className={styles.planPrice}>{plan.price}</p>
                <p className={styles.planBeta}>{plan.beta}</p>
                <p>{plan.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Ready when you are.</h2>
          <p className={styles.sectionIntro}>
            Tell me what you are building and I will respond with scope, timeline, and fit.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="mailto:hello@dade.studio">
              hello@dade.studio
            </a>
            <a className={styles.secondaryButton} href="https://cal.com/dade">
              Book a call
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
