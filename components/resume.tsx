import { Download } from "lucide-react"

export function Resume() {
  const experiences = [
    {
      title: "Développeur Web",
      company: "HATLONE TECHNOLOGIES",
      period: "Juillet - Septembre 2024",
      location: "Stage d'été - Projet DevOps",
      descriptions: [
        "Développement et maintenance d'applications web dans un environnement DevOps",
        "Collaboration avec l'équipe technique sur des projets innovants",
        "Mise en œuvre de bonnes pratiques de développement et d'intégration continue"
      ]
    },
    {
      title: "Projet DevOps",
      company: "ESPRIT",
      period: "Septembre - Novembre 2024",
      location: "Gestion Foyer",
      descriptions: [
        "Conception et développement d'une application de gestion de foyer étudiant",
        "Mise en place d'une infrastructure DevOps avec intégration et déploiement continus",
        "Gestion de projet agile avec collaboration d'équipe"
      ]
    }
  ];

  const education = [
    {
      title: "Ingénierie Logicielle",
      company: "ESPRIT",
      period: "2022 - 2025",
      location: "Formation d'ingénieur",
      descriptions: [
        "Spécialisation en développement logiciel et architecture des systèmes",
        "Projets pratiques en développement web, mobile et cloud computing",
        "Acquisition de compétences en gestion de projet agile"
      ]
    },
    {
      title: "Mastère CIM",
      company: "ISETso",
      period: "2020 - 2022",
      location: "Conception et Innovation Mécanique",
      descriptions: [
        "Approfondissement en conception mécanique et innovation technologique",
        "Projets de recherche et développement en ingénierie mécanique",
        "Formation pluridisciplinaire incluant la gestion de projet"
      ]
    },
    {
      title: "Licence Génie Mécanique",
      company: "ISETso",
      period: "2017 - 2020",
      location: "Formation fondamentale en ingénierie",
      descriptions: [
        "Acquisition des bases fondamentales du génie mécanique",
        "Projets pratiques en conception et fabrication mécanique",
        "Initiation aux outils CAO et méthodes de calcul"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Smart Store Intelligent",
      period: "Janvier - Septembre 2025",
      description: "Développement d'un Smart Store intelligent utilisant l'IA pour optimiser la gestion des magasins et prédire les besoins en stock.",
      technologies: ["Node.js", "Express", "React", "Python", "MySQL", "Talend", "IA/ML"],
      type: "Projet Fin d'Études"
    },
    {
      id: 2,
      title: "Application Colocation & Covoiturage",
      period: "Février - Mai 2024",
      description: "Application web complète avec Spring Boot, Angular et MySQL, intégrant un système de gestion des utilisateurs et de leurs rôles.",
      technologies: ["Spring Boot", "Angular", "MySQL", "Leaflet", "Stripe"],
      type: "Projet Académique"
    },
    {
      id: 3,
      title: "Système de Gestion d'Aéroport",
      period: "Septembre - Décembre 2023",
      description: "Automatisation de la gestion des vols, des passagers et des ressources avec .NET, C#, Angular et SQL Server.",
      technologies: [".NET", "C#", "Angular", "SQL Server"],
      type: "Projet Académique"
    },
    {
      id: 4,
      title: "Agence de Voyage Médical",
      period: "Septembre - Décembre 2023",
      description: "Application web avec Symfony et MySQL pour gérer les utilisateurs, destinations et réservations médicales.",
      technologies: ["Symfony", "PHP", "MySQL"],
      type: "Projet Académique"
    }
  ];

  const TimelineSection = ({ title, data }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-center mb-8 text-foreground">{title}</h3>
      
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-1 bg-primary/40 rounded-full"></div>
        
        <div className="space-y-8 pl-12">
          {data.map((item, idx) => (
            <article
              key={idx}
              className="relative bg-card/80 p-6 rounded-lg border border-border shadow-md"
            >
              <div className="absolute -left-6 top-6 w-5 h-5 bg-primary rounded-full border-2 border-white"></div>
              
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-1 mb-4">
                <span>{item.company}</span>
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-foreground">
                {item.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Projets Réalisés</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card/80 p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                {project.type}
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">{project.period}</p>
            <p className="text-[15px] text-foreground mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="resume" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Mon Parcours</h2>

        <TimelineSection title="Expériences Professionnelles" data={experiences} />
        <ProjectsSection />
        <TimelineSection title="Formation" data={education} />

        {/* Compétences Techniques */}
        <div className="bg-card/80 p-6 rounded-lg border border-border shadow-md mb-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Compétences Techniques</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Langages</h4>
              <div className="flex flex-wrap gap-1">
                {["JavaScript", "TypeScript", "Java", "PHP", "C#", "Python"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Frontend</h4>
              <div className="flex flex-wrap gap-1">
                {["Angular", "React", "Bootstrap", "Tailwind"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Backend</h4>
              <div className="flex flex-wrap gap-1">
                {["Spring Boot", "Node.js", "Symfony", ".NET"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Bases de données</h4>
              <div className="flex flex-wrap gap-1">
                {["MySQL", "MongoDB", "PostgreSQL", "SQL Server"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}