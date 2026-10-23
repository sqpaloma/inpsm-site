"use client";

import { Linkedin } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { SITE } from "@/content/site";
import Logo from "./Logo";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const c = useContent();

  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr-top">
          <div className="ftr-brand">
            <a href="#topo" className="ftr-logo" aria-label={c.a11y.home}>
              <Logo variant="negative" width={140} />
            </a>
            <p className="ftr-slogan">{SITE.slogan}</p>
          </div>

          <div className="ftr-col">
            <h5>{c.footer.nav}</h5>
            <a href="#sobre">{c.nav.about}</a>
            <a href="#solucoes">{c.nav.solutions}</a>
            <a href="#treinamentos">{c.nav.training}</a>
            <a href="#setores">{c.nav.industries}</a>
          </div>

          <div className="ftr-col">
            <h5>{c.solutions.label}</h5>
            {c.solutions.areas.map((a) => (
              <a key={a.id} href={`#solucao-${a.id}`}>{a.title}</a>
            ))}
          </div>

          <div className="ftr-col">
            <h5>{c.contact.label}</h5>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp {c.contact.whatsappDisplay}
            </a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <p className="ftr-addr">{c.contact.address}</p>
          </div>
        </div>

        <div className="ftr-btm">
          <span>
            © {YEAR} {SITE.name} · CNPJ {SITE.cnpj}. {c.footer.rights}
          </span>
          <div className="ftr-soc">
            <a href={SITE.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
