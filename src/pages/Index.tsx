import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <About />
          <Stats />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
