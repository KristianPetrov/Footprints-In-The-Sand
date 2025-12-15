"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "#program", label: "Programs" },
  { href: "#treatment", label: "What We Treat" },
  { href: "#mission", label: "Mission" },
  { href: "#care", label: "Care Journey" },
  { href: "/team", label: "Our Team" },
];

export function HeroNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const getHref = (href: string) => {
    // If it's an anchor link and we're not on the home page, prepend "/"
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }
    return href;
  };

  return (
    <nav className="hero-nav">
      <div className="hero-nav__inner">
        <div className="hero-nav__topline">
          <Link href="/" className="hero-nav__brand" onClick={closeMenu}>
            Footprints In The Sand
            <span>Recovery Center</span>
          </Link>
          <button
            type="button"
            className={`hero-nav__hamburger ${isOpen ? "is-active" : ""}`}
            aria-label="Toggle navigation menu"
            aria-controls="hero-nav-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          id="hero-nav-menu"
          className={`hero-nav__menus ${isOpen ? "is-open" : ""}`}
        >
          <div className="hero-nav__links">
            {navItems.map((item) => (
              <Link key={item.href} href={getHref(item.href)} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href={getHref("#intake")} className="hero-nav__cta" onClick={closeMenu}>
            Start Intake
          </Link>
        </div>
      </div>
    </nav>
  );
}




