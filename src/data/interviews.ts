import heminPortrait from "@/assets/hemin-bharucha-portrait.jpg";
import heminStage from "@/assets/hemin-bharucha-stage.jpg";
import heminPresentation from "@/assets/hemin-bharucha-presentation.jpg";
import heminGroup from "@/assets/hemin-bharucha-roundtable-group.jpg";
import praveenStage from "@/assets/praveen-kalbhavi-stage.jpg";
import praveenPortrait from "@/assets/praveen-kalbhavi-portrait.jpg";
import sunilPortrait from "@/assets/sunil-kumar-portrait.jpg";
import sunilStage from "@/assets/sunil-kumar-stage.jpg";
import zeeshanPortrait from "@/assets/zeeshan-portrait.jpg";
import zeeshanStage from "@/assets/zeeshan-stage.jpg";

export type InterviewExchange = {
  question?: string;
  answer: (string | string[])[];
};

export type InterviewSection = {
  heading: string;
  number?: string | false;
  paragraphs?: (string | string[])[];
  exchanges?: InterviewExchange[];
};

export type Interview = {
  slug: string;
  image: string;
  stageImage: string;
  stageImageAlt: string;
  socialImage: string;
  tags: string;
  name: string;
  role: string;
  headline: string;
  fullTitle?: string;
  standfirst: string;
  date: string;
  readTime: string;
  body: string;
  pullQuote: string;
  pullQuoteBody: string;
  sideQuote?: string;
  speakerLabel?: string;
  intro: string[];
  sections: InterviewSection[];
  sectionImages?: { afterHeading: string; src: string; alt: string }[];
};

