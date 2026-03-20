import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClassName =
    "rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200";

  const variantClassName =
    variant === "primary"
      ? "bg-[var(--accent)] text-slate-950 hover:bg-[var(--accent-hover)]"
      : "border border-[var(--border)] bg-[var(--bg-panel-alt)] text-[var(--text-main)] hover:bg-slate-700";

  return (
    <button
      className={`${baseClassName} ${variantClassName} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}