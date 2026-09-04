import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { getRelatedStories, getStory } from "@/data/stories";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story, related: getRelatedStories(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Story not found | Better Mangalore" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { story } = loaderData;
    const title = `${story.title} | Better Mangalore`;
    return {
      meta: [
        { title },
        { name: "description", content: story.standfirst },
        { property: "og:title", content: title },
        { property: "og:description", content: story.standfirst },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: StoryDetail,
  notFoundComponent: StoryNotFound,
});

function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function StoryNotFound() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
        <p className="eyebrow">404</p>
        <h1 className="headline-xl mt-2 text-ink">Story not found</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          The story you are looking for may have moved. Browse all Better Mangalore stories
          instead.
        </p>
        <Link
          to="/stories"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary"
        >
          <ArrowLeft className="size-4" /> Back to Stories
        </Link>
      </section>
    </PageShell>
  );
}

function StoryDetail() {
  const { story, related } = Route.useLoaderData();

  return (
    <PageShell>
      <div className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-3 md:px-8">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4 text-primary" /> Back to Stories
          </Link>
        </div>
      </div>

      <article className="mx-auto grid max-w-[1400px] gap-10 px-4 py-8 md:px-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
        <div>
          <p className="eyebrow">{story.tags}</p>
          <h1 className="mt-3 font-sans text-3xl font-extrabold normal-case leading-tight tracking-tight text-ink md:text-[2.6rem]">
            {story.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {story.standfirst}
          </p>

          <img
            src={story.image}
            alt={story.imageAlt}
            width={1200}
            height={800}
            className="mt-8 aspect-[16/10] w-full object-cover"
          />

          <blockquote className="mt-8 border-l-4 border-primary pl-5">
            <p className="font-sans text-xl font-extrabold normal-case leading-snug text-ink">
              &ldquo;{story.pullQuote}&rdquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {story.pullQuoteBody}
            </p>
          </blockquote>

          <div className="mt-8 space-y-5">
            {story.intro.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {story.sections.map((section, idx) => (
              <section key={section.heading} id={slugifyHeading(section.heading)}>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-bold text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="headline-sm text-ink">{section.heading}</h2>
                </div>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <div className="bg-surface p-6">
            <Quote className="size-7 fill-primary text-primary" />
            <p className="mt-3 font-sans text-lg font-extrabold normal-case italic leading-snug text-ink">
              &ldquo;{story.sideQuote}&rdquo;
            </p>
            <p className="mt-4 flex items-center gap-3 text-sm font-bold text-ink">
              <span className="h-0.5 w-6 bg-primary" />
              {story.sideQuoteSource}
            </p>
          </div>

          <div>
            <h2 className="headline-sm text-ink">In this story</h2>
            <ol className="mt-4 space-y-3">
              {story.sections.map((section, idx) => (
                <li key={section.heading} className="flex items-center gap-3">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-bold text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${slugifyHeading(section.heading)}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {related.length > 0 && (
            <div className="border-t border-border pt-8">
              <h2 className="headline-sm text-ink">Related stories</h2>
              <div className="mt-4 space-y-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/stories/$slug"
                    params={{ slug: r.slug }}
                    className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4"
                  >
                    <img
                      src={r.image}
                      alt={r.title}
                      loading="lazy"
                      width={300}
                      height={360}
                      className="aspect-[5/6] w-full object-cover"
                    />
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-widest text-primary">
                        {r.tags}
                      </span>
                      <span className="mt-1 block text-sm leading-snug text-ink">{r.title}</span>
                    </span>
                    <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </article>
    </PageShell>
  );
}
