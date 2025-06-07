import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring and scaling React applications for production environments.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Architecture"],
    slug: "building-scalable-react-applications",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Web Development", "Trends", "Technology"],
    slug: "future-of-web-development",
  },
  {
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques with practical examples and use cases.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-01-05",
    readTime: "12 min read",
    tags: ["CSS", "Layout", "Design"],
    slug: "mastering-css-grid-flexbox",
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Essential TypeScript patterns and practices for writing maintainable and type-safe code.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    slug: "typescript-best-practices",
  },
  {
    title: "Optimizing Web Performance",
    excerpt: "Techniques and strategies for improving website performance and user experience.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-12-20",
    readTime: "15 min read",
    tags: ["Performance", "Optimization", "Web"],
    slug: "optimizing-web-performance",
  },
  {
    title: "Introduction to Next.js 14",
    excerpt: "Exploring the new features and improvements in Next.js 14 with practical examples.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-12-15",
    readTime: "7 min read",
    tags: ["Next.js", "React", "Framework"],
    slug: "introduction-nextjs-14",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl inline-block">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Blog
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Thoughts, tutorials, and insights about web development, design, and technology.
              </p>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={400}
                    height={200}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">Featured</Badge>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {blogPosts[0].title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">{blogPosts[0].excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="backdrop-blur-md bg-white/20 dark:bg-gray-700/20 border-white/30 dark:border-gray-600/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <CardTitle className="text-xl mb-2 text-gray-800 dark:text-gray-200 line-clamp-2">
                    {post.title}
                  </CardTitle>

                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="backdrop-blur-md bg-white/20 dark:bg-gray-700/20 border-white/30 dark:border-gray-600/30 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 w-full"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20"
            >
              Load More Posts
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
