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
  title: "Privacy notice",
  description:
    "How RemainFrame handles information on its public website and in its private U.S. business pilot.",
  path: "/remainframe/legal/privacy",
  type: "article",
});

const toc = [
  { id: "scope", label: "Scope and roles" },
  { id: "collect", label: "Information we process" },
  { id: "exclude", label: "Data the pilot does not accept" },
  { id: "use", label: "How we use information" },
  { id: "recipients", label: "Recipients and disclosures" },
  { id: "retention", label: "Retention" },
  { id: "choices", label: "Your choices and rights" },
  { id: "security", label: "Security" },
  { id: "location", label: "U.S. scope and age limit" },
  { id: "updates", label: "Updates and contact" },
] as const;

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy notice"
      summary="This notice explains what the RemainFrame public site and private business pilot process, why the information is needed, where it goes, and what choices are available."
      toc={toc}
    >
      <LegalSection id="scope" title="1. Scope and roles">
        <p>
          This notice applies to the public RemainFrame pages at dade.studio, direct
          inquiries about RemainFrame, and the RemainFrame service when activated under
          a customer agreement. It does not replace the privacy terms of Signal, a
          model provider, or another service that a customer chooses to connect.
        </p>
        <p>
          For public-site inquiries, contracting, billing, account administration,
          product security, and our own business records, Dade.Studio generally decides
          why and how information is used and acts as a controller or business.
        </p>
        <p>
          For personal data submitted to the service by or for a customer, the customer
          generally decides the purpose and means of processing. Dade.Studio then acts
          as the customer&apos;s processor or service provider under the customer
          agreement and any incorporated data processing addendum. If a customer is
          itself a processor, Dade.Studio may act as its subprocessor. The signed Order
          Form and DPA control if a particular relationship differs.
        </p>
        <LegalCallout title="Current launch status.">
          <p>
            No customer has been activated yet. The current system is a private proving
            ground, not a generally available or self-service product.
          </p>
        </LegalCallout>
      </LegalSection>

      <LegalSection id="collect" title="2. Information we process">
        <h3>Public site and inquiries</h3>
        <ul>
          <li>
            <strong>Information you choose to send.</strong> Your name, business contact
            details, organization, role, and the contents of an email or other inquiry.
            The current lead form opens a pre-addressed email to hello@dade.studio. It
            does not submit to a RemainFrame backend or lead database.
          </li>
          <li>
            <strong>Ordinary request information.</strong> Vercel, which hosts the site,
            may process IP address, request time, requested URL, browser or device
            information, response status, and similar server or security log data.
          </li>
          <li>
            <strong>Theme preference.</strong> The site uses local browser storage to
            remember a light, dark, or system theme selection. See the{" "}
            <Link href="/remainframe/legal/cookies">Cookies and storage notice</Link>.
          </li>
        </ul>
        <p>
          The public site currently uses no analytics, advertising pixels, session
          replay, marketing cookies, or other nonessential cookies.
        </p>

        <h3>Service and business operations</h3>
        <ul>
          <li>
            <strong>Customer and authorized-user records.</strong> Business contact
            details, role, organization, permissions, service configuration, support
            communications, and authentication or access metadata.
          </li>
          <li>
            <strong>Customer Content.</strong> Prompts, Signal messages sent to the
            agent, instructions, retrieved context, documents or tool inputs, model
            outputs, agent memory, tool results, and related metadata that the customer
            directs the service to process.
          </li>
          <li>
            <strong>Connection information.</strong> Customer-selected providers,
            endpoints, MCP servers or tools, account settings, and customer-provided
            credentials when needed to make an authorized connection. Customers use
            their own provider keys in the current pilot.
          </li>
          <li>
            <strong>Operational records.</strong> Runtime events, error details, request
            metadata, security logs, approval records, configuration changes, and
            support diagnostics reasonably needed to operate and protect the service.
          </li>
          <li>
            <strong>Commercial records.</strong> Order Forms, invoices, payment status,
            tax and accounting records, and related correspondence. RemainFrame does not
            currently take card details on the public site.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="exclude" title="3. Data the pilot does not accept">
        <p>
          The pilot is not designed for sensitive or regulated workloads. Customers and
          users must not submit or connect sources containing:
        </p>
        <ul>
          <li>health, medical, diagnosis, treatment, or insurance information;</li>
          <li>biometric identifiers, biometric templates, or neural data;</li>
          <li>precise geolocation or continuous location histories;</li>
          <li>
            Social Security numbers, government identification numbers, or images of
            government IDs;
          </li>
          <li>card numbers, bank credentials, or payment authentication data;</li>
          <li>
            passwords, session tokens, private keys, recovery codes, or credentials for
            an account, except a provider credential supplied through an approved secret
            setup path solely to enable an authorized connection; or
          </li>
          <li>other data subject to a specialized legal or contractual regime.</li>
        </ul>
        <p>
          Do not send any of this information to hello@dade.studio. If prohibited data
          is submitted, we may restrict access, ask the customer to remove it, or delete
          it where reasonably possible.
        </p>
      </LegalSection>

      <LegalSection id="use" title="4. How we use information">
        <p>We process information as reasonably necessary to:</p>
        <ul>
          <li>respond to inquiries and evaluate pilot applications;</li>
          <li>provide, configure, support, secure, and troubleshoot the service;</li>
          <li>
            carry out customer instructions, including sending relevant prompts and
            context to customer-selected model endpoints and connected tools;
          </li>
          <li>maintain authorized agent memory and continuity for the customer;</li>
          <li>
            administer accounts, permissions, contracts, invoices, taxes, renewals, and
            service communications;
          </li>
          <li>
            detect abuse, investigate incidents, enforce agreements, and protect users,
            systems, and the public;
          </li>
          <li>comply with law and establish, exercise, or defend legal claims; and</li>
          <li>
            improve reliability and product design using operational observations and
            feedback, subject to the customer agreement and confidentiality duties.
          </li>
        </ul>
        <p>
          We do not sell personal data, share it for cross-context behavioral
          advertising, or process it for targeted advertising. The public site has no
          ad-tech or behavioral profiling system.
        </p>
      </LegalSection>

      <LegalSection id="recipients" title="5. Recipients and disclosures">
        <p>
          Information is disclosed only as needed for the recipient&apos;s role, at the
          customer&apos;s direction, or for the business and legal purposes below.
        </p>
        <TableScroll label="Personal information recipients and disclosures">
          <table>
            <caption>Personal information recipients and disclosures</caption>
            <thead>
              <tr>
                <th>Recipient or category</th>
                <th>What it does</th>
                <th>Information involved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vercel</td>
                <td>Hosts and delivers the public site.</td>
                <td>Ordinary web requests and server or security logs.</td>
              </tr>
              <tr>
                <td>Hostinger</td>
                <td>Provides VPS infrastructure for the private proving ground.</td>
                <td>Customer Content and operational data stored or processed there.</td>
              </tr>
              <tr>
                <td>Signal</td>
                <td>Provides the customer-selected messaging channel.</td>
                <td>Messages and metadata necessary to send and receive them.</td>
              </tr>
              <tr>
                <td>OpenRouter and customer-selected model endpoints</td>
                <td>Route and generate responses using the models a customer selects.</td>
                <td>Relevant prompts, instructions, context, and output metadata.</td>
              </tr>
              <tr>
                <td>Customer-connected MCP servers and tools</td>
                <td>Perform the task or retrieval that the customer authorizes.</td>
                <td>Only the data reasonably needed for the selected tool action.</td>
              </tr>
              <tr>
                <td>Professional advisers and authorities</td>
                <td>
                  Support accounting, legal, security, insurance, or lawful compliance
                  needs.
                </td>
                <td>Information reasonably necessary for that purpose.</td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
        <p>
          Self-hosted Honcho memory and self-hosted Langfuse observability, when present
          in the configured deployment, are software components running within the
          service environment. They are not separate outside recipients merely because
          their software is used. See the{" "}
          <Link href="/remainframe/legal/subprocessors">Subprocessor notice</Link> for
          role details and change information.
        </p>
        <p>
          We may also disclose information in a business reorganization, financing, or
          sale, subject to confidentiality and applicable law, or when reasonably
          necessary to comply with law, protect rights and safety, or respond to valid
          legal process.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="6. Retention">
        <p>
          We retain information only for legitimate operational, contractual, security,
          and legal needs. Actual periods can vary with the customer configuration,
          unresolved disputes, legal holds, and provider backup behavior.
        </p>
        <TableScroll label="Personal information retention periods">
          <table>
            <caption>Personal information retention periods</caption>
            <thead>
              <tr>
                <th>Record</th>
                <th>Working retention approach</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Public inquiries and pilot applications</td>
                <td>
                  Normally up to 24 months after the last meaningful interaction, unless
                  needed for an ongoing relationship, suppression request, dispute, or
                  legal record.
                </td>
              </tr>
              <tr>
                <td>Contract, billing, and tax records</td>
                <td>
                  Normally seven years, or longer if required for a dispute, audit, or
                  legal obligation.
                </td>
              </tr>
              <tr>
                <td>Service runtime data and Customer Content</td>
                <td>
                  As stated in the Order Form and configured service. Current provider
                  snapshots and backups may retain copies until their normal rotation.
                </td>
              </tr>
              <tr>
                <td>Security and operational logs</td>
                <td>
                  For the period reasonably needed to secure, troubleshoot, and audit
                  the service and meet contractual or legal requirements.
                </td>
              </tr>
              <tr>
                <td>Theme preference</td>
                <td>On the user&apos;s device until it is changed or browser storage is cleared.</td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
        <p>
          The service does not yet provide a fully verified self-service export or
          service-wide selective deletion tool. A deletion request may require manual
          work, deletion of a broader record, waiting for backup rotation, or retention
          of a limited legal or security record. We will not promise deletion from a
          system we cannot verify.
        </p>
      </LegalSection>

      <LegalSection id="choices" title="7. Your choices and rights">
        <p>
          Depending on applicable law and our role, you may ask to access, correct,
          delete, or obtain a copy of personal information, or to object to or restrict
          certain processing. You may also withdraw consent where consent is the basis
          for processing. These rights have legal exceptions and may require identity
          verification.
        </p>
        <p>
          To make a request, email <a href="mailto:hello@dade.studio">hello@dade.studio</a>
          with enough detail to identify the relationship and request. Do not include
          sensitive information in the email. If information was supplied through a
          customer account, contact that customer first. We will route a verified
          request to the customer when the customer controls the data and will assist as
          required by the applicable agreement and law.
        </p>
        <p>
          Because we do not sell personal data or use it for targeted advertising,
          browser Do Not Track and Global Privacy Control signals do not trigger a sale
          or targeted-advertising opt out on the current site. We will still review a
          direct contact about a recognized privacy right and honor it where applicable.
          If those practices change, this notice and the site&apos;s signal handling will
          be updated before the change.
        </p>
        <p>
          You may appeal a denied privacy request by replying to the denial with
          &quot;Privacy appeal&quot; in the subject. You may also contact the appropriate
          state regulator where the law gives you that option. We will not discriminate
          against a person for exercising an applicable privacy right.
        </p>
      </LegalSection>

      <LegalSection id="security" title="8. Security">
        <p>
          We use administrative, technical, and organizational measures intended to
          protect information in light of the service&apos;s size, configuration, and
          risks. Before customer activation, the applicable access restrictions,
          secrets handling, network exposure, customer separation, backup and restore,
          logging, and incident contacts must pass the launch review described in the
          DPA security schedule and Order Form.
        </p>
        <p>
          No internet service can guarantee absolute security. Customers are responsible
          for their authorized users, provider accounts and keys, connected tools, data
          selection, endpoint settings, and approval workflows. Report a suspected
          security issue to <a href="mailto:hello@dade.studio">hello@dade.studio</a> and
          avoid including exploit details or credentials in the first email.
        </p>
      </LegalSection>

      <LegalSection id="location" title="9. U.S. scope and age limit">
        <p>
          RemainFrame&apos;s initial service is offered only to U.S. businesses for use
          by authorized adults in the United States. It is not directed to children or
          anyone under 18, and we do not knowingly collect children&apos;s personal
          information through the service. Contact us if you believe a minor submitted
          information.
        </p>
        <p>
          The initial customer service is intended to be configured for U.S. processing.
          Public web delivery and a customer&apos;s independently chosen provider may
          involve infrastructure governed by that provider&apos;s terms. No international
          transfer mechanism or Standard Contractual Clauses are offered by default.
          Non-U.S. processing requires a separate written review and agreement before it
          begins.
        </p>
      </LegalSection>

      <LegalSection id="updates" title="10. Updates and contact">
        <p>
          We may update this notice when the site, service, providers, or law changes. A
          revised notice will show a new effective date. If a change materially affects
          an activated customer&apos;s processing, notice will be provided as required by
          the customer agreement or law before the change takes effect when practicable.
        </p>
        <p>
          Privacy questions and requests may be sent to{" "}
          <a href="mailto:hello@dade.studio">hello@dade.studio</a>. Postal notices for
          an activated service must use the legal name and notice address on the signed
          Order Form.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
