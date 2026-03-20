import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-[var(--accent)] px-2 py-1 text-xs font-bold text-slate-950">
      {children}
    </span>
  );
}