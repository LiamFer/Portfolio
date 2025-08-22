import ScrollAnimation from "@/components/ScrollAnimation";
import { 
  Coffee, 
  Database, 
  Code, 
  Server, 
  Globe, 
  GitBranch,
  Lightbulb,
  MessageCircle,
  FileText,
  Zap,
  Terminal,
  Layers,
  Star,
  Trophy,
  Cpu
} from "lucide-react";

const Skills = () => {
  const mainSkills = [
    { 
      name: "Java", 
      icon: Coffee, 
      color: "text-orange-500", 
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      category: "Backend"
    },
    { 
      name: "Python", 
      icon: Code, 
      color: "text-yellow-500", 
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
      category: "Backend"
    },
    { 
      name: "Spring Boot", 
      icon: Layers, 
      color: "text-green-500", 
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      category: "Framework"
    },
    { 
      name: "MySQL", 
      icon: Database, 
      color: "text-blue-500", 
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      category: "Database"
    },
    { 
      name: "React", 
      icon: Zap, 
      color: "text-cyan-400", 
      bgColor: "bg-cyan-400/20",
      borderColor: "border-cyan-400/30",
      category: "Frontend"
    },
    { 
      name: "Node.js", 
      icon: Server, 
      color: "text-green-400", 
      bgColor: "bg-green-400/20",
      borderColor: "border-green-400/30",
      category: "Backend"
    }
  ];

  const otherSkills = [
    { name: "JavaScript", icon: Terminal, color: "text-yellow-400" },
    { name: "TypeScript", icon: FileText, color: "text-blue-400" },
    { name: "Git", icon: GitBranch, color: "text-red-500" },
    { name: "RESTful APIs", icon: Globe, color: "text-purple-400" },
    { name: "Resolução de Problemas", icon: Lightbulb, color: "text-yellow-300" },
    { name: "Comunicação", icon: MessageCircle, color: "text-pink-400" }
  ];

  const specialties = [
    { icon: Cpu, title: "Algoritmos", description: "LeetCode praticante", color: "text-primary" },
    { icon: Trophy, title: "Performance", description: "Código otimizado", color: "text-accent" },
    { icon: Star, title: "Clean Code", description: "Boas práticas", color: "text-primary" }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-16 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <ScrollAnimation>
          <h2 className="section-title">Habilidades</h2>
        </ScrollAnimation>
        
        {/* Main Skills Grid */}
        <ScrollAnimation delay={200}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Principais Tecnologias
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <ScrollAnimation key={skill.name} delay={400 + index * 100}>
                    <div className="group relative">
                      {/* Animated Border */}
                      <div className={`absolute -inset-1 bg-gradient-to-br ${skill.bgColor} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
                      
                      <div className={`relative bg-card/90 backdrop-blur-sm border-2 ${skill.borderColor} rounded-2xl p-6 hover:scale-105 transform transition-all duration-500 cursor-pointer`}>
                        <div className="text-center">
                          <div className={`w-16 h-16 ${skill.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className={`h-8 w-8 ${skill.color}`} />
                          </div>
                          
                          <h4 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </h4>
                          
                          <span className={`inline-block px-3 py-1 text-xs rounded-full ${skill.bgColor} ${skill.color} font-medium`}>
                            {skill.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>

        {/* Other Skills */}
        <ScrollAnimation delay={800}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-accent" />
              Outras Competências
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {otherSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <ScrollAnimation key={skill.name} delay={1000 + index * 100}>
                    <div className="tech-card text-center p-4 hover:scale-110 transform transition-all duration-300 group cursor-pointer hover:border-primary/30">
                      <IconComponent 
                        className={`h-8 w-8 mx-auto mb-3 ${skill.color} group-hover:scale-125 transition-transform duration-300`}
                      />
                      <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>

        {/* Specialties */}
        <ScrollAnimation delay={1200}>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Especialidades
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {specialties.map((specialty, index) => {
                const IconComponent = specialty.icon;
                return (
                  <ScrollAnimation key={specialty.title} delay={1400 + index * 150}>
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                      
                      <div className="relative tech-card text-center p-6 hover:scale-105 transform transition-all duration-500">
                        <div className={`w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-6 w-6 ${specialty.color}`} />
                        </div>
                        <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {specialty.title}
                        </h4>
                        <p className="text-secondary-foreground text-sm">
                          {specialty.description}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={1800}>
          <div className="mt-16 text-center">
            <div className="inline-block relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
              <div className="relative tech-card p-6 bg-card/90 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Lightbulb className="h-6 w-6 text-accent animate-pulse" />
                  <p className="text-lg text-accent font-semibold">LeetCode</p>
                </div>
                <p className="text-secondary-foreground">
                  Praticando algoritmos e estruturas de dados regularmente
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Skills;