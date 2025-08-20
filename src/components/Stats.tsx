import ScrollAnimation from "@/components/ScrollAnimation";
import { Code, Calendar, Github, Trophy } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Calendar,
      number: "2+",
      label: "Anos de Experiência",
      color: "text-primary"
    },
    {
      icon: Github,
      number: "15+", 
      label: "Projetos no GitHub",
      color: "text-accent"
    },
    {
      icon: Code,
      number: "10+",
      label: "Tecnologias Dominadas",
      color: "text-primary"
    },
    {
      icon: Trophy,
      number: "3",
      label: "GitHub Achievements",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 px-6 bg-card/20">
      <div className="container mx-auto">
        <ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <ScrollAnimation
                  key={stat.label}
                  delay={index * 100}
                  className="text-center"
                >
                  <div className="tech-card group cursor-pointer h-full">
                    <IconComponent className={`h-10 w-10 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                      {stat.number}
                    </div>
                    <p className="text-secondary-foreground text-sm md:text-base font-medium">
                      {stat.label}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Stats;