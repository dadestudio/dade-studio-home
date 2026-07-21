"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ArchivedConceptBanner } from "../_components/archived-concept-banner";
import styles from "./page.module.css";

type LensPoint = {
  x: number;
  y: number;
  label: string;
};

const lensStops: LensPoint[] = [
  { x: 30, y: 34, label: "client history" },
  { x: 69, y: 33, label: "what mattered at the showing" },
  { x: 36, y: 72, label: "your voice and boundaries" },
  { x: 72, y: 70, label: "the right next step" },
];

const situations = [
  {
    number: "01",
    kind: "For a realtor",
    title: "The showing ends. The follow-up already knows what mattered.",
    copy: "It can carry forward the property, the questions, the client’s priorities, and your no-pressure way of writing—without a fresh briefing every time.",
  },
  {
    number: "02",
    kind: "For a solo creative",
    title: "A revision arrives. The brief is still in the room.",
    copy: "The next draft can begin with the approved direction, the client’s language, the promised scope, and the choices that got the work here.",
  },
  {
    number: "03",
    kind: "For a local service business",
    title: "The phone rings between jobs. The reply sounds like you.",
    copy: "It can know your service area, how you schedule, what you never promise, and which details a customer needs before you head their way.",
  },
] as const;

const serviceSteps = [
  {
    number: "01",
    title: "We learn the business.",
    copy: "One practical working session gives us the real shape of the job: the repeat task, your voice, your customers, and the details that cannot get lost.",
  },
  {
    number: "02",
    title: "We set it up.",
    copy: "We fit the AI tools you already use around that work, test the result with you, and leave out the machinery you do not need to manage.",
  },
  {
    number: "03",
    title: "We keep it useful.",
    copy: "As the work changes, we help the setup change with it. Start with one narrow win; let it grow only when it earns the right to.",
  },
] as const;

