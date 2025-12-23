"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";

const navItems = [
  { href: "/getting-started", label: "Getting Started" },
  { href: "/addiction-treatment", label: "Addiction Treatment" },
  { href: "/team", label: "Our Team" },
];

const treatmentApproachMenu = [
  {
    title: "Treatment",
    items: [
      { href: "/treatment-approach/cbt", label: "Cognitive Behavioral Therapy" },
      { href: "/treatment-approach/dbt", label: "Dialectical Behavioral Therapy" },
      { href: "/treatment-approach/family-therapy", label: "Family Therapy" },
      { href: "/treatment-approach/group-therapy", label: "Group Therapy" },
      { href: "/treatment-approach/individual-therapy", label: "Individual Therapy" },
    ],
  },
  {
    title: "Mental Health",
    items: [
      { href: "/mental-health/anxiety-disorder", label: "Anxiety Disorder" },
      { href: "/mental-health/bipolar-disorders", label: "Bipolar Disorders" },
      { href: "/mental-health/borderline-personality-disorders", label: "Borderline Personality Disorders" },
      { href: "/mental-health/depression-and-mood-disorders", label: "Depression & Mood Disorders" },
      { href: "/mental-health/ptsd", label: "PTSD" },
      { href: "/mental-health/trauma", label: "Trauma" },
    ],
  },
  {
    title: "Substance Abuse",
    items: [
      { href: "/substance-abuse/alcohol-addiction", label: "Alcohol Addiction" },
      { href: "/substance-abuse/fentanyl-addiction", label: "Fentanyl Addiction" },
      { href: "/substance-abuse/heroin-addiction", label: "Heroin Addiction" },
      { href: "/substance-abuse/opiate-addiction", label: "Opiate Addiction" },
      { href: "/substance-abuse/xanax-addiction", label: "Xanax Addiction" },
      { href: "/substance-abuse/benzodiazepine-addiction", label: "Benzodiazepine Addiction" },
      { href: "/substance-abuse/cocaine-addiction", label: "Cocaine Addiction" },
      { href: "/substance-abuse/marijuana-addiction", label: "Marijuana Addiction" },
      { href: "/substance-abuse/methamphetamine-addiction", label: "Methamphetamine Addiction" },
    ],
  },
];

export function HeroNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);
  const [treatmentPanelStyle, setTreatmentPanelStyle] = useState<
    React.CSSProperties | undefined
  >(undefined);
  const pathname = usePathname();
  const dropdownId = useId();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setIsTreatmentOpen(false);
  };

  const closeTreatment = () => setIsTreatmentOpen(false);

  const handleNavigate = () => {
    closeMenu();
  };

  const getHref = (href: string) => {
    // If it's an anchor link and we're not on the home page, prepend "/"
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }
    return href;
  };

  const menuButtonLabel = useMemo(() => {
    // Keeps the label stable for screen readers (and gives us a single place to rename it later).
    return "Treatment Approach";
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (!dropdownRef.current?.contains(target)) {
        closeTreatment();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeTreatment();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isTreatmentOpen) {
      setTreatmentPanelStyle(undefined);
      return;
    }

    const updatePosition = () => {
      // On mobile we intentionally use the "accordion" style dropdown (static positioning).
      if (window.matchMedia("(max-width: 768px)").matches) {
        setTreatmentPanelStyle(undefined);
        return;
      }

      const button = dropdownButtonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const margin = 16; // keep a safe gutter to avoid touching the viewport edge
      const maxWidth = 920;
      const width = Math.min(maxWidth, window.innerWidth - margin * 2);
      const top = rect.bottom + 14;

      let left = rect.left + rect.width / 2 - width / 2;
      left = Math.max(margin, Math.min(left, window.innerWidth - margin - width));

      setTreatmentPanelStyle({
        position: "fixed",
        top,
        left,
        width,
        transform: "none",
      });
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    // Capture scroll events from any scroll container so we stay aligned if layouts shift.
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isTreatmentOpen]);

  return (
    <nav className="hero-nav">
      <div className="hero-nav__inner">
        <div className="hero-nav__topline">
          <Link href="/" className="hero-nav__brand" onClick={closeMenu}>
            Footprints In The Sand
            <span>2 Recovery</span>
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
            {navItems.slice(0, 2).map((item) => (
              <Link key={item.href} href={getHref(item.href)} onClick={handleNavigate}>
                {item.label}
              </Link>
            ))}

            <div
              ref={dropdownRef}
              className={`hero-nav__dropdown ${isTreatmentOpen ? "is-open" : ""}`}
            >
              <button
                ref={dropdownButtonRef}
                type="button"
                className="hero-nav__dropdownButton"
                aria-haspopup="menu"
                aria-expanded={isTreatmentOpen}
                aria-controls={dropdownId}
                onClick={() => setIsTreatmentOpen((prev) => !prev)}
              >
                {menuButtonLabel}
                <span className="hero-nav__chevron" aria-hidden="true" />
              </button>

              <div
                id={dropdownId}
                className="hero-nav__dropdownPanel"
                role="menu"
                style={treatmentPanelStyle}
              >
                <div className="hero-nav__dropdownGrid">
                  {treatmentApproachMenu.map((section) => (
                    <div key={section.title} className="hero-nav__dropdownSection">
                      <p className="hero-nav__dropdownTitle">{section.title}</p>
                      <div className="hero-nav__dropdownLinks" role="none">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="hero-nav__dropdownLink"
                            onClick={handleNavigate}
                            role="menuitem"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link key={item.href} href={getHref(item.href)} onClick={handleNavigate}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href={getHref("#intake")} className="hero-nav__cta" onClick={handleNavigate}>
            Start Intake
          </Link>
        </div>
      </div>
    </nav>
  );
}



