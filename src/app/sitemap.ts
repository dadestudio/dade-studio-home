import type { MetadataRoute } from "next";

const routes = [
  "",
  "/remainframe",
  "/remainframe/how-it-works",
  "/remainframe/capabilities",
  "/remainframe/use-cases",
  "/remainframe/security",
  "/remainframe/proof/continuity-check",
  "/remainframe/resources",
  "/remainframe/resources/ai-memory-vs-chat-history",
  "/remainframe/resources/user-owned-ai",
  "/remainframe/resources/ai-agent-permissions-human-approval",
  "/remainframe/about",
  "/remainframe/faq",
  "/remainframe/start",
  "/remainframe/legal",
  "/remainframe/legal/privacy",
  "/remainframe/legal/terms",
  "/remainframe/legal/service-terms",
  "/remainframe/legal/acceptable-use",
  "/remainframe/legal/subprocessors",
  "/remainframe/legal/cookies",
  "/remainframe/legal/accessibility",
  "/remainframe/legal/data-processing-addendum",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://dade.studio${route || "/"}`,
    changeFrequency: route === "/remainframe" ? "weekly" : "monthly",
    priority: route === "/remainframe" ? 1 : route === "" ? 0.8 : 0.7,
  }));
}
