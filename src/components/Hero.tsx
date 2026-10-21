"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero" aria-label="Apresentação">
      <div className="hero-bg">
        <Image
          src="/hero.jpg"
          alt="Planta industrial ao entardecer"
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
          <h1>
            {t("hero.title.1")}
            <br />
            {t("hero.title.2")}
          </h1>
          <p className="hero-sub">{t("hero.sub")}</p>
          <div className="hero-btns">
            <a href="#contato" className="btn btn-g">
              {t("hero.cta1")}
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
            <a href="#solucoes" className="btn btn-o">
              {t("hero.cta2")}
            </a>
          </div>
          <p className="hero-tag">
            <span>Optimized Process</span>
            <span className="sep" aria-hidden="true" />
            <span>Safe Operations</span>
          </p>
        </div>
      </div>
    </section>
  );
}
