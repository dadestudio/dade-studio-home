import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArchivedConceptBanner } from "../_components/archived-concept-banner";
import { HeroRoleSpec, RoleSentence } from "./registration";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Archived Concept 04 | Custom AI Agent",
  description:
    "An archived RemainFrame design concept. See the canonical site for current product, capability, pricing, and legal information.",
  openGraph: {
    title: "Archived RemainFrame Design Concept 04",
    description:
      "This archived concept is not current product, capability, pricing, or legal information.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archived RemainFrame Design Concept 04",
    description:
      "This archived concept is not current product, capability, pricing, or legal information.",
  },
};

const contactHref =
  "mailto:hello@dade.studio?subject=Help%20me%20find%20the%20right%20first%20role%20for%20RemainFrame";

const capabilities = [
  "Sort",
  "Screen",
  "Research",
  "Remember",
  "Draft",
  "Schedule",
  "Compare",
  "Prepare",
  "Follow up",
  "Flag",
] as const;

const businessTypes = [
  "CONTRACTORS",
  "HOA BOARDS",
  "CREATIVE STUDIOS",
  "LOCAL SHOPS",
  "WELLNESS PRACTICES",
  "HOSPITALITY",
  "PROPERTY TEAMS",
  "NONPROFITS",
  "PROFESSIONAL SERVICES",
] as const;

const fitSteps = [
  {
    number: "01",
    title: "Understand the work",
    copy: "We learn how the business actually runs: the tools, rules, language, judgment calls, and work that keeps landing back on you.",
  },
  {
    number: "02",
    title: "Shape the role",
    copy: "We tailor what the agent knows, what it can handle, what it prepares, and where a person stays in the loop.",
  },
  {
    number: "03",
    title: "Improve it with you",
    copy: "We can keep refining it, or you can teach and retune it yourself as the business, team, and workload change.",
  },
] as const;

const questions = [
  {
    question: "Does my business need to already use AI?",
    answer:
      "No. RemainFrame is designed for businesses that want meaningful results without first becoming AI experts. We can shape the first role around the tools and working habits you already have.",
  },
  {
    question: "What kind of work can RemainFrame handle?",
    answer:
      "That depends on your business. It can answer and screen inquiries, prepare follow-ups, organize operations, compare budgets and expenses, support board work, coordinate projects, research, draft, remember, and learn specialized roles unique to you.",
  },
  {
    question: "Can we start with one use case?",
    answer:
      "Yes. The strongest first role is usually a recurring burden with a clear outcome. We start there, prove the value, and expand only when the next role is worth adding.",
  },
  {
    question: "Can I customize the agent myself?",
    answer:
      "Yes. RemainFrame can be tailored with you as a managed service, and you can keep teaching and adjusting it as your business changes. You choose how hands-on you want to be.",
  },
] as const;

