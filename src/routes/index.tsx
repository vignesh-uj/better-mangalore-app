import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Instagram } from "lucide-react";
import { PageShell, SectionTitle, Slashes } from "@/components/PageShell";
import heroAnganwadi from "@/assets/hero-anganwadi.jpg";
import heroLighthouse from "@/assets/hero-lighthouse.jpg";
import heroStories from "@/assets/hero-stories.jpg";
import storyPort from "@/assets/story-port.jpg";
import storyInfra from "@/assets/story-infra.jpg";
import storyStartup from "@/assets/story-startup.jpg";
import storyAirport from "@/assets/story-airport.jpg";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Better Mangalore | Your City. Your Voice." },
      {
        name: "description",
        content:
          "An independent digital publication on the people, ideas, businesses and developments shaping Mangaluru and coastal Karnataka.",
      },
      { property: "og:title", content: "Better Mangalore | Your City. Your Voice." },
      {
        property: "og:description",
        content:
          "Stories, conversations and updates about the people, ideas and developments shaping Mangaluru.",
      },
    ],
  }),
  component: Home,
});

const SLIDES = [
  {
    slug: "anganwadi-ajjimane-bengre",
    image: heroAnganwadi,
    kicker: "What if every Anganwadi",
    headline: "felt like an Ajjimane?",
    sub: "Inside Bengre's child-friendly experiment in public education.",
  },
  {
    slug: "mangaluru-india-energy-security",
    image: heroPortSlide(),
    kicker: "Why Mangaluru matters",
    headline: "to India's energy security",
    sub: "How new developments are strengthening the city's industrial role.",
  },
  {
    slug: "projects-shaping-mangalurus-next-decade",
    image: heroStories,
    kicker: "Projects shaping",
    headline: "Mangaluru's next decade",
    sub: "Key infrastructure and urban upgrades now underway.",
  },
];

function heroPortSlide() {
  return heroLighthouse;
}

const LATEST = [
  {
    slug: "mangaluru-india-energy-security",
    image: storyPort,
    tags: "Business",
    title: "Why Mangaluru is becoming increasingly important to India's energy security",
  },
  {
    slug: "anganwadi-ajjimane-bengre",
    image: heroAnganwadi,
    tags: "City • Education",
    title: "What if every Anganwadi felt like an Ajjimane? Inside Bengre's child-friendly experiment",
  },
  {
    slug: "startup-accelerator-mangaluru",
    image: storyStartup,
    tags: "Startups",
    title: "New startup accelerator to support early-stage founders in Mangaluru",
  },
  {
    slug: "projects-shaping-mangalurus-next-decade",
    image: storyInfra,
    tags: "City • Infrastructure",
    title: "4 key infrastructure projects set to transform Mangaluru over the next few years",
  },
];

const CONVERSATIONS = [
  {
    slug: "praveen-kalbhavi-novigo-solutions",
    image: person1,
    name: "Praveen Kalbhavi",
    role: "CEO & Co-founder, Novigo Solutions",
    blurb: "On leaving Infosys, entrepreneurship and building a company from Mangaluru.",
  },
  {
    slug: "rohan-shetty-coastal-ventures",
    image: person2,
    name: "Rohan Shetty",
    role: "Managing Director, Coastal Ventures",
    blurb: "On leadership, innovation and opportunities in the years ahead.",
  },
];


const IG_POSTS = [
  { image: storyPort, title: "Coastal shipping project gets Centre's nod" },
  { image: heroLighthouse, title: "Good news for Mangaluru" },
  { image: storyInfra, title: "Traffic bottleneck at Pumpwell" },
  { image: storyAirport, title: "Mangaluru airport expansion" },
  { image: null, title: "Your city. Your voice. What do you think?" },
];

function Home() {
  const [slide, setSlide] = useState(0);
  const active = SLIDES[slide]!;

  return (
    <PageShell>
      {/* Featured story hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="relative">
          <div className="absolute inset-0 lg:left-[38%]">
            <img
              src={active.image}
              alt={active.headline}
              width={1400}
              height={900}
              className="hero-fade size-full object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-[1400px] px-4 py-10 md:px-8 lg:py-20">
            <div className="max-w-2xl bg-background/85 p-4 backdrop-blur-sm lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <div className="flex items-center gap-3">
                <span className="bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  Featured Story
                </span>
                <Slashes />
              </div>
              <h1 className="headline-xl mt-5 text-ink">
                {active.kicker}{" "}
                <span className="block text-primary">{active.headline}</span>
              </h1>
              <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">{active.sub}</p>
              <Link
                to="/stories/$slug"
                params={{ slug: active.slug }}
                className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-ink"
              >
                Read the story <ArrowRight className="size-4" />
              </Link>
              <div className="mt-8 flex gap-2">
                {SLIDES.map((s, i) => (
                  <button
                    key={s.headline}
                    type="button"
                    aria-label={`Show featured story ${i + 1}`}
                    onClick={() => setSlide(i)}
                    className={`size-2.5 rounded-full transition-colors ${
                      i === slide ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest stories + conversations */}
      <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 md:px-8 lg:grid-cols-[1.55fr_1fr] lg:gap-12">
        <div>
          <SectionTitle
            title="Latest Stories"
            action={
              <Link
                to="/stories"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary"
              >
                View all <ArrowRight className="size-3.5" />
              </Link>
            }
          />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {LATEST.map((s) => (
              <article key={s.slug} className="group">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={900}
                  height={640}
                  className="h-40 w-full object-cover"
                />
                <p className="eyebrow mt-3">{s.tags}</p>
                <h3 className="mt-1.5 font-sans text-base font-bold normal-case leading-snug tracking-normal text-ink">
                  {s.title}
                </h3>
                <Link
                  to="/stories/$slug"
                  params={{ slug: s.slug }}
                  className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary"
                >
                  Read more <ArrowRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:border-l lg:border-border lg:pl-10">
          <SectionTitle
            title="Conversations"
            action={
              <Link
                to="/interviews"
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary"
              >
                View all <ArrowRight className="size-3.5" />
              </Link>
            }
          />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {CONVERSATIONS.map((c) => (
              <article key={c.name}>
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={700}
                  height={800}
                  className="aspect-[4/5] w-full object-cover"
                />
                <h3 className="headline-sm mt-3 text-ink">{c.name}</h3>
                <p className="mt-1 text-xs font-bold text-ink">{c.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                <Link
                  to="/interviews/$slug"
                  params={{ slug: c.slug }}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary"
                >
                  Read the conversation <ArrowRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* From Instagram */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 py-10 md:px-8 xl:flex-row xl:items-center">
          <div className="xl:w-72 xl:shrink-0">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Instagram className="size-6" />
              </span>
              <h2 className="headline-lg text-ink">From Instagram</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Daily stories, visuals and updates from across Mangaluru.
            </p>
            <Link to="/instagram" className="mt-3 inline-block font-bold text-primary">
              Follow @better_mangalore
            </Link>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {IG_POSTS.map((p) => (
              <IgTile key={p.title} image={p.image} title={p.title} />
            ))}
          </div>

          <Link
            to="/instagram"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground xl:shrink-0"
          >
            View on Instagram <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

function IgTile({ image, title }: { image: string | null; title: string }) {
  return (
    <div className="relative aspect-square overflow-hidden bg-ink">
      {image && (
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={900}
          height={640}
          className="size-full object-cover opacity-70"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <p className="absolute inset-x-0 bottom-0 p-3 font-display text-sm uppercase leading-tight text-background">
        {title}
      </p>
    </div>
  );
}
