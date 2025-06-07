import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Users } from "lucide-react"
import Image from "next/image"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Vercel"] },
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
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Get to know the person behind the code and designs.
              </p>
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
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">John Doe</h2>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
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

          {/* Experience Timeline */}
          <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Senior Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">TechCorp Inc. • 2022 - Present</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Leading development of scalable web applications using React, Node.js, and cloud technologies.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Frontend Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">StartupXYZ • 2020 - 2022</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Built responsive web applications and improved user experience across multiple products.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Junior Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">WebAgency • 2019 - 2020</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Developed websites and web applications for various clients using modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
