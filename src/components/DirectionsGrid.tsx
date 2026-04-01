'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const directions = [
  {
    title: 'Зарубежная недвижимость',
    desc: 'Доходные объекты и получение ВНЖ в ОАЭ, Азии и Европе',
    link: '/abroad',
    image: '/images/abroad.jpg',
    className: 'md:col-span-2 md:row-span-2 min-h-[400px]',
  },
  {
    title: 'Подбор новостроек',
    desc: 'Премиум-ЖК Москвы на старте продаж',
    link: '/new-buildings',
    image: '/images/new-builds.jpg',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
  },
  {
    title: 'Аренда элитного жилья',
    desc: 'Долгосрочная аренда премиум-класса и коммерческих площадей',
    link: '/rent',
    image: '/images/rent.jpg',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
  },
];

export const DirectionsGrid = () => {
  return (
    <section className="py-16 sm:py-24 bg-bg w-full">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-semibold text-text uppercase mb-4">Направления</h2>
          <p className="text-text-muted text-base md:text-lg max-w-2xl font-light">
            Мы подберём объект для инвестиций, жизни или бизнеса. Гарантируем конфиденциальность, юридическую чистоту и прозрачность сделки.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-min">
          {directions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-xl border border-text/10 bg-surface fallback-bg hover:border-accent/50 transition-colors duration-500 ${item.className}`}
            >
              <Link href={item.link} className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 z-0 bg-secondary/20 transition-transform duration-700 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent z-10" />
                  {/* Ideally Next/Image here. We fallback to simple div if images don't exist yet */}
                </div>
                
                <div className="relative z-20 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-xs sm:text-sm md:text-base">{item.desc}</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-text/20 flex items-center justify-center bg-black/20 backdrop-blur-md group-hover:bg-accent group-hover:text-bg transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
