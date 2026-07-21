import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../../_lib/metadata";
import { LegalCallout, LegalDocument, LegalSection } from "../legal-components";

export const metadata: Metadata = pageMetadata({
  title: "Website terms",
  description:
    "Terms governing use of the informational and prelaunch RemainFrame public website.",
  path: "/remainframe/legal/terms",
  type: "article",
});

const toc = [
  { id: "agreement", label: "Agreement and scope" },
  { id: "prelaunch", label: "Informational and prelaunch site" },
  { id: "eligibility", label: "Eligibility" },
  { id: "ip", label: "Site content and intellectual property" },
  { id: "feedback", label: "Feedback" },
  { id: "conduct", label: "Prohibited conduct" },
  { id: "third-parties", label: "Third parties" },
  { id: "information", label: "AI and informational disclaimers" },
  { id: "warranty", label: "Warranty disclaimer" },
  { id: "liability", label: "Limits of liability" },
  { id: "law", label: "Law and venue" },
  { id: "changes", label: "Changes and general terms" },
] as const;

export default function WebsiteTermsPage() {
  return (
    <LegalDocument
      title="Website terms"
      summary="These terms govern the public RemainFrame website. They do not activate the service, create a pilot relationship, or replace a signed customer agreement."
      toc={toc}
    >
      <LegalSection id="agreement" title="1. Agreement and scope">
        <p>
          By accessing or using the public RemainFrame website, you agree to these
          Website Terms. If you do not agree, do not use the site. If you use the site
          for an organization, you represent that you have authority to bind that
          organization to these terms.
        </p>
        <p>
          These terms apply only to the public website, its informational materials,
          and inquiry links. The{" "}
          <Link href="/remainframe/legal/service-terms">Service Terms</Link> govern the
          RemainFrame service only when a signed Order Form or a genuine clickwrap
          expressly incorporates a fixed version. A footer link, continued browsing,
          pilot conversation, demo, or email exchange does not incorporate the Service
          Terms.
        </p>
        <LegalCallout title="No arbitration or class-action waiver.">
          <p>
            These Website Terms do not require mandatory arbitration and do not contain
            a class-action waiver. Any future dispute term for the service must be
            expressly agreed through the service contracting process.
          </p>
        </LegalCallout>
      </LegalSection>

      <LegalSection id="prelaunch" title="2. Informational and early-stage site">
        <p>
          RemainFrame is currently presented as an early-stage custom service. Site
          descriptions, diagrams, status labels, examples, and roadmaps explain the current service and intended
          direction. They are not an offer, service-level commitment, guarantee of
          availability, or promise that a planned feature will ship.
        </p>
        <p>
          Current facts and future plans can change. Universal integrations, general
          self-service activation, and a fully verified self-service export are not
          shipped. A signed Order Form must identify the actual service, limits,
          configuration, fees, provider, and notice address before any activation.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="3. Eligibility">
        <p>
          The site is intended for adults who are at least 18 and for U.S. business
          evaluation. It is not directed to children. You may not use the site where
          doing so would violate applicable law or a binding obligation to another
          person.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="4. Site content and intellectual property">
        <p>
          The site, including its design, layout, text, graphics, product descriptions,
          documentation, marks, and other original content, is owned by or licensed to
          the RemainFrame operator and is protected by applicable intellectual property
          laws. RemainFrame is the product identifier used for this offering.
          These terms do not grant ownership in them or in the underlying software.
        </p>
        <p>
          You may view, print, or save reasonable portions of the site for your own
          internal business evaluation. You may not copy the site in bulk, remove
          attribution, imply endorsement, sell or sublicense site content, use brand
          elements to confuse others, or create a competing dataset or product from site
          content without written permission. Rights not expressly granted are reserved.
        </p>
        <p>
          Third-party names, marks, and content remain the property of their respective
          owners. Reference to a third party does not imply sponsorship or endorsement.
        </p>
      </LegalSection>

      <LegalSection id="feedback" title="5. Feedback">
        <p>
          If you voluntarily provide nonconfidential ideas, suggestions, or feedback
          about the site or RemainFrame, you grant the operator a worldwide, perpetual,
          irrevocable, royalty-free, transferable, and sublicensable license to use,
          reproduce, modify, distribute, and otherwise exploit that feedback for any
          lawful purpose without payment or attribution.
        </p>
        <p>
          Do not submit feedback that you do not have a right to share, that is subject
          to a third party&apos;s confidentiality duty, or that contains personal or
          sensitive information. Customer Content and Confidential Information supplied
          under a service agreement are not treated as feedback merely because they may
          include comments about the product.
        </p>
      </LegalSection>

      <LegalSection id="conduct" title="6. Prohibited conduct">
        <p>You may not use the site to:</p>
        <ul>
          <li>violate law, third-party rights, or a binding duty;</li>
          <li>
            interfere with, overload, probe, scan, or circumvent site security or access
            controls, except through a lawful, authorized security review;
          </li>
          <li>
            introduce malware, harmful code, automated abuse, spam, scraping that
            materially burdens the site, or deceptive traffic;
          </li>
          <li>
            impersonate another person, misrepresent affiliation, or submit fraudulent
            or misleading information;
          </li>
          <li>
            collect information about other visitors or attempt to access nonpublic
            systems or data; or
          </li>
          <li>
            use site content or technical signals to develop, train, or benchmark a
            model or competing product where that use violates law or these terms.
          </li>
        </ul>
        <p>
          We may restrict access when reasonably necessary to protect the site, users,
          systems, or legal rights.
        </p>
      </LegalSection>

      <LegalSection id="third-parties" title="7. Third-party sites and services">
        <p>
          The site may link to Vercel, Signal, model providers, connected-tool
          providers, social platforms, or other third parties. Those services are
          controlled by their operators and governed by their own terms and privacy
          practices. A link is provided for convenience and does not make Dade.Studio
          responsible for the third party&apos;s content, security, availability,
          billing, or data use.
        </p>
        <p>
          An email link uses the visitor&apos;s own mail application and provider. The
          current site does not store the inquiry in a RemainFrame backend database.
        </p>
      </LegalSection>

      <LegalSection id="information" title="8. AI and informational disclaimers">
        <p>
          Site content is general product and educational information. It is not legal,
          medical, financial, tax, security, accessibility, or other professional
          advice. Examples of AI output or agent behavior can be incomplete, incorrect,
          outdated, or inappropriate for a particular use.
        </p>
        <p>
          You remain responsible for independent review and for decisions made using
          site information. Do not rely on a public example for an important,
          consequential, or regulated decision. Product statements about security,
          privacy, accessibility, or capability describe targets or the identified
          scope. They are not certifications or independent attestations.
        </p>
      </LegalSection>

      <LegalSection id="warranty" title="9. Warranty disclaimer">
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, THE SITE AND ITS CONTENT ARE PROVIDED
          &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; DADE.STUDIO DISCLAIMS ALL
          EXPRESS, IMPLIED, AND STATUTORY WARRANTIES CONCERNING THE SITE, INCLUDING
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
          NON-INFRINGEMENT, ACCURACY, AVAILABILITY, AND SECURITY. WE DO NOT WARRANT THAT
          THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
        </p>
        <p>
          Some jurisdictions do not allow certain disclaimers, so the disclaimer applies
          only to the extent permitted by applicable law.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="10. Limits of liability">
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, DADE.STUDIO AND THE PEOPLE SUPPORTING
          THE REMAINFRAME SITE WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
          EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, OR FOR LOST PROFITS, REVENUE,
          DATA, USE, GOODWILL, OR BUSINESS INTERRUPTION, ARISING FROM OR RELATED TO THE
          SITE, EVEN IF ADVISED THAT SUCH DAMAGES ARE POSSIBLE.
        </p>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, THEIR TOTAL AGGREGATE LIABILITY ARISING
          FROM OR RELATED TO THE SITE WILL NOT EXCEED THE GREATER OF $100 OR THE AMOUNT
          YOU PAID SPECIFICALLY TO USE THE PUBLIC SITE DURING THE 12 MONTHS BEFORE THE
          EVENT GIVING RISE TO THE CLAIM.
        </p>
        <p>
          These limits do not exclude liability for fraud, willful misconduct, or any
          liability that applicable law does not allow to be limited. They do not replace
          any liability terms expressly agreed in an activated customer&apos;s signed
          service agreement.
        </p>
      </LegalSection>

      <LegalSection id="law" title="11. Governing law and venue">
        <p>
          Colorado law governs these Website Terms, without regard to conflict-of-law
          rules. Any court proceeding arising from or related to these Website Terms or
          the public site must be brought exclusively in the state courts located in
          Archuleta County, Colorado, or, if federal jurisdiction exists, the federal
          court serving Archuleta County. Each party consents to personal jurisdiction
          and venue in those courts.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="12. Changes and general terms">
        <p>
          We may update these Website Terms by posting a revised version with a new
          effective date. Changes apply prospectively. Continued use of the site after a
          change takes effect means you accept the revised Website Terms. A material
          change to service rights must follow the separate service agreement and cannot
          be imposed merely through this provision.
        </p>
        <p>
          If a provision is held unenforceable, it will be enforced to the maximum
          lawful extent and the remaining provisions will remain effective. Failure to
          enforce a provision is not a waiver. You may not assign these terms without
          written consent, but Dade.Studio may assign them in connection with a
          reorganization or transfer of the site, subject to applicable law.
        </p>
        <p>
          These Website Terms and the posted Privacy Notice are the entire agreement
          concerning use of the public site. Questions may be sent to{" "}
          <a href="mailto:hello@dade.studio">hello@dade.studio</a>.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
