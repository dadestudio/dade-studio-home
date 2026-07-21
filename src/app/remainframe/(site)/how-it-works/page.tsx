import Link from "next/link";
import { JsonLd } from "../../_components/json-ld";
import { absoluteUrl, pageMetadata } from "../../_lib/metadata";
import styles from "../../site.module.css";

export const metadata = pageMetadata({
  title: "How RemainFrame Works",
  description:
    "See how RemainFrame turns one recurring small-business job into a useful AI assistant workflow, reusable skill, approved connection, or custom-built tool.",
  path: "/remainframe/how-it-works",
});

const steps = [
  {
    name: "Show me the work",
    text: "Describe one recurring job, where the information comes from, and what a useful result looks like.",
  },
  {
    name: "Choose the simplest useful approach",
    text: "Decide whether the job fits a reusable RemainFrame skill, an approved connection, or a custom-built tool.",
  },
  {
    name: "Set up and test the work",
    text: "Configure only the information and tools the job needs, then test the result with real examples before relying on it.",
  },
  {
    name: "Improve before expanding",
    text: "Correct the work, refine the skill, and add another responsibility only after the first one proves useful.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <main className={styles.main} id="main-content" tabIndex={-1}>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How RemainFrame works",
        description: "A plain-language process for setting up a custom AI secretary around one recurring business job.",
        url: absoluteUrl("/remainframe/how-it-works"),
        step: steps.map((step) => ({ "@type": "HowToStep", name: step.name, text: step.text })),
      }} />

      <header className={styles.pageHero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>How it works</p>
          <h1>Start with the work, not the technology.</h1>
          <p>
            You do not have to design an AI system. Show me one recurring job that keeps taking your time.
            I will help turn it into the smallest useful RemainFrame setup, explain the boundaries, and test it with you.
          </p>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/start?source=how-it-works-hero">Tell me what takes too much time</Link>
            <Link className={styles.buttonSecondary} href="/remainframe/capabilities">See what RemainFrame can do</Link>
          </div>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="process-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>The process</p>
            <h2 id="process-title">Four steps from “this keeps piling up” to useful help.</h2>
            <p>Each step keeps the job understandable, testable, and under your control.</p>
          </div>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.name}><h3>{step.name}</h3><p>{step.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="path-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>The right-sized path</p>
            <h2 id="path-title">Not every request needs custom software.</h2>
            <p>The job determines whether RemainFrame can learn a repeatable skill or whether I should build something more involved.</p>
          </div>
          <div className={styles.pillarGrid}>
            <article><span>Skill</span><h3>Save a useful way of working</h3><p>For many jobs, RemainFrame can turn your instructions and corrections into a reusable skill it can follow again.</p></article>
            <article><span>Connection</span><h3>Use an approved business tool</h3><p>When a job needs information from another service, the connection and access are checked before use.</p></article>
            <article><span>Custom build</span><h3>Create the tool the job is missing</h3><p>I can build and test a more involved integration, website, form, dashboard, or custom piece of software.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="review-title">
        <div className={`${styles.shell} ${styles.split}`}>
          <div>
            <p className={styles.sectionLabel}>You stay involved where it matters</p>
            <h2 id="review-title">Helpful does not mean unsupervised.</h2>
          </div>
          <div>
            <p className={styles.proseLead}>
              Before setup, we agree on the information RemainFrame may use, the tools involved, and the actions that
              still require a person. The first results are reviewed before the job expands.
            </p>
            <ul className={styles.trustList}>
              <li><strong>Access:</strong> give the job only the information and tools it actually needs.</li>
              <li><strong>Approval:</strong> keep people in the path for important messages, spending, deletion, and record changes.</li>
              <li><strong>Correction:</strong> improve the instructions when the work is incomplete or wrong.</li>
              <li><strong>Expansion:</strong> add more only after the first responsibility earns it.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} aria-labelledby="how-cta-title">
        <div className={`${styles.shell} ${styles.ctaPanel}`}>
          <div>
            <p className={styles.sectionLabel}>Your first job</p>
            <h2 id="how-cta-title">You bring the problem. I will help shape the setup.</h2>
            <p>Start with the recurring work you would most like to stop carrying alone.</p>
          </div>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/start?source=how-it-works-final">Start with one task</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
