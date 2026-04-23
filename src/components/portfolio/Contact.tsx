import {  Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "arifinki1010@gmail.com",
    href: "mailto:arifinki1010@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+855 93 569 289",
    href: "tel:+85593569289",
  },
  {
    icon: Mail,
    label: "GitHub",
    value: "github.com/Arifindepayjr1",
    href: "https://github.com/Arifindepayjr1",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Phnom Penh, Cambodia",
    href: "https://maps.google.com/?q=Phnom+Penh,+Cambodia",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container">
        <div className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden shadow-elegant">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Get In Touch"
                title="Let's build something great together"
                description="Open to internships, collaborations & freelance opportunities. I usually respond within 24 hours."
              />
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href="mailto:arifinki1010@gmail.com">
                    <Mail className="w-4 h-4" /> Email Me
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href="https://github.com/Arifindepayjr1" target="_blank" rel="noreferrer">
                    <Mail className="w-4 h-4" /> View GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {items.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group glass rounded-2xl p-5 transition-spring hover:-translate-y-1 hover:shadow-glow"
                >
                  <span className="inline-grid place-items-center w-10 h-10 rounded-lg bg-gradient-primary shadow-glow mb-3">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </span>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {label}
                  </div>
                  <div className="font-medium mt-1 text-sm break-all group-hover:text-primary transition-smooth">
                    {value}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
