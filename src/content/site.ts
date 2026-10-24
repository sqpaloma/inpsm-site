// Dados de contato enviados pelo cliente (docx "Dados para site").
// WhatsApp comercial da IN (não o pessoal). DDI 55 + (71) 99998-3668.
export const WHATSAPP_E164 = "5571999983668";

export const SITE = {
  name: "IN Process Safety",
  url: "https://www.inpsm.com",
  email: "contato@inpsm.com",
  whatsapp: WHATSAPP_E164,
  whatsappHref: `https://wa.me/${WHATSAPP_E164}`,
  whatsappDisplay: "71 99998-3668",
  linkedin: "https://www.linkedin.com/company/inprocesssafety",
  linkedinDisplay: "linkedin.com/company/inprocesssafety",
  cnpj: "67.824.830/0001-04",
  // Endereço público do site. O logradouro do docx é dado de contrato e não entra aqui.
  address: "Salvador, Bahia, Brasil",
  slogan: "Optimized process | Safe Operations",
} as const;
