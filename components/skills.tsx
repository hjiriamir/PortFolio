export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
    },
    {
      title: "Bases de données",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL"],
    },
    {
      title: "Outils & Méthodes",
      skills: ["Git & GitHub", "Docker", "Agile/Scrum", "VS Code", "Postman"],
    },
  ]

  return (
    <section id="competences" className="bg-[#1a1a1a] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <h2 className="mb-10 text-3xl font-bold text-white lg:mb-12 lg:text-4xl">
          MES <span className="text-[#FFD700]">COMPÉTENCES</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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

        {/* Section "Autres compétences" discrète */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="mb-4 text-lg font-semibold text-gray-300">Autres compétences</h3>
          <div className="flex flex-wrap gap-2">
            {["Java", "Spring Boot", "Symfony", "Angular", "Python", ".NET"].map((skill, i) => (
              <span
                key={i}
                className="bg-gray-800 border border-gray-700 px-3 py-1 text-xs text-gray-400 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}