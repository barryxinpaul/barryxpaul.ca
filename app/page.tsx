import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Users, Mail, Download, Linkedin, X as XIcon, Github } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"] },
  { category: "Business", items: ["Strategy & Operations", "Deck Building", "Data Analysis", ""] },
  { category: "Design", items: ["UI/UX", "Prototyping", "Wireframing", "Design Systems"] },
]

 /* Values Variables
const values = [
  {
    icon: Code,
    title: "Coding",
    description: "Building cool products with code",
  },
  {
    icon: Palette,
    title: "Design First",
    description: "Every project starts with thoughtful design and user experience considerations.",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description: "Looking at the big picture and solving problems with data and innovation",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely in teams to .",
  },
]
  */

// Data arrays for accordion sections
const experienceData = [
  {
    company: "Sherpa°",
    title: "Software Engineer Intern",
    date: "Summer 2025",
    description: [
      "Scheduled to complete a 16-week internship at a 15mm Series A start-up on the Product Development team",
      "Developed an AI-powered system using Google Gemini to interpret and contextualize automation errors (e.g., 500 errors, GCP logs) into clear, actionable insights, cutting down response times and operational overhead by 20%",
      "Building an AI headshot quality assurance by integrating Vertex AI and Google Vision APIs to reduce photo failure rates through ML-driven analysis and customer-facing soft blocks - projected to improve first-time accuracy and minimize manual intervention by Customer Operations"
    ],
  },
  {
    company: "Propel Holdings (TSX:PRL)",
    title: "Software Developer Intern",
    date: "Summer 2024",
    description: [
      "Developed the Agent Tool Kit by consolidating tools, customer data, and product information into an internal web application using ReactJS and REST APIs resulting in a 30% improvement in workflow efficiency for service agents",
      "Redesigned user on-boarding and dashboard UI on 5 subsidiaries web apps using TypeScript, for 30,000+ users",
    ],
  },
  {
    company: "Bagel AI",
    title: "Tech Consultant",
    date: "September 2024 - April 2025",
    description: [
      "Formulated Go-To Strategy for 15mm VC backed start-up developing an AI assistant (Google Accelerator Program)",
      "Led a competitive analysis by benchmarking emerging AI players, evaluating market positioning, & assessing performance metrics; Translated findings into actionable business strategies, positioning for competitive advantage",
      "Analyzed various market strategies, in the North American and European sports AI industry to develop a digital strategy that increased social media engagement by 80% and pre-launch signups by 40% (Prev. Lab3)"
    ],
  },
  {
    company: "HotTakes Sports",
    title: "Product Manager Intern",
    date: "April 2024 - August 2024",
    description: [
      "Developed and launched the HotStreaks feature, a rewards system that boosted user engagement and retention by 4x",
      "Formulated a US Market Expansion strategy by conducting a Total Addressable Market Analysis, Market Gap Analysis, and Competitor Landscape Analysis; advised to launch in 7 states resulting in 500+ App Store downloads and 1k+ revenue"
    ],
  },
];

const communityData = [
  {
    company: "The Aleph Group",
    title: "Head of Corporate Relations",
    date: "September 2023 - Present",
    description: [
      "Organized 4 client projects for 24 student consultants to deliver 100+ hours of consulting services to 4 clients",
      "Prev. Project Lead 2024-2025, Consulting Analyst 2023-2024"
    ],
  },
  {
    company: "W5",
    title: "Vice President of Development",
    date: "September 2023 - April 2025",
    description: [
      "Hosted 2 new initiatives, securing 8 start-ups & 16 panelist for 100+ participants: Careers Panel & Internship program",
      "Orchestrated 2 firms trip for 90 students by heading logistics planning and outreach to McKinsey, National Bank, and Deloitte"
    ],
  },
  {
    company: "Taiwanese Association At Western (TAW)",
    title: "Vice President of External Events",
    date: "September 2023 - Present",
    description: [
    "Love my TAW family! Ran lots of events, made lots of friends, and had a lot of fun",
    ],
  },
];

const educationData = [
  {
    company: "Ivey Business School",
    title: "Honours of Business Administration (HBA)",
    date: "September 2025 - Present",
    description: [
    "",
    ],
  },
  {
    company: "Western University",
    title: "Bachelor of Science, Honours Specialization in Computer Science",
    date: "September 2023 - Present",
    description: [
    "",
    ],
  },
];

