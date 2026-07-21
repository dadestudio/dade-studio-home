import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archived Concept 02 | Pick Up Where You Left Off",
  description:
    "An archived RemainFrame design concept. See the canonical site for current product, capability, pricing, and legal information.",
  robots: { index: false, follow: false },
};

export default function ConceptLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
