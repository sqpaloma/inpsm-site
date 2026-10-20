const stats = [
  { num: "12+", label: "Setores atendidos" },
  { num: "6", label: "Áreas de atuação" },
  { num: "8", label: "Eixos temáticos de treinamento" },
  { num: "3", label: "Modalidades de capacitação" },
];

export default function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="mx-auto max-w-[1160px] px-4">
        <div className="section-tag mb-4">Quem Somos</div>
        <h2 className="max-w-[600px] font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-inst">
          Consultoria especializada em segurança de processos
        </h2>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-2">
          <div className="max-w-[520px] space-y-4 text-[var(--fg-muted)] leading-relaxed">
            <p>
              A <strong className="font-semibold text-inst">IN Process Safety</strong> é uma
              consultoria especializada em segurança de processos e gestão de riscos industriais.
              Atuamos com foco na implementação e melhoria de sistemas de gestão de segurança de
              processos (PSM), estudos de análise de riscos, auditorias, treinamentos e no
              fortalecimento da cultura de segurança em ambientes industriais.
            </p>
            <p>
              Com experiência consolidada em diversos setores, combinamos rigor técnico, visão
              estratégica e compromisso com a excelência para promover operações mais seguras,
              confiáveis e eficientes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] p-6"
              >
                <span className="green-dot" />
                <span className="blue-line" />
                <div className="font-display text-3xl font-bold text-inst">{s.num}</div>
                <div className="mt-1 text-xs font-medium text-[var(--fg-muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
