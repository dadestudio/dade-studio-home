import Link from "next/link";
import styles from "./products.module.css";

const problems = [
  {
    title: "Context amnesia",
    body: "Every new chat starts from zero, so you keep restating your business, your brand, and your history.",
  },
  {
    title: "Brand drift",
    body: "Outputs slide off-tone when tools cannot retain your voice and references.",
  },
  {
    title: "Knowledge fragmentation",
    body: "Notion, GitHub, docs, and conversations stay disconnected without a shared memory layer.",
  },
  {
    title: "Onboarding friction",
    body: "Each tool switch costs days of context loading before useful output.",
  },
  {
    title: "Decision fatigue",
    body: "You carry the full mental model because your AI stack does not keep it for you.",
  },
];

const plans = [
  {
    name: "Foundation",
    price: "$199",
    beta: "$159",
    detail: "Core Memory as a Service setup and maintenance across your current workflow.",
  },
  {
    name: "Active Memory",
    price: "$399",
    beta: "$319",
    detail: "Expanded Memory as a Service coverage with active tuning and support.",
  },
  {
    name: "Full Intelligence",
    price: "$799",
    beta: "$639",
    detail: "Full Memory as a Service operations for high-output creator teams.",
  },
];

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>

      <header className={styles.nav}>
        <div className={styles.navInner}>
          <Link className={styles.logo} href="/" aria-label="Dade Studio home">
            <img src="/assets/brand/logo-d.png" alt="Dade Studio" width={40} height={40} />
            <span>dade.studio / MaaS</span>
          </Link>
          <nav aria-label="Products navigation">
            <ul className={styles.navList}>
              <li>
                <a href="#problem">Problem</a>
              </li>
              <li>
                <a href="#how">How it works</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#waitlist">Waitlist</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.wrapper}>
            <p className={styles.badge}>Memory as a Service</p>
            <h1 id="hero-title">Your AI, finally working like a coworker.</h1>
            <p className={styles.heroBody}>
              Memory as a Service gives you persistent context across every AI tool you already use. Dade
              Studio builds and maintains the system end-to-end.
            </p>
            <ul className={styles.heroList}>
              <li>Works across every AI tool you already use.</li>
              <li>Your brand, business, and history stay in one private memory repo.</li>
              <li>Managed end-to-end so Memory as a Service stays reliable without extra ops work.</li>
            </ul>
          </div>
        </section>

        <section id="problem" className={styles.section} aria-labelledby="problem-title">
          <div className={styles.wrapper}>
            <div className={styles.sectionHead}>
              <p className={styles.sectionTag}>MaaS keystone</p>
              <h2 id="problem-title">Why Memory as a Service changes output quality</h2>
              <p>
                Memory as a Service keeps your full context alive between sessions, tools, and workflows.
              </p>
            </div>
            <div className={styles.problemGrid}>
              {problems.map((problem) => (
                <article className={styles.card} key={problem.title}>
                  <h3>{problem.title}</h3>
                  <p>{problem.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className={styles.section} aria-labelledby="how-title">
          <div className={styles.wrapper}>
            <div className={styles.sectionHead}>
              <p className={styles.sectionTag}>Three access points</p>
              <h2 id="how-title">How Memory as a Service works</h2>
            </div>
            <div className={styles.howGrid}>
              <article className={styles.card}>
                <h3>From any AI tool</h3>
                <p>Memory as a Service connects into the clients you already run day-to-day.</p>
              </article>
              <article className={styles.card}>
                <h3>From your workspace</h3>
                <p>Your existing sources remain the source of truth while Memory as a Service syncs them.</p>
              </article>
              <article className={styles.card}>
                <h3>From GitHub</h3>
                <p>Your private repo stays portable, auditable, and vendor-independent by design.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="infra-title">
          <div className={styles.wrapper}>
            <article className={styles.notice}>
              <h2 id="infra-title">Infrastructure model</h2>
              <p>
                Each client gets a private GitHub repo with isolated Memory as a Service data and no
                shared tenancy. You retain control of the memory source and can move it whenever you want.
              </p>
            </article>
          </div>
        </section>

        <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
          <div className={styles.wrapper}>
            <div className={styles.sectionHead}>
              <p className={styles.sectionTag}>Pricing</p>
              <h2 id="pricing-title">Memory as a Service plans</h2>
              <p>Simple monthly tiers with managed setup, maintenance, and support.</p>
            </div>
            <div className={styles.pricingGrid}>
              {plans.map((plan) => (
                <article className={styles.planCard} key={plan.name}>
                  <h3>{plan.name}</h3>
                  <p className={styles.planPrice}>
                    {plan.price}
                    <span>/mo</span>
                  </p>
                  <p className={styles.planBeta}>Beta {plan.beta} - 20 percent off</p>
                  <p>{plan.detail}</p>
                </article>
              ))}
            </div>
            <p className={styles.pricingNote}>
              Beta pricing is live now at 20 percent off: $159, $319, and $639 while cohort spots are
              open.
            </p>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="portable-title">
          <div className={styles.wrapper}>
            <article className={styles.notice}>
              <h2 id="portable-title">Why not just use Claude Memory?</h2>
              <p>
                Claude Memory only works in Claude. ChatGPT Memory only works in ChatGPT. Memory as a
                Service works across every AI tool you run, and that cross-AI portability is the premium
                that justifies $199, $399, and $799.
              </p>
            </article>
          </div>
        </section>

        <section id="waitlist" className={styles.cta} aria-labelledby="waitlist-title">
          <div className={styles.wrapper}>
            <p className={styles.badge}>Waitlist</p>
            <h2 id="waitlist-title">Bring Memory as a Service into your stack</h2>
            <p className={styles.ctaBody}>
              Share your workflow and current tooling. We will map fit, onboarding timeline, and next
              steps for Memory as a Service.
            </p>
            <form className={styles.form} action="#waitlist" method="post">
              <label htmlFor="waitlist-email" className={styles.srOnly}>
                Email address
              </label>
              <input id="waitlist-email" name="email" type="email" placeholder="you@company.com" required />
              <button type="submit">Join waitlist</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
