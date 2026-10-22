import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import type { Content } from "@/content/types";
import { SITE } from "@/content/site";

// Brand book: Gotham Rounded (com licença) → Aptos (ambientes Microsoft) → sans-serif limpa.
// Montserrat é a sans-serif web carregada para quem não tem nenhuma das duas instaladas.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071F40",
  width: "device-width",
  initialScale: 1,
};

export function buildMetadata(c: Content): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: c.path,
      languages: { "pt-BR": "/", en: "/en" },
    },
    openGraph: {
      title: SITE.name,
      description: c.meta.description,
      url: c.path,
      siteName: SITE.name,
      locale: c.meta.locale,
      type: "website",
      images: [{ url: "/hero.jpg", width: 1983, height: 793, alt: SITE.name }],
    },
  };
}

export function RootHtml({ c, children }: { c: Content; children: ReactNode }) {
  return (
    <html lang={c.htmlLang} className={montserrat.variable}>
      <body>
        {/* Marks that JS is running so scroll-reveal styles only apply when they can be resolved */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.setAttribute('data-js','');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
