import Link from "next/link";
import { StartForm } from "../../_components/pilot-form";
import { pageMetadata } from "../../_lib/metadata";
import styles from "../../site.module.css";

export const metadata = pageMetadata({
  title: "Start With One Task",
  description:
    "Tell RemainFrame which recurring job keeps taking your time. Start a plain-language conversation about a custom AI assistant for your small business.",
  path: "/remainframe/start",
});

export default function StartPage() {
  return (
    <main className={styles.main} id="main-content" tabIndex={-1}>
      <header className={styles.pageHero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Start with one useful job</p>
          <h1>Tell me what keeps landing back on your plate.</h1>
          <p>
            You do not need to know what to build or how AI works. Describe the recurring work in your own words.
            I will reply with the clearest first step, including whether RemainFrame can learn the job as a skill or
            whether it needs a custom-built tool or integration.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="start-title">
        <div className={`${styles.shell} ${styles.formLayout}`}>
          <aside className={styles.formAside}>
            <p className={styles.sectionLabel}>A useful first conversation</p>
            <h2 id="start-title">Bring the messy version.</h2>
            <ul className={styles.checkList}>
              <li><strong>What repeats:</strong> the follow-up, update, search, checklist, or loose end that keeps returning.</li>
              <li><strong>Where it happens:</strong> the notes, inbox, website, document, or business tool involved.</li>
              <li><strong>What good looks like:</strong> the result you would want to review or receive.</li>
            </ul>
            <p className={`${styles.notice} ${styles.noticeSpaced}`}>
              This starts a conversation, not a purchase. Do not include passwords, private customer records,
              health information, payment-card data, or other sensitive information.
            </p>
          </aside>
          <StartForm />
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="next-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>What happens next</p>
            <h2 id="next-title">A direct answer before a complicated plan.</h2>
            <p>I will review the job, ask only the questions that matter, and explain the smallest useful way to begin.</p>
          </div>
          <ol className={styles.steps}>
            <li><h3>I review the work</h3><p>I look at the result you want, the information involved, and where human review belongs.</p></li>
            <li><h3>We choose the smallest useful scope</h3><p>That may be a new RemainFrame skill, an approved connection, or a custom-built tool.</p></li>
            <li><h3>You see the scope before deciding</h3><p>Any price, provider cost, access, timing, and data boundary is explained before paid work or setup begins.</p></li>
          </ol>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/how-it-works">See how RemainFrame works</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
