import type { ResourceArticle } from "../resource-data";
import { articleResources, getResourcePath, resourcesPath } from "../resource-data";
import { absoluteUrl } from "../../../_lib/metadata";

const remainFrameUrl = absoluteUrl("/remainframe");
const resourcesUrl = absoluteUrl(resourcesPath);
const socialImageUrl = absoluteUrl("/remainframe/opengraph-image");

interface StructuredDataProps {
  readonly data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function breadcrumbList(resource?: ResourceArticle) {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "RemainFrame",
      item: remainFrameUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resources",
      item: resourcesUrl,
    },
  ];

  if (resource) {
    itemListElement.push({
      "@type": "ListItem",
      position: 3,
      name: resource.shortTitle,
      item: absoluteUrl(getResourcePath(resource.slug)),
    });
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function createArticleStructuredData(resource: ResourceArticle) {
  const articleUrl = absoluteUrl(getResourcePath(resource.slug));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: resource.title,
        description: resource.description,
        datePublished: resource.publishedDate,
        dateModified: resource.updatedDate,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        author: {
          "@type": "Organization",
          name: "Dade.Studio",
          url: "https://dade.studio",
        },
        publisher: {
          "@type": "Organization",
          name: "Dade.Studio",
          url: "https://dade.studio",
        },
        image: socialImageUrl,
        isPartOf: {
          "@type": "CollectionPage",
          "@id": `${resourcesUrl}#collection`,
          name: "RemainFrame Resources",
        },
        keywords: resource.keywords.join(", "),
      },
      breadcrumbList(resource),
    ],
  };
}

export function createResourcesStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${resourcesUrl}#collection`,
        url: resourcesUrl,
        name: "RemainFrame Resources",
        description:
          "Plain-language guides to AI continuity, ownership, memory, permissions, and human control.",
        isPartOf: {
          "@type": "WebSite",
          name: "RemainFrame",
          url: remainFrameUrl,
        },
        hasPart: articleResources.map((resource) => ({
          "@type": "Article",
          "@id": `${absoluteUrl(getResourcePath(resource.slug))}#article`,
          headline: resource.title,
          url: absoluteUrl(getResourcePath(resource.slug)),
        })),
      },
      breadcrumbList(),
    ],
  };
}
