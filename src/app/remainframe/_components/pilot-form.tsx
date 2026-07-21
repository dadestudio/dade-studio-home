"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import styles from "../site.module.css";

function valueOf(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

export function StartForm() {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState<"inquiry" | "address" | null>(null);
  const [inquiryText, setInquiryText] = useState("");
  const [draftHref, setDraftHref] = useState("mailto:hello@dade.studio?subject=RemainFrame%20inquiry");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = valueOf(form, "name");
    const email = valueOf(form, "email");
    const business = valueOf(form, "business");
    const recurringWork = valueOf(form, "recurring-work");
    const currentTools = valueOf(form, "current-tools");
    const source = new URLSearchParams(window.location.search).get("source") ?? "direct";
    const safeSource = source.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80) || "direct";

    const subject = `RemainFrame inquiry: ${business || name}`;
    const body = [
      "RemainFrame inquiry",
      "",
      `Name: ${name}`,
      `Reply email: ${email}`,
      `Business: ${business || "Not provided"}`,
      "",
      "The work that keeps taking too much time:",
      recurringWork,
      "",
      "Where that work happens now:",
      currentTools || "Not provided",
      "",
      `Inquiry source: ${safeSource}`,
      "",
      "I have read the Privacy Notice and Website Terms. I authorize a direct reply to this business inquiry and confirm that I have not included passwords, customer records, health information, payment-card data, or other sensitive information.",
    ].join("\n");

    const href = `mailto:hello@dade.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftHref(href);
    setInquiryText(body);
    setOpened(true);
    window.location.href = href;
  }

  async function copyText(text: string, kind: "inquiry" | "address") {
    setCopied(null);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
    } catch {
      setCopied(null);
    }
  }

  return (
    <form className={styles.applicationForm} onSubmit={handleSubmit}>
      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label htmlFor="start-name">Your name</label>
          <input id="start-name" name="name" autoComplete="name" maxLength={100} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="start-email">Your email</label>
          <input id="start-email" name="email" type="email" autoComplete="email" maxLength={254} required />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="start-business">Business name <span aria-hidden="true">(optional)</span></label>
        <input id="start-business" name="business" autoComplete="organization" maxLength={160} />
      </div>

      <div className={styles.field}>
        <label htmlFor="start-work">What keeps taking too much time?</label>
        <textarea
          id="start-work"
          name="recurring-work"
          placeholder="Describe the work in your own words. It can be messy."
          maxLength={1200}
          required
        />
        <small>Keep it general. Do not include passwords, customer records, payment details, or other sensitive information.</small>
      </div>

      <div className={styles.field}>
        <label htmlFor="start-tools">Where does that work happen now? <span aria-hidden="true">(optional)</span></label>
        <input
          id="start-tools"
          name="current-tools"
          placeholder="For example: email, paper notes, QuickBooks, a website"
          maxLength={300}
        />
      </div>

      <label className={styles.checkbox}>
        <input name="acknowledgment" type="checkbox" required />
        <span>
          I have read the <Link href="/remainframe/legal/privacy">Privacy Notice</Link> and{" "}
          <Link href="/remainframe/legal/terms">Website Terms</Link>. I authorize a direct reply and confirm that
          this inquiry does not contain sensitive information.
        </span>
      </label>

      <button className={styles.submitButton} type="submit">Open my email draft</button>

      {opened ? (
        <p className={styles.formStatus} role="status">
          Your email app should have opened a prepared draft. Review it and press Send there.
          If nothing opened, <a href={draftHref}>open the draft again</a>,{" "}
          <button className={styles.copyButton} type="button" onClick={() => copyText(inquiryText, "inquiry")}>copy the complete inquiry</button>,{" "}
          or <button className={styles.copyButton} type="button" onClick={() => copyText("hello@dade.studio", "address")}>copy the email address</button>.
          {copied === "inquiry" ? " Inquiry copied." : ""}
          {copied === "address" ? " Address copied." : ""}
        </p>
      ) : null}

      <p className={styles.field}>
        <small>
          This form prepares an email on your device. Nothing is received until you review and send that email.
        </small>
      </p>
    </form>
  );
}
