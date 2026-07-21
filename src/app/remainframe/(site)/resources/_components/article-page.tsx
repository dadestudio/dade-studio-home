import Link from "next/link";
import type { ReactNode } from "react";
import {
  articleResources,
  getResourcePath,
  resourcesPath,
  type ResourceArticle,
} from "../resource-data";
import styles from "../resources.module.css";

interface TableOfContentsItem {
  readonly id: string;
  readonly label: string;
}

interface ArticlePageProps {
  readonly resource: ResourceArticle;
  readonly tableOfContents: readonly TableOfContentsItem[];
  readonly quickAnswer: readonly string[];
  readonly children: ReactNode;
}

export function ArticlePage({
  resource,
  tableOfContents,
  quickAnswer,
  children,
}: ArticlePageProps) {
  const relatedResources = articleResources.filter(
    (candidate) => candidate.slug !== resource.slug,
  );

  return (
    <>
      <main className={styles.articlePage} id="main-content" tabIndex={-1}>
        <header className={styles.articleHero} aria-labelledby="article-title">
          <div className={styles.articleHeroGrid} aria-hidden="true" />

          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/remainframe">RemainFrame</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={resourcesPath}>Resources</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{resource.category}</li>
            </ol>
          </nav>

          <div className={styles.articleHeroCopy}>
            <p className={styles.articleIndex}>
              RF / {resource.number} / {resource.category}
            </p>
            <h1 id="article-title">{resource.title}</h1>
            <p className={styles.articleDek}>{resource.description}</p>
          </div>

          <dl className={styles.articleMeta}>
            <div>
              <dt>Published</dt>
              <dd>
                <time dateTime={resource.publishedDate}>{resource.displayDate}</time>
              </dd>
            </div>
            <div>
              <dt>Reading time</dt>
              <dd>{resource.readingTime}</dd>
            </div>
            <div>
              <dt>Filed under</dt>
              <dd>{resource.category}</dd>
            </div>
          </dl>
        </header>

        <div className={styles.articleFrame}>
          <aside className={styles.articleRail} aria-label="On this page">
            <div className={styles.articleRailInner}>
              <p className={styles.railLabel}>On this page</p>
              <ol>
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className={styles.articleBody} id="article-body">
            <section className={styles.quickAnswer} aria-labelledby="quick-answer-title">
              <p>Start here</p>
              <h2 id="quick-answer-title">The short answer</h2>
              <ul>
                {quickAnswer.map((answer) => (
                  <li key={answer}>{answer}</li>
                ))}
              </ul>
            </section>

            {children}
          </article>
        </div>

        <section className={styles.relatedSection} aria-labelledby="related-title">
          <div className={styles.relatedHeading}>
            <p>Continue reading</p>
            <h2 id="related-title">The system around the answer.</h2>
          </div>
          <div className={styles.relatedGrid}>
            {relatedResources.map((related) => (
              <Link
                className={styles.relatedCard}
                href={getResourcePath(related.slug)}
                key={related.slug}
              >
                <span className={styles.relatedNumber}>{related.number}</span>
                <span className={styles.relatedCategory}>{related.category}</span>
                <h3>{related.shortTitle}</h3>
                <span className={styles.textLink}>
                  Read the guide <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.articleClose} aria-labelledby="article-close-title">
          <p>RemainFrame</p>
          <h2 id="article-close-title">Start with the work that keeps piling up.</h2>
          <p>
            RemainFrame is a custom AI secretary for recurring business work.
            Start with one useful job, review the result, and expand only when it helps.
          </p>
          <Link href={`/remainframe/start?source=resource-${resource.slug}`}>
            Start with one task <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    </>
  );
}
