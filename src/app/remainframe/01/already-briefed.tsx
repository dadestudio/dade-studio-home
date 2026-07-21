"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ArchivedConceptBanner } from "../_components/archived-concept-banner";
import styles from "./page.module.css";

type Chapter = "morning" | "afternoon" | "tomorrow";

const chapters: Record<Chapter, { time: string; label: string }> = {
  morning: { time: "8:07 AM", label: "Morning" },
  afternoon: { time: "2:18 PM", label: "Afternoon" },
  tomorrow: { time: "7:42 AM", label: "Next day" },
};

function StoryScene() {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const chapterRef = useRef<Chapter>("morning");
  const [chapter, setChapter] = useState<Chapter>("morning");

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = track.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -bounds.top / distance));
      stage.style.setProperty("--story-progress", progress.toFixed(4));

      const nextChapter: Chapter =
        progress < 0.34 ? "morning" : progress < 0.68 ? "afternoon" : "tomorrow";

      if (chapterRef.current !== nextChapter) {
        chapterRef.current = nextChapter;
        setChapter(nextChapter);
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const moveLight = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--pointer-x", `${((x * 2 - 1) * 9).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${((y * 2 - 1) * 7).toFixed(2)}px`);
  };

  const settleLight = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "0px");
    event.currentTarget.style.setProperty("--pointer-y", "0px");
  };

  return (
    <section className={styles.storyTrack} id="day" ref={trackRef} aria-labelledby="day-title">
      <div
        className={styles.storyStage}
        data-chapter={chapter}
        ref={stageRef}
        onPointerMove={moveLight}
        onPointerLeave={settleLight}
      >
        <div className={styles.storyAtmosphere} aria-hidden="true">
          <span className={styles.windowLight} />
          <span className={styles.emberLight} />
          <span className={styles.dustOne} />
          <span className={styles.dustTwo} />
          <span className={styles.dustThree} />
        </div>

        <header className={styles.storyHeader}>
          <p>AN ILLUSTRATIVE DAY · PAGOSA SPRINGS</p>
          <div className={styles.storyClock} aria-live="polite">
            <span>{chapters[chapter].label}</span>
            <strong>{chapters[chapter].time}</strong>
          </div>
        </header>

        <div className={styles.storyCopy}>
          <article className={`${styles.chapter} ${styles.chapterMorning}`}>
            <p className={styles.chapterEyebrow}>MORNING · ONE NEW DETAIL</p>
            <h2 id="day-title">A client adds one thing after dinner.</h2>
            <p>
              Maya and Luis can stretch for the right place, but they do not want a
              steep driveway. RemainFrame recognizes the search and keeps the detail
              with the rest of their working brief.
            </p>
            <small>No new spreadsheet. No note to copy into three places.</small>
          </article>

          <article className={`${styles.chapter} ${styles.chapterAfternoon}`}>
            <p className={styles.chapterEyebrow}>AFTERNOON · THE FOLLOW-UP</p>
            <h2>The draft starts with what is already known.</h2>
            <p>
              A promising listing comes in. The writing tool already has the useful
              details: their budget, quiet-street preference, south-facing yard, and
              the warm, low-pressure tone this realtor uses with them.
            </p>
            <small>The owner still reviews every word before it goes out.</small>
          </article>

          <article className={`${styles.chapter} ${styles.chapterTomorrow}`}>
            <p className={styles.chapterEyebrow}>NEXT DAY · A DIFFERENT TASK</p>
            <h2>The showing plan picks up where yesterday stopped.</h2>
            <p>
              Another AI tool helps arrange the day. It knows which property moved
              forward, what the clients ruled out, and that the next step is a calm
              Saturday-morning showing.
            </p>
            <small>The tools can change. The business does not lose the thread.</small>
          </article>
        </div>

        <div className={styles.workTable} aria-label="A layered client brief changing through the workday">
          <div className={styles.tableEdge} aria-hidden="true" />
          <article className={`${styles.paper} ${styles.clientBrief}`}>
            <header>
              <span>ACTIVE SEARCH</span>
              <span>M + L</span>
            </header>
            <h3>Maya + Luis</h3>
            <dl>
              <div><dt>Timing</dt><dd>Before school starts</dd></div>
              <div><dt>Feel</dt><dd>Quiet street, not too polished</dd></div>
              <div><dt>Space</dt><dd>South-facing yard + pottery table</dd></div>
              <div><dt>Limit</dt><dd>Stay under $685k</dd></div>
            </dl>
            <footer><span /> Working brief kept current</footer>
          </article>

          <article className={`${styles.paper} ${styles.lateNote}`}>
            <span>THU · 9:42 PM</span>
            <p>“One more thing — no steep driveway, even if the house is perfect.”</p>
            <small>Added to Maya + Luis</small>
          </article>

          <article className={`${styles.paper} ${styles.listingSheet}`}>
            <header><span>NEW LISTING</span><span>MEADOWLARK</span></header>
            <div className={styles.propertySketch} aria-hidden="true">
              <i /><i /><i /><i />
            </div>
            <h3>Worth a closer look</h3>
            <ul>
              <li>Gentle winter access</li>
              <li>South-facing back yard</li>
              <li>Flexible studio corner</li>
            </ul>
          </article>

          <article className={`${styles.paper} ${styles.draftSheet}`}>
            <span>FOLLOW-UP · DRAFT</span>
            <p>
              “This one feels closer to what you described. The driveway is gentle,
              the back yard gets good southern light, and there is a corner that may
              work for the pottery table.”
            </p>
            <footer>Warm · concise · no pressure</footer>
          </article>

          <article className={`${styles.paper} ${styles.routeSheet}`}>
            <span>SATURDAY · SHOWINGS</span>
            <ol>
              <li><time>9:00</time><p>Ponderosa <small>Compare only</small></p></li>
              <li className={styles.routeFocus}><time>10:30</time><p>Meadowlark <small>Best match</small></p></li>
              <li><time>12:00</time><p>Debrief <small>Quiet coffee</small></p></li>
            </ol>
            <footer>Next step: confirm 10:30</footer>
          </article>

          <div className={styles.redThread} aria-hidden="true"><i /><i /><i /></div>
          <p className={styles.sceneCaption}>Same clients · same criteria · same tone · same next step</p>
        </div>

        <div className={styles.storyProgress} aria-hidden="true">
          <span data-active={chapter === "morning"}>Morning</span>
          <span data-active={chapter === "afternoon"}>Afternoon</span>
          <span data-active={chapter === "tomorrow"}>Next day</span>
        </div>
      </div>
    </section>
  );
}

