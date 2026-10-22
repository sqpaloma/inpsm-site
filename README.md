# IN Process Safety — Site institucional

Site institucional da **IN Process Safety** (www.inpsm.com), em português (`/`) e inglês (`/en`).

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3.4** + CSS próprio em `src/app/globals.css`
- **Lucide React** (ícones lineares)

## Primeiros Passos

```bash
npm install
cp .env.example .env.local   # opcional: configurar envio do formulário
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Onde editar o conteúdo

Todos os textos vêm do documento do cliente (`IN_Process_Safety_Dados para site.docx`) e ficam fora dos componentes:

| Arquivo | Conteúdo |
|---|---|
| `src/content/pt.ts` | Textos em português (transcrição literal do docx) |
| `src/content/en.ts` | Tradução fiel para inglês — manter alinhada ao `pt.ts` |
| `src/content/site.ts` | Contatos, endereço, CNPJ, slogan |
| `src/content/media.ts` | Lâmina **Vídeos e Artigos**: adicionar itens às listas `videos` (URL do YouTube) e `articles` (qualquer URL) |

## Formulário de contato

O formulário envia `POST /api/contact`, que manda um e-mail para `CONTACT_TO` (padrão `contato@inpsm.com`) com *Reply-To* do visitante. É preciso configurar **um** provedor via variáveis de ambiente (ver `.env.example`):

- **Resend**: `RESEND_API_KEY` + `CONTACT_FROM` com domínio verificado (`inpsm.com`, registros DNS no Cloudflare).
- **SMTP** (ex.: Microsoft 365): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_FROM`. A caixa usada precisa ter *SMTP AUTH* habilitado.

Sem provedor configurado, a API responde `503` e o formulário mostra uma mensagem com o e-mail e o WhatsApp para contato direto.

## Estrutura

```
src/
├── app/
│   ├── (pt)/            # "/" — layout raiz com <html lang="pt-BR">
│   ├── en/              # "/en" — layout raiz com <html lang="en">
│   ├── api/contact/     # envio do formulário
│   └── globals.css
├── components/          # Header, Hero, About, Identity, Services, Training,
│                        # Industries (carrossel), Media, Contact, Footer, Logo
├── content/             # textos e dados (ver acima)
└── lib/                 # i18n (contexto de conteúdo), reveal, layout compartilhado
public/
├── logo.svg / logo-white-bg.svg    # MASTER v1.2 do cliente (não editar)
├── logo-full.svg                   # master com viewBox recortado na arte (uso web)
├── logo-full-negative.svg          # versão negativa p/ fundos escuros (Brand Book p.10)
└── hero.jpg                        # Foto para Capa (cliente)
```

## Marca (Brand Book v1.0)

- **Logo**: sempre a assinatura completa em SVG (`<Logo />`), nunca abaixo de 120 px de largura, com área de proteção igual à altura do quadrado verde. O descritor "Process Safety" nunca é digitado.
- **Cores**: IN Navy `#082651`, Deep Navy `#071F40`, Process Blue `#02428F`, IN Green `#77B319`, branco; fundos claros Mist `#EAF0F6` e Technical Light `#F4F7FA` (Sistema Gráfico).
- **Tipografia**: `"Gotham Rounded"` → `Aptos` → Montserrat (web font carregada como sans-serif limpa). Para usar Gotham Rounded em todos os dispositivos, adicionar os arquivos licenciados via `@font-face`.

## Build para Produção

```bash
npm run build
npm run start
```
