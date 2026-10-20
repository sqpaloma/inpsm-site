const services = [
  {
    tag: "PSM",
    title: "Sistemas de Gestão PSM",
    text: "Desenvolvimento, implementação e melhoria contínua de sistemas de gestão de segurança de processos, alinhados às melhores práticas e normas internacionais (OSHA PSM, RBPS/CCPS, Seveso III).",
  },
  {
    tag: "Riscos",
    title: "Estudos de Análise de Riscos",
    text: "Condução de estudos qualitativos e quantitativos: HAZOP, HAZID, LOPA, Bowtie, APP/APR, What-If e análises de consequências, com equipe experiente e multidisciplinar.",
  },
  {
    tag: "Projetos",
    title: "Segurança de Processos em Projetos",
    text: "Integração da segurança de processos em todas as fases do ciclo de vida de projetos industriais — do conceitual ao comissionamento — garantindo conformidade e redução de riscos desde a origem.",
  },
  {
    tag: "Auditoria",
    title: "Auditorias e Investigação",
    text: "Auditorias de conformidade em segurança de processos e investigação técnica de incidentes e quase-acidentes, com foco em causas raiz e ações preventivas eficazes.",
  },
  {
    tag: "Treinamento",
    title: "Treinamentos Especializados",
    text: "Programas de capacitação técnica em segurança de processos, com metodologia aplicada, estudos de caso reais e conteúdo alinhado às principais referências internacionais.",
  },
  {
    tag: "Excelência",
    title: "Excelência Operacional",
    text: "Consultoria para fortalecimento da cultura de segurança, melhoria de procedimentos operacionais, gestão de mudanças (MOC) e integridade mecânica.",
  },
];

export default function Services() {
  return (
    <section id="solucoes" className="py-20">
      <div className="mx-auto max-w-[1160px] px-4">
        <div className="section-tag mb-4">Soluções</div>
        <h2 className="max-w-[600px] font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-inst">
          Áreas de atuação
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.tag}
              className="relative flex flex-col rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] px-6 pb-7 pt-8"
            >
              <span className="green-dot" />
              <span className="blue-line" />
              <div className="mb-3 inline-flex self-start rounded-full border border-blue/20 bg-blue/5 px-3 py-0.5 font-display text-[0.7rem] font-semibold uppercase tracking-wider text-blue">
                {s.tag}
              </div>
              <h3 className="mb-2 font-display text-[1.05rem] font-semibold text-inst">
                {s.title}
              </h3>
              <p className="text-[0.85rem] leading-relaxed text-[var(--fg-muted)]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
