"use client";

import { Fragment } from "react";
import { useI18n } from "@/lib/i18n";
import { CountUp, delay } from "@/lib/reveal";
import SectionHead from "./SectionHead";

/** Renders `**bold**` segments from the translation strings. */
function rich(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>
  );
}

const stats = [
  { n: 12, suffix: "+", key: "about.stat1" },
  { n: 6, key: "about.stat2" },
  { n: 8, key: "about.stat3" },
  { n: 3, key: "about.stat4" },
];

export default function About() {
  const { t } = useI18n();

  return (
    <section className="sec" id="sobre">
      <div className="container">
        <SectionHead label={t("about.label")} title={t("about.title")} />

        <div className="about-grid">
          <div className="about-text" data-rv>
            <p>{rich(t("about.p1"))}</p>
            <p>{rich(t("about.p2"))}</p>
          </div>

          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat" key={s.key} data-rv style={delay(i + 1)}>
                <div className="stat-num">
                  <CountUp to={s.n} suffix={s.suffix} />
                </div>
                <div className="stat-lbl">{t(s.key)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
