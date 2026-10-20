import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IN Process Safety | Segurança de Processos e Gestão de Riscos",
  description:
    "Consultoria especializada em segurança de processos e gestão de riscos industriais. PSM, análise de riscos, auditorias, treinamentos e excelência operacional.",
  keywords: [
    "segurança de processos",
    "PSM",
    "gestão de riscos",
    "HAZOP",
    "consultoria industrial",
    "process safety",
    "risk management",
    "industrial safety consulting",
  ],
  openGraph: {
    title: "IN Process Safety",
    description:
      "Segurança de Processos em nosso DNA. Integrada à gestão de riscos do seu negócio.",
    url: "https://www.inpsm.com",
    siteName: "IN Process Safety",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${ibmPlexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
