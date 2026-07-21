import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import {
  StructuredData,
  createArticleStructuredData,
} from "../_components/structured-data";
import { resourceBySlug } from "../resource-data";
import styles from "../resources.module.css";
import { createArticleMetadata } from "../seo";

const resource = resourceBySlug["user-owned-ai"];

export const metadata: Metadata = createArticleMetadata(resource);

const tableOfContents = [
  { id: "working-definition", label: "A working definition" },
  { id: "ownership-stack", label: "The ownership stack" },
  { id: "not-the-same", label: "What ownership is not" },
  { id: "exit-test", label: "The practical exit test" },
  { id: "evaluation", label: "Questions to ask" },
  { id: "remainframe", label: "RemainFrame today" },
] as const;

const quickAnswer = [
  "User-owned AI means the person using the system keeps meaningful control over its durable context, behavior, access, and provider relationships.",
  "A mature user-owned system needs usable choices: inspect, correct, restrict, export, revoke, and leave. A label or download button by itself is not enough.",
  "User-owned does not automatically mean local-only, private, open source, or self-hosted. Those can support ownership, but they are separate properties.",
] as const;

export default function UserOwnedAiPage() {
  return (
    <>
      <StructuredData data={createArticleStructuredData(resource)} />
      <ArticlePage
        resource={resource}
        tableOfContents={tableOfContents}
        quickAnswer={quickAnswer}
      >
        <p className={styles.articleLead}>
          Most AI products let you use an account. Fewer make it practical to keep
          the useful understanding built through that account, govern how it is
          used, and take it somewhere else. That difference is the heart of
          user-owned AI.
        </p>

        <section id="working-definition" aria-labelledby="working-definition-title">
          <p className={styles.sectionIndex}>01 / A working definition</p>
          <h2 id="working-definition-title">Ownership is a set of powers, not a slogan.</h2>
          <p>
            User-owned AI is an operating relationship in which the user retains
            meaningful control over the durable context and permissions that make
            an AI system useful over time. The system may still rely on hosted
            models, cloud infrastructure, or outside tools. The decisive question
            is who can govern the relationship.
          </p>
          <blockquote className={styles.quoteBlock}>
            <p>
              If the AI becomes more useful because it learns your work, ownership
              asks whether that accumulated value remains usable on your terms.
            </p>
          </blockquote>
          <p>
            Meaningful control must show up in ordinary actions. You should be able
            to understand what persists, change what is wrong, limit where it goes,
            remove access, and leave without rebuilding your working context from
            zero.
          </p>
        </section>

        <section id="ownership-stack" aria-labelledby="ownership-stack-title">
          <p className={styles.sectionIndex}>02 / The ownership stack</p>
          <h2 id="ownership-stack-title">Six controls make ownership concrete.</h2>
          <p>
            No single control proves ownership. The practical test is whether the
            pieces work together.
          </p>

          <ol className={styles.processList}>
            <li>
              <span>01</span>
              <div>
                <h3>Continuity</h3>
                <p>
                  Useful context persists beyond one chat, model, or device in a
                  form that supports future work.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Visibility and correction</h3>
                <p>
                  You can inspect important remembered details, correct mistakes,
                  and understand which context influenced a result.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Behavioral control</h3>
                <p>
                  Instructions, boundaries, and preferences can be changed without
                  surrendering the history that made the system useful.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Permission control</h3>
                <p>
                  Tool access is scoped, reviewable, and revocable. The user decides
                  which actions need approval and which should never be available.
                </p>
              </div>
            </li>
            <li>
              <span>05</span>
              <div>
                <h3>Provider choice</h3>
                <p>
                  Where the architecture allows it, the user can change models or
                  providers without abandoning the continuity layer around them.
                </p>
              </div>
            </li>
            <li>
              <span>06</span>
              <div>
                <h3>Portability and exit</h3>
                <p>
                  You can retrieve useful data, revoke credentials, and stop the
                  relationship without hidden dependence on an inaccessible format.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section id="not-the-same" aria-labelledby="not-the-same-title">
          <p className={styles.sectionIndex}>03 / Important distinctions</p>
          <h2 id="not-the-same-title">Ownership is related to privacy, but it is not the same thing.</h2>
          <div className={styles.tableWrap} role="region" aria-label="User-owned AI product-property comparison" tabIndex={0}>
            <table className={styles.comparisonTable}>
              <caption>User-owned AI and related product properties</caption>
              <thead>
                <tr>
                  <th scope="col">Property</th>
                  <th scope="col">What it tells you</th>
                  <th scope="col">What it does not prove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Private</th>
                  <td>How data is collected, shared, and protected.</td>
                  <td>That you can move context or change providers.</td>
                </tr>
                <tr>
                  <th scope="row">Local-first</th>
                  <td>Some or all data and computation stay on your device.</td>
                  <td>That formats are portable or behavior is transparent.</td>
                </tr>
                <tr>
                  <th scope="row">Open source</th>
                  <td>Source code is available under a stated license.</td>
                  <td>That a hosted service gives you practical data control.</td>
                </tr>
                <tr>
                  <th scope="row">Self-hosted</th>
                  <td>You operate the software or infrastructure.</td>
                  <td>That the system is easy to inspect, export, or govern.</td>
                </tr>
                <tr>
                  <th scope="row">Bring your own key</th>
                  <td>You may hold the billing relationship with a model provider.</td>
                  <td>That memory, tools, logs, and permissions are user-owned.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Each property can strengthen ownership. None should substitute for a
            direct explanation of who controls durable context, credentials,
            provider routing, and exit.
          </p>
        </section>

        <section id="exit-test" aria-labelledby="exit-test-title">
          <p className={styles.sectionIndex}>04 / The practical test</p>
          <h2 id="exit-test-title">The clearest ownership test is leaving.</h2>
          <p>
            Imagine that you want to change products next month. A user-owned
            system should make the boundary understandable before that moment, not
            after you ask support for help.
          </p>

          <div className={styles.questionGrid}>
            <div>
              <h3>Can you take the useful context?</h3>
              <p>
                A raw transcript dump may satisfy a data export requirement while
                leaving the durable facts, relationships, and instructions trapped.
              </p>
            </div>
            <div>
              <h3>Can you remove access?</h3>
              <p>
                Provider keys, tool credentials, tokens, webhooks, and background
                jobs should have a clear revocation path.
              </p>
            </div>
            <div>
              <h3>Can you understand what remains?</h3>
              <p>
                Retention, backups, logs, and deletion timelines should be described
                in terms a user can act on.
              </p>
            </div>
            <div>
              <h3>Can another system use the result?</h3>
              <p>
                Portability is stronger when exports use documented, practical
                formats instead of a product-specific archive that only the original
                service understands.
              </p>
            </div>
          </div>

          <aside className={styles.callout}>
            <p>The exit test</p>
            <strong>
              Ownership is credible when leaving is possible without surrendering
              the accumulated understanding of your work.
            </strong>
          </aside>
        </section>

        <section id="evaluation" aria-labelledby="evaluation-title">
          <p className={styles.sectionIndex}>05 / Buyer questions</p>
          <h2 id="evaluation-title">Questions that turn ownership into evidence.</h2>
          <ul className={styles.checklist}>
            <li>Which parts of my context persist beyond a single conversation?</li>
            <li>Where is that context stored, and which services can receive it?</li>
            <li>Can I inspect and correct remembered details without filing a request?</li>
            <li>Can I change models or providers while keeping useful continuity?</li>
            <li>How are tool permissions granted, scoped, reviewed, and revoked?</li>
            <li>What can I export, in which format, and can another system use it?</li>
            <li>What is deleted when I leave, and what is retained in backups or logs?</li>
            <li>Which controls exist today, and which are still planned?</li>
          </ul>
        </section>

        <section className={styles.productReality} id="remainframe" aria-labelledby="remainframe-title">
          <p className={styles.sectionIndex}>06 / RemainFrame today</p>
          <h2 id="remainframe-title">User-owned is the design boundary, not a claim that every surface is finished.</h2>
          <p>
            RemainFrame is being built around durable working context and clear
            human control. Its current private runtime combines memory, model
            routing, approved tools, and an isolated server environment. Those
            pieces support real work without turning a roadmap into a promise.
          </p>
          <p>
            Universal cross-tool integration and public self-service are not
            shipped. Complete service-wide export, correction, and selective deletion
            are not available today. RemainFrame also makes no compliance or certification claim.
            The honest product question is how the working controls expand without
            weakening user ownership as more tools and people are added.
          </p>
        </section>
      </ArticlePage>
    </>
  );
}
