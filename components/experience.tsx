export default function Experience() {
  const experiences = [
    {
      period: "Novembre 2025 - Janvier 2026",
      company: "Freelance | Projet personnel",
      role: "Développeur Full Stack - Auto-Marketplace",
      description: [
        "Développement d'une plateforme web complète pour l'achat et la vente de véhicules.",
        "Conception et développement d'APIs REST avec Node.js et Express pour la gestion des annonces.",
        "Mise en place d'une authentification sécurisée (JWT) avec gestion des rôles utilisateur/administrateur.",
        "Création de dashboards utilisateur et administrateur avec React et Next.js.",
        "Intégration de Cloudinary pour le stockage et la gestion des images des véhicules.",
        "Implémentation d'un système de filtrage avancé (marque, prix, année, etc.).",
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Git"],
    },
    {
      period: "Août - Octobre 2025",
      company: "Freelance | Client international",
      role: "Développeur Full Stack - Site Web de livraisons",
      description: [
        "Développement d'une application web de gestion de livraisons pour un client basé au Luxembourg.",
        "Création d'APIs REST sécurisées avec Node.js et Express.",
        "Développement de l'interface utilisateur avec React pour le suivi des commandes.",
        "Conception et optimisation de la base de données MySQL.",
        "Travail en méthodologie Agile avec le client et respect des bonnes pratiques (clean code, sécurité).",
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "REST APIs", "Git"],
    },
    
    {
      period: "Janvier - Septembre 2025",
      company: "SQLI Services",
      role: "Stage PFE : Smart Store Intelligent",
      description: [
        "Développement d'un Smart Store intelligent utilisant l'intelligence artificielle pour optimiser la gestion des magasins et prédire les besoins en stock.",
        "Optimisation de la planification d'espace et génération automatique de planogrammes adaptés à chaque magasin.",
        "Gestion dynamique des catégories de produits et amélioration de la collaboration entre les équipes retail pour maximiser la rentabilité.",
        "Backend développé avec Node.js et Express, frontend avec React, et modèles IA en Python pour la prédiction des ventes et des stocks.",
        "Préparation et traitement des données avec Talend Open Studio pour l'apprentissage du modèle.",
        "Implémentation de dashboards pour la visualisation des indicateurs clés, facilitant la prise de décision et l'analyse des performances.",
      ],
      technologies: ["Node.js", "Express", "React", "ThreeJS", "Python", "MySQL", "Talend", "IA/ML", "Dashboards"],
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

  return (
    <section id="experience" className="bg-[#1a1a1a] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <h2 className="mb-10 text-3xl font-bold text-white lg:mb-12 lg:text-4xl">
          MON <span className="text-[#FFD700]">EXPÉRIENCE</span>
        </h2>

        <div className="space-y-8 lg:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative border-l-4 border-[#FFD700] pl-8 lg:pl-10 bg-[#0f0f0f] py-6 pr-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/10"
            >
              <div className="absolute -left-3 top-6 h-5 w-5 rounded-full bg-[#FFD700] border-4 border-[#1a1a1a]" />

              <div className="mb-2 text-sm font-bold text-[#FFD700] bg-[#FFD700]/10 px-3 py-1 inline-block border border-[#FFD700]/30">
                {exp.period}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white lg:text-2xl">{exp.role}</h3>
              <div className="mb-5 text-base font-semibold text-gray-400 lg:text-lg">{exp.company}</div>

              <ul className="mb-5 space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300 lg:text-base">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#FFD700]" />
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#FFD700]/10 border border-[#FFD700]/30 px-3 py-1.5 text-xs font-semibold text-[#FFD700] lg:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
