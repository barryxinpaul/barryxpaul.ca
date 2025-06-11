import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogIndex() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl inline-block">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-4">
                Blogs
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Thoughts, lifestyle, and insights about my world.
              </p>
            </div>
          </div>

          {/* Featured Post */}
          {posts.length > 0 && (
            <div className="mb-16">
              <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={posts[0].image}
                        alt={posts[0].title}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="backdrop-blur-md bg-white/20 dark:bg-gray-700/20 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm border border-white/30 dark:border-gray-600/30">
                        Featured
                      </span>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(posts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {posts[0].readTime}
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                      {posts[0].title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">{posts[0].excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {posts[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 dark:bg-gray-700/20 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm border border-white/30 dark:border-gray-600/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={`/blog/${posts[0].slug}`}
                      className="inline-flex items-center backdrop-blur-md bg-white/20 dark:bg-gray-700/20 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg border border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <div
                key={post.slug}
                className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
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

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/20 dark:bg-gray-700/20 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs border border-white/30 dark:border-gray-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center backdrop-blur-md bg-white/20 dark:bg-gray-700/20 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg border border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-200"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
