import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import SkillsOverview from "@/components/SkillsOverview"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SkillsOverview />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}
