import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  className?: string;
  disabled?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold tracking-wide transition-all duration-300 select-none";

const variants = {
  primary:
    "bg-ember text-ink hover:bg-cream hover:text-navy shadow-[0_0_0_0_rgba(224,108,42,0.4)] hover:shadow-[0_0_36px_2px_rgba(224,108,42,0.35)]",
  ghost:
    "border border-cream/25 text-cream hover:border-ember hover:text-ember",
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  disabled,
}: ButtonProps) {
  const cls = clsx(base, variants[variant], disabled && "opacity-50 pointer-events-none", className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
