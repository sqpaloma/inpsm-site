"use client";

import {
  Beaker,
  Droplets,
  Factory,
  FlaskConical,
  Fuel,
  Layers,
  Pickaxe,
  Pill,
  Sprout,
  TreePine,
  Utensils,
  Zap,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import SectionHead from "./SectionHead";

const industries = [
  { key: "c1", Icon: Fuel },
  { key: "c2", Icon: FlaskConical },
  { key: "c3", Icon: Beaker },
  { key: "c4", Icon: Pickaxe },
  { key: "c5", Icon: Factory },
  { key: "c6", Icon: Zap },
  { key: "c7", Icon: Sprout },
  { key: "c8", Icon: TreePine },
  { key: "c9", Icon: Utensils },
  { key: "c10", Icon: Pill },
  { key: "c11", Icon: Layers },
  { key: "c12", Icon: Droplets },
];

export default function Industries() {
  const { t } = useI18n();

  return (
    <section className="sec sec-alt" id="setores">
      <div className="container">
        <SectionHead label={t("ind.label")} title={t("ind.title")} intro={t("ind.intro")} />

        <div className="ind-grid">
          {industries.map(({ key, Icon }, i) => (
            <div className="ind-chip" key={key} data-rv style={delay(i, 50)}>
              <Icon size={20} strokeWidth={1.75} />
              <span>{t(`ind.${key}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
