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

        <div className="about-grid">
          <p className="about-lead" data-rv>
            {lead}
          </p>
          <div className="about-text" data-rv style={delay(1, 140)}>
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
