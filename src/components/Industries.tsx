"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContent } from "@/lib/i18n";
import SectionHead from "./SectionHead";

const AUTOPLAY_MS = 3500;

export default function Industries() {
  const c = useContent();
  const track = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".ind-card");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = track.current;
    if (!el) return;
    let visible = false;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(el);
    const id = window.setInterval(() => visible && step(1), AUTOPLAY_MS);
    return () => {
      window.clearInterval(id);
      io.disconnect();
    };
  }, [paused, step]);

  return (
    <section className="sec sec-alt" id="setores">
      <div className="container">
        <div className="ind-head">
          <SectionHead title={c.industries.title} />
          <div className="ind-ctrl" data-rv>
            <button type="button" aria-label={c.a11y.prev} onClick={() => step(-1)}>
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button type="button" aria-label={c.a11y.next} onClick={() => step(1)}>
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        <ul
          className="ind-track"
          ref={track}
          aria-roledescription="carousel"
          aria-label={c.industries.title}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          tabIndex={0}
        >
          {c.industries.items.map((name, i) => (
            <li className="ind-card" key={name} aria-roledescription="slide">
              <span className="ind-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="ind-name">{name}</span>
              <span className="ind-line" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
