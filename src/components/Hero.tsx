import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[540px] items-center overflow-hidden bg-navy">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_40%]"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-navy/[0.82]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1160px] px-4 py-20 pb-[4.5rem]">
        {/* Green marker */}
        <div className="mb-6 h-2.5 w-2.5 rounded-[2px] bg-green" />

        <h1 className="max-w-[680px] font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-white">
          <span className="block">Segurança de Processos</span>
          <span className="block">em nosso DNA.</span>
        </h1>

        <p className="mt-4 max-w-[560px] text-[clamp(1rem,2.5vw,1.25rem)] font-light leading-relaxed text-white/80">
          Integrada à gestão de riscos do seu negócio.
        </p>

        {/* Slogan */}
        <div className="mt-8 inline-flex items-center gap-3 font-display text-[0.85rem] font-medium uppercase tracking-[0.12em] text-white/55">
          <span>Optimized process</span>
          <span className="h-3.5 w-px bg-white/25" />
          <span className="text-green">Safe Operations</span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#contato"
            className="inline-flex items-center gap-2 rounded-sm bg-green px-7 py-3 font-display text-[0.9rem] font-semibold text-white transition-colors hover:bg-green-dim"
          >
            Fale com um especialista
          </Link>
          <Link
            href="#solucoes"
            className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3 font-display text-[0.9rem] font-semibold text-white transition-colors hover:border-white/60"
          >
            Conheça nossas soluções
          </Link>
        </div>
      </div>
    </section>
  );
}
