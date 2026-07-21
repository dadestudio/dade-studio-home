import type { Metadata } from "next";
import { pageMetadata } from "../../../_lib/metadata";
import {
  LegalCallout,
  LegalDocument,
  LegalSection,
  TableScroll,
} from "../legal-components";

export const metadata: Metadata = pageMetadata({
  title: "Subprocessors and service recipients",
  description:
    "Providers, customer-directed recipients, and self-hosted components in the current RemainFrame public site and private proving ground.",
  path: "/remainframe/legal/subprocessors",
  type: "article",
});

const toc = [
  { id: "how-to-read", label: "How to read this notice" },
  { id: "website", label: "Public website provider" },
  { id: "service", label: "Service infrastructure" },
  { id: "directed", label: "Customer-directed recipients" },
  { id: "components", label: "Self-hosted components" },
  { id: "change", label: "Changes and objections" },
  { id: "configuration", label: "Customer-specific record" },
] as const;

export default function SubprocessorsPage() {
  return (
    <LegalDocument
      title="Subprocessors and service recipients"
      summary="This notice separates processors selected by the RemainFrame operator, services a customer directs the agent to use, and software components that are self-hosted rather than outside recipients."
      toc={toc}
    >
      <LegalSection id="how-to-read" title="1. How to read this notice">
        <p>
          A <strong>subprocessor</strong> is an outside organization that Provider
          engages to process Customer Personal Data on Provider&apos;s behalf. A{" "}
          <strong>customer-directed recipient</strong> is a provider, model endpoint,
          message channel, MCP server, or tool selected or authorized by Customer to
          receive data for its own role. Depending on the arrangement and provider terms,
          that recipient may act as Customer&apos;s processor, an independent controller,
          or another direct provider to Customer rather than Provider&apos;s subprocessor.
        </p>
        <p>
          A software package running inside Provider-controlled infrastructure is not a
          separate data recipient merely because the package was created by another
          organization. The legal role depends on who operates it and receives the data.
        </p>
        <LegalCallout title="Baseline, not an activated-customer list.">
          <p>
            No customer has been activated. The tables below describe the public site
            and current private proving ground. Before activation, the Order Form and
            DPA record must identify the exact approved configuration and any additional
            recipient.
          </p>
        </LegalCallout>
      </LegalSection>

      <LegalSection id="website" title="2. Public website provider">
        <TableScroll label="Public website provider details">
          <table>
            <caption>Public website provider details</caption>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Data</th>
                <th>Role note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vercel</td>
                <td>Hosting, delivery, availability, and security of the public site.</td>
                <td>
                  Ordinary web requests, including IP address, URL, timestamp, browser
                  or device information, response status, and related request logs.
                </td>
                <td>
                  Public-site processor or service provider. Public web delivery may use
                  Vercel&apos;s edge infrastructure under its terms. No customer Service
                  data is intended to be submitted through the public site.
                </td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
        <p>
          The current lead application is a <code>mailto:</code> link to
          hello@dade.studio. It opens the visitor&apos;s own email application and does
          not submit to a RemainFrame form backend or lead database. The visitor&apos;s
          email provider processes the message under the visitor&apos;s own account and
          terms.
        </p>
      </LegalSection>

      <LegalSection id="service" title="3. Provider-selected service infrastructure">
        <p>
          The following infrastructure is in the current proving-ground architecture.
          Its use for a customer remains subject to the signed configuration and
          activation review.
        </p>
        <TableScroll label="Provider-selected service infrastructure">
          <table>
            <caption>Provider-selected service infrastructure</caption>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Data</th>
                <th>Processing scope</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hostinger</td>
                <td>VPS compute, storage, network, snapshots, and related infrastructure.</td>
                <td>
                  Customer Content, agent memory, configuration, operational metadata,
                  and security records stored or processed on the VPS.
                </td>
                <td>
                  U.S. customer processing must use the configuration approved in the
                  Order Form and activation record. Backup and snapshot copies may
                  persist until normal provider rotation.
                </td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
        <p>
          The executed DPA must identify any other Provider-selected organization that
          processes Customer Personal Data. Professional advisers do not receive routine
          Service data, but may receive limited information under confidentiality when
          reasonably needed for legal, accounting, insurance, or security work.
        </p>
      </LegalSection>

      <LegalSection id="directed" title="4. Customer-directed recipients">
        <p>
          The current Service sends data to the providers Customer selects for the
          requested task. Customer must review each provider&apos;s terms, retention,
          model-training settings, processing location, and security before activation.
        </p>
        <TableScroll label="Customer-directed recipients">
          <table>
            <caption>Customer-directed recipients</caption>
            <thead>
              <tr>
                <th>Recipient</th>
                <th>Role in the proving ground</th>
                <th>Data disclosed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Signal</td>
                <td>
                  Customer-selected messaging transport for conversations with the
                  agent.
                </td>
                <td>
                  Message content and metadata necessary to send, receive, and associate
                  the message with the configured agent.
                </td>
              </tr>
              <tr>
                <td>OpenRouter</td>
                <td>
                  Customer-selected routing layer used with a customer-owned provider key
                  when included in the configuration.
                </td>
                <td>
                  Relevant prompts, instructions, context, selected-model information,
                  responses, and request metadata.
                </td>
              </tr>
              <tr>
                <td>Customer-selected model endpoint</td>
                <td>Generates or processes a response using the model Customer selects.</td>
                <td>
                  Relevant prompts, instructions, memory or retrieved context, and
                  response metadata.
                </td>
              </tr>
              <tr>
                <td>Customer-approved MCP server or connected tool</td>
                <td>
                  Retrieves information or performs the specific action Customer
                  authorizes.
                </td>
                <td>
                  Inputs, context, identifiers, and instructions reasonably needed for
                  that tool&apos;s role, plus the result it returns.
                </td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
        <p>
          These categories are not permission to connect every available provider.
          Universal integrations are not shipped. Each endpoint and tool must be
          specifically approved, use Customer&apos;s authorized account where required,
          and pass the data and action review in the Order Form. A customer-selected
          provider may be a direct recipient rather than Provider&apos;s subprocessor,
          but its involvement must still be transparent.
        </p>
      </LegalSection>

      <LegalSection id="components" title="5. Self-hosted software is not a separate recipient">
        <p>
          The private RemainFrame runtime, self-hosted Honcho memory, and self-hosted
          Langfuse observability, when included in a deployment, run as software
          components within the approved service environment. Their upstream software
          projects do not receive Customer Personal Data merely because their code is in
          use.
        </p>
        <p>
          If a hosted version of Honcho, Langfuse, or another component is proposed in
          the future, that hosted operator would be evaluated as a possible subprocessor
          or customer-directed recipient before Customer Personal Data is sent to it. The
          list and customer record would be updated first.
        </p>
      </LegalSection>

      <LegalSection id="change" title="6. Changes, notice, and objections">
        <p>
          Provider will not authorize a new subprocessor to process activated Customer
          Personal Data until it has completed a reasonable privacy and security review,
          imposed data-protection terms appropriate to the processing, and updated this
          notice or the customer-specific list.
        </p>
        <p>
          For an activated Customer, Provider will notify the contact stated in the
          Order Form before a new subprocessor begins processing Customer Personal Data
          when reasonably practicable. The notice will identify the new provider, role,
          data, and planned effective date. The Order Form or DPA may state a specific
          notice period.
        </p>
        <p>
          Customer may make a reasonable written objection based on documented
          data-protection grounds before the effective date. The parties will work in
          good faith on a commercially reasonable alternative. If no alternative is
          available, either party may terminate the affected Service as provided in the
          DPA or Order Form. An objection is not a general right to dictate
          Provider&apos;s suppliers where no Customer Personal Data is involved.
        </p>
      </LegalSection>

      <LegalSection id="configuration" title="7. Customer-specific record">
        <p>
          Before activation, Customer and Provider must record:
        </p>
        <ul>
          <li>the Provider legal name and notice address;</li>
          <li>the approved VPS region and infrastructure configuration;</li>
          <li>the Signal account and authorized business users;</li>
          <li>the OpenRouter and model endpoints selected by Customer;</li>
          <li>each authorized MCP server and connected tool;</li>
          <li>which party contracts with and pays each provider;</li>
          <li>the data categories and purpose for each connection;</li>
          <li>retention, model-training, and location settings under Customer control;</li>
          <li>applicable change-notice contacts; and</li>
          <li>the fixed version of the incorporated DPA and this notice.</li>
        </ul>
        <p>
          Questions or an objection notice may be sent to{" "}
          <a href="mailto:hello@dade.studio">hello@dade.studio</a>, with formal notice
          also delivered as required by the signed Order Form.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
