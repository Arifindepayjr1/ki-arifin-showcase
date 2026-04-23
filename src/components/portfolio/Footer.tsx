const Footer = () => (
  <footer className="border-t border-border py-8 mt-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <div>
        © {new Date().getFullYear()} <span className="text-foreground font-medium">Ki Arifin</span>.
        Built with React & Tailwind.
      </div>
      <div className="font-mono text-xs">Designed & coded with care.</div>
    </div>
  </footer>
);

export default Footer;
