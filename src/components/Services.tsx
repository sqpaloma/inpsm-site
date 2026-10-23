"use client";

import {
  ArrowDown,
  ClipboardCheck,
  DraftingCompass,
  Gauge,
  GraduationCap,
  Layers,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";
import { useContent } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import SectionHead from "./SectionHead";

const icons: Record<string, LucideIcon> = {
  psm: Layers,
  riscos: ScanSearch,
  projetos: DraftingCompass,
  auditorias: ClipboardCheck,
  treinamentos: GraduationCap,
  excelencia: Gauge,
};

export default function Services() {
  const c = useContent();

  return (
    <section className="sec" id="solucoes">
      <div className="container">
        <SectionHead title={c.solutions.title} />

        <div className="svc-grid">
          {c.solutions.areas.map((area, i) => {
            const Icon = icons[area.id] ?? Layers;
            return (
              <article className="svc-card" key={area.id} id={`solucao-${area.id}`} data-rv style={delay(i % 2)}>
                <div className="svc-top">
                  <div className="svc-ico">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <span className="svc-n">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{area.title}</h3>
                <p className="svc-desc">{area.description}</p>

                {area.services ? (
                  <div className="svc-list">
                    <h4>{c.solutions.servicesLabel}</h4>
                    <ol>
                      {area.services.map((s) => (
                        <li key={s.title}>
                          {s.text ? (
                            <>
                              <strong>{s.title}</strong>
                              <span>{s.text}</span>
                            </>
                          ) : (
                            s.title
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                {area.link ? (
                  <a className="svc-link" href={area.link.href}>
                    {area.link.label}
                    <ArrowDown size={15} strokeWidth={2.2} />
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
