"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./printroom.module.css";

const navigation = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#shop", label: "Shop" },
  { href: "#remainframe", label: "RemainFrame" },
] as const;

export default function SiteHeader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const openMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const closeMenu = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  return (
    <header className={styles.siteHeader}>
      <div className={styles.navShell}>
        <Link className={styles.brand} href="/" aria-label="Dade Studio home">
          <Image
            className={styles.brandMark}
            src="/assets/brand/logo-d.png"
            alt=""
            width={34}
            height={34}
            sizes="34px"
            priority
          />
          <span className={styles.brandText}>Dade.Studio</span>
        </Link>

        <nav className={styles.navLinks} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.navTail}>
          <Link className={styles.navCta} href="#contact">
            <span className={styles.navCtaLabel}>Start a project</span>
            <span className={styles.navCtaLabelShort} aria-hidden="true">Project</span>
            <span aria-hidden="true">↘</span>
          </Link>
          <button
            className={styles.menuButton}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="site-menu"
            onClick={openMenu}
            ref={menuButtonRef}
          >
            <span className={styles.srOnly}>Open site menu</span>
            <span aria-hidden="true">Menu</span>
          </button>
        </div>
      </div>

      <dialog
        className={styles.menuDialog}
        id="site-menu"
        aria-labelledby="site-menu-title"
        ref={dialogRef}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClose={(event) => {
          // A queued close event must not undo a menu that was already reopened.
          if (event.currentTarget.open) return;
          document.body.style.overflow = "";
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeMenu();
          }
        }}
      >
        <div className={styles.menuPanel}>
          <div className={styles.menuHead}>
            <span id="site-menu-title">Navigate Dade.Studio</span>
            <button type="button" onClick={closeMenu}>
              Close
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav className={styles.menuNav} aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href} onClick={closeMenu}>
                <span>{item.label}</span>
                <span aria-hidden="true">↘</span>
              </Link>
            ))}
          </nav>
          <Link className={styles.menuCta} href="#contact" onClick={closeMenu}>
            Start a project
            <span aria-hidden="true">↘</span>
          </Link>
        </div>
      </dialog>
    </header>
  );
}
