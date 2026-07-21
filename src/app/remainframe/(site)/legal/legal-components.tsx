import Link from "next/link";
import type { ReactNode } from "react";
import { LEGAL_CONTACT, LEGAL_EFFECTIVE_DATE } from "../../_lib/metadata";
import siteStyles from "../../site.module.css";
import styles from "./legal.module.css";

export const legalDocuments = [
  { href: "/remainframe/legal/privacy", label: "Privacy notice" },
  { href: "/remainframe/legal/terms", label: "Website terms" },
  { href: "/remainframe/legal/service-terms", label: "Service terms" },
  { href: "/remainframe/legal/acceptable-use", label: "Acceptable use" },
  { href: "/remainframe/legal/subprocessors", label: "Subprocessors" },
  { href: "/remainframe/legal/cookies", label: "Cookies and storage" },
  { href: "/remainframe/legal/accessibility", label: "Accessibility" },
  {
    href: "/remainframe/legal/data-processing-addendum",
    label: "Data processing addendum",
  },
] as const;

type TocItem = {
  id: string;
  label: string;
};

type LegalDocumentProps = {
  title: string;
  summary: string;
  eyebrow?: string;
  toc: readonly TocItem[];
  children: ReactNode;
};

export function LegalDocument({
  title,
  summary,
  eyebrow = "Legal",
  toc,
  children,
}: LegalDocumentProps) {
  return (
    <main
      id="main-content"
      className={`${siteStyles.main} ${styles.legalMain}`}
      tabIndex={-1}
    >
      <header className={`${siteStyles.pageHero} ${styles.documentHero}`}>
        <div className={siteStyles.shell}>
          <p className={siteStyles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
          <dl className={styles.documentMeta}>
            <div>
              <dt>Effective</dt>
              <dd>{LEGAL_EFFECTIVE_DATE}</dd>
            </div>
            <div>
              <dt>Operator</dt>
              <dd>Dade.Studio, operating the RemainFrame product</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className={`${siteStyles.shell} ${styles.documentLayout}`}>
        <aside className={styles.documentRail} aria-label="Document navigation">
          <Link className={styles.backLink} href="/remainframe/legal">
            Legal center
          </Link>
          <nav aria-label={`On this page: ${title}`}>
            <h2>On this page</h2>
            <ol>
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className={styles.document}>
          <div className={styles.operatorNotice}>
            <strong>Who operates RemainFrame.</strong> Dade.Studio, operating the
            RemainFrame product, is an independent business based in Pagosa Springs,
            Colorado. RemainFrame is a product and operating name, not a separately
            identified legal entity. For a paid or activated service, the exact
            contracting provider legal name and notice address will appear on the
            signed Order Form.
          </div>
          {children}
          <footer className={styles.documentFooter}>
            <h2>Questions about this document?</h2>
            <p>
              Email <a href={`mailto:${LEGAL_CONTACT}`}>{LEGAL_CONTACT}</a>. Please do
              not send passwords, API keys, health information, government identifiers,
              or other sensitive information by email.
            </p>
            <Link href="/remainframe/legal">Return to the legal center</Link>
          </footer>
        </article>
      </div>
    </main>
  );
}

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className={styles.legalSection}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LegalCallout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.callout}>
      <strong>{title}</strong>
      <div>{children}</div>
    </div>
  );
}

export function TableScroll({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      className={styles.tableScroll}
      role="region"
      aria-label={label}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
