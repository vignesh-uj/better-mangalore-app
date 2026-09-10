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
    slug: "zeeshan-talentzy",
    image: person2,
    stageImage: heroInterviews,
    stageImageAlt: "Zeeshan in conversation in Mangaluru",
    tags: "Business · Entrepreneurship",
    name: "Zeeshan",
    role: "Founder, Talentzy",
    headline: "From Corporate Leadership to Entrepreneurial Freedom",
    standfirst:
      "On Entrepreneurship, AI, Leadership, Financial Freedom and Building Life on Your Own Terms.",
    date: "Sep 10, 2026",
    readTime: "12 min read",
    body: "Zeeshan on why financial stability matters before taking risks, how customer understanding beats fashionable ideas, why humility remains central to leadership, and how AI is reshaping the skills every professional must build.",
    pullQuote:
      "You may be a lion—but if somebody else is always controlling your life, you're still a lion inside a circus.",
    pullQuoteBody:
      "More than a conventional success story, this conversation is about designing a meaningful life—one where work, ambition, family and personal freedom can coexist.",
    sideQuote: "Humans who use AI versus humans who don't.",
    intro: [
      "Zeeshan’s journey reflects a thoughtful shift from corporate leadership to entrepreneurship, shaped not merely by ambition but by a deeper search for freedom, balance and purpose. After spending nearly two decades in the corporate world, he chose to build on his own terms—drawing from his experience in recruitment, leadership and people management to create a path that gave him greater control over his time, work and life.",
      "In this conversation, Zeeshan shares practical lessons from that journey: why financial stability matters before taking risks, how customer understanding is more important than fashionable ideas, why humility remains central to leadership and how AI is reshaping the skills every professional must build. More than a conventional success story, this interview is about designing a meaningful life—one where work, ambition, family and personal freedom can coexist.",
    ],
    sections: [
      {
        heading:
          "You spent nearly two decades in corporate leadership. What finally pushed you towards entrepreneurship?",
        paragraphs: [
          "For me, the decision was emotional first and logical later.",
          "One night, after almost a 16-hour workday, I was on a late call supporting my US team. It was around midnight, and my four-year-old son was standing beside me.",
          "When I finally closed my laptop, I asked him why he was still awake.",
          "He simply said, “Dad, I only wanted to wish you good night.”",
          "I couldn't sleep that night.",
          "We often tell ourselves that we're working hard to give our families a better life. But sometimes, while doing that, the very people we're working for feel that we're missing from their lives.",
          "That was my trigger.",
          "I wanted greater control over my time. And I realised that control over your own time is one of the most important forms of freedom.",
        ],
      },
      {
        heading: "Did your corporate career make becoming an entrepreneur easier?",
        paragraphs: [
          "Definitely. I had spent around 20 years in recruitment, so when I started a recruitment business, I wasn't entering an unknown field. My advice to aspiring entrepreneurs is simple:",
          "**Get your foundation right first.**",
          "Build your education. Get some work experience. Understand how businesses operate. Understand customers. Understand the industry.",
          "Don't start a company simply because entrepreneurship looks exciting.",
          "Start in an area where you either have expertise or genuine interest.",
          "And before you build anything, talk deeply to customers.",
        ],
      },
      {
        heading: "What did entrepreneurship teach you that corporate life couldn't?",
        paragraphs: [
          "Financial stability.",
          "In a job, whatever happens, there is usually a salary credited at the end of the month.",
          "As a founder, that certainty disappears.",
          "You may have customers who haven't paid. You may have invoices outstanding. But your employees still expect salaries.",
          "That changes your relationship with money.",
          "I strongly believe everybody should have an emergency fund covering at least six months of expenses.",
          "Financial stability gives you the ability to take risks without living in constant fear.",
          "It also gives you something even more valuable: **the ability to walk away.**",
          "If tomorrow your workplace becomes unbearable, true financial independence means you can leave without wondering how you will survive the next month.",
        ],
      },
      {
        heading: "Why do you think so many startups fail?",
        paragraphs: [
          "Often, the bigger problem is not technology or even the founder.",
          "It's a lack of market understanding and vision.",
          "People sometimes start businesses because something looks fashionable.",
          "Take cafés. Someone says, “I'll open a beautiful café, give it a cool name, add neon lights and create a great ambience.”",
          "But the real question is:",
          "**Does the market actually need another café?**",
          "Has customer behaviour changed because of Swiggy and Zomato? Would a cloud kitchen make more sense? What are you offering that is genuinely different?",
          "Before I started my own recruitment company, I went to CEOs and asked them directly:",
          "“If I start something tomorrow, will you give me business?”",
          "Many said yes.",
          "I asked why.",
          "They said, **“Because we trust you.”**",
          "That's when I realised that I was already carrying a personal brand.",
          "Understand your customer. Understand your market. Then build.",
        ],
      },
      {
        heading: "What was one mistake you made in your early entrepreneurial journey?",
        paragraphs: [
          "Trying to treat every customer equally.",
          "The 80/20 principle became an important lesson for me.",
          "You sometimes discover that 20% of your customers generate 80% of your results, while other customers consume enormous amounts of time without creating meaningful business.",
          "Initially, you feel that every opportunity must be chased.",
          "Eventually, you realise that a founder's time and the team's energy are limited resources.",
          "Another lesson: **never become desperate for business.**",
          "The moment you constantly plead with customers for work, your perceived value begins to fall.",
          "Choose where you invest your energy.",
        ],
      },
      {
        heading:
          "What is the most important leadership quality you have learned from senior leaders?",
        paragraphs: [
          "Humility.",
          "It is actually easier to be humble than arrogant.",
          "Being rude takes effort. Carrying an inflated sense of importance takes effort.",
          "I've learned to value three qualities enormously:",
          "**Kindness. Humility. Empathy.**",
          "People remember how you treat them.",
          "We've even chosen not to work with certain organisations because of the way their leadership treated our team.",
          "Revenue is important.",
          "But not every piece of business is worth compromising your values for.",
        ],
      },
      {
        heading: "AI is dominating conversations in 2026. What should students be learning now?",
        paragraphs: [
          "Whatever profession you're entering, you need to build **AI capability alongside your core skill.**",
          "I was recently hiring a Head of Recruitment for a large organisation. One of their expectations was that the candidate should understand tools such as ChatGPT and Claude deeply enough to use AI effectively in recruitment and candidate assessment.",
          "Think about that.",
          "Even a senior HR professional is now expected to understand AI.",
          "That tells you where the world is going.",
          "But there's another skill students should not underestimate:",
          "**Communication.**",
          "You might have all the technical qualifications in the world, but if you cannot explain your thinking, interact confidently and communicate clearly, your opportunities will be limited.",
        ],
      },
      {
        heading: "Will AI replace jobs?",
        paragraphs: [
          "AI will certainly change jobs.",
          "Software development is already changing. People can now build applications with dramatically less conventional coding.",
          "But that doesn't mean the need for human capability disappears.",
          "The winning combination will increasingly be:",
          "**Your profession + AI capability.**",
          "A software engineer who understands AI will be much more valuable than someone who refuses to adapt. At the same time, AI still cannot fully replace human judgement. In recruitment, for example, experience allows you to read things that aren't obvious in a résumé: whether somebody will genuinely join, whether they might drop out or whether there is something behind the words they're saying. So I wouldn't frame it as AI versus humans. It's more likely to be:",
          "**Humans who use AI versus humans who don't.**",
        ],
      },
      {
        heading:
          "Should a student start a company immediately after college or get a job first?",
        paragraphs: [
          "There is nothing wrong with getting a job first. Get your foundation right. A job allows you to understand customers, processes, organisations and people. When I started at Infosys, I wasn't doing glamorous leadership work. I handled basic HR and administrative activities. Eventually, I moved into senior HR leadership. Because I experienced the organisation from the ground up, I could later understand what the junior-most person was going through. That experience becomes incredibly useful when you're a founder. So earn. Learn. Understand the market. Build some financial stability. And if you still strongly believe in your idea, start.",
        ],
      },
      {
        heading:
          "Do people from Mangaluru need to move to Bengaluru or another big city to become successful?",
        paragraphs: [
          "It depends on what you mean by successful.",
          "I spent many years in Bengaluru before eventually returning to Mangaluru. There are undoubtedly opportunities available in larger cities. But there's another question we don't ask often enough:",
          "**Do you want to become “big,” or do you want to become content?**",
          "They are not always the same thing. I once saw a young man in Mangaluru sitting peacefully and wondered why he wasn't rushing around chasing something bigger.",
          "My wife said something that stayed with me:",
          "**“Not everybody wants extraordinary ambition. Some people simply want to live.”**",
          "That made me think. There is value in a slower life. You can build meaningful things from Mangaluru. Your mindset matters more than your pin code.",
        ],
      },
      {
        heading: "Talentzy is bootstrapped. Why haven't you pursued aggressive external funding?",
        paragraphs: [
          "Because one of my reasons for becoming an entrepreneur was freedom.",
          "Recently, when my mother faced a serious health issue, I could immediately prioritise her and take her for treatment without worrying about corporate leave approvals.",
          "That freedom matters enormously to me.",
          "There's absolutely nothing wrong with investors. They can help businesses scale rapidly.",
          "But once you take somebody else's capital, you also take responsibility for delivering returns on that capital.",
          "That changes the nature of your journey.",
          "Personally, I would rather build something meaningful at a level I can control, have time for the people I care about and enjoy my life.",
          "Not everybody needs to build a billion-dollar company.",
        ],
      },
      {
        heading: "If students remember only one thing from your journey, what should it be?",
        paragraphs: [
          "**Enjoy the journey.**",
          "Students say, “When will college finish?”",
          "Then they get a job and say, “When will I get promoted?”",
          "Then, “When will I get married?”",
          "“When will I buy a house?”",
          "“When will I achieve the next thing?”",
          "The goalpost keeps moving.",
          "Suddenly you're 38, 48 or 58 and wondering where the years went.",
          "If I had a magic wand, I would probably love to experience parts of my school and college days again.",
          "So work hard. Build ambition. Learn AI. Earn money. Take risks.",
          "But don't postpone living.",
          "Be kind. Be humble. Keep learning.",
          "And remember:",
          "**You may be a lion—but if somebody else is always controlling your life, you're still a lion inside a circus.**",
          "At some point, learn to become your own ringmaster.",
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
