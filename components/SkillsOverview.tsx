"use client"

export default function SkillsOverview() {
  const skills = [
    "JavaScript", "TypeScript", "Java", "PHP", "C#", "Python",
    "React", "Next.js", "Angular", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3",
    "Node.js", "Express", "Spring Boot", "Symfony", ".NET",
    "Scikit-learn", "XGBoost", "Random Forest",
    "MySQL", "MongoDB", "SQL Server",
    "Docker", "Jenkins", "Kubernetes", "Git", "SonarQube", "Nexus",
    "Talend Open Studio", "PowerBI", "Prometheus", "Grafana", "FileZilla",
    "JUnit", "Mockito", "Postman",
    "Stripe", "Cloudinary", "Leaflet",
    "Agile", "Scrum", "Kanban", "CI/CD"
  ];

  return (
    <section className="bg-[#FFF1E6] py-2 overflow-hidden relative border-t-4 border-[#E7C56A]">
      <div className="relative flex items-center h-10 group">
        <div className="animate-marquee whitespace-nowrap flex flex-shrink-0">
          {/* On duplique deux fois le tableau pour un défilement continu */}
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="text-black font-semibold text-sm md:text-base tracking-wide px-6"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
