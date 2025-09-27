"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Smart Store Intelligent",
    period: "Janvier - Septembre 2025",
    description:
      "Développement d'un Smart Store intelligent utilisant l'intelligence artificielle pour optimiser la gestion des magasins et prédire les besoins en stock. Backend Node.js/Express, frontend React, modèle IA en Python et intégration Talend pour l'extraction de données.",
    fullDescription:
      "Un Smart Store complet qui combine plusieurs technologies modernes pour optimiser la planification d’espace, la gestion des catégories et la génération automatique de planogrammes adaptés à chaque magasin. Le projet utilise l'IA pour prédire les besoins en stock, facilite la collaboration des équipes et améliore la rentabilité tout en offrant une expérience client optimisée.",
    keyFeatures: [
      "Prédiction intelligente des stocks basée sur l'historique des ventes",
      "Optimisation de la planification d’espace et génération automatique de planogrammes",
      "Gestion dynamique des catégories de produits",
      "Interface utilisateur React moderne et responsive",
      "API RESTful avec Node.js et Express",
      "Modèle d'apprentissage automatique en Python",
      "Extraction et transformation de données avec Talend Open Studio",
      "Implémentation de dashboards pour la visualisation des indicateurs clés",
    ],
    technologies: ["Node.js", "Express", "React", "Python", "MySQL", "Talend", "IA/ML", "Dashboards"],
    type: "Projet Fin d'Études",
    github: "https://github.com/hjiriamir/smart-store",
    demo: "#",
  }
  ,
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
    github: "https://github.com/hjiriamir/colocation-app",
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
    github: "https://github.com/hjiriamir/medical-travel",
    demo: "#",
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Projets</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-border bg-card/50 hover:bg-card/70 transition-all duration-300 project-card cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.type}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.github, "_blank")
                    }}
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
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject.title}</DialogTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="text-primary font-medium">{selectedProject.type}</span>
                    <span>{selectedProject.period}</span>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Introduction</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Fonctionnalités Clés</h3>
                    <ul className="space-y-2">
                      {selectedProject.keyFeatures.map((feature, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.achievements && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Résultats</h3>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button asChild>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Voir le Code
                      </a>
                    </Button>
                    {selectedProject.demo !== "#" && (
                      <Button variant="outline" asChild>
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Démo Live
                        </a>
                      </Button>
                    )}
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
