import heroInterviews from "@/assets/hero-interviews.jpg";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";

export type InterviewExchange = {
  question?: string;
  answer: string[];
};

export type InterviewSection = {
  heading: string;
  paragraphs?: string[];
  exchanges?: InterviewExchange[];
};

export type Interview = {
  slug: string;
  image: string;
  stageImage: string;
  stageImageAlt: string;
  tags: string;
  name: string;
  role: string;
  headline: string;
  standfirst: string;
  date: string;
  readTime: string;
  body: string;
  pullQuote: string;
  pullQuoteBody: string;
  sideQuote: string;
  intro: string[];
  sections: InterviewSection[];
};

export const INTERVIEWS: Interview[] = [
  {
    slug: "praveen-kalbhavi-novigo-solutions",
    image: person1,
    stageImage: heroInterviews,
    stageImageAlt: "Praveen Kalbhavi in conversation on stage in Mangaluru",
    tags: "Business · Entrepreneurship",
    name: "Praveen Kalbhavi",
    role: "CEO & Co-founder, Novigo Solutions",
    headline: "On leaving Infosys, becoming an entrepreneur and building Novigo Solutions",
    standfirst:
      "A candid conversation with Praveen Kalbhavi on transitions, taking risks, learning on the way and what it takes to build a company from Mangaluru.",
    date: "Sep 4, 2026",
    readTime: "12 min read",
    body: "After spending two decades at Infosys, Praveen Kalbhavi chose a very different path — entrepreneurship. Speaking at Founder Connect at St. Joseph Engineering College, Mangaluru, he reflected on that transition, the realities of building a company and some of the lessons he has learned along the way.",
    pullQuote:
      "I realised that the best time to take a risk is when you still have the energy to figure things out.",
    pullQuoteBody:
      "Praveen Kalbhavi opens up about the moment he decided to leave a stable career at Infosys, what pushed him towards entrepreneurship, and how Mangaluru continues to influence the way he builds and leads.",
    sideQuote:
      "Mangaluru gives you roots. The world gives you opportunities. You need both.",
    intro: [
      "After spending two decades at Infosys, Praveen Kalbhavi chose a very different path — entrepreneurship. Speaking at Founder Connect at St. Joseph Engineering College, Mangaluru, he reflected on that transition, the realities of building a company and some of the lessons he has learned along the way.",
      "In this conversation with Better Mangalore, Praveen shares his journey — from growing up in Mangaluru, to navigating a long career at Infosys, to taking the leap and building Novigo Solutions. It's a story of opportunity, uncertainty, resilience and the belief that Mangaluru can produce global businesses.",
    ],
    sections: [
      {
        heading: "Early days and Mangaluru roots",
        paragraphs: [
          "Praveen grew up in a city where ambition was quiet but persistent. Schooling in Mangaluru, he says, taught him discipline and a certain comfort with doing things the long way — a habit that later shaped how he approached building an organisation.",
          "\"The city teaches you patience,\" he says. \"You learn that steady work compounds.\"",
        ],
      },
      {
        heading: "Life at Infosys",
        paragraphs: [
          "Two decades inside one of India's largest technology companies gave him exposure to global clients, large delivery teams and the mechanics of enterprise software at scale.",
          "It also gave him a clear view of the gaps — the places where smaller, focused teams could move faster and solve problems more closely with customers.",
        ],
      },
      {
        heading: "The decision to take the leap",
        paragraphs: [
          "Leaving a stable role was not a single dramatic moment but a slow accumulation of conviction. Praveen describes weighing the security of a long career against the possibility of building something of his own.",
          "The deciding factor, he says, was energy — the willingness to spend a few uncomfortable years learning an entirely new craft.",
        ],
      },
      {
        heading: "Building Novigo Solutions",
        paragraphs: [
          "Novigo began with a small team and a narrow focus, choosing depth over breadth. Early customers came through relationships built over years, and the company grew by staying close to the problems it understood best.",
          "Hiring, he says, was the hardest part — not finding talent, but finding people willing to build alongside uncertainty.",
        ],
      },
      {
        heading: "Challenges and lessons",
        paragraphs: [
          "Cash flow, client concentration and the temptation to chase every opportunity were the recurring tests. Praveen credits survival to saying no more often than yes.",
          "\"Every founder underestimates how long trust takes to build and how quickly it can be lost,\" he says.",
        ],
      },
      {
        heading: "Advice for aspiring entrepreneurs",
        paragraphs: [
          "Start with a problem you have lived through. Build a small, honest team. Keep your costs boring and your promises modest.",
          "And do not wait for a perfect moment — clarity, he says, arrives only after you begin.",
        ],
      },
      {
        heading: "What's next",
        paragraphs: [
          "Novigo continues to expand its product work while Praveen spends more time mentoring founders in the region, convinced that Mangaluru's next decade will be defined by companies built at home rather than talent exported elsewhere.",
        ],
      },
    ],
  },
  {
    slug: "rohan-shetty-coastal-ventures",
    image: person2,
    stageImage: heroInterviews,
    stageImageAlt: "Rohan Shetty speaking at a leadership session in Mangaluru",
    tags: "Leadership · Innovation",
    name: "Rohan Shetty",
    role: "Managing Director, Coastal Ventures",
    headline: "On building teams that outlast a single good idea",
    standfirst:
      "Rohan Shetty on leadership without theatrics, why culture is a hiring decision, and how coastal businesses can think beyond one product cycle.",
    date: "Aug 21, 2026",
    readTime: "9 min read",
    body: "In this conversation, Rohan Shetty shares his journey, the choices that shaped his path and the principles that continue to guide his work. From early challenges to meaningful lessons, this is a candid look at leadership, purpose and impact.",
    pullQuote: "A good idea gets you started. A good team is what keeps you alive.",
    pullQuoteBody:
      "Rohan Shetty reflects on the shift from doing the work himself to building the people who do the work, and why he believes durable companies are built one hire at a time.",
    sideQuote: "Culture is not a poster on the wall. It is who you promote.",
    intro: [
      "Rohan Shetty has spent close to fifteen years building businesses along the coast — first in logistics, later in early-stage investing. His view of leadership is unromantic and practical.",
      "In this conversation with Better Mangalore, he talks about the habits that survived his own mistakes.",
    ],
    sections: [
      {
        heading: "Starting out",
        paragraphs: [
          "His first venture was small, undercapitalised and, in his words, \"educational\". It closed within three years and taught him more about people than about markets.",
        ],
      },
      {
        heading: "Learning to delegate",
        paragraphs: [
          "The turning point came when he stopped treating himself as the most reliable person in the room and began designing systems others could run.",
        ],
      },
      {
        heading: "Hiring for the long term",
        paragraphs: [
          "Rohan looks for curiosity and follow-through over credentials, and prefers slow hiring to fast firing.",
          "\"You are not filling a seat,\" he says. \"You are choosing a colleague for the next ten years.\"",
        ],
      },
      {
        heading: "Investing in the region",
        paragraphs: [
          "Coastal Ventures backs founders who stay in the region. Rohan argues that local capital plus local talent is the only combination that compounds for a city.",
        ],
      },
      {
        heading: "What's next",
        paragraphs: [
          "He is building a mentoring network across Mangaluru, Udupi and Karwar, with a bias towards businesses that create jobs rather than headlines.",
        ],
      },
    ],
  },
];

export function getInterview(slug: string) {
  return INTERVIEWS.find((i) => i.slug === slug);
}

export function getRelatedInterviews(slug: string) {
  return INTERVIEWS.filter((i) => i.slug !== slug);
}