// Custom X (Twitter) icon
const XTwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl inline-block">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-4">
              👋 Hey, I'm Barry
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Software Engineer & Product studying Business and Computer Science
              </p>
              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="mailto:barryxpaul@gmail.com"
                  className="flex items-center justify-center px-5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-gray-900 dark:text-white font-semibold text-base shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
                  style={{ boxShadow: "0 0 0 1.5px #e5e7eb" }}
                >
                  <Mail className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-200 group-hover:text-blue-600 transition" />
                  Email me
                </a>
                <a
                  href="/Paul_Barry_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-5 py-2 rounded-xl bg-[#0a1128] text-white font-semibold text-base shadow-sm hover:bg-[#1a2238] transition-all duration-200"
                >
                  <Download className="h-5 w-5 mr-2 text-white" />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio Section */}
            <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <div className="flex items-center mb-6">
                <Image
                  src="/memoji.png?height=80&width=80"
                  alt="Profile"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white/20 mr-4"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Barry Paul</h2>
                  <p className="text-gray-600 dark:text-gray-400">Software Engineer & Product</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Hi! My career journey started with a random thought on building a website and signing up for case competitions on a whim, and it
                  has evolved into a deep love for technology and business.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, reading books at Weldon Library, hanging out with friends, trying out new restaurants, or playing basketball.
                </p>
                <p>
                  I'm currently based in Toronto, working for Sherpa° to build amazing products that makes travelling the world simple.
                </p>
                <p>
                  Feel free to reach out through email or LinkedIn and schedule a chat whenever you'd like!
                </p>
              </div>
              {/* Social Icons Row */}
              <div className="flex justify-left gap-3 mt-6">
                <a href="https://www.linkedin.com/in/barryxpaul/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://x.com/barryxpaul" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                  <XTwitterIcon className="h-5 w-5" />
                </a>
                <a href="mailto:barryxpaul@gmail.com" className="text-gray-500 hover:text-rose-500 transition">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com/barryxinpaul" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="backdrop-blur-md bg-white/20 dark:bg-gray-700/20 border-white/30 dark:border-gray-600/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Values Section 
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">What I Love</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 shadow-xl text-center"
                >
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          */}

          {/* Experience Accordion */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 shadow p-2 md:p-4">
            <Accordion type="single" collapsible defaultValue="experience">
              <AccordionItem value="experience">
                <AccordionTrigger className="text-xl font-semibold px-4">Experience</AccordionTrigger>
                <AccordionContent className="bg-white dark:bg-gray-900/60 rounded-b-2xl px-4">
                  <div className="space-y-8 py-2">
                    {experienceData.map((exp, idx) => (
                      <div key={idx}>
                        <div className="font-semibold text-gray-900 dark:text-white">{exp.company} – {exp.title}</div>
                        <div className="italic text-gray-500 mb-1">{exp.date}</div>
                        {exp.description.length === 1 ? (
                          <div className="text-gray-700 dark:text-gray-300 mb-2">{exp.description[0]}</div>
                        ) : exp.description.length > 1 ? (
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            {exp.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="community">
                <AccordionTrigger className="text-xl font-semibold px-4">Community</AccordionTrigger>
                <AccordionContent className="bg-white dark:bg-gray-900/60 rounded-b-2xl px-4">
                  <div className="space-y-8 py-2">
                    {communityData.map((exp, idx) => (
                      <div key={idx}>
                        <div className="font-semibold text-gray-900 dark:text-white">{exp.company} – {exp.title}</div>
                        <div className="italic text-gray-500 mb-1">{exp.date}</div>
                        {exp.description.length === 1 ? (
                          <div className="text-gray-700 dark:text-gray-300 mb-2">{exp.description[0]}</div>
                        ) : exp.description.length > 1 ? (
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            {exp.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="education">
                <AccordionTrigger className="text-xl font-semibold px-4">Education</AccordionTrigger>
                <AccordionContent className="bg-white dark:bg-gray-900/60 rounded-b-2xl px-4">
                  <div className="space-y-8 py-2">
                    {educationData.map((exp, idx) => (
                      <div key={idx}>
                        <div className="font-semibold text-gray-900 dark:text-white">{exp.company} – {exp.title}</div>
                        <div className="italic text-gray-500 mb-1">{exp.date}</div>
                        {exp.description.length === 1 ? (
                          <div className="text-gray-700 dark:text-gray-300 mb-2">{exp.description[0]}</div>
                        ) : exp.description.length > 1 ? (
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            {exp.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
