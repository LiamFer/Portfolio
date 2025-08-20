import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import SilkBackground from "@/components/SilkBackground";

const Hero = () => {
  const profileImage = "https://media.licdn.com/dms/image/v2/D4D03AQFmOtmA_G-7Eg/profile-displayphoto-shrink_200_200/B4DZXxba3KHsAk-/0/1743512252344?e=2147483647&v=beta&t=EMAf8lHCWHgaVA7WYou62jB6uePcU8OaTgZy2nK2BQQ";

  const scrollToPortfolio = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <SilkBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in">
          <div className="bounce-in mb-8">
            <img
              src={profileImage}
              alt="William Fernandes"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary shadow-lg pulse-glow"
              style={{ boxShadow: 'var(--obsidian-glow)' }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block text-foreground">William Fernandes</span>
            <span className="section-title text-2xl md:text-3xl mt-2">
              Desenvolvedor Backend | Java | Python | Spring | SQL | Node.js
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-foreground mb-12 max-w-3xl mx-auto">
            💻 Transformando ideias em código. Soluções robustas e escaláveis para o mundo digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToPortfolio}
              className="hero-button group"
            >
              Ver Portfólio
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;