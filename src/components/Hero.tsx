
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Code2, Server, Database, GitBranch } from "lucide-react";
import SilkBackground from "@/components/SilkBackground";

const Hero = () => {
  const profileImage = "https://media.licdn.com/dms/image/v2/D4D03AQFmOtmA_G-7Eg/profile-displayphoto-shrink_200_200/B4DZXxba3KHsAk-/0/1743512252344?e=2147483647&v=beta&t=EMAf8lHCWHgaVA7WYou62jB6uePcU8OaTgZy2nK2BQQ";

  const scrollToPortfolio = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const techIcons = [
    { Icon: Code2, delay: "0s", position: "top-20 left-20" },
    { Icon: Server, delay: "0.5s", position: "top-32 right-24" },
    { Icon: Database, delay: "1s", position: "bottom-40 left-16" },
    { Icon: GitBranch, delay: "1.5s", position: "bottom-32 right-20" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-8"> 
      <SilkBackground speed={5}
        scale={1}
        color="#3d2e79ff"
        noiseIntensity={1.5}
        rotation={0} />
      
      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => (
        <div 
          key={index}
          className={`absolute ${tech.position} opacity-20 animate-pulse hidden xl:block`}
          style={{ animationDelay: tech.delay }}
        >
          <tech.Icon className="h-8 w-8 xl:h-12 xl:w-12 text-primary" />
        </div>
      ))}
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 md:w-32 md:h-32 border border-primary/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-20 w-8 h-8 md:w-16 md:h-16 border-2 border-accent/30 rounded-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium animate-fade-in">
                  👋 Olá! Eu sou o
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
                  William
                </span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in" style={{animationDelay: '0.4s'}}>
                  Fernandes
                </span>
              </h1>
              
              <div className="space-y-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold">
                  Desenvolvedor Backend
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs sm:text-sm text-secondary-foreground">
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-card/80 rounded-full border">Java</span>
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-card/80 rounded-full border">Python</span>
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-card/80 rounded-full border">Spring</span>
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-card/80 rounded-full border">Node.js</span>
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in leading-relaxed" style={{animationDelay: '0.8s'}}>
              💻 Transformando ideias em código. Criando soluções robustas e escaláveis para o mundo digital com paixão e dedicação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in max-w-md mx-auto lg:mx-0" style={{animationDelay: '1s'}}>
              <button 
                onClick={scrollToPortfolio}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex-1 sm:flex-initial"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Ver Portfólio
                  <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-y-1" />
                </span>
              </button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-2xl border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 flex-1 sm:flex-initial"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Right side - Profile image with effects */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{animationDuration: '3s'}}></div>
              <div className="absolute -inset-2 sm:-inset-4 rounded-full border border-accent/20 animate-spin-slow"></div>
              <div className="absolute -inset-4 sm:-inset-8 rounded-full border border-primary/10 animate-pulse"></div>
              
              {/* Main image */}
              <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500"></div>
                <img
                  src={profileImage}
                  alt="William Fernandes - Desenvolvedor Backend"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-primary/90 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold animate-bounce shadow-lg" style={{animationDelay: '2s'}}>
                🚀 Backend Dev
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-accent/90 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold animate-bounce shadow-lg" style={{animationDelay: '2.5s'}}>
                💼 Disponível
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-secondary-foreground">Explore</span>
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
