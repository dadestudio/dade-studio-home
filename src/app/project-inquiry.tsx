"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { services, studioEmail } from "./studio-content";
import styles from "./project-inquiry.module.css";

const initialBrief = {
  name: "",
  email: "",
  service: "Not sure yet",
  link: "",
  project: "",
  deadline: "",
};

export default function ProjectInquiry() {
  const [brief, setBrief] = useState(initialBrief);
  const [prepared, setPrepared] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const draftRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (prepared) {
      draftRef.current?.focus();
    }
  }, [prepared]);

  const updateBrief = (field: keyof typeof initialBrief, value: string) => {
    setBrief((current) => ({ ...current, [field]: value }));
    setPrepared(false);
    setCopyStatus("");
  };

  const subject = brief.service === "Not sure yet"
    ? "Project inquiry — Dade Studio"
    : `${brief.service} inquiry — Dade Studio`;
  const body = [
    "Hi Dade,",
    "",
    "Project details:",
    brief.project.trim(),
    "",
    `Service: ${brief.service}`,
    ...(brief.link.trim() ? [`Current website or work: ${brief.link.trim()}`] : []),
    ...(brief.deadline.trim() ? [`Deadline or timing: ${brief.deadline.trim()}`] : []),
    "",
    `Name: ${brief.name.trim()}`,
    `Reply email: ${brief.email.trim()}`,
  ].join("\n");
  const draft = `To: ${studioEmail}\nSubject: ${subject}\n\n${body}`;
  const emailHref = `mailto:${studioEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const prepareDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem("inquiry-name") as HTMLInputElement;
    const projectInput = form.elements.namedItem("inquiry-project") as HTMLTextAreaElement;

    nameInput.setCustomValidity(brief.name.trim() ? "" : "Add your name.");
    projectInput.setCustomValidity(brief.project.trim() ? "" : "Add a short note about what you need made.");

    if (!form.reportValidity()) {
      return;
    }

    setCopyStatus("");
    setPrepared(true);
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Draft copied. Paste it into an email to Dade and send it when you are ready.");
    } catch {
      textRef.current?.focus();
      textRef.current?.select();
      setCopyStatus("Copy is unavailable in this browser. Select and copy the draft below, then paste it into your email.");
    }
  };

  return (
    <div className={styles.inquiry}>
      <p className={styles.explanation} id="inquiry-help">
        Prepare a short email here, then open your email app or copy the draft.
        Your inquiry is sent only when you send the email.
      </p>
      <noscript>
        <style>{`.${styles.form} { display: none; }`}</style>
        <p>Email {studioEmail} directly with a short note about your business and what you need made.</p>
      </noscript>
      {/* Unnamed controls keep native fallback navigation from putting the brief in the URL. */}
      <form className={styles.form} action="#contact" onSubmit={prepareDraft} aria-describedby="inquiry-help">
        <div className={styles.fieldGrid}>
          <div>
            <label htmlFor="inquiry-name">Your name</label>
            <input
              id="inquiry-name"
              autoComplete="name"
              required
              maxLength={100}
              value={brief.name}
              onChange={(event) => {
                event.currentTarget.setCustomValidity("");
                updateBrief("name", event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="inquiry-email">Your email</label>
            <input
              id="inquiry-email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={brief.email}
              onChange={(event) => updateBrief("email", event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="inquiry-service">What do you need?</label>
            <select
              id="inquiry-service"
              value={brief.service}
              onChange={(event) => updateBrief("service", event.target.value)}
            >
              <option>Not sure yet</option>
              {services.map((service) => (
                <option key={service.number}>{service.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="inquiry-link">Current website or work <span>(optional)</span></label>
            <input
              id="inquiry-link"
              type="text"
              inputMode="url"
              maxLength={400}
              value={brief.link}
              onChange={(event) => updateBrief("link", event.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="inquiry-project">Tell me what you need made</label>
          <textarea
            id="inquiry-project"
            rows={5}
            required
            maxLength={1800}
            aria-describedby="inquiry-project-help"
            value={brief.project}
            onChange={(event) => {
              event.currentTarget.setCustomValidity("");
              updateBrief("project", event.target.value);
            }}
          />
          <p className={styles.fieldHelp} id="inquiry-project-help">Your business, the pieces you need, and what feels unfinished.</p>
        </div>
        <div>
          <label htmlFor="inquiry-deadline">Deadline or timing <span>(optional)</span></label>
          <input
            id="inquiry-deadline"
            type="text"
            maxLength={150}
            value={brief.deadline}
            onChange={(event) => updateBrief("deadline", event.target.value)}
          />
        </div>
        <button className={styles.primaryAction} type="submit">Prepare email draft <span aria-hidden="true">↓</span></button>
      </form>

      {prepared && (
        <div className={styles.draft} ref={draftRef} tabIndex={-1} aria-labelledby="inquiry-draft-title">
          <h3 id="inquiry-draft-title">Your draft is ready. It has not been sent.</h3>
          <p>Review the draft, then choose how to send it. If your email app does not open, use Copy draft.</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href={emailHref}>Open email app <span aria-hidden="true">↗</span></a>
            <button className={styles.copyAction} type="button" onClick={copyDraft}>Copy draft</button>
          </div>
          <p className={styles.copyStatus} role="status">{copyStatus}</p>
          <label htmlFor="inquiry-draft">Email draft</label>
          <textarea id="inquiry-draft" ref={textRef} value={draft} readOnly rows={10} />
        </div>
      )}
    </div>
  );
}
