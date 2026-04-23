import { GraduationCap, Languages, UserRound } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="container">
        <SectionHeading eyebrow="Background" title="Education, Languages & Reference" />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-7 shadow-card animate-fade-up">
            <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary shadow-glow mb-5">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </span>
            <h3 className="font-display text-lg font-semibold">Education</h3>
            <div className="mt-4 space-y-1">
              <div className="font-medium">Bachelor of Computer Science</div>
              <div className="text-sm text-muted-foreground">Major in Software Engineering</div>
              <div className="text-sm text-muted-foreground">
                Cambodia Academy of Digital Technology (CADT)
              </div>
              <div className="font-mono text-xs text-primary mt-3">2024 — Present</div>
            </div>
          </div>

          <div className="glass rounded-2xl p-7 shadow-card animate-fade-up" style={{ animationDelay: "80ms" }}>
            <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary shadow-glow mb-5">
              <Languages className="w-6 h-6 text-primary-foreground" />
            </span>
            <h3 className="font-display text-lg font-semibold">Languages</h3>
            <div className="mt-4 space-y-4">
              <LangBar label="Khmer" level="Native" pct={100} />
              <LangBar label="English" level="Fluent" pct={85} />
            </div>
          </div>

          <div className="glass rounded-2xl p-7 shadow-card animate-fade-up" style={{ animationDelay: "160ms" }}>
            <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-gradient-primary shadow-glow mb-5">
              <UserRound className="w-6 h-6 text-primary-foreground" />
            </span>
            <h3 className="font-display text-lg font-semibold">Reference</h3>
            <div className="mt-4">
              <div className="font-medium">Ronan Ogor</div>
              <div className="text-sm text-muted-foreground">Lecturer & Researcher</div>
              <div className="mt-3 space-y-1 text-sm">
                <a
                  href="mailto:Ronan.ogor@cadt.edu.kh"
                  className="block text-muted-foreground hover:text-primary transition-smooth break-all"
                >
                  Ronan.ogor@cadt.edu.kh
                </a>
                <a
                  href="tel:+85599713420"
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  +855 99 713 420
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LangBar = ({ label, level, pct }: { label: string; level: string; pct: number }) => (
  <div>
    <div className="flex justify-between text-sm mb-1.5">
      <span className="font-medium">{label}</span>
      <span className="text-muted-foreground font-mono text-xs">{level}</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full bg-gradient-primary rounded-full transition-smooth"
        style={{ width: `${pct}%` }}
      />
    </div>
  </div>
);

export default Education;
