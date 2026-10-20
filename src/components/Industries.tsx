"use client";

import { useI18n } from "@/lib/i18n";

const chipKeys = [
  "ind.c1", "ind.c2", "ind.c3", "ind.c4", "ind.c5", "ind.c6",
  "ind.c7", "ind.c8", "ind.c9", "ind.c10", "ind.c11", "ind.c12",
];

export default function Industries() {
  const { t } = useI18n();

  return (
    <section className="py-22 px-4" id="setores">
      <div className="max-w-[1120px] mx-auto">
        <p className="sec-label">{t("ind.label")}</p>
        <h2 className="sec-title">{t("ind.title")}</h2>
        <p className="sec-intro">{t("ind.intro")}</p>

        <div className="flex flex-wrap gap-2.5 mt-12">
          {chipKeys.map((key) => (
            <span
              key={key}
              className="font-[family-name:var(--font-outfit)] text-sm font-medium text-[var(--text-mid)] px-5 py-2.5 border border-[var(--line)] rounded-md transition-colors hover:border-[var(--blue)] hover:text-[var(--blue)] cursor-default"
            >
              {t(key)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
