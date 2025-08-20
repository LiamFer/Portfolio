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
  Layers
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Java", icon: Coffee, color: "text-orange-500" },
    { name: "Spring Boot", icon: Layers, color: "text-green-500" },
    { name: "Python", icon: Code, color: "text-yellow-500" },
    { name: "MySQL", icon: Database, color: "text-blue-500" },
    { name: "JavaScript", icon: Terminal, color: "text-yellow-400" },
    { name: "TypeScript", icon: FileText, color: "text-blue-400" },
    { name: "React", icon: Zap, color: "text-cyan-400" },
    { name: "Node.js", icon: Server, color: "text-green-400" },
    { name: "Git", icon: GitBranch, color: "text-red-500" },
    { name: "RESTful APIs", icon: Globe, color: "text-purple-400" },
    { name: "Resolução de Problemas", icon: Lightbulb, color: "text-yellow-300" },
    { name: "Comunicação", icon: MessageCircle, color: "text-pink-400" }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name} 
                className="tech-card text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bounce-in">
                  <IconComponent 
                    className={`h-12 w-12 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="tech-card inline-block">
            <p className="text-lg text-accent font-semibold mb-2">LeetCode</p>
            <p className="text-secondary-foreground">
              Praticando algoritmos e estruturas de dados regularmente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;