interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ eyebrow, title, description }: Props) => (
  <div className="max-w-2xl mb-12 animate-fade-up">
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-4">
      <span className="w-8 h-px bg-primary" />
      {eyebrow}
    </div>
    <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeading;
