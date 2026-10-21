"use client";

import { ArrowRight, Building2, UserCheck, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import SectionHead from "./SectionHead";

const areas = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"];

const modes = [
  { key: "m1", Icon: Building2 },
  { key: "m2", Icon: Users },
  { key: "m3", Icon: UserCheck },
];

export default function Training() {
  const { t } = useI18n();

  return (
    <section className="sec sec-dark" id="treinamentos">
      <div className="container">
        <SectionHead label={t("train.label")} title={t("train.title")} intro={t("train.intro")} />

        <div className="train-grid">
          <div className="t-areas">
            {areas.map((a, i) => (
              <div className="t-item" key={a} data-rv style={delay(i, 60)}>
                <span className="t-dash" aria-hidden="true" />
                <span>{t(`train.${a}`)}</span>
              </div>
            ))}
          </div>

          <div className="t-modes" data-rv style={delay(2)}>
            <h3>{t("train.modes")}</h3>
            {modes.map(({ key, Icon }) => (
              <div className="t-mode" key={key}>
                <div className="t-mode-ico">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h4>{t(`train.${key}`)}</h4>
                  <p>{t(`train.${key}t`)}</p>
                </div>
              </div>
            ))}
            <div className="t-cta">
              <a href="#contato" className="btn btn-g btn-sm">
                {t("train.cta")}
                <ArrowRight size={15} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
