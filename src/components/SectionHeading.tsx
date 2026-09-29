import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

interface SectionHeadingProps {
  label?: string;
  index?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  index,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <Container className={className}>
      {label && (
        <div className="mb-3">
          <SectionLabel index={index}>{label}</SectionLabel>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Container>
  );
};

export default SectionHeading;