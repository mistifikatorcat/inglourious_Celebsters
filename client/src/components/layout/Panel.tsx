import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className = "" }: PanelProps) {
  return (
    <section
      className={`rounded-3xl border border-[var(--border)] bg-[var(--bg-panel)] p-5 shadow-lg ${className}`}
    >
      {children}
    </section>
  );
}