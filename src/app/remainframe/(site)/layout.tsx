import { SiteFooter, SiteHeader } from "../_components/site-shell";
import styles from "../site.module.css";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.site}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
