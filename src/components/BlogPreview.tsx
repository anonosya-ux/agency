'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { FALLBACK_POSTS } from '@/data/blogPosts';

export const BlogPreview = () => {
  const articles = FALLBACK_POSTS.slice(0, 3);
  return (
    <section className="py-24 bg-bg w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">
              Аналитика рынка
            </h2>
            <p className="text-base md:text-lg text-text-muted max-w-xl font-light">
              Свежие обзоры, инвестиционные инсайды и юридические тонкости от экспертов «Фатюхин и Ко».
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog" className="inline-block px-6 py-3 rounded-full border border-text/20 text-text hover:bg-white hover:text-bg transition-colors font-medium uppercase tracking-wider text-sm">
              Все статьи
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Link href={`/blog/${article.id}`} className="block group">
                <Card className="h-full border-text/10 bg-surface/30 hover:bg-surface/60 transition-colors duration-500 overflow-hidden shadow-none rounded-xl">
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary/30">
                     <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
                     <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                       {/* Image Placeholder */}
                        <img src={`/images/blog-${(idx % 3) + 1}.jpg`} alt={article.title} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" />
                     </div>
                     <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md rounded border border-text/10 text-[10px] text-text uppercase tracking-widest">
                       {article.category}
                     </div>
                  </div>
                  <div className="p-6 relative z-20">
                    <div className="text-text-muted text-sm mb-3 font-light tracking-wide">{article.publishedAt}</div>
                    <h3 className="font-serif text-xl font-medium text-text mb-4 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                       {article.title}
                    </h3>
                    <div className="flex items-center text-accent text-sm md:text-base font-semibold uppercase tracking-wider group-hover:gap-2 transition-all">
                      Читать статью <ArrowUpRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
