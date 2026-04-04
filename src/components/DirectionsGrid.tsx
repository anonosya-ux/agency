'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Key, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const directions = [
  {
    title: 'Срочная продажа и выкуп',
    desc: 'Продадим вашу квартиру по максимальной цене за 14–30 дней. Выкуп — за 3 дня',
    link: '/services/fast-buy',
    className: 'md:col-span-2 md:row-span-2 min-h-[400px]',
    bgImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Покупка квартиры',
    desc: 'Персонально подберем ликвидный объект под ваш запрос. От надежного комфорт-класса до элитных лотов (10–50 млн ₽).',
    link: '/services/buy',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
    icon: 'key',
  },
  {
    title: 'Обмен с доплатой',
    desc: 'Поменяем на большую или меньшую. Оформим сделку в один день',
    link: '/services/exchange',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
    icon: 'refresh',
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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-semibold text-text uppercase mb-4">Как мы помогаем</h2>
          <p className="text-text-muted text-base md:text-lg max-w-2xl font-light">
            Покупка, продажа, обмен — решим любой квартирный вопрос в Москве и Подмосковье. Юридическая чистота, конфиденциальность и прозрачность каждой сделки.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-min">
          {directions.map((item, idx) => {
            const IconComponent = item.icon === 'key' ? Key : (item.icon === 'refresh' ? RefreshCw : null);
            return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-xl border border-text/10 bg-surface hover:border-accent/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 ${item.className}`}
            >
              <Link href={item.link} className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                {/* Background rendering */}
                {item.bgImage ? (
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 z-10" />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-0 bg-secondary/20 transition-transform duration-700 group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent z-10" />
                    {IconComponent && (
                      <IconComponent className="absolute -bottom-10 -right-10 w-56 h-56 text-text stroke-[0.3] opacity-[0.04] rotate-[-15deg] group-hover:scale-110 transition-transform duration-700" />
                    )}
                  </div>
                )}
                
                <div className="relative z-20 flex items-end justify-between gap-4">
                  <div>
                    <h3 className={`font-serif text-xl sm:text-2xl md:text-3xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300 ${item.bgImage ? 'text-white' : 'text-text'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs sm:text-sm md:text-base ${item.bgImage ? 'text-white/80' : 'text-text-muted'}`}>{item.desc}</p>
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center backdrop-blur-md group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:border-[#1E3A8A] transition-all duration-300 shrink-0 ${item.bgImage ? 'border-white/20 bg-white/10 text-white' : 'border-text/20 bg-black/5 text-text'}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};
