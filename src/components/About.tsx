import { Code2, Zap, Target, Users, Globe, Award, Calendar, Lightbulb } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const About = () => {
  const highlights = [
    { icon: Calendar, text: "2023", label: "Início da Carreira", color: "text-primary" },
    { icon: Code2, text: "10+", label: "Tecnologias", color: "text-accent" },
    { icon: Globe, text: "Global", label: "Experiência", color: "text-primary" },
    { icon: Award, text: "LeetCode", label: "Praticante", color: "text-accent" }
  ];

  const skills = [
    { name: "Backend Development", level: 4, label: "Avançado", color: "bg-primary" },
    { name: "Problem Solving", level: 5, label: "Especialista", color: "bg-accent" },
    { name: "API Design", level: 4, label: "Avançado", color: "bg-primary" },
    { name: "Database Design", level: 4, label: "Avançado", color: "bg-accent" }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollAnimation>
          <h2 className="section-title">Sobre Mim</h2>
        </ScrollAnimation>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ScrollAnimation delay={200}>
              <div className="group relative">
                {/* Animated Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/90 transition-all duration-500">
                  <div className="space-y-6">
                    <ScrollAnimation delay={400}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">William Fernandes</h3>
                          <p className="text-accent">Desenvolvedor Backend</p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={600}>
                      <p className="text-lg text-secondary-foreground leading-relaxed">
                        Sou formado em <span className="text-accent font-semibold hover:text-accent/80 transition-colors">Análise e Desenvolvimento de Sistemas</span> e 
                        comecei minha jornada em 2023 como estagiário, evoluindo rapidamente para desenvolvedor na área industrial.
                      </p>
                    </ScrollAnimation>
                    
                    <ScrollAnimation delay={800}>
                      <p className="text-lg text-secondary-foreground leading-relaxed">
                        Minha expertise abrange tecnologias como <span className="text-primary font-semibold hover:text-primary/80 transition-colors">Java, Python, MySQL, React, Node.js</span>, 
                        complementadas por ferramentas essenciais como <span className="text-accent font-semibold hover:text-accent/80 transition-colors">Postman e Insomnia</span> para desenvolvimento e testes de APIs.
                      </p>
                    </ScrollAnimation>
                    
                    <ScrollAnimation delay={1000}>
                      <p className="text-lg text-secondary-foreground leading-relaxed">
                        Com experiência internacional usando <span className="text-primary font-semibold hover:text-primary/80 transition-colors">inglês técnico</span> em 
                        apresentações e reuniões globais, sou movido pela paixão por <span className="text-accent font-semibold hover:text-accent/80 transition-colors">lógica, algoritmos e resolução de problemas complexos</span>, 
                        praticando constantemente no <span className="text-primary font-semibold hover:text-primary/80 transition-colors">LeetCode</span>.
                      </p>
                    </ScrollAnimation>

                    <ScrollAnimation delay={1200}>
                      <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                        <div className="flex items-center gap-3">
                          <Lightbulb className="h-8 w-8 text-primary animate-pulse" />
                          <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            "I type things that become real."
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Sidebar with highlights and skills */}
          <div className="space-y-6">
            {/* Highlights */}
            <ScrollAnimation delay={400}>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <ScrollAnimation key={highlight.label} delay={600 + index * 100}>
                      <div className="tech-card text-center p-4 hover:scale-105 transform transition-all duration-300 group cursor-pointer">
                        <IconComponent className={`h-8 w-8 mx-auto mb-2 ${highlight.color} group-hover:scale-110 transition-transform duration-300`} />
                        <div className={`text-2xl font-bold ${highlight.color} mb-1`}>
                          {highlight.text}
                        </div>
                        <p className="text-xs text-secondary-foreground">
                          {highlight.label}
                        </p>
                      </div>
                    </ScrollAnimation>
                  );
                })}
              </div>
            </ScrollAnimation>

            {/* Skills Progress */}
            <ScrollAnimation delay={800}>
              <div className="tech-card p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Expertise
                </h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <ScrollAnimation key={skill.name} delay={1000 + index * 100}>
                      <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-secondary-foreground">{skill.name}</span>
                            <span className="text-xs text-primary font-semibold">{skill.label}</span>
                          </div>
                          <div className="flex gap-2">
                            {[1,2,3,4,5].map((i) => (
                              <div
                                key={i}
                                className={`h-2 flex-1 rounded-full ${i <= skill.level ? skill.color : 'bg-muted'}`}
                                style={{ animationDelay: `${1000 + index * 100}ms` }}
                              />
                            ))}
                          </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;