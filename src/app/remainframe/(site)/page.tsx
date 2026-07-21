import Link from "next/link";
import { JsonLd } from "../_components/json-ld";
import { absoluteUrl, pageMetadata } from "../_lib/metadata";
import styles from "../site.module.css";

export const metadata = pageMetadata({
  title: "Custom AI Secretary for Small Business",
  description:
    "RemainFrame is a custom AI assistant for small businesses. Hand off follow-ups, recurring updates, research, and routine work without learning complicated AI software.",
  path: "/remainframe",
});

const faqs = [
  {
    question: "What is RemainFrame?",
    answer:
      "RemainFrame is a custom AI secretary built around the way your business works. It can help prepare, organize, research, and keep track of recurring work while you stay in charge of important decisions.",
  },
  {
    question: "Do I need to know anything about AI?",
    answer:
      "No. Start by describing the work that keeps taking your time. I handle the setup and explain the few things you need to know in plain language.",
  },
  {
    question: "Can RemainFrame learn a new job?",
    answer:
      "Often, yes. For many repeat jobs, RemainFrame can create and save a reusable skill from the instructions you give it. More involved connections, customer-facing tools, or production software are custom-built and tested for you.",
  },
  {
    question: "Does RemainFrame make decisions for my business?",
    answer:
      "RemainFrame can prepare work and keep it moving, but you decide what it may handle and what still needs your review. Important decisions remain yours.",
  },
] as const;

