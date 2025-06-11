import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "muck",
    description: "An app that helps you find the best places to eat in your area.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/barrypaul/muck",
    demo: "https://muck.barrypaul.com",
  },
  {
    title: "Protier",
    description: "A website that helps you find the best protien powders and rate them.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "Chart.js", "OpenWeather API"],
    github: "https://github.com/barrypaul/protier",
    demo: "https://protier.barrypaul.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with modern web technologies.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl inline-block">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                My Projects
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                A collection of projects that showcase my skills and passion for creating innovative solutions.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-gray-800 dark:text-gray-200">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </CardDescription>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="backdrop-blur-md bg-white/20 dark:bg-gray-700/20 border-white/30 dark:border-gray-600/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
