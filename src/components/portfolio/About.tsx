import { Brain, MessagesSquare, Users, Zap, Target, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const softSkills = [
  { icon: Brain, label: "Problem Solving" },
  { icon: MessagesSquare, label: "Communication" },
  { icon: Users, label: "Team Collaboration" },
  { icon: Target, label: "Leadership" },
  { icon: Zap, label: "Adaptability" },
  { icon: Sparkles, label: "Continuous Learning" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting clean, efficient & user-centered apps"
        />

        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10">
          <div className="glass rounded-3xl p-8 md:p-10 shadow-card animate-fade-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-foreground font-medium">Full Stack Developer</span> with hands-on
              experience building scalable web and mobile applications using{" "}
              <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">Flutter</span>, and{" "}
              <span className="text-foreground font-medium">Node.js</span>.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              I specialize in developing backend systems with{" "}
              <span className="text-foreground font-medium">NestJS</span>, designing RESTful APIs,
              and orchestrating <span className="text-foreground font-medium">Docker</span>-based
              environments. I'm focused on writing clean, maintainable code and contributing to
              high-impact development teams.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <Stat value="3+" label="Major Projects" />
              <Stat value="300+" label="Concurrent Jobs" />
              <Stat value="2+" label="Years Coding" />
            </div>
          </div>

          <div className="animate-fade-up">
            <h3 className="font-display text-xl font-semibold mb-5">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 flex items-center gap-3 transition-spring hover:-translate-y-1 hover:shadow-glow"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-primary shrink-0">
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display text-3xl font-bold text-gradient">{value}</div>
    <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
      {label}
    </div>
  </div>
);

export default About;
