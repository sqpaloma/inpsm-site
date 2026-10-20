"use client";

import { useI18n } from "@/lib/i18n";

const mvpKeys = [
  { titleKey: "id.mission", textKey: "id.mission_t" },
  { titleKey: "id.vision", textKey: "id.vision_t" },
  { titleKey: "id.purpose", textKey: "id.purpose_t" },
];

const valueKeys = [
  { titleKey: "id.v1", textKey: "id.v1t" },
  { titleKey: "id.v2", textKey: "id.v2t" },
  { titleKey: "id.v3", textKey: "id.v3t" },
  { titleKey: "id.v4", textKey: "id.v4t" },
];

export default function Identity() {
  const { t } = useI18n();

  return (
    <section className="sec-dark py-22 px-4" id="identidade">
      <div className="max-w-[1120px] mx-auto">
        <p className="sec-label">{t("id.label")}</p>
        <h2 className="sec-title">{t("id.title")}</h2>

        {/* Mission / Vision / Purpose */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14">
          {mvpKeys.map((m) => (
            <div key={m.titleKey}>
              <h3 className="text-base font-semibold text-white mb-3" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                {t(m.titleKey)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-inv-mid)", lineHeight: 1.72 }}>
                {t(m.textKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-16 pt-12" style={{ borderTop: "1px solid var(--line-inv)" }}>
          <h3 className="text-base font-semibold text-white mb-8" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
            {t("id.vals")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueKeys.map((v) => (
              <div key={v.titleKey}>
                <h4
                  className="text-sm font-semibold text-white mb-1 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  <span
                    className="flex-shrink-0"
                    style={{ width: 8, height: 2, background: "var(--green)" }}
                  />
                  {t(v.titleKey)}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-inv-muted)", paddingLeft: "calc(8px + 0.5rem)" }}
                >
                  {t(v.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
