interface SectionProps {
  id?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, ariaLabel, className = "", children }: SectionProps) => {
  return (
    <section id={id} aria-label={ariaLabel} className={`section-pad ${className}`}>
      {children}
    </section>
  );
};

export default Section;