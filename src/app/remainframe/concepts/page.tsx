import Link from "next/link";
import type { Metadata } from "next";
import styles from "../remainframe.module.css";

export const metadata: Metadata = {
  title: "Design concept archive",
  description: "Archived RemainFrame design studies.",
  robots: { index: false, follow: false },
};

const concepts = [
  {
    number: "01",
    name: "Already Briefed",
    character: "Cinematic · human · immersive",
    description:
      "Follow one owner through a working day where the client, the details, and the next step never need to be explained twice.",
    interaction: "Scroll-directed day · ambient light · spatial work",
    href: "/remainframe/01",
    tone: "cinematic",
  },
  {
    number: "02",
    name: "Pick Up Where You Left Off",
    character: "Editorial · expressive · clear",
    description:
      "A bright, graphic direction that reveals the useful business knowledge hiding beneath one ordinary request.",
    interaction: "Interactive lens · kinetic type · narrative bands",
    href: "/remainframe/02",
    tone: "editorial",
  },
  {
    number: "03",
    name: "The Business Book",
    character: "Tactile · warm · quietly luxurious",
    description:
      "A living folio for the details only an owner knows, carried intact from one client, job, and day to the next.",
    interaction: "Dimensional folio · page choreography · material depth",
    href: "/remainframe/03",
    tone: "tactile",
  },
  {
    number: "04",
    name: "In Register",
    character: "Graphic · adaptive · high-contrast",
    description:
      "A custom-agent direction that shows RemainFrame changing roles across customer intake, lead screening, HOA budgets, projects, and other owner-led work.",
    interaction: "Sliding worktable · adaptive roles · responsive paper stack",
    href: "/remainframe/04",
    tone: "registration",
  },
] as const;

export default function RemainFrameConceptIndex() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>
          RemainFrame
        </Link>
        <p>Research-built concepts · owner-led business</p>
      </header>

      <section className={styles.intro} aria-labelledby="concept-title">
        <p className={styles.eyebrow}>SECOND STUDY / RESET AFTER RESEARCH</p>
        <h1 id="concept-title">
          Make the hard part
          <br />
          <em>feel easy.</em>
        </h1>
        <div className={styles.introNote}>
          <p>
            Four working directions built for owner-led teams across trades,
            services, boards, shops, studios, property, and more. Each one enters through
            a familiar job and lets the technical depth stay behind the scenes.
          </p>
          <ul aria-label="Design principles applied to every concept">
            <li>Familiar work first</li>
            <li>Owner-led by design</li>
            <li>Technical depth backstage</li>
          </ul>
        </div>
      </section>

      <section className={styles.conceptList} aria-label="RemainFrame design concepts">
        {concepts.map((concept) => (
          <Link
            className={`${styles.concept} ${styles[concept.tone]}`}
            href={concept.href}
            key={concept.number}
          >
            <div className={styles.conceptMeta}>
              <span>{concept.number}</span>
              <span>{concept.character}</span>
            </div>

            <div className={styles.conceptBody}>
              <h2>{concept.name}</h2>
              <p>{concept.description}</p>
            </div>

            <div className={styles.motif} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className={styles.conceptAction}>
              <span>{concept.interaction}</span>
              <strong>Enter the concept <i aria-hidden="true">↗</i></strong>
            </div>
          </Link>
        ))}
      </section>

      <footer className={styles.footer}>
        <span>RemainFrame · tailored AI for owner-led businesses</span>
        <span>Open all four before choosing a direction</span>
      </footer>
    </main>
  );
}