const contactHref =
  "mailto:hello@dade.studio?subject=One%20task%20I%20want%20RemainFrame%20to%20help%20with";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function PickUpWhereYouLeftOffPage() {
  const kineticSectionRef = useRef<HTMLElement>(null);
  const [lens, setLens] = useState<LensPoint>(lensStops[1]);
  const [lensStopIndex, setLensStopIndex] = useState(1);
  const [lensAnnouncement, setLensAnnouncement] = useState(
    "The lens is showing what mattered at the showing.",
  );

  useEffect(() => {
    const section = kineticSectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      section.style.setProperty("--drift-forward", "0px");
      section.style.setProperty("--drift-back", "0px");
      return;
    }

    let animationFrame = 0;

    const updateTypePosition = () => {
      animationFrame = 0;
      const bounds = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = clamp(
        (viewportHeight - bounds.top) / (viewportHeight + bounds.height),
        0,
        1,
      );
      const travel = (progress - 0.5) * Math.min(window.innerWidth * 0.22, 260);

      section.style.setProperty("--drift-forward", `${travel}px`);
      section.style.setProperty("--drift-back", `${-travel}px`);
    };

    const requestTypeUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateTypePosition);
    };

    updateTypePosition();
    window.addEventListener("scroll", requestTypeUpdate, { passive: true });
    window.addEventListener("resize", requestTypeUpdate);

    return () => {
      window.removeEventListener("scroll", requestTypeUpdate);
      window.removeEventListener("resize", requestTypeUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const lensStyle = {
    "--lens-x": `${lens.x}%`,
    "--lens-y": `${lens.y}%`,
  } as CSSProperties & Record<"--lens-x" | "--lens-y", string>;

  function setLensFromPointer(event: ReactPointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - bounds.left) / bounds.width) * 100, 7, 93);
    const y = clamp(((event.clientY - bounds.top) / bounds.height) * 100, 10, 90);

    setLens({ x, y, label: "the business knowledge underneath" });
  }

  function moveLensToNextStop() {
    const nextIndex = (lensStopIndex + 1) % lensStops.length;
    const nextStop = lensStops[nextIndex];

    setLensStopIndex(nextIndex);
    setLens(nextStop);
    setLensAnnouncement(`The lens is showing ${nextStop.label}.`);
  }

  function handleLensKeys(event: KeyboardEvent<HTMLDivElement>) {
    const direction = {
      ArrowLeft: { x: -5, y: 0 },
      ArrowRight: { x: 5, y: 0 },
      ArrowUp: { x: 0, y: -5 },
      ArrowDown: { x: 0, y: 5 },
    }[event.key];

    if (direction) {
      event.preventDefault();
      setLens((current) => ({
        ...current,
        x: clamp(current.x + direction.x, 7, 93),
        y: clamp(current.y + direction.y, 10, 90),
      }));
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      moveLensToNextStop();
    }
  }

  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <ArchivedConceptBanner />

      <header className={styles.header}>
        <Link className={styles.backLink} href="/remainframe/concepts">
          <span aria-hidden="true">←</span> All concepts
        </Link>
        <a className={styles.wordmark} href="#top" aria-label="RemainFrame, back to top">
          Remain<span>Frame</span>
        </a>
        <a className={styles.headerCta} href={contactHref}>
          Talk through one task <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div id="main-content">
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroThread} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <p className={styles.heroEyebrow}>
            Managed AI for owner-led businesses
            <span>Pagosa Springs, Colorado</span>
          </p>

          <h1 className={styles.heroTitle} id="hero-title">
            <span>Pick up</span>
            <span className={styles.heroWhere}>where you</span>
            <span>left off.</span>
          </h1>

          <div className={styles.heroLower}>
            <p className={styles.heroLede}>
              Start with one job you wish took less effort. We set up AI tools around
              how your business actually works, so the next useful thing begins with
              an enduring understanding—not another blank page.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href={contactHref}>
                Tell us what keeps repeating <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.textAction} href="#memory-lens">
                See the difference <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className={styles.heroNote} aria-label="RemainFrame service approach">
            <span>BEGIN SMALL</span>
            <p>One useful outcome, fitted to your business and able to grow at your pace.</p>
          </aside>

          <p className={styles.heroEdition} aria-hidden="true">
            RF / FIELD NOTE 02
          </p>
        </section>

        <section className={styles.bridge} aria-labelledby="bridge-title">
          <p className={styles.sectionLabel}>THE DIFFERENCE IS WHAT IT ALREADY KNOWS</p>
          <h2 id="bridge-title">
            A better answer does not begin with a longer prompt.
            <em> It begins with the full story.</em>
          </h2>
        </section>

        <section
          className={styles.lensSection}
          id="memory-lens"
          aria-labelledby="lens-title"
        >
          <div className={styles.lensIntro}>
            <p className={styles.sectionLabel}>A SMALL TASK / WITH THE BUSINESS BEHIND IT</p>
            <h2 id="lens-title">One ordinary request. Look underneath.</h2>
            <p>
              Move the lens across the request. What makes the result useful is the
              history, judgment, and local detail RemainFrame helps the tools carry
              forward.
            </p>
          </div>

          <div className={styles.lensWrap}>
            <div
              className={styles.lensStage}
              style={lensStyle}
              role="region"
              tabIndex={0}
              aria-label="Interactive business-knowledge lens"
              aria-describedby="lens-instructions lens-description"
              onPointerMove={(event) => {
                if (event.pointerType === "mouse") setLensFromPointer(event);
              }}
              onPointerDown={setLensFromPointer}
              onKeyDown={handleLensKeys}
            >
              <div className={styles.requestLayer}>
                <span className={styles.requestNumber}>ILLUSTRATIVE REQUEST / 04:12 PM</span>
                <blockquote>
                  “Can you write my follow-up to the Johnsons?”
                </blockquote>
                <span className={styles.requestStatus}>A perfectly ordinary ask.</span>
              </div>

              <div className={styles.knowledgeLayer} aria-hidden="true">
                <span className={`${styles.knowledgeFact} ${styles.factOne}`}>
                  Saturday · 42 Piedra Road
                </span>
                <span className={`${styles.knowledgeFact} ${styles.factTwo}`}>
                  Loved the light in the detached studio
                </span>
                <span className={`${styles.knowledgeFact} ${styles.factThree}`}>
                  Asked twice about winter road access
                </span>
                <span className={`${styles.knowledgeFact} ${styles.factFour}`}>
                  Tone: neighborly, concise, never pushy
                </span>
                <span className={`${styles.knowledgeFact} ${styles.factFive}`}>
                  Budget boundary stays firm
                </span>
                <span className={`${styles.knowledgeFact} ${styles.factSix}`}>
                  Next step: offer a second walk-through
                </span>
                <strong>THE PART YOUR BUSINESS ALREADY KNOWS</strong>
              </div>

              <span className={styles.lensRing} aria-hidden="true">
                <span>what it carries forward</span>
              </span>
            </div>

            <div className={styles.lensControls}>
              <p id="lens-instructions">
                Move your pointer, tap the field, or focus it and use the arrow keys.
              </p>
              <button type="button" onClick={moveLensToNextStop}>
                Move the lens <span aria-hidden="true">↗</span>
              </button>
            </div>
            <p className={styles.visuallyHidden} id="lens-description">
              Beneath the request are details from a realtor’s work: the property
              toured, what the clients liked, their questions and budget boundary,
              the realtor’s tone, and the appropriate next step.
            </p>
            <p className={styles.visuallyHidden} aria-live="polite">
              {lensAnnouncement}
            </p>
          </div>

          <p className={styles.lensConclusion}>
            RemainFrame is not asking you to become better at prompting. It is the
            managed work of making the AI behind one valuable task understand your
            business—then keeping that understanding useful as the work grows.
          </p>
        </section>

        <section
          className={styles.kineticSection}
          ref={kineticSectionRef}
          aria-labelledby="kinetic-title"
        >
          <p className={styles.kineticLabel}>THE WORK SHOULD KEEP MOVING</p>
          <div className={styles.kineticCrop} aria-hidden="true">
            <p className={styles.kineticForward}>NO MORE STARTING</p>
            <p className={styles.kineticBack}>FROM SCRATCH.</p>
          </div>
          <h2 className={styles.visuallyHidden} id="kinetic-title">
            No more starting from scratch.
          </h2>
          <p className={styles.kineticCopy}>
            Begin with client follow-ups. Later, the same understanding can help with
            listing notes, scheduling, or a weekly plan. One useful improvement can
            grow at your pace—without turning your business upside down.
          </p>
        </section>

        <section className={styles.situations} aria-labelledby="situations-title">
          <header className={styles.situationsHeader}>
            <p className={styles.sectionLabel}>THREE OWNER-SCALE MOMENTS</p>
            <h2 id="situations-title">Different work. The same relief.</h2>
          </header>

          <div className={styles.situationBands}>
            {situations.map((situation) => (
              <article className={styles.situationBand} key={situation.number}>
                <span className={styles.situationNumber}>{situation.number}</span>
                <p className={styles.situationKind}>{situation.kind}</p>
                <h3>{situation.title}</h3>
                <p className={styles.situationCopy}>{situation.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.service} aria-labelledby="service-title">
          <div className={styles.serviceIntro}>
            <p className={styles.sectionLabel}>DONE WITH YOU / KEPT USEFUL FOR YOU</p>
            <h2 id="service-title">A service, not another thing to manage.</h2>
            <p>
              You bring the task that keeps stealing time. We handle the setup and
              stay close enough to make sure it continues to fit the real business.
            </p>
          </div>

          <ol className={styles.serviceSteps}>
            {serviceSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.ownership} aria-labelledby="ownership-title">
          <p className={styles.sectionLabel}>YOUR BUSINESS INFORMATION STAYS YOURS</p>
          <h2 id="ownership-title">
            See it. <em>Correct it.</em> Remove it. <em>Take it with you.</em>
          </h2>
          <p>
            The understanding behind your setup should never become a black box. You
            can inspect what is being carried forward, fix what is wrong, remove what
            no longer belongs, and take your information when you go.
          </p>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <p className={styles.closingKicker}>START WITH THE THING THAT REPEATS</p>
          <h2 id="closing-title">What would you rather not explain twice?</h2>
          <p>
            Tell us one task that keeps coming back. No technical brief required—just
            the work, what makes it yours, and where it gets stuck.
          </p>
          <a className={styles.closingAction} href={contactHref}>
            Talk through one task <span aria-hidden="true">↗</span>
          </a>
          <span className={styles.closingLocal}>
            For owner-led businesses in and around Pagosa Springs.
          </span>
        </section>
      </div>

      <footer className={styles.footer}>
        <Link href="/remainframe/concepts">
          <span aria-hidden="true">←</span> Back to all RemainFrame concepts
        </Link>
        <span>RemainFrame · Pick up where you left off.</span>
      </footer>
    </main>
  );
}
