import heroAnganwadi from "@/assets/hero-anganwadi.jpg";
import storyPort from "@/assets/story-port.jpg";
import storySme from "@/assets/story-sme.jpg";
import storyStartup from "@/assets/story-startup.jpg";
import storyInfra from "@/assets/story-infra.jpg";

export type StorySection = {
  heading: string;
  paragraphs: string[];
};

export type Story = {
  slug: string;
  image: string;
  imageAlt: string;
  tags: string;
  title: string;
  lead: string | null;
  body: string;
  standfirst: string;
  intro: string[];
  sections: StorySection[];
};

export const STORIES: Story[] = [
  {
    slug: "anganwadi-ajjimane-bengre",
    image: heroAnganwadi,
    imageAlt: "Children playing inside a redesigned Anganwadi in Bengre, Mangaluru",
    tags: "City • Education",
    title: "Mangaluru’s ‘Ajjimane’ Anganwadi reimagines early childhood learning with a homely touch",
    lead: "Inside Bengre's child-friendly experiment in public education.",
    body: "A new approach to the traditional Anganwadi combines child-centric spaces, sustainability and the warmth of a grandmother's home.",
    standfirst: "",
    intro: [
      "A new anganwadi model in Bengre, Mangaluru, is blending modern child-friendly infrastructure with a simple emotional idea — making children feel as comfortable as they would in their grandmother’s home.",
      "Named ‘Ajjimane’, meaning grandmother’s house, the centre has been developed by Nirmiti Kendra with around ₹25 lakh in CSR support from Mangalore Refinery and Petrochemicals Ltd. (MRPL).",
      "The idea is to move beyond the conventional anganwadi setup and create a space that feels warm, safe and inviting for young children.",
    ],
    sections: [
      {
        heading: "Designed around children",
        paragraphs: [
          "The new facility has been planned with child-friendly architecture and includes open play areas, colourful walls inspired by rural life, dedicated sleeping spaces and a modern hygienic kitchen.",
          "The environment has been designed to make children feel relaxed while supporting early learning, play and rest.",
          "According to Geetha, the anganwadi teacher at the Bengre centre, the name ‘Ajjimane’ reflects the feeling the project hopes to create.",
          "The intention is for children to walk into the centre with the same comfort and happiness they associate with visiting their grandmother’s house.",
        ],
      },
      {
        heading: "Sustainability built into the centre",
        paragraphs: [
          "The anganwadi also incorporates several environmentally conscious features. These include solar lighting, rainwater harvesting and vermicomposting.",
          "Organic waste is converted into manure and used in the fruit and vegetable garden maintained within the premises.",
          "Produce grown at the centre is then used to complement the children’s meals.",
          "The garden also includes fruit-bearing plants such as rose apple, with harvested fruits being shared with the children.",
        ],
      },
      {
        heading: "More than a classroom",
        paragraphs: [
          "The Ajjimane model attempts to bring nutrition, sustainability, learning and emotional well-being together within one early-childhood space.",
          "For children, especially in the crucial formative years, the surroundings in which they learn can be just as important as the lessons themselves.",
          "By combining modern infrastructure with a familiar, homely atmosphere, the Bengre initiative offers an interesting model for how anganwadis can evolve.",
          "For Mangaluru, Ajjimane is a small but thoughtful example of how CSR-led public infrastructure can go beyond construction and focus on the actual experience of the people it is meant to serve.",
        ],
      },
    ],
  },
  {
    slug: "mangaluru-india-energy-security",
    image: storyPort,
    imageAlt: "Storage tanks and jetty infrastructure at New Mangalore Port",
    tags: "Business • Infrastructure",
    title: "Why Mangaluru is becoming increasingly important to India's energy security",
    lead: null,
    body: "Mangaluru has long been an important industrial and port city. New developments are strengthening its role in India's wider energy infrastructure.",
    standfirst:
      "Refining capacity, strategic crude reserves, an LPG import terminal and a deep-water port put Mangaluru at the centre of how India stores and moves energy.",
    intro: [
      "For decades Mangaluru was described as an industrial port city — refinery, fertiliser, chemicals, cargo. That description is now incomplete.",
      "A cluster of energy infrastructure has grown around the city, and each new addition makes the next one more useful.",
    ],
    sections: [
      {
        heading: "The refinery anchor",
        paragraphs: [
          "The refinery remains the anchor tenant of the region's industrial economy, and its throughput shapes everything from trucking demand to local employment.",
        ],
      },
      {
        heading: "Strategic reserves under the coast",
        paragraphs: [
          "Underground rock caverns near the city hold strategic crude reserves — insurance against supply shocks that never appears in a city's skyline.",
        ],
      },
      {
        heading: "Port capacity and deep-water berths",
        paragraphs: [
          "New Mangalore Port's deep draft allows larger vessels to berth, cutting per-tonne costs for both imports and exports.",
          "Mechanised handling has reduced turnaround time, which is the metric shipping lines actually price.",
        ],
      },
      {
        heading: "Pipelines and inland reach",
        paragraphs: [
          "Product pipelines and rail links carry fuel inland towards Karnataka and Kerala markets, making the coast relevant far beyond the district.",
        ],
      },
      {
        heading: "What this means for the city",
        paragraphs: [
          "More investment brings jobs and ancillary businesses, but also raises questions about emissions, coastal land use and disaster preparedness that residents are right to ask.",
        ],
      },
    ],
  },
  {
    slug: "mangaluru-smes-going-global",
    image: storySme,
    imageAlt: "Workers on a manufacturing floor at a Mangaluru small enterprise",
    tags: "Business",
    title: "Mangaluru's SMEs are going global",
    lead: null,
    body: "Local businesses are scaling new markets with innovation, partnerships and digital transformation.",
    standfirst:
      "Quietly, without press conferences, a set of Mangaluru small and medium enterprises now ship to West Asia, Africa and Europe.",
    intro: [
      "Mangaluru's industrial base has long been built on smaller units — engineering, food processing, cashew, plastics, packaging.",
      "What has changed is ambition: several of these firms now treat exports as their primary market rather than an occasional order.",
    ],
    sections: [
      {
        heading: "From job work to products",
        paragraphs: [
          "Firms that once machined parts to someone else's drawing now sell finished assemblies under their own name, which changes margins and bargaining power.",
        ],
      },
      {
        heading: "Certification as the entry ticket",
        paragraphs: [
          "Buyers abroad ask for audits and documentation before they ask for samples. Getting certified is slow, expensive and non-negotiable.",
        ],
      },
      {
        heading: "Digital sales and small teams",
        paragraphs: [
          "Two-person export desks running on email, video calls and marketplace listings have replaced expensive travel-heavy sales cycles.",
        ],
      },
      {
        heading: "The talent question",
        paragraphs: [
          "Retaining engineers who could move to Bengaluru remains the hardest part. Firms are answering with ownership, flexible work and faster growth paths.",
        ],
      },
      {
        heading: "What would help next",
        paragraphs: [
          "Shared testing facilities, faster customs handling at the port and cheaper working capital top almost every owner's list.",
        ],
      },
    ],
  },
  {
    slug: "startup-accelerator-mangaluru",
    image: storyStartup,
    imageAlt: "Founders working together at a Mangaluru startup workspace",
    tags: "Startups",
    title: "New startup accelerator to support early-stage founders in Mangaluru",
    lead: null,
    body: "A collaborative initiative to mentor, fund and connect startups with the right networks.",
    standfirst:
      "A new accelerator wants to keep coastal founders building at home by fixing the three things they usually leave for: mentors, money and customers.",
    intro: [
      "Mangaluru produces a steady stream of engineering and management graduates, and a fair number of them start companies.",
      "Historically, those companies relocated once they raised their first round. The new accelerator is an attempt to interrupt that pattern.",
    ],
    sections: [
      {
        heading: "What the programme offers",
        paragraphs: [
          "A cohort model with desk space, a small cheque, structured mentoring and demo access to established regional businesses.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "Early-stage teams with a working prototype and at least one paying or pilot customer, across software, hardware and agri-tech.",
        ],
      },
      {
        heading: "The mentor bench",
        paragraphs: [
          "Operators from Mangaluru, Udupi and Bengaluru have committed monthly time, with a bias towards founders who have already built and exited once.",
        ],
      },
      {
        heading: "Funding and follow-on",
        paragraphs: [
          "The cheque is intentionally small; the value is in a curated introduction list for the round that follows.",
        ],
      },
      {
        heading: "How success will be measured",
        paragraphs: [
          "Not by demo-day applause but by how many companies are still hiring in the city two years later.",
        ],
      },
    ],
  },
  {
    slug: "projects-shaping-mangalurus-next-decade",
    image: storyInfra,
    imageAlt: "Road and flyover construction work in Mangaluru",
    tags: "City",
    title: "Projects shaping Mangaluru's next decade",
    lead: null,
    body: "Key infrastructure and urban upgrades set to improve mobility, liveability and economic growth.",
    standfirst:
      "Flyovers, drainage, waterfront access and transit upgrades are all underway at once. Together they will decide how the city feels in 2035.",
    intro: [
      "Mangaluru is in the middle of its busiest construction decade in living memory.",
      "The projects range from junction redesigns to stormwater networks, and their combined effect will be felt long after the barricades come down.",
    ],
    sections: [
      {
        heading: "Roads and junctions",
        paragraphs: [
          "Pumpwell, Nanthoor and Kottara remain the pressure points, and grade separation only helps if the approach roads are widened alongside.",
        ],
      },
      {
        heading: "Stormwater and flooding",
        paragraphs: [
          "The city floods where its natural drains were built over. Restoring capacity is unglamorous work with the highest payoff.",
        ],
      },
      {
        heading: "Public transport",
        paragraphs: [
          "Better bus frequency, dedicated stops and integrated ticketing would move more people than any additional lane.",
        ],
      },
      {
        heading: "Waterfront and public space",
        paragraphs: [
          "Access to the river and the beach is still fragmented. Continuous promenades and shaded walkways are the cheapest liveability upgrade available.",
        ],
      },
      {
        heading: "What to watch",
        paragraphs: ["Deadlines, sequencing and maintenance budgets — the three places where good plans usually fail."],
      },
    ],
  },
];

export function getStory(slug: string) {
  return STORIES.find((s) => s.slug === slug);
}

export function getRelatedStories(slug: string, limit = 3) {
  return STORIES.filter((s) => s.slug !== slug).slice(0, limit);
}
