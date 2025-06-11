import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center backdrop-blur-md bg-white/20 dark:bg-gray-700/20 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg border border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
          </div>

          <article className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title and Metadata */}
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
              <span>{post.readTime}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 dark:bg-gray-700/20 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm border border-white/30 dark:border-gray-600/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div 
              className="prose prose-base dark:prose-invert max-w-none prose-headings:text-gray-800 dark:prose-headings:text-gray-200 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-800 dark:prose-strong:text-gray-200 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>
        </div>
      </div>
    </div>
  )
} 