"use client";

import { delay } from "@/lib/reveal";

export default function SectionHead({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="sec-head">
      <div data-rv>
        <p className="sec-label">{label}</p>
        <h2 className="sec-title">{title}</h2>
      </div>
      {intro ? (
        <p className="sec-intro" data-rv style={delay(1, 140)}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
