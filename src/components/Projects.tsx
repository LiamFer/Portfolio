import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import trenchatPreview from "@/assets/trenchat-preview.jpg";
import cloudcartPreview from "@/assets/cloudcart-preview.jpg";
import fitpulsePreview from "@/assets/fitpulse-preview.jpg";
import markdownPreview from "@/assets/markdown-preview.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Trenchat",
      description: "Plataforma de chat em tempo real construída com Spring Boot e WebSockets, com mensagens instantâneas, múltiplas salas de chat e backend escalável.",
      technologies: ["Java","Spring Boot", "WebSockets", "TypeScript", "Real-time"],
      githubUrl: "https://github.com/LiamFer/Trenchat",
      demoUrl: "#",
      image: trenchatPreview
    },
    {
      title: "CloudCart",
      description: "API REST robusta e escalável para e-commerce construída com Spring Boot. Inclui autenticação JWT, integração com Stripe para pagamentos e Cloudinary para upload de imagens.",
      technologies: ["Java", "Spring Boot", "JWT", "Stripe", "Cloudinary"],
      githubUrl: "https://github.com/LiamFer/CloudCart",
      demoUrl: "#",
      image: "https://raw.githubusercontent.com/LiamFer/CloudCart/main/images/architecture.png"
    },
    {
      title: "Taskflow",
      description: "Taskflow é uma aplicação Fullstack desenvolvida para o gerenciamento de tarefas e fluxos de trabalho, com foco em colaboração em equipe. A aplicação oferece autenticação segura com JWT, integra-se via API REST e WebSocket, e tem uma interface moderna construída com Ant Design.",
      technologies: ["React","NestJS","Real-time", "PostgreSQL", "Task Management"],
      githubUrl: "https://github.com/LiamFer/Taskflow",
      demoUrl: "#",
      image: "https://raw.githubusercontent.com/LiamFer/Taskflow/main/appWorking.gif"
    },
    {
      title: "ENEM Analysis",
      description: "Projeto de análise de dados do ENEM (Exame Nacional do Ensino Médio) com visualizações estatísticas e insights sobre desempenho educacional brasileiro usando ciência de dados.",
      technologies: ["Python", "Data Science", "Pandas", "Matplotlib", "Statistical Analysis"],
      githubUrl: "https://github.com/LiamFer/ENEM-Analysis",
      demoUrl: "https://enem-analysis.streamlit.app/",
      image: "https://raw.githubusercontent.com/LiamFer/ENEM-Analysis/main/graphs/fluxogram.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-title">Projetos</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="tech-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="fade-in">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-secondary-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  
                  {project.demoUrl != "#" && <Button
                    size="sm"
                    className="bg-accent hover:bg-accent/80 text-accent-foreground"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;