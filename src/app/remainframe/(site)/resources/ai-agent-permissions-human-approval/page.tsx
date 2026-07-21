import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import {
  StructuredData,
  createArticleStructuredData,
} from "../_components/structured-data";
import { resourceBySlug } from "../resource-data";
import styles from "../resources.module.css";
import { createArticleMetadata } from "../seo";

const resource = resourceBySlug["ai-agent-permissions-human-approval"];

export const metadata: Metadata = createArticleMetadata(resource);

const tableOfContents = [
  { id: "capability-permission", label: "Capability vs. permission" },
  { id: "risk-ladder", label: "A practical risk ladder" },
  { id: "approval", label: "Where approval belongs" },
  { id: "good-prompt", label: "A useful approval prompt" },
  { id: "controls", label: "Controls around approval" },
  { id: "remainframe", label: "RemainFrame today" },
] as const;

const quickAnswer = [
  "An AI agent permission is the authority to use a tool, reach a data source, or take an action within a defined scope.",
  "Human approval belongs immediately before a high-impact action. Spending, deletion, external messaging, and important record changes are not pre-authorized in the current service.",
  "Approval is only one safeguard. Least privilege, scoped credentials, logs, limits, revocation, and fail-closed behavior matter too.",
] as const;

export default function AiAgentPermissionsHumanApprovalPage() {
  return (
    <>
      <StructuredData data={createArticleStructuredData(resource)} />
      <ArticlePage
        resource={resource}
        tableOfContents={tableOfContents}
        quickAnswer={quickAnswer}
      >
        <p className={styles.articleLead}>
          An agent becomes more useful when it can do more than write a response.
          The same step also changes the safety problem. Once software can send,
          spend, publish, delete, or change records, good intentions are not a
          permission model.
        </p>

        <section id="capability-permission" aria-labelledby="capability-permission-title">
          <p className={styles.sectionIndex}>01 / The distinction</p>
          <h2 id="capability-permission-title">Capability says what is possible. Permission says what is allowed.</h2>
          <p>
            A tool integration may make it technically possible for an agent to
            read a calendar, draft an email, update a database, or run a command.
            Permission determines whether the agent may do that now, for this user,
            against this resource, under these conditions.
          </p>

          <div className={styles.definitionGrid}>
            <div>
              <span>01</span>
              <h3>Tool availability</h3>
              <p>The system knows a tool exists and how to call it.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Credential authority</h3>
              <p>
                The credential attached to that tool can reach a particular account,
                dataset, environment, or operation.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Policy permission</h3>
              <p>
                Rules decide which of those actions the agent can attempt, which
                require approval, and which remain unavailable.
              </p>
            </div>
          </div>

          <p>
            Strong systems align all three layers. A policy that says “read only”
            is weaker if the underlying credential can still delete records and no
            enforcement prevents the call.
          </p>
        </section>

        <section id="risk-ladder" aria-labelledby="risk-ladder-title">
          <p className={styles.sectionIndex}>02 / The action ladder</p>
          <h2 id="risk-ladder-title">Not every action needs the same friction.</h2>
          <p>
            Treating every tool call as equally dangerous creates either too many
            prompts or too little control. A practical model considers reversibility,
            audience, financial impact, sensitivity, and how clearly the user asked.
          </p>

          <div className={styles.tableWrap} role="region" aria-label="AI agent actions and controls" tabIndex={0}>
            <table className={styles.comparisonTable}>
              <caption>Example AI agent actions and proportionate controls</caption>
              <thead>
                <tr>
                  <th scope="col">Action class</th>
                  <th scope="col">Examples</th>
                  <th scope="col">Typical control</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Observe</th>
                  <td>Read an approved folder, query a calendar, check status.</td>
                  <td>Scoped read access, data boundaries, and logging.</td>
                </tr>
                <tr>
                  <th scope="row">Prepare</th>
                  <td>Draft a reply, assemble a report, propose a database change.</td>
                  <td>Allow drafting; keep the result uncommitted for review.</td>
                </tr>
                <tr>
                  <th scope="row">Act reversibly</th>
                  <td>Create a draft task, add a label, save a new version.</td>
                  <td>Narrow standing permission with limits and an undo path.</td>
                </tr>
                <tr>
                  <th scope="row">Act externally</th>
                  <td>Send a message, publish content, invite a person.</td>
                  <td>Approval at the commit point. The current service does not pre-authorize external messaging or publication.</td>
                </tr>
                <tr>
                  <th scope="row">Take a high-impact outside action</th>
                  <td>Spend money, delete data, change access, deploy to production.</td>
                  <td>Specific approval, strong identity, limits, and recorded evidence.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            These are design patterns, not universal rules. A label change in one
            system may trigger a public workflow in another. Controls have to match
            the real consequence, not the friendly name of the API method.
          </p>
        </section>

        <section id="approval" aria-labelledby="approval-title">
          <p className={styles.sectionIndex}>03 / Human approval</p>
          <h2 id="approval-title">Put approval at the point of consequence.</h2>
          <p>
            Approval works best after the agent has prepared enough detail to make
            the decision concrete, but before the outside world changes. Asking too
            early forces the person to approve an abstraction. Asking after the
            action turns approval into a notification.
          </p>

          <ol className={styles.processList}>
            <li>
              <span>01</span>
              <div>
                <h3>Plan</h3>
                <p>
                  The agent identifies the intended action, required tool, target,
                  and expected result without committing a change.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Prepare</h3>
                <p>
                  It creates the exact draft, command, transaction, or change set
                  the user will review.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Explain</h3>
                <p>
                  The system states what will happen, where, with which identity,
                  and whether the result can be undone.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Approve or revise</h3>
                <p>
                  The person can approve this action, reject it, or change the
                  target and scope without granting a broader standing permission.
                </p>
              </div>
            </li>
            <li>
              <span>05</span>
              <div>
                <h3>Execute and record</h3>
                <p>
                  The system performs the authorized operation, verifies the result,
                  and records what actually happened.
                </p>
              </div>
            </li>
          </ol>

          <aside className={styles.callout}>
            <p>Approval boundary</p>
            <strong>
              Approving one prepared action should not silently approve every
              similar action in the future.
            </strong>
          </aside>
        </section>

        <section id="good-prompt" aria-labelledby="good-prompt-title">
          <p className={styles.sectionIndex}>04 / The approval prompt</p>
          <h2 id="good-prompt-title">A useful prompt names the action, target, impact, and escape hatch.</h2>
          <p>
            “Allow?” is not enough. The person needs enough detail to judge the
            exact consequence without reconstructing the agent&apos;s reasoning.
          </p>

          <div className={styles.approvalExample}>
            <div className={styles.approvalExampleTopline}>
              <span>Approval requested</span>
              <span>External action</span>
            </div>
            <h3>Send the prepared follow-up to Jordan Lee?</h3>
            <dl>
              <div>
                <dt>From</dt>
                <dd>studio@yourbusiness.com</dd>
              </div>
              <div>
                <dt>Audience</dt>
                <dd>1 external recipient</dd>
              </div>
              <div>
                <dt>Content</dt>
                <dd>Uses the reviewed draft and attaches estimate-v3.pdf</dd>
              </div>
              <div>
                <dt>Reversibility</dt>
                <dd>The message cannot be recalled after delivery</dd>
              </div>
            </dl>
            <p>
              A real interface would offer clear actions to review the draft,
              revise it, approve this send, or cancel. It should not hide a broader
              permission grant inside the same button.
            </p>
          </div>
        </section>

        <section id="controls" aria-labelledby="controls-title">
          <p className={styles.sectionIndex}>05 / The surrounding controls</p>
          <h2 id="controls-title">Approval cannot carry the whole safety model.</h2>
          <p>
            People click through prompts when they appear too often or say too
            little. Reduce that burden with controls that operate before and after
            the approval moment.
          </p>

          <div className={styles.questionGrid}>
            <div>
              <h3>Least privilege</h3>
              <p>
                Give the agent the smallest credential and operation set needed for
                the defined job. Separate read, draft, and commit access where tools
                allow it.
              </p>
            </div>
            <div>
              <h3>Explicit limits</h3>
              <p>
                Bound amount, audience, frequency, environment, and time. “Up to
                $50 this week” is more governable than “may spend.”
              </p>
            </div>
            <div>
              <h3>Fail-closed behavior</h3>
              <p>
                If identity, policy, approval state, or target scope is missing or
                ambiguous, the high-impact action should not proceed.
              </p>
            </div>
            <div>
              <h3>Evidence and verification</h3>
              <p>
                Record the request, approval, tool call, and result. Verify the
                external state instead of treating a successful API response as the
                whole outcome.
              </p>
            </div>
            <div>
              <h3>Revocation</h3>
              <p>
                Make it possible to remove a credential, disable a tool, end a
                standing grant, or stop scheduled work without rebuilding the agent.
              </p>
            </div>
            <div>
              <h3>Periodic review</h3>
              <p>
                Permissions that were sensible for one project or season should not
                remain invisible forever. Review active grants and unused access.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.productReality} id="remainframe" aria-labelledby="remainframe-title">
          <p className={styles.sectionIndex}>06 / RemainFrame today</p>
          <h2 id="remainframe-title">Control is part of the product definition. The universal permission surface is not shipped.</h2>
          <p>
            RemainFrame is being built around durable working context and clear human control. Its current
            private runtime connects an approved conversation channel to memory,
            model routing, scoped tools, and an isolated server environment. That setup makes
            tool access, model routing, and approval boundaries practical design
            concerns today.
          </p>
          <p>
            It does not prove a finished permission layer across every AI service,
            and there is no public self-service control surface today. RemainFrame
            makes no compliance or certification claim. Broader integration has to
            preserve scoped authority and human control rather than assume that a
            connected tool should always be available.
          </p>
        </section>
      </ArticlePage>
    </>
  );
}
