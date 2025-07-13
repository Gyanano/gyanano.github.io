export default function ModernWebAppsNextjsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
          <time>January 15, 2024</time>
          <span>•</span>
          <span>5 min read</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Building Modern Web Applications with Next.js
        </h1>
        
        <p className="text-xl text-white/70 leading-relaxed">
          Learn how to create fast, scalable web applications using Next.js and its powerful features
          including server-side rendering, static generation, and API routes.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Next.js has revolutionized the way we build React applications. With its powerful features
            like server-side rendering, static site generation, and built-in optimization, it&apos;s become
            the go-to framework for modern web development.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
          <ul className="space-y-2 text-white/80">
            <li>• **Server-Side Rendering (SSR)** - Better SEO and performance</li>
            <li>• **Static Site Generation (SSG)** - Lightning-fast page loads</li>
            <li>• **API Routes** - Full-stack development in one framework</li>
            <li>• **Image Optimization** - Automatic image optimization and lazy loading</li>
            <li>• **File-based Routing** - Intuitive routing based on file structure</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Getting Started</h2>
          <div className="bg-black/30 border border-white/20 rounded-lg p-4 mb-6">
            <code className="text-green-400">
              npx create-next-app@latest my-app --typescript --tailwind --eslint
            </code>
          </div>
          
          <p className="text-white/80 leading-relaxed mb-6">
            This command creates a new Next.js project with TypeScript, Tailwind CSS, and ESLint 
            pre-configured, giving you a solid foundation to build upon.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Best Practices</h2>
          <div className="space-y-4 text-white/80">
            <p>
              <strong className="text-white">1. Use Static Generation when possible:</strong> For pages that can be 
              pre-rendered at build time, use Static Generation for the best performance.
            </p>
            <p>
              <strong className="text-white">2. Optimize images:</strong> Always use Next.js Image component 
              for automatic optimization and lazy loading.
            </p>
            <p>
              <strong className="text-white">3. Code splitting:</strong> Next.js automatically splits your code, 
              but you can further optimize with dynamic imports.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
          <p className="text-white/80 leading-relaxed">
            Next.js provides an excellent developer experience while delivering outstanding performance
            for end users. Whether you&apos;re building a simple blog or a complex web application,
            Next.js has the tools and features to help you succeed.
          </p>
        </div>
      </div>
      
      <footer className="border-t border-white/20 pt-8">
        <div className="flex items-center justify-between">
          <a
            href="/articles"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Articles
          </a>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
              Share
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}