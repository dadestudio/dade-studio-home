import Link from "next/link";
import { JsonLd } from "../../_components/json-ld";
import { absoluteUrl, pageMetadata } from "../../_lib/metadata";
import styles from "../../site.module.css";

export const metadata = pageMetadata({
  title: "RemainFrame FAQ",
  description:
    "Plain-language answers about RemainFrame, a custom AI secretary for small businesses, including skills, integrations, setup, control, data, and pricing.",
  path: "/remainframe/faq",
});

const faqs = [
  {
    q: "What is RemainFrame?",
    a: "RemainFrame is a custom AI secretary built around the way your business works. It can help prepare, organize, research, remember, and keep track of recurring work while you remain responsible for important decisions.",
  },
  {
    q: "Do I need to understand AI before using it?",
    a: "No. Start by explaining the work that keeps taking your time. I handle the technical setup and explain the parts you need to know in plain language.",
  },
  {
    q: "What kind of work can it help with?",
    a: "Good starting points include customer follow-ups, owner briefings, recurring summaries, research, project loose ends, checklists, and other work with a clear input and reviewable result. Exact fit depends on the information and tools involved.",
  },
  {
    q: "Can RemainFrame create its own skills?",
    a: "For many repeat jobs, yes. You can describe the result and show RemainFrame the steps. When the job fits the information and tools it is allowed to use, it can save that process as a reusable skill and improve it from your corrections.",
  },
  {
    q: "Can it connect to the tools my business already uses?",
    a: "RemainFrame can work with specific tools that are configured and approved for your setup. It does not connect to every service automatically. A new connection may be simple, or it may need a custom-built and tested integration.",
  },
  {
    q: "What if the job needs a website, dashboard, form, or custom software?",
    a: "I can design and build the supporting tool when the job needs more than a reusable skill. That may include a custom integration, business dashboard, customer form, website, portal, or focused piece of software.",
  },
  {
    q: "Does RemainFrame make decisions for my business?",
    a: "RemainFrame can prepare work and keep it moving, but a person should review important messages, spending, deletion, record changes, and business decisions. Before setup, we agree on what it may access and which actions still need approval.",
  },
  {
    q: "What information should I leave out of the first inquiry?",
    a: "Do not include passwords, account credentials, private customer records, health information, payment-card data, government identifiers, or other sensitive information. Start with a general description of the work.",
  },
  {
    q: "How do I start?",
    a: "Choose one recurring job and describe what keeps going wrong or taking too long. I will review it and explain whether the smallest useful first step is a RemainFrame skill, an approved connection, or a custom build.",
  },
  {
    q: "How much does it cost?",
    a: "There is no one-size-fits-all price because each setup is based on the job and tools involved. You receive the proposed scope, setup or build cost, outside provider costs, and ongoing terms before paid work begins.",
  },
  {
    q: "Who operates RemainFrame?",
    a: "RemainFrame is operated by Dade.Studio, an independent practice based in Pagosa Springs, Colorado. Contracting and notice details are provided in the written service documents before customer setup.",
  },
] as const;

export default function FaqPage() {
  return (
    <main className={styles.main} id="main-content" tabIndex={-1}>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/remainframe/faq")}#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }} />
      <header className={styles.pageHero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Frequently asked questions</p>
          <h1>Plain answers before you hand off any work.</h1>
          <p>If your question is about a particular job or business tool, send the general version. I will tell you what needs a closer look.</p>
        </div>
      </header>
      <section className={styles.section} aria-labelledby="faq-title">
        <div className={styles.narrow}>
          <h2 className={styles.faqHeading} id="faq-title">What small-business owners usually want to know.</h2>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.ctaBand} aria-labelledby="faq-cta-title">
        <div className={`${styles.shell} ${styles.ctaPanel}`}>
          <div>
            <p className={styles.sectionLabel}>A question about your work?</p>
            <h2 id="faq-cta-title">Describe the job that keeps taking too much time.</h2>
            <p>Start with the general version. Do not include passwords, customer records, or other sensitive information.</p>
          </div>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/start?source=faq">Start with one task</Link>
            <a className={styles.buttonSecondary} href="mailto:hello@dade.studio?subject=RemainFrame%20question">Email a general question</a>
          </div>
        </div>
      </section>
    </main>
  );
}
