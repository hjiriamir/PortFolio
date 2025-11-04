export default function Skills() {
  const skillCategories = [
    {
      title: "Langages",
      skills: ["JavaScript", "TypeScript", "Java", "PHP", "C#", "Python"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Angular", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Spring Boot", "Symfony", ".NET"],
    },
    {
      title: "Bases de données",
      skills: ["MySQL", "MongoDB", "SQL Server"],
    },
    {
      title: "DevOps & Outils",
      skills: ["Docker", "Jenkins", "Kubernetes", "Git", "SonarQube", "Nexus"],
    },
    {
      title: "Data & ETL",
      skills: ["Talend Open Studio", "PowerBI", "Prometheus", "Grafana", "FileZilla"],
    },
    {
      title: "Intelligence Artificielle",
      skills: ["Scikit-learn", "XGBoost", "Random Forest"],
    },
    {
      title: "Tests & QA",
      skills: ["JUnit", "Mockito", "Postman"],
    },
    {
      title: "Paiements & APIs",
      skills: ["Stripe", "Cloudinary", "Leaflet"],
    },
    {
      title: "Méthodologies",
      skills: ["Agile", "Scrum", "Kanban", "CI/CD"],
    },
  ]

  return (
    <section id="competences" className="bg-[#1a1a1a] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <h2 className="mb-10 text-3xl font-bold text-white lg:mb-12 lg:text-4xl">
          MES <span className="text-[#FFD700]">COMPÉTENCES</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#2b2b2b] border border-[#3a3a3a] p-6 transition-all duration-300 hover:border-[#FFD700] hover:shadow-lg hover:shadow-[#FFD700]/20 lg:p-7"
            >
              <h3 className="mb-5 text-lg font-bold text-white lg:text-xl border-b border-[#FFD700] pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#FFD700]/10 border border-[#FFD700]/30 px-3 py-1.5 text-xs font-semibold text-[#FFD700] transition-all duration-200 hover:bg-[#FFD700] hover:text-black cursor-default lg:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}