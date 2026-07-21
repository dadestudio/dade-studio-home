import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import {
  StructuredData,
  createArticleStructuredData,
} from "../_components/structured-data";
import { resourceBySlug } from "../resource-data";
import styles from "../resources.module.css";
import { createArticleMetadata } from "../seo";

const resource = resourceBySlug["ai-memory-vs-chat-history"];

export const metadata: Metadata = createArticleMetadata(resource);

const tableOfContents = [
  { id: "three-layers", label: "Three different layers" },
  { id: "comparison", label: "Memory and history compared" },
  { id: "how-memory-works", label: "How useful memory works" },
  { id: "failure-modes", label: "Where memory goes wrong" },
  { id: "evaluation", label: "Questions to ask" },
  { id: "remainframe", label: "RemainFrame today" },
] as const;

const quickAnswer = [
  "Chat history is a record of prior conversations. It helps you find or reopen what was said.",
  "AI memory is selected information that can be retrieved and supplied when it is useful in later work.",
  "A context window is the material a model can use for one response. It may contain parts of history, memory, files, instructions, and the current request.",
] as const;

export default function AiMemoryVsChatHistoryPage() {
  return (
    <>
      <StructuredData data={createArticleStructuredData(resource)} />
      <ArticlePage
        resource={resource}
        tableOfContents={tableOfContents}
        quickAnswer={quickAnswer}
      >
        <p className={styles.articleLead}>
          A long list of old conversations can look like memory. It is not the same
          thing. History preserves what happened. Memory helps decide what from the
          past belongs in the work happening now.
        </p>

        <section id="three-layers" aria-labelledby="three-layers-title">
          <p className={styles.sectionIndex}>01 / The distinction</p>
          <h2 id="three-layers-title">Three layers that are easy to confuse.</h2>
          <p>
            Chat history, memory, and context often appear together in an AI
            product, but they solve different problems. A useful system may use all
            three.
          </p>

          <div className={styles.definitionGrid}>
            <div>
              <span>01</span>
              <h3>Chat history</h3>
              <p>
                A saved record of messages, usually organized by conversation. It
                is useful for review, search, and resuming a particular thread.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>AI memory</h3>
              <p>
                Information carried beyond one exchange, then retrieved when a
                later task makes it relevant. Memory might include a preference,
                decision, relationship, rule, or project state.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Active context</h3>
              <p>
                The material available to the model for a particular response. It
                can include the current conversation, retrieved memories, files,
                instructions, and tool results.
              </p>
            </div>
          </div>

          <p>
            The distinction matters because a product can save every conversation
            and still make you repeat the same background. It can also retrieve a
            compact set of useful facts without loading a complete transcript.
          </p>
        </section>

        <section id="comparison" aria-labelledby="comparison-title">
          <p className={styles.sectionIndex}>02 / Side by side</p>
          <h2 id="comparison-title">Memory is not simply more history.</h2>
          <div className={styles.tableWrap} role="region" aria-label="Chat history and AI memory comparison" tabIndex={0}>
            <table className={styles.comparisonTable}>
              <caption>Chat history and AI memory compared</caption>
              <thead>
                <tr>
                  <th scope="col">Question</th>
                  <th scope="col">Chat history</th>
                  <th scope="col">AI memory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">What is stored?</th>
                  <td>Messages and attachments from a conversation.</td>
                  <td>Selected details, summaries, states, or relationships.</td>
                </tr>
                <tr>
                  <th scope="row">How is it used?</th>
                  <td>You reopen, search, or continue a thread.</td>
                  <td>The system retrieves relevant material for later work.</td>
                </tr>
                <tr>
                  <th scope="row">What is the unit?</th>
                  <td>A conversation or message.</td>
                  <td>A fact, preference, decision, event, rule, or summary.</td>
                </tr>
                <tr>
                  <th scope="row">What can fail?</th>
                  <td>The needed detail stays buried in an old thread.</td>
                  <td>The wrong detail is saved, missed, or retrieved out of context.</td>
                </tr>
                <tr>
                  <th scope="row">What control helps?</th>
                  <td>Search, export, retention, and deletion.</td>
                  <td>Inspection, correction, scope, provenance, and forgetting.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Some products use conversation history as one source for creating or
            retrieving memory. That does not erase the distinction. The archive is
            still different from the process that decides what to carry forward.
          </p>
        </section>

        <section id="how-memory-works" aria-labelledby="how-memory-works-title">
          <p className={styles.sectionIndex}>03 / The working loop</p>
          <h2 id="how-memory-works-title">Useful memory is a loop, not a vault.</h2>
          <p>
            Storage is only one part of memory. A practical system has to decide
            what is worth retaining, connect it to the right scope, retrieve it at
            the right moment, and let new evidence change it.
          </p>

          <ol className={styles.processList}>
            <li>
              <span>01</span>
              <div>
                <h3>Notice</h3>
                <p>
                  Identify a potentially durable detail, such as an approved
                  decision, recurring preference, project constraint, or customer
                  relationship.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Shape</h3>
                <p>
                  Turn raw conversation into something usable. That may mean a
                  concise fact, a dated event, a summary, or a link to its source.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Scope</h3>
                <p>
                  Decide where the memory belongs. A personal preference, one
                  client&apos;s rule, and a company-wide policy should not be treated as
                  interchangeable.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Retrieve</h3>
                <p>
                  Find the smallest relevant set for the current task. More context
                  is not automatically better context.
                </p>
              </div>
            </li>
            <li>
              <span>05</span>
              <div>
                <h3>Correct or forget</h3>
                <p>
                  Update stale information, resolve conflicts, and remove details
                  that should no longer influence future work.
                </p>
              </div>
            </li>
          </ol>

          <aside className={styles.callout}>
            <p>Useful rule</p>
            <strong>
              If a system can remember but cannot show, correct, scope, or forget,
              it has persistence without enough control.
            </strong>
          </aside>
        </section>

        <section id="failure-modes" aria-labelledby="failure-modes-title">
          <p className={styles.sectionIndex}>04 / Failure modes</p>
          <h2 id="failure-modes-title">Persistent does not always mean accurate.</h2>
          <p>
            Memory can reduce repetition, but it can also preserve a bad inference
            or surface a true detail in the wrong situation. The main risks are not
            mysterious.
          </p>

          <div className={styles.questionGrid}>
            <div>
              <h3>False memory</h3>
              <p>
                A guess or ambiguous statement is stored as a fact. Good systems
                distinguish direct user input from inference and retain source
                context where possible.
              </p>
            </div>
            <div>
              <h3>Stale memory</h3>
              <p>
                A past preference or project state continues to appear after it has
                changed. Dates, versioning, and correction paths help.
              </p>
            </div>
            <div>
              <h3>Scope leak</h3>
              <p>
                Information from one customer, project, or role appears in another.
                Clear boundaries are as important as retrieval quality.
              </p>
            </div>
            <div>
              <h3>Context overload</h3>
              <p>
                Too much loosely related material crowds the prompt. Retrieval
                should prioritize relevance, not volume.
              </p>
            </div>
          </div>
        </section>

        <section id="evaluation" aria-labelledby="evaluation-title">
          <p className={styles.sectionIndex}>05 / Buyer questions</p>
          <h2 id="evaluation-title">How to evaluate an AI memory system.</h2>
          <p>
            Ask for concrete behavior rather than a broad promise that the AI
            remembers. These questions expose the design quickly.
          </p>
          <ul className={styles.checklist}>
            <li>What information is retained, and what is deliberately excluded?</li>
            <li>Can I see the exact memory that affected an answer?</li>
            <li>Can I correct or delete one memory without erasing everything?</li>
            <li>How are people, customers, projects, and workspaces kept separate?</li>
            <li>Does the system distinguish user statements from its own inferences?</li>
            <li>Can I export useful context in a form I can use elsewhere?</li>
            <li>What happens when two memories disagree or a fact becomes stale?</li>
            <li>Which providers or services receive retrieved context?</li>
          </ul>
        </section>

        <section className={styles.productReality} id="remainframe" aria-labelledby="remainframe-title">
          <p className={styles.sectionIndex}>06 / RemainFrame today</p>
          <h2 id="remainframe-title">Continuity is the product direction. The proving ground is narrower.</h2>
          <p>
            RemainFrame is being built around durable working context and clear human control. Its current
            private runtime uses persistent memory, an approved conversation channel,
            model routing, scoped tools, and an isolated server environment. That foundation tests
            durable memory in real work rather than treating a transcript as the
            whole answer.
          </p>
          <p>
            Universal cross-tool integration is not shipped, and neither is a
            public self-service product. Those are important edges to keep visible
            when evaluating what RemainFrame can do today.
          </p>
        </section>
      </ArticlePage>
    </>
  );
}
