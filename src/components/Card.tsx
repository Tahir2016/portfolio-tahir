type CardElement = "div" | "article" | "li";

interface CardProps {
  as?: CardElement;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ as: Tag = "div", children, className = "" }: CardProps) => {
  return (
    <Tag
      className={`cyber-glass hud-card glass-surface group relative flex h-full flex-col rounded-xl border border-accent/25 bg-white/85 p-6 shadow-lg backdrop-blur-md transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/55 hover:bg-white/95 dark:border-slate-800/50 dark:bg-[#0b101b]/90 dark:hover:bg-[#0b101b]/95 sm:p-8 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Card;