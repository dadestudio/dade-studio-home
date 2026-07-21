import Link from "next/link";
import styles from "./archived-concept-banner.module.css";

export function ArchivedConceptBanner() {
  return (
    <aside className={styles.banner} aria-label="Archived design concept notice">
      <p>
        Archived design concept. This page is not current product, capability,
        pricing, or legal information.
      </p>
      <span className={styles.links}>
        <Link href="/remainframe/capabilities">What RemainFrame can do</Link>
        <Link href="/remainframe/legal">Legal center</Link>
      </span>
    </aside>
  );
}
