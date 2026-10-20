"use client";

import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative flex items-end overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: "url('/hero.png')", backgroundPosition: "center 38%" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(7,31,64,0.12) 0%, rgba(7,31,64,0.94) 82%),
              linear-gradient(90deg, rgba(7,31,64,0.82) 0%, rgba(7,31,64,0.08) 72%)
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1120px] mx-auto px-4 pt-44 pb-[4.5rem]">
        {/* Green accent line */}
        <div className="w-12 h-0.5 mb-7" style={{ background: "var(--green)" }} />

        <h1
          className="max-w-[680px] font-light text-white leading-[1.08] tracking-[-0.03em] animate-[heroIn_0.9s_cubic-bezier(0.22,1,0.36,1)_both]"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 3.75rem)",
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
          }}
        >
          {t("hero.title.1")}
          <br />
          {t("hero.title.2")}
        </h1>

        <p
          className="max-w-[440px] text-white/60 font-light mt-5 leading-[1.65]"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.12rem)" }}
        >
          {t("hero.sub")}
        </p>

        <div className="flex gap-3.5 mt-10 flex-wrap">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-[5px] transition-colors hover:brightness-90"
            style={{
              background: "var(--green)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
            }}
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-[5px] border border-white/[0.22] transition-colors hover:border-white/45 bg-transparent"
            style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
          >
            {t("hero.cta2")}
          </a>
        </div>

        <p
          className="mt-14 text-white/[0.22] text-[0.68rem] font-medium uppercase tracking-[0.14em]"
          style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
        >
          Optimized Process &middot; Safe Operations
        </p>
      </div>
    </section>
  );
}
