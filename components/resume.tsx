"use client";

import { useState } from "react";

export default function Resume() {
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const experiences = [
    {
      title: "Développeur Full Stack",
      company: "Freelance",
      period: "Août 2025 - Janvier 2026",
      location: "Projets freelance & personnels",
      descriptions: [
        "Développement d'applications web complètes avec React, Node.js et bases de données SQL/NoSQL",
        "Conception d'APIs REST sécurisées avec authentification JWT et gestion des rôles",
        "Création d'interfaces utilisateur modernes et responsives avec React et Tailwind CSS",
        "Collaboration avec des clients pour comprendre les besoins et livrer des solutions adaptées",
      ],
    },
    {
      title: "Développeur Full Stack - Stage PFE",
      company: "SQLI Services",
      period: "Janvier - Septembre 2025",
      location: "Projet Smart Store",
      descriptions: [
        "Développement d'une plateforme web B2B pour l'optimisation de la gestion de magasins retail",
        "Création d'APIs backend avec Node.js et interfaces frontend avec React/Next.js",
        "Travail en équipe Agile (Scrum) avec collaboration quotidienne",
        "Manipulation et visualisation de données métier pour la prise de décision",
      ],
    },
    {
      title: "Développeur Web",
      company: "HATLONE TECHNOLOGIES",
      period: "Juillet - Septembre 2024",
      location: "Stage - Plateforme E-learning",
      descriptions: [
        "Développement d'une plateforme e-learning avec Symfony (PHP)",
        "Création d'interfaces utilisateur dynamiques avec JavaScript et AJAX",
        "Gestion de base de données MySQL et optimisation des performances",
        "Amélioration de l'expérience utilisateur et de l'accessibilité",
      ],
    },
  ]

  const education = [
    {
      title: "Ingénieur en Génie Logiciel",
      company: "ESPRIT - École d'ingénieurs",
      period: "2022 - 2025",
      location: "Tunis, Tunisie",
      descriptions: [
        "Spécialisation en développement web et architecture logicielle",
        "Projets pratiques en développement Full Stack, bases de données et méthodes agiles",
        "Formation approfondie en algorithmique, structures de données et bonnes pratiques de développement",
      ],
    },
    {
      title: "Mastère en Conception Assistée par Ordinateur",
      company: "ISET Sousse",
      period: "2020 - 2022",
      location: "Sousse, Tunisie",
      descriptions: [
        "Formation en conception mécanique et modélisation 3D",
        "Initiation à la programmation et aux systèmes informatiques",
        "Projet de fin d'études en développement d'applications techniques",
      ],
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Auto-Marketplace",
      period: "Novembre 2025 - Janvier 2026",
      description:
        "Plateforme web complète pour l'achat et la vente de véhicules. Développement Full Stack avec React, Node.js et MongoDB.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      type: "Projet Personnel",
    },
    {
      id: 2,
      title: "Application de Livraisons",
      period: "Août - Octobre 2025",
      description:
        "Application web de gestion de livraisons développée pour un client. Interface de suivi en temps réel.",
      technologies: ["React", "Node.js", "Express", "MySQL", "REST APIs"],
      type: "Projet Freelance",
    },
    {
      id: 3,
      title: "Plateforme E-learning",
      period: "Juillet - Septembre 2024",
      description:
        "Système de gestion de formation en ligne avec gestion des cours, utilisateurs et progression.",
      technologies: ["Symfony", "PHP", "MySQL", "JavaScript"],
      type: "Projet Professionnel",
    },
    {
      id: 4,
      title: "Application Colocation",
      period: "Février - Mai 2024",
      description:
        "Plateforme web pour la gestion de colocations et covoiturages avec géolocalisation et paiement.",
      technologies: ["Spring Boot", "Angular", "MySQL", "Leaflet"],
      type: "Projet Académique",
    },
  ]

  const handleDownload = (language : any) => {
    const filename = language === 'fr' 
      ? "Full_Stack_Developer-HJIRI_Amir.pdf" 
      : "Full_Stack_Developer-HJIRI_Amir_EN.pdf";
    
    const filepath = language === 'fr' 
      ? "/Full_Stack_Developer-HJIRI_Amir.pdf" 
      : "/Full_Stack_Developer-HJIRI_Amir_EN.pdf";

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
          MON <span className="text-[#FFD700]">PARCOURS</span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Expériences */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white lg:text-2xl border-b-2 border-[#FFD700] pb-2 inline-block">
              Expérience
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
            Projets Réalisés
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1a1a1a] border border-[#3a3a3a] p-5 transition-all duration-300 hover:border-[#FFD700] hover:shadow-lg hover:shadow-[#FFD700]/10 lg:p-6"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#FFD700] bg-[#FFD700]/10 px-2 py-1 border border-[#FFD700]/30">
                    {project.type}
                  </span>
                  <span className="text-xs text-gray-400">{project.period}</span>
                </div>
                <h4 className="mb-3 text-base font-bold text-white lg:text-lg">{project.title}</h4>
                <p className="mb-4 text-xs leading-relaxed text-gray-300 lg:text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#FFD700]/10 border border-[#FFD700]/30 px-2 py-1 text-xs font-semibold text-[#FFD700]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-800 border border-gray-700 px-2 py-1 text-xs text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton Télécharger CV */}
        <div className="mt-10 text-center lg:mt-12">
          <div className="mb-4 text-gray-300 text-sm lg:text-base">
            <p>Vous souhaitez en savoir plus sur mon parcours et mes compétences ?</p>
            <p className="text-[#FFD700] font-semibold mt-1">Téléchargez mon CV complet au format PDF</p>
          </div>
          <button
            onClick={openLanguageModal}
            className="bg-[#FFD700] px-8 py-4 text-base font-bold text-black transition-all hover:bg-[#FFD700]/90 hover:shadow-lg hover:shadow-[#FFD700]/30 rounded-lg lg:px-10 lg:py-5 lg:text-lg"
          >
            📄 TÉLÉCHARGER MON CV
          </button>
        </div>

        {/* Modal de sélection de langue */}
        {showLanguageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a1a] border border-[#FFD700] rounded-xl p-8 max-w-md w-full shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Choisir la version du CV
              </h3>
              <p className="text-gray-300 text-center mb-8">
                Sélectionnez la version que vous souhaitez télécharger
              </p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => handleDownload('fr')}
                  className="bg-[#FFD700] text-black font-bold py-4 px-4 rounded-lg hover:bg-[#FFD700]/90 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  <span className="text-2xl">🇫🇷</span>
                  <span>Version Française</span>
                </button>
                <button
                  onClick={() => handleDownload('en')}
                  className="bg-[#FFD700] text-black font-bold py-4 px-4 rounded-lg hover:bg-[#FFD700]/90 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  <span className="text-2xl">🇬🇧</span>
                  <span>Version Anglaise</span>
                </button>
                <button
                  onClick={closeLanguageModal}
                  className="bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-600 transition-all mt-4"
                >
                  Annuler
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                <p className="text-gray-400 text-sm">
                  CV optimisé pour les postes de <span className="text-[#FFD700]">Junior Full Stack Developer</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}