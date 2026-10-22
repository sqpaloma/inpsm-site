"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Building2, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import { SITE } from "@/content/site";
import SectionHead from "./SectionHead";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const c = useContent();
  const f = c.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang: c.lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="sec sec-dark" id="contato">
      <div className="container">
        <SectionHead label={c.contact.label} title={c.contact.title} />

        <div className="contact-grid">
          <div className="c-info" data-rv>
            <h3>{c.contact.infoTitle}</h3>

            <div className="c-row">
              <div className="c-row-ico"><MessageCircle size={19} strokeWidth={1.75} /></div>
              <div>
                <div className="c-row-lbl">WhatsApp</div>
                <div className="c-row-val">
                  <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    {c.contact.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="c-row">
              <div className="c-row-ico"><Mail size={19} strokeWidth={1.75} /></div>
              <div>
                <div className="c-row-lbl">E-mail</div>
                <div className="c-row-val"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
              </div>
            </div>

            <div className="c-row">
              <div className="c-row-ico"><Linkedin size={19} strokeWidth={1.75} /></div>
              <div>
                <div className="c-row-lbl">LinkedIn</div>
                <div className="c-row-val">
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">{SITE.linkedinDisplay}</a>
                </div>
              </div>
            </div>

            <div className="c-row">
              <div className="c-row-ico"><MapPin size={19} strokeWidth={1.75} /></div>
              <div>
                <div className="c-row-lbl">{c.contact.addressLabel}</div>
                <div className="c-row-val">{c.contact.address}</div>
              </div>
            </div>

            <div className="c-row">
              <div className="c-row-ico"><Building2 size={19} strokeWidth={1.75} /></div>
              <div>
                <div className="c-row-lbl">{c.contact.cnpjLabel}</div>
                <div className="c-row-val">{SITE.cnpj}</div>
              </div>
            </div>
          </div>

          <form className="c-form" onSubmit={handleSubmit} data-rv style={delay(1, 140)}>
            <h3>{f.title}</h3>

            <div className="c-2col">
              <div className="fg">
                <label htmlFor="f-nome">{f.name}</label>
                <input type="text" id="f-nome" name="nome" required maxLength={120} autoComplete="name" />
              </div>
              <div className="fg">
                <label htmlFor="f-empresa">{f.company}</label>
                <input type="text" id="f-empresa" name="empresa" maxLength={120} autoComplete="organization" />
              </div>
            </div>

            <div className="c-2col">
              <div className="fg">
                <label htmlFor="f-email">{f.email}</label>
                <input type="email" id="f-email" name="email" required maxLength={160} autoComplete="email" />
              </div>
              <div className="fg">
                <label htmlFor="f-tel">{f.phone}</label>
                <input type="tel" id="f-tel" name="telefone" maxLength={40} autoComplete="tel" />
              </div>
            </div>

            <div className="fg">
              <label htmlFor="f-assunto">{f.subject}</label>
              <select id="f-assunto" name="assunto" defaultValue="">
                <option value="">{f.subjectPlaceholder}</option>
                {c.solutions.areas.map((a) => (
                  <option key={a.id} value={a.title}>{a.title}</option>
                ))}
              </select>
            </div>

            <div className="fg">
              <label htmlFor="f-msg">{f.message}</label>
              <textarea id="f-msg" name="mensagem" rows={4} required maxLength={5000} />
            </div>

            {/* Honeypot: real users never see or fill this field */}
            <div className="fg-hp" aria-hidden="true">
              <label htmlFor="f-site">Website</label>
              <input type="text" id="f-site" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              className={`btn btn-g btn-send${status === "sent" ? " sent" : ""}`}
              disabled={status === "sending" || status === "sent"}
            >
              {status === "sending" ? f.sending : status === "sent" ? f.sent : f.send}
              {status === "idle" || status === "error" ? <ArrowRight size={16} strokeWidth={2.2} /> : null}
            </button>
            <p className="c-note" role="status" aria-live="polite">
              {status === "error" ? f.error : null}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
