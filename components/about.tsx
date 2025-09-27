export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">À propos</h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-pretty">
          Bonjour ! Je suis un Ingénieur en génie logiciel, passionné par le développement web full-stack et 
          les technologies émergentes. Mon parcours m'a permis de maîtriser Java, PHP, JavaScript et TypeScript, 
          ainsi que des frameworks modernes tels que Spring Boot, Angular, Node.js, Express, React/Next.js. 
          Je possède également une expérience en Python, ce qui me permet d'aborder des projets variés, allant 
          du développement web aux solutions backend et à l'automatisation.
          </p>

          <p className="text-pretty">
            J'ai également travaillé sur des projets DevOps, utilisant Docker et Jenkins pour automatiser les
            déploiements. Cette expérience m'a permis de comprendre l'importance de l'intégration continue et du
            déploiement continu dans le développement moderne.
          </p>

          <p className="text-pretty">
            Passionné par le travail en équipe, je suis motivé à contribuer à des projets concrets qui ont un impact
            réel. Mon objectif est de continuer à développer mes compétences techniques et professionnelles tout en
            apportant de la valeur aux équipes avec lesquelles je collabore.
          </p>

          <p className="text-pretty">
          Actuellement, je travaille sur mon projet de fin d'études : un Smart Store intelligent qui utilise 
          l'intelligence artificielle pour optimiser la gestion des magasins. Mon projet vise à améliorer 
          la planification d’espace, gérer efficacement les catégories de produits et générer automatiquement 
          des planogrammes adaptés à chaque magasin. Il permet également de prédire les planogrammes, 
          de faciliter la gestion des tâches retail et de renforcer la collaboration entre les équipes, 
          afin de maximiser la rentabilité et d’offrir une meilleure expérience client. Ce projet combine 
          mes compétences en développement web full-stack (Node.js, React) avec l’IA et l’analyse de données, 
          pour créer une solution complète et intelligente adaptée aux besoins du commerce de détail.
          </p>
        </div>
      </div>
    </section>
  )
}
