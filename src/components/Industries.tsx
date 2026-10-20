const industries = [
  "Química",
  "Petroquímica",
  "Óleo e Gás",
  "Biocombustíveis",
  "Papel e Celulose",
  "Armazenamento",
  "Terminais Portuários",
  "Agroindústria",
  "Mineração",
  "Alimentos",
  "Farmacêutica",
  "Energia",
];

export default function Industries() {
  return (
    <section id="setores" className="py-20">
      <div className="mx-auto max-w-[1160px] px-4">
        <div className="section-tag mb-4">Setores</div>
        <h2 className="max-w-[600px] font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-inst">
          Setores de atuação
        </h2>
        <p className="mt-3 max-w-[480px] text-[var(--fg-muted)]">
          Atendemos indústrias com processos que envolvem substâncias perigosas, reações
          químicas, altas pressões ou temperaturas elevadas.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-2.5 font-display text-[0.85rem] font-medium text-inst transition-colors hover:border-green hover:text-green"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
