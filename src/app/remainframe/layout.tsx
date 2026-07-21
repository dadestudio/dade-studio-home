import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "RemainFrame | Custom AI Secretary for Small Business",
    template: "%s | RemainFrame",
  },
  description:
    "RemainFrame is a custom AI assistant built around the way your small business works. Start with one recurring job and no AI experience.",
  applicationName: "RemainFrame",
  authors: [{ name: "Dade.Studio", url: "/remainframe/about" }],
  creator: "Dade.Studio",
  publisher: "Dade.Studio",
  category: "technology",
  alternates: { canonical: "/remainframe" },
  openGraph: {
    type: "website",
    siteName: "RemainFrame",
    locale: "en_US",
    url: "/remainframe",
    title: "RemainFrame | Custom AI Secretary for Small Business",
    description:
      "A custom AI assistant for follow-ups, recurring updates, research, and the work that keeps piling up.",
    images: [
      {
        url: "/remainframe/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RemainFrame, a custom AI secretary for the work that keeps piling up",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RemainFrame | Custom AI Secretary for Small Business",
    description:
      "A custom AI assistant for follow-ups, recurring updates, research, and the work that keeps piling up.",
    images: ["/remainframe/twitter-image"],
  },
};

export default function RemainFrameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
