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
                Je suis <strong className="text-white">HJIRI Amir, Développeur Full Stack Junior</strong>, passionné par la création d'applications web modernes de A à Z.
                Mon expérience à travers des projets concrets et du freelance m'a permis de me spécialiser dans le développement avec <strong className="text-white">React.js, Next.js, Node.js et Express.js</strong>.
              </p>
              <p>
                J'accorde une importance particulière à la conception d'<strong className="text-white">APIs REST robustes et sécurisées</strong>, ainsi qu'à l'expérience utilisateur.
                Je travaille avec des bases de données <strong className="text-white">SQL (PostgreSQL, MySQL) et NoSQL (MongoDB)</strong>, et je maîtrise les outils essentiels comme Git et les méthodologies Agile.
              </p>
              <p>
                Curieux et autonome, j'aime résoudre des problèmes techniques concrets et apprendre continuellement.
                Je recherche actuellement mon <strong className="text-[#FFD700]">premier poste en tant que Junior Full Stack ou Backend Developer</strong> pour intégrer une équipe dynamique, contribuer à des projets stimulants et monter en compétences.
              </p>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <div className="border-l-4 border-[#FFD700] bg-[#1a1a1a] pl-6 py-6 pr-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20">
              <div className="text-4xl font-bold text-[#FFD700] lg:text-5xl">Full-Stack</div>
              <div className="mt-2 text-lg font-semibold text-white lg:text-xl">React & Node.js</div>
              <p className="mt-2 text-gray-300">
                Développement d'applications web complètes, du frontend au backend.
              </p>
            </div>
            <div className="border-l-4 border-[#FFD700] bg-[#1a1a1a] pl-6 py-6 pr-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20">
              <div className="text-4xl font-bold text-[#FFD700] lg:text-5xl">Backend</div>
              <div className="mt-2 text-lg font-semibold text-white lg:text-xl">APIs & Bases de données</div>
              <p className="mt-2 text-gray-300">
                Conception d'APIs REST sécurisées et modélisation de données.
              </p>
            </div>
            <div className="border-l-4 border-[#FFD700] bg-[#1a1a1a] pl-6 py-6 pr-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20">
              <div className="text-4xl font-bold text-[#FFD700] lg:text-5xl">Projets</div>
              <div className="mt-2 text-lg font-semibold text-white lg:text-xl">Concrets & Déployés</div>
              <p className="mt-2 text-gray-300">
                Développement, déploiement et maintenance d'applications réelles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}