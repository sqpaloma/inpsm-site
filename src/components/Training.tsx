const themes = [
  {
    title: "Fundamentos de Segurança de Processos",
    text: "Conceitos essenciais de PSM, elementos do RBPS/CCPS e cultura de segurança de processos.",
  },
  {
    title: "Gestão de Mudanças (MOC)",
    text: "Metodologia e prática para gerenciamento de mudanças em instalações industriais.",
  },
  {
    title: "Análise de Riscos de Processos (PHA)",
    text: "Técnicas de HAZOP, HAZID, What-If, APP/APR, LOPA e Bowtie.",
  },
  {
    title: "Investigação de Incidentes",
    text: "Métodos de investigação de causas raiz e lições aprendidas em segurança de processos.",
  },
  {
    title: "Integridade Mecânica",
    text: "Gestão da integridade de equipamentos críticos e sistemas de proteção.",
  },
  {
    title: "Procedimentos Operacionais",
    text: "Elaboração, revisão e gestão de procedimentos operacionais seguros.",
  },
  {
    title: "Cultura e Liderança em Segurança",
    text: "Desenvolvimento de liderança e fortalecimento da cultura de segurança de processos.",
  },
  {
    title: "Prontidão para Emergências",
    text: "Planejamento e resposta a emergências em instalações de processos.",
  },
];

const modalities = [
  {
    title: "In Company",
    text: "Treinamentos realizados nas instalações do cliente, com conteúdo customizado à realidade operacional da empresa.",
  },
  {
    title: "Turmas Abertas",
    text: "Cursos com calendário programado, reunindo profissionais de diferentes empresas e setores para troca de experiências.",
  },
  {
    title: "Sob Demanda",
    text: "Programas desenvolvidos sob medida, com foco em necessidades específicas, projetos ou equipes.",
  },
];

export default function Training() {
  return (
    <section id="treinamentos" className="bg-mist py-20">
      <div className="mx-auto max-w-[1160px] px-4">
        <div className="section-tag mb-4">Treinamentos</div>
        <h2 className="max-w-[600px] font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-inst">
          Capacitação técnica em segurança de processos
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Themes grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {themes.map((t) => (
              <div
                key={t.title}
                className="relative rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-5"
              >
                <span className="green-dot" />
                <h3 className="mb-1.5 font-display text-[0.95rem] font-semibold text-inst">
                  {t.title}
                </h3>
                <p className="text-[0.8rem] leading-relaxed text-[var(--fg-muted)]">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Modalities sidebar */}
          <aside className="flex flex-col gap-4">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-blue">
              Modalidades
            </h3>
            {modalities.map((m) => (
              <div key={m.title} className="border-l-2 border-green py-3 pl-5">
                <h4 className="font-display text-[0.9rem] font-semibold text-inst">{m.title}</h4>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-[var(--fg-muted)]">
                  {m.text}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
