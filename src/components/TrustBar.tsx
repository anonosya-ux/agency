'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Лет на рынке', value: '15+' },
  { label: 'Успешных сделок', value: '1000+' },
  { label: 'Гарантия безопасности', value: '100%' },
];

const partners = [
  'Первый Канал', 'ЦИАН', 'Авито Недвижимость', 'Домклик', 'Ипотека Центр', 'Сбербанк', 'ВТБ'
];

export const TrustBar = () => {
  return (
    <section className="w-full bg-secondary border-y border-text/5 py-4 overflow-hidden relative flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10 text-center md:text-left mb-6 w-full justify-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="py-2 md:py-0 px-6 flex flex-col items-center md:items-start text-center">
            <span className="font-serif text-2xl font-semibold text-accent">{stat.value}</span>
            <span className="text-xs uppercase tracking-widest text-text-muted mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Marquee for Partners */}
      <div className="w-full relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee shadow-sm [--duration:40s]">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center mx-4 text-text/40 hover:text-text transition-colors duration-300">
              <span className="text-sm font-medium tracking-widest uppercase pointer-events-none select-none">{partner}</span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {partners.map((partner, index) => (
            <div key={`dup-${index}`} className="flex items-center justify-center mx-8 text-text/40 hover:text-text transition-colors duration-300">
              <span className="text-sm font-medium tracking-widest uppercase pointer-events-none select-none">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
