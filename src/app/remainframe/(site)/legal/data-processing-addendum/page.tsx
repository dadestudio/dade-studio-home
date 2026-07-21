import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../../_lib/metadata";
import {
  LegalCallout,
  LegalDocument,
  LegalSection,
  TableScroll,
} from "../legal-components";

export const metadata: Metadata = pageMetadata({
  title: "Data processing addendum",
  description:
    "Public U.S.-only data processing addendum template for RemainFrame customer personal data, effective only when expressly incorporated.",
  path: "/remainframe/legal/data-processing-addendum",
  type: "article",
});

const toc = [
  { id: "effect", label: "Effect and parties" },
  { id: "definitions", label: "Definitions" },
  { id: "roles", label: "Roles and compliance" },
  { id: "instructions", label: "Instructions and purpose limits" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "security", label: "Security measures" },
  { id: "subprocessors", label: "Subprocessors and recipients" },
  { id: "rights", label: "Data-subject requests" },
  { id: "assistance", label: "Compliance assistance" },
  { id: "incidents", label: "Security incidents" },
  { id: "return", label: "Return and deletion" },
  { id: "audit", label: "Audit information" },
  { id: "demands", label: "Legal demands" },
  { id: "location", label: "U.S.-only processing" },
  { id: "general", label: "Priority and general terms" },
  { id: "schedule-processing", label: "Schedule 1: Processing details" },
  { id: "schedule-security", label: "Schedule 2: Security controls" },
] as const;

