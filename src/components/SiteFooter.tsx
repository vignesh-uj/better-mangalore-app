import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { LogoMark } from "./Logo";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/stories", label: "Stories" },
  { to: "/interviews", label: "Interviews" },
  { to: "/instagram", label: "Instagram" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 py-8 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <LogoMark className="h-10" />
          <p className="max-w-[16rem] border-l border-background/25 pl-5 text-sm leading-snug text-background/85">
            Stories about the people, ideas and developments shaping Mangaluru.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-bold uppercase tracking-wide text-background/90 transition-colors hover:text-primary [&.active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[
            { Icon: Instagram, href: "https://instagram.com/better_mangalore", label: "Instagram" },
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:hello@bettermangalore.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-full border border-background/40 text-background transition-colors hover:border-primary hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-background/15 px-4 py-4 text-center text-xs text-background/60 md:px-8">
        © 2026 Better Mangalore. All rights reserved.
      </div>
    </footer>
  );
}
