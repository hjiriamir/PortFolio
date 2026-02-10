"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Github, Eye, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Auto-Marketplace",
      period: "Novembre 2025 - Janvier 2026",
      description:
        "Application web complète pour l'achat et la vente de véhicules. Développement Full Stack avec React, Node.js et MongoDB.",
      fullDescription:
        "Marketplace automobile moderne permettant aux utilisateurs de publier, rechercher et gérer des annonces de véhicules. Le projet inclut un système d'authentification, des dashboards personnalisés et un filtrage avancé.",
      keyFeatures: [
        "Système complet de gestion d'annonces (CRUD)",
        "Authentification sécurisée avec JWT et gestion des rôles",
        "Dashboard administrateur pour la modération et les statistiques",
        "Dashboard utilisateur pour suivre ses annonces et favoris",
        "Filtrage avancé par marque, prix, année, carburant",
        "Upload et gestion d'images avec Cloudinary",
        "Interface responsive avec Tailwind CSS",
        "API REST avec documentation",
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Git"],
      type: "Projet Personnel",
      github: "https://github.com/hjiriamir/auto-marketplace-app",
      demo: "#",
      images: [
        "https://github.com/user-attachments/assets/3f306989-1ab3-47c3-b590-ffe1fb1f461f",
        "https://github.com/user-attachments/assets/a092a141-c20c-4b14-ba17-b07f98555843",
        "https://github.com/user-attachments/assets/70d6f8d8-e1db-4c0e-8bce-b78399e5a0b8",
      ],
    },
    {
      id: 2,
      title: "RapidoLux - Application de livraisons",
      period: "Août - Octobre 2025",
      description:
        "Plateforme de livraison à la demande développée pour un client. Gestion des commandes en temps réel avec React et Node.js.",
      fullDescription:
        "Application web permettant aux clients de commander des livraisons et aux livreurs de gérer leurs missions. L'interface offre un suivi en temps réel et une communication fluide entre les parties.",
      keyFeatures: [
        "Formulaire de commande avec détails de livraison",
        "Interface de suivi des commandes pour livreurs",
        "Système de notifications par email/SMS",
        "Authentification sécurisée pour clients et livreurs",
        "Design responsive pour mobile et tablette",
        "Gestion des profils utilisateurs et historique",
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "REST APIs", "Git"],
      type: "Projet Freelance",
      github: "https://github.com/hjiriamir/Rapido-Lux",
      demo: "#",
      images: [
        "https://github.com/user-attachments/assets/4b619d0a-ab50-49e2-81ef-903717ed9822",
        "https://github.com/user-attachments/assets/7af1d482-233a-45b6-9ba9-df0ad938ce9b",
        "https://github.com/user-attachments/assets/bd01e5dd-683c-437b-bd3a-c69e65395d8f",
      ],
    },
    {
      id: 3,
      title: "Smart Store",
      period: "Janvier - Septembre 2025",
      description:
        "Plateforme web B2B pour optimiser la gestion de magasins retail. Focus sur la visualisation des données et les interfaces interactives.",
      fullDescription:
        "Application web destinée aux gestionnaires de magasins pour visualiser et optimiser l'agencement des produits, suivre les indicateurs clés et améliorer la prise de décision.",
      keyFeatures: [
        "Interface interactive pour la planification des espaces",
        "Tableaux de bord avec indicateurs de performance",
        "APIs REST sécurisées pour la gestion des données",
        "Système de gestion des utilisateurs et permissions",
        "Visualisation des données de vente et de stock",
        "Collaboration en équipe Agile",
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "MySQL", "Git", "Docker"],
      type: "Projet de Fin d'Études",
      github: "https://github.com/hjiriamir/Smart-Store-AI",
      demo: "#",
      images: [
        "https://github.com/user-attachments/assets/c0e95c36-9c78-46c5-b286-79443345b04b",
        "https://github.com/user-attachments/assets/c2d18ab5-171d-4900-8597-832f9ef2e641",
        "https://github.com/user-attachments/assets/9dc12604-3764-4ff7-ac66-4128b90fc838",
        "https://github.com/user-attachments/assets/41c60cbf-7c92-4fb6-a859-9e8955857826",
      ],
    },
    {
      id: 4,
      title: "Application Colocation & Covoiturage",
      period: "Février - Mai 2024",
      description:
        "Application web complète avec Spring Boot, Angular et MySQL, intégrant un système de gestion des utilisateurs et de leurs rôles.",
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
      technologies: ["Spring Boot", "Angular", "MySQL", "Leaflet", "Stripe"],
      type: "Projet Académique",
      github: "https://github.com/hjiriamir/coco_spring_angular",
      demo: "#",
      images: [
        "/projects/coco-1.jpg",
        "/projects/coco-2.jpg",
        "/projects/coco-3.jpg",
      ],
    },
  ]

  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

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
              onClick={() => {
                setSelectedProject(project)
                setCurrentImageIndex(0)
              }}
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
                  {project.github !== "#" && (
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
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                      setCurrentImageIndex(0)
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

        {/* MODAL DÉTAILS */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null)
            setCurrentImageIndex(0)
          }
        }}>
