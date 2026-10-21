"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";

const links = [
  ["#sobre", "nav.about"],
  ["#solucoes", "nav.solutions"],
  ["#treinamentos", "nav.training"],
  ["#setores", "nav.industries"],
] as const;

const langs: Lang[] = ["pt", "en"];

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div className={`lang-sw ${className}`.trim()} role="group" aria-label="Idioma / Language">
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-btn${lang === l ? " active" : ""}`}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`hdr${scrolled ? " scrolled" : ""}`} id="topo">
        <div className="container hdr-in">
          <a href="#topo" className="brand" aria-label="IN Process Safety — início">
            <img src="/logo-mark.svg" alt="" width={40} height={40} />
            <span className="brand-name">Process Safety</span>
          </a>

          <nav className="nav" aria-label="Principal">
            {links.map(([href, key]) => (
              <a key={href} href={href}>
                {t(key)}
              </a>
            ))}
            <LangSwitch />
            <a href="#contato" className="btn btn-g btn-sm">
              {t("nav.cta")}
              <ArrowRight size={15} strokeWidth={2.2} />
            </a>
          </nav>

          <button
            type="button"
            className="burger"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={26} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <div className={`m-nav${open ? " open" : ""}`} aria-hidden={!open}>
        <button
          type="button"
          className="m-close"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
        >
          <X size={26} strokeWidth={1.8} />
        </button>
        {links.map(([href, key], i) => (
          <a
            key={href}
            href={href}
            style={{ transitionDelay: `${80 + i * 60}ms` }}
            onClick={() => setOpen(false)}
          >
            {t(key)}
          </a>
        ))}
        <LangSwitch className="m-lang" />
        <a href="#contato" className="btn btn-g" onClick={() => setOpen(false)}>
          {t("nav.cta")}
          <ArrowRight size={16} strokeWidth={2.2} />
        </a>
      </div>
    </>
  );
}
