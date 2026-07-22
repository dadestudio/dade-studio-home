import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Website Directions — Dade.Studio",
    template: "%s — Dade.Studio",
  },
  description:
    "Three working website directions for Dade.Studio, centered on web design and RemainFrame.",
  alternates: {
    canonical: null,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConceptsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
