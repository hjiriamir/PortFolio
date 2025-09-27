"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoLink = `mailto:amir.hjiri@esprit.tn?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`

    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discutons de votre prochain projet ou simplement pour dire bonjour !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Informations de contact</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                N'hésitez pas à me contacter directement via les moyens ci-dessous.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-border bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:amir.hjiri@esprit.tn"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        amir.hjiri@esprit.tn
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <a href="tel:+21695685049" className="text-muted-foreground hover:text-primary transition-colors">
                        +216 95 685 049
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Localisation</p>
                      <p className="text-muted-foreground">Tunis, Tunisie</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Retrouvez-moi en ligne</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/hjiriamir" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/amir-hjiri" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=amir.hjiri@esprit.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">© 2025 Amir Hjiri • Fait avec ❤️ et beaucoup de ☕</p>
        </div>
      </div>
    </section>
  )
}
