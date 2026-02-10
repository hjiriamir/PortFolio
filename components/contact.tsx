"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-[#FFD700]">CONTACT</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discutons de votre prochain projet ou simplement pour dire bonjour !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Informations de contact</h3>
              <p className="text-gray-300 leading-relaxed text-pretty">
                N'hésitez pas à me contacter directement via les moyens ci-dessous.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-[#3a3a3a] bg-[#0f0f0f] hover:border-[#FFD700] transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-[#FFD700]" />
                    <div>
                      <p className="font-semibold text-white mb-1">Email</p>
                      <div className="flex flex-wrap items-center gap-3 text-gray-300 text-sm">
  <a
    href="mailto:amir.hjiri@esprit.tn"
    className="flex items-center gap-2 hover:text-[#FFD700] transition-colors"
  >
    <span className="text-[#FFD700]">@</span>
    amir.hjiri@esprit.tn
  </a>

  <span className="text-gray-500 hidden sm:inline">|</span>

  <a
    href="mailto:amirhjiri3@gmail.com"
    className="flex items-center gap-2 hover:text-[#FFD700] transition-colors"
  >
    <span className="text-[#FFD700]">@</span>
    amirhjiri3@gmail.com
  </a>
</div>

                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#3a3a3a] bg-[#0f0f0f] hover:border-[#FFD700] transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-[#FFD700]" />
                    <div>
                      <p className="font-semibold text-white mb-1">Téléphone</p>
                      <a href="tel:+21695685049" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                        +216 95 685 049
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#3a3a3a] bg-[#0f0f0f] hover:border-[#FFD700] transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-[#FFD700]" />
                    <div>
                      <p className="font-semibold text-white mb-1">Localisation</p>
                      <p className="text-gray-300">Tunis, Tunisie</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Retrouvez-moi en ligne</h4>
              <div className="flex gap-3 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-transparent border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-200"
                >
                  <a href="https://github.com/hjiriamir" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-transparent border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-200"
                >
                  <a href="https://www.linkedin.com/in/amir-hjiri" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-transparent border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-200"
                >
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

        <div className="mt-16 pt-8 border-t border-[#3a3a3a] text-center">
          <p className="text-gray-400">© 2025 Amir Hjiri • Fait avec ❤️ et beaucoup de ☕</p>
        </div>
      </div>
    </section>
  )
}
