import Link from "next/link";
import { SiteFooter, SiteHeader } from "./_components/site-shell";
import styles from "./site.module.css";

export default function RemainFrameNotFound() {
  return (
    <div className={styles.site}>
      <SiteHeader />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <section className={styles.pageHero}>
          <div className={styles.shell}>
            <p className={styles.eyebrow}>404 / Frame not found</p>
            <h1>This part of the work is not here.</h1>
            <p>The page may have moved, or a planned route may not be available yet.</p>
            <div className={styles.pageActions}>
              <Link className={styles.buttonPrimary} href="/remainframe">Return to RemainFrame</Link>
              <Link className={styles.buttonSecondary} href="/remainframe/capabilities">See what RemainFrame can do</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
