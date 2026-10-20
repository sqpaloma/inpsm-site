# IN Process Safety — Landing Page

Landing page institucional da **IN Process Safety**, consultoria especializada em segurança de processos e gestão de riscos industriais.

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3.4** com design system customizado
- **shadcn/ui** (componentes a serem adicionados conforme necessário)
- **Lucide React** (ícones)
- **Google Fonts**: Outfit (display) + IBM Plex Sans (body)

## Primeiros Passos

```bash
# 1. Instalar dependências
npm install

# 2. Inicializar shadcn/ui (quando necessário)
npx shadcn@latest init

# 3. Rodar em modo desenvolvimento
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Tailwind + custom properties + component styles
│   ├── layout.tsx        # Root layout (fontes, SEO metadata)
│   └── page.tsx          # Página principal
├── components/
│   ├── Header.tsx        # Header sticky com menu mobile
│   ├── Hero.tsx          # Hero com foto industrial
│   ├── About.tsx         # Quem Somos + stats
│   ├── Identity.tsx      # Missão / Visão / Propósito + Valores
│   ├── Services.tsx      # 6 áreas de atuação
│   ├── Training.tsx      # 8 eixos temáticos + 3 modalidades
│   ├── Industries.tsx    # 12 setores atendidos
│   ├── Contact.tsx       # Informações de contato + formulário
│   └── Footer.tsx        # Footer com navegação e CNPJ
└── lib/
    └── utils.ts          # cn() utility
public/
├── hero.png              # Foto panorâmica industrial
├── logo.svg              # Logo principal (fundo transparente)
└── logo-white-bg.svg     # Logo com fundo branco
```

## Design System

### Cores da Marca

| Token  | Hex       | Uso                    |
|--------|-----------|------------------------|
| navy   | `#071F40` | Backgrounds escuros    |
| blue   | `#024290` | Destaques, tags        |
| green  | `#77B319` | CTAs, marcadores       |
| inst   | `#082651` | Textos institucionais  |
| mist   | `#ECF0F6` | Fundos claros          |

### Elementos Proprietários

- **MARCADOR** (green-dot): ponto verde no canto superior esquerdo dos cards
- **LINHA + PONTO** (blue-line): linha azul na base dos cards com ponto verde
- **CAMPO**: campos com fundo arredondado azul

### Tipografia

- **Display**: Outfit — títulos, headings, navigation, CTAs
- **Body**: IBM Plex Sans — texto corrido, descrições

## Build para Produção

```bash
npm run build
npm run start
```

## Contato

- **Site**: [www.inpsm.com](https://www.inpsm.com)
- **E-mail**: contato@inpsm.com
- **WhatsApp**: +55 71 99998-3668
