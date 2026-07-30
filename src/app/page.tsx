import type { Metadata } from "next";
import PrintroomSite from "./printroom-site";

const siteUrl = "https://dade.studio";
const title = "Dade Studio | Web Design for Small Businesses";
const description =
  "Dade Studio designs and builds clear, distinctive small-business websites, with branding and practical digital tools when the work needs more than a site.";

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
      email: "dade@remainframe.com",
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
      itemListElement: [
        "Web design and website builds",
        "Branding and graphic design",
        "Tailored digital tools and workflows",
        "Coaching and teaching",
        "Practical marketing support",
        "Merchandise and product design",
      ].map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name,
          provider: {
            "@id": `${siteUrl}/#organization`,
          },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What can I hire you for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Websites, branding, graphic design, tailored tools and workflows, coaching, product design, and practical marketing support.",
          },
        },
        {
          "@type": "Question",
          name: "Can we start small?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A focused project is often the best place to start. We can solve the immediate need first and expand only when it makes sense.",
          },
        },
        {
          "@type": "Question",
          name: "Is RemainFrame part of Dade Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. RemainFrame is Dade Studio's dedicated custom AI secretary service for recurring small-business work.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to know exactly what I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Share the problem, idea, or unfinished piece, and Dade Studio will help identify the most useful first step.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Studio Shop a real store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The products shown are real and available to order through the Studio Shop. Fourthwall handles checkout and fulfillment.",
          },
        },
      ],
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
