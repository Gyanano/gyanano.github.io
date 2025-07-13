export default function ArticlesPage() {
  const articles = [
    {
      title: 'Building Modern Web Applications with Next.js',
      excerpt: 'Learn how to create fast, scalable web applications using Next.js and its powerful features.',
      date: '2024-01-15',
      readTime: '5 min read',
      slug: 'modern-web-apps-nextjs'
    },
    {
      title: 'The Art of CSS Animations',
      excerpt: 'Discover how to create beautiful, performant animations that enhance user experience.',
      date: '2024-01-10',
      readTime: '7 min read',
      slug: 'css-animations-guide'
    },
    {
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for building maintainable applications.',
      date: '2024-01-05',
      readTime: '8 min read',
      slug: 'typescript-best-practices'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Articles
        </h1>
        <p className="text-xl text-white/70">
          Thoughts on web development, design, and technology
        </p>
      </div>

      <div className="space-y-8">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
              <time>{new Date(article.date).toLocaleDateString()}</time>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
              <a href={`/articles/${article.slug}`}>
                {article.title}
              </a>
            </h2>
            
            <p className="text-white/70 leading-relaxed mb-6">
              {article.excerpt}
            </p>
            
            <a
              href={`/articles/${article.slug}`}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}