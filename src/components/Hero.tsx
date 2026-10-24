"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useContent } from "@/lib/i18n";

export default function Hero() {
  const c = useContent();

  return (
    <section className="hero" aria-label={c.a11y.hero}>
      <div className="hero-bg">
        <Image
          src="/hero.jpg"
          alt={c.a11y.heroImage}
          fill
          priority
          quality={80}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 38%" }}
        />
      </div>

      <div className="hero-body">
        <div className="container hero-in">
          <div className="hero-accent" />
          <h1>{c.hero.title}</h1>
          <p className="hero-sub">{c.hero.sub}</p>
          <div className="hero-btns">
            <a href="#contato" className="btn btn-g">
              {c.hero.ctaPrimary}
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
            <a href="#solucoes" className="btn btn-o">
              {c.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
