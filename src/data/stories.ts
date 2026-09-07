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
    title: "Mangaluru set for major expansion in India’s strategic oil storage network",
    lead: null,
    body: "ONGC has proposed a new 1.75 MMT strategic petroleum reserve in Mangaluru, deepening the city's role in India's energy security.",
    standfirst:
      "ONGC’s proposed 1.75 million metric tonne strategic petroleum reserve would expand Mangaluru’s role as a crude storage and refining hub.",
    intro: [
      "Mangaluru could soon play an even bigger role in India’s energy-security strategy, with Oil and Natural Gas Corporation Ltd. (ONGC) proposing a new 1.75 million metric tonne strategic petroleum reserve in the city.",
      "The proposed facility would significantly expand the region’s importance as a crude oil storage and refining hub, while strengthening India’s ability to respond to sudden disruptions in global oil supply.",
      "ONGC’s board has given in-principle approval for the project and associated infrastructure under the Phase-I Extension of India’s Strategic Petroleum Reserve programme.",
      "The project is expected to be taken up as infrastructure of national importance under the direction of the Ministry of Petroleum and Natural Gas.",
    ],
    sections: [
      {
        heading: "Why Mangaluru matters",
        paragraphs: [
          "Mangaluru is already a critical location in India’s petroleum ecosystem.",
          "The region is home to Mangalore Refinery and Petrochemicals Ltd. (MRPL), a major refinery operated by an ONGC subsidiary, and also houses one of India’s existing strategic petroleum storage facilities.",
          "This gives the city a unique advantage: refinery infrastructure, crude storage capacity and access to maritime supply routes are already concentrated in the same region.",
          "The proposed ONGC reserve could further strengthen this ecosystem and make Mangaluru even more important in India’s long-term energy planning.",
        ],
      },
      {
        heading: "More than just emergency storage",
        paragraphs: [
          "The new facility is not expected to function only as an emergency oil reserve.",
          "ONGC has also indicated that the storage capacity should be capable of supporting commercial use during normal periods, subject to government regulations.",
          "This represents a shift in how India is approaching strategic petroleum reserves.",
          "Instead of maintaining large quantities of crude purely as emergency stock, the government is increasingly exploring a model where part of the capacity can be commercially utilised while still remaining available during a national crisis.",
          "Such an approach can help offset some of the enormous costs involved in building and maintaining strategic reserves.",
          "Underground storage caverns require significant capital investment, while filling them with crude oil ties up substantial amounts of money.",
          "Commercial leasing allows oil producers, refiners and international energy companies to use part of the capacity during normal market conditions, potentially generating revenue from infrastructure that would otherwise remain largely idle.",
        ],
      },
      {
        heading: "India’s current oil reserves",
        paragraphs: [
          "India currently operates strategic crude storage facilities at Mangaluru, Padur and Visakhapatnam.",
          "Together, these facilities provide around 5.33 million metric tonnes of storage capacity.",
          "According to information previously provided by the government to Parliament, about 4.094 MMT of crude was stored in the facilities, representing roughly 77% of total capacity.",
          "Around half of the available storage capacity was also being used under commercial arrangements.",
          "If ONGC’s proposed 1.75 MMT Mangaluru facility is completed, India’s existing strategic storage capacity would rise substantially.",
        ],
      },
      {
        heading: "Why India is expanding reserves",
        paragraphs: [
          "India imports a large share of the crude oil it consumes, making the country vulnerable to geopolitical disruptions and instability in major global shipping routes.",
          "Events around the Gulf, Red Sea and Strait of Hormuz have repeatedly shown how conflicts can quickly affect crude prices, shipping costs, insurance premiums and refinery planning.",
          "For India, such disruptions can have a wider economic impact.",
          "Higher crude prices can increase the import bill, put pressure on the rupee, contribute to inflation and raise costs for oil marketing companies and consumers.",
          "Strategic reserves cannot remove these risks, but they can provide valuable time during emergencies.",
          "Instead of immediately competing for expensive crude cargoes in a stressed international market, India can temporarily draw on stored reserves while alternative supply arrangements are made.",
        ],
      },
      {
        heading: "Mangaluru and global energy partnerships",
        paragraphs: [
          "Mangaluru’s existing strategic storage infrastructure has already been linked with commercial arrangements involving MRPL and Abu Dhabi National Oil Company.",
          "India has also been strengthening strategic crude storage partnerships with countries such as the UAE and Japan.",
          "Such arrangements allow India to combine domestic storage infrastructure with international energy relationships, potentially improving supply security during periods of global instability.",
          "For Mangaluru, this creates an opportunity to become more than just a refinery location.",
          "The region could increasingly emerge as one of India’s key centres for crude storage, refining, energy logistics and strategic petroleum infrastructure.",
        ],
      },
      {
        heading: "A bigger role for ONGC",
        paragraphs: [
          "For ONGC, the project would also represent a broader role in India’s energy sector.",
          "The company has traditionally been associated with oil and gas exploration and production.",
          "Developing a strategic petroleum reserve would place ONGC more directly within India’s national energy-security infrastructure.",
          "The proposed Mangaluru project therefore carries significance beyond its 1.75 MMT storage capacity.",
          "It strengthens Mangaluru’s position in India’s petroleum network while supporting a larger national objective: ensuring the country has enough strategic crude reserves to withstand future supply shocks.",
          "For a coastal city already closely connected to India’s refinery and petroleum economy, the development could further reinforce Mangaluru’s place on India’s energy map.",
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
