import { Smartphone, Layers, Server } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    icon: Server,
    title: "CODIFY",
    subtitle: "Learning Management System",
    role: "Backend Developer (Code-Runner)",
    period: "Sep 2025 — Present",
    tags: ["NestJS", "Docker", "BullMQ", "PostgreSQL"],
    bullets: [
      "Built a scalable NestJS backend executing user code in secure, isolated Docker containers.",
      "Designed Docker & Docker Compose environments to orchestrate execution services efficiently.",
      "Implemented async job processing with BullMQ, handling 300+ concurrent code executions reliably.",
      "Ensured sandboxed execution preventing system access and enforcing isolation.",
      "Built APIs to execute test cases and return structured real-time results.",
      "Followed Agile sprints, delivering features incrementally.",
    ],
    accent: "from-primary to-primary-glow",
  },
  {
    icon: Smartphone,
    title: "NHAM-NHAM",
    subtitle: "Food Delivery Application",
    role: "Lead Mobile Developer & Project Coordinator",
    period: "Nov 2025 — Jan 2026",
    tags: ["Flutter", "Dart", "Local Storage", "State Management"],
    bullets: [
      "Led Flutter mobile app development, handling frontend and backend integration.",
      "Designed reusable UI widgets to improve maintainability and dev speed.",
      "Built multiple screens with smooth navigation flow.",
      "Implemented add-to-cart and ordering features for seamless food ordering.",
      "Integrated local storage for persisting user order data.",
      "Coordinated team workflow ensuring timely milestone delivery.",
    ],
    accent: "from-accent to-accent-glow",
  },
  {
    icon: Layers,
    title: "BLUE HORIZON",
    subtitle: "Blog Management System",
    role: "Lead Full-Stack Developer",
    period: "May 2025 — July 2025",
    tags: ["Node.js", "MVC", "PostgreSQL", "Railway"],
    bullets: [
      "Led the development team and coordinated project workflow.",
      "Built frontend and backend with MVC-based backend architecture.",
      "Created RESTful APIs for posts, comments, likes, tags, and users.",
      "Managed database operations with manual SQL queries.",
      "Implemented secure user authentication with hashed passwords.",
      "Enabled CRUD for posts, comments, likes, categories, and save-for-later.",
      "Deployed backend and database on Railway.",
    ],
    accent: "from-primary to-accent",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I've built & led"
          description="Selected projects spanning backend systems, mobile apps, and full-stack platforms."
        />

        <div className="space-y-6">
          {projects.map(({ icon: Icon, ...p }, i) => (
            <article
              key={p.title}
              className="group relative glass rounded-3xl p-6 md:p-10 shadow-card overflow-hidden transition-spring hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-3xl group-hover:opacity-20 transition-smooth`}
              />

              <div className="relative grid lg:grid-cols-[auto,1fr] gap-6 lg:gap-10">
                <div className="flex lg:flex-col items-start gap-4">
                  <span className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary shadow-glow shrink-0">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </span>
                  <div className="lg:mt-2">
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {p.period}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-display text-2xl md:text-3xl font-bold">{p.title}</h3>
                    <span className="text-muted-foreground">— {p.subtitle}</span>
                  </div>
                  <div className="text-sm text-primary font-medium mb-5">{p.role}</div>

                  <ul className="space-y-2.5 mb-6">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
