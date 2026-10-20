"use client";

import { useState, type FormEvent } from "react";

const info = [
  {
    label: "WhatsApp",
    value: "+55 71 99998-3668",
    href: "https://wa.me/5571999983668",
  },
  {
    label: "E-mail",
    value: "contato@inpsm.com",
    href: "mailto:contato@inpsm.com",
  },
  {
    label: "LinkedIn",
    value: "/company/inprocesssafety",
    href: "https://linkedin.com/company/inprocesssafety",
  },
  {
    label: "Endereço",
    value: "Rua Soldado Luiz Gonzaga das Virgens 138, Sala 803 — Salvador / BA",
    href: null,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" className="bg-mist py-20">
      <div className="mx-auto max-w-[1160px] px-4">
        <div className="section-tag mb-4">Contato</div>
        <h2 className="max-w-[600px] font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-inst">
          Fale com a nossa equipe
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            {info.map((item) => (
              <div key={item.label}>
                <div className="font-display text-xs font-semibold uppercase tracking-wider text-blue">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-inst hover:text-green"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-[var(--fg-muted)]">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          {sent ? (
            <div className="flex items-center justify-center rounded-md border border-green/30 bg-green/5 p-10">
              <p className="text-center font-display text-lg font-semibold text-green">
                Mensagem enviada com sucesso!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  required
                  className="rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-sm text-inst outline-none placeholder:text-[var(--fg-muted)]/50 focus:border-blue"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  className="rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-sm text-inst outline-none placeholder:text-[var(--fg-muted)]/50 focus:border-blue"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className="w-full rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-sm text-inst outline-none placeholder:text-[var(--fg-muted)]/50 focus:border-blue"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Mensagem"
                required
                className="w-full resize-none rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-sm text-inst outline-none placeholder:text-[var(--fg-muted)]/50 focus:border-blue"
              />
              <button
                type="submit"
                className="rounded-sm bg-green px-8 py-3 font-display text-[0.9rem] font-semibold text-white transition-colors hover:bg-green-dim"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
