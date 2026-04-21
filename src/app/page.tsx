"use client";

import { motion } from "framer-motion";

const navCards = [
  {
    label: "Blog",
    href: "https://blog.dade.studio",
    description: "Build notes, essays, and working theories from the studio.",
  },
  {
    label: "Merch",
    href: "https://merch.dade.studio",
    description: "Apparel, prints, and small-run goods from the studio.",
  },
  {
    label: "MaaS",
    href: "https://maas.dade.studio",
    description:
      "AI memory infrastructure for builders. Purpose-built persistence for AI agents.",
  },
  {
    label: "Retro",
    href: "https://retro.dade.studio",
    description: "An archive of experiments, aesthetics, and side quests.",
  },
];

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-10 text-foreground md:gap-14 md:px-10 md:py-14"
    >
      <header className="flex items-center">
        <span className="font-mono text-2xl tracking-tight md:text-3xl">Dade.Studio</span>
      </header>

      <section className="max-w-3xl space-y-6">
        {/* TODO: editorial review */}
        <p className="text-4xl leading-tight tracking-tight md:text-6xl">
          A creative studio for brands that ship.
        </p>
        <div className="rounded-[var(--radius-lg)] border border-border bg-muted p-6 md:p-7">
          <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
            Currently: building MaaS, rebuilding the studio site, and everything between.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {navCards.map((card) => (
          <motion.a
            key={card.label}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.012 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group rounded-[var(--radius-lg)] border border-border bg-card p-5 transition-colors hover:border-foreground/25 hover:bg-accent md:p-6"
          >
            <div className="mb-5 h-20 rounded-[var(--radius-md)] border border-dashed border-border bg-background/70" />
            <h2 className="text-card-foreground text-2xl tracking-tight">{card.label}</h2>
            <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed md:text-base">
              {card.description}
            </p>
          </motion.a>
        ))}
      </section>

      <footer className="text-muted-foreground mt-4 border-t border-border pt-6 text-sm">
        <p>© 2026 Dade.Studio</p>
      </footer>
    </motion.main>
  );
}
