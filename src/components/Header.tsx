"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#treinamentos", label: "Treinamentos" },
  { href: "#setores", label: "Setores" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-navy transition-shadow ${
          scrolled ? "shadow-lg shadow-black/25" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-4 py-3.5">
          <Link href="#top" className="flex items-center">
            <Image src="/logo.svg" alt="IN Process Safety" width={140} height={42} priority />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contato"
              className="rounded-sm bg-green px-5 py-2 font-display text-sm font-semibold text-white transition-colors hover:bg-green-dim"
            >
              Fale Conosco
            </Link>
          </nav>

          <button
            className="p-1.5 md:hidden"
            aria-label="Menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-navy">
          <button
            className="absolute right-5 top-5 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar"
          >
            <X className="h-7 w-7" />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-xl font-medium text-white/85 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contato"
            className="rounded-sm bg-green px-6 py-3 font-display text-base font-semibold text-white hover:bg-green-dim"
            onClick={() => setMobileOpen(false)}
          >
            Fale Conosco
          </Link>
        </div>
      )}
    </>
  );
}
