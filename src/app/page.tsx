"use client";

import { I18nProvider } from "@/lib/i18n";
import { RevealRoot } from "@/lib/reveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Identity from "@/components/Identity";
import Services from "@/components/Services";
import Training from "@/components/Training";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <I18nProvider>
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
