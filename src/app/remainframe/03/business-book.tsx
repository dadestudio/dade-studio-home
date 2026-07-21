"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { ArchivedConceptBanner } from "../_components/archived-concept-banner";
import styles from "./business-book.module.css";

const bookPages = [
  {
    id: "cover",
    eyebrow: "Begin with one job",
    title: "Your business book",
    note: "Built with you. Kept useful as the work changes.",
    details: ["One practical first use", "Hands-on setup", "Room to grow"],
  },
  {
    id: "voice",
    eyebrow: "How you write",
    title: "Warm, direct, never pushy.",
    note: "Lead with the useful detail. Keep the language clear and neighborly.",
    details: ["Your preferred tone", "Phrases you avoid", "How you close a note"],
  },
  {
    id: "clients",
    eyebrow: "Active client details",
    title: "The little things that shape the work.",
    note: "Quiet room for calls. Move before school starts. Text is best after four.",
    details: ["Needs and preferences", "Promises already made", "The next follow-up"],
  },
  {
    id: "work",
    eyebrow: "Current work",
    title: "Nothing important falls between visits.",
    note: "Photos Tuesday. Confirm the permit. Description draft waiting for final details.",
    details: ["Jobs and listings", "What is still open", "Who is waiting on what"],
  },
  {
    id: "decisions",
    eyebrow: "Decisions already made",
    title: "Settled once. Carried forward.",
    note: "Use the shorter description. Keep Saturday mornings open. Call before adding a rush fee.",
    details: ["Working preferences", "Business boundaries", "Choices worth keeping"],
  },
  {
    id: "privacy",
    eyebrow: "What stays private",
    title: "Clear boundaries, written into the work.",
    note: "Set the boundaries together: what belongs in the work, what stays out, and what may be shared.",
    details: ["Review it", "Correct it", "Remove it", "Plan portability"],
  },
] as const;

const journeySteps = [
  {
    label: "The useful beginning",
    title: "Start with one task you repeat every week.",
    body: "A listing description. A client follow-up. A project brief. We tailor a first use around work you already do, using the AI tools that fit that job.",
  },
  {
    label: "Your voice",
    title: "It begins to sound like your business.",
    body: "The service keeps the choices that make your work feel like yours, from the way you greet a client to the details you always include.",
  },
  {
    label: "Your people",
    title: "You do not have to re-explain the client.",
    body: "Useful preferences, open questions, and promises already made can stay close to the work, ready when you return.",
  },
  {
    label: "Your work",
    title: "Tomorrow starts where today left off.",
    body: "The next draft can pick up the current job, listing, or project without making you rebuild the story from scratch.",
  },
  {
    label: "Your judgment",
    title: "Good decisions become part of the way you work.",
    body: "The service grows more useful by carrying forward the boundaries and preferences you have already settled.",
  },
  {
    label: "Your boundaries",
    title: "You can see what it uses and set the boundaries together.",
    body: "Review the business context in ordinary language. Decide what can be corrected, removed, or exported before the setup becomes part of your work.",
  },
] as const;

const contactHref =
  "mailto:hello@dade.studio?subject=RemainFrame%20private%20pilot";

const useCases = [
  {
    number: "01",
    audience: "For a realtor",
    title: "Turn rough property notes into a polished listing draft.",
    body: "Begin with the writing you do for every property. Over time, the service can retain your voice, the buyer details that matter, and the follow-ups still open.",
  },
  {
    number: "02",
    audience: "For a solo creator",
    title: "Carry one good idea from brief to post to client update.",
    body: "Keep the tone, decisions, and project history together so each new piece starts informed, not empty.",
  },
  {
    number: "03",
    audience: "For a local service business",
    title: "Prepare the next estimate or customer note without starting over.",
    body: "Remember the scope, the customer’s preferences, and the boundaries that keep a small operation running smoothly.",
  },
] as const;

type Direction = "forward" | "backward";

type BookObjectProps = {
  activePage: number;
  previousPage?: number;
  direction?: Direction;
  turnToken?: number;
  decorative?: boolean;
};

