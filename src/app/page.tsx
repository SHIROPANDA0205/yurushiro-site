import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Message from "@/components/sections/Message";
import Values from "@/components/sections/Values";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";
import FinalMessage from "@/components/sections/FinalMessage";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Message />
        <Values />
        <Services />
        <Works />
        <FinalMessage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
