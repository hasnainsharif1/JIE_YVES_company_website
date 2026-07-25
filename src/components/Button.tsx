import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline-light";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const baseClasses =
  "inline-block rounded px-6 py-3 uppercase font-semibold tracking-[0.08em] transition-colors";

const variantClasses = {
  primary: "bg-red text-white hover:bg-red-dark",
  secondary: "border border-graphite text-graphite hover:bg-graphite hover:text-white",
  "outline-light": "border border-white text-white hover:bg-white hover:text-graphite",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} className={classes} onClick={onClick} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
