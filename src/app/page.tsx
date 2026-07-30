import type { Metadata } from "next";
import PrintroomSite from "./printroom-site";

const description =
  "Dade Studio designs and builds focused websites for small businesses, with branding, graphic design, tailored tools, coaching, product design, and practical marketing support.";

export const metadata: Metadata = {
  title: {
    absolute: "Dade Studio | Websites and practical creative work",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Dade Studio",
    title: "Dade Studio | Websites and practical creative work",
    description,
    images: [
      {
        url: "/assets/brand/dade-studio-og.png",
        width: 1200,
        height: 630,
        alt: "Dade Studio creative and digital services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dade Studio | Websites and practical creative work",
    description,
    images: ["/assets/brand/dade-studio-og.png"],
  },
};

export default function HomePage() {
  return <PrintroomSite />;
}
