import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-smooth",
            scrolled ? "glass shadow-card" : "bg-transparent"
          )}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary shadow-glow">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </span>
            <span>
              Ki<span className="text-gradient">.Arifin</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button asChild variant="hero" size="sm">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-lg glass"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild variant="hero" className="w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>Hire Me</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
