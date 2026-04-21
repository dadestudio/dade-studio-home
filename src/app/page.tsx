"use client";

import { motion } from "framer-motion";

const navCards = [
  {
    label: "Blog",
    href: "https://blog.dade.studio",
    description: "Build logs, experiments, and straight-from-the-workbench notes.",
  },
  {
    label: "Merch",
    href: "https://merch.dade.studio",
    description: "Wearable chaos, printable jokes, and limited-run internet souvenirs.",
  },
  {
    label: "MaaS",
    href: "https://maas.dade.studio",
    description: "Memory as a Service, tuned for builders who hate context loss.",
  },
  {
    label: "Retro",
    href: "https://retro.dade.studio",
    description: "Pixels, presets, and old-school web energy with fresh batteries.",
  },
];

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-10 text-foreground md:px-10 md:py-14"
    >
      <header className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-muted text-lg">
          🏠
        </span>
        <span className="font-mono text-2xl tracking-tight md:text-3xl">Dade.Studio</span>
      </header>

      <section className="max-w-3xl space-y-5">
        {/* TODO: editorial review */}
        <p className="text-4xl leading-tight tracking-tight md:text-6xl">
          I make weird internet things that actually ship.
        </p>
        <div className="rounded-[var(--radius-lg)] border border-border bg-muted p-5 md:p-6">
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.12em]">
            Right now I&apos;m...
          </p>
          <p className="text-muted-foreground mt-2 text-base leading-relaxed md:text-lg">
            polishing MaaS, rebuilding bits of Neocities-era charm, and wiring this homepage so
            every project has a proper front door.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
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
            <p className="text-muted-foreground mt-2 max-w-sm text-sm leading-relaxed md:text-base">
              {card.description}
            </p>
          </motion.a>
        ))}
      </section>

      <footer className="text-muted-foreground mt-2 flex flex-col gap-2 border-t border-border pt-5 text-sm md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Dade.Studio</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">
            X
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            YouTube
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            GitHub
          </a>
        </div>
      </footer>
    </motion.main>
  );
}
