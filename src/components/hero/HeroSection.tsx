'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 mt-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-6 drop-shadow-md">
            Агентство недвижимости полного цикла
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white mb-8 uppercase tracking-wider drop-shadow-lg">
            Элитная недвижимость<br />
            <span className="text-accent font-normal">в Москве и Дубае</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-base md:text-lg lg:text-xl text-white/85 mb-12 font-light leading-relaxed drop-shadow-md">
            Покупка, продажа, аренда и срочный выкуп. 15 лет безупречных сделок. Юридическая гарантия на каждом этапе.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link 
            href="/catalog"
            className="bg-accent hover:bg-accent-light text-dark font-medium uppercase tracking-[0.15em] px-10 py-4 text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2"
          >
            Подобрать объект <ArrowRight className="w-4 h-4" />
          </Link>
          <a 
            href="tel:+79951138937"
            className="bg-transparent border border-white/60 text-white hover:bg-white/10 backdrop-blur-md font-medium uppercase tracking-[0.15em] px-10 py-4 text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> Бесплатная консультация
          </a>
        </motion.div>

        {/* Trust metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            { value: '15+', label: 'лет на рынке' },
            { value: '1 000+', label: 'закрытых сделок' },
            { value: '100%', label: 'гарантия качества' },
            { value: '24/7', label: 'на связи' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl text-accent font-light tracking-tight">{stat.value}</p>
              <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-[0.2em] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
