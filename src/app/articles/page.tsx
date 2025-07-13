'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ArticlesPage() {
  const articles = [
    {
      title: 'Building Modern Web Applications with Next.js',
      excerpt: 'Learn how to create fast, scalable web applications using Next.js and its powerful features.',
      date: 'January 15, 2024',
      readTime: '5 min read',
      slug: 'modern-web-apps-nextjs'
    },
    {
      title: 'The Art of CSS Animations',
      excerpt: 'Discover how to create beautiful, performant animations that enhance user experience.',
      date: 'January 10, 2024',
      readTime: '7 min read',
      slug: 'css-animations-guide'
    },
    {
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for building maintainable applications.',
      date: 'January 5, 2024',
      readTime: '8 min read',
      slug: 'typescript-best-practices'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Simplified background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-teal-900/10"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
              Articles
            </h1>
            <p className="text-xl text-white/70">
              Thoughts on web development, design, and technology
            </p>
          </motion.div>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                  <time>{article.date}</time>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                
                <p className="text-white/70 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Read more →
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}