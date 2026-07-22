import Image from "next/image";
import Link from "next/link";
import styles from "./concepts.module.css";

const concepts = [
  {
    number: "01",
    name: "Signal",
    character: "Editorial / precise / direct",
    summary:
      "A high-contrast studio system where typography does the selling and every section earns its space.",
    bestFor: "The clearest balance of design credibility and business conversion.",
    href: "/concepts/01",
    tone: "signal",
  },
  {
    number: "02",
    name: "After Dark",
    character: "Cinematic / digital / assured",
    summary:
      "A dark, immersive direction that makes the studio feel like a distinct creative world rather than a service menu.",
    bestFor: "The strongest first impression and most expressive RemainFrame pairing.",
    href: "/concepts/02",
    tone: "dark",
  },
  {
    number: "03",
    name: "Field Notes",
    character: "Warm / tactile / personal",
    summary:
      "A crafted, human direction that turns a solo studio into an advantage and keeps the technology backstage.",
    bestFor: "The most approachable voice for founders and owner-led businesses.",
    href: "/concepts/03",
    tone: "field",
  },
] as const;

export default function ConceptsIndex() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Dade Studio home">
          <Image
            className={styles.logo}
            src="/assets/brand/logo-d.png"
            alt=""
            width={36}
            height={36}
            priority
          />
          <span>dade.studio</span>
        </Link>
        <p>Website direction study · 2026</p>
      </header>

      <section className={styles.intro} aria-labelledby="directions-title">
        <p className={styles.eyebrow}>Three complete, testable directions</p>
        <h1 id="directions-title">
          Same studio.
          <br />
          Three different <em>signals.</em>
        </h1>
        <div className={styles.introCopy}>
          <p>
            Each direction puts brand-led web design first and RemainFrame second. The
            positioning stays consistent; the visual system, pacing, and personality change.
          </p>
          <p>Open all three at desktop and mobile size before choosing.</p>
        </div>
      </section>

      <section className={styles.grid} aria-label="Website directions">
        {concepts.map((concept) => (
          <article className={`${styles.card} ${styles[concept.tone]}`} key={concept.number}>
            <Link href={concept.href} className={styles.preview} aria-label={`Open ${concept.name}`}>
              <div className={styles.previewTop}>
                <span>dade.studio</span>
                <span>{concept.number} / 03</span>
              </div>
              <div className={styles.previewTitle} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className={styles.previewTiles} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </Link>

            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span>{concept.number}</span>
                <span>{concept.character}</span>
              </div>
              <h2>{concept.name}</h2>
              <p>{concept.summary}</p>
              <div className={styles.bestFor}>
                <span>Best for</span>
                <p>{concept.bestFor}</p>
              </div>
              <Link href={concept.href} className={styles.openLink}>
                Open direction <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>Full pages, responsive layouts, real links, and production-minded accessibility.</p>
        <Link href="mailto:hello@dade.studio?subject=Dade.Studio%20website%20direction">
          hello@dade.studio
        </Link>
      </footer>
    </main>
  );
}
