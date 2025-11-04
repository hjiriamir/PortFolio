"use client"

import Link from "next/link"
import { useState } from "react"

const navItems = [
  { name: "ACCUEIL", href: "#accueil" },
  { name: "À PROPOS", href: "#apropos" },
  { name: "EXPÉRIENCE", href: "#experience" },
  { name: "COMPÉTENCES", href: "#competences" },
  { name: "PROJETS", href: "#projets" },
  { name: "RÉSUMÉ", href: "#resume" },
  { name: "CONTACT", href: "#contact" },
]

export default function Header() {
  const [activeItem, setActiveItem] = useState("ACCUEIL")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // État pour le menu mobile

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMenuItemClick = (itemName: string) => {
    setActiveItem(itemName)
    setIsMobileMenuOpen(false) // Ferme le menu après un clic
  }

  return (
    <header className="bg-card text-card-foreground sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-8 py-5 lg:px-16">
        {/* Votre logo et nom */}
        <Link href="#accueil" className="flex flex-col leading-none" onClick={() => setActiveItem("ACCUEIL")}>
          <span className="text-2xl font-bold tracking-[0.3em] lg:text-3xl">
            <span className="text-primary">AMIR</span>
          </span>
          <span className="text-xl font-bold tracking-[0.3em] pl-4 lg:text-2xl lg:pl-6">HJIRI</span>
        </Link>

        {/* Navigation Desktop - cachée sur mobile */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  className="relative text-sm font-semibold tracking-wide transition-colors hover:text-primary"
                >
                  {item.name}
                  {activeItem === item.name && <span className="absolute -bottom-5 left-0 h-1 w-full bg-primary" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bouton du menu mobile - visible uniquement sur mobile */}
        <button 
          className="lg:hidden text-card-foreground" 
          onClick={toggleMobileMenu}
          aria-label="Ouvrir le menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu de navigation mobile */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-card shadow-md transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-gray-200 last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => handleMenuItemClick(item.name)}
                  className="block px-8 py-3 text-sm font-semibold tracking-wide transition-colors hover:text-primary hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}