export default function InRegisterPage() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <ArchivedConceptBanner />

      <header className={styles.header}>
        <Link className={styles.backLink} href="/remainframe/concepts">
          <span aria-hidden="true">←</span>
          All concepts
        </Link>
        <a className={styles.wordmark} href="#top" aria-label="RemainFrame, back to top">
          Remain<span>Frame</span>
        </a>
        <a className={styles.headerCta} href={contactHref}>
          Find the right first role <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div id="main-content">
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroTopline}>
            <p>CUSTOM AI AGENT FOR SMALL BUSINESS</p>
            <p>BUILT FOR TEAMS OF 1–30</p>
          </div>

          <div className={styles.heroCopy}>
            <p className={styles.heroIndex}>RF / CONCEPT 04 / IN REGISTER</p>
            <h1 className={styles.heroTitle} id="hero-title">
              <span>Your business</span>
              <em>is one of one.</em>
              <span>Your agent should be too.</span>
            </h1>
          </div>

          <div className={styles.heroIntro}>
            <p>
              RemainFrame is a powerful, customizable AI agent built around how
              your business actually works. Use it as your secretary, lead screener,
              operations aide, budget and board assistant, project memory, or the
              specialized role only your business needs.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#role-draft">
                Explore what it can handle <span aria-hidden="true">↓</span>
              </a>
              <a className={styles.secondaryAction} href={contactHref}>
                Find the right first role <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <HeroRoleSpec />

          <div className={styles.heroFoot}>
            <span>One agent, not one use</span>
            <span>Tailored by us or by you</span>
            <span>Useful without an AI department</span>
          </div>
        </section>

        <section className={styles.statement} aria-labelledby="statement-title">
          <p className={styles.sectionIndex}>01 / THE PREMISE</p>
          <div>
            <h2 id="statement-title">
              Same agent.
              <em> Entirely different job.</em>
            </h2>
            <p>
              A two-person contractor, a local retailer, a volunteer HOA board,
              and a 20-person service business should not get the same assistant.
              RemainFrame&apos;s role, knowledge, priorities, and boundaries are shaped
              around the business it joins.
            </p>
          </div>
        </section>

        <RoleSentence />

        <section className={styles.range} aria-labelledby="range-title">
          <div className={styles.rangeHeading}>
            <p className={styles.sectionIndex}>03 / THE RANGE</p>
            <h2 id="range-title">
              Front desk. Back office.
              <em> The work between.</em>
            </h2>
          </div>

          <div className={styles.capabilityWall} aria-label="Examples of RemainFrame capabilities">
            {capabilities.map((capability, index) => (
              <span style={{ "--word-index": index } as CSSProperties} key={capability}>
                {capability}
              </span>
            ))}
          </div>

          <div className={styles.rangeNote}>
            <p>A capability list is easy. A genuine fit is rare.</p>
            <p>
              The difference is how each capability is fitted to your customers,
              policies, standards, team, and the way work really moves.
            </p>
          </div>
        </section>

        <section className={styles.businessBand} aria-label="Examples of businesses RemainFrame can be tailored to">
          <div className={styles.businessTrack}>
            {[...businessTypes, ...businessTypes].map((business, index) => (
              <span aria-hidden={index >= businessTypes.length} key={`${business}-${index}`}>
                {business}<i aria-hidden="true">◆</i>
              </span>
            ))}
          </div>
        </section>

        <section className={styles.fit} aria-labelledby="fit-title">
          <div className={styles.fitHeading}>
            <p className={styles.sectionIndex}>04 / THE FIT</p>
            <h2 id="fit-title">
              We learn the business
              <em> before the agent takes on the work.</em>
            </h2>
          </div>

          <ol className={styles.fitSteps}>
            {fitSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>

          <div className={styles.fitNote}>
            <strong>Start where the pressure is. Expand where the value is.</strong>
            <p>
              Inquiry screening. Scheduling. Board work. Project continuity.
              Budgets. Customer communication. Or another recurring burden only
              your business has. Begin there, then expand after it proves useful.
            </p>
          </div>
        </section>

        <section className={styles.customer} aria-labelledby="customer-title">
          <p className={styles.sectionIndex}>05 / WHO IT IS FOR</p>
          <div className={styles.customerNumber} aria-hidden="true">
            1<span>—</span>30
          </div>
          <div className={styles.customerCopy}>
            <h2 id="customer-title">
              Small team. Specific work.
              <em> Serious capability.</em>
            </h2>
            <p>
              Built for businesses that need meaningful leverage without becoming
              AI experts, hiring an AI department, or forcing the team to operate
              another complicated system.
            </p>
          </div>
        </section>

        <section className={styles.boundaries} aria-labelledby="boundaries-title">
          <p className={styles.sectionIndex}>06 / THE BOUNDARIES</p>
          <div className={styles.boundariesCopy}>
            <h2 id="boundaries-title">
              Helpful by default.
              <em> Never in charge by accident.</em>
            </h2>
            <p>
              You decide what it knows, what it can handle, what needs approval,
              and what must always come back to you. Its role can grow without your
              control shrinking.
            </p>
          </div>
          <ul className={styles.controlList} aria-label="Ways the business stays in control">
            <li><span>01</span> What it knows</li>
            <li><span>02</span> What it handles</li>
            <li><span>03</span> What you approve</li>
            <li><span>04</span> What stays off limits</li>
          </ul>
        </section>

        <section className={styles.questions} aria-labelledby="questions-title">
          <div className={styles.questionsHeading}>
            <p className={styles.sectionIndex}>07 / THE PRACTICAL QUESTIONS</p>
            <h2 id="questions-title">
              Powerful does not have to mean
              <em> complicated.</em>
            </h2>
          </div>
          <div className={styles.questionList}>
            {questions.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  <span>0{index + 1}</span>
                  {item.question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <p className={styles.sectionIndex}>08 / YOUR FIRST ROLE</p>
          <h2 id="closing-title">
            Show us how your business
            <em> really works.</em>
          </h2>
          <div className={styles.closingLower}>
            <p>
              In one focused conversation, we will identify the work that keeps
              landing back on you and define a first role worth building.
            </p>
            <a className={styles.closingAction} href={contactHref}>
              Find the right first role <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <a className={styles.footerWordmark} href="#top">RemainFrame</a>
        <span>One adaptable agent for 1–30 person businesses</span>
        <span>Pagosa Springs, Colorado</span>
      </footer>
    </main>
  );
}
