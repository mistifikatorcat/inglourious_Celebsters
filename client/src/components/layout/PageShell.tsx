import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center p-4 md:p-8">
        {children}
      </div>
    </main>
  );
}