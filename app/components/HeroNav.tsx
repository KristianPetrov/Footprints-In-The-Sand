"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#program", label: "Programs" },
  { href: "#treatment", label: "What We Treat" },
  { href: "#mission", label: "Mission" },
  { href: "#care", label: "Care Journey" },
];

export function HeroNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

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
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="mailto:care@footprintsinthesand.org"
            className="hero-nav__cta"
            onClick={closeMenu}
          >
            Email Intake
          </a>
        </div>
      </div>
    </nav>
  );
}
