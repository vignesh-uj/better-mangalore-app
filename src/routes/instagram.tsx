import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, Linkedin, Mail, Play } from "lucide-react";
import { PageShell, Slashes } from "@/components/PageShell";
import { LogoMark } from "@/components/Logo";
import storyPort from "@/assets/story-port.jpg";
import storyChildren from "@/assets/story-children.jpg";
import storyInfra from "@/assets/story-infra.jpg";
import storyStartup from "@/assets/story-startup.jpg";
import storyAirport from "@/assets/story-airport.jpg";
import heroAnganwadi from "@/assets/hero-anganwadi.jpg";

export const Route = createFileRoute("/instagram")({
  head: () => ({
    meta: [
      { title: "From Instagram | Better Mangalore" },
      {
        name: "description",
        content:
          "Daily stories, visuals and updates from across Mangaluru. Follow @bettermangalore for real-time updates.",
      },
      { property: "og:title", content: "From Instagram | Better Mangalore" },
      {
        property: "og:description",
        content: "Daily stories, visuals and updates from across Mangaluru.",
      },
    ],
  }),
  component: InstagramPage;
});

const POSTS = [
  {
    image: storyPort,
    title: "Coastal shipping project gets Centre's nod",
    sub: "Boost for Mangaluru Port and regional trade.",
  },
  {
    image: storyChildren,
    title: "What if every Anganwadi felt like an Ajjimane?",
    sub: "Inside Bengre's child-friendly experiment in public education.",
  },
  {
    image: storyInfra,
    title: "4 key infrastructure projects",
    sub: "That will transform Mangaluru over the next few years.",
  },
  {
    image: storyStartup,
    title: "New startup accelerator launched in Mangaluru",
    sub: "Supporting early-stage founders and innovators.",
  },
  {
    image: storyAirport,
    title: "Mangaluru airport expansion",
    sub: "What it means for the region.",
  },
  {
    image: null,
    title: "What do you think?",
    sub: "What is the biggest challenge Mangaluru needs to solve?",
    poll: ["Traffic & Roads", "Drainage & Flooding", "Waste Management", "Other (comment below)"],
  },
];

function InstagramPage() {
  return (
    <PageShell>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-10 md:px-8 lg:grid-cols-2 lg:py-14">
          <div>
            <h1 className="headline-xl text-ink">
              From <span className="text-primary">Instagram</span>
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <Slashes />
              <span className="h-px flex-1 bg-primary" />
            </div>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Daily stories, visuals and updates from across Mangaluru.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-xl border-2 border-primary text-primary">
                <Instagram className="size-6" />
              </span>
              <div>
                <a
                  href="https://instagram.com/bettermangalore"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-bold text-primary"
                >
                  Follow @bettermangalore
                </a>
                <p className="text-sm text-muted-foreground">for real-time updates and stories.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <PhonePreview image={heroAnganwadi} title="New Anganwadi designed like an Ajjimane" className="hidden rotate-[-6deg] sm:block" />
            <PhonePreview image={storyPort} title="Why Mangaluru matters to India's energy security" className="rotate-[4deg]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-10 md:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="headline-lg text-ink">Latest Posts</h2>
          <span className="h-px flex-1 bg-primary" />
          <a
            href="https://instagram.com/bettermangalore"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary"
          >
            View all on Instagram <ArrowRight className="size-3.5" />
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {POSTS.map((p) => (
            <article key={p.title} className="relative aspect-[3/4.4] overflow-hidden bg-ink">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={900}
                  height={640}
                  className="size-full object-cover opacity-75"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
              <div className="absolute inset-0 flex flex-col p-4">
                <Play className="ml-auto size-4 fill-background text-background" />
                <div className="mt-auto">
                  <h3 className="font-display text-lg uppercase leading-tight text-background">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-snug text-background/85">{p.sub}</p>
                  {p.poll && (
                    <ul className="mt-3 space-y-1">
                      {p.poll.map((o) => (
                        <li
                          key={o}
                          className="rounded bg-background/90 px-2 py-1 text-[11px] font-medium text-ink"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                  )}
                  <LogoMark className="mt-4 h-6" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-10 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mail className="size-5" />
            </span>
            <div>
              <h2 className="headline-sm text-ink">Stay in the loop</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Get the best of Better Mangalore delivered to your inbox.
              </p>
            </div>
          </div>

          <form
            className="flex w-full max-w-md overflow-hidden rounded-full bg-background shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-5 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-6 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-ink"
            >
              Subscribe
            </button>
          </form>

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-wide text-ink">Follow us</span>
            {[
              { Icon: Instagram, href: "https://instagram.com/bettermangalore", label: "Instagram" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:hello@bettermangalore.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function PhonePreview({
  image,
  title,
  className = "",
}: {
  image: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/16] w-40 overflow-hidden rounded-[1.75rem] border-4 border-ink bg-ink shadow-[0_24px_50px_-20px_rgba(17,17,17,0.5)] sm:w-52 ${className}`}
    >
      <img src={image} alt={title} loading="lazy" width={900} height={640} className="size-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h2 className="font-display text-base uppercase leading-tight text-background">{title}</h2>
        <LogoMark className="mt-3 h-5" />
      </div>
    </div>
  );
}
