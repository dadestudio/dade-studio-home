"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./printroom.module.css";

const navigation = [
  { href: "#remainframe", label: "RemainFrame" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#shop", label: "Shop" },
] as const;

export default function SiteHeader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
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
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.navTail}>
          <a className={styles.navCta} href="#contact">
            <span className={styles.navCtaLabel}>Start a project</span>
            <span className={styles.navCtaLabelShort}>Project</span>
            <span aria-hidden="true">↘</span>
          </a>
          <button
            className={styles.menuButton}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="site-menu"
            onClick={() => setIsOpen(true)}
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
        onClose={() => {
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
              <a href={item.href} key={item.href} onClick={closeMenu}>
                <span>{item.label}</span>
                <span aria-hidden="true">↘</span>
              </a>
            ))}
          </nav>
          <a className={styles.menuCta} href="#contact" onClick={closeMenu}>
            Start a website project
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </dialog>
    </header>
  );
}
