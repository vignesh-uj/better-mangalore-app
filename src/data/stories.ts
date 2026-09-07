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
    title: "Mangaluru chosen to launch Karnataka’s first K-Combinator startup accelerator",
    lead: null,
    body: "KDEM's industry-driven acceleration programme begins in Mangaluru, hosted by TiE Mangaluru.",
    standfirst:
      "A 16-week industry-driven acceleration programme from the Karnataka Digital Economy Mission begins in Mangaluru, with ₹10 lakh zero-equity grants on offer.",
    intro: [
      "Mangaluru has been selected as the starting point for K-Combinator, a new industry-driven startup acceleration programme from the Karnataka Digital Economy Mission (KDEM).",
      "The initiative was launched in the city under the leadership of TiE Mangaluru, which has been chosen to host and drive the first K-Combinator programme in Karnataka.",
      "The programme is part of the State government’s Beyond Bengaluru Mission and the Local Economy Accelerator Program (LEAP), both aimed at strengthening startup and innovation ecosystems outside Bengaluru.",
      "The Mangaluru launch will initially focus on promising startups from Mangaluru, Udupi and the broader coastal Karnataka region, before the model is expanded to other parts of the State.",
    ],
    sections: [
      {
        heading: "16-week acceleration programme",
        paragraphs: [
          "K-Combinator is designed for startups that have already moved beyond the idea stage and have validated a Proof of Concept (PoC) or Minimum Viable Product (MVP).",
          "Each cohort will select around four to six startups, with three cohorts expected to be conducted every year.",
          "Selected founders will go through a structured 16-week acceleration programme covering areas such as product-market fit, customer validation, go-to-market strategy, scaling and investor readiness.",
          "The programme is expected to include startup bootcamps and masterclasses, more than 15 mentoring sessions, peer reviews, industry and market connections, investor-readiness support and demo-day opportunities.",
          "According to Rohith Bhat, founder-president of TiE Mangaluru, the launch in Mangaluru marks the beginning of the K-Combinator programme’s wider rollout across Karnataka.",
        ],
      },
      {
        heading: "₹10 lakh grant opportunity",
        paragraphs: [
          "One of the major attractions for participating startups is the possibility of receiving financial support without giving up equity.",
          "Two qualifying startups from each cohort may become eligible for a ₹10 lakh performance-linked grant at 0% equity, subject to completion of the programme, eligibility conditions and necessary approvals.",
          "This could be particularly valuable for early-stage founders who need capital to scale but want to avoid dilution at an early stage.",
        ],
      },
      {
        heading: "₹9.26 crore approved for the programme",
        paragraphs: [
          "K-Combinator has received a total approved grant allocation of around ₹9.26 crore for a five-year period.",
          "Of this, the first tranche of approximately ₹1.89 crore has already been released to begin programme implementation.",
          "The initiative is expected to combine government support with private-sector mentorship and industry participation.",
        ],
      },
      {
        heading: "Access to TiE’s global network",
        paragraphs: [
          "Through TiE Mangaluru, participating startups will also be able to tap into TiE’s wider network of entrepreneurs, investors and mentors.",
          "Suyog Shetty, vice-president of TiE Mangaluru, said the programme is intended to help regional startups gain access to experienced mentors, industry connections and potential markets.",
          "The broader ambition is to enable founders to build scalable companies from coastal Karnataka while accessing national and global opportunities.",
          "Shyamaprasad Hebbar, president of TiE Mangaluru, said the programme is particularly suited to startups that have already tested their product and are now preparing for their next stage of growth.",
          "Applications for the first K-Combinator cohort are now open.",
        ],
      },
      {
        heading: "Why this matters for Mangaluru",
        paragraphs: [
          "The decision to launch Karnataka’s first K-Combinator in Mangaluru is another indication of the city’s growing role in the State’s startup ecosystem.",
          "For founders in coastal Karnataka, the programme could reduce the need to look towards Bengaluru for every stage of mentorship, investor access and acceleration.",
          "If executed well, K-Combinator could become an important platform for converting promising regional startups into scalable businesses — while helping Mangaluru strengthen its position on Karnataka’s innovation map.",
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
