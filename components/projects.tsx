"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, Eye } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Store Intelligent",
      period: "Janvier - Septembre 2025",
      description:
        "Développement d'un Smart Store intelligent utilisant l'intelligence artificielle pour optimiser la gestion des magasins et prédire les besoins en stock. Backend Node.js/Express, frontend React, modèle IA en Python et intégration Talend pour l'extraction de données.",
      fullDescription:
        "Un Smart Store complet qui combine plusieurs technologies modernes pour optimiser la planification d'espace, la gestion des catégories et la génération automatique de planogrammes adaptés à chaque magasin. Le projet utilise l'IA pour prédire les besoins en stock, facilite la collaboration des équipes et améliore la rentabilité tout en offrant une expérience client optimisée.",
      keyFeatures: [
        "Prédiction intelligente des stocks basée sur l'historique des ventes",
        "Optimisation de la planification d'espace et génération automatique de planogrammes",
        "Gestion dynamique des catégories de produits",
        "Interface utilisateur React moderne et responsive",
        "API RESTful avec Node.js et Express",
        "Modèle d'apprentissage automatique en Python",
        "Extraction et transformation de données avec Talend Open Studio",
        "Implémentation de dashboards pour la visualisation des indicateurs clés",
      ],
      technologies: ["Node.js", "Express", "React", "Python", "MySQL", "Talend", "IA/ML", "Dashboards"],
      type: "Projet Fin d'Études",
      github: "https://github.com/hjiriamir/my-smartstore-app/tree/smart-store",
      demo: "#",
    },
    {
      id: 2,
      title: "Application Colocation & Covoiturage",
      period: "Février - Mai 2024",
      description:
        "Application web complète avec Spring Boot, Angular et MySQL, intégrant un système de gestion des utilisateurs et de leurs rôles. Cartes interactives avec Leaflet et paiement sécurisé avec Stripe.",
      fullDescription:
        "Une plateforme complète permettant aux utilisateurs de trouver des colocations et organiser des covoiturages. L'application offre une expérience utilisateur fluide avec des fonctionnalités avancées de géolocalisation et de paiement.",
      keyFeatures: [
        "Système d'authentification et gestion des rôles utilisateurs",
        "Cartes interactives avec Leaflet pour la géolocalisation",
        "Intégration de paiement sécurisé avec Stripe",
        "Architecture RESTful pour des performances optimales",
        "Interface utilisateur moderne avec Angular",
        "Système de notation et commentaires",
      ],
      achievements: [
        "Augmentation de la précision des interactions de 30% avec Leaflet",
        "Réduction des temps de requêtes de 20% avec architecture RESTful",
        "Réduction des bugs signalés de 15% grâce aux bonnes pratiques",
      ],
      technologies: ["Spring Boot", "Angular", "MySQL", "Leaflet", "Stripe"],
      type: "Projet Académique",
      github: "https://github.com/hjiriamir/coco_spring_angular",
      demo: "#",
    },
    {
      id: 3,
      title: "Système de Gestion d'Aéroport",
      period: "Septembre - Décembre 2023",
      description:
        "Automatisation de la gestion des vols, des passagers et des ressources avec .NET, C#, Angular et SQL Server. Interface utilisateur intuitive pour faciliter la navigation.",
      fullDescription:
        "Un système complet de gestion aéroportuaire qui automatise les processus critiques et améliore l'efficacité opérationnelle. Conçu pour gérer les opérations complexes d'un aéroport moderne.",
      keyFeatures: [
        "Gestion automatisée des vols et horaires",
        "Système de gestion des passagers et bagages",
        "Allocation optimisée des ressources aéroportuaires",
        "Interface utilisateur intuitive pour les opérateurs",
        "Rapports et analytics en temps réel",
        "Intégration avec les systèmes existants",
      ],
      achievements: [
        "Amélioration de l'efficacité globale de 30%",
        "Interface utilisateur optimisée pour les opérations aéroportuaires",
      ],
      technologies: [".NET", "C#", "Angular", "SQL Server"],
      type: "Projet Académique",
      github: "https://github.com/hjiriamir/airport-management",
      demo: "#",
    },
    {
      id: 4,
      title: "Agence de Voyage Médical",
      period: "Septembre - Décembre 2023",
      description:
        "Application web avec Symfony et MySQL pour gérer les utilisateurs, destinations et réservations médicales.",
      fullDescription:
        "Une plateforme dédiée au tourisme médical qui facilite la planification et la gestion des voyages médicaux. L'application connecte les patients avec des prestataires de soins de santé internationaux.",
      keyFeatures: [
        "Gestion complète des profils utilisateurs",
        "Catalogue de destinations médicales",
        "Système de réservation intégré",
        "Gestion des documents médicaux",
        "Interface multilingue",
        "Système de suivi des traitements",
      ],
      achievements: ["Réduction des erreurs de saisie de 15%", "Amélioration de la fiabilité du backend de 25%"],
      technologies: ["Symfony", "PHP", "MySQL"],
      type: "Projet Académique",
      github: "https://github.com/hjiriamir/MedFly_Fork/tree/main/Medfly",
      demo: "#",
    },
    {
      id: 5,
      title: "RapidoLux",
      period: "Octobre - Novembre 2025", 
      description: "RapidoLux connecte les clients à un livreur de confiance, disponible pour livrer rapidement tous types d’objets partout au Luxembourg.",
      fullDescription: "RapidoLux est un site web de livraison à la demande qui connecte les clients à un livreur unique pour des livraisons rapides et personnalisées à travers tout le Luxembourg. Son interface fluide offre une expérience simple et efficace, permettant aux clients de suivre leurs commandes en temps réel et au livreur de gérer facilement ses missions.",
      keyFeatures: [
        "Demande de livraison en ligne : formulaire intuitif pour préciser le type d’objet, le lieu et l’heure.",
        "Communication directe entre le client et le livreur.",
        "Système de notifications (email/SMS) pour confirmer les étapes de la livraison.",
        "Interface responsive compatible mobile et tablette.",
        "Support multilingue (FR / EN / DE / Luxembourgeois)."
      ],
      achievements: [
        "Livraison réussie du projet au client final dans les délais.",
        "Amélioration de l’efficacité des livraisons locales grâce à la digitalisation du processus.",
        "Augmentation du taux de satisfaction client (interface simple et rapide).",
        "Mise en production d’une application performante et fiable, utilisée activement sur le marché luxembourgeois."
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "Notifications Email/SMS", "Responsive Design"],
      type: "Projet livré à un client — Application web de livraison locale",
      github: "https://github.com/hjiriamir/Rapido-Lux", 
      demo: "#" 
    }
    
  ]

  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projets" className="bg-[#0f0f0f] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <h2 className="mb-10 text-3xl font-bold text-white lg:mb-12 lg:text-4xl">
          MES <span className="text-[#FFD700]">PROJETS</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-[#3a3a3a] bg-[#1a1a1a] hover:border-[#FFD700] transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-[#FFD700]/10"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 lg:text-2xl group-hover:text-[#FFD700] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#FFD700] font-semibold bg-[#FFD700]/10 px-3 py-1 inline-block border border-[#FFD700]/30">
                      {project.type}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 ml-2">{project.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-5 text-sm lg:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs bg-[#2b2b2b] text-[#FFD700] border border-[#FFD700]/20 font-medium lg:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.github, "_blank")
                    }}
                    className="flex-1 bg-transparent border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-200 font-semibold"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                    className="flex-1 bg-[#FFD700] border-[#FFD700] text-black hover:bg-[#FFD700]/90 transition-all duration-200 font-semibold"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Détails
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-[#1a1a1a] border-[#3a3a3a] text-white">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">{selectedProject.title}</DialogTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="text-[#FFD700] font-semibold bg-[#FFD700]/10 px-3 py-1 border border-[#FFD700]/30">
                      {selectedProject.type}
                    </span>
                    <span>{selectedProject.period}</span>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-3">Introduction</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-3">Fonctionnalités Clés</h3>
                    <ul className="space-y-2">
                      {selectedProject.keyFeatures.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-[#FFD700] mr-3 font-bold">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.achievements && (
                    <div>
                      <h3 className="text-lg font-semibold text-[#FFD700] mb-3">Résultats</h3>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="text-[#FFD700] mr-3 font-bold">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button asChild className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90 font-semibold">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Voir le Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
