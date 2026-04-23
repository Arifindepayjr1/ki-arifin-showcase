import { Code2, Server, Smartphone, Database, Wrench, Network } from "lucide-react";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Docker", "Git & GitHub", "Jira"],
  },
  {
    icon: Network,
    title: "Other",
    items: ["REST APIs", "BullMQ", "Docker Compose"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools & technologies I work with"
          description="A modern stack covering full lifecycle — frontend, backend, mobile, and DevOps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map(({ icon: Icon, title, items }, i) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-6 shadow-card transition-spring hover:-translate-y-1.5 hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth pointer-events-none" />
              <div className="relative">
                <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary shadow-glow mb-5">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </span>
                <h3 className="font-display text-xl font-semibold mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
