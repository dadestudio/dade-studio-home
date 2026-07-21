"use client";

import { useState } from "react";
import styles from "./page.module.css";

const roleLanguage = {
  pressure: [
    "the same work keeps landing back on you",
    "customer inquiries start outrunning the day",
    "a board packet has to become a decision",
    "projects scatter across messages and memory",
    "expenses need a clear explanation",
    "a specialist workflow has no off-the-shelf tool",
  ],
  work: [
    "turns your context into the next useful step",
    "gathers what is missing before it comes back",
    "prepares the comparison, draft, or decision brief",
    "remembers what changed and keeps work moving",
    "handles repeatable work within your rules",
    "learns the specialist role you define",
  ],
  boundary: [
    "stops where your judgment begins",
    "brings you only the exceptions",
    "pauses at the limits you set",
    "leaves approval with the right person",
    "stays out of anything you mark off-limits",
    "grows only when you choose",
  ],
} as const;

type RoleSlot = keyof typeof roleLanguage;
type Selections = Record<RoleSlot, number>;

const roleClauses = [
  {
    lead: "When",
    slot: "pressure",
    punctuation: ",",
    action: "Change the opening phrase",
  },
  {
    lead: "RemainFrame",
    slot: "work",
    punctuation: ",",
    action: "Change what RemainFrame does",
  },
  {
    lead: "Then",
    slot: "boundary",
    punctuation: ".",
    action: "Change where RemainFrame stops",
  },
] as const;

export function HeroRoleSpec() {
  return (
    <aside
      className={styles.heroRoleSpec}
      aria-label="RemainFrame roles are written around the work of each business."
    >
      <div className={styles.roleSpecMeta}>
        <span>ROLE SPECIFICATION / OPEN</span>
        <span>BUILT AROUND THE BUSINESS</span>
      </div>

      <p className={styles.roleSpecType}>
        <span>The role</span>
        <em>is written</em>
        <span>around</span>
        <strong>the work.</strong>
      </p>

      <p className={styles.roleSpecFooter}>
        YOUR VOICE <i aria-hidden="true">·</i> YOUR RULES <i aria-hidden="true">·</i>{" "}
        YOUR KNOWLEDGE <i aria-hidden="true">·</i> YOUR BOUNDARIES
      </p>
    </aside>
  );
}

export function RoleSentence() {
  const [selections, setSelections] = useState<Selections>({
    pressure: 0,
    work: 0,
    boundary: 0,
  });

  function advance(slot: RoleSlot) {
    setSelections((current) => ({
      ...current,
      [slot]: (current[slot] + 1) % roleLanguage[slot].length,
    }));
  }

  const phrase = (slot: RoleSlot) => roleLanguage[slot][selections[slot]];

  return (
    <section className={styles.roleSentence} id="role-draft" aria-labelledby="role-sentence-title">
      <div className={styles.roleSentenceHeading}>
        <p className={styles.sectionIndex}>02 / THE ROLE, WRITTEN</p>
        <h2 id="role-sentence-title">
          Not a preset.
          <em> A working brief.</em>
        </h2>
        <p>
          Change any red phrase. The same agent takes on a different role without
          turning your business into a software template.
        </p>
      </div>

      <div className={styles.roleCanvas}>
        <div className={styles.roleCanvasTopline} id="role-rewrite-instruction">
          <span>CLICK THE RED LANGUAGE TO REWRITE THE ROLE</span>
          <span>ONE AGENT / THOUSANDS OF POSSIBLE ROLES</span>
        </div>

        <div
          className={styles.roleStatement}
          role="group"
          aria-describedby="role-rewrite-instruction"
        >
          {roleClauses.map((clause) => (
            <p className={styles.roleClause} key={clause.slot}>
              <span className={styles.roleLead}>{clause.lead}</span>
              <button
                className={styles.rolePhrase}
                type="button"
                onClick={() => advance(clause.slot)}
                aria-label={`${clause.action}. Current phrase: ${phrase(clause.slot)}`}
              >
                <span>
                  {phrase(clause.slot)}{clause.punctuation}
                </span>
              </button>
            </p>
          ))}
        </div>

        <div className={styles.roleCanvasFoot}>
          <span>PRESSURE</span>
          <i aria-hidden="true">+</i>
          <span>USEFUL WORK</span>
          <i aria-hidden="true">+</i>
          <span>YOUR BOUNDARIES</span>
          <strong>= A ROLE THAT FITS</strong>
        </div>

        <p className={styles.visuallyHidden} aria-live="polite">
          When {phrase("pressure")}, RemainFrame {phrase("work")}, then {phrase("boundary")}.
        </p>
      </div>
    </section>
  );
}
