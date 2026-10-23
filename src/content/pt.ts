import type { Content } from "./types";
import { SITE } from "./site";

// Textos institucionais transcritos do documento do cliente
// "IN_Process_Safety_Dados para site.docx". Não reescrever.
export const pt: Content = {
  lang: "pt",
  htmlLang: "pt-BR",
  path: "/",
  meta: {
    title: "IN Process Safety | Segurança de Processos",
    description: "Segurança de Processos em nosso DNA. Integrada à gestão de riscos do seu negócio.",
    locale: "pt_BR",
  },
  a11y: {
    home: "IN Process Safety — início",
    mainNav: "Principal",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    hero: "Apresentação",
    heroImage: "Instalação industrial",
    prev: "Anterior",
    next: "Próximo",
  },
  nav: {
    about: "Quem Somos",
    solutions: "Soluções",
    training: "Treinamentos",
    industries: "Setores",
    media: "Vídeos e Artigos",
    contact: "Fale conosco",
  },
  hero: {
    title: "Segurança de Processos em nosso DNA.",
    sub: "Integrada à gestão de riscos do seu negócio.",
    ctaPrimary: "Fale conosco",
    ctaSecondary: "Nossas Soluções",
    slogan: ["Optimized process", "Safe Operations"],
  },
  about: {
    label: "Identidade Institucional",
    title: "Quem Somos",
    paragraphs: [
      "A IN Process Safety é uma empresa de consultoria especializada em Segurança de Processos, Gerenciamento de Riscos Industriais e Excelência Operacional, criada para contribuir com operações industriais cada vez mais seguras, confiáveis, eficientes e sustentáveis.",
      "Inspirada no conceito de Segurança de Processos Inerente (Inherent Process Safety) e fundamentada em quase 15 anos de experiência industrial, a IN oferece soluções que integram engenharia, gerenciamento de riscos e boas práticas internacionais, tendo como principal referência a metodologia de Segurança de Processos Baseada em Risco (RBPS), em todas as etapas do ciclo de vida das instalações industriais, desde a concepção dos projetos até o descomissionamento.",
    ],
  },
  identity: {
    label: "Identidade Institucional",
    mission: {
      title: "Missão",
      paragraphs: [
        "Contribuir para que as organizações desenvolvam operações cada vez mais seguras, confiáveis e sustentáveis, por meio de soluções especializadas em Segurança de Processos, fundamentadas no gerenciamento de riscos, promovendo a prevenção de acidentes, o fortalecimento da cultura de Segurança de Processos e a continuidade dos negócios.",
      ],
    },
    vision: {
      title: "Visão",
      paragraphs: [
        "Ser reconhecida como referência em Segurança de Processos, pela excelência técnica e contribuição para a confiabilidade operacional, a sustentabilidade e a continuidade dos negócios, tendo o gerenciamento de riscos como base.",
      ],
    },
    purpose: {
      title: "Propósito",
      paragraphs: [
        "Fazer da Segurança de Processos uma parte natural da cultura e das decisões das organizações.",
        "Acreditamos que operações verdadeiramente seguras são construídas por meio da integração entre pessoas, processos, tecnologia e gestão de riscos.",
        "Nosso propósito é contribuir para que a Segurança de Processos deixe de ser percebida apenas como uma obrigação normativa e seja reconhecida como um valor essencial para a continuidade, a eficiência e a sustentabilidade dos negócios.",
      ],
    },
    valuesTitle: "Valores",
    valuesIntro:
      "Os valores da IN Process Safety estão fundamentados em quatro princípios que orientam nossa atuação, nossas decisões e o relacionamento com os clientes.",
    values: [
      {
        title: "Foco no Cliente",
        text: "Compreender as necessidades e particularidades de cada cliente, oferecendo soluções personalizadas que agreguem valor e fortaleçam a Segurança de Processos.",
      },
      {
        title: "Atitude de Dono",
        text: "Atuar com responsabilidade, proatividade e senso de pertencimento, tratando os desafios dos clientes com a dedicação necessária para resultados consistentes.",
      },
      {
        title: "Compromisso com a Gestão de Riscos",
        text: "Colocar a proteção das pessoas, do meio ambiente, dos ativos e da reputação no centro das decisões, promovendo o gerenciamento responsável dos riscos.",
      },
      {
        title: "Excelência Técnica e Melhoria Contínua",
        text: "Aplicar conhecimento e metodologias reconhecidas para desenvolver soluções eficazes e promover a evolução contínua da Segurança de Processos e da gestão de riscos.",
      },
    ],
  },
  solutions: {
    label: "Soluções",
    title: "Nossas Soluções",
    servicesLabel: "Serviços oferecidos",
    more: "Ver mais",
    less: "Ver menos",
    areas: [
      {
        id: "psm",
        title: "Sistemas de Gestão de Segurança de Processos (PSM)",
        description:
          "Diagnóstico, desenvolvimento, implementação e aprimoramento de Sistemas de Gestão de Segurança de Processos, promovendo a governança dos riscos, o fortalecimento da cultura de Segurança de Processos e a melhoria contínua.",
        services: [
          { title: "Diagnóstico de maturidade em Segurança de Processos (PSM)." },
          { title: "Desenvolvimento e implementação de Sistemas de Gestão de Segurança de Processos (SGSP)." },
          { title: "Desenvolvimento e implementação de sistemáticas de Gestão de Mudanças (MOC)." },
          { title: "Desenvolvimento e implementação de sistemáticas de Investigação de Incidentes de Segurança de Processos." },
          { title: "Desenvolvimento e implementação de sistemáticas de Indicadores de Desempenho (KPIs)." },
          { title: "Desenvolvimento e implementação de Programas de Gestão de Barreiras de Segurança." },
          { title: "Desenvolvimento de políticas, diretrizes e procedimentos de Segurança de Processos." },
          { title: "Desenvolvimento de Programas de Gerenciamento de Riscos (PGR) relacionados à Segurança de Processos." },
          { title: "Acompanhamento e gerenciamento de planos de ação de Segurança de Processos." },
          { title: "Mentoria e assessoria técnica e executiva em Segurança de Processos (PSM)." },
        ],
      },
      {
        id: "riscos",
        title: "Estudos e Análises de Riscos",
        description:
          "Identificação e avaliação dos perigos e riscos associados a projetos, instalações e operações, por meio de metodologias reconhecidas, subsidiando decisões para prevenção de acidentes de processos e redução dos riscos.",
        services: [
          { title: "HAZOP — Estudo de Perigos e Operabilidade." },
          { title: "HAZID — Identificação de Perigos." },
          { title: "LOPA — Análise de Camadas de Proteção." },
          { title: "Bowtie — Análise de Barreiras de Segurança." },
          { title: "APP — Análise Preliminar de Perigos." },
          { title: "APR — Análise Preliminar de Riscos." },
        ],
      },
      {
        id: "projetos",
        title: "Segurança de Processos em Projetos e Operações",
        description:
          "Integração dos princípios de Segurança de Processos ao ciclo de vida das instalações e operações, desde a concepção dos projetos até o descomissionamento.",
        services: [
          { title: "Consultoria em Segurança de Processos Inerente (Inherent Process Safety)." },
          { title: "Avaliações de Segurança de Processos em projetos de engenharia." },
          { title: "Desenvolvimento, implementação e condução de Revisões de Segurança Pré-Partida (PSSR)." },
          { title: "Suporte técnico em comissionamento e partida de instalações industriais." },
          { title: "Desenvolvimento e implementação de Sistemas de Gestão de Alarmes." },
          { title: "Desenvolvimento e revisão de procedimentos operacionais, técnicos e de engenharia." },
          { title: "Desenvolvimento e implementação de Sistemas de Permissão de Trabalho e Práticas Seguras de Trabalho." },
          { title: "Desenvolvimento de checklists operacionais." },
          { title: "Suporte técnico para atendimento a requisitos regulatórios relacionados à Segurança de Processos (ANP, IBAMA, Marinha, CETESB, entre outros)." },
        ],
      },
      {
        id: "auditorias",
        title: "Auditorias, Investigação e Desempenho",
        description:
          "Avaliação da eficácia dos Sistemas de Gestão de Segurança de Processos, investigação de incidentes, monitoramento de indicadores e identificação de oportunidades de melhoria contínua.",
        services: [
          { title: "Desenvolvimento de Programas de Auditorias Internas de Segurança de Processos." },
          { title: "Realização de Auditorias de Sistemas de Gestão de Segurança de Processos (SGSP)." },
          { title: "Auditorias e avaliações de Barreiras de Segurança." },
          { title: "Condução de Investigações de Incidentes de Segurança de Processos." },
          { title: "Gerenciamento, monitoramento e análise de Indicadores de Desempenho de Segurança de Processos (KPIs)." },
        ],
      },
      {
        id: "treinamentos",
        title: "Treinamentos e Desenvolvimento de Competências",
        description:
          "Desenvolvimento de competências técnicas, operacionais e gerenciais em Segurança de Processos, por meio de treinamentos, workshops e capacitações customizadas, fundamentados em metodologias reconhecidas e na experiência prática em operações, contribuindo para o fortalecimento da cultura de Segurança de Processos, o gerenciamento de riscos e a excelência operacional.",
        link: { href: "#treinamentos", label: "Modalidades de capacitação e áreas temáticas" },
      },
      {
        id: "excelencia",
        title: "Excelência e Confiabilidade Operacional",
        description:
          "Suporte técnico especializado na avaliação dos riscos de Segurança de Processos associados a projetos e iniciativas de otimização, melhoria de desempenho e confiabilidade operacional, contribuindo para a implementação de soluções seguras, eficientes e alinhadas à continuidade dos negócios.",
        services: [
          {
            title: "Avaliação de Riscos em Projetos de Otimização de Processos",
            text: "Avaliação dos impactos sobre a Segurança de Processos decorrentes de propostas de aumento de capacidade, alterações de parâmetros operacionais, modificações de equipamentos e outras iniciativas de otimização.",
          },
          {
            title: "Avaliação de Segurança de Processos em Iniciativas de Confiabilidade Operacional",
            text: "Análise dos riscos associados a modificações destinadas a melhorar a disponibilidade, estabilidade e confiabilidade de equipamentos e sistemas, verificando possíveis impactos nas barreiras de proteção e nas condições seguras de operação.",
          },
          {
            title: "Suporte Técnico à Implementação de Melhorias Operacionais",
            text: "Assessoria especializada para avaliar os aspectos de Segurança de Processos durante o planejamento e a implementação de melhorias operacionais, apoiando a identificação de perigos, a avaliação de riscos e a definição de medidas de controle.",
          },
        ],
      },
    ],
  },
  training: {
    label: "Treinamentos",
    title: "Treinamentos e Desenvolvimento de Competências",
    modesTitle: "Modalidades de capacitação",
    modes: [
      {
        title: "Treinamentos Técnicos",
        text: "Capacitações voltadas ao desenvolvimento de conhecimentos e habilidades técnicas em Segurança de Processos, gerenciamento de riscos e metodologias aplicáveis às instalações industriais.",
      },
      {
        title: "Workshops e Capacitações Customizadas",
        text: "Atividades desenvolvidas conforme as necessidades de cada organização, incluindo workshops temáticos, SIPATs, eventos internos, campanhas de conscientização e programas específicos de capacitação.",
      },
      {
        title: "Capacitação de Lideranças",
        text: "Programas direcionados a gestores, com foco no papel da liderança na gestão de riscos, na tomada de decisões e no fortalecimento da cultura de Segurança de Processos.",
      },
    ],
    topicsTitle: "Áreas temáticas dos treinamentos",
    topics: [
      {
        title: "Fundamentos de Segurança de Processos",
        items: [
          "Fundamentos de Segurança de Processos.",
          "Segurança de Processos Baseada em Risco (RBPS).",
          "Cultura de Segurança de Processos.",
          "Percepção de riscos industriais.",
        ],
      },
      {
        title: "Estudos e Análises de Riscos",
        items: ["HAZOP.", "HAZID.", "LOPA.", "Bowtie.", "APP e APR."],
      },
      {
        title: "Sistemas de Gestão de Segurança de Processos",
        items: [
          "Gestão de Mudanças (MOC).",
          "Revisão de Segurança Pré-Partida (PSSR).",
          "Gestão de Barreiras de Segurança.",
          "Gestão de Alarmes.",
        ],
      },
      {
        title: "Investigação de Incidentes e Desempenho",
        items: [
          "Investigação de Incidentes de Segurança de Processos.",
          "Indicadores de Desempenho de Segurança de Processos (KPIs).",
        ],
      },
      {
        title: "Engenharia e Projetos",
        items: [
          "Design Inerentemente Seguro.",
          "Segurança de Processos em Projetos.",
          "Proteção contra Sobrepressão.",
          "Proteção contra Incêndios e Explosões.",
        ],
      },
      {
        title: "Segurança de Processos nas Operações",
        items: [
          "Disciplina Operacional.",
          "Práticas Seguras de Trabalho.",
          "Comissionamento e Start-up de Plantas e Instalações Industriais.",
        ],
      },
      {
        title: "Liderança e Gestão Executiva",
        items: [
          "Liderança em Segurança de Processos.",
          "Tomada de Decisão Baseada em Riscos.",
          "Responsabilidades da Alta Liderança em Segurança de Processos.",
        ],
      },
      {
        title: "Auditorias e Melhoria Contínua",
        items: [
          "Auditorias de Sistemas de Gestão de Segurança de Processos.",
          "Melhoria Contínua em Segurança de Processos.",
        ],
      },
    ],
    closing:
      "A IN Process Safety também desenvolve programas de treinamento personalizados, considerando os riscos, as características operacionais e os objetivos de cada organização.",
    cta: "Fale conosco",
  },
  industries: {
    label: "Setores",
    title: "Áreas de atuação",
    items: [
      "Indústria Química",
      "Indústria Petroquímica",
      "Óleo e Gás",
      "Biocombustíveis e Bioenergia",
      "Papel e Celulose",
      "Armazenamento e Transporte de Produtos Perigosos",
      "Terminais Portuários e Marítimos",
      "Agroindústria",
      "Mineração e Metalurgia",
      "Indústria de Alimentos e Bebidas",
      "Indústria Farmacêutica",
      "Geração de Energia",
    ],
  },
  media: {
    label: "Conteúdos",
    title: "Vídeos e Artigos",
    videosTitle: "Vídeos",
    articlesTitle: "Artigos",
    empty: "Em breve.",
    follow: "Acompanhe a IN Process Safety no LinkedIn",
    read: "Ler artigo",
  },
  contact: {
    label: "Contato",
    title: "Fale conosco",
    infoTitle: "IN Process Safety",
    whatsappDisplay: SITE.whatsappDisplay,
    whatsappCta: "Falar no WhatsApp",
    noWhatsapp: "Não usa WhatsApp? Envie sua mensagem pelo formulário ao lado.",
    addressLabel: "Endereço",
    address: SITE.address,
    cnpjLabel: "CNPJ",
    form: {
      title: "Envie sua mensagem",
      name: "Nome",
      company: "Empresa",
      email: "E-mail",
      phone: "Telefone",
      subject: "Assunto",
      subjectPlaceholder: "Selecione",
      message: "Mensagem",
      send: "Enviar mensagem",
      sending: "Enviando…",
      sent: "Mensagem enviada",
      error: `Não foi possível enviar agora. Escreva para ${SITE.email} ou fale pelo WhatsApp ${SITE.whatsappDisplay}.`,
    },
  },
  footer: { nav: "Navegação", rights: "Todos os direitos reservados." },
};
