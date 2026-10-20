"use client";

import { useI18n } from "@/lib/i18n";

const stats = [
  { num: "12+", key: "about.stat1" },
  { num: "6", key: "about.stat2" },
  { num: "8", key: "about.stat3" },
  { num: "3", key: "about.stat4" },
];

function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold" style={{ color: "var(--text)" }}>
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function About() {
  const { t } = useI18n();

  return (
    <section className="py-22 px-4" id="sobre">
      <div className="max-w-[1120px] mx-auto">
        <p className="sec-label">{t("about.label")}</p>
        <h2 className="sec-title">{t("about.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12 items-start">
          {/* Text column */}
          <div className="space-y-4" style={{ color: "var(--text-mid)", lineHeight: 1.78 }}>
            <p>
              <RichText text={t("about.p1")} />
            </p>
            <p>
              <RichText text={t("about.p2")} />
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-10">
            {stats.map((s) => (
              <div
                key={s.key}
                className="pt-4"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div
                  className="font-semibold leading-none dark:!text-[--green]"
                  style={{
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                    fontSize: "2.75rem",
                    color: "var(--navy)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.num}
                </div>
                <div
                  className="text-sm mt-1 leading-snug"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t(s.key)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
