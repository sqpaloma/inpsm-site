export type Lang = "pt" | "en";

export interface TitledText {
  title: string;
  text: string;
}

export interface SolutionArea {
  id: string;
  title: string;
  description: string;
  services?: { title: string; text?: string }[];
  link?: { href: string; label: string };
}

export interface MediaItem {
  title: string;
  url: string;
  /** Short line shown under the title (source, date…). Optional. */
  meta?: string;
}

export interface Content {
  lang: Lang;
  htmlLang: string;
  path: string;
  meta: { title: string; description: string; locale: string };
  a11y: {
    home: string;
    mainNav: string;
    language: string;
    openMenu: string;
    closeMenu: string;
    hero: string;
    heroImage: string;
    prev: string;
    next: string;
  };
  nav: {
    about: string;
    solutions: string;
    training: string;
    industries: string;
    media: string;
    contact: string;
  };
  hero: {
    title: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    slogan: [string, string];
  };
  about: { label: string; title: string; paragraphs: string[] };
  identity: {
    label: string;
    mission: { title: string; paragraphs: string[] };
    vision: { title: string; paragraphs: string[] };
    purpose: { title: string; paragraphs: string[] };
    valuesTitle: string;
    valuesIntro: string;
    values: TitledText[];
  };
  solutions: {
    label: string;
    title: string;
    servicesLabel: string;
    more: string;
    less: string;
    areas: SolutionArea[];
  };
  training: {
    label: string;
    title: string;
    modesTitle: string;
    modes: TitledText[];
    topicsTitle: string;
    topics: { title: string; items: string[] }[];
    closing: string;
    cta: string;
  };
  industries: { label: string; title: string; items: string[] };
  media: {
    label: string;
    title: string;
    videosTitle: string;
    articlesTitle: string;
    empty: string;
    follow: string;
    read: string;
  };
  contact: {
    label: string;
    title: string;
    infoTitle: string;
    whatsappDisplay: string;
    whatsappCta: string;
    noWhatsapp: string;
    addressLabel: string;
    address: string;
    cnpjLabel: string;
    form: {
      title: string;
      name: string;
      company: string;
      email: string;
      phone: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      send: string;
      sending: string;
      sent: string;
      error: string;
    };
  };
  footer: { nav: string; rights: string };
}
