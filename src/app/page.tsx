import type { Metadata } from "next";
import PrintroomSite from "./printroom-site";
import { faqs, services, studioEmail } from "./studio-content";

const siteUrl = "https://dade.studio";
const title = "Dade Studio | Websites, Graphic Design + Merch Stores";
const description =
  "Websites, graphic design, and merch-store design and setup for small businesses and independent creators. Work directly with Dade on one useful result.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Dade Studio",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/assets/brand/logo-d.png`,
      image: `${siteUrl}/assets/brand/dade-studio-og.png`,
      description,
      email: studioEmail,
      brand: {
        "@type": "Brand",
        name: "RemainFrame",
        url: "https://remainframe.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Dade Studio",
      description,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "ItemList",
      name: "Dade Studio professional services",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          provider: {
            "@id": `${siteUrl}/#organization`,
          },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Dade Studio",
    title,
    description,
    images: [
      {
        url: "/assets/brand/dade-studio-og.png",
        width: 1200,
        height: 630,
        alt: "Dade Studio web design and creative services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/brand/dade-studio-og.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <PrintroomSite />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
