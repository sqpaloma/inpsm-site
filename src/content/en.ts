import type { Content } from "./types";
import { SITE } from "./site";

// English translation of the client's document. Keep it faithful to pt.ts.
export const en: Content = {
  lang: "en",
  htmlLang: "en",
  path: "/en",
  meta: {
    title: "IN Process Safety | Process Safety",
    description: "Process Safety in our DNA. Integrated into your business risk management.",
    locale: "en_US",
  },
  a11y: {
    home: "IN Process Safety — home",
    mainNav: "Main",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    hero: "Introduction",
    heroImage: "Industrial facility",
    prev: "Previous",
    next: "Next",
  },
  nav: {
    about: "About Us",
    solutions: "Solutions",
    training: "Training",
    industries: "Industries",
    media: "Videos and Articles",
    contact: "Contact us",
  },
  hero: {
    title: "Process Safety in our DNA.",
    sub: "Integrated into your business risk management.",
    ctaPrimary: "Contact us",
    ctaSecondary: "Our Solutions",
    slogan: ["Optimized process", "Safe Operations"],
  },
  about: {
    label: "Institutional Identity",
    title: "About Us",
    paragraphs: [
      "IN Process Safety is a consulting firm specialized in Process Safety, Industrial Risk Management and Operational Excellence, created to contribute to increasingly safe, reliable, efficient and sustainable industrial operations.",
      "Inspired by the concept of Inherent Process Safety and grounded in almost 15 years of industrial experience, IN offers solutions that integrate engineering, risk management and international best practices, with the Risk Based Process Safety (RBPS) methodology as its main reference, across all stages of the life cycle of industrial facilities, from project conception to decommissioning.",
    ],
  },
  identity: {
    label: "Institutional Identity",
    mission: {
      title: "Mission",
      paragraphs: [
        "To help organizations develop increasingly safe, reliable and sustainable operations through specialized Process Safety solutions grounded in risk management, promoting accident prevention, the strengthening of Process Safety culture and business continuity.",
      ],
    },
    vision: {
      title: "Vision",
      paragraphs: [
        "To be recognized as a reference in Process Safety for technical excellence and for our contribution to operational reliability, sustainability and business continuity, with risk management as our foundation.",
      ],
    },
    purpose: {
      title: "Purpose",
      paragraphs: [
        "To make Process Safety a natural part of organizations' culture and decisions.",
        "We believe safe operations come from integrating people, processes, technology and risk management, and that safety should be an essential business value, not just a regulatory obligation.",
      ],
    },
    valuesTitle: "Values",
    valuesIntro:
      "The values of IN Process Safety are grounded in four principles that guide our work, our decisions and our relationship with clients.",
    values: [
      {
        title: "Client Focus",
        text: "Understanding the needs and particularities of each client, offering customized solutions that add value and strengthen Process Safety.",
      },
      {
        title: "Ownership Mindset",
        text: "Acting with responsibility, proactivity and a sense of belonging, treating clients' challenges with the dedication needed for consistent results.",
      },
      {
        title: "Commitment to Risk Management",
        text: "Placing the protection of people, the environment, assets and reputation at the center of decisions, promoting responsible risk management.",
      },
      {
        title: "Technical Excellence and Continuous Improvement",
        text: "Applying knowledge and recognized methodologies to develop effective solutions and promote the continuous evolution of Process Safety and risk management.",
      },
    ],
  },
  solutions: {
    label: "Solutions",
    title: "Our Solutions",
    servicesLabel: "Services offered",
    more: "See more",
    less: "See less",
    areas: [
      {
        id: "psm",
        title: "Process Safety Management Systems (PSM)",
        description:
          "Diagnosis, development, implementation and improvement of Process Safety Management Systems, promoting risk governance, the strengthening of Process Safety culture and continuous improvement.",
        services: [
          { title: "Process Safety (PSM) maturity assessment." },
          { title: "Development and implementation of Process Safety Management Systems (PSMS)." },
          { title: "Development and implementation of Management of Change (MOC) processes." },
          { title: "Development and implementation of Process Safety Incident Investigation processes." },
          { title: "Development and implementation of Key Performance Indicator (KPI) processes." },
          { title: "Development and implementation of Safety Barrier Management Programs." },
          { title: "Development of Process Safety policies, guidelines and procedures." },
          { title: "Development of Risk Management Programs (PGR) related to Process Safety." },
          { title: "Follow-up and management of Process Safety action plans." },
          { title: "Technical and executive mentoring and advisory in Process Safety (PSM)." },
        ],
      },
      {
        id: "riscos",
        title: "Risk Studies and Analyses",
        description:
          "Identification and assessment of the hazards and risks associated with projects, facilities and operations, using recognized methodologies, supporting decisions for process accident prevention and risk reduction.",
        services: [
          { title: "HAZOP — Hazard and Operability Study." },
          { title: "HAZID — Hazard Identification." },
          { title: "LOPA — Layer of Protection Analysis." },
          { title: "Bowtie — Safety Barrier Analysis." },
          { title: "APP — Preliminary Hazard Analysis." },
          { title: "APR — Preliminary Risk Analysis." },
        ],
      },
      {
        id: "projetos",
        title: "Process Safety in Projects and Operations",
        description:
          "Integration of Process Safety principles into the life cycle of facilities and operations, from project conception to decommissioning.",
        services: [
          { title: "Inherent Process Safety consulting." },
          { title: "Process Safety assessments of engineering projects." },
          { title: "Development, implementation and conduct of Pre-Startup Safety Reviews (PSSR)." },
          { title: "Technical support for the commissioning and startup of industrial facilities." },
          { title: "Development and implementation of Alarm Management Systems." },
          { title: "Development and review of operating, technical and engineering procedures." },
          { title: "Development and implementation of Permit to Work Systems and Safe Work Practices." },
          { title: "Development of operational checklists." },
          { title: "Technical support for compliance with Process Safety regulatory requirements (ANP, IBAMA, Brazilian Navy, CETESB, among others)." },
        ],
      },
      {
        id: "auditorias",
        title: "Audits, Investigation and Performance",
        description:
          "Assessment of the effectiveness of Process Safety Management Systems, incident investigation, indicator monitoring and identification of continuous improvement opportunities.",
        services: [
          { title: "Development of Internal Process Safety Audit Programs." },
          { title: "Performance of Process Safety Management System (PSMS) audits." },
          { title: "Safety Barrier audits and assessments." },
          { title: "Conduct of Process Safety Incident Investigations." },
          { title: "Management, monitoring and analysis of Process Safety Key Performance Indicators (KPIs)." },
        ],
      },
      {
        id: "treinamentos",
        title: "Training and Competency Development",
        description:
          "Development of technical, operational and managerial competencies in Process Safety through training, workshops and customized programs, grounded in recognized methodologies and practical operational experience, contributing to the strengthening of Process Safety culture, risk management and operational excellence.",
        link: { href: "#treinamentos", label: "Training formats and thematic areas" },
      },
      {
        id: "excelencia",
        title: "Operational Excellence and Reliability",
        description:
          "Specialized technical support in assessing the Process Safety risks associated with optimization, performance improvement and operational reliability projects and initiatives, contributing to the implementation of safe, efficient solutions aligned with business continuity.",
        services: [
          {
            title: "Risk Assessment in Process Optimization Projects",
            text: "Assessment of the Process Safety impacts arising from proposals for capacity increases, changes to operating parameters, equipment modifications and other optimization initiatives.",
          },
          {
            title: "Process Safety Assessment in Operational Reliability Initiatives",
            text: "Analysis of the risks associated with modifications intended to improve the availability, stability and reliability of equipment and systems, verifying possible impacts on protective barriers and on safe operating conditions.",
          },
          {
            title: "Technical Support for the Implementation of Operational Improvements",
            text: "Specialized advisory to assess Process Safety aspects during the planning and implementation of operational improvements, supporting hazard identification, risk assessment and the definition of control measures.",
          },
        ],
      },
    ],
  },
  training: {
    label: "Training",
    title: "Training and Competency Development",
    modesTitle: "Training formats",
    modes: [
      {
        title: "Technical Training",
        text: "Programs aimed at developing technical knowledge and skills in Process Safety, risk management and methodologies applicable to industrial facilities.",
      },
      {
        title: "Workshops and Customized Programs",
        text: "Activities developed according to the needs of each organization, including thematic workshops, SIPATs (internal accident prevention weeks), internal events, awareness campaigns and specific training programs.",
      },
      {
        title: "Leadership Development",
        text: "Programs aimed at managers, focusing on the role of leadership in risk management, decision-making and the strengthening of Process Safety culture.",
      },
    ],
    topicsTitle: "Training thematic areas",
    topics: [
      {
        title: "Process Safety Fundamentals",
        items: [
          "Process Safety Fundamentals.",
          "Risk Based Process Safety (RBPS).",
          "Process Safety Culture.",
          "Industrial risk perception.",
        ],
      },
      {
        title: "Risk Studies and Analyses",
        items: ["HAZOP.", "HAZID.", "LOPA.", "Bowtie.", "APP and APR."],
      },
      {
        title: "Process Safety Management Systems",
        items: [
          "Management of Change (MOC).",
          "Pre-Startup Safety Review (PSSR).",
          "Safety Barrier Management.",
          "Alarm Management.",
        ],
      },
      {
        title: "Incident Investigation and Performance",
        items: [
          "Process Safety Incident Investigation.",
          "Process Safety Key Performance Indicators (KPIs).",
        ],
      },
      {
        title: "Engineering and Projects",
        items: [
          "Inherently Safer Design.",
          "Process Safety in Projects.",
          "Overpressure Protection.",
          "Fire and Explosion Protection.",
        ],
      },
      {
        title: "Process Safety in Operations",
        items: [
          "Operational Discipline.",
          "Safe Work Practices.",
          "Commissioning and Start-up of Industrial Plants and Facilities.",
        ],
      },
      {
        title: "Leadership and Executive Management",
        items: [
          "Process Safety Leadership.",
          "Risk-Based Decision Making.",
          "Senior Leadership Responsibilities in Process Safety.",
        ],
      },
      {
        title: "Audits and Continuous Improvement",
        items: [
          "Process Safety Management System Audits.",
          "Continuous Improvement in Process Safety.",
        ],
      },
    ],
    closing:
      "IN Process Safety also develops customized training programs, taking into account the risks, operational characteristics and objectives of each organization.",
    cta: "Contact us",
  },
  industries: {
    label: "Industries",
    title: "Areas of activity",
    items: [
      "Chemical Industry",
      "Petrochemical Industry",
      "Oil and Gas",
      "Biofuels and Bioenergy",
      "Pulp and Paper",
      "Storage and Transportation of Hazardous Materials",
      "Port and Marine Terminals",
      "Agribusiness",
      "Mining and Metallurgy",
      "Food and Beverage Industry",
      "Pharmaceutical Industry",
      "Power Generation",
    ],
  },
  media: {
    label: "Content",
    title: "Videos and Articles",
    videosTitle: "Videos",
    articlesTitle: "Articles",
    empty: "Coming soon.",
    follow: "Follow IN Process Safety on LinkedIn",
    read: "Read article",
  },
  contact: {
    label: "Contact",
    title: "Contact us",
    infoTitle: "IN Process Safety",
    whatsappDisplay: `+55 ${SITE.whatsappDisplay}`,
    whatsappCta: "Chat on WhatsApp",
    noWhatsapp: "Don't use WhatsApp? Send a message with the form instead.",
    addressLabel: "Address",
    address: "Salvador, Bahia, Brazil",
    cnpjLabel: "CNPJ (Brazilian company ID)",
    form: {
      title: "Send us a message",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      subjectPlaceholder: "Select",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent",
      error: `We could not send your message right now. Please write to ${SITE.email} or reach us on WhatsApp at +55 ${SITE.whatsappDisplay}.`,
    },
  },
  footer: { nav: "Navigation", rights: "All rights reserved." },
};
