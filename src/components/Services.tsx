"use client";

import { useI18n } from "@/lib/i18n";

const services = [
  { key: "s1", tags: ["PSM", "RBPS", "OSHA", "Seveso III", "ISO 45001"] },
  { key: "s2", tags: ["HAZOP", "HAZID", "LOPA", "Bowtie", "What-If", "APP"] },
  { key: "s3", tags: ["Tripod Beta", "Árvore de Causas", "5 Porquês", "AcciMap"] },
  { key: "s4", tags: ["Gap Analysis", "Compliance", "Benchmarking"] },
  { key: "s5", tags: ["RBI", "FMEA", "SIL/SIS", "NR-13"] },
  { key: "s6", tags: ["MOC", "PSSR", "Startup/Shutdown"] },
];

export default function Services() {
  const { t } = useI18n();

  return (
    <section className="py-22 px-4" id="solucoes">
      <div className="max-w-[1120px] mx-auto">
        <p className="sec-label">{t("svc.label")}</p>
        <h2 className="sec-title">{t("svc.title")}</h2>
        <p className="sec-intro">{t("svc.intro")}</p>

        <div className="mt-14">
          {services.map((svc, i) => (
            <div
              key={svc.key}
              className="grid grid-cols-1 md:grid-cols-[0.38fr_0.62fr] gap-3 md:gap-8 py-8 items-start"
              style={{
                borderTop: "1px solid var(--line)",
                ...(i === services.length - 1
                  ? { borderBottom: "1px solid var(--line)" }
                  : {}),
              }}
            >
              <h3
                className="text-lg font-semibold leading-snug"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  color: "var(--text)",
                }}
              >
                {t(`svc.${svc.key}`)}
              </h3>
              <div>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-muted)", lineHeight: 1.72 }}
                >
                  {t(`svc.${svc.key}t`)}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.67rem] font-medium px-2 py-0.5 rounded-sm"
                      style={{
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        color: "var(--blue)",
                        border: "1px solid var(--line)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
