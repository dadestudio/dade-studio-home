export type ResourceSlug =
  | "ai-memory-vs-chat-history"
  | "user-owned-ai"
  | "ai-agent-permissions-human-approval";

export interface ResourceArticle {
  readonly slug: ResourceSlug;
  readonly number: string;
  readonly category: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly metadataTitle: string;
  readonly description: string;
  readonly readingTime: string;
  readonly publishedDate: string;
  readonly updatedDate: string;
  readonly displayDate: string;
  readonly keywords: readonly string[];
}

export const articleResources = [
  {
    slug: "ai-memory-vs-chat-history",
    number: "01",
    category: "Continuity",
    title: "AI memory vs. chat history: what actually carries context forward",
    shortTitle: "AI memory vs. chat history",
    metadataTitle: "AI Memory vs. Chat History",
    description:
      "Chat history stores past conversations. AI memory selects and retrieves useful context for future work. Learn the difference, the tradeoffs, and what to look for.",
    readingTime: "8 minute read",
    publishedDate: "2026-07-20",
    updatedDate: "2026-07-20",
    displayDate: "July 20, 2026",
    keywords: [
      "AI memory",
      "chat history",
      "persistent AI context",
      "AI continuity",
      "context window",
    ],
  },
  {
    slug: "user-owned-ai",
    number: "02",
    category: "Ownership",
    title: "What user-owned AI actually means",
    shortTitle: "What user-owned AI means",
    metadataTitle: "What User-Owned AI Means",
    description:
      "User-owned AI is more than a privacy setting. It means meaningful control over context, permissions, providers, portability, and the ability to leave.",
    readingTime: "9 minute read",
    publishedDate: "2026-07-20",
    updatedDate: "2026-07-20",
    displayDate: "July 20, 2026",
    keywords: [
      "user-owned AI",
      "AI data ownership",
      "portable AI memory",
      "AI provider choice",
      "AI control",
    ],
  },
  {
    slug: "ai-agent-permissions-human-approval",
    number: "03",
    category: "Control",
    title: "AI agent permissions: where human approval belongs",
    shortTitle: "AI agent permissions and approval",
    metadataTitle: "AI Agent Permissions and Human Approval",
    description:
      "A practical guide to AI agent permissions, least privilege, approval checkpoints, revocation, and keeping people in control of high-impact actions.",
    readingTime: "10 minute read",
    publishedDate: "2026-07-20",
    updatedDate: "2026-07-20",
    displayDate: "July 20, 2026",
    keywords: [
      "AI agent permissions",
      "human in the loop AI",
      "AI approval workflows",
      "least privilege AI",
      "AI tool access",
    ],
  },
] as const satisfies readonly ResourceArticle[];

export const resourceBySlug = Object.fromEntries(
  articleResources.map((resource) => [resource.slug, resource]),
) as Record<ResourceSlug, (typeof articleResources)[number]>;

export const resourcesPath = "/remainframe/resources";

export function getResourcePath(slug: ResourceSlug) {
  return `${resourcesPath}/${slug}`;
}
