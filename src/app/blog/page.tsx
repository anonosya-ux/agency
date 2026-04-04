

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Блог об элитной недвижимости | Советы, аналитика — Фатюхин и Ко",
  description: "Экспертные статьи о рынке элитной недвижимости в Москве и за рубежом. Инвестиции, покупка, аренда, новостройки.",
};

import { FALLBACK_POSTS } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-text/10 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="inline-block px-4 py-1.5 bg-surface/80 backdrop-blur-md border border-text/10 rounded-full text-xs text-accent uppercase tracking-widest mb-6">
            Экспертиза
          </div>
          <h1 className="font-serif text-4xl md:text-7xl font-semibold text-text uppercase leading-tight mb-6">
            Блог о <span className="text-accent font-light">Недвижимости</span>
          </h1>
          <p className="text-text-muted text-lg font-light max-w-2xl mx-auto">
            Аналитика рынков, советы инвесторам, обзоры объектов и тренды элитной недвижимости.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 bg-bg flex-grow">
        <div className="container mx-auto px-4">
          <div className="mb-10 p-4 bg-accent/5 border border-accent/20 rounded-2xl text-center text-sm text-text-muted">
            Статьи загружаются из <strong className="text-accent">Sanity CMS</strong> — после подключения управляйте статьями через{' '}
            <Link href="/studio" className="underline text-accent">Sanity Studio</Link>.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {FALLBACK_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-surface/60 hover:bg-surface/90 border border-text/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Cover placeholder */}
                <div className="relative aspect-[16/9] bg-secondary/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  )}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/80 backdrop-blur-md border border-text/10 rounded-full text-[10px] text-text font-semibold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-text-muted text-xs font-light mb-3 uppercase tracking-widest">
                    {new Date(post.publishedAt).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h2 className="font-serif text-2xl font-medium text-text group-hover:text-accent transition-colors leading-snug mb-4">
                    {post.title}
                  </h2>
                  <p className="text-text-muted text-sm font-light line-clamp-2 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-accent text-sm font-medium">
                    Читать статью <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <CTABanner />
      </div>
      <Footer />
    </main>
  );
}
