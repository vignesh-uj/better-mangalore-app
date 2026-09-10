import heroInterviews from "@/assets/hero-interviews.jpg";
import praveenStage from "@/assets/praveen-kalbhavi-stage.jpg.asset.json";
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
    image: praveenStage.url,
    stageImage: praveenStage.url,
    stageImageAlt: "Praveen Kalbhavi in conversation on stage in Mangaluru",
    tags: "Business · Entrepreneurship",
    name: "Praveen Kalbhavi",
    role: "CEO & Co-founder, Novigo Solutions",
    headline: "On Entrepreneurship, Mangaluru, AI and Building Novigo",
    standfirst:
      "At Founder Connect, an initiative of the CII Mangaluru IT & Startup Panel, Praveen Kalbhavi spoke about his move from Infosys to entrepreneurship, building Novigo from Mangaluru, funding and startup survival, hiring, and the impact of AI on careers.",
    date: "Sep 4, 2026",
    readTime: "14 min read",
    body: "Entrepreneurs, aspiring founders and students came together at Founder Connect, held at St. Joseph Engineering College, Mangaluru, for an interaction focused on entrepreneurship, technology, careers and building businesses from the region.",
    pullQuote: "AI will replace the developer if the developer doesn’t use AI.",
    pullQuoteBody:
      "Praveen Kalbhavi reflects on what it takes to build a company, why Mangaluru can support globally ambitious businesses, and why curiosity and problem-solving may matter more than ever for the next generation.",
    sideQuote: "Problem solving is more important than syntax.",
    intro: [
      "Entrepreneurs, aspiring founders and students came together at **Founder Connect**, held at **St. Joseph Engineering College, Mangaluru**, for an interaction focused on entrepreneurship, technology, careers and building businesses from the region.",
      "Founder Connect is an initiative of the **CII Mangaluru IT & Startup Panel**, aimed at creating stronger connections between entrepreneurs, industry leaders, startups, students and the wider innovation ecosystem. The platform is designed to enable candid conversations, exchange practical experiences and give emerging founders and young professionals an opportunity to learn directly from those who have built and led businesses.",
      "At the event, **Praveen Kalbhavi, CEO & Co-founder of Novigo Solutions**, spoke about his transition from Infosys to entrepreneurship, building Novigo from Mangaluru, working with co-founders, funding and startup survival, leadership, hiring, and the impact of AI on careers.",
      "In this conversation, Kalbhavi reflects on what it takes to build a company, why Mangaluru can support globally ambitious businesses, and why curiosity and problem-solving may matter more than ever for the next generation.",
    ],
    sections: [
      {
        heading: "From Infosys to Entrepreneurship",
        exchanges: [
          {
            question: "After two decades at Infosys, what made you step into entrepreneurship?",
            answer: [
              "When I left Infosys, my idea wasn’t to start a company. I wanted to spend more time with students and institutions and help young people build good careers.",
              "Around the same time, three people who are now my co-founders approached me and said they wanted to build something and needed me with them. They were younger than me but already had 10–15 years of industry experience.",
              "That’s how I got involved. Once I did, my entrepreneurial side came out completely.",
              "The biggest difference from corporate life was freedom. In a large organisation, you work within boundaries. In your own company, you can try things. You may succeed or fail, but the decision is yours.",
            ],
          },
        ],
      },
      {
        heading: "Finding a Differentiator",
        exchanges: [
          {
            question: "What was the thinking behind Novigo Solutions?",
            answer: [
              "Before starting a company, you need clarity about what you want to achieve.",
              "For me, three things matter: passion and drive, curiosity, and most importantly, the problem statement.",
              "In IT services, we were entering a market that already had other IT services companies. So the obvious question was: what can we do differently?",
              "We looked at our strengths—corporate experience, leadership capabilities and market connections—and then looked at what enterprises needed.",
              "We decided to focus on global enterprises and newer technologies.",
              "When RPA emerged, we got into it early. We became a UiPath partner and eventually became part of their Partner Advisory Board.",
              "We implemented automation for Enterprises and banks in the US.",
              "In services, something new comes every few years—RPA, low-code/no-code, cybersecurity and now AI. Our model has been to identify emerging technologies, build capability around them and take them to enterprise customers.",
            ],
          },
        ],
      },
      {
        heading: "Why Co-founders Matter",
        exchanges: [
          {
            question: "What is your advice on choosing co-founders?",
            answer: [
              "Wherever I meet startups, I tell them: don’t start alone.",
              "Entrepreneurship has uncertainty and pain. Having at least one person to share that journey with makes a difference.",
              "But co-founders will not always agree. You have to manage differences just like you would in a family.",
              "Among the four of us, responsibilities were divided according to strengths. One person handled technology, another HR, and so on.",
              "More importantly, the person responsible for a function must have the final say.",
              "Others can give opinions, but once a decision is taken, you shouldn’t question that person even if the decision later goes wrong.",
              "That trust is very important in a partnership.",
            ],
          },
        ],
      },
      {
        heading: "Growing Without External Funding",
        exchanges: [
          {
            question:
              "Did you worry about whether the company would survive in the early years?",
            answer: [
              "Yes, but because we were a services company, we could grow step by step.",
              "We put in some of our own money.",
              "In the early years, revenue grew gradually, and we didn’t take salaries.",
              "We remained conservative and built the company over more than ten years across RPA, low-code/no-code and other technologies.",
              "Only in the last two years did we decide it was time to scale aggressively.",
              "Instead of taking external funding, we chose the acquisition route and joined a global company that could help us take on larger enterprise projects.",
            ],
          },
        ],
      },
      {
        heading: "Why Mangaluru?",
        exchanges: [
          {
            question: "Why build a global company from Mangaluru?",
            answer: [
              "Even when we started Novigo, people felt that building a company from Mangalore would be difficult and that larger startup hubs offered more access.",
              "But I had already seen what Mangalore could do.",
              "I was part of the initial Infosys Mangalore team from 1995. It started with around 20 people and grew to around 4,000 while I was there.",
              "The Mangalore Development Center performed strongly and earned recognition within Infosys.",
              "That gave me confidence in the talent here.",
              "Today, Novigo has development centres in Bangalore, Chennai, Cochin and Pune as well, but fresh hiring happens largely in Mangalore.",
              "People here are adaptable and productive.",
              "Whenever we experimented with something new—whether RPA or another technology—we often started it here because you can bring people together, brainstorm and move quickly.",
              "Over the last seven or eight years, many more companies have come to Mangalore. Companies from larger hubs are also looking at this city because of its talent and productivity.",
            ],
          },
        ],
      },
      {
        heading: "A Leadership Role Model",
        exchanges: [
          {
            question: "Who has influenced you most as a leader?",
            answer: [
              "Narayana Murthy is a role model for me. Two things stood out. One was his simplicity and humbleness. The other was his ability to think ahead. Even while I was at Infosys, many decisions around growth and major milestones reflected that vision.",
            ],
          },
        ],
      },
      {
        heading: "Should Students Start Up Immediately?",
        exchanges: [
          {
            question:
              "Should students start a company immediately after college or first gain industry experience?",
            answer: [
              "It depends on the idea. If you have identified a real problem, know how to solve it and have clarity, don’t wait. Two years may be too late because somebody else may take the idea forward. But if you only know that you want to become an entrepreneur and don’t yet have a clear problem to solve, spend some time in that industry. Understand the domain and get to the root of the problem.",
              "Today, incubation centres can provide infrastructure, mentoring, technical support and networking.",
              "Also, don’t compare yourself with somebody on a salary path.",
              "You may choose a salary path, or you may choose a few years without salary and perhaps build something valuable later.",
              "But success is never guaranteed.",
              "Validate your idea with people who genuinely understand the industry.",
              "Before spending a large amount of money, build a POC and validate the idea. For early-stage funding, seed or angel funding can often be better than simply taking a loan because somebody else believing enough to invest in your idea itself provides validation.",
            ],
          },
        ],
      },
      {
        heading: "“AI Will Replace the Developer Who Doesn’t Use AI”",
        exchanges: [
          {
            question: "Will AI take away jobs?",
            answer: [
              "AI will make jobs easier and faster. Many repetitive and monotonous tasks will go away, but people will use AI to make that happen.",
              "**AI will replace the developer if the developer doesn’t use AI.**",
              "If you use AI effectively, you can become far more productive. When I was a developer, a program could take me 15–20 days or even a month. Today, somebody using AI may do the same kind of work in minutes. The developer, analyst, architect and project manager will still exist. But everybody will have to use AI. At the same time, companies may be able to do more work with smaller teams because the same work can be completed much faster. That doesn’t necessarily mean the industry is disappearing. Productivity is changing the mathematics of hiring. So I would tell students to also think about becoming job creators.",
            ],
          },
        ],
      },
      {
        heading: "What Novigo Looks for While Hiring",
        exchanges: [
          {
            question: "What do you look for in young engineers beyond marks?",
            answer: [
              "Honestly, in Novigo’s hiring process, marks are not the main thing I look at. For us at Novigo, the 60% criterion is more of a basic eligibility filter. I would rather see your GitHub page. How many projects have you worked on? How many hackathons have you participated in? How many technology events have you attended? What problems have you solved?",
              "Those things tell me much more.",
              "With AI, memorising programming syntax is becoming less important.",
              "We need people who can understand a requirement, think clearly and give AI the right problem statement.",
              "**Problem solving is more important than syntax.**",
            ],
          },
        ],
      },
      {
        heading: "Why Startups Fail",
        exchanges: [
          {
            question: "Do startups fail because of the market or because of the founder?",
            answer: [
              "I don’t think it is only the market.",
              "The market is always there.",
              "Take Ola and Uber. Even with strong players in the market, companies such as Rapido and others have still found opportunities.",
              "The important thing is whether the founder understands what the customer wants.",
              "The same applies to e-commerce. Amazon and Flipkart dominate, but specialised players can still succeed.",
              "For example, if I want to buy a guitar, a specialised musical-instrument platform may be more useful to me than Amazon because it understands that category deeply.",
              "You can still succeed in a crowded market if you know exactly which problem you are solving.",
            ],
          },
        ],
      },
      {
        heading: "Rapid Fire",
        exchanges: [
          {
            question: "One daily habit every student should develop?",
            answer: [
              "Curiosity. Whether you are in corporate life or entrepreneurship, curiosity helps you build your career.",
            ],
          },
          {
            question: "One essential skill for every engineer?",
            answer: [
              "Problem solving. Languages and technologies will keep changing, but problem solving remains.",
            ],
          },
          {
            question: "Entrepreneurship in one word?",
            answer: [
              "Passion—and drive. Not every entrepreneur succeeds, but a true entrepreneur keeps moving.",
            ],
          },
          {
            question: "Mangalore in one word?",
            answer: ["Unique culture. It has a good blend of urban and rural."],
          },
        ],
      },
      {
        heading: "A Final Message to Students",
        exchanges: [
          {
            answer: [
              "If you have entrepreneurship in your mind, you should have questions.",
              "Come out of the hesitation and shyness.",
              "It may be a silly question, or it may be such a difficult question that even I don’t know the answer.",
              "That is perfectly fine.",
              "But you should still ask.",
            ],
          },
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
