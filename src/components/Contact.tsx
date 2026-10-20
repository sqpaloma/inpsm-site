"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const inputCls =
    "w-full px-3 py-2.5 border border-[var(--line-inv)] rounded-md bg-transparent text-[var(--text-inv)] text-sm focus:border-[var(--green)] focus:outline-none transition-colors placeholder:text-[var(--text-inv-muted)]/45";
  const labelCls =
    "block text-xs font-medium text-[var(--text-inv-muted)] font-[family-name:var(--font-outfit)] mb-1";

  return (
    <section className="sec-dark py-22 px-4" id="contato">
      <div className="max-w-[1120px] mx-auto">
        <p className="sec-label">{t("ct.label")}</p>
        <h2 className="sec-title">{t("ct.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-[0.42fr_0.58fr] gap-16 mt-14">
          {/* Contact info */}
          <div>
            <h3 className="text-base font-semibold text-white mb-8 font-[family-name:var(--font-outfit)]">
              {t("ct.info_h")}
            </h3>

            <div className="mb-6">
              <div className={labelCls}>WhatsApp</div>
              <div className="text-sm text-[var(--text-inv)]">
                <a
                  href="https://wa.me/5571999999999"
                  className="border-b border-[var(--line-inv)] transition-colors hover:border-white/40"
                >
                  +55 71 99999-9999
                </a>
              </div>
            </div>

            <div className="mb-6">
              <div className={labelCls}>E-mail</div>
              <div className="text-sm text-[var(--text-inv)]">
                <a
                  href="mailto:contato@inprocesssafety.com"
                  className="border-b border-[var(--line-inv)] transition-colors hover:border-white/40"
                >
                  contato@inprocesssafety.com
                </a>
              </div>
            </div>

            <div className="mb-6">
              <div className={labelCls}>LinkedIn</div>
              <div className="text-sm text-[var(--text-inv)]">
                <a
                  href="https://linkedin.com/company/inprocesssafety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[var(--line-inv)] transition-colors hover:border-white/40"
                >
                  /inprocesssafety
                </a>
              </div>
            </div>

            <div className="mb-6">
              <div className={labelCls}>{t("ct.addr_lbl")}</div>
              <div className="text-sm text-[var(--text-inv)]">{t("ct.addr")}</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <h3 className="text-base font-semibold text-white mb-6 font-[family-name:var(--font-outfit)]">
              {t("ct.form_h")}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label htmlFor="f-nome" className={labelCls}>
                  {t("ct.f_name")}
                </label>
                <input
                  type="text"
                  id="f-nome"
                  placeholder={t("ct.f_name_ph")}
                  required
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="f-empresa" className={labelCls}>
                  {t("ct.f_company")}
                </label>
                <input
                  type="text"
                  id="f-empresa"
                  placeholder={t("ct.f_company_ph")}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label htmlFor="f-email" className={labelCls}>
                  E-mail
                </label>
                <input
                  type="email"
                  id="f-email"
                  placeholder={t("ct.f_email_ph")}
                  required
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="f-tel" className={labelCls}>
                  {t("ct.f_phone")}
                </label>
                <input
                  type="tel"
                  id="f-tel"
                  placeholder="+55 (71) 99999-9999"
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mb-3.5">
              <label htmlFor="f-assunto" className={labelCls}>
                {t("ct.f_subject")}
              </label>
              <select
                id="f-assunto"
                className={`${inputCls} [&>option]:bg-[var(--navy)] [&>option]:text-[var(--text-inv)]`}
              >
                <option value="">{t("ct.opt0")}</option>
                <option>{t("ct.opt1")}</option>
                <option>{t("ct.opt2")}</option>
                <option>{t("ct.opt3")}</option>
                <option>{t("ct.opt4")}</option>
                <option>{t("ct.opt5")}</option>
              </select>
            </div>

            <div className="mb-3.5">
              <label htmlFor="f-msg" className={labelCls}>
                {t("ct.f_msg")}
              </label>
              <textarea
                id="f-msg"
                placeholder={t("ct.f_msg_ph")}
                rows={3}
                className={`${inputCls} resize-y min-h-[72px]`}
              />
            </div>

            <button
              type="submit"
              className="w-full font-[family-name:var(--font-outfit)] font-semibold text-sm text-white py-2.5 rounded-md transition-colors mt-1"
              style={{
                background: sent ? "var(--blue)" : "var(--green)",
              }}
            >
              {sent ? t("ct.sent") : t("ct.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
