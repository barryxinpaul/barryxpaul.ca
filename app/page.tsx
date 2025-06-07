import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Users, Mail, Download } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"] },
  { category: "Business", items: ["Strategy & Operations", "Deck Building", "Data Analysis", ""] },
  { category: "Design", items: ["UI/UX", "Prototyping", "Wireframing", "Design Systems"] },
]

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "I believe in writing maintainable, scalable, and well-documented code.",
  },
  {
    icon: Palette,
    title: "Design First",
    description: "Every project starts with thoughtful design and user experience considerations.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every line of code I write.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to deliver exceptional results together.",
  },
]

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
                  src="/placeholder.svg?height=80&width=80"
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
                  Hello! I'm a passionate full-stack developer with over 5 years of experience creating digital
                  solutions that make a difference. My journey started with a curiosity about how websites work, and it
                  has evolved into a deep love for crafting beautiful, functional applications.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community. I believe in continuous learning and staying
                  up-to-date with the latest trends in web development.
                </p>
                <p>
                  I'm currently based in San Francisco, working remotely with teams around the world to build amazing
                  products that users love.
                </p>
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

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">What I Value</h2>
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

          {/* Experience Accordion */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 shadow p-2 md:p-4">
            <Accordion type="single" collapsible defaultValue="experience">
              <AccordionItem value="experience">
                <AccordionTrigger className="text-xl font-semibold px-4">Experience</AccordionTrigger>
                <AccordionContent className="bg-white dark:bg-gray-900/60 rounded-b-2xl px-4">
                  <div className="space-y-8 py-2">
                    {/* Example Job Entry */}
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Figma – Software Engineering Intern</div>
                      <div className="italic text-gray-500 mb-1">May - August 2023</div>
                      <div className="text-gray-700 dark:text-gray-300 mb-2">Working on making the editor as usable as possible by designers, engineers, and product teams using C++ and TypeScript</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Lumafield – Software Engineering Intern</div>
                      <div className="italic text-gray-500 mb-1">September - December 2022</div>
                      <div className="text-gray-700 dark:text-gray-300 mb-2">Iterated and developed a user-friendly interface for the world's first accessible x-ray CT scanner for engineers using TypeScript and React</div>
                      <div className="text-gray-700 dark:text-gray-300">Architected and built an authentication system for the interface and API routes using Python and Ansible</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Figma – Software Engineering Intern</div>
                      <div className="italic text-gray-500 mb-1">January - April 2022</div>
                      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Shipped 3 features to FigJam which has over 400,000+ weekly active users</li>
                        <li>Created the universal inserts modal which consolidated 4 entry points into a single one</li>
                        <li>Refined canvas snapping and guideline algorithms to improve the user interaction experience</li>
                        <li>Owned and created emoji reactions and custom CSS animations in real time for keywords typed in cursor chat for FigJam's first year anniversary</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Unity Technologies – Software Engineering Intern</div>
                      <div className="italic text-gray-500 mb-1">May - August 2021</div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="community">
                <AccordionTrigger className="text-xl font-semibold px-4">Community</AccordionTrigger>
                <AccordionContent className="bg-white dark:bg-gray-900/60 rounded-b-2xl px-4">
                  <div className="py-2 text-gray-700 dark:text-gray-300">Community involvement details go here.</div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="education">
                <AccordionTrigger className="text-xl font-semibold px-4">Education</AccordionTrigger>
                <AccordionContent className="bg-white dark:bg-gray-900/60 rounded-b-2xl px-4">
                  <div className="py-2 text-gray-700 dark:text-gray-300">Education details go here.</div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
