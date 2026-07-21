import Link from "next/link";
import styles from "../site.module.css";

const primaryNavigation = [
  { href: "/remainframe/how-it-works", label: "How it works" },
  { href: "/remainframe/capabilities", label: "What it can do" },
  { href: "/remainframe/use-cases", label: "Examples" },
  { href: "/remainframe/security", label: "Security" },
  { href: "/remainframe/resources", label: "Resources" },
] as const;

const legalNavigation = [
  { href: "/remainframe/legal/privacy", label: "Privacy" },
  { href: "/remainframe/legal/terms", label: "Website terms" },
  { href: "/remainframe/legal/service-terms", label: "Service terms" },
  { href: "/remainframe/legal/acceptable-use", label: "Acceptable use" },
  { href: "/remainframe/legal/subprocessors", label: "Subprocessors" },
  { href: "/remainframe/legal/cookies", label: "Cookies and storage" },
  { href: "/remainframe/legal/accessibility", label: "Accessibility" },
  { href: "/remainframe/legal/data-processing-addendum", label: "Data processing addendum" },
] as const;

export function SiteHeader() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <header className={styles.siteHeader}>
        <div className={styles.headerInner}>
          <Link className={styles.wordmark} href="/remainframe" aria-label="RemainFrame home">
            Remain<span>Frame</span>
          </Link>
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {primaryNavigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            className={styles.headerCta}
            href="/remainframe/start?source=header"
            aria-label="Start with one task"
          >
            <span className={styles.desktopCtaText}>Start with one task</span>
            <span className={styles.mobileCtaText}>Start</span>
          </Link>
          <details className={styles.mobileMenu}>
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {primaryNavigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/remainframe/faq">FAQ</Link>
              <Link href="/remainframe/about">About</Link>
              <Link href="/remainframe/start?source=mobile-menu">Start with one task</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerGrid}>
        <div className={styles.footerLead}>
          <Link className={styles.wordmark} href="/remainframe">
            Remain<span>Frame</span>
          </Link>
          <p>A custom AI secretary built around your business.</p>
          <p className={styles.footerFine}>
              RemainFrame is a product operated by Dade.Studio in Pagosa Springs, Colorado.
          </p>
        </div>
        <nav aria-label="Product links">
          <h2>Product</h2>
          {primaryNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/remainframe/faq">FAQ</Link>
          <Link href="/remainframe/about">About</Link>
        </nav>
        <nav aria-label="Start and contact links">
          <h2>Get started</h2>
          <Link href="/remainframe/start?source=footer">Tell me what takes too much time</Link>
          <a href="mailto:hello@dade.studio?subject=RemainFrame%20question">Contact</a>
          <Link href="/remainframe/legal">Legal center</Link>
        </nav>
        <nav aria-label="Legal links">
          <h2>Legal</h2>
          {legalNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2026 Dade.Studio. RemainFrame is a product and operating name.</p>
        <p>Custom setup. One useful job first.</p>
      </div>
    </footer>
  );
}
