interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  ariaLabel?: string;
}

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200";

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90",
  outline:
    "border border-border text-foreground hover:border-accent/60 hover:text-accent",
};

const Button = ({
  children,
  href,
  variant = "outline",
  className = "",
  ariaLabel,
}: ButtonProps) => {
  const classNames = `${baseClass} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classNames} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;