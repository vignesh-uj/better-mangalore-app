import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroStories from "@/assets/hero-stories.jpg";
import heroAnganwadi from "@/assets/hero-anganwadi.jpg";
import storyPort from "@/assets/story-port.jpg";
import storySme from "@/assets/story-sme.jpg";
import storyStartup from "@/assets/story-startup.jpg";
import storyInfra from "@/assets/story-infra.jpg";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories | Better Mangalore" },
      {
        name: "description",
        content:
          "Developments, ideas, businesses and initiatives that tell us something about where Mangaluru is today — and where it could be heading.",
      },
      { property: "og:title", content: "Stories worth knowing from Mangaluru" },
      {
        property: "og:description",
        content: "Business, startups, infrastructure, education and civic life in Mangaluru.",
      },
    ],
  }),
  component: Stories,
});

const STORIES = [
  {
    image: heroAnganwadi,
    tags: "City • Education",
    title: "What if every Anganwadi felt like an Ajjimane?",
    lead: "Inside Bengre's child-friendly experiment in public education.",
    body: "A new approach to the traditional Anganwadi combines child-centric spaces, sustainability and the warmth of a grandmother's home.",
  },
  {
    image: storyPort,
    tags: "Business • Infrastructure",
    title: "Why Mangaluru is becoming increasingly important to India's energy security",
    lead: null,
    body: "Mangaluru has long been an important industrial and port city. New developments are strengthening its role in India's wider energy infrastructure.",
  },
  {
    image: storySme,
    tags: "Business",
    title: "Mangaluru's SMEs are going global",
    lead: null,
    body: "Local businesses are scaling new markets with innovation, partnerships and digital transformation.",
  },
  {
    image: storyStartup,
    tags: "Startups",
    title: "New startup accelerator to support early-stage founders in Mangaluru",
    lead: null,
    body: "A collaborative initiative to mentor, fund and connect startups with the right networks.",
  },
  {
    image: storyInfra,
    tags: "City",
    title: "Projects shaping Mangaluru's next decade",
    lead: null,
    body: "Key infrastructure and urban upgrades set to improve mobility, liveability and economic growth.",
  },
];

function Stories() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-[42%]">
          <img
            src={heroStories}
            alt="Mangaluru riverfront and clock tower"
            width={1400}
            height={760}
            className="hero-fade size-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 py-10 md:px-8 lg:py-16">
          <div className="max-w-xl bg-background/85 p-4 backdrop-blur-sm lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <h1 className="headline-xl text-ink">Stories</h1>
            <p className="mt-3 font-bold text-primary">Stories worth knowing from Mangaluru.</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Developments, ideas, businesses, institutions and initiatives that tell us something
              about where Mangaluru is today — and where it could be heading.
            </p>
            <span className="mt-6 block h-1 w-12 bg-primary" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {STORIES.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col border border-border bg-card transition-shadow hover:shadow-[0_12px_30px_-14px_rgba(17,17,17,0.35)]"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={900}
                height={640}
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-4">
                <p className="eyebrow">{s.tags}</p>
                <h2 className="mt-2 font-sans text-lg font-bold normal-case leading-snug tracking-normal text-ink">
                  {s.title}
                </h2>
                {s.lead && <p className="mt-2 text-sm font-bold text-ink">{s.lead}</p>}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Read story <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-14 md:px-8">
        <div className="grid gap-6 border-y-2 border-primary py-8 lg:grid-cols-[auto_1fr_1fr_1fr] lg:items-center lg:gap-10">
          <div className="flex items-center gap-5">
            <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary">
              <BookOpen className="size-7" />
            </span>
            <h2 className="headline-lg text-ink">What we cover</h2>
          </div>
          <p className="text-sm text-muted-foreground lg:border-l lg:border-border lg:pl-8">
            Better Mangalore follows interesting developments across business, startups,
            infrastructure, education, innovation, culture and civic life.
          </p>
          <p className="text-sm text-muted-foreground lg:border-l lg:border-border lg:pl-8">
            Not every update needs to become a story.
          </p>
          <p className="text-sm text-muted-foreground lg:border-l lg:border-border lg:pl-8">
            We focus on the ones that help us understand Mangaluru better.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
