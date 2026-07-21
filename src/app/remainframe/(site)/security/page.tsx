import Link from "next/link";
import { pageMetadata } from "../../_lib/metadata";
import styles from "../../site.module.css";

export const metadata = pageMetadata({
  title: "Security and data handling",
  description:
    "Review how a RemainFrame small-business setup handles access, approved tools, human review, outside providers, customer data, and known limitations.",
  path: "/remainframe/security",
});

export default function SecurityPage() {
  return (
    <main className={styles.main} id="main-content" tabIndex={-1}>
      <header className={styles.pageHero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Security and data handling</p>
          <h1>Clear limits. Careful access. A person stays in charge.</h1>
          <p>
            RemainFrame is a custom early-stage service, not a certified or regulated-data service.
            This page explains how access is scoped, where outside services may process information, and the limits you should evaluate.
          </p>
          <div className={styles.pageActions}>
            <Link className={styles.buttonPrimary} href="/remainframe/capabilities">See capability status</Link>
            <Link className={styles.buttonSecondary} href="/remainframe/legal/privacy">Read the privacy notice</Link>
          </div>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="trust-model-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Before customer setup</p>
            <h2 id="trust-model-title">Access follows a reviewed scope, not an inquiry form.</h2>
            <p>
              The controls below are checked for the customer and the job before business information is activated.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <article><span>Profile</span><h3>Separate customer boundary</h3><p>Each accepted setup receives a distinct customer profile, with containment checks before customer data is activated.</p></article>
            <article><span>Credentials</span><h3>Customer-supplied model keys</h3><p>Customers provide supported model-provider credentials and remain responsible for provider accounts, settings, spend, and revocation.</p></article>
            <article><span>Tools</span><h3>Allowlisted access</h3><p>Connected tools are enabled for the written workflow instead of being assumed available across the business.</p></article>
            <article><span>Services</span><h3>Private internal components</h3><p>Memory and tracing components are run inside the controlled runtime rather than exposed as public customer services.</p></article>
            <article><span>Recovery</span><h3>Backup and restoration checks</h3><p>The customer environment must pass the defined backup, restoration, health, and offboarding checks before it is treated as ready.</p></article>
            <article><span>Approval</span><h3>People stay in high-impact paths</h3><p>High-impact outside actions require a specific, implemented human-approval path in the accepted scope.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="data-flow-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Current data flow</p>
            <h2 id="data-flow-title">A request crosses the providers needed to answer it.</h2>
            <p>Relevant data does not remain entirely on one device or inside one operator-controlled server.</p>
          </div>
          <div className={styles.flow}>
            <article><span>Channel</span><strong>Signal</strong><p>Processes messages and channel metadata under its own terms.</p></article>
            <article><span>Runtime</span><strong>Hostinger VPS</strong><p>Hosts the controlled RemainFrame proving-ground environment.</p></article>
            <article><span>Memory</span><strong>Native + Honcho</strong><p>Stores and derives scoped working memory inside the runtime.</p></article>
            <article><span>Routing</span><strong>OpenRouter</strong><p>Routes relevant requests under customer-configured credentials and settings.</p></article>
            <article><span>Endpoint</span><strong>Selected model</strong><p>Processes prompts and relevant context according to that provider’s terms.</p></article>
          </div>
          <p className={`${styles.notice} ${styles.noticeSpaced}`}>
            Connected MCP tools and customer-approved services also receive the inputs needed for their role.
            Review the current <Link href="/remainframe/legal/subprocessors">subprocessor and provider disclosure</Link> before activation.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="responsibility-title">
        <div className={`${styles.shell} ${styles.split}`}>
          <div>
            <p className={styles.sectionLabel}>Shared responsibility</p>
            <h2 id="responsibility-title">Security depends on choices on both sides.</h2>
          </div>
          <dl className={styles.definitionList}>
            <div><dt>RemainFrame</dt><dd>Configures the approved customer boundary, restricts runtime access, runs documented checks, protects operator access, and responds to security concerns within the service scope.</dd></div>
            <div><dt>Customer</dt><dd>Uses strong account controls, protects provider keys, authorizes users, submits only permitted data, reviews output, and promptly revokes or reports access that should no longer exist.</dd></div>
            <div><dt>Third-party providers</dt><dd>Secure and operate their own services. Their availability, retention, model behavior, training settings, and incident obligations remain subject to their terms and configuration.</dd></div>
          </dl>
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="limits-title">
        <div className={styles.shell}>
          <div className={styles.boundaryBox}>
            <h2 id="limits-title">What we do not claim.</h2>
            <ul>
              <li>No SOC 2 report or FedRAMP authorization, no other compliance certification or attestation, and no claim of compliance with HIPAA, GDPR, the Colorado Privacy Act, or another named legal framework.</li>
              <li>No end-to-end encryption claim across the complete provider chain.</li>
              <li>No zero-access or “nothing ever leaves your device” promise.</li>
              <li>No universal zero-data-retention or provider-training guarantee.</li>
              <li>No immediate permanent deletion from every backup, snapshot, model provider, channel, or connected tool.</li>
              <li>No complete self-service export, correction, or service-wide selective deletion capability today.</li>
              <li>No guarantee that AI output is accurate, unique, complete, secure, or appropriate for an important decision.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="report-title">
        <div className={`${styles.shell} ${styles.split}`}>
          <div>
            <p className={styles.sectionLabel}>Report a concern</p>
            <h2 id="report-title">Security questions go directly to the operator.</h2>
          </div>
          <div>
            <p className={styles.proseLead}>
              Email <a href="mailto:hello@dade.studio?subject=RemainFrame%20security%20report">hello@dade.studio</a> with “RemainFrame security” in the subject.
              Do not include credentials, live exploit code, or sensitive customer data in the first message.
            </p>
            <p className={styles.notice}>
              This public page describes the current early-service posture as of July 21, 2026. Signed customer documents and a customer-specific data-scope record control the actual setup.
            </p>
            <div className={styles.pageActions}>
              <Link className={styles.buttonPrimary} href="/remainframe/start?source=security-final">Start with one task</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
