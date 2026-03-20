import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-panel-alt)] px-4 py-3 text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] ${className}`}
      {...props}
    />
  );
}