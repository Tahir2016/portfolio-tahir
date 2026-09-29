interface TechTagProps {
  label: string;
}

const TechTag = ({ label }: TechTagProps) => {
  return (
    <span       className="tech-tag inline-flex items-center rounded-md border border-accent/20 bg-muted px-2.5 py-1 font-mono text-[11px] leading-none text-muted-foreground transition-[border-color,color,box-shadow,background-color] duration-200 hover:border-accent/55 hover:bg-accent/8 hover:text-foreground">
      {label}
    </span>
  );
};

export default TechTag;