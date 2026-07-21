import Link from "next/link";
import { pageMetadata } from "../../_lib/metadata";
import styles from "../../site.module.css";

export const metadata = pageMetadata({
  title: "What RemainFrame Can Do",
  description:
    "See how RemainFrame can help a small business with recurring work, create reusable skills, use approved tools, and support custom-built integrations.",
  path: "/remainframe/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <main className={styles.main} id="main-content" tabIndex={-1}>
      <header className={styles.pageHero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>What RemainFrame can do</p>
          <h1>Ask for the job. Build the right kind of help.</h1>
          <p>
            RemainFrame is not limited to one fixed list of features. It can use approved tools, remember how your
            business prefers work to be handled, and create reusable skills for many repeat jobs. More involved
            integrations and professional software can be custom-built around it.
          </p>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/start?source=capabilities-hero">Start with one task</Link>
            <Link className={styles.buttonSecondary} href="/remainframe/how-it-works">See the setup process</Link>
          </div>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="everyday-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Everyday help</p>
            <h2 id="everyday-title">Useful work without the technical vocabulary.</h2>
            <p>The exact setup depends on your business, your tools, and the information the job needs.</p>
          </div>
          <div className={styles.cardGrid}>
            <article><span>Follow up</span><h3>Prepare the next message</h3><p>Bring forward prior commitments, unanswered questions, and the details a useful draft needs.</p></article>
            <article><span>Organize</span><h3>Turn scattered updates into next steps</h3><p>Summarize approved information and show what changed, what remains open, and what needs your attention.</p></article>
            <article><span>Research</span><h3>Find information and keep the sources</h3><p>Gather useful material, compare options, and carry forward conclusions so the same ground is not covered again.</p></article>
            <article><span>Remember</span><h3>Keep the working context</h3><p>Retain useful preferences, instructions, decisions, and open work instead of starting from scratch each time.</p></article>
            <article><span>Repeat</span><h3>Save a good process as a skill</h3><p>When a job can be handled with approved information and tools, RemainFrame can create a reusable way to do it.</p></article>
            <article><span>Review</span><h3>Keep important decisions with a person</h3><p>Prepare and organize the work while leaving messages, spending, record changes, and business judgment with you.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="build-title">
        <div className={`${styles.shell} ${styles.split}`}>
          <div>
            <p className={styles.sectionLabel}>Skill or custom build?</p>
            <h2 id="build-title">The request decides the tool.</h2>
          </div>
          <dl className={styles.definitionList}>
            <div>
              <dt>Reusable skill</dt>
              <dd>Instructions, checks, and repeatable steps that RemainFrame can save and use again with tools it is already allowed to use.</dd>
            </div>
            <div>
              <dt>Approved connection</dt>
              <dd>A carefully scoped connection that lets RemainFrame read from or work with a service you already use.</dd>
            </div>
            <div>
              <dt>Custom integration</dt>
              <dd>A professionally built and tested connection when the job needs account access, custom code, or more careful data handling.</dd>
            </div>
            <div>
              <dt>Custom business tool</dt>
              <dd>A website, form, dashboard, customer portal, or piece of software built when the work needs its own interface.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="ask-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Requests, not feature hunting</p>
            <h2 id="ask-title">You can start by saying what you want.</h2>
            <p>These are examples of useful requests, not a fixed menu or a promise that every outside service is already connected.</p>
          </div>
          <div className={styles.pillarGrid}>
            <article><span>Example 01</span><h3>“Show me what still needs a customer follow-up.”</h3><p>RemainFrame can help define the sources, rules, and review step behind a repeatable follow-up list.</p></article>
            <article><span>Example 02</span><h3>“Turn these weekly updates into one clear briefing.”</h3><p>It can save the structure, gather approved information, and prepare the same useful format next time.</p></article>
            <article><span>Example 03</span><h3>“I need a form that puts new requests in the right place.”</h3><p>If that needs a custom interface or connection, I can build and test the supporting tool professionally.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="limits-title">
        <div className={styles.shell}>
          <div className={styles.boundaryBox}>
            <h2 id="limits-title">Clear limits are part of a useful setup.</h2>
            <ul>
              <li>RemainFrame is not promised to connect to every website, account, or business system.</li>
              <li>New access and integrations are reviewed before they are enabled.</li>
              <li>Important outside actions need an appropriate human review or approval step.</li>
              <li>AI output can be wrong and must be reviewed for important business use.</li>
              <li>Regulated, highly sensitive, and high-stakes uses require separate evaluation and may not be supported.</li>
            </ul>
            <div className={styles.pageActions}>
              <Link className={styles.buttonPrimary} href="/remainframe/security">Read about security and control</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} aria-labelledby="capability-cta-title">
        <div className={`${styles.shell} ${styles.ctaPanel}`}>
          <div>
            <p className={styles.sectionLabel}>What do you want it to do?</p>
            <h2 id="capability-cta-title">Start with the result, not the technology.</h2>
            <p>Describe one recurring job. I will tell you whether it fits a RemainFrame skill, an approved connection, or a custom build.</p>
          </div>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/start?source=capabilities-final">Tell me what takes too much time</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
