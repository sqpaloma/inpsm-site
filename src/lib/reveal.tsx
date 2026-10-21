"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

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

/** Animates a number from 0 to `to` when it enters the viewport. */
export function CountUp({
  to,
  suffix,
  duration = 1500,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setValue(to);
      return;
    }

    setValue(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(eased * to));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix ? <span className="plus">{suffix}</span> : null}
    </span>
  );
}
