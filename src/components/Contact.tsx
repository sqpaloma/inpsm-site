"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { delay } from "@/lib/reveal";
import SectionHead from "./SectionHead";

const WHATSAPP = "5571999999999";
const WHATSAPP_DISPLAY = "+55 71 99999-9999";
const EMAIL = "contato@inprocesssafety.com";
const LINKEDIN = "https://linkedin.com/company/inprocesssafety";

export default function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="sec sec-dark" id="contato">
      <div className="container">
        <SectionHead label={t("ct.label")} title={t("ct.title")} />

        <div className="contact-grid">
          <div className="c-info" data-rv>
            <h3>{t("ct.info_h")}</h3>

            <div className="c-row">
              <div className="c-row-ico"><MessageCircle size={19} strokeWidth={1.75} /></div>
              <div>
                <div className="c-row-lbl">WhatsApp</div>
                <div className="c-row-val">
                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
                </div>
              </div>
            </div>

            <div className="c-row">
              <div className="c-row-ico"><Mail size={19} strokeWidth={1.75} /></div>
              <div>
                <div className="c-row-lbl">E-mail</div>
                <div className="c-row-val"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
              </div>
            </div>

            <div className="c-row">
              <div className="c-row-ico"><Linkedin size={19} strokeWidth={1.75} /></div>
              <div>
                <div className="c-row-lbl">LinkedIn</div>
                <div className="c-row-val">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">/inprocesssafety</a>
                </div>
              </div>
            </div>

            <div className="c-row">
              <div className="c-row-ico"><MapPin size={19} strokeWidth={1.75} /></div>
              <div>
                <div className="c-row-lbl">{t("ct.addr_lbl")}</div>
                <div className="c-row-val">{t("ct.addr")}</div>
              </div>
            </div>
          </div>

          <form className="c-form" onSubmit={handleSubmit} data-rv style={delay(1, 140)}>
            <h3>{t("ct.form_h")}</h3>

            <div className="c-2col">
              <div className="fg">
                <label htmlFor="f-nome">{t("ct.f_name")}</label>
                <input type="text" id="f-nome" name="nome" placeholder={t("ct.f_name_ph")} required autoComplete="name" />
              </div>
              <div className="fg">
                <label htmlFor="f-empresa">{t("ct.f_company")}</label>
                <input type="text" id="f-empresa" name="empresa" placeholder={t("ct.f_company_ph")} autoComplete="organization" />
              </div>
            </div>

            <div className="c-2col">
              <div className="fg">
                <label htmlFor="f-email">E-mail</label>
                <input type="email" id="f-email" name="email" placeholder={t("ct.f_email_ph")} required autoComplete="email" />
              </div>
              <div className="fg">
                <label htmlFor="f-tel">{t("ct.f_phone")}</label>
                <input type="tel" id="f-tel" name="telefone" placeholder="+55 (71) 99999-9999" autoComplete="tel" />
              </div>
            </div>

            <div className="fg">
              <label htmlFor="f-assunto">{t("ct.f_subject")}</label>
              <select id="f-assunto" name="assunto" defaultValue="">
                <option value="">{t("ct.opt0")}</option>
                <option value="1">{t("ct.opt1")}</option>
                <option value="2">{t("ct.opt2")}</option>
                <option value="3">{t("ct.opt3")}</option>
                <option value="4">{t("ct.opt4")}</option>
                <option value="5">{t("ct.opt5")}</option>
              </select>
            </div>

            <div className="fg">
              <label htmlFor="f-msg">{t("ct.f_msg")}</label>
              <textarea id="f-msg" name="mensagem" placeholder={t("ct.f_msg_ph")} rows={4} />
            </div>

            <button type="submit" className={`btn btn-g btn-send${sent ? " sent" : ""}`} disabled={sent}>
              {sent ? t("ct.sent") : t("ct.send")}
              {sent ? null : <ArrowRight size={16} strokeWidth={2.2} />}
            </button>
            <p className="c-note">{t("ct.note")}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
