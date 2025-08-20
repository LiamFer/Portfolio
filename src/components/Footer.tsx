import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/LiamFer",
      icon: Github,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/willfernandes/",
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      href: "mailto:wiilfern1910@outlook.com",
      icon: Mail,
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              William Fernandes
            </h3>
            <p className="text-secondary-foreground mt-2">
              Desenvolvedor Backend | Java | Python | Spring | SQL | Node.js
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                  aria-label={link.label}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border mb-6" />

          {/* Copyright */}
          <div className="text-center text-secondary-foreground">
            <p className="flex items-center justify-center gap-2 mb-2">
              Feito com <Heart className="h-4 w-4 text-red-500 fill-current" /> por William Fernandes
            </p>
            <p className="text-sm">
              © {currentYear} Todos os direitos reservados.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-6 max-w-md">
            <p className="text-primary font-medium italic">
              "I type things that become real."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;