export default function RemainFrameHomePage() {
  return (
    <main className={styles.main} id="main-content" tabIndex={-1}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${absoluteUrl("/remainframe")}#webpage`,
              name: "Custom AI Secretary for Small Business",
              url: absoluteUrl("/remainframe"),
              description:
                "RemainFrame is a custom AI assistant for small businesses that is built around the way each business works.",
              inLanguage: "en-US",
            },
            {
              "@type": "Service",
              "@id": `${absoluteUrl("/remainframe")}#service`,
              name: "RemainFrame custom AI assistant",
              serviceType: "Custom AI assistant setup for small businesses",
              url: absoluteUrl("/remainframe"),
              areaServed: { "@type": "Country", name: "United States" },
              audience: {
                "@type": "BusinessAudience",
                audienceType: "Small businesses and owner-led teams",
              },
              provider: {
                "@type": "Organization",
                name: "Dade.Studio",
                url: "https://dade.studio",
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${absoluteUrl("/remainframe")}#faq`,
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ],
        }}
      />

      <section className={styles.hero} aria-labelledby="rf-hero-title">
        <div className={`${styles.shell} ${styles.heroInner}`}>
          <div>
            <p className={styles.statusLine}>Custom AI help for small business</p>
            <h1 id="rf-hero-title">
              A custom AI secretary for the work that keeps <em>piling up.</em>
            </h1>
            <p className={styles.heroDek}>
              RemainFrame is built around the way your business already works. It can help with follow-ups,
              routine updates, finding information, and keeping track of what comes next. I set it up for you.
              You stay in control.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.buttonPrimary} href="/remainframe/start?source=hero">
                Tell me what takes too much time
              </Link>
              <Link className={styles.buttonSecondary} href="/remainframe/how-it-works">
                See how RemainFrame works
              </Link>
            </div>
            <p className={styles.finePrint}>Start with one recurring job. No AI experience needed.</p>
          </div>

          <figure className={styles.continuityCard}>
            <figcaption className={styles.continuityTop}>
              <span>Ask in your own words</span>
              <span>RemainFrame</span>
            </figcaption>
            <div className={styles.conversation}>
              <div className={styles.message}>
                <span>You</span>
                <p>Every Friday, make me a list of customers who still need a follow-up.</p>
              </div>
              <div className={styles.message}>
                <span>RemainFrame</span>
                <p>I can turn that into a reusable skill and bring the list to you for review each week.</p>
              </div>
            </div>
            <div className={styles.controlStrip} aria-label="Example RemainFrame skill process">
              <div><span>Request</span><strong>Plain language</strong></div>
              <div><span>Skill</span><strong>Reusable</strong></div>
              <div><span>Decision</span><strong>Still yours</strong></div>
            </div>
          </figure>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="pressure-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Start with the pressure</p>
            <h2 id="pressure-title">Your business does not need one more thing to figure out.</h2>
            <p>
              Running a business already means juggling customers, paperwork, schedules, messages, and loose ends.
              RemainFrame starts with one job that keeps stealing your time and builds practical help around it.
            </p>
          </div>
          <div className={styles.painGrid}>
            <article>
              <span>01</span>
              <h3>Work keeps repeating</h3>
              <p>The same follow-ups, summaries, checks, and updates land back on your plate every week.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Details get scattered</h3>
              <p>Notes, messages, and unfinished work live in too many places, so you carry the real status in your head.</p>
            </article>
            <article>
              <span>03</span>
              <h3>New software adds work</h3>
              <p>You need help getting the job done, not another complicated system to learn and maintain.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="skills-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Ask for what you need</p>
            <h2 id="skills-title">RemainFrame can learn new ways to help.</h2>
            <p>
              You do not need to choose from a fixed menu. For many repeat jobs, describe the result you want and
              RemainFrame can create a reusable skill for that work. The steps can be saved, used again, and improved
              when you show it a better way.
            </p>
          </div>
          <div className={styles.pillarGrid}>
            <article>
              <span>Ask</span>
              <h3>Explain the job normally</h3>
              <p>Tell RemainFrame what should happen, what information matters, and what you want to review.</p>
            </article>
            <article>
              <span>Build</span>
              <h3>Turn the steps into a skill</h3>
              <p>When the job fits its approved tools, RemainFrame can save a repeatable way to handle it next time.</p>
            </article>
            <article>
              <span>Improve</span>
              <h3>Teach it what works better</h3>
              <p>Your corrections can refine the skill, so useful lessons do not disappear after one conversation.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="work-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Work you can hand off</p>
            <h2 id="work-title">Begin with one useful responsibility.</h2>
            <p>Every setup is different, but these are practical places to start.</p>
          </div>
          <div className={styles.useCaseGrid}>
            <article>
              <p className={styles.microLabel}>Customer follow-up</p>
              <h3>Prepare the next message</h3>
              <p>Keep promises, unanswered questions, and follow-up drafts from slipping through the cracks.</p>
            </article>
            <article>
              <p className={styles.microLabel}>Owner briefing</p>
              <h3>Show what needs attention</h3>
              <p>Turn approved notes and updates into a clear list of changes, open items, and next decisions.</p>
            </article>
            <article>
              <p className={styles.microLabel}>Research</p>
              <h3>Find and organize information</h3>
              <p>Gather useful information, keep the sources attached, and carry forward what has already been learned.</p>
            </article>
            <article>
              <p className={styles.microLabel}>Recurring work</p>
              <h3>Remember the routine</h3>
              <p>Save the steps behind regular summaries, checklists, reviews, and other repeatable work.</p>
            </article>
            <article>
              <p className={styles.microLabel}>Project loose ends</p>
              <h3>Keep next steps from getting lost</h3>
              <p>Track open questions, prior decisions, and the work that still needs a person.</p>
            </article>
            <article>
              <p className={styles.microLabel}>Your business</p>
              <h3>Ask for something specific</h3>
              <p>If you can explain the job and a good result, we can find out whether RemainFrame can help.</p>
            </article>
          </div>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/use-cases">Explore everyday examples</Link>
          </div>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="how-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>A simple place to begin</p>
            <h2 id="how-title">Start with one job. Add more only when it helps.</h2>
          </div>
          <ol className={styles.steps}>
            <li>
              <h3>Show me what keeps piling up</h3>
              <p>Tell me what repeats, where it gets stuck, and what a useful result would look like.</p>
            </li>
            <li>
              <h3>I set up RemainFrame around it</h3>
              <p>I handle the technical work and give RemainFrame only the information, tools, and boundaries the job needs.</p>
            </li>
            <li>
              <h3>You review the real work</h3>
              <p>Correct it, adjust it, and decide whether it has earned another responsibility.</p>
            </li>
          </ol>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/how-it-works">See the complete process</Link>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="custom-title">
        <div className={`${styles.shell} ${styles.split}`}>
          <div>
            <p className={styles.sectionLabel}>When the work needs more</p>
            <h2 id="custom-title">Some tools can be learned. Others should be professionally built.</h2>
          </div>
          <div>
            <p className={styles.proseLead}>
              Many requests can become a new RemainFrame skill or use a simple, approved connection to a tool you
              already have. You only need to ask for the result you want.
            </p>
            <p>
              When the job needs a more involved integration, secure account access, a customer form, website,
              dashboard, or custom software, I can design, build, and test that for you. The extra technology exists
              to make the work easier, not give you more to manage.
            </p>
            <div className={styles.pageActions}>
              <Link className={styles.buttonPrimary} href="/remainframe/start?source=custom-tools">
                Tell me what you want it to do
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="control-title">
        <div className={`${styles.shell} ${styles.split}`}>
          <div>
            <p className={styles.sectionLabel}>Useful help without handing over the keys</p>
            <h2 id="control-title">You keep the final say.</h2>
          </div>
          <div>
            <p className={styles.proseLead}>
              RemainFrame can prepare, organize, remember, and keep track of work. You decide what information it
              may use, what tools it may access, and what still needs your approval.
            </p>
            <ul className={styles.trustList}>
              <li><strong>Start narrow:</strong> give it one useful job before adding more.</li>
              <li><strong>Review important work:</strong> keep people in charge of messages, spending, records, and business decisions.</li>
              <li><strong>Change the boundaries:</strong> adjust or remove access when the work changes.</li>
            </ul>
            <div className={styles.pageActions}>
              <Link className={styles.buttonPrimary} href="/remainframe/security">Read about security and control</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="home-faq-title">
        <div className={styles.narrow}>
          <p className={styles.sectionLabel}>Straight answers</p>
          <h2 className={styles.faqHeading} id="home-faq-title">Questions people ask before handing off work.</h2>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/faq">Read every FAQ</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} aria-labelledby="start-cta-title">
        <div className={`${styles.shell} ${styles.ctaPanel}`}>
          <div>
            <p className={styles.sectionLabel}>What would you hand off first?</p>
            <h2 id="start-cta-title">Bring the messy version.</h2>
            <p>
              You do not need a technical plan. Tell me what repeats, what gets missed, or what keeps taking time
              away from customers and more important work. We will find one useful place to begin.
            </p>
          </div>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/start?source=home-final">
              Tell me what takes too much time
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
