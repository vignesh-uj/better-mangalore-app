import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Camera,
  GraduationCap,
  Heart,
  Instagram,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Rocket,
  Search,
  Target,
  Theater,
  TrafficCone,
  Users,
} from "lucide-react";
import { PageShell, Slashes } from "@/components/PageShell";
import heroLighthouse from "@/assets/hero-lighthouse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Better Mangalore" },
      {
        name: "description",
        content:
          "Better Mangalore is an independent digital publication featuring stories about the people, ideas, businesses and developments shaping Mangaluru and coastal Karnataka.",
      },
      { property: "og:title", content: "About Better Mangalore" },
      {
        property: "og:description",
        content: "We highlight issues, celebrate progress and start conversations that help our city move forward.",
      },
    ],
  }),
  component: About,
});

const DRIVERS = [
  { Icon: Search, title: "Fact-based", body: "We report with accuracy, verify before we publish and keep facts first." },
  { Icon: Users, title: "Constructive", body: "We focus on solutions, possibilities and progress not just problems." },
  { Icon: Target, title: "City-first", body: "Everything we do is centered around making Mangaluru better." },
  { Icon: MessageSquare, title: "Inclusive", body: "We represent diverse voices from across communities, professions and ideas." },
  { Icon: Heart, title: "Proudly local", body: "We are rooted in Mangaluru and passionate about its people and potential." },
];

const COVER = [
  { Icon: Building2, label: "Business" },
  { Icon: Rocket, label: "Startups" },
  { Icon: TrafficCone, label: "Infrastructure" },
  { Icon: GraduationCap, label: "Education" },
  { Icon: Lightbulb, label: "Innovation" },
  { Icon: Users, label: "Civic Issues" },
  { Icon: Leaf, label: "Environment" },
  { Icon: Theater, label: "Culture" },
  { Icon: Camera, label: "Life & Places" },
];

function About() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-[36%]">
          <img
            src={heroLighthouse}
            alt="Mangaluru coastline at sunset"
            width={1400}
            height={900}
            className="hero-fade size-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 py-10 md:px-8 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,28rem)_1fr]">
            <div className="bg-background/85 p-4 backdrop-blur-sm lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <div className="flex items-center gap-3">
                <p className="eyebrow">About Better Mangalore</p>
                <Slashes />
              </div>
              <h1 className="headline-xl mt-3 text-ink">
                About <span className="text-primary">Us</span>
              </h1>
              <span className="mt-4 block h-1 w-12 bg-primary" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Better Mangalore is an independent digital publication featuring stories about the{" "}
                <strong className="text-ink">people</strong>, ideas, businesses and developments
                shaping Mangaluru and coastal Karnataka.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                We highlight issues, celebrate progress and start conversations that help our city
                move forward.
              </p>
            </div>

            <div className="ml-auto hidden max-w-sm bg-background/95 p-8 text-center shadow-[0_20px_50px_-25px_rgba(17,17,17,0.5)] lg:block">
              <span className="font-display text-4xl leading-none text-primary">“</span>
              <span className="mt-2 block h-px w-full bg-primary" />
              <p className="my-4 font-display text-3xl uppercase leading-tight text-ink">
                Your city.
                <br />
                Your <span className="text-primary">Voice.</span>
              </p>
              <span className="block h-px w-full bg-primary" />
              <span className="font-display text-4xl leading-none text-primary">”</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-8">
          <div className="flex items-center gap-4">
            <h2 className="headline-lg text-ink">What drives us</h2>
            <span className="h-px w-16 bg-primary" />
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-border">
            {DRIVERS.map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-4 lg:px-4 lg:first:pl-0">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 md:px-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <h2 className="headline-lg text-ink">What we cover</h2>
            <span className="h-px w-16 bg-primary" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">
            {COVER.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 bg-background px-3 py-6 text-center"
              >
                <Icon className="size-7 text-primary" strokeWidth={1.5} />
                <span className="text-xs font-bold uppercase tracking-wide text-ink">{label}</span>
              </div>
            ))}
            <div className="flex items-center justify-center bg-background px-3 py-6 text-sm font-medium text-ink">
              and more…
            </div>
          </div>
        </div>

        <div className="bg-surface p-6 md:p-8">
          <div className="flex items-center gap-4">
            <h2 className="headline-lg text-ink">Let's connect</h2>
            <span className="h-px w-12 bg-primary" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            We love hearing from our readers. Have a story idea, feedback or suggestion? We'd love to
            hear from you.
          </p>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-5 text-ink" />
              <a href="mailto:hello@bettermangalore.com" className="hover:text-primary">
                hello@bettermangalore.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="size-5 text-ink" />
              <a
                href="https://instagram.com/better_mangalore"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                @better_mangalore
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-5 text-ink" />
              <span>Mangaluru, Karnataka, India</span>
            </li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
