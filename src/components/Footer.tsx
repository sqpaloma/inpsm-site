import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#treinamentos", label: "Treinamentos" },
  { href: "#setores", label: "Setores" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60">
      <div className="mx-auto max-w-[1160px] px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image src="/logo.svg" alt="IN Process Safety" width={130} height={39} />
            <p className="mt-4 text-sm leading-relaxed">
              Consultoria especializada em segurança de processos e gestão de riscos industriais.
            </p>
            <p className="mt-4 font-display text-[0.7rem] uppercase tracking-wider text-white/35">
              Optimized process · Safe Operations
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-white/40">
              Navegação
            </h4>
            <nav className="mt-4 flex flex-col gap-2.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-white/40">
              Contato
            </h4>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <a href="mailto:contato@inpsm.com" className="transition-colors hover:text-white">
                  contato@inpsm.com
                </a>
              </p>
              <p>
                <a href="https://wa.me/5571999983668" className="transition-colors hover:text-white">
                  +55 71 99998-3668
                </a>
              </p>
              <p>
                <a
                  href="https://linkedin.com/company/inprocesssafety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </p>
              <p className="mt-2 text-xs text-white/30">
                <a
                  href="https://www.inpsm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/50"
                >
                  www.inpsm.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
          <span>© {new Date().getFullYear()} IN Process Safety. Todos os direitos reservados.</span>
          <span>CNPJ 67.824.830/0001-04</span>
        </div>
      </div>
    </footer>
  );
}
