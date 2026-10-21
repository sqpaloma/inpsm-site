"use client";

import { ArrowRight, Presentation, UserCheck, Wrench } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import SectionHead from "./SectionHead";

const modeIcons = [Wrench, Presentation, UserCheck];

export default function Training() {
  const c = useContent();
  const t = c.training;

  return (
    <section className="sec sec-dark" id="treinamentos">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />

        <h3 className="t-sub" data-rv>{t.modesTitle}</h3>
        <ol className="t-modes">
          {t.modes.map((m, i) => {
            const Icon = modeIcons[i] ?? Wrench;
            return (
              <li className="t-mode" key={m.title} data-rv style={delay(i)}>
                <div className="t-mode-ico">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h4>{m.title}</h4>
                <p>{m.text}</p>
              </li>
            );
          })}
        </ol>

        <h3 className="t-sub" data-rv>{t.topicsTitle}</h3>
        <ol className="t-areas">
          {t.topics.map((topic, i) => (
            <li className="t-item" key={topic.title} data-rv style={delay(i % 4, 70)}>
              <h4>
                <span className="t-n">{String(i + 1).padStart(2, "0")}</span>
                {topic.title}
              </h4>
              <ul>
                {topic.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="t-closing" data-rv>
          <p>{t.closing}</p>
          <a href="#contato" className="btn btn-g btn-sm">
            {t.cta}
            <ArrowRight size={15} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
