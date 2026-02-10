
"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const handleEmailClick = () => {
    window.location.href = "mailto:amir.hjiri@esprit.tn"
  }

  return (
    <section className="relative flex min-h-[calc(100vh-88px)] flex-col lg:flex-row">
      {/* Left side - Text content */}
      <div className="flex flex-1 items-center justify-center bg-secondary px-6 py-12 lg:px-16 lg:py-24">
        <div className="max-w-lg space-y-6">
          {/* Salutation */}
          <div className="mb-2">
            <h1 className="text-4xl font-bold text-card sm:text-5xl lg:text-6xl">
              Salut,
            </h1>
            <h1 className="text-4xl font-bold text-card sm:text-5xl lg:text-6xl">
              Je suis <span className="bg-primary text-card px-2">Amir</span>
            </h1>
          </div>

          {/* Title */}
          <div className="border-l-4 border-primary pl-4">
            <h2 className="text-2xl font-semibold text-card sm:text-3xl lg:text-4xl">
            Junior Full Stack Developer
            </h2>
          </div>

          <p className="text-lg text-card leading-relaxed">
  <span className="font-semibold">Développeur Full Stack Junior</span>, passionné par la création d'applications web modernes et performantes.
  Je développe actuellement des applications complètes avec <span className="font-semibold">React.js, Next.js, Node.js et Express.js</span>, en mettant un accent particulier sur la conception d'<span className="font-semibold">APIs REST robustes</span> et sécurisées.
  Je recherche mon premier poste où je pourrai contribuer à des projets concrets et continuer à progresser aux côtés d'une équipe.
</p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/#contact">
              <button className="w-full sm:w-auto bg-primary text-card px-8 py-3 text-lg font-semibold border-2 border-card hover:bg-primary/90 hover:scale-105 transition-all duration-200">
                Me contacter
              </button>
            </Link>
            <Link href="/#resume">
              <button className="w-full sm:w-auto bg-transparent text-card px-8 py-3 text-lg font-semibold border-2 border-card hover:bg-card/10 hover:scale-105 transition-all duration-200">
                Voir le CV
              </button>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-6">
            <a 
              href="https://github.com/hjiriamir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-card hover:text-primary transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/amir-hjiri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-card hover:text-primary transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <button 
              onClick={handleEmailClick}
              className="text-card hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative flex-1 bg-muted">
        <div className="relative h-full min-h-[400px] lg:min-h-full">
        <Image
  src="/amir4.jfif"
  alt="Portrait professionnel d'Amir"
  fill
  className="object-cover object-[50%_30%] grayscale hover:grayscale-0 transition-all duration-500"
  priority
/>

    

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent lg:bg-gradient-to-l" />
        </div>
      </div>

      {/* Yellow accent stripe - right edge */}
      <div className="absolute right-0 top-0 h-full w-2 bg-primary lg:w-3" />

      {/* Yellow accent stripe - bottom edge */}
      <div className="absolute bottom-0 left-0 h-2 w-full bg-primary lg:h-3" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-card rounded-full flex justify-center">
            <div className="w-1 h-3 bg-card rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  )
}