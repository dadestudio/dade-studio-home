import Link from "next/link";
import { pageMetadata } from "../../_lib/metadata";
import styles from "../../site.module.css";

export const metadata = pageMetadata({
  title: "Small Business AI Assistant Examples",
  description:
    "Explore practical ways a custom RemainFrame AI assistant can help a small business with follow-ups, briefings, research, recurring work, and custom tools.",
  path: "/remainframe/use-cases",
});

const cases = [
  {
    label: "Customer follow-up",
    title: "Keep the next conversation from getting lost",
    pressure: "Promises, questions, and next steps are scattered across notes and messages. Following up depends on you remembering everything.",
    help: "RemainFrame can help gather the approved context, identify who still needs attention, and prepare the next message for review.",
    control: "You review important messages before they are sent unless a separate, tested approval path is added.",
  },
  {
    label: "Owner briefing",
    title: "See what changed without rereading everything",
    pressure: "Updates arrive from several places, but only a few of them need your decision.",
    help: "RemainFrame can turn approved updates into a clear summary of changes, open questions, and next steps.",
    control: "The briefing supports your judgment. It does not make financial, legal, hiring, or other important decisions for you.",
  },
  {
    label: "Research",
    title: "Carry useful findings into the next round",
    pressure: "Research gets repeated because earlier sources, conclusions, and rejected options are hard to find.",
    help: "RemainFrame can gather information, keep the sources attached, and remember what has already been learned.",
    control: "Important facts still need verification, especially for legal, medical, financial, or other professional decisions.",
  },
  {
    label: "Recurring updates",
    title: "Turn a repeated process into a reusable skill",
    pressure: "A weekly or monthly update follows the same steps, but you rebuild it from scratch every time.",
    help: "Show RemainFrame the inputs, checks, and format you want. When the job fits its approved tools, those steps can become a reusable skill.",
    control: "You can review the result, correct the process, and decide when it is ready to use again.",
  },
  {
    label: "Project loose ends",
    title: "Keep decisions and unfinished work attached to the project",
    pressure: "The project is spread across conversations, notes, and handoffs. You carry the real status in your head.",
    help: "RemainFrame can keep approved decisions, open questions, source notes, and next actions together for review.",
    control: "It does not silently change project records or contact other people without the appropriate permission and review.",
  },
  {
    label: "A tool the business is missing",
    title: "Build the form, dashboard, website, or connection the job needs",
    pressure: "The work cannot be simplified because the right interface or connection does not exist yet.",
    help: "I can design and build a supporting integration or custom business tool, then connect it to the approved RemainFrame setup.",
    control: "The scope, access, testing, cost, and ongoing responsibility are agreed before the custom build begins.",
  },
] as const;

export default function UseCasesPage() {
  return (
    <main className={styles.main} id="main-content" tabIndex={-1}>
      <header className={styles.pageHero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Everyday examples</p>
          <h1>Start where the work keeps landing back on you.</h1>
          <p>
            The best first use is not “AI for everything.” It is one recurring responsibility with a result you can
            recognize, review, and improve.
          </p>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/start?source=examples-hero">Tell me what takes too much time</Link>
            <Link className={styles.buttonSecondary} href="/remainframe/how-it-works">See how setup works</Link>
          </div>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="examples-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Useful starting points</p>
            <h2 id="examples-title">Six ways to make the week easier.</h2>
            <p>These examples show the shape of the work. Your setup is based on the job, tools, information, and boundaries of your business.</p>
          </div>
          <div className={styles.stack}>
            {cases.map((item) => (
              <article className={styles.statusBlock} key={item.label}>
                <p className={styles.microLabel}>{item.label}</p>
                <h3>{item.title}</h3>
                <dl className={styles.definitionList}>
                  <div><dt>The pressure</dt><dd>{item.pressure}</dd></div>
                  <div><dt>How RemainFrame can help</dt><dd>{item.help}</dd></div>
                  <div><dt>You stay in control</dt><dd>{item.control}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="fit-title">
        <div className={styles.shell}>
          <div className={styles.boundaryBox}>
            <h2 id="fit-title">A good first job has clear edges.</h2>
            <ul>
              <li>It repeats often enough that saving time would matter.</li>
              <li>You can show what information it uses and what a useful result looks like.</li>
              <li>A person can review the work and correct it while the setup is being tested.</li>
              <li>It does not require RemainFrame to make a high-stakes decision for someone.</li>
              <li>Any outside tool or account can be reviewed and connected safely before use.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} aria-labelledby="example-cta-title">
        <div className={`${styles.shell} ${styles.ctaPanel}`}>
          <div>
            <p className={styles.sectionLabel}>Your example</p>
            <h2 id="example-cta-title">What would you hand to a good secretary first?</h2>
            <p>Describe the recurring job in your own words. You do not need to know whether it needs a skill, integration, or custom tool.</p>
          </div>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/start?source=examples-final">Start with one task</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