export default function DataProcessingAddendumPage() {
  return (
    <LegalDocument
      title="Data processing addendum"
      summary="This public DPA is a U.S.-only template for Customer Personal Data. It has no effect unless a signed Order Form or valid fixed-version clickwrap expressly incorporates it."
      toc={toc}
    >
      <LegalSection id="effect" title="1. Effect, parties, and scope">
        <p>
          This Data Processing Addendum, or <strong>DPA</strong>, supplements the
          Agreement between the Customer and the Provider identified in an executed Order
          Form for the RemainFrame Service. It governs Provider&apos;s processing of
          Customer Personal Data.
        </p>
        <p>
          This DPA becomes binding only when the same signed Order Form or valid
          clickwrap that activates the Service expressly incorporates the July 20, 2026
          version of this DPA by title and URL. Publication, browsing, an inquiry, a demo,
          or a footer link does not incorporate it. The Order Form must state
          Provider&apos;s exact legal name and notice address.
        </p>
        <p>
          Capitalized terms not defined here have the meaning in the{" "}
          <Link href="/remainframe/legal/service-terms">Service Terms</Link>. If no
          Customer Personal Data is processed, the operational provisions of this DPA do
          not create a processing activity.
        </p>
        <LegalCallout title="Template and launch gate.">
          <p>
            No customer has been activated. The parties must complete the processing
            details, subprocessor record, U.S. location check, retention plan, and
            security activation record before Customer Personal Data enters the Service.
            This DPA does not represent a certification or completed independent audit.
          </p>
        </LegalCallout>
      </LegalSection>

      <LegalSection id="definitions" title="2. Definitions">
        <p>For this DPA:</p>
        <ul>
          <li>
            <strong>Applicable Data Protection Law</strong> means a U.S. federal or state
            privacy, security, or breach-notification law that applies to a party&apos;s
            processing of Customer Personal Data under the Agreement.
          </li>
          <li>
            <strong>Customer Personal Data</strong> means personal data, personal
            information, or a similar category protected by Applicable Data Protection
            Law that Provider processes on Customer&apos;s behalf through the Service.
            It does not include Provider&apos;s independent business records described
            in the Privacy Notice.
          </li>
          <li>
            <strong>Data Subject</strong> means an identified or identifiable person to
            whom Customer Personal Data relates.
          </li>
          <li>
            <strong>process</strong>, <strong>processor</strong>,{" "}
            <strong>controller</strong>, <strong>business</strong>, and{" "}
            <strong>service provider</strong> have the meanings given by the Applicable
            Data Protection Law.
          </li>
          <li>
            <strong>Security Incident</strong> means a confirmed breach of security
            leading to accidental or unlawful destruction, loss, alteration, unauthorized
            disclosure of, or access to Customer Personal Data in Provider&apos;s custody
            or control. It excludes unsuccessful attempts that do not compromise
            Customer Personal Data, such as blocked scans, pings, or login attempts.
          </li>
          <li>
            <strong>Subprocessor</strong> means a third party Provider engages to process
            Customer Personal Data on Provider&apos;s behalf.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="roles" title="3. Roles and legal compliance">
        <p>
          Customer is the controller or business for Customer Personal Data and Provider
          is its processor or service provider. If Customer processes personal data for
          another controller, Customer appoints Provider as a subprocessor and represents
          that the controller has authorized the appointment and instructions.
        </p>
        <p>
          Customer is responsible for the lawfulness, fairness, accuracy, and
          transparency of Customer&apos;s collection and instructions, including all
          required notices, consents, contracts, and rights to connected sources.
          Customer will not submit prohibited sensitive or regulated data and will use
          the Service only for the U.S. business scope allowed by the Agreement.
        </p>
        <p>
          Provider will comply with Applicable Data Protection Law governing its
          performance as processor or service provider. Provider will not sell Customer
          Personal Data, share it for cross-context behavioral advertising, use it for
          targeted advertising, or combine it with personal data received from another
          customer except as permitted for a service provider under Applicable Data
          Protection Law.
        </p>
        <p>
          Each party remains independently responsible for personal data it processes as
          a controller for its own account, security, contracting, billing, fraud,
          business operations, tax, and legal obligations.
        </p>
      </LegalSection>

      <LegalSection id="instructions" title="4. Documented instructions and purpose limits">
        <p>
          Provider will process Customer Personal Data only:
        </p>
        <ol>
          <li>to provide, secure, support, and maintain the Service;</li>
          <li>
            according to the Agreement, Schedule 1, approved configuration, and
            Customer&apos;s documented use and support instructions;
          </li>
          <li>to prevent material harm or investigate misuse of the Service; and</li>
          <li>
            when required by U.S. law, after notice to Customer unless notice is legally
            prohibited.
          </li>
        </ol>
        <p>
          Provider will not use Customer Personal Data for its own advertising or to
          train a general-purpose model for other customers without Customer&apos;s
          separate written agreement. Provider may generate and use operational
          statistics that do not identify Customer, an Authorized User, or a Data Subject
          and cannot reasonably be linked back to Customer Personal Data.
        </p>
        <p>
          If Provider reasonably believes an instruction violates Applicable Data
          Protection Law or the Agreement, it will inform Customer unless prohibited by
          law and may pause the affected processing while the parties resolve the issue.
          Customer is responsible for changing an unlawful instruction.
        </p>
      </LegalSection>

      <LegalSection id="confidentiality" title="5. Personnel and confidentiality">
        <p>
          Provider will limit Customer Personal Data access to personnel and contractors
          who need it to perform, support, secure, or comply with the Service. Those
          people must be subject to written or professional confidentiality duties and
          receive instruction appropriate to their role.
        </p>
        <p>
          Support access will follow the Service Terms. When practical, Provider will
          obtain Customer&apos;s authorization before content-level support access and
          will limit the access to the data and time reasonably needed. The Agreement&apos;s
          mutual confidentiality provisions also apply to Customer Personal Data.
        </p>
      </LegalSection>

      <LegalSection id="security" title="6. Security measures">
        <p>
          Taking into account the nature, scope, context, and purpose of processing,
          available technology, implementation cost, and risk to Data Subjects, Provider
          will maintain reasonable administrative, technical, and organizational
          measures designed to protect Customer Personal Data.
        </p>
        <p>
          The minimum measures are in Schedule 2. Because the Service is a
          configuration-specific private pilot, Provider must verify those controls and
          record exceptions before activation. Customer acknowledges that no system is
          completely secure and that Customer controls material parts of the risk,
          including its users, provider keys, model and tool selections, source data,
          endpoint settings, and approval workflows.
        </p>
        <p>
          Provider may update a measure to reflect technical change if the replacement
          does not materially reduce the overall protection of Customer Personal Data.
          A material customer-specific exception requires written approval in the Order
          Form or activation record.
        </p>
      </LegalSection>

      <LegalSection id="subprocessors" title="7. Subprocessors and customer-directed recipients">
        <p>
          Customer gives Provider general authorization to use the Subprocessors
          identified in the incorporated{" "}
          <Link href="/remainframe/legal/subprocessors">
            Subprocessor and Service Recipient Notice
          </Link>{" "}
          and customer-specific activation record. Provider will impose written
          data-protection obligations appropriate to each Subprocessor&apos;s processing
          and remains responsible for its Subprocessors&apos; performance to the extent
          required by Applicable Data Protection Law.
        </p>
        <p>
          Provider will notify Customer before a new Subprocessor begins processing
          Customer Personal Data when reasonably practicable, or within the period in the
          Order Form. Customer may object before the effective date on reasonable,
          documented data-protection grounds. The parties will try a commercially
          reasonable alternative. If none is available, either party may terminate the
          affected processing or Order Form without penalty other than fees accrued
          before termination.
        </p>
        <p>
          Signal, OpenRouter, model endpoints, MCP servers, and connected tools that
          Customer selects may be customer-directed recipients rather than
          Provider&apos;s Subprocessors. Customer authorizes disclosure of the data
          reasonably needed for their approved role and is responsible for its direct
          provider terms and settings. Provider will still record the connection and
          apply any responsibilities imposed on Provider by Applicable Data Protection
          Law.
        </p>
        <p>
          The private RemainFrame runtime, self-hosted Honcho, and self-hosted Langfuse,
          when present, are internal software components and not separate outside
          recipients. A future hosted version must be reviewed and listed before use.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="8. Data-subject requests">
        <p>
          Provider will promptly forward to Customer a verified request from a Data
          Subject that clearly relates to Customer Personal Data, unless Provider is
          legally prohibited or authorized to respond directly. Provider will not
          independently respond except on Customer&apos;s documented instruction or as
          required by law.
        </p>
        <p>
          Taking into account the nature of processing and available functionality,
          Provider will provide reasonable assistance for Customer to access, correct,
          delete, or export relevant Customer Personal Data and otherwise respond to
          applicable rights. Customer remains responsible for identity verification,
          legal analysis, communications, and response deadlines.
        </p>
        <p>
          The current Service does not have service-wide selective rights tooling. A
          request may require manual retrieval, deletion of a broader record, or waiting
          for backup rotation. Provider will explain material technical limits and will
          not represent that a selective action succeeded without reasonable
          verification. Assistance beyond included support may be charged at the rate in
          the Order Form if Provider gives advance notice.
        </p>
      </LegalSection>

      <LegalSection id="assistance" title="9. Compliance assistance">
        <p>
          Provider will provide information reasonably available about its processing
          and security measures to help Customer:
        </p>
        <ul>
          <li>maintain required processing records and privacy notices;</li>
          <li>
            complete a data-protection or risk assessment for the configured Service;
          </li>
          <li>consult a U.S. regulator when legally required;</li>
          <li>respond to a regulator&apos;s lawful inquiry; and</li>
          <li>meet security and breach-notification duties applicable to the processing.</li>
        </ul>
        <p>
          Customer must provide the context and decisions within its control. Provider
          is not responsible for Customer&apos;s compliance program or for legal advice.
          Material work beyond ordinary documentation and included support may require a
          scoped statement of work or reasonable reimbursement of cost.
        </p>
      </LegalSection>

      <LegalSection id="incidents" title="10. Security incidents">
        <p>
          Provider will notify Customer without undue delay after becoming aware of a
          confirmed Security Incident involving Customer Personal Data, unless U.S. law
          prohibits notice. Provider may provide information in phases as it becomes
          reasonably available.
        </p>
        <p>Notice will include, to the extent known:</p>
        <ul>
          <li>the nature and approximate timing of the incident;</li>
          <li>the categories of data and Data Subjects reasonably believed affected;</li>
          <li>likely consequences known at that time;</li>
          <li>containment, remediation, and recovery steps taken or planned; and</li>
          <li>a contact for coordinated response.</li>
        </ul>
        <p>
          Provider will take reasonable steps to contain, investigate, and remediate the
          Security Incident and preserve appropriate evidence. Customer is responsible
          for deciding whether and how to notify Data Subjects, regulators, or others,
          with Provider providing reasonable information and cooperation. Notice or
          cooperation is not an admission of fault.
        </p>
      </LegalSection>

      <LegalSection id="return" title="11. Return, deletion, and retention">
        <p>
          During the term, Provider will make the configuration-specific export or
          handoff described in the Order Form available. The current Service does not
          promise a fully verified self-service export. Customer must preserve source
          records and request available data before termination.
        </p>
        <p>
          At Customer&apos;s documented instruction or after the Service ends, Provider
          will return or delete Customer Personal Data within the period stated in the
          Order Form, unless U.S. law requires retention. If the Order Form states no
          period, Provider will document and carry out a commercially reasonable process
          based on the configured systems, available tooling, and verified backup
          behavior rather than promise an unverified deletion deadline.
        </p>
        <p>
          Provider may retain contract, billing, fraud, security, dispute, and legal-hold
          records as a controller where reasonably necessary. Infrastructure snapshots
          and backups may retain residual Customer Personal Data until normal rotation.
          While retained, that data remains protected by this DPA, is isolated from
          ordinary use, and is restored only when reasonably necessary for continuity,
          recovery, security, or legal obligations.
        </p>
        <p>
          On written request after completion, Provider will confirm the return or
          deletion steps it can reasonably verify, including known backup limitations.
        </p>
      </LegalSection>

      <LegalSection id="audit" title="12. Information and audit">
        <p>
          Provider will make information reasonably necessary to demonstrate compliance
          with this DPA available to Customer. The ordinary sequence is:
        </p>
        <ol>
          <li>this DPA, the security schedule, and the current Subprocessor notice;</li>
          <li>the customer-specific activation and configuration record;</li>
          <li>a reasonable written security or privacy questionnaire; and</li>
          <li>
            additional records or a remote review if the earlier material does not
            reasonably address a documented concern.
          </li>
        </ol>
        <p>
          Provider does not currently claim an independent security certification or
          third-party audit report. Customer may request one audit in a 12-month period,
          and additional review after a Security Incident or where a regulator or law
          reasonably requires it. An on-site audit requires reasonable advance notice,
          must occur during normal business hours, may not expose another customer&apos;s
          information or Provider secrets, and must use an independent auditor bound by
          confidentiality.
        </p>
        <p>
          Customer bears audit costs unless the audit identifies a material breach by
          Provider, in which case Provider will bear its reasonable internal remediation
          costs and reimburse reasonable audit costs as agreed or required by law. Audit
          rights do not require Provider to create a certification it does not have or
          disclose information that would weaken security.
        </p>
      </LegalSection>

      <LegalSection id="demands" title="13. Government and legal demands">
        <p>
          If Provider receives a subpoena, warrant, court order, or other legally binding
          demand for Customer Personal Data, Provider will:
        </p>
        <ul>
          <li>review the demand for facial validity and scope;</li>
          <li>
            notify Customer before disclosure when legally permitted and reasonably
            practicable;
          </li>
          <li>direct the requester to Customer when appropriate;</li>
          <li>
            seek clarification, narrowing, or protection when there are reasonable
            grounds and the effort is proportionate; and
          </li>
          <li>disclose only the Customer Personal Data legally required.</li>
        </ul>
        <p>
          Provider may preserve information in response to a valid legal hold. Customer
          is responsible for demands it receives directly and for the lawfulness of its
          own disclosures.
        </p>
      </LegalSection>

      <LegalSection id="location" title="14. U.S.-only processing and no SCC by default">
        <p>
          The initial Service is offered only for U.S. business use and Customer Personal
          Data must be processed in the United States under the approved configuration.
          Before activation, the parties must verify the selected infrastructure region
          and the available location settings for OpenRouter, model endpoints, Signal,
          and connected tools.
        </p>
        <p>
          Provider must not sign an Order Form or activate Customer Personal Data
          processing on the U.S.-only form of this DPA unless every configured recipient
          can substantiate the required U.S. processing scope. A provider that cannot do
          so must be removed from the configuration, or the parties must complete a
          separate location and transfer review and amend this DPA before use.
        </p>
        <p>
          Customer may not direct the Service to a non-U.S. endpoint or use it from
          outside the authorized U.S. scope. Provider will not add non-U.S. processing
          for Customer Personal Data without advance written agreement and a documented
          legal review.
        </p>
        <p>
          The European Commission Standard Contractual Clauses, UK International Data
          Transfer Addendum, and other cross-border transfer terms are not incorporated
          by default. If a future configuration requires them or another transfer
          mechanism, the parties must execute the appropriate addendum and complete the
          transfer assessment before that processing begins.
        </p>
      </LegalSection>

      <LegalSection id="general" title="15. Priority, liability, and general terms">
        <p>
          If this DPA conflicts with the Agreement about Customer Personal Data, this DPA
          controls. The Order Form controls only if it expressly identifies the DPA
          provision being changed and the change is permitted by Applicable Data
          Protection Law.
        </p>
        <p>
          The Agreement&apos;s liability limits, governing law, Archuleta County venue,
          jury waiver, notice requirements, and other general terms apply to this DPA.
          This DPA does not add mandatory arbitration or a class-action waiver.
        </p>
        <p>
          Changes to this public page do not amend an incorporated fixed version during
          an active term. An amendment must follow the Agreement&apos;s execution
          mechanism. If a provision is unenforceable, it will be adjusted only as needed
          to make it enforceable and the rest will remain effective.
        </p>
      </LegalSection>

      <LegalSection id="schedule-processing" title="Schedule 1. Processing details">
        <TableScroll label="Data processing details">
          <table>
            <caption>Data processing details</caption>
            <tbody>
              <tr>
                <th>Subject matter</th>
                <td>
                  Providing the configuration-specific RemainFrame private business
                  pilot described in the Order Form.
                </td>
              </tr>
              <tr>
                <th>Duration</th>
                <td>
                  The Order Form term plus the limited return, deletion, backup rotation,
                  security, and legal-retention periods described in the Agreement.
                </td>
              </tr>
              <tr>
                <th>Nature and purpose</th>
                <td>
                  Receiving customer instructions through Signal or an approved channel;
                  retrieving authorized context; maintaining agent memory; routing
                  relevant prompts and context to selected model endpoints; returning
                  Output; executing approved tool calls; and supporting, securing,
                  logging, and troubleshooting those activities.
                </td>
              </tr>
              <tr>
                <th>Data Subjects</th>
                <td>
                  Customer&apos;s Authorized Users, business contacts, and other adults
                  whose ordinary business information Customer lawfully includes in
                  Customer Content. No minors.
                </td>
              </tr>
              <tr>
                <th>Personal-data categories</th>
                <td>
                  Business contact details, role and organization, account and access
                  metadata, business communications, prompts, approved documents and
                  context, agent memory, Output, tool inputs and results, support
                  communications, and operational or security events.
                </td>
              </tr>
              <tr>
                <th>Prohibited data</th>
                <td>
                  Health or medical data; biometric or neural data; precise location;
                  government IDs or Social Security numbers; card, payment, bank, or
                  account credentials; data about minors; and other sensitive or
                  regulated data. BYOK
                  credentials may be supplied only through the approved secret setup
                  path.
                </td>
              </tr>
              <tr>
                <th>Frequency</th>
                <td>
                  Intermittent or continuous during authorized Service use, depending on
                  the channel, memory, model, and tool configuration in the Order Form.
                </td>
              </tr>
              <tr>
                <th>Return and deletion</th>
                <td>
                  As specified in the Order Form and Section 11, including the documented
                  limits of selective tooling, provider snapshots, and backup rotation.
                </td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
      </LegalSection>

      <LegalSection id="schedule-security" title="Schedule 2. Security activation controls">
        <p>
          These are the minimum contractual launch controls for a customer-specific
          deployment. They are not a claim of certification, perfect security, or a
          completed independent audit. Provider must verify their applicable
          implementation and record any approved exception before Customer Personal Data
          enters the Service.
        </p>
        <h3>Access and personnel</h3>
        <ul>
          <li>
            Identify administrative users and support personnel, use unique access where
            supported, apply least privilege, and remove access promptly when no longer
            needed.
          </li>
          <li>
            Require strong authentication and multi-factor authentication for
            administrative provider accounts where the provider supports it.
          </li>
          <li>
            Bind personnel with access to confidentiality duties and limit content-level
            support access to an authorized need.
          </li>
        </ul>
        <h3>Secrets and customer connections</h3>
        <ul>
          <li>
            Receive BYOK credentials only through the approved setup path. Do not ask
            Customer to place credentials in prompts, ordinary support email, public
            forms, or documentation.
          </li>
          <li>
            Limit credential access to the runtime and personnel that need it, and do not
            intentionally write credential values to application logs.
          </li>
          <li>
            Record and review each model endpoint, Signal account, MCP server, and tool,
            including permissions, data sent, location settings, and Customer owner.
          </li>
        </ul>
        <h3>Environment and data separation</h3>
        <ul>
          <li>
            Review the VPS, exposed network services, administrative paths, and transport
            protections before activation. Use encrypted transport for public and
            provider connections where the endpoint supports it.
          </li>
          <li>
            Apply deployment-specific logical controls intended to prevent unauthorized
            access across customers, environments, tools, and support contexts.
          </li>
          <li>
            Keep self-hosted memory and observability components within the approved
            environment and do not switch to hosted versions without the Subprocessor
            process.
          </li>
        </ul>
        <h3>Operations, recovery, and change</h3>
        <ul>
          <li>
            Maintain security and operational events reasonably needed to investigate
            access, failures, configuration changes, and incidents, while avoiding
            unnecessary Customer Content in logs.
          </li>
          <li>
            Document the applicable snapshot or backup scope, access, retention and
            rotation behavior, and complete a configuration-appropriate restore check
            before relying on backups for customer continuity.
          </li>
          <li>
            Apply reasonable security updates, dependency review, and change validation
            for supported Service components based on severity and operational risk.
          </li>
          <li>
            Maintain an incident contact and a practical process to contain, investigate,
            recover from, document, and notify Customer of a Security Incident.
          </li>
        </ul>
        <h3>Action safety</h3>
        <ul>
          <li>
            Do not enable autonomous spending, deletion, external messaging, or important
            record changes without a tested human approval path for the specific action.
          </li>
          <li>
            Record material permissions and approval decisions appropriate to the
            configured tool risk.
          </li>
        </ul>
      </LegalSection>
    </LegalDocument>
  );
}
