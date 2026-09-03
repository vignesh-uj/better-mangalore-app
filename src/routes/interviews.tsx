import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessagesSquare } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroInterviews from "@/assets/hero-interviews.jpg";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";

export const Route = createFileRoute("/interviews")({
  head: () => ({
    meta: [
      { title: "Conversations | Better Mangalore Interviews" },
      {
        name: "description",
        content:
          "Conversations with entrepreneurs, business leaders and professionals about their journeys, decisions, failures, lessons and perspectives.",
      },
      { property: "og:title", content: "Conversations | Better Mangalore" },
      {
        property: "og:description",
        content: "Real stories. Real people. Real Mangaluru.",
      },
    ],
  }),
  component: Interviews,
});

const INTERVIEWS = [
  {
    image: person1,
    tags: "Business · Entrepreneurship",
    name: "Praveen Kalbhavi",
    role: "CEO & Co-founder, Novigo Solutions",
    headline: "On leaving Infosys, becoming an entrepreneur and building Novigo Solutions",
    body: "After spending two decades at Infosys, Praveen Kalbhavi chose a very different path — entrepreneurship. Speaking at Founder Connect at St. Joseph Engineering College, Mangaluru, he reflected on that transition, the realities of building a company and some of the lessons he has learned along the way.",
  },
  {
    image: person2,
    tags: "Leadership · Innovation",
    name: "Rohan Shetty",
    role: "Managing Director, Coastal Ventures",
    headline: "On building teams that outlast a single good idea",
    body: "In this conversation, Rohan Shetty shares his journey, the choices that shaped his path and the principles that continue to guide his work. From early challenges to meaningful lessons, this is a candid look at leadership, purpose and impact.",
  },
];

function Interviews() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 lg:left-[45%]">
          <img
            src={heroInterviews}
            alt="Two speakers in conversation on stage"
            width={1200}
            height={800}
            className="hero-fade size-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 py-10 md:px-8 lg:py-14">
          <div className="max-w-2xl bg-background/85 p-4 backdrop-blur-sm lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <h1 className="headline-xl text-ink">Conversations</h1>
            <p className="mt-3 font-bold text-primary md:text-lg">
              Conversations with people building, leading and shaping ideas.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Better Mangalore speaks with entrepreneurs, business leaders, professionals and other
              interesting people about their journeys, decisions, failures, lessons and perspectives.
              These conversations are less about profiles and more about understanding how people
              think, build and lead.
            </p>
            <span className="mt-6 block h-1 w-12 bg-primary" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-6 px-4 pb-12 md:px-8 lg:grid-cols-2">
        {INTERVIEWS.map((i) => (
          <article
            key={i.name}
            className="grid gap-5 bg-card p-5 shadow-[0_14px_40px_-22px_rgba(17,17,17,0.45)] sm:grid-cols-[minmax(0,10rem)_1fr]"
          >
            <img
              src={i.image}
              alt={i.name}
              loading="lazy"
              width={700}
              height={800}
              className="aspect-[4/5] w-full object-cover"
            />
            <div>
              <p className="eyebrow">{i.tags}</p>
              <h2 className="headline-lg mt-1 text-ink">{i.name}</h2>
              <p className="mt-1 text-sm font-bold text-ink">{i.role}</p>
              <p className="mt-3 font-sans text-lg font-bold normal-case leading-snug text-ink">
                {i.headline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Read the full conversation <ArrowRight className="size-4" />
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-14 md:px-8">
        <div className="grid gap-6 border-y-2 border-primary py-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
          <div className="flex items-center gap-5">
            <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary">
              <MessagesSquare className="size-7" />
            </span>
            <h2 className="headline-lg max-w-[14rem] text-ink">Better Mangalore Conversations</h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground lg:border-l lg:border-border lg:pl-10">
            Ideas often become more useful when we hear directly from the people who have lived them.
            Through Better Mangalore Conversations, we bring readers closer to entrepreneurs, business
            leaders, innovators and other people whose experiences offer something worth learning from.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
