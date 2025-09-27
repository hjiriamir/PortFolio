import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ChevronDown, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="space-y-8">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
              Salut,
              <br />
              Je suis <span className="text-primary">Amir</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium">
              Développeur Full-Stack
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Ingénieur en génie logiciel, spécialisé en développement web moderne avec 
              Node.js/Express.js, React.js/Next.js, ainsi qu'en pratiques DevOps.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-3 text-base font-medium" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base font-medium" asChild>
              <a href="#resume">
                <Download className="h-4 w-4 mr-2" />
                Voir le CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/hjiriamir" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/amir-hjiri" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amir.hjiri@esprit.tn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
        </a>
      </div>
    </section>
  )
}