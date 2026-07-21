import type { Metadata } from "next";

export const SITE_ORIGIN = "https://dade.studio";
export const REMAINFRAME_ROOT = "/remainframe";
export const LEGAL_EFFECTIVE_DATE = "July 20, 2026";
export const LEGAL_CONTACT = "hello@dade.studio";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  noIndex = false,
}: PageMetadata): Metadata {
  const fullTitle = `${title} | RemainFrame`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      siteName: "RemainFrame",
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
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
      title: fullTitle,
      description,
      images: ["/remainframe/twitter-image"],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_ORIGIN).toString();
}
