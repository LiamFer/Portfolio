const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="tech-card text-center">
          <div className="fade-in">
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-6">
              Me chamo <span className="text-primary font-semibold">William Fernandes</span>, sou formado em 
              <span className="text-accent font-semibold"> Análise e Desenvolvimento de Sistemas</span> e 
              comecei minha carreira em 2023 como estagiário em Desenvolvimento de Software na área industrial.
            </p>
            
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-6">
              Desde então, atuo como desenvolvedor, com experiência em tecnologias como 
              <span className="text-primary font-semibold"> Java, Python, MySQL, React, Node.js</span> além de 
              ferramentas como <span className="text-accent font-semibold">Postman e Insomnia</span> para testes de APIs.
            </p>
            
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed mb-6">
              Utilizei o <span className="text-primary font-semibold">inglês</span> em apresentações técnicas e 
              reuniões globais, aprimorando minha comunicação profissional. Sou apaixonado por 
              <span className="text-accent font-semibold"> lógica, programação e resolução de problemas</span>, 
              com interesse especial por algoritmos e estruturas de dados, que pratico regularmente no 
              <span className="text-primary font-semibold">LeetCode</span>.
            </p>
            
            <div className="mt-8">
              <p className="text-2xl font-bold text-primary">
                💻 "I type things that become real."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;