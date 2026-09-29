interface SectionLabelProps {
  children: React.ReactNode;
  index?: string;
  trailing?: React.ReactNode;
}

const SectionLabel = ({ children, index, trailing }: SectionLabelProps) => {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      <span aria-hidden className="shrink-0 size-1.5 rounded-full bg-accent" />
      <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-accent sm:text-sm">
        {children}
      </span>
      <span aria-hidden className="h-px min-w-4 flex-1 bg-border" />
      {trailing && (
        <span className="ml-auto min-w-0 text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground/75 sm:text-[10px]">
          {trailing}
        </span>
      )}
      {index && (
        <span
          aria-hidden
          className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline"
        >
          [ {index} ]
        </span>
      )}
    </div>
  );
};

export default SectionLabel;
