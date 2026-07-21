import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData, createResourcesStructuredData } from "./_components/structured-data";
import { articleResources, getResourcePath } from "./resource-data";
import styles from "./resources.module.css";
import { resourcesMetadata } from "./seo";

export const metadata: Metadata = resourcesMetadata;

const principles = [
  {
    number: "01",
    title: "Useful before promotional",
    copy: "Each guide should help you make a better decision even if RemainFrame is not the product you choose.",
  },
  {
    number: "02",
    title: "Plain about tradeoffs",
    copy: "Memory, ownership, and agent access all create benefits and responsibilities. We name both.",
  },
  {
    number: "03",
    title: "Current means current",
    copy: "We separate what can be configured now from broader connections and self-service features that are not available.",
  },
] as const;

export default function ResourcesPage() {
  return (
    <>
      <StructuredData data={createResourcesStructuredData()} />
      <main className={styles.resourcesPage} id="main-content" tabIndex={-1}>
        <header className={styles.resourcesHero} aria-labelledby="resources-title">
          <div className={styles.resourcesHeroGrid} aria-hidden="true" />
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/remainframe">RemainFrame</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Resources</li>
            </ol>
          </nav>

          <div className={styles.resourcesHeroCopy}>
            <p className={styles.articleIndex}>RF / Field notes / 001-003</p>
            <h1 id="resources-title">
              Plain-language guides for
              <em> useful AI work.</em>
            </h1>
            <p>
              Practical explanations of memory, permissions, human review, and
              the questions worth asking before AI handles work for your business.
            </p>
          </div>

          <div className={styles.resourcesHeroNote}>
            <span>Memory</span>
            <span>Ownership</span>
            <span>Permissions</span>
          </div>
        </header>

        <section
          className={styles.resourceLibrary}
          id="resource-library"
          aria-labelledby="library-title"
        >
          <div className={styles.libraryHeading}>
            <p>Field notes</p>
            <h2 id="library-title">Understand the parts that affect your business.</h2>
          </div>

          <div className={styles.resourceList}>
            {articleResources.map((resource) => (
              <article className={styles.resourceCard} key={resource.slug}>
                <div className={styles.resourceCardTopline}>
                  <span>{resource.number}</span>
                  <span>{resource.category}</span>
                  <span>{resource.readingTime}</span>
                </div>
                <h3>
                  <Link href={getResourcePath(resource.slug)}>{resource.title}</Link>
                </h3>
                <p>{resource.description}</p>
                <Link className={styles.resourceCardLink} href={getResourcePath(resource.slug)}>
                  Read the guide <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.editorialPromise} aria-labelledby="promise-title">
          <div className={styles.promiseHeading}>
            <p>How we write</p>
            <h2 id="promise-title">No borrowed certainty.</h2>
          </div>
          <ol>
            {principles.map((principle) => (
              <li key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.statusBand} aria-labelledby="status-title">
          <p>Start with one useful job</p>
          <div>
            <h2 id="status-title">Ask for the result you want.</h2>
            <p>
              RemainFrame can help turn repeatable work into reusable skills and work
              with specific tools configured for your setup. More involved connections
              and custom business tools are designed, built, and tested for you.
            </p>
          </div>
          <Link href="/remainframe/start?source=resources-index">
            Start with one task <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    </>
  );
}
