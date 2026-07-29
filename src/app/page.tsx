import type { Metadata } from "next";
import PrintroomSite from "./printroom-site";

const description =
  "Branding, graphic design, merch and product design, websites, tailored digital tools, coaching, and practical marketing support.";

export const metadata: Metadata = {
  title: {
    absolute: "Dade Studio | Creative work, made useful",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Dade Studio",
    title: "Dade Studio | Creative work, made useful",
    description,
    images: [
      {
        url: "/assets/brand/dade-studio-og.png",
        width: 1200,
        height: 630,
        alt: "Dade Studio Printroom brand artwork with an original merch design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dade Studio | Creative work, made useful",
    description,
    images: ["/assets/brand/dade-studio-og.png"],
  },
};

export default function HomePage() {
  return <PrintroomSite />;
}
