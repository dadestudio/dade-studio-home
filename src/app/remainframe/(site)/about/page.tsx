import Link from "next/link";
import { pageMetadata } from "../../_lib/metadata";
import styles from "../../site.module.css";

export const metadata = pageMetadata({
  title: "About RemainFrame",
  description:
    "RemainFrame is a custom AI assistant built by Dade.Studio to help small businesses spend less time on recurring work and complicated software.",
  path: "/remainframe/about",
});

export default function AboutPage() {
  return (
    <main className={styles.main} id="main-content" tabIndex={-1}>
      <header className={styles.pageHero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>About RemainFrame</p>
          <h1>Technology should take work off your plate.</h1>
          <p>
            RemainFrame is a custom AI secretary for owner-led businesses and small teams. It is built and operated
            by Dade.Studio, an independent practice in Pagosa Springs, Colorado.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="why-title">
        <div className={`${styles.shell} ${styles.split}`}>
          <div>
            <p className={styles.sectionLabel}>Why it exists</p>
            <h2 id="why-title">Running the business is already complicated enough.</h2>
          </div>
          <div>
            <p className={styles.proseLead}>
              Small-business owners are expected to keep track of customers, projects, messages, paperwork, and
              decisions while also learning a constant stream of new software.
            </p>
            <p>
              RemainFrame takes the opposite approach. Start with the work you need help carrying. The technology is
              shaped around that job, explained in plain language, and expanded only when it proves useful.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="principles-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>How it is built</p>
            <h2 id="principles-title">Practical help, clear boundaries, honest limits.</h2>
            <p>These principles guide both RemainFrame setups and the custom tools built around them.</p>
          </div>
          <div className={styles.cardGrid}>
            <article><span>01</span><h3>Plain language first</h3><p>You should be able to explain the job without learning technical vocabulary.</p></article>
            <article><span>02</span><h3>One useful responsibility</h3><p>A focused first job is easier to test, improve, and trust than a promise to handle everything.</p></article>
            <article><span>03</span><h3>Skills that can grow</h3><p>Repeatable work can become a reusable skill and improve as you correct the process.</p></article>
            <article><span>04</span><h3>People keep judgment</h3><p>Important messages, spending, record changes, and business decisions stay with an accountable person.</p></article>
            <article><span>05</span><h3>Custom work when needed</h3><p>Connections, websites, dashboards, and software are professionally built when a saved skill is not enough.</p></article>
            <article><span>06</span><h3>Claims follow evidence</h3><p>Capabilities, limits, access, cost, and responsibility should be clear before you depend on the work.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="local-title">
        <div className={`${styles.shell} ${styles.split}`}>
          <div>
            <p className={styles.sectionLabel}>Built from a small town</p>
            <h2 id="local-title">Made for real businesses, not technology departments.</h2>
          </div>
          <div>
            <p className={styles.proseLead}>
              RemainFrame is being shaped in a rural mountain community where most businesses do not have an IT
              department and should not need one to get useful help from AI.
            </p>
            <p>
              The goal is simple: understand the work, build the right-sized solution, and leave the owner with more
              time and less to manage.
            </p>
            <div className={styles.pageActions}>
              <Link className={styles.buttonPrimary} href="/remainframe/start?source=about">Tell me what takes too much time</Link>
              <Link className={styles.buttonSecondary} href="/remainframe/how-it-works">See how it works</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
