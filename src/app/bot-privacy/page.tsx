import type { Metadata } from "next";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import path from "node:path";

type MarkdownBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "list"; items: string[] }
  | { type: "paragraph"; text: string };

export const metadata: Metadata = {
  title: "Bot Privacy Policy | Dade.Studio",
  description:
    "Privacy policy for the Dade.Studio bot, including data collection, retention, and deletion requests.",
};

function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2],
      });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      let listIndex = index;

      while (listIndex < lines.length) {
        const listLine = lines[listIndex].trim();
        if (!listLine.startsWith("- ")) {
          break;
        }
        items.push(listLine.slice(2).trim());
        listIndex += 1;
      }

      blocks.push({ type: "list", items });
      index = listIndex;
      continue;
    }

    const paragraphLines: string[] = [];
    let paragraphIndex = index;

    while (paragraphIndex < lines.length) {
      const paragraphLine = lines[paragraphIndex].trim();
      if (!paragraphLine) {
        break;
      }
      if (paragraphLine.match(/^(#{1,6})\s+/) || paragraphLine.startsWith("- ")) {
        break;
      }
      paragraphLines.push(paragraphLine);
      paragraphIndex += 1;
    }

    blocks.push({
      type: "paragraph",
      text: paragraphLines.join(" "),
    });
    index = paragraphIndex;
  }

  return blocks;
}

function renderInlineMarkdown(text: string) {
  const tokenPattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const matches = [...text.matchAll(tokenPattern)];

  if (matches.length === 0) {
    return text;
  }

  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const [tokenIndex, match] of matches.entries()) {
    const [token] = match;
    const start = match.index ?? 0;

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start));
    }

    if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(<strong key={`strong-${tokenIndex}`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*") && token.endsWith("*")) {
      nodes.push(<em key={`em-${tokenIndex}`}>{token.slice(1, -1)}</em>);
    } else if (token.startsWith("`") && token.endsWith("`")) {
      nodes.push(
        <code
          key={`code-${tokenIndex}`}
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
        >
          {token.slice(1, -1)}
        </code>,
      );
    } else if (token.startsWith("[") && token.includes("](") && token.endsWith(")")) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        const isExternal = href.startsWith("http://") || href.startsWith("https://");
        nodes.push(
          <a
            key={`link-${tokenIndex}`}
            href={href}
            className="underline underline-offset-4 transition-colors hover:text-foreground"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {label}
          </a>,
        );
      } else {
        nodes.push(token);
      }
    } else {
      nodes.push(token);
    }

    lastIndex = start + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function headingClassName(level: number) {
  if (level === 1) return "text-4xl leading-tight tracking-tight md:text-5xl";
  if (level === 2) return "mt-12 text-2xl leading-tight tracking-tight md:text-3xl";
  if (level === 3) return "mt-8 text-xl leading-tight tracking-tight md:text-2xl";
  return "text-lg leading-tight tracking-tight";
}

function renderHeading(level: number, content: React.ReactNode, key: string) {
  if (level <= 2) {
    return (
      <h2 key={key} className={headingClassName(level)}>
        {content}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3 key={key} className={headingClassName(level)}>
        {content}
      </h3>
    );
  }

  if (level === 4) {
    return (
      <h4 key={key} className={headingClassName(level)}>
        {content}
      </h4>
    );
  }

  if (level === 5) {
    return (
      <h5 key={key} className={headingClassName(level)}>
        {content}
      </h5>
    );
  }

  return (
    <h6 key={key} className={headingClassName(level)}>
      {content}
    </h6>
  );
}

export default async function BotPrivacyPage() {
  const markdownPath = path.join(process.cwd(), "content", "bot-privacy.md");
  const markdown = await readFile(markdownPath, "utf8");
  const blocks = parseMarkdownBlocks(markdown);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-10 text-foreground md:px-10 md:py-14">
      <header className="max-w-3xl space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Dade.Studio
        </p>
        <h1 className="text-4xl leading-tight tracking-tight md:text-6xl">Bot Privacy Policy</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Privacy terms for the Dade.Studio Telegram bot.
        </p>
      </header>

      <article className="max-w-3xl space-y-6">
        {blocks.map((block, blockIndex) => {
          if (block.type === "heading") {
            const headingLevel = Math.min(block.level + 1, 6);
            return renderHeading(
              headingLevel,
              renderInlineMarkdown(block.text),
              `heading-${blockIndex}`,
            );
          }

          if (block.type === "list") {
            return (
              <ul
                key={`list-${blockIndex}`}
                className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={`item-${blockIndex}-${itemIndex}`}>{renderInlineMarkdown(item)}</li>
                ))}
              </ul>
            );
          }

          return (
            <p key={`paragraph-${blockIndex}`} className="text-base leading-relaxed text-muted-foreground">
              {renderInlineMarkdown(block.text)}
            </p>
          );
        })}
      </article>

      <footer className="max-w-3xl border-t border-border pt-6 text-sm text-muted-foreground">
        <Link href="/" className="underline underline-offset-4 transition-colors hover:text-foreground">
          Back to dade.studio
        </Link>
      </footer>
    </main>
  );
}
