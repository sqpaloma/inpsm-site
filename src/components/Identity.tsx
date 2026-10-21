"use client";

import { Compass, Eye, Target } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import SectionHead from "./SectionHead";

const pillars = [
  { key: "mission", Icon: Target },
  { key: "vision", Icon: Eye },
  { key: "purpose", Icon: Compass },
];

const values = ["v1", "v2", "v3", "v4"];

export default function Identity() {
  const { t } = useI18n();

  return (
    <section className="sec sec-dark" id="identidade">
      <div className="container">
        <SectionHead label={t("id.label")} title={t("id.title")} />

        <div className="mvp-row">
          {pillars.map(({ key, Icon }, i) => (
            <div className="mvp" key={key} data-rv style={delay(i)}>
              <div className="mvp-ico">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3>{t(`id.${key}`)}</h3>
              <p>{t(`id.${key}_t`)}</p>
            </div>
          ))}
        </div>

        <div className="vals-wrap">
          <div className="vals-head" data-rv>
            <h3>{t("id.vals")}</h3>
          </div>
          <div className="vals-row">
            {values.map((v, i) => (
              <div className="val" key={v} data-rv style={delay(i)}>
                <h4>{t(`id.${v}`)}</h4>
                <p>{t(`id.${v}t`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
