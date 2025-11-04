"use client";

import { useState } from "react";

export default function Resume() {
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const experiences = [
    {
      title: "Smart Store Intelligent",
      company: "SQLI Services",
      period: "Janvier - Septembre 2025",
      location: "Stage PFE : Smart Store Intelligent",
      descriptions: [
        "Conception et développement d'une plateforme web intelligente de gestion de magasins (Smart Store) avec Node.js/Express, React/Next.js et Python, intégrant des fonctionnalités IA et des visualisations 3D interactives (Three.js).",
        "Développement et optimisation de modèles d'apprentissage supervisé (Scikit-learn, XGBoost, Random Forest) atteignant 92 % de précision pour la recommandation et la génération automatique de planogrammes produits.",
        "Mise en place d'un système d'authentification sécurisé (JWT) pour la gestion des accès administrateurs et utilisateurs terrain."
      ],
    },
    {
      title: "Projet DevOps",
      company: "ESPRIT",
      period: "Septembre - Novembre 2024",
      location: "Gestion Foyer",
      descriptions: [
        "Mise en place d'une infrastructure DevOps complète pour une application de gestion de foyer, intégrant Jenkins, Git, Docker, SonarQube, Nexus et Kubernetes pour l'orchestration des conteneurs, réduisant les cycles de déploiement de 40 %.",
        "Déploiement de tests automatisés avec JUnit et Mockito, atteignant une couverture de 95 %.",
        "Implémentation d'outils de surveillance et de monitoring avec Prometheus et Grafana, réduisant les incidents non détectés de 20 % et améliorant la visibilité du système.",
      ],
    },
    {
      title: "Développeur Web",
      company: "HATLONE TECHNOLOGIES",
      period: "Juillet - Septembre 2024",
      location: "Plateforme Web - e-Learning",
      descriptions: [
        "Développé la plateforme e-learning en utilisant Symfony.",
        "Dynamisé les pages en implémentant des éléments dynamiques avec AJAX et JavaScript, améliorant significativement l'expérience utilisateur.",
        "Optimisé les flux de données avec MySQL, réduisant les erreurs de traitement de 15 %. ",
      ],
    },
    {
      title: "Développeur Full Stack",
      company: "ESPRIT",
      period: "Février – Mai 2024",
      location: "APPLICATION WEB – COLOCATION & COVOITURAGE",
      descriptions: [
        "Développement d'une application web complète avec Spring Boot, Angular et MySQL, intégrant un système de gestion des utilisateurs et des rôles pour un contrôle d'accès sécurisé.",
        "Implémentation de cartes interactives avec Leaflet et d'un paiement sécurisé via Stripe, améliorant respectivement la précision des interactions de 30 % et la fluidité des transactions.",
        "Adoption d'une architecture RESTful et de bonnes pratiques de code, réduisant les temps de requêtes de 20 % et les bugs signalés de 15 %.",
      ],
    },
  ]

  const education = [
    {
      title: "Ingénierie Logicielle",
      company: "ESPRIT",
      period: "2022 - 2025",
      location: "Formation d'ingénieur",
      descriptions: [
        "Spécialisation en développement logiciel et architecture des systèmes",
        "Projets pratiques en développement web, mobile et cloud computing",
        "Acquisition de compétences en gestion de projet agile",
      ],
    },
    {
      title: "Mastère CIM",
      company: "ISETso",
      period: "2020 - 2022",
      location: "Conception et Innovation Mécanique",
      descriptions: [
        
      ],
    },
    {
      title: "Licence Génie Mécanique",
      company: "ISETso",
      period: "2017 - 2020",
      location: "Formation fondamentale en ingénierie",
      descriptions: [
     
      ],
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Smart Store Intelligent",
      period: "Janvier - Septembre 2025",
      description:
        "Développement d'un Smart Store intelligent utilisant l'IA pour optimiser la gestion des magasins et prédire les besoins en stock.",
      technologies: ["Node.js", "Express", "React", "Python", "MySQL", "Talend", "IA/ML"],
      type: "Projet Fin d'Études",
    },
    {
      id: 2,
      title: "Application Colocation & Covoiturage",
      period: "Février - Mai 2024",
      description:
        "Application web complète avec Spring Boot, Angular et MySQL, intégrant un système de gestion des utilisateurs et de leurs rôles.",
      technologies: ["Spring Boot", "Angular", "MySQL", "Leaflet", "Stripe"],
      type: "Projet Académique",
    },
    {
      id: 3,
      title: "Système de Gestion d'Aéroport",
      period: "Septembre - Décembre 2023",
      description:
        "Automatisation de la gestion des vols, des passagers et des ressources avec .NET, C#, Angular et SQL Server.",
      technologies: [".NET", "C#", "Angular", "SQL Server"],
      type: "Projet Académique",
    },
    {
      id: 4,
      title: "Agence de Voyage Médical",
      period: "Septembre - Décembre 2023",
      description:
        "Application web avec Symfony et MySQL pour gérer les utilisateurs, destinations et réservations médicales.",
      technologies: ["Symfony", "PHP", "MySQL"],
      type: "Projet Académique",
    },
  ]

  const handleDownload = (language) => {
    const filename = language === 'fr' 
      ? "amir-hjiri.pdf" 
      : "EN-Amir-CV.pdf";
    
    const filepath = language === 'fr' 
      ? "/amir-hjiri.pdf" 
      : "/EN-Amir-CV.pdf";

    const link = document.createElement("a");
    link.href = filepath;
    link.download = filename;
    link.click();
    setShowLanguageModal(false);
  };

  const openLanguageModal = () => {
    setShowLanguageModal(true);
  };

  const closeLanguageModal = () => {
    setShowLanguageModal(false);
  };

  return (
    <section id="resume" className="bg-[#0f0f0f] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <h2 className="mb-10 text-3xl font-bold text-white lg:mb-12 lg:text-4xl">
          MON <span className="text-[#FFD700]">RÉSUMÉ</span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Expériences */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white lg:text-2xl border-b-2 border-[#FFD700] pb-2 inline-block">
              Expériences Professionnelles
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#FFD700] bg-[#1a1a1a] p-6 lg:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/10"
                >
                  <div className="mb-2 text-xs font-bold text-[#FFD700] bg-[#FFD700]/10 px-2 py-1 inline-block border border-[#FFD700]/30 lg:text-sm">
                    {exp.period}
                  </div>
                  <h4 className="mb-2 text-base font-bold text-white lg:text-lg">{exp.title}</h4>
                  <div className="mb-2 text-sm font-semibold text-gray-400 lg:text-base">{exp.company}</div>
                  <div className="mb-4 text-xs italic text-gray-500 lg:text-sm">{exp.location}</div>
                  <ul className="space-y-2">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300 lg:text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFD700]" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formation */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white lg:text-2xl border-b-2 border-[#FFD700] pb-2 inline-block">
              Formation
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#FFD700] bg-[#1a1a1a] p-6 lg:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/10"
                >
                  <div className="mb-2 text-xs font-bold text-[#FFD700] bg-[#FFD700]/10 px-2 py-1 inline-block border border-[#FFD700]/30 lg:text-sm">
                    {edu.period}
                  </div>
                  <h4 className="mb-2 text-base font-bold text-white lg:text-lg">{edu.title}</h4>
                  <div className="mb-2 text-sm font-semibold text-gray-400 lg:text-base">{edu.company}</div>
                  <div className="mb-4 text-xs italic text-gray-500 lg:text-sm">{edu.location}</div>
                  <ul className="space-y-2">
                    {edu.descriptions.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300 lg:text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFD700]" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projets Résumé */}
        <div className="mt-10 lg:mt-12">
          <h3 className="mb-6 text-xl font-bold text-white lg:text-2xl border-b-2 border-[#FFD700] pb-2 inline-block">
            Projets Clés
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1a1a1a] border border-[#3a3a3a] p-6 transition-all duration-300 hover:border-[#FFD700] hover:shadow-lg hover:shadow-[#FFD700]/10 lg:p-7"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#FFD700] bg-[#FFD700]/10 px-2 py-1 border border-[#FFD700]/30">
                    {project.type}
                  </span>
                  <span className="text-xs text-gray-400">{project.period}</span>
                </div>
                <h4 className="mb-3 text-base font-bold text-white lg:text-lg">{project.title}</h4>
                <p className="mb-4 text-xs leading-relaxed text-gray-300 lg:text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#FFD700]/10 border border-[#FFD700]/30 px-2 py-1 text-xs font-semibold text-[#FFD700]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center lg:mt-12">
          <button
            onClick={openLanguageModal}
            className="bg-[#FFD700] px-8 py-4 text-base font-bold text-black transition-all hover:bg-[#FFD700]/90 hover:shadow-lg hover:shadow-[#FFD700]/30 lg:px-10 lg:py-5 lg:text-lg"
          >
            TÉLÉCHARGER MON CV (PDF)
          </button>
        </div>

        {/* Modal de sélection de langue */}
        {showLanguageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a1a] border border-[#FFD700] rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Choisir la langue du CV
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Sélectionnez la version que vous souhaitez télécharger
              </p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => handleDownload('fr')}
                  className="bg-[#FFD700] text-black font-bold py-3 px-4 rounded-lg hover:bg-[#FFD700]/90 transition-all flex items-center justify-center gap-2"
                >
                  <span>🇫🇷</span>
                  <span>Version Française</span>
                </button>
                <button
                  onClick={() => handleDownload('en')}
                  className="bg-[#FFD700] text-black font-bold py-3 px-4 rounded-lg hover:bg-[#FFD700]/90 transition-all flex items-center justify-center gap-2"
                >
                  <span>🇬🇧</span>
                  <span>Version Anglaise</span>
                </button>
                <button
                  onClick={closeLanguageModal}
                  className="bg-gray-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition-all"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}