// src/app/blog/[slug]/page.tsx
// Динамическая страница статьи блога

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CTABanner } from '@/components/CTABanner';
import Link from 'next/link';
import { ArrowLeft, CalendarDays } from 'lucide-react';

import { FALLBACK_POSTS } from '@/data/blogPosts';

export function generateStaticParams() {
  return FALLBACK_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const post = FALLBACK_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-bg flex flex-col">
        <Navigation />
        <section className="pt-40 pb-20 container mx-auto px-4 flex-grow flex items-center justify-center flex-col text-center">
          <h1 className="font-serif text-5xl text-text mb-4">Статья не найдена</h1>
          <p className="mt-4 text-text-muted">Этот материал находится в разработке.</p>
          <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Вернуться в блог
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const publishedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })
    : null;

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.publishedAt || new Date().toISOString(),
            "author": {
              "@type": "Organization",
              "name": "Фатюхин и Ко"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Фатюхин и Ко",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fatukhin.ru/logo.svg"
              }
            }
          })
        }}
      />
      <Navigation />

      <article className="pt-32 pb-20 container mx-auto px-4 max-w-4xl flex-grow">
        <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link href="/" className="hover:text-accent transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-accent transition-colors">Блог</Link>
          <span>/</span>
          <span className="text-text">{post.title}</span>
        </div>

        <header className="mb-12">
          {post.category && (
            <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent uppercase tracking-widest mb-6">
              {post.category}
            </div>
          )}
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-text uppercase leading-tight mb-6">
            {post.title}
          </h1>
          {publishedDate && (
            <p className="text-text-muted text-sm flex items-center gap-2 font-light">
              <CalendarDays className="w-4 h-4" />
              {publishedDate}
            </p>
          )}
        </header>

        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 bg-secondary/30">
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 pb-32 to-transparent z-10" />
          {post.image && (
            <div 
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-90"
              style={{ backgroundImage: `url(${post.image})` }} 
            />
          )}
        </div>

        <div className="prose prose-lg max-w-none prose-invert text-text prose-p:font-light prose-p:leading-relaxed prose-h2:font-serif prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-text prose-h3:text-accent prose-li:font-light prose-strong:font-bold prose-strong:text-text mb-16">
          <p className="text-text-muted text-xl font-light leading-relaxed mb-10 border-l-2 border-accent pl-6">{post.excerpt}</p>
          {post.content && (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
        </div>
      </article>

      <div className="container mx-auto px-4 py-16">
        <CTABanner />
      </div>
      <Footer />
    </main>
  );
}
