export default function About() {
  return (
    <section id="apropos" className="bg-[#0f0f0f] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Text content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              À <span className="text-[#FFD700]">PROPOS</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-300 lg:text-lg">
              <p>
                Bonjour ! Je suis un <strong className="text-white">Ingénieur en génie logiciel</strong>, passionné par
                le développement web full-stack et les technologies émergentes. Mon parcours m'a permis de maîtriser
                Java, PHP, JavaScript et TypeScript, ainsi que des frameworks modernes tels que Spring Boot, Angular,
                Node.js, Express, React/Next.js. Je possède également une expérience en Python, ce qui me permet
                d'aborder des projets variés, allant du développement web aux solutions backend et à l'automatisation.
              </p>
              <p>
                J'ai également travaillé sur des projets DevOps, utilisant Docker et Jenkins pour automatiser les
                déploiements. Cette expérience m'a permis de comprendre l'importance de l'intégration continue et du
                déploiement continu dans le développement moderne.
              </p>
              <p>
                Passionné par le travail en équipe, je suis motivé à contribuer à des projets concrets qui ont un impact
                réel. Mon objectif est de continuer à développer mes compétences techniques et professionnelles tout en
                apportant de la valeur aux équipes avec lesquelles je collabore.
              </p>
              <p>
                J’ai récemment soutenu mon{" "}
                <strong className="text-[#FFD700]">projet de fin d’études intitulé Smart Store Intelligente</strong>, 
                une solution innovante qui utilise l’intelligence artificielle pour optimiser la gestion des magasins. 
                Ce projet a pour objectif d’améliorer la planification des espaces, de gérer efficacement les catégories de produits 
                et de générer automatiquement des planogrammes adaptés à chaque point de vente. 
                Il permet également de prédire les besoins d’agencement, de faciliter la gestion des tâches retail 
                et de renforcer la collaboration entre les équipes, 
                afin de maximiser la rentabilité et d’offrir une expérience client optimisée.
              </p>

            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <div className="border-l-4 border-[#FFD700] bg-[#1a1a1a] pl-6 py-6 pr-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20">
              <div className="text-4xl font-bold text-[#FFD700] lg:text-5xl">Full-Stack</div>
              <div className="mt-2 text-lg font-semibold text-white lg:text-xl">Développeur Web</div>
            </div>
            <div className="border-l-4 border-[#FFD700] bg-[#1a1a1a] pl-6 py-6 pr-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20">
              <div className="text-4xl font-bold text-[#FFD700] lg:text-5xl">DevOps</div>
              <div className="mt-2 text-lg font-semibold text-white lg:text-xl">CI/CD & Automatisation</div>
            </div>
            <div className="border-l-4 border-[#FFD700] bg-[#1a1a1a] pl-6 py-6 pr-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20">
              <div className="text-4xl font-bold text-[#FFD700] lg:text-5xl">IA</div>
              <div className="mt-2 text-lg font-semibold text-white lg:text-xl">Smart Store & Optimisation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
