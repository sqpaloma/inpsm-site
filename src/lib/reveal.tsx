"use client";

import { useEffect, type CSSProperties, type ReactNode } from "react";

/**
 * Observes every element marked with `data-rv` and adds the `in` class
 * the first time it scrolls into view. The CSS in globals.css handles the
 * fade/slide transition; stagger via the `--rv-d` custom property.
 */
export function RevealRoot({ children }: { children: ReactNode }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-rv]"));
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <>{children}</>;
}

/** Inline style that staggers a revealed element by `index * step` ms. */
export function delay(index: number, step = 90): CSSProperties {
  return { "--rv-d": `${index * step}ms` } as CSSProperties;
}
