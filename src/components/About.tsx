"use client";

import { useContent } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import SectionHead from "./SectionHead";

export default function About() {
  const c = useContent();
  const [lead, ...rest] = c.about.paragraphs;

  return (
    <section className="sec" id="sobre">
      <div className="container">
        <SectionHead title={c.about.title} />

        <div className="about-stack">
          <p className="about-lead" data-rv>
            {lead}
          </p>
          {rest.map((p, i) => (
            <p className="about-text" key={p} data-rv style={delay(i + 1, 140)}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
