"use client";

import { Instagram, Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr-top">
          <div className="ftr-brand">
            <a href="#topo" className="brand" aria-label="IN Process Safety — início">
              <img src="/logo-mark.svg" alt="" width={40} height={40} />
              <span className="brand-name">Process Safety</span>
            </a>
            <p>{t("ftr.desc")}</p>
          </div>

          <div className="ftr-col">
            <h5>{t("ftr.nav")}</h5>
            <a href="#sobre">{t("nav.about")}</a>
            <a href="#solucoes">{t("nav.solutions")}</a>
            <a href="#treinamentos">{t("nav.training")}</a>
            <a href="#setores">{t("nav.industries")}</a>
          </div>

          <div className="ftr-col">
            <h5>{t("svc.label")}</h5>
            <a href="#solucoes">{t("ftr.s1")}</a>
            <a href="#solucoes">{t("ftr.s2")}</a>
            <a href="#solucoes">{t("ftr.s3")}</a>
            <a href="#solucoes">{t("ftr.s4")}</a>
          </div>

          <div className="ftr-col">
            <h5>{t("ct.label")}</h5>
            <a href="#contato">{t("nav.cta")}</a>
            <a href="mailto:contato@inprocesssafety.com">E-mail</a>
            <a href="https://linkedin.com/company/inprocesssafety" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="ftr-btm">
          <span>© {YEAR} IN Process Safety. {t("ftr.rights")}</span>
          <div className="ftr-soc">
            <a href="https://linkedin.com/company/inprocesssafety" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} strokeWidth={1.75} />
            </a>
            <a href="https://instagram.com/inprocesssafety" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
