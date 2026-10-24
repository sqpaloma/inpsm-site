"use client";

import { I18nProvider } from "@/lib/i18n";
import { RevealRoot } from "@/lib/reveal";
import type { Lang } from "@/content/types";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Identity from "./Identity";
import Services from "./Services";
import Training from "./Training";
import Industries from "./Industries";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Site({ lang }: { lang: Lang }) {
  return (
    <I18nProvider lang={lang}>
      <RevealRoot>
        <Header />
        <main>
          <Hero />
          <About />
          <Identity />
          <Services />
          <Training />
          <Industries />
          <Contact />
        </main>
        <Footer />
      </RevealRoot>
    </I18nProvider>
  );
}
