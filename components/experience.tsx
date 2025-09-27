import { Card, CardContent, CardHeader } from "@/components/ui/card"

const experiences = [
  {
    period: "Janvier - Septembre 2025",
    company: "SQLI Services",
    role: "Stage PFE : Smart Store Intelligent",
    description: [
      "Développement d'un Smart Store intelligent utilisant l'intelligence artificielle pour optimiser la gestion des magasins et prédire les besoins en stock.",
      "Optimisation de la planification d’espace et génération automatique de planogrammes adaptés à chaque magasin.",
      "Gestion dynamique des catégories de produits et amélioration de la collaboration entre les équipes retail pour maximiser la rentabilité.",
      "Backend développé avec Node.js et Express, frontend avec React, et modèles IA en Python pour la prédiction des ventes et des stocks.",
      "Préparation et traitement des données avec Talend Open Studio pour l’apprentissage du modèle.",
      "Implémentation de dashboards pour la visualisation des indicateurs clés, facilitant la prise de décision et l’analyse des performances."
    ],
    technologies: ["Node.js", "Express", "React", "ThreeJS", "Python", "MySQL", "Talend", "IA/ML", "Dashboards"]
  },

   
  {
    period: "Juillet - Septembre 2024",
    company: "HATLONE TECHNOLOGIES - Tunis",
    role: "Stage d'été : Développeur Web",
    description: [
      "Développé la plateforme e-learning en utilisant Symfony.",
      "Dynamisé les pages en implémentant des éléments dynamiques avec AJAX et JavaScript, améliorant significativement l'expérience utilisateur.",
      "Optimisé les flux de données avec MySQL, réduisant les erreurs de traitement de 15 %.",
    ],
    technologies: ["Symfony", "PHP", "JavaScript", "AJAX", "MySQL"],
  },
 
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Expérience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border bg-card/50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
