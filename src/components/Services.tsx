"use client";

import { ClipboardCheck, Cog, GitBranch, RefreshCw, ScanSearch, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import SectionHead from "./SectionHead";

const services = [
  { key: "s1", Icon: ShieldCheck, tags: { pt: ["PSM", "RBPS", "OSHA", "Seveso III", "ISO 45001"], en: ["PSM", "RBPS", "OSHA", "Seveso III", "ISO 45001"] } },
  { key: "s2", Icon: ScanSearch, tags: { pt: ["HAZOP", "HAZID", "LOPA", "Bowtie", "What-If", "APP"], en: ["HAZOP", "HAZID", "LOPA", "Bowtie", "What-If", "PHA"] } },
  { key: "s3", Icon: GitBranch, tags: { pt: ["Tripod Beta", "Árvore de Causas", "5 Porquês", "AcciMap"], en: ["Tripod Beta", "Causal Tree", "5 Whys", "AcciMap"] } },
  { key: "s4", Icon: ClipboardCheck, tags: { pt: ["Gap Analysis", "Compliance", "Benchmarking"], en: ["Gap Analysis", "Compliance", "Benchmarking"] } },
  { key: "s5", Icon: Cog, tags: { pt: ["RBI", "FMEA", "SIL/SIS", "NR-13"], en: ["RBI", "FMEA", "SIL/SIS", "NR-13"] } },
  { key: "s6", Icon: RefreshCw, tags: { pt: ["MOC", "PSSR", "Startup/Shutdown"], en: ["MOC", "PSSR", "Startup/Shutdown"] } },
];

export default function Services() {
  const { t, lang } = useI18n();

  return (
    <section className="sec" id="solucoes">
      <div className="container">
        <SectionHead label={t("svc.label")} title={t("svc.title")} intro={t("svc.intro")} />

        <div className="svc-grid">
          {services.map(({ key, Icon, tags }, i) => (
            <article className="svc-card" key={key} data-rv style={delay(i)}>
              <div className="svc-ico">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3>{t(`svc.${key}`)}</h3>
              <p className="svc-desc">{t(`svc.${key}t`)}</p>
              <div className="svc-tags">
                {tags[lang].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
