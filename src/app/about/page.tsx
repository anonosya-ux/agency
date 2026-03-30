'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AboutTeam } from '@/components/AboutTeam';
import { AwardStrip } from '@/components/AwardStrip';
import { Founder } from '@/components/Founder';
import { CTABanner } from '@/components/CTABanner';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <Navigation />
      
      {/* About Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-secondary/30">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 bg-surface/80 backdrop-blur-md border border-text/10 rounded-full text-xs text-accent uppercase tracking-widest mb-6">
              Об агентстве
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-text uppercase leading-tight mb-8">
              Создаем новую <span className="text-accent font-light">культуру</span> <br />
              сделок с недвижимостью
            </h1>
            <p className="text-text-muted text-xl font-light leading-relaxed max-w-2xl">
              Фатюхин и Ко — это бутик элитной недвижимости, где сервис уровня 
              Private Banking встречается с глубокой экспертизой рынка.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement (Founder) */}
      <div className="pt-16">
        <Founder />
      </div>

      {/* History Timeline */}
      <section className="py-24 bg-surface/30 border-y border-text/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">История компании</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { year: '2008', title: 'Основание бутика', desc: 'Запуск агентства полного цикла. Первые сделки с премиальной недвижимостью в столице и формирование костяка команды.' },
              { year: '2013', title: 'Экспансия в Подмосковье', desc: 'Открытие направления загородной недвижимости. Успешная реализация объектов в элитных поселках (Рублево-Успенское, Новорижское шоссе).' },
              { year: '2018', title: 'Выход на международный рынок', desc: 'Установление партнерских отношений с застройщиками ОАЭ (Дубай) и Кипра. Создание инвестиционного отдела.' },
              { year: '2024', title: 'Внедрение цифровых сервисов', desc: 'Запуск системы оценки 360°, срочного выкупа за 3 дня и программы комплексного хоум-стейджинга для объектов класса de luxe.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 mb-12 last:mb-0 relative">
                {/* Timeline Line */}
                {i !== 3 && <div className="absolute left-[27px] top-[60px] bottom-[-48px] w-[1px] bg-text/10" />}
                
                <div className="w-[56px] h-[56px] bg-surface border border-text/10 rounded-full flex items-center justify-center shrink-0 z-10 text-accent font-serif shadow-sm">
                  {i + 1}
                </div>
                <div className="pt-3">
                  <h3 className="text-2xl font-serif text-text mb-2"><span className="text-accent mr-3">{step.year}</span> {step.title}</h3>
                  <p className="text-text-muted font-light leading-relaxed text-lg max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Awards Components reused from Home */}
      <AboutTeam />
      <div className="py-24 bg-secondary/30">
        <AwardStrip />
      </div>

      <div className="container mx-auto px-4 py-16">
        <CTABanner />
      </div>

      <Footer />
    </main>
  );
}
