"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useContent } from "@/lib/i18n";

const langs = [
  { lang: "pt", href: "/", label: "PT" },
  { lang: "en", href: "/en", label: "EN" },
] as const;

function LangSwitch({ className = "" }: { className?: string }) {
  const c = useContent();
  return (
    <div className={`lang-sw ${className}`.trim()} role="group" aria-label={c.a11y.language}>
      {langs.map((l) => (
        <a
          key={l.lang}
          href={l.href}
          hrefLang={l.lang === "pt" ? "pt-BR" : "en"}
          className={`lang-btn${c.lang === l.lang ? " active" : ""}`}
          aria-current={c.lang === l.lang ? "page" : undefined}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Header() {
  const c = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    ["#sobre", c.nav.about],
    ["#solucoes", c.nav.solutions],
    ["#treinamentos", c.nav.training],
    ["#setores", c.nav.industries],
    ["#conteudos", c.nav.media],
  ] as const;

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
      <header
        className={`hdr${scrolled ? " scrolled" : ""}`}
        id="topo"
      >
        <div className="container hdr-in">
          <a href="#topo" className="brand" aria-label={c.a11y.home}>
            <img src="/logo-mark.svg" alt="" width={40} height={40} />
            <span className="brand-text">
              <span className="brand-name">Process Safety</span>
              <span className="brand-slogan">
                <span>{c.hero.slogan[0]}</span>
                <span className="sep" aria-hidden="true">
                  |
                </span>
                <span>{c.hero.slogan[1]}</span>
              </span>
            </span>
          </a>

          <nav className="nav" aria-label={c.a11y.mainNav}>
            {links.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <LangSwitch />
            <a href="#contato" className="btn btn-g btn-sm">
              {c.nav.contact}
              <ArrowRight size={15} strokeWidth={2.2} />
            </a>
          </nav>

          <button
            type="button"
            className="burger"
            aria-label={c.a11y.openMenu}
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
          aria-label={c.a11y.closeMenu}
          onClick={() => setOpen(false)}
        >
          <X size={26} strokeWidth={1.8} />
        </button>
        {links.map(([href, label], i) => (
          <a
            key={href}
            href={href}
            style={{ transitionDelay: `${80 + i * 60}ms` }}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <LangSwitch className="m-lang" />
        <a href="#contato" className="btn btn-g" onClick={() => setOpen(false)}>
          {c.nav.contact}
          <ArrowRight size={16} strokeWidth={2.2} />
        </a>
      </div>
    </>
  );
}
