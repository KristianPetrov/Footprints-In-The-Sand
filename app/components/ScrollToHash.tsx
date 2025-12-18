"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}




