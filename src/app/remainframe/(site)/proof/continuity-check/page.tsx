import Link from "next/link";
import { JsonLd } from "../../../_components/json-ld";
import { absoluteUrl, pageMetadata } from "../../../_lib/metadata";
import styles from "../../../site.module.css";

export const metadata = pageMetadata({
  title: "Operator-Run AI Continuity Check",
  description:
    "A dated, bounded RemainFrame proving-ground check: six native memory packets, separate recall sessions, defined scoring, safety regressions, and explicit limitations.",
  path: "/remainframe/proof/continuity-check",
  type: "article",
});

export default function ContinuityCheckPage() {
  return (
    <main className={styles.main} id="main-content" tabIndex={-1}>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: "RemainFrame operator-run continuity check",
        description: "A bounded native-agent memory retention and recall check completed in the controlled RemainFrame proving ground.",
        datePublished: "2026-07-15",
        dateModified: "2026-07-20",
        url: absoluteUrl("/remainframe/proof/continuity-check"),
        author: { "@type": "Organization", name: "Dade.Studio", url: "https://dade.studio" },
        publisher: { "@type": "Organization", name: "Dade.Studio", url: "https://dade.studio" },
        image: absoluteUrl("/remainframe/opengraph-image"),
      }} />

      <header className={styles.pageHero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Operator-run evidence / July 15, 2026</p>
          <h1>A continuity check with the result and the boundary.</h1>
          <p>
            This controlled test used private RemainFrame chat sessions and the active memory provider.
            It measures whether six defined context packets were retained and recalled in separate sessions.
            It is not a customer outcome, general accuracy benchmark, or proof of universal integration.
          </p>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/capabilities">See what works today</Link>
            <Link className={styles.buttonSecondary} href="/remainframe/security">Review the trust model</Link>
          </div>
        </div>
      </header>

      <section className={styles.sectionTight} aria-labelledby="result-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>The result</p>
            <h2 id="result-title">Six packets. Separate recall. Defined scoring.</h2>
            <p>Percentages refer only to the checklist for this private test corpus, not to unrestricted memory or model accuracy.</p>
          </div>
          <div className={styles.cardGrid}>
            <article><span>6 / 6</span><h3>Packets completed</h3><p>Identity and privacy, work preferences, studio context, product context, agent self-awareness, and a private project map.</p></article>
            <article><span>100%</span><h3>Retention and recall score</h3><p>Every required item in the six packet-specific checks was present in the durable-memory and later read-only recall checks.</p></article>
            <article><span>0 bytes</span><h3>Prompt growth</h3><p>The measured baseline and final native prompt were both 22,469 bytes. Durable context was not copied into an ever-growing prompt.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="method-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Method</p>
            <h2 id="method-title">The memory path stayed native.</h2>
            <p>No direct memory file, database, SDK, sidecar, or reset path was used to manufacture the result.</p>
          </div>
          <ol className={styles.steps}>
            <li><h3>Snapshot the baseline</h3><p>Record prompt size, current behavior, provider state, and a private pre-test snapshot before adding context.</p></li>
            <li><h3>Write through chat</h3><p>Use native terminal chat sessions to request explicit durable writes through the active Honcho memory path.</p></li>
            <li><h3>Recall separately</h3><p>Open later recall sessions, use read-only memory tools, and score each answer against the packet-specific checklist.</p></li>
          </ol>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="safety-title">
        <div className={`${styles.shell} ${styles.split}`}>
          <div>
            <p className={styles.sectionLabel}>Safety regressions</p>
            <h2 id="safety-title">Memory was not allowed to erase restraint.</h2>
          </div>
          <div>
            <p className={styles.proseLead}>The pre-ingestion and post-ingestion checks both passed for the behaviors measured.</p>
            <ul className={styles.trustList}>
              <li><strong>Unknown details:</strong> the agent did not invent private facts outside the test context.</li>
              <li><strong>Identity boundary:</strong> the configured addressing and prohibited-identity checks remained intact.</li>
              <li><strong>Local-time behavior:</strong> the existing display behavior remained intact without reteaching it.</li>
              <li><strong>Private corpus:</strong> raw prompts, answers, relationship details, and memory contents were excluded from public evidence.</li>
              <li><strong>Storage hygiene:</strong> the plaintext packet directory was removed after the private verification completed.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="limits-title">
        <div className={styles.shell}>
          <div className={styles.boundaryBox}>
            <h2 id="limits-title">What this result does not prove.</h2>
            <ul>
              <li>It does not prove perfect recall, general model accuracy, or safe behavior outside the defined checks.</li>
              <li>It does not represent a customer deployment, customer testimonial, or measured business outcome.</li>
              <li>It does not prove continuity across every AI tool or channel.</li>
              <li>It does not prove complete export, correction, deletion, tenant isolation, or regulatory compliance.</li>
              <li>It is one operator-run technical result from the current controlled proving ground and should be repeated as the system changes.</li>
            </ul>
            <div className={styles.pageActions}>
              <Link className={styles.buttonPrimary} href="/remainframe/start?source=continuity-proof">Start with one task</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
