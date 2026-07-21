import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../../_lib/metadata";
import { LegalCallout, LegalDocument, LegalSection } from "../legal-components";

export const metadata: Metadata = pageMetadata({
  title: "Acceptable use policy",
  description:
    "Rules for data, decisions, agent actions, connected tools, and other use of the RemainFrame private business pilot.",
  path: "/remainframe/legal/acceptable-use",
  type: "article",
});

const toc = [
  { id: "scope", label: "Scope and responsibility" },
  { id: "lawful", label: "Lawful and authorized use" },
  { id: "data", label: "Prohibited data" },
  { id: "decisions", label: "Prohibited consequential decisions" },
  { id: "actions", label: "Human approval for important actions" },
  { id: "abuse", label: "Abuse and harmful conduct" },
  { id: "systems", label: "Systems, models, and tools" },
  { id: "enforcement", label: "Reporting and enforcement" },
  { id: "changes", label: "Changes" },
] as const;

export default function AcceptableUsePage() {
  return (
    <LegalDocument
      title="Acceptable use policy"
      summary="RemainFrame is a narrow private business pilot. This policy defines the workloads, decisions, actions, and conduct that are outside its authorized scope."
      toc={toc}
    >
      <LegalSection id="scope" title="1. Scope and responsibility">
        <p>
          This Acceptable Use Policy applies to the RemainFrame Service, its agent,
          connected model endpoints, memory, messaging channels, MCP servers, tools, and
          support access. It applies to Customer, every Authorized User, and anyone using
          Customer&apos;s accounts or credentials.
        </p>
        <p>
          This policy becomes part of the customer Agreement only through the binding
          mechanism in the{" "}
          <Link href="/remainframe/legal/service-terms">Service Terms</Link>. Customer is
          responsible for its users, Customer Content, selected providers, connected
          systems, permissions, review process, and use of Output.
        </p>
        <LegalCallout title="Pilot boundary.">
          <p>
            The Service is limited to U.S. business use by adults who are at least 18.
            It is not approved for consumer self-service, minors, sensitive regulated
            workloads, or high-consequence decisions about people.
          </p>
        </LegalCallout>
      </LegalSection>

      <LegalSection id="lawful" title="2. Lawful, authorized, and honest use">
        <p>Customer and Authorized Users may not use the Service to:</p>
        <ul>
          <li>violate applicable law, regulation, court order, or third-party rights;</li>
          <li>
            process information or access a source without a valid right, authorization,
            notice, consent, or other lawful basis;
          </li>
          <li>
            impersonate another person, conceal the source of an automated message,
            misrepresent an AI system as a human where disclosure is required, or engage
            in fraud or deception;
          </li>
          <li>
            harass, threaten, stalk, exploit, discriminate against, or facilitate harm to
            a person or protected group;
          </li>
          <li>
            create or distribute unlawful sexual content, child sexual abuse material,
            intimate imagery without consent, or content that exploits a minor;
          </li>
          <li>
            infringe, misappropriate, or unlawfully disclose intellectual property,
            privacy, publicity, confidentiality, or contractual rights; or
          </li>
          <li>
            evade sanctions, export controls, law-enforcement restrictions, or another
            legal limit that applies to Customer or its providers.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="data" title="3. Data that must not enter the pilot">
        <p>
          Customer must not submit, retrieve, infer, connect, or ask the Service to store
          the following data:
        </p>
        <ul>
          <li>health, medical, treatment, diagnosis, or health-insurance information;</li>
          <li>biometric identifiers, biometric templates, facial recognition data, or neural data;</li>
          <li>precise geolocation or persistent movement history;</li>
          <li>
            Social Security numbers, passport or driver-license numbers, government IDs,
            or copies of identity documents;
          </li>
          <li>
            card numbers, bank login information, payment tokens, or other card and
            payment credentials;
          </li>
          <li>
            passwords, private keys, session cookies, recovery codes, or account
            credentials, except a customer-owned provider key supplied through the
            approved secret setup path solely for its intended connection;
          </li>
          <li>
            information known to be from or about a child or person under 18; or
          </li>
          <li>data regulated by a specialized legal or contractual regime.</li>
        </ul>
        <p>
          Masking a field or instructing a model not to reveal it does not make prohibited
          data acceptable. Customer must inspect connected sources and apply data
          minimization before activation.
        </p>
      </LegalSection>

      <LegalSection id="decisions" title="4. No consequential decisions about people">
        <p>
          The Service may not make, recommend, rank, score, screen, or materially assist
          a decision that determines or substantially affects a person&apos;s access to:
        </p>
        <ul>
          <li>employment, worker evaluation, promotion, discipline, or termination;</li>
          <li>credit, lending, debt collection, or financial eligibility;</li>
          <li>housing, tenancy, lodging, or utilities;</li>
          <li>insurance coverage, pricing, claims, or benefits;</li>
          <li>health care, diagnosis, treatment, or medical prioritization;</li>
          <li>education admission, assessment, discipline, or access;</li>
          <li>legal services, legal rights, or legal case outcomes;</li>
          <li>government benefits, identity, licensing, or public services; or</li>
          <li>
            law-enforcement, surveillance, investigation, detention, bail, sentencing,
            immigration, or other government coercive action.
          </li>
        </ul>
        <p>
          A human reviewing an AI recommendation does not make these uses acceptable
          under the current pilot. They require a different product scope, risk review,
          contract, and technical safeguards.
        </p>
      </LegalSection>

      <LegalSection id="actions" title="5. Human approval for important actions">
        <p>
          Customer may not configure the Service to complete any of the following
          autonomously:
        </p>
        <ul>
          <li>spend, transfer, refund, trade, or commit funds;</li>
          <li>delete data, accounts, backups, workspaces, or material records;</li>
          <li>
            send an external message, publish content, issue a notice, or communicate as
            a person or organization;
          </li>
          <li>
            modify a contract, customer record, financial record, access permission,
            production configuration, or other important system of record; or
          </li>
          <li>
            take another action that is difficult to reverse or could materially affect
            rights, finances, reputation, operations, or security.
          </li>
        </ul>
        <p>
          The specific workflow must have an implemented human approval path that shows
          an authorized reviewer the proposed action and material details before
          execution. A general system prompt, informal instruction to &quot;ask
          first,&quot; or model self-check is not an approval control. Customer must test
          the path and preserve approval evidence appropriate to the risk.
        </p>
      </LegalSection>

      <LegalSection id="abuse" title="6. Abuse and harmful conduct">
        <p>The Service may not be used to create, facilitate, or distribute:</p>
        <ul>
          <li>malware, ransomware, credential theft, destructive code, or exploit kits;</li>
          <li>
            instructions primarily intended to cause physical harm, create prohibited
            weapons, or meaningfully enable violent wrongdoing;
          </li>
          <li>
            unsolicited bulk messaging, phishing, deceptive outreach, review
            manipulation, or platform abuse;
          </li>
          <li>
            targeted harassment, doxxing, nonconsensual monitoring, or privacy invasion;
          </li>
          <li>
            fabricated evidence, forged records, deceptive impersonation, or
            misinformation presented as an authentic primary record; or
          </li>
          <li>
            activity intended to suppress lawful access, disrupt critical services, or
            cause material damage to systems or data.
          </li>
        </ul>
        <p>
          Good-faith defensive security, safety, journalism, research, or educational
          work must remain lawful, authorized, proportionate, and within the signed
          scope. Provider may require documentation of authorization.
        </p>
      </LegalSection>

      <LegalSection id="systems" title="7. Systems, providers, models, and tools">
        <p>Customer and Authorized Users may not:</p>
        <ul>
          <li>
            probe, scan, overload, disrupt, or bypass Service, provider, model, or tool
            security and rate limits without written authorization;
          </li>
          <li>
            use prompt injection, tool manipulation, or data poisoning to access another
            customer&apos;s data, hidden instructions, secrets, or restricted systems;
          </li>
          <li>
            connect a tool, source, or endpoint that Customer is not authorized to use or
            that cannot meet the Agreement&apos;s U.S. and data restrictions;
          </li>
          <li>
            conceal a provider account&apos;s ownership, share provider credentials
            outside authorized use, or evade provider charges or policies;
          </li>
          <li>
            remove safety controls or approval gates required by the Order Form; or
          </li>
          <li>
            use the Service to reverse engineer, extract, or reproduce underlying models,
            software, or nonpublic product design except where law prohibits that
            restriction.
          </li>
        </ul>
        <p>
          Customer must also comply with the acceptable-use and content rules of Signal,
          OpenRouter, the selected model endpoint, Hostinger, and each connected tool.
          If provider rules conflict, Customer must choose a compliant configuration or
          stop the affected use.
        </p>
      </LegalSection>

      <LegalSection id="enforcement" title="8. Reporting, review, and enforcement">
        <p>
          Report a suspected violation to{" "}
          <a href="mailto:hello@dade.studio">hello@dade.studio</a>. Do not include
          passwords, API keys, exploit code, or prohibited data in the first email.
        </p>
        <p>
          Provider may investigate a credible concern, request information needed to
          evaluate it, restrict the affected integration or user, reject Customer
          Content, preserve evidence as required by law, or suspend access under the
          Service Terms. Where practical and safe, Provider will give notice and an
          opportunity to cure. Immediate action may be taken to address unlawful
          conduct, a credible security threat, prohibited sensitive data, or material
          harm.
        </p>
        <p>
          Customer must cooperate with reasonable investigation and remediation. A
          material or repeated violation may result in termination. Provider may report
          conduct to a third-party provider or authority when required by law or
          reasonably necessary to prevent serious harm, subject to applicable privacy and
          confidentiality duties.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="9. Changes">
        <p>
          Provider may update this policy to address new risks, laws, or Service
          features. A material mid-term change does not bind an activated Customer merely
          because it is posted online. It applies when agreed under the Service Terms,
          required by law, or necessary to stop a newly identified unlawful or dangerous
          use, in which case Provider will give notice as reasonably practicable.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