<DialogContent className="!w-[95vw] !max-w-[1400px] !h-[95vh] bg-[#1a1a1a] border-[#3a3a3a] text-white p-6 rounded-xl shadow-2xl overflow-y-auto">
{selectedProject && (
              <>
                {/* HEADER */}
                <div className="sticky top-0 z-50 p-6 border-b border-gray-800 bg-[#1a1a1a]">
                  <div className="flex justify-between items-start">
                    <div>
                      <DialogTitle className="text-2xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </DialogTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="text-[#FFD700] font-semibold bg-[#FFD700]/10 px-3 py-1 border border-[#FFD700]/30 rounded">
                          {selectedProject.type}
                        </span>
                        <span>{selectedProject.period}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedProject(null)
                        setCurrentImageIndex(0)
                      }}
                      className="text-gray-400 hover:text-white transition ml-4"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* CARROUSEL COLUMN */}
                    <div className="space-y-4">
                      {/* MAIN CARROUSEL */}
                      <div className="relative w-full h-[400px] lg:h-[500px] bg-black rounded-lg overflow-hidden">
                        {selectedProject.images && selectedProject.images.length > 0 ? (
                          <>
                            <img
                              src={selectedProject.images[currentImageIndex]}
                              alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                              className="w-full h-full object-contain"
                            />
                            
                            {/* NAVIGATION ARROWS */}
                            {selectedProject.images.length > 1 && (
                              <>
                                <button
                                  onClick={prevImage}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition"
                                >
                                  <ChevronLeft size={20} />
                                </button>
                                <button
                                  onClick={nextImage}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition"
                                >
                                  <ChevronRight size={20} />
                                </button>
                              </>
                            )}

                            {/* DOTS INDICATOR */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                              {selectedProject.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-2 h-2 rounded-full transition ${
                                    index === currentImageIndex 
                                      ? 'bg-[#FFD700]' 
                                      : 'bg-gray-500 hover:bg-gray-400'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-500">
                            Aucune image disponible
                          </div>
                        )}
                      </div>

                      {/* THUMBNAILS */}
                      {selectedProject.images && selectedProject.images.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {selectedProject.images.map((img, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-20 h-12 rounded overflow-hidden border-2 transition ${
                                index === currentImageIndex 
                                  ? 'border-[#FFD700]' 
                                  : 'border-transparent hover:border-gray-500'
                              }`}
                            >
                              <img
                                src={img}
                                alt={`Miniature ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* ACTION BUTTONS */}
                      <div className="flex gap-3">
                        {selectedProject.github !== "#" && (
                          <Button
                            asChild
                            className="flex-1 bg-[#FFD700] text-black hover:bg-[#FFD700]/90 font-semibold"
                          >
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code GitHub
                            </a>
                          </Button>
                        )}
                        {selectedProject.demo !== "#" && (
                          <Button
                            asChild
                            variant="outline"
                            className="flex-1 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
                          >
                            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Voir la démo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* CONTENT COLUMN */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Description</h3>
                        <p className="text-gray-300 leading-relaxed text-base">{selectedProject.fullDescription}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Fonctionnalités Principales</h3>
                        <ul className="space-y-2 text-gray-300 text-base">
                          {selectedProject.keyFeatures.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#FFD700] mr-3 font-bold">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Technologies Utilisées</h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-2 text-base bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 font-medium rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
