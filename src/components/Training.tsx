"use client";

import { useI18n } from "@/lib/i18n";

const areaKeys = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"];
const modalityKeys = ["m1", "m2", "m3"];

export default function Training() {
  const { t } = useI18n();

  return (
    <section className="sec-dark py-22 px-4" id="treinamentos">
      <div className="max-w-[1120px] mx-auto">
        <p className="sec-label">{t("train.label")}</p>
        <h2 className="sec-title">{t("train.title")}</h2>
        <p className="sec-intro">{t("train.intro")}</p>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 mt-12 items-start">
          {/* Training areas */}
          <div className="flex flex-col">
            {areaKeys.map((key, i) => (
              <div
                key={key}
                className="flex items-baseline gap-3 py-3"
                style={{
                  borderBottom:
                    i < areaKeys.length - 1
                      ? "1px solid var(--line-inv)"
                      : "none",
                }}
              >
                <span
                  className="flex-shrink-0 mt-2"
                  style={{
                    width: 8,
                    height: 2,
                    background: "var(--green)",
                  }}
                />
                <span className="text-sm" style={{ color: "var(--text-inv)" }}>
                  {t(`train.${key}`)}
                </span>
              </div>
            ))}
          </div>

          {/* Modalities */}
          <div>
            <h3
              className="text-base font-semibold text-white mb-5"
              style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
            >
              {t("train.modes")}
            </h3>
            {modalityKeys.map((key, i) => (
              <div
                key={key}
                className="py-4"
                style={{
                  borderBottom:
                    i < modalityKeys.length - 1
                      ? "1px solid var(--line-inv)"
                      : "none",
                }}
              >
                <h4
                  className="text-sm font-semibold text-white mb-0.5"
                  style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif" }}
                >
                  {t(`train.${key}`)}
                </h4>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-inv-muted)", lineHeight: 1.55 }}
                >
                  {t(`train.${key}t`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