export const INTERVIEWS: Interview[] = [
  {
    slug: "hemin-bharucha-london-partners",
    image: heminPortrait,
    stageImage: heminStage,
    socialImage: "/interviews/hemin-bharucha.jpg",
    stageImageAlt: "Hemin Bharucha and Neha Karnad at the London & Partners roundtable in Mangaluru",
    tags: "Business · Global Markets",
    name: "Mr. Hemin Bharucha",
    role: "Regional Director India and Asia Pacific at London & Partners",
    headline: "Unlocking Global Opportunities for Coastal Karnataka's Tech Companies",
    fullTitle: "From Mangaluru to London: Unlocking Global Opportunities for Coastal Karnataka's Tech Companies",
    standfirst: "*Insights from a roundtable discussion with London & Partners on international expansion, global talent, investment, and the future of Mangaluru's technology ecosystem.*",
    date: "Oct 29, 2026",
    readTime: "10 min read",
    body: "Mangaluru has steadily developed its reputation as an emerging technology and entrepreneurship hub. With a growing community of IT companies, startups, educational institutions, and globally connected businesses, the city is increasingly looking beyond regional markets.",
    pullQuote: "",
    pullQuoteBody: "",
    sectionImages: [
      {
        afterHeading: "Where Do Mangaluru and London Have Strong Business Synergies?",
        src: heminPresentation,
        alt: "Neha Karnad presenting India–UK business connections to roundtable attendees",
      },
      {
        afterHeading: "The Most Practical Advice: Start Building Relationships Before You Are Ready to Expand",
        src: heminGroup,
        alt: "Hemin Bharucha, Neha Karnad and the London & Partners roundtable participants in Mangaluru",
      },
    ],
    intro: ["Mangaluru has steadily developed its reputation as an emerging technology and entrepreneurship hub. With a growing community of IT companies, startups, educational institutions, and globally connected businesses, the city is increasingly looking beyond regional markets.", "But what does it take for a company from Mangaluru to establish itself internationally? Is having a presence in a global business hub like London genuinely valuable? And what should entrepreneurs consider before making that move?", "These questions formed the centre of an insightful interaction with **London & Partners**, London's economic development and international business growth agency.", "During the discussion, Mr. Hemin Bharucha - Regional Director India and Asia Pacific at London & Partners, shared perspectives from more than two decades of experience working across the India–UK business corridor. The conversation, moderated by Ms. Neha Karnad - Business Development Manager at London & Partners, covered international business expansion, technology trends, investment opportunities, Global Capability Centres (GCCs), and the importance of building long-term business relationships.", "Here are the major takeaways."],
    sections: [{"heading": "Why Should Indian Technology Companies Consider London?", "number": "1.", "paragraphs": ["According to Hemin, there are three compelling reasons why Indian companies should consider establishing a presence in London.", "### Access to international customers", "For Indian IT companies, many strategic purchasing decisions are made at international headquarters rather than at their Indian delivery centres.", "Even large technology service providers frequently engage with customers whose key decision-makers are based in London, continental Europe, or other major international business centres.", "A local presence can therefore bring companies closer to customers, strengthen relationships, and create opportunities for higher-value engagements.", "### Access to global talent", "India has an enormous technology talent pool. However, emerging technologies such as artificial intelligence are evolving across different innovation ecosystems.", "Exposure to international talent, research, and business practices can help Indian technology companies strengthen their offerings and introduce new capabilities into their existing operations.", "London provides access to a diverse international talent ecosystem, particularly across AI, fintech, creative, cybersecurity, green innovation, life sciences and future technologies such as quantum, future of work, deeptech and more", "### Access to global investment", "For startups planning international growth, access to venture capital is another major consideration.", "London is an important global financial and venture investment centre, attracting investors interested in technologies such as fintech, artificial intelligence, and sustainability.", "Hemin explained that having a meaningful local presence can be important when engaging with investors who prefer companies operating within their investment geography.", "The underlying message was that global expansion is not simply about opening an overseas office. It is about positioning a company within the right ecosystem of customers, talent, and capital."]}, {"heading": "Is London Only for Large Companies?", "number": "2.", "paragraphs": ["One particularly interesting question concerned whether companies must meet a minimum investment threshold before exploring London.", "Hemin explained that London & Partners does not impose a minimum investment amount as a condition for engaging with its business support services.", "He also highlighted several practical considerations:", ["Companies do not require a local equity partner merely to establish a UK business.", "Founders can explore different models of staffing and operating their businesses.", "Hiring local professionals can accelerate market understanding and customer relationships.", "Companies must continue to comply with applicable UK legal, tax, immigration, and reporting requirements."], "Although setting up a company may be relatively straightforward, successfully operating and growing a business requires careful planning.", "An important recommendation was to consider hiring locally, especially for business development and customer-facing roles.", "Local professionals understand business culture, customer expectations, and market dynamics. That knowledge can be valuable for companies entering an unfamiliar market."]}, {"heading": "Where Do Mangaluru and London Have Strong Business Synergies?", "number": "3.", "paragraphs": ["Despite spending only a short time in Mangaluru, Hemin observed promising similarities between the city's strengths and London's established technology ecosystem.", "He identified several sectors with potential for international collaboration:", ["Software-as-a-Service (SaaS) and software product development", "Artificial intelligence and emerging technologies", "Cybersecurity and fintech", "Life sciences and health-related innovation", "Sustainability and green technologies"], "These sectors represent opportunities for Mangaluru to move beyond conventional software development and position itself as a centre for higher-value technology services and innovation.", "The discussion also highlighted the importance of identifying industries where Mangaluru already has foundational strengths, rather than attempting to compete across every emerging technology sector.", "For local entrepreneurs, this presents an opportunity to build specialised capabilities and connect with customers in mature international markets."]}, {"heading": "A Warning to Founders: Don't Choose a Country Just Because It Offers Free Incentives", "number": "4.", "paragraphs": ["One of the more thought-provoking parts of the conversation concerned the incentives offered by some governments and economic development agencies to attract foreign businesses.", "Some destinations promote free office space, subsidised infrastructure, grants, and financial incentives.", "While these offers may appear attractive, Hemin encouraged entrepreneurs to ask a more fundamental question:", "**Why is the destination offering these incentives, and does it have the customers and business ecosystem the company actually needs?**", "A location offering low operating costs may not necessarily offer access to customers, skilled talent, reliable connectivity, or an environment that supports long-term business growth.", "He explained that London generally competes through the strength of its commercial ecosystem rather than broad incentives for company establishment, although certain R&D and scaling across UK & beyond support schemes may be available.", "The lesson for entrepreneurs is straightforward: **choose an international destination based on long-term business potential, not simply short-term financial benefits.**", "Before expanding, founders should carefully assess customer demand, recruitment, infrastructure, regulatory obligations, operating costs, and even the ease of exiting the market if circumstances change."]}, {"heading": "Global Capability Centres: Mangaluru Should Prioritise Quality Over Quantity", "number": "5.", "paragraphs": ["The conversation also addressed a subject increasingly relevant to Karnataka: the growing interest in attracting Global Capability Centres, or GCCs.", "Several Indian states are actively competing to attract multinational companies to establish their technology, engineering, and business operations within their regions.", "But Hemin offered an important perspective.", "Not every GCC necessarily creates the same value for its host city.", "A centre focused on research, robotics, advanced engineering, artificial intelligence, or product innovation can create high-value employment opportunities and contribute to long-term ecosystem development.", "On the other hand, centres focused primarily on low-value, repetitive operations may produce a different economic outcome while still placing demands on local infrastructure and resources.", "He also highlighted the need to consider pressure on roads, electricity, water, housing, and other public infrastructure.", "For an fast growing technology destination like Mangaluru, this is especially relevant.", "Instead of measuring success purely by the number of GCCs established or jobs announced, policymakers and industry associations could focus on the quality of employment, skills developed, innovation generated, and sustainability of these investments.", "**The ambition should be to attract GCCs that create long-term intellectual and economic value for the region.**"]}, {"heading": "Understanding the Business Culture: India, the UK, and the Importance of Trust", "number": "6.", "paragraphs": ["International business development is not just about technology capabilities, pricing, or commercial contracts. Cultural understanding is equally important.", "Drawing on his experience, Hemin described the UK business environment as one in which trust and long-term professional relationships play an important role.", "He contrasted this with his experience of certain more transactional international business environments, where relationships can be more strongly influenced by immediate commercial advantages.", "His advice was that once a company establishes credibility with a UK customer, maintaining that trust becomes critical to sustaining the relationship.", "Consistent delivery, transparency, professional conduct, and honouring commitments help build lasting partnerships.", "He also observed that Indian technology companies and professionals have developed a strong reputation in the UK, creating a favourable foundation for new business relationships.", "For technology entrepreneurs in Mangaluru, the message was clear: international expansion requires investment not only in business development but also in relationships and cultural understanding."]}, {"heading": "How London & Partners Can Support Indian Companies", "number": "7.", "paragraphs": ["One of the practical highlights of the discussion was an explanation of the role played by London & Partners.", "As an economic development agency, its objective is to help international companies establish and grow their presence in London.", "Hemin emphasised that its core business support and facilitation services are provided without charging the companies receiving that support.", "These can include assistance with understanding the local business ecosystem, building relevant professional connections, accessing market information, and identifying opportunities to engage with potential partners.", "The agency also organises networking activities, business delegations, and international events.", "London Tech Week, held annually, was highlighted as an example of an opportunity through which eligible businesses may gain access to wider technology networks and events.", "Not every benefit is automatically available to every company, and specific programmes may have selection criteria.", "Importantly, entrepreneurs do not necessarily need to be ready to establish a London office immediately before beginning a conversation with the agency."]}, {"heading": "The Most Practical Advice: Start Building Relationships Before You Are Ready to Expand", "number": "8.", "paragraphs": ["Perhaps the most useful message for the entrepreneurs attending the session came toward the end.", "Founders were encouraged to stay connected with London & Partners even if international expansion was not part of their immediate business plans.", "They can introduce their companies, discuss their technology capabilities, understand relevant markets, and begin developing relationships.", "This early engagement can help entrepreneurs avoid misconceptions and make better-informed decisions when the right expansion opportunity emerges.", "Rather than treating international expansion as a single major event, companies can approach it as a gradual process of learning, relationship-building, and market validation."]}, {"heading": "What This Means for Mangaluru", "number": false, "paragraphs": ["The discussion offered valuable lessons not only for individual technology companies but also for Mangaluru's wider business ecosystem.", "The city already has several advantages: a strong educational foundation, a growing technology workforce, an entrepreneurial community, and companies serving international markets.", "However, building a globally competitive technology ecosystem will require more than attracting conventional IT service delivery work.", "Mangaluru could benefit from developing stronger capabilities in specialised technology sectors, creating international commercial connections, attracting high-value GCCs, and enabling local startups to access overseas markets.", "There is also an opportunity for industry bodies, startup communities, academic institutions, and economic development organisations to work together to facilitate these connections.", "**The next stage of Mangaluru's technology growth should not be defined only by how many international companies establish operations here, but also by how many companies from Mangaluru successfully compete in global markets.**"]}, {"heading": "Final Thought", "number": false, "paragraphs": ["A company does not necessarily need to relocate its engineering workforce or move its entire operations abroad to become a global business. There are reports that show that for every one job created in London, six jobs are created back in India. And for every 1 GBP earned in the UK, the ROI is GBP 23 back in India.", "A strategic international presence, supported by strong delivery capabilities in India, can create an effective model for growth.", "The London & Partners interaction reinforced an important idea: global expansion should begin with understanding where the customers are, what capabilities are needed to serve them, and which ecosystem can best support long-term growth.", "For Mangaluru's technology entrepreneurs, those conversations are worth beginning today.", "*Based on a roundtable interaction with representatives of London & Partners in Mangaluru, October 2026. The article has been edited and structured for clarity rather than reproduced as a verbatim transcript.*"]}],
  },
  {
    slug: "sunil-kumar-chowgule-sbd",
    image: sunilPortrait,
    stageImage: sunilStage,
    socialImage: "/interviews/sunil-kumar.jpg",
    stageImageAlt: "Vessel launch at Chowgule's shipyard in Mangaluru",
    tags: "Business · Shipbuilding",
    name: "Sunil Kumar",
    role: "General Manager at Chowgule SBD",
    headline: "On Chowgule’s Shipbuilding Journey",
    fullTitle:
      "“Mangalore Gave Us the Space, Support and Infrastructure to Grow”: Sunil Kumar on Chowgule’s Shipbuilding Journey",
    standfirst:
      "“Mangalore Gave Us the Space, Support and Infrastructure to Grow”: Sunil Kumar on Chowgule’s Shipbuilding Journey",
    date: "Oct 23, 2026",
    readTime: "12 min read",
    body: "Launching a ship can take only a few seconds. But behind those few seconds can be years of experience, engineering calculations, precision, planning and the work of hundreds of people.",
    pullQuote: "",
    pullQuoteBody: "",
    speakerLabel: "Sunil",
    intro: [
      "Launching a ship can take only a few seconds.",
      "But behind those few seconds can be years of experience, engineering calculations, precision, planning and the work of hundreds of people.",
      "Speaking about Chowgule’s shipbuilding operations in Mangaluru, Sunil Kumar, General Manager at Chowgule SBD, Mangalore described the recent launch and delivery of its vessels as more than simply another engineering milestone. He spoke about the science behind the launch, the evolution of the company’s shipbuilding capabilities from Goa to Mangaluru, India’s dependence on imported marine equipment, opportunities for local manufacturers, artificial intelligence in shipbuilding and Mangaluru’s growing place in the maritime industry.",
      "Here are the excerpts from the conversation.",
    ],
    sections: [
      {
        heading: "\"Those four seconds represent tremendous effort\"",
        exchanges: [
          {
            question: "**Could you tell us about the vessel launch and what makes it significant?**",
            answer: [
              "There is fascinating science behind launching the vessel.",
              "This particular kind of launching is called a **drop launch**, and it is very rare in India. Dropping a structure from this kind of height requires precision work, calculations, meticulous planning and a lot of effort.",
              "There is also a lot of emotion involved. You could see some eyes getting wet during the launch because, for us, this is not simply a job. Everybody has put in hard and solid work together.",
              "Drop launches are common in Europe, but they have an advantage there because the height from the jetty is generally not much. Here, the drop is **more than one metre**.",
              "Everything therefore has to be precise. There is no room for error. One mistake can cost us something we cannot even think about.",
              "The actual launch that everybody sees is around **four seconds**.",
              "I normally compare it with watching an Olympic athlete running to glory in nine-plus seconds in the prestigious 100-meter event. Everybody sees those nine seconds, but behind those seconds are years of practice and hard work.",
              "It is the same with this launch.",
              "What everybody sees is a four-second video. But the effort of our team behind those four seconds is tremendous.",
            ],
          },
        ],
      },
      {
        heading: "\"Mangalore is our more modern and larger facility\"",
        exchanges: [
          {
            question: "**How does the Mangaluru shipyard compare with your operations in Goa?**",
            answer: [
              "Our administration building and operations here are part of the Mangalore facility.",
              "When we compare it with our Goa facilities, **Mangalore is the more modern and larger facility**.",
              "In Goa, we have few limitations. There are bridges that vessels need to cross, for example. Here, we do not have those kinds of problems.",
              "We also have the tremendous support of the port infrastructure — both the old port and New Mangalore Port.",
              "We have modern facilities, whether it is the covered shed, crane or the other infrastructure required for shipbuilding.",
              "What you are seeing currently can essentially be considered **Phase 1**.",
              "This was what was required to get the shipyard operational and begin constructing vessels.",
              "Going forward, we are planning to expand the location and facilities further under **Phase 2**.",
            ],
          },
        ],
      },
      {
        heading: "Two export vessels under construction",
        exchanges: [
          {
            question: "**What kind of vessels are currently being built at Mangaluru?**",
            answer: [
              "The first vessel that we saw being launched is one of the vessels from the 8,500 DWT series. Another series is around **10,700 DWT**.",
              "Both series are being built for the European market. The first is connected with customers in the Netherlands and Germany, while another is for the Netherlands.",
              "We work with reputed international as well as domestic clients.",
              "Our clientele also includes organisations such as the **Indian Navy, Indian Coast Guard, Mazagon Dock Shipbuilders Limited and Goa Shipyard Limited**, apart from internationally reputed shipbuilders and owners.",
            ],
          },
        ],
      },
      {
        heading: "\"Exporting 50 vessels from an Indian shipyard is a statement\"",
        exchanges: [
          {
            question: "**What does crossing the milestone of 50 export vessels mean for the company?**",
            answer: [
              "Anywhere in the world, delivering 50 export vessels is a milestone.",
              "But for an Indian shipyard to build and export 50 vessels is also a statement.",
              "It demonstrates what we can do.",
              "We can proudly say that this has been possible because of the efforts of everybody involved and the support we have received from our management.",
            ],
          },
        ],
      },
      {
        heading: "Learning shipbuilding from Japan",
        exchanges: [
          {
            question: "**How did Chowgule develop its shipbuilding processes over the years?**",
            answer: [
              "When we started in Goa, we were trying to understand and adopt some of the principles of shipbuilding followed in Japan., which has been a pioneer in shipbuilding.",
              "I often compare shipbuilding with the automobile industry. Automobile manufacturing follows line production. Shipbuilding cannot be completely automated in the same way because it is still a labour-intensive industry, but there are lessons that can be adopted.",
              "We studied the process of an established Shipyard in Japan and implemented some of those approaches in our Goa unit.",
              "For example, in fabrication, we looked at how activities could be carried out sequentially.",
              "Once we started doing that, we began gaining technical advantages while improving quality and productivity over time.",
              "**The Goa unit taught us how to build ships effectively and within the required timeframe.**",
              "**And Mangalore gave us the space, support and infrastructure required to take that further.**",
              "That combination has helped us reach where we are today.",
            ],
          },
        ],
      },
      {
        heading: "Can Indian manufacturers supply more equipment to shipyards?",
        exchanges: [
          {
            question: "A large proportion of marine OEM equipment used in Indian shipbuilding continues to be imported — propulsion, manoeuvring systems, navigation systems, deck equipment and so on. At what stage do you expect Indian OEMs to play a larger role?",
            answer: [
              "As far as we are concerned, we are largely an export-oriented business.",
              "The ships that we construct and deliver contain components sourced from manufacturers across the globe.",
              "Having more Indian manufacturers participating in this ecosystem is certainly desirable, and we have already started moving in that direction.",
              "But marine equipment manufacturers also require **global presence and support**.",
              "For example, if a vessel built here is operating around Rotterdam or elsewhere in Europe and there is a breakdown, support must be readily available there.",
              "So I would look at localisation happening in roughly **three stages**.",
              "### Stage 1: Structural and basic materials",
              "This is where localisation has already started.",
              "Items such as:",
              ["steel plates,", "pipes,", "accommodation-related materials,", "Insulation materials, and", "structural items"],
              "already have a local presence.",
              "We have started using these products, and there is also a cost advantage.",
              "The quality has been evaluated and accepted by owners and foreign clients.",
              "Everything that becomes part of a ship also needs to meet stringent standards and certification requirements. Classification societies inspect and certify equipment and materials.",
              "So there are several requirements that a manufacturer must fulfil before its product can become part of a vessel.",
              "### Stage 2: Auxiliary equipment",
              "The second stage would involve auxiliary equipment that is not necessarily the vessel's main propulsion system.",
              "This could include equipment such as",
              ["HVAC", "Pumps", "STP,", "Winches", "Diesel Generators"],
              "**I think that over the next five years or so**, we should see more leading Indian manufacturers entering these areas.",
              "### Stage 3: Main propulsion",
              "The third stage would involve the core propulsion system:",
              ["main engines,", "gearboxes,", "shafting, and", "propellers."],
              "These are fundamental parts of a ship.",
              "Perhaps **seven to eight years down the line**, India should be in a much better position in this area as well.",
            ],
          },
        ],
      },
      {
        heading: "An opportunity for Mangaluru's MSMEs",
        exchanges: [
          {
            question: "Mangaluru has industrial areas such as **Baikampady** nearby, with many **MSMEs** that could potentially work with shipyards. **Do you see opportunities for local industries?**",
            answer: [
              "There is certainly an opportunity as localisation increases.",
              "Shipbuilding requires an extensive network of manufacturers and suppliers.",
              "As Indian manufacturers progressively enter structural products, auxiliary systems and eventually more sophisticated marine equipment, there is potential for companies around this region as well.",
              "However, the products need to meet the quality, certification and service requirements expected by shipowners and classification societies.",
            ],
          },
        ],
      },
      {
        heading: "How important is the Shipbuilding Financial Assistance Scheme?",
        exchanges: [
          {
            question: "The **Shipbuilding Financial Assistance Scheme** offers financial **assistance** for ship construction and has helped make Indian yards more **competitive**. **But shipbuilding requires significant upfront capital. How important is the scheme to a shipbuilder?**",
            answer: [
              "The Shipbuilding Financial Assistance Scheme is a completely different subject in itself and could probably be discussed separately.",
              "When we bid for a ship or invite a customer to build with us, many of our customers are repeat customers.",
              "If somebody builds one vessel with us, we are confident that they will come back. That is the level of quality we try to maintain.",
              "In Europe, where many short-sea vessels operate, quality and the reputation of the yard are extremely important considerations.",
              "Financial assistance can certainly make a difference in terms of pricing and execution.",
              "However, the assistance comes at a later stage.",
              "When construction begins, the shipyard still needs to make the necessary investment and have the required resources in place.",
              "So, yes, the scheme is helpful to have an edge and provide huge support to yard , but **we have to start the construction mush earlier than we receive SBFA.**",
            ],
          },
        ],
      },
      {
        heading: "Can AI transform a labour-intensive industry like shipbuilding?",
        exchanges: [
          {
            question: "**Shipbuilding has traditionally been a conservative and labour-intensive industry where mistakes in design or fabrication can cost millions. Is artificial intelligence genuinely becoming a game-changer? Where are you using it?**",
            answer: [
              "The world is moving towards Industry 4.0, although how completely shipbuilding can move in that direction remains a question.",
              "Shipbuilding is labour-intensive, and many activities are still manual. Because of that, automation and AI have limitations.",
              "Nevertheless, we are trying to adopt them wherever possible.",
              "One important area is the use of a **digital twin**.",
              "We can have the entire ship represented digitally before actually building it.",
              "A ship is an extremely complex structure.",
              "Within a single compartment or section, you could have:",
              ["structural elements,", "electrical cables,", "piping,", "different machinery,", "HVAC ducts, and", "several other systems"],
              "all packed into a limited space.",
              "It can be very difficult to foresee how all these different elements will integrate physically.",
              "With advanced software and technologies such as digital twins, we can identify and understand many of these issues **before we actually build the vessel**.",
              "That gives us a significant advantage.",
            ],
          },
        ],
      },
      {
        heading: "What could shipbuilding mean for Mangaluru?",
        exchanges: [
          {
            question: "**Chowgule's success has helped put shipbuilding back in focus in Mangaluru. Where does Mangaluru stand in India's shipbuilding journey, and what could it take for the city to become a major global shipbuilding hub over the next 15 years?**",
            answer: [
              "When we started operating, hardly anybody was doing this kind of shipbuilding in Mangalore.",
              "Today, we have announced our arrival by launching our first vessel from here.",
              "With the present operations, on a day-to-day basis, **around 1,000 people are directly employed**, with many more people indirectly connected through vendors in and around Mangalore.",
              "That is one of the ways in which we are contributing to the coastal region.",
              "With our growth, I am sure this contribution will increase.",
              "Another advantage is that we are part of a broader maritime ecosystem along this coastline.",
              "If new technologies or capabilities emerge, we should be willing to share knowledge and learn from each other so that **the overall shipbuilding industry grows**.",
              "The objective should not simply be for one organisation to excel individually. It should be collaborating and helping the entire shipbuilding ecosystem of our country excel.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "praveen-kalbhavi-novigo-solutions",
    image: praveenPortrait,
    stageImage: praveenStage,
    socialImage: "/interviews/praveen-kalbhavi.jpg",
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
    sideQuote:
      "When I started Novigo, many people felt you had to move to a Tier 1 city to build a successful company. But my experience at Infosys Mangalore showed me otherwise. The talent here was exceptional, and our Mangalore Development Center won the Best Development Center Award year after year. For me, it really came down to the people and the culture of the place.",
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
            question: "Did you worry about whether the company would survive in the early years?",
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
            question: "Should students start a company immediately after college or first gain industry experience?",
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
            answer: ["Problem solving. Languages and technologies will keep changing, but problem solving remains."],
          },
          {
            question: "Entrepreneurship in one word?",
            answer: ["Passion—and drive. Not every entrepreneur succeeds, but a true entrepreneur keeps moving."],
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
    image: zeeshanPortrait,
    stageImage: zeeshanStage,
    socialImage: "/interviews/zeeshan.jpg",
    stageImageAlt:
      "Zeeshan in conversation on stage at CII Founder Connect, Sahyadri College of Engineering, Mangaluru",
    tags: "Business · Entrepreneurship",
    name: "Zeeshan",
    role: "Founder, Talentzy",
    headline: "From Corporate Leadership to Entrepreneurial Freedom",
    standfirst: "On Entrepreneurship, AI, Leadership, Financial Freedom and Building Life on Your Own Terms.",
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
        heading: "What is the most important leadership quality you have learned from senior leaders?",
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
        heading: "Should a student start a company immediately after college or get a job first?",
        paragraphs: [
          "There is nothing wrong with getting a job first. Get your foundation right. A job allows you to understand customers, processes, organisations and people. When I started at Infosys, I wasn't doing glamorous leadership work. I handled basic HR and administrative activities. Eventually, I moved into senior HR leadership. Because I experienced the organisation from the ground up, I could later understand what the junior-most person was going through. That experience becomes incredibly useful when you're a founder. So earn. Learn. Understand the market. Build some financial stability. And if you still strongly believe in your idea, start.",
        ],
      },
      {
        heading: "Do people from Mangaluru need to move to Bengaluru or another big city to become successful?",
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
