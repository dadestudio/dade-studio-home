import type { Metadata } from "next";
import { pageMetadata } from "../../../_lib/metadata";
import { LegalCallout, LegalDocument, LegalSection } from "../legal-components";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility statement",
  description:
    "RemainFrame's WCAG 2.2 AA target, current accessibility review scope, and process for reporting and remediating barriers.",
  path: "/remainframe/legal/accessibility",
  type: "article",
});

const toc = [
  { id: "commitment", label: "Commitment and target" },
  { id: "scope", label: "Current review scope" },
  { id: "limits", label: "Known limits" },
  { id: "feedback", label: "Report a barrier" },
  { id: "remediation", label: "Response and remediation" },
  { id: "compatibility", label: "Compatibility and updates" },
] as const;

export default function AccessibilityPage() {
  return (
    <LegalDocument
      title="Accessibility statement"
      summary="We are building the RemainFrame public site toward WCAG 2.2 Level AA and want a direct, practical path for anyone who encounters a barrier."
      toc={toc}
    >
      <LegalSection id="commitment" title="1. Commitment and target">
        <p>
          Dade.Studio aims to make the RemainFrame public website usable by people with a
          wide range of abilities, devices, and assistive technologies. The site&apos;s
          design and development target is the Web Content Accessibility Guidelines
          (WCAG) 2.2 at Level AA.
        </p>
        <p>
          That target guides ongoing work, but it is not a certification or a claim that
          every page, state, device, assistive technology, or third-party destination has
          passed a complete independent audit. Accessibility is treated as a continuing
          product responsibility.
        </p>
        <LegalCallout title="Need the content another way?">
          <p>
            Email <a href="mailto:hello@dade.studio">hello@dade.studio</a> and describe
            the page or information you need and your preferred accessible format. Do
            not include health information or other sensitive personal data.
          </p>
        </LegalCallout>
      </LegalSection>

      <LegalSection id="scope" title="2. Current review scope">
        <p>
          Accessibility review is in progress. The current code and design review scope
          for the core RemainFrame marketing and legal routes includes:
        </p>
        <ul>
          <li>reviewing semantic page regions, heading order, lists, links, and labels;</li>
          <li>checking keyboard targets, focus order, and visible focus treatment;</li>
          <li>checking the skip link and focusable main-content targets;</li>
          <li>reviewing text and interface contrast against the site palette;</li>
          <li>checking responsive layouts at narrow, medium, and wide viewports;</li>
          <li>reviewing reflow and text enlargement for unintended page scrolling;</li>
          <li>reviewing link text and accessible navigation labels;</li>
          <li>
            reduced-motion preferences for interface transitions where motion is used;
            and
          </li>
          <li>basic screen-reader-oriented markup review in the implemented code.</li>
        </ul>
        <p>
          Inclusion on this list means the item is in the review scope, not that every
          instance has passed. The tested scope to date is limited and does not establish
          site-wide conformance. Contrast, reflow, keyboard, zoom, and assistive-technology
          checks must continue as routes change. These activities are not a substitute
          for a complete manual audit with multiple assistive technologies and people
          with disabilities.
        </p>
      </LegalSection>

      <LegalSection id="limits" title="3. Known limits and third-party content">
        <p>
          The public site is still evolving. A newly published page, browser-specific
          behavior, unusual zoom setting, or embedded or linked third-party service may
          present a barrier that was not found in the current review.
        </p>
        <p>
          Links may open services controlled by Vercel, Signal, model providers, email
          providers, or other third parties. Dade.Studio does not control the
          accessibility of those outside services, but welcomes reports that help us
          choose a better path, improve link context, or provide an equivalent
          RemainFrame-controlled format where reasonably possible.
        </p>
        <p>
          The private RemainFrame service has not been activated for customers. Any
          customer-specific accessibility needs for Signal, agent output, tools, or
          support must be evaluated and recorded before activation. The public-site
          target does not establish that every connected service conforms to WCAG 2.2 AA.
        </p>
      </LegalSection>

      <LegalSection id="feedback" title="4. Report an accessibility barrier">
        <p>
          Email <a href="mailto:hello@dade.studio">hello@dade.studio</a> with
          &quot;Accessibility&quot; in the subject. Helpful details include:
        </p>
        <ul>
          <li>the page address or the name of the content;</li>
          <li>what you were trying to do;</li>
          <li>what happened and any error message;</li>
          <li>
            the browser, device, operating system, and assistive technology, if you are
            comfortable sharing them; and
          </li>
          <li>the accessible format or workaround that would help.</li>
        </ul>
        <p>
          You do not need to disclose a disability or diagnosis. Please do not send
          passwords, API keys, medical details, government identifiers, or other
          sensitive information.
        </p>
      </LegalSection>

      <LegalSection id="remediation" title="5. Response and remediation">
        <p>
          We will acknowledge a report as reasonably practicable, assess its effect and
          severity, and provide an available workaround or alternative format when that
          can address the immediate need. Remediation priority considers whether a
          barrier blocks access to core information or a key action, how many routes are
          affected, and the complexity and risk of the correction.
        </p>
        <p>
          A report may require follow-up questions or testing. Some third-party barriers
          may need to be raised with the outside provider. We will communicate the status
          without promising a completion date before the issue and safe remedy are
          understood.
        </p>
      </LegalSection>

      <LegalSection id="compatibility" title="6. Compatibility and updates">
        <p>
          The site is designed for current versions of widely used browsers and for
          standards-based assistive technologies. Older or unsupported browser and
          assistive-technology combinations may behave differently. The site is
          responsive from small mobile screens through large desktop displays.
        </p>
        <p>
          This statement will be updated when the review scope, site technology, known
          limitations, or conformance evidence materially changes. A new effective date
          will be posted with the revised statement.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
