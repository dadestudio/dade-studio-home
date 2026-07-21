import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../_lib/metadata";
import siteStyles from "../../site.module.css";
import { legalDocuments } from "./legal-components";
import styles from "./legal.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Legal center",
  description:
    "Privacy, website and service terms, acceptable use, subprocessors, accessibility, storage, and data processing terms for RemainFrame.",
  path: "/remainframe/legal",
});

const documentDescriptions: Record<(typeof legalDocuments)[number]["href"], string> = {
  "/remainframe/legal/privacy":
    "What the public site and private pilot process, why, who receives it, and the choices available to you.",
  "/remainframe/legal/terms":
    "Rules for this informational and prelaunch website. These terms do not activate or govern the RemainFrame service.",
  "/remainframe/legal/service-terms":
    "The commercial terms available for incorporation into a signed Order Form or an express fixed-version clickwrap.",
  "/remainframe/legal/acceptable-use":
    "The data, decisions, actions, and conduct that are outside the scope of the private U.S. business pilot.",
  "/remainframe/legal/subprocessors":
    "Current infrastructure providers, customer-directed recipients, and self-hosted components, with those roles kept distinct.",
  "/remainframe/legal/cookies":
    "A plain account of the theme preference stored in your browser and ordinary hosting request logs.",
  "/remainframe/legal/accessibility":
    "Our WCAG 2.2 AA target, current review scope, and a direct path to request help or report a barrier.",
  "/remainframe/legal/data-processing-addendum":
    "A public U.S.-only processor template that applies only when a customer agreement expressly incorporates it.",
};

export default function LegalCenterPage() {
  return (
    <main
      id="main-content"
      className={`${siteStyles.main} ${styles.legalMain}`}
      tabIndex={-1}
    >
      <header className={`${siteStyles.pageHero} ${styles.hubHero}`}>
        <div className={siteStyles.shell}>
          <p className={siteStyles.eyebrow}>Legal center</p>
          <h1>Clear terms for a careful pilot.</h1>
          <p>
            These documents reflect the public site and the actual private proving
            ground today. They separate browsing this site from entering a service
            contract, and they do not turn planned capabilities into promises.
          </p>
        </div>
      </header>

      <div className={`${siteStyles.shell} ${styles.hubBody}`}>
        <section className={styles.statusPanel} aria-labelledby="legal-review-title">
          <h2 id="legal-review-title">Legal review status</h2>
          <p>
            These are operationally tailored documents for Dade.Studio, operating the
            RemainFrame product. Colorado counsel review is still pending and is a
            launch gate before any paid customer activation. The service terms are
            written for use, but become binding only through the execution mechanism
            they state. No customer has been activated yet.
          </p>
        </section>

        <section className={styles.hubSection} aria-labelledby="documents-title">
          <div className={styles.hubSectionHeader}>
            <h2 id="documents-title">Documents</h2>
            <p>
              Effective July 20, 2026. The exact contracting provider legal name and
              notice address will appear on each signed Order Form.
            </p>
          </div>
          <div className={styles.documentGrid}>
            {legalDocuments.map((document, index) => (
              <article className={styles.documentCard} key={document.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{document.label}</h3>
                <p>{documentDescriptions[document.href]}</p>
                <Link href={document.href}>Read {document.label.toLowerCase()}</Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.hubSection} aria-labelledby="scope-title">
          <div className={styles.hubSectionHeader}>
            <h2 id="scope-title">Current scope</h2>
            <p>These boundaries are product constraints, not fine print.</p>
          </div>
          <ul className={styles.scopeList}>
            <li>
              <strong>Private U.S. B2B pilot</strong>
              Authorized business users must be at least 18. The pilot is not open to
              consumers or users outside the United States.
            </li>
            <li>
              <strong>No sensitive or regulated workloads</strong>
              The service does not accept health, biometric, neural, precise-location,
              government-ID, or financial-credential data. Authentication or account
              credentials may not be submitted in prompts, messages, files, or ordinary
              support channels. Supported customer-owned provider credentials are
              accepted only through the approved secret-setup path.
            </li>
            <li>
              <strong>Human approval for high-impact outside actions</strong>
              No autonomous spending, deletion, external messaging, or important record
              changes without an implemented human approval path.
            </li>
            <li>
              <strong>Current proving ground, not universal integration</strong>
              The approved conversation channel, private RemainFrame runtime, memory and model services,
              customer-selected model endpoints, tools, and a Hostinger VPS form the
              current proving ground. Universal integrations and self-service are not
              shipped.
            </li>
            <li>
              <strong>Minimal public site data</strong>
              The Vercel-hosted site has no analytics, ad pixels, session replay,
              marketing cookies, or nonessential cookies. Contact uses your email app,
              not a site database.
            </li>
            <li>
              <strong>Honest data controls</strong>
              There is no fully verified self-service export or service-wide selective
              rights tooling. Provider snapshots and backups may persist through their
              normal rotation.
            </li>
          </ul>
        </section>

        <section className={styles.hubSection} aria-labelledby="gates-title">
          <div className={styles.hubSectionHeader}>
            <h2 id="gates-title">Paid-launch gates</h2>
            <p>
              These items must be closed before a paid customer is activated. Publishing
              this center does not itself close them.
            </p>
          </div>
          <ul className={styles.gateList}>
            <li>
              <strong>Colorado counsel review</strong>
              Confirm the privacy notice, service terms, DPA, risk allocation, and any
              customer-specific regulatory requirements.
            </li>
            <li>
              <strong>Contracting identity</strong>
              Put the provider legal name, notice address, commercial terms, service
              configuration, and fixed incorporated versions in every Order Form.
            </li>
            <li>
              <strong>No hidden dispute waiver</strong>
              These documents do not include mandatory arbitration or a class-action
              waiver. Add neither unless owner choices and counsel review are complete
              and the term is expressly agreed, not placed only in footer browsewrap.
            </li>
            <li>
              <strong>Security and data schedule</strong>
              Verify the customer-specific deployment, access, secrets, isolation,
              backup and restore, incident contacts, subprocessors, retention, and
              deletion behavior before activation.
            </li>
            <li>
              <strong>Subscription cancellation</strong>
              If online recurring subscriptions are offered, disclose renewal terms and
              provide the promised direct, one-step online cancellation path before the
              first purchase.
            </li>
            <li>
              <strong>Change review</strong>
              Revise this center before adding tracking, new service recipients,
              self-service activation, broader integrations, non-U.S. processing,
              minors, or sensitive and regulated data.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
