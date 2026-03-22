"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    cat: "Аналитика рынка",
    title: "Офисы А-класса в Москве: доходность в 2025 году выросла до 11%",
    excerpt: "Анализ ставок аренды в деловых кластерах Москва-Сити, Белорусская и Электрозаводская. Почему сейчас — окно возможностей для инвестора.",
    date: "18 марта 2025",
    readTime: "7 мин",
  },
  {
    cat: "Юридические кейсы",
    title: "Как снять арест с объекта недвижимости за 2 недели: пошаговый разбор",
    excerpt: "Реальный кейс нашего клиента: ипотечный арест + исполнительное производство. Порядок действий, инструменты, результат.",
    date: "5 марта 2025",
    readTime: "12 мин",
  },
  {
    cat: "Инвестиции",
    title: "Пхукет vs Дубай: где эффективнее разместить капитал в 2025 году",
    excerpt: "Сравнение по 8 параметрам: доходность аренды, ликвидность выхода, налоговая нагрузка, курсовые риски и защита права собственности.",
    date: "22 февраля 2025",
    readTime: "10 мин",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-28 px-4 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#C5A059] mb-4 block">
              Экспертный взгляд
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-[1.1] max-w-lg">
              Аналитика и кейсы<br />от практиков.
            </h2>
          </div>
          <a
            href="/blog"
            className="group flex items-center gap-3 text-[#1A1A1A] hover:text-[#C5A059] transition-colors text-sm uppercase tracking-[0.15em] font-medium"
          >
            Все материалы
            <span className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="/blog"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white border border-gray-100 p-8 flex flex-col gap-5 hover:border-[#C5A059]/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Category */}
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#C5A059]">
                {post.cat}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl text-[#1A1A1A] leading-[1.3] group-hover:text-[#C5A059] transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-500 font-light text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <span className="text-xs text-gray-400">{post.date}</span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
