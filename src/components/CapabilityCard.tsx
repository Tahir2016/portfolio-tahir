import Card from "@/components/Card";
import TechTag from "@/components/TechTag";

interface CapabilityCardProps {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
}

const CapabilityCard = ({ id, category, title, description, tags }: CapabilityCardProps) => {
  return (
    <Card as="article">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-muted-foreground">{id}</span>
        <span className="flex items-center gap-2">
          <span aria-hidden className="size-1.5 rounded-full bg-secondary" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            {category}
          </span>
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>
    </Card>
  );
};

export default CapabilityCard;