"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ChevronDown,
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
import {
  parseSolutionsCols,
  SOLUTIONS_CARDS_PER_ROW,
  SOLUTIONS_COLS_QUERY,
  type SolutionsCardsPerRow,
} from "@/lib/solutions-layout";
import type { SolutionArea } from "@/content/types";
import SectionHead from "./SectionHead";

const icons: Record<string, LucideIcon> = {
  psm: Layers,
  riscos: ScanSearch,
  projetos: DraftingCompass,
  auditorias: ClipboardCheck,
  treinamentos: GraduationCap,
  excelencia: Gauge,
};

function SolutionCard({
  area,
  index,
  more,
  less,
  servicesLabel,
}: {
  area: SolutionArea;
  index: number;
  more: string;
  less: string;
  servicesLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const Icon = icons[area.id] ?? Layers;
  const expandable = Boolean(area.services?.length || area.link);

  return (
    <article
      className={`svc-card${open ? " is-open" : ""}`}
      id={`solucao-${area.id}`}
      data-rv
      style={delay(index % 2)}
    >
      <div className="svc-top">
        <div className="svc-ico">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <span className="svc-n">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>{area.title}</h3>
      <p className={`svc-desc${open ? "" : " is-clamp"}`}>{area.description}</p>

      {expandable ? (
        <button
          type="button"
          className="svc-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? less : more}
          <ChevronDown size={16} strokeWidth={2.2} />
        </button>
      ) : null}

      {open && area.services ? (
        <div className="svc-list">
          <h4>{servicesLabel}</h4>
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

      {open && area.link ? (
        <a className="svc-link" href={area.link.href}>
          {area.link.label}
          <ArrowDown size={15} strokeWidth={2.2} />
        </a>
      ) : null}
    </article>
  );
}

export default function Services() {
  const c = useContent();
  const [cols, setCols] = useState<SolutionsCardsPerRow>(SOLUTIONS_CARDS_PER_ROW);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCols(parseSolutionsCols(params.get(SOLUTIONS_COLS_QUERY)));
  }, []);

  return (
    <section className="sec" id="solucoes">
      <div className="container">
        <SectionHead title={c.solutions.title} />

        <div className="svc-grid" data-cols={cols}>
          {c.solutions.areas.map((area, i) => (
            <SolutionCard
              key={area.id}
              area={area}
              index={i}
              more={c.solutions.more}
              less={c.solutions.less}
              servicesLabel={c.solutions.servicesLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
