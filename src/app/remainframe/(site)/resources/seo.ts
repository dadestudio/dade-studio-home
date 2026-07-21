import type { Metadata } from "next";
import { pageMetadata } from "../../_lib/metadata";
import type { ResourceArticle } from "./resource-data";
import { getResourcePath, resourcesPath } from "./resource-data";

export const resourcesMetadata: Metadata = {
  ...pageMetadata({
    title: "Small Business AI Guides",
    description:
      "Plain-language small-business guides to AI memory, chat history, permissions, human approval, and keeping control of recurring work.",
    path: resourcesPath,
  }),
  keywords: [
    "small business AI",
    "custom AI assistant",
    "AI memory",
    "user-owned AI",
    "AI agent permissions",
  ],
};

export function createArticleMetadata(resource: ResourceArticle): Metadata {
  return {
    ...pageMetadata({
      title: resource.metadataTitle,
      description: resource.description,
      path: getResourcePath(resource.slug),
      type: "article",
    }),
    keywords: [...resource.keywords],
    authors: [{ name: "Dade.Studio", url: "/remainframe/about" }],
  };
}
