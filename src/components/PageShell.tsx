import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionTitle({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="headline-lg text-ink">{title}</h2>
      <span className="h-px flex-1 bg-primary" />
      {action}
    </div>
  );
}

export function Slashes() {
  return (
    <span className="slash-marks" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}
