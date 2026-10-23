"use client";

import { Compass, Eye, Target } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { delay } from "@/lib/reveal";

export default function Identity() {
  const c = useContent();
  const { mission, vision, purpose } = c.identity;
  const pillars = [
    { item: mission, Icon: Target },
    { item: vision, Icon: Eye },
    { item: purpose, Icon: Compass },
  ];

  return (
    <section className="sec sec-dark" id="identidade">
      <div className="container">
        <div className="mvp-row">
          {pillars.map(({ item, Icon }, i) => (
            <div className="mvp" key={item.title} data-rv style={delay(i)}>
              <div className="mvp-ico">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3>{item.title}</h3>
              {item.paragraphs.map((p, j) => (
                <p key={j} className={j === 0 && item.paragraphs.length > 1 ? "mvp-lead" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="vals-wrap">
          <div className="vals-head" data-rv>
            <h3>{c.identity.valuesTitle}</h3>
            <p>{c.identity.valuesIntro}</p>
          </div>
          <ol className="vals-row">
            {c.identity.values.map((v, i) => (
              <li className="val" key={v.title} data-rv style={delay(i)}>
                <span className="val-n" aria-hidden="true">{i + 1}</span>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
