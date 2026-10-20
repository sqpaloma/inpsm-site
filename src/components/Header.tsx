"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const { lang, t, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", key: "nav.about" },
    { href: "#solucoes", key: "nav.solutions" },
    { href: "#treinamentos", key: "nav.training" },
    { href: "#setores", key: "nav.industries" },
  ];

  return (
    <>
      <header
        id="topo"
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_24px_rgba(0,0,0,0.35)]" : ""
        }`}
        style={{ background: "var(--navy)" }}
      >
        <div className="flex items-center justify-between max-w-[1120px] mx-auto px-4 py-3.5">
          <a href="#topo">
            <Image src="/logo.svg" alt="IN Process Safety" width={120} height={38} style={{ height: 38, width: "auto" }} priority />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-white/55 hover:text-white transition-colors text-sm font-medium tracking-[0.01em]"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              >
                {t(link.key)}
              </a>
            ))}

            {/* Language toggle */}
            <div className="flex items-center rounded overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
              <button
                className={`lang-btn ${lang === "pt" ? "active" : ""}`}
                onClick={() => setLang("pt")}
              >
                PT
              </button>
              <button
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>

            <a
              href="#contato"
              className="text-white text-sm font-semibold px-4 py-2 rounded-[5px] transition-colors hover:brightness-90"
              style={{
                background: "var(--green)",
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
              }}
            >
              {t("nav.cta")}
            </a>
          </nav>

          {/* Burger */}
          <button
            className="md:hidden p-1.5 bg-transparent border-none cursor-pointer"
            aria-label="Menu"
            onClick={() => setMobileOpen(true)}
          >
            <span className="block w-[22px] h-0.5 bg-white rounded-sm mb-[5px]" />
            <span className="block w-[22px] h-0.5 bg-white rounded-sm mb-[5px]" />
            <span className="block w-[22px] h-0.5 bg-white rounded-sm" />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <nav
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8"
          style={{ background: "var(--navy)" }}
          aria-label="Menu mobile"
        >
          <button
            className="absolute top-4 right-5 bg-transparent border-none text-white text-3xl cursor-pointer leading-none"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar"
          >
            &times;
          </button>

          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-white/80 text-xl font-medium"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}

          <div className="flex rounded overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
            <button
              className={`lang-btn text-sm px-3 py-1.5 ${lang === "pt" ? "active" : ""}`}
              onClick={() => setLang("pt")}
            >
              PT
            </button>
            <button
              className={`lang-btn text-sm px-3 py-1.5 ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>

          <a
            href="#contato"
            className="text-white text-sm font-semibold px-5 py-2.5 rounded-[5px] mt-2 transition-colors hover:brightness-90"
            style={{
              background: "var(--green)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
            }}
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.cta")}
          </a>
        </nav>
      )}
    </>
  );
}
