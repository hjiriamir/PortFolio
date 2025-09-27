import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
];


export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">Compétences</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground mb-6">Langues</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border bg-card/50">
              <CardContent className="pt-6">
                <h4 className="font-medium text-foreground mb-2">Français</h4>
                <p className="text-sm text-muted-foreground">Courant</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card/50">
              <CardContent className="pt-6">
                <h4 className="font-medium text-foreground mb-2">Anglais</h4>
                <p className="text-sm text-muted-foreground">Intermédiaire</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card/50">
              <CardContent className="pt-6">
                <h4 className="font-medium text-foreground mb-2">Allemand</h4>
                <p className="text-sm text-muted-foreground">Débutant</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