export function AlreadyBriefedExperience() {
  return (
    <div className={styles.page} id="top">
      <a className={styles.skipLink} href="#content">Skip to content</a>
      <div className={styles.archivedHeader}>
        <ArchivedConceptBanner />
        <header className={styles.header}>
          <a className={styles.brand} href="#top" aria-label="RemainFrame home">
            <span className={styles.brandMark} aria-hidden="true"><i /></span>
            <span>RemainFrame</span>
          </a>
          <nav className={styles.headerNav} aria-label="Page navigation">
            <a href="#day">A day</a>
            <a href="#service">The service</a>
            <a href="#ownership">Your information</a>
          </nav>
          <Link className={styles.backLink} href="/remainframe/concepts">← All directions</Link>
        </header>
      </div>

      <main id="content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroTexture} aria-hidden="true" />
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>TAILORED AI FOR OWNER-LED BUSINESS</p>
              <h1 id="hero-title">Your AI should know your business by now.</h1>
              <p className={styles.heroBody}>
                RemainFrame is a managed service that gives the AI tools you already
                use an enduring understanding of your clients, your preferences, and
                the way you work.
              </p>
              <p className={styles.heroPromise}>
                Start with one useful job. Let it grow only where it earns a place.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="mailto:hello@dade.studio?subject=RemainFrame%20private%20pilot">
                  Talk about a private pilot <span aria-hidden="true">↗</span>
                </a>
                <a className={styles.secondaryAction} href="#day">
                  See one workday <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className={styles.heroTrust}>
                <span>Set up with you</span>
                <span>Visible to you</span>
                <span>Yours to take</span>
              </div>
            </div>

            <div className={styles.heroStill} aria-label="An illustrative working brief for a realtor">
              <div className={styles.heroGlow} aria-hidden="true" />
              <article className={`${styles.heroPaper} ${styles.heroPaperBack}`}>
                <span>LAST CONVERSATION</span>
                <p>Warm follow-up. No sales pressure.</p>
              </article>
              <article className={`${styles.heroPaper} ${styles.heroPaperMain}`}>
                <header><span>WORKING BRIEF</span><span>OPEN</span></header>
                <h2>Maya + Luis</h2>
                <ul>
                  <li>Quiet street</li>
                  <li>South-facing yard</li>
                  <li>No steep driveway</li>
                </ul>
                <footer><span /> Ready for the next task</footer>
              </article>
              <article className={`${styles.heroPaper} ${styles.heroPaperFront}`}>
                <span>NEXT STEP</span>
                <strong>Confirm Saturday · 10:30 AM</strong>
                <small>Already included in the next brief</small>
              </article>
              <div className={styles.briefedStamp} aria-hidden="true">ALREADY BRIEFED</div>
            </div>
          </div>
          <p className={styles.heroMarginNote}>CONCEPT 01 · ALREADY BRIEFED</p>
        </section>

        <StoryScene />

        <section className={styles.serviceSection} id="service" aria-labelledby="service-title">
          <header className={styles.sectionHeader}>
            <span>02 · THE SERVICE</span>
            <span>Built around one business, not a generic bot</span>
          </header>
          <div className={styles.serviceIntro}>
            <p>THE QUIET PART</p>
            <div>
              <h2 id="service-title">Useful AI, without becoming an AI company.</h2>
              <p>
                You bring the business judgment. We handle the deeper setup behind
                the scenes, beginning with one job that would genuinely make the week
                easier.
              </p>
            </div>
          </div>
          <ol className={styles.serviceSteps}>
            <li>
              <span>01</span>
              <h3>We learn how the work actually happens.</h3>
              <p>What matters, what changes, what should never be assumed, and how you want customers treated.</p>
            </li>
            <li>
              <span>02</span>
              <h3>We set up one useful starting point.</h3>
              <p>A client follow-up, a recurring content job, or another narrow need using tools that fit your business.</p>
            </li>
            <li>
              <span>03</span>
              <h3>We keep it useful as the business changes.</h3>
              <p>We help correct stale details, refine the setup, and expand only when the next use is worth it.</p>
            </li>
          </ol>
          <p className={styles.serviceNote}>
            Every setup is scoped. We only connect tools that make sense for the work and are ready for that use.
          </p>
        </section>

        <section className={styles.ownershipSection} id="ownership" aria-labelledby="ownership-title">
          <header className={styles.sectionHeaderLight}>
            <span>03 · YOUR INFORMATION</span>
            <span>Clear ownership, in plain language</span>
          </header>
          <div className={styles.ownershipGrid}>
            <div className={styles.ownershipHeading}>
              <p>NO MYSTERY MEMORY</p>
              <h2 id="ownership-title">If it knows your business, you should know what it knows.</h2>
            </div>
            <div className={styles.ownershipDetails}>
              <details open>
                <summary><span>01</span>See it<i aria-hidden="true">+</i></summary>
                <p>A readable view of the useful details being kept and, where available, where they came from.</p>
              </details>
              <details>
                <summary><span>02</span>Correct it<i aria-hidden="true">+</i></summary>
                <p>Change an outdated preference or clarify a rule in ordinary language.</p>
              </details>
              <details>
                <summary><span>03</span>Remove it<i aria-hidden="true">+</i></summary>
                <p>Delete a detail that no longer belongs in the working understanding.</p>
              </details>
              <details>
                <summary><span>04</span>Plan portability<i aria-hidden="true">+</i></summary>
                <p>Agree up front on which business details can be exported and in what form.</p>
              </details>
            </div>
          </div>
        </section>

        <section className={styles.nearbySection} aria-labelledby="nearby-title">
          <header className={styles.sectionHeader}>
            <span>04 · OTHER WORKDAYS</span>
            <span>Start with the work already on the calendar</span>
          </header>
          <div className={styles.nearbyIntro}>
            <p>BEYOND REAL ESTATE</p>
            <h2 id="nearby-title">The same relief, shaped to a different business.</h2>
          </div>
          <div className={styles.nearbyStories}>
            <article className={styles.nearbyStory}>
              <div className={styles.nearbyTime}><span>CREATOR</span><time>10:16 AM</time></div>
              <div className={styles.nearbyCopy}>
                <h3>The script remembers the promise made to the sponsor.</h3>
                <p>The brief changed yesterday. Today&apos;s outline still carries the approved language, the creator&apos;s voice, and the shot that is still missing.</p>
              </div>
              <p className={styles.nearbyResult}>No hunt through old chats.</p>
            </article>
            <article className={styles.nearbyStory}>
              <div className={styles.nearbyTime}><span>LOCAL SERVICE</span><time>4:38 PM</time></div>
              <div className={styles.nearbyCopy}>
                <h3>The follow-up starts with what was promised at the house.</h3>
                <p>The homeowner prefers a text, the scope changed by the side gate, and Friday was the promised check-in. The next draft begins there.</p>
              </div>
              <p className={styles.nearbyResult}>No second intake.</p>
            </article>
          </div>
        </section>

        <section className={styles.closeSection} id="pilot" aria-labelledby="close-title">
          <div className={styles.closeLight} aria-hidden="true" />
          <p>PRIVATE FOUNDING PILOTS · SOUTHWEST COLORADO</p>
          <h2 id="close-title">Let your AI arrive already briefed.</h2>
          <p className={styles.closeBody}>
            Tell us about one part of the business that keeps making you repeat yourself.
          </p>
          <a className={styles.closeAction} href="mailto:hello@dade.studio?subject=RemainFrame%20private%20pilot">
            Start a private conversation <span aria-hidden="true">↗</span>
          </a>
          <div className={styles.closeTrust}>
            <span>Clear ownership terms</span>
            <span>Business context you can review</span>
            <span>One useful beginning</span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#top">
          <span className={styles.brandMark} aria-hidden="true"><i /></span>
          <span>RemainFrame</span>
        </a>
        <p>Tailored AI that keeps the briefing.</p>
        <Link href="/remainframe/concepts">View all directions →</Link>
      </footer>
    </div>
  );
}
