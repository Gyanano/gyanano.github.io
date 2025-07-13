import Link from 'next/link';

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-xl hover:text-blue-400 transition-colors">
              Gyanano
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/articles" className="text-white/70 hover:text-white transition-colors">
                Articles
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}