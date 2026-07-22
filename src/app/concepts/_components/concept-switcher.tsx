import Link from "next/link";
import styles from "./concept-switcher.module.css";

const concepts = [
  { number: "01", href: "/concepts/01", label: "Signal" },
  { number: "02", href: "/concepts/02", label: "After Dark" },
  { number: "03", href: "/concepts/03", label: "Field Notes" },
] as const;

type ConceptSwitcherProps = {
  active?: "01" | "02" | "03";
};

export function ConceptSwitcher({ active }: ConceptSwitcherProps) {
  return (
    <nav className={styles.switcher} aria-label="Website concept navigator">
      <Link className={styles.allLink} href="/concepts">
        All directions
      </Link>
      <span className={styles.divider} aria-hidden="true" />
      <div className={styles.links}>
        {concepts.map((concept) => (
          <Link
            key={concept.number}
            className={`${styles.conceptLink} ${
              active === concept.number ? styles.active : ""
            }`}
            href={concept.href}
            aria-label={`View concept ${concept.number}: ${concept.label}`}
            aria-current={active === concept.number ? "page" : undefined}
            title={concept.label}
          >
            {concept.number}
          </Link>
        ))}
      </div>
    </nav>
  );
}
