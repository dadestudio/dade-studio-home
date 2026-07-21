import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../../_lib/metadata";
import { LegalCallout, LegalDocument, LegalSection, TableScroll } from "../legal-components";

export const metadata: Metadata = pageMetadata({
  title: "Cookies and browser storage",
  description:
    "What the RemainFrame public site stores in the browser, what Vercel may log, and why there is no cookie banner today.",
  path: "/remainframe/legal/cookies",
  type: "article",
});

const toc = [
  { id: "plain-language", label: "Current practice" },
  { id: "storage", label: "Theme preference" },
  { id: "logs", label: "Hosting request logs" },
  { id: "not-used", label: "What we do not use" },
  { id: "controls", label: "Your controls" },
  { id: "changes", label: "Changes before new tracking" },
] as const;

export default function CookiesPage() {
  return (
    <LegalDocument
      title="Cookies and browser storage"
      summary="The current public site remembers only your theme preference in local browser storage. It has no analytics, ad pixels, session replay, marketing cookies, or other nonessential cookies."
      toc={toc}
    >
      <LegalSection id="plain-language" title="1. Current practice in plain language">
        <p>
          RemainFrame does not currently use nonessential cookies or tracking
          technologies on the public site. For that reason, the site does not display a
          cookie-consent banner. A banner that offers choices about technologies the site
          does not use would be misleading.
        </p>
        <p>
          Two limited technical activities remain: the site stores a theme preference in
          your browser through <code>localStorage</code>, and Vercel may process ordinary
          server and request logs to host, secure, and deliver the site.
        </p>
        <LegalCallout title="The inquiry link does not submit a web form.">
          <p>
            The current pilot application opens a pre-addressed email to
            hello@dade.studio through your own mail application. There is no RemainFrame
            lead-form backend, advertising audience, or inquiry database attached to the
            public site.
          </p>
        </LegalCallout>
      </LegalSection>

      <LegalSection id="storage" title="2. Theme preference in local storage">
        <TableScroll label="Theme preference storage details">
          <table>
            <caption>Theme preference storage details</caption>
            <thead>
              <tr>
                <th>Technology</th>
                <th>Purpose</th>
                <th>Data</th>
                <th>Duration</th>
                <th>Who receives it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Browser <code>localStorage</code> through next-themes
                </td>
                <td>
                  Remembers whether you selected a light, dark, or system-based theme so
                  the site can preserve that preference on the same browser.
                </td>
                <td>A theme value. It is not intended to identify you.</td>
                <td>Until you change it or clear browser site data.</td>
                <td>
                  It remains on your device and is read by the site in your browser. It
                  is not intentionally sent to a RemainFrame backend.
                </td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
        <p>
          Local storage is not a cookie, but browsers group it with site data because it
          is stored on the device. Disabling or clearing it should not prevent you from
          reading the site, but the theme may return to its default or follow your system
          setting.
        </p>
      </LegalSection>

      <LegalSection id="logs" title="3. Vercel hosting and request logs">
        <p>
          Vercel hosts and delivers the public site. Like most web hosts, it may process
          IP address, request time, requested URL, browser or device information,
          response status, and similar server, network, or security events. These records
          can be used to deliver the requested page, maintain reliability, prevent abuse,
          and investigate technical or security problems.
        </p>
        <p>
          Request logs are not marketing cookies and are not used by RemainFrame for
          behavioral advertising or cross-site profiling. Vercel may use strictly
          necessary infrastructure mechanisms under its own service and privacy terms.
          Retention of provider-level logs depends on the site configuration and
          Vercel&apos;s applicable practices.
        </p>
      </LegalSection>

      <LegalSection id="not-used" title="4. Technologies not used on the current site">
        <p>The current RemainFrame public site does not use:</p>
        <ul>
          <li>product or audience analytics;</li>
          <li>advertising or retargeting pixels;</li>
          <li>cross-site behavioral identifiers;</li>
          <li>session replay, heat maps, or keystroke capture;</li>
          <li>marketing automation cookies;</li>
          <li>A/B testing identifiers;</li>
          <li>social-media tracking pixels; or</li>
          <li>other nonessential cookies.</li>
        </ul>
        <p>
          A link to an outside service takes you to that service, where its own cookie and
          storage rules may apply. The outside service does not become part of the
          RemainFrame site merely because it is linked.
        </p>
      </LegalSection>

      <LegalSection id="controls" title="5. Your controls">
        <p>
          You can clear or block local storage through your browser&apos;s privacy or
          site-data settings. You can also change the theme through the site control when
          available. Blocking ordinary requests entirely will prevent the site from
          loading because the host must receive a request to return a page.
        </p>
        <p>
          Because the current site has no sale, targeted advertising, or nonessential
          cookie system, Do Not Track and Global Privacy Control signals do not change a
          tracking preference here. A direct privacy request will still be reviewed and
          honored where applicable. See the{" "}
          <Link href="/remainframe/legal/privacy">Privacy Notice</Link>.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="6. Changes before new tracking">
        <p>
          Before adding analytics, advertising, session replay, marketing cookies, or
          another nonessential technology, Dade.Studio will review the purpose, provider,
          data, retention, consent requirement, and opt-out method. This notice and the
          Privacy Notice will be updated before the technology is enabled. A consent
          banner or preference control will be added first if required by law or needed
          to offer a meaningful choice.
        </p>
        <p>
          Questions about site storage may be sent to{" "}
          <a href="mailto:hello@dade.studio">hello@dade.studio</a>.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