function PageContent({ pageIndex }: { pageIndex: number }) {
  const page = bookPages[pageIndex] ?? bookPages[0];

  return (
    <div className={styles.pageContent}>
      <div className={styles.pageHeading}>
        <span>RemainFrame / Business Book</span>
        <span>{String(pageIndex).padStart(2, "0")}</span>
      </div>
      <p>{page.eyebrow}</p>
      <h3>{page.title}</h3>
      <blockquote>{page.note}</blockquote>
      <ul>
        {page.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <span className={styles.pageNumber}>{String(pageIndex + 1).padStart(2, "0")}</span>
    </div>
  );
}

function BookObject({
  activePage,
  previousPage = 0,
  direction = "forward",
  turnToken = 0,
  decorative = false,
}: BookObjectProps) {
  const turningPageIndex = direction === "forward" ? previousPage : activePage;
  const shouldTurn = activePage > 0 && previousPage > 0 && activePage !== previousPage;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--book-rx", `${(-y * 3.5).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--book-ry", `${(x * 5).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--shine-x", `${((x + 0.5) * 100).toFixed(1)}%`);
  };

  const resetPointer = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--book-rx", "0deg");
    event.currentTarget.style.setProperty("--book-ry", "0deg");
    event.currentTarget.style.setProperty("--shine-x", "48%");
  };

  return (
    <div
      className={styles.bookScene}
      data-page={activePage}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden={decorative ? "true" : undefined}
    >
      <div className={styles.bookTilt}>
        <div className={styles.bookShadow} />
        <div className={styles.book}>
          <div className={styles.bookBoard} />
          <div className={styles.leftSheet}>
            <div className={styles.insideNote}>
              <span>This book belongs to</span>
              <strong>The business only you know.</strong>
              <i />
              <small>Set up together. Kept under your direction.</small>
            </div>
          </div>
          <div className={styles.rightSheet}>
            <PageContent pageIndex={Math.max(activePage, 1)} />
          </div>

          {shouldTurn ? (
            <div
              className={styles.turningSheet}
              data-direction={direction}
              key={turnToken}
            >
              <div className={styles.leafFront}>
                <PageContent pageIndex={turningPageIndex} />
              </div>
              <div className={styles.leafBack}>
                <div>
                  <span>Kept with the work</span>
                  <strong>{bookPages[turningPageIndex]?.eyebrow}</strong>
                </div>
              </div>
            </div>
          ) : null}

          <div className={styles.frontCover}>
            <div className={styles.coverFace}>
              <span className={styles.coverKicker}>RemainFrame</span>
              <div className={styles.coverRule} />
              <strong>The<br />Business<br />Book</strong>
              <small>Business context, kept with care</small>
              <span className={styles.coverEdition}>Pilot edition / 01</span>
            </div>
            <div className={styles.coverInside}>
              <span>A lasting understanding</span>
              <strong>Built around the way your business actually works.</strong>
            </div>
          </div>
          <div className={styles.spine} />
          <div className={styles.bookmark} />
        </div>
      </div>
      <div className={styles.sceneCaption}>
        <span>{activePage === 0 ? "Closed" : `Page ${activePage} of 5`}</span>
        <span>{activePage === 0 ? "Your business book" : bookPages[activePage]?.eyebrow}</span>
      </div>
    </div>
  );
}

export default function BusinessBook() {
  const [activePage, setActivePage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const [direction, setDirection] = useState<Direction>("forward");
  const [turnToken, setTurnToken] = useState(0);
  const activePageRef = useRef(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  const showPage = useCallback((requestedPage: number) => {
    const nextPage = Math.min(Math.max(requestedPage, 0), bookPages.length - 1);
    const currentPage = activePageRef.current;
    if (nextPage === currentPage) return;

    setPreviousPage(currentPage);
    setDirection(nextPage > currentPage ? "forward" : "backward");
    activePageRef.current = nextPage;
    setActivePage(nextPage);
    setTurnToken((token) => token + 1);
  }, []);

  useEffect(() => {
    const steps = stepRefs.current.filter((step): step is HTMLElement => step !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        const nextPage = Number((visibleEntry.target as HTMLElement).dataset.bookStep);
        if (Number.isFinite(nextPage)) showPage(nextPage);
      },
      {
        rootMargin: "-28% 0px -42% 0px",
        threshold: [0, 0.25, 0.55],
      },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, [showPage]);

  return (
    <main className={styles.site}>
      <a className={styles.skipLink} href="#hero-title">
        Skip to main content
      </a>
      <ArchivedConceptBanner />
      <header className={styles.header}>
        <Link className={styles.backLink} href="/remainframe/concepts">
          <span aria-hidden="true">←</span>
          All RemainFrame directions
        </Link>
        <a className={styles.brand} href="#top" aria-label="RemainFrame home">
          <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /></span>
          RemainFrame
        </a>
        <a className={styles.headerCta} href={contactHref}>
          Talk with us
        </a>
      </header>

      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>TAILORED AI, SET UP WITH YOU</p>
          <h1 id="hero-title" tabIndex={-1}>Tailored AI for the business only you know.</h1>
          <p className={styles.heroLead}>
            Start with one useful job you repeat. RemainFrame tailors the AI tools
            that fit that work, then keeps the understanding behind it so the
            service becomes more helpful as your business grows.
          </p>
          <p className={styles.managedNote}>
            A hands-on managed service. No new system to figure out alone.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={contactHref}>
              <span>Talk through your first use</span>
              <i aria-hidden="true">↗</i>
            </a>
            <a className={styles.textLink} href="#the-book">
              See the business book <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className={styles.heroObject}>
          <p><span>Made for owner-led work</span><span>Example business book</span></p>
          <BookObject activePage={0} decorative />
        </div>

        <div className={styles.heroTrust}>
          <span>Set up with you</span>
          <span>Boundaries set together</span>
          <span>Plain-language review</span>
          <span>Portability discussed upfront</span>
        </div>
      </section>

      <section className={styles.bookJourney} id="the-book" aria-labelledby="book-title">
        <div className={styles.journeyIntro}>
          <p className={styles.sectionLabel}>THE BUSINESS BOOK</p>
          <h2 id="book-title">The work changes. The understanding stays.</h2>
          <p>
            Behind each tailored use is a living record of how your business works:
            the details, decisions, voice, and boundaries worth carrying forward.
          </p>
        </div>

        <div className={styles.journeyGrid}>
          <div className={styles.steps}>
            {journeySteps.map((step, index) => (
              <article
                className={styles.step}
                data-book-step={index}
                data-active={activePage === index}
                key={step.label}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step.label}</p>
                <h3>{step.title}</h3>
                <div />
                <p>{step.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.stickyBook}>
            <BookObject
              activePage={activePage}
              previousPage={previousPage}
              direction={direction}
              turnToken={turnToken}
              decorative
            />
            <div
              className={styles.bookControls}
              role="group"
              aria-label="Turn the business book pages"
            >
              <button
                type="button"
                disabled={activePage === 0}
                onClick={() => showPage(activePage - 1)}
                aria-label="Previous business book page"
              >
                ←
              </button>
              <span>{activePage + 1} / {bookPages.length}</span>
              <button
                type="button"
                disabled={activePage === bookPages.length - 1}
                onClick={() => showPage(activePage + 1)}
                aria-label="Next business book page"
              >
                →
              </button>
            </div>
            <p className={styles.srOnly} aria-live="polite">
              {activePage === 0
                ? "The business book is closed."
                : `${bookPages[activePage]?.eyebrow}: ${bookPages[activePage]?.title}`}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.useCases} id="first-use" aria-labelledby="use-cases-title">
        <div className={styles.useCasesHeading}>
          <p className={styles.sectionLabel}>START NARROW. GROW NATURALLY.</p>
          <h2 id="use-cases-title">Bring the task that keeps eating your time.</h2>
          <p>
            We scope a useful first win around your actual work. Once that is solid,
            the same business understanding can support what comes next.
          </p>
        </div>
        <ol className={styles.useCaseList}>
          {useCases.map((useCase) => (
            <li key={useCase.audience}>
              <span>{useCase.number}</span>
              <p>{useCase.audience}</p>
              <h3>{useCase.title}</h3>
              <div />
              <p>{useCase.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.service} id="setup" aria-labelledby="setup-title">
        <div className={styles.serviceIntro}>
          <p className={styles.sectionLabel}>A MANAGED SERVICE</p>
          <h2 id="setup-title">You bring the business. We stay close to the setup.</h2>
          <p>
            No big software rollout. We begin with a conversation, shape the first
            use with you, and help keep it useful as the business changes.
          </p>
        </div>

        <ol className={styles.setupSteps}>
          <li>
            <span>01</span>
            <div><p>Sit down together</p><h3>Show us the job in your own words.</h3></div>
            <p>We listen for the details, judgment, and repeat work that make a good first use.</p>
          </li>
          <li>
            <span>02</span>
            <div><p>We build around it</p><h3>A useful service, fitted to your way of working.</h3></div>
            <p>We tailor the workflow, establish what should be remembered, and set clear privacy boundaries.</p>
          </li>
          <li>
            <span>03</span>
            <div><p>Stay supported</p><h3>Adjust it with a person, not a help maze.</h3></div>
            <p>As your work changes, we help refine what the service does and what the business book carries forward.</p>
          </li>
        </ol>

        <div className={styles.ownerControls} aria-label="Owner controls">
          <div><strong>See it</strong><span>Review what the service remembers in ordinary language.</span></div>
          <div><strong>Correct it</strong><span>Change a detail when your business changes.</span></div>
          <div><strong>Remove it</strong><span>Clear something that should no longer be kept.</span></div>
          <div><strong>Plan portability</strong><span>Agree on what can be exported before setup begins.</span></div>
        </div>
      </section>

      <section className={styles.close} aria-labelledby="close-title">
        <div className={styles.closeSeal} aria-hidden="true">
          <span>RF</span>
          <i />
          <small>Kept with care</small>
        </div>
        <div className={styles.closeCopy}>
          <p className={styles.sectionLabel}>PRIVATE FOUNDING PILOTS</p>
          <h2 id="close-title">Start with one job. Build from there.</h2>
          <p>
            Tell us which task you would most like to stop re-explaining. We will
            talk through whether it is a good fit for a tailored first pilot.
          </p>
          <a className={styles.lightButton} href={contactHref}>
            <span>Talk through a private pilot</span>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#top">
          <span className={styles.brandMark} aria-hidden="true"><i /><i /><i /></span>
          RemainFrame
        </a>
        <span>Tailored AI for owner-led businesses</span>
        <Link href="/remainframe/concepts">All directions</Link>
      </footer>
    </main>
  );
}
