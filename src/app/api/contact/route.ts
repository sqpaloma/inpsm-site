import { NextResponse } from "next/server";
import { SITE } from "@/content/site";

export const runtime = "nodejs";

interface Payload {
  nome?: unknown;
  empresa?: unknown;
  email?: unknown;
  telefone?: unknown;
  assunto?: unknown;
  mensagem?: unknown;
  website?: unknown;
  lang?: unknown;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Mail {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}

async function sendWithResend(mail: Mail, apiKey: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: mail.from,
      to: [mail.to],
      reply_to: mail.replyTo,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

async function sendWithSmtp(mail: Mail) {
  const nodemailer = await import("nodemailer");
  const port = Number(process.env.SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
  });
  await transporter.sendMail(mail);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot filled → silently accept so bots don't retry.
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const nome = str(body.nome, 120);
  const empresa = str(body.empresa, 120);
  const email = str(body.email, 160);
  const telefone = str(body.telefone, 40);
  const assunto = str(body.assunto, 200);
  const mensagem = str(body.mensagem, 5000);
  const lang = body.lang === "en" ? "EN" : "PT";

  if (!nome || !mensagem || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  const to = process.env.CONTACT_TO || SITE.email;
  const from = process.env.CONTACT_FROM || process.env.SMTP_USER || "";
  const resendKey = process.env.RESEND_API_KEY;
  const hasSmtp = Boolean(process.env.SMTP_HOST);

  if ((!resendKey && !hasSmtp) || !from) {
    console.error("[contact] E-mail provider not configured (set RESEND_API_KEY or SMTP_HOST, and CONTACT_FROM).");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Nome", nome],
    ["Empresa", empresa],
    ["E-mail", email],
    ["Telefone", telefone],
    ["Assunto", assunto],
    ["Idioma do site", lang],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v || "-"}`).join("\n")}\n\nMensagem:\n${mensagem}\n`;
  const html =
    `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;color:#082651">` +
    rows
      .map(([k, v]) => `<tr><td style="font-weight:bold">${k}</td><td>${escapeHtml(v || "-")}</td></tr>`)
      .join("") +
    `</table><p style="font-family:Arial,sans-serif;font-size:14px;color:#082651;white-space:pre-wrap">${escapeHtml(mensagem)}</p>`;

  const mail: Mail = {
    to,
    from,
    replyTo: `${nome.replace(/[\r\n"<>]/g, "")} <${email}>`,
    subject: `[Site] ${assunto || "Contato"} — ${nome.replace(/[\r\n]/g, " ")}`,
    text,
    html,
  };

  try {
    if (resendKey) await sendWithResend(mail, resendKey);
    else await sendWithSmtp(mail);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
