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
    <>
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
    </>
  );
}
