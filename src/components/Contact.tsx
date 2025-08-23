import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      type: "Email",
      value: "wiilfern1910@outlook.com",
      href: "mailto:wiilfern1910@outlook.com",
      icon: Mail,
      color: "text-blue-500"
    },
    {
      type: "GitHub",
      value: "LiamFer",
      href: "https://github.com/LiamFer",
      icon: Github,
      color: "text-gray-400"
    },
    {
      type: "LinkedIn",
      value: "willfernandes",
      href: "https://www.linkedin.com/in/willfernandes/",
      icon: Linkedin,
      color: "text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Vamos Conversar?</h2>
        
        <div className="cursor-target tech-card text-center mb-12">
          <div className="fade-in">
            <MessageCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
            <p className="text-xl text-secondary-foreground mb-8 leading-relaxed">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato comigo através dos canais abaixo!
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div 
                key={contact.type}
                className="cursor-target tech-card text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bounce-in">
                  <IconComponent 
                    className={`h-12 w-12 mx-auto mb-4 ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {contact.type}
                  </h3>
                  <p className="text-secondary-foreground mb-4">
                    {contact.value}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                    asChild
                  >
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      Conectar
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="cursor-target tech-card inline-block">
            <p className="text-lg text-accent font-semibold mb-2">
              "Transformando ideias em código"
            </p>
            <p className="text-secondary-foreground">
              Desenvolvedor apaixonado por criar soluções que fazem a diferença
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;