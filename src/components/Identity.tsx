const pillars = [
  {
    title: "Missão",
    text: "Prover soluções integradas e especializadas em segurança de processos e gestão de riscos, promovendo operações mais seguras, confiáveis e eficientes para a indústria.",
  },
  {
    title: "Visão",
    text: "Ser referência em consultoria de segurança de processos no Brasil e na América Latina, reconhecida pela excelência técnica, inovação e compromisso com a segurança operacional.",
  },
  {
    title: "Propósito",
    text: "Proteger vidas, processos e o meio ambiente por meio de uma engenharia de segurança responsável e eficaz.",
  },
];

const values = [
  {
    num: "01",
    title: "Excelência Técnica",
    text: "Compromisso com o mais alto padrão de qualidade e rigor em cada entrega.",
  },
  {
    num: "02",
    title: "Integridade",
    text: "Atuação ética, transparente e responsável em todas as relações.",
  },
  {
    num: "03",
    title: "Segurança como Prioridade",
    text: "Toda decisão é orientada pela preservação da vida e do meio ambiente.",
  },
  {
    num: "04",
    title: "Inovação com Propósito",
    text: "Busca contínua por soluções eficientes, atualizadas e de alto impacto.",
  },
];

export default function Identity() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-[1160px] px-4">
        <div className="section-tag mb-4">Identidade</div>
        <h2 className="max-w-[600px] font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-inst">
          O que nos move
        </h2>

        {/* Mission / Vision / Purpose */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="relative rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-8"
            >
              <span className="green-dot" />
              <h3 className="mb-3 font-display text-lg font-semibold text-inst">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--fg-muted)]">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.num} className="border-l-2 border-green py-4 pl-5">
              <div className="font-display text-4xl font-bold text-navy/10">{v.num}</div>
              <h4 className="mt-2 font-display text-[0.95rem] font-semibold text-inst">
                {v.title}
              </h4>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-[var(--fg-muted)]">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
