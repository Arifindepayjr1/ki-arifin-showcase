import { ArrowRight, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.3fr,1fr] gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
              </span>
              <span className="text-muted-foreground">Available for opportunities</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="text-gradient">Ki Arifin</span>
              <br />
              Full Stack Developer
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              I build scalable web and mobile applications with{" "}
              <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">Flutter</span>, and{" "}
              <span className="text-foreground font-medium">NestJS</span>.
              Focused on clean code, secure backends, and user-centered design.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Phnom Penh, Cambodia
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="#contact">
                  <Mail className="w-4 h-4" /> Contact Me
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://github.com/Arifindepayjr1" target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 w-full max-w-sm animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-40 animate-glow-pulse" />
            <div className="relative animate-float">
              <div className="aspect-square rounded-3xl overflow-hidden glass p-1.5 shadow-elegant">
                <img
                  src={avatar}
                  alt="Ki Arifin — Full Stack Developer"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover rounded-[1.4rem]"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 shadow-card">
                <div className="text-xs text-muted-foreground font-mono">currently</div>
                <div className="text-sm font-semibold">FullStack Intern</div>
              </div>
              <div className="absolute -top-5 -right-5 glass rounded-2xl px-4 py-3 shadow-card">
                <div className="text-xs text-muted-foreground font-mono">stack</div>
                <div className="text-sm font-semibold text-gradient">React · Flutter · NestJS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
