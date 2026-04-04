'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CTABanner } from '@/components/CTABanner';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { ArrowUpRight, Globe2, TrendingUp, ShieldCheck, MapPin, Bed, Bath, Lock } from 'lucide-react';
import Link from 'next/link';
import { properties } from '@/data/properties';

const countries = [
  { name: 'ОАЭ', cities: 'Дубай, Абу-Даби', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop', hasCatalog: false },
  { name: 'Кипр', cities: 'Лимассол, Пафос, Искеле', image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800&auto=format&fit=crop', hasCatalog: true },
  { name: 'Таиланд', cities: 'Пхукет, Самуи', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop', hasCatalog: true },
  { name: 'Бали', cities: 'Чангу, Убуд', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop', hasCatalog: false },
  { name: 'Турция', cities: 'Стамбул, Бодрум', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop', hasCatalog: false },
  { name: 'Грузия', cities: 'Батуми, Тбилиси', image: 'https://images.unsplash.com/photo-1565011681734-78bb796791d3?w=800&auto=format&fit=crop', hasCatalog: false }
];

export default function AbroadPage() {
  const featuredProperties = properties.filter(p => p.category === 'abroad');

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative border-b border-text/10 overflow-hidden">
        {/* Abstract background blobs for Liquid Glass effect */}
        <div className="absolute top-1/2 left-[20%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-[10%] w-[500px] h-[500px] bg-secondary/80 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 bg-surface/80 backdrop-blur-md border border-text/10 rounded-full text-xs text-accent uppercase tracking-widest mb-6">
                Инвестиции без границ
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-text uppercase leading-tight mb-6">
                Зарубежная <br />
                <span className="text-accent font-light">Недвижимость</span>
              </h1>
              <p className="text-text-muted text-lg max-w-lg mb-8 font-light leading-relaxed">
                Доходные апартаменты и роскошные виллы в самых перспективных локациях мира. Полное юридическое сопровождение и ВНЖ.
              </p>
              <Link 
                href="#catalog"
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-xl font-serif uppercase tracking-widest text-sm hover:bg-accent-light transition-colors"
              >
                Смотреть каталог объектов <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
               <div className="absolute inset-0 bg-black/20 z-10" />
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&auto=format&fit=crop')] bg-cover bg-center" />
               <div className="absolute bottom-6 left-6 right-6 z-20 bg-surface/60 backdrop-blur-xl border border-text/10 rounded-2xl p-6 flex justify-between items-center text-text">
                  <div>
                    <p className="text-sm uppercase tracking-widest mb-1 font-medium text-text/80">Доходность от</p>
                    <p className="text-3xl font-serif">8-12% <span className="text-lg">годовых ($)</span></p>
                  </div>
                  <TrendingUp className="w-10 h-10 text-accent opacity-80" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 bg-bg relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">Направления</h2>
             <p className="text-text-muted text-lg font-light max-w-2xl mx-auto">
               Мы работаем только с лучшими застройщиками в странах с высокой инвестиционной привлекательностью.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, idx) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden block"
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${country.image})` }}
                />
                
                {/* Internal / External Linking & Lock State */}
                {!country.hasCatalog ? (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-white/80 font-medium uppercase tracking-widest flex items-center gap-1.5">
                    <Lock className="w-3 h-3" /> Закрытая база
                  </div>
                ) : (
                  <Link href={`/catalog?location=${encodeURIComponent(country.name)}`} className="absolute inset-0 z-30" aria-label={`Смотреть объекты в ${country.name}`} />
                )}

                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <h3 className="font-serif text-2xl font-medium mb-1 drop-shadow-md">{country.name}</h3>
                  <p className="text-white/80 text-sm font-light flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {country.cities}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Advantages */}
      <section className="py-24 bg-surface/30 relative border-y border-text/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
             <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">Сравнение юрисдикций</h2>
             <p className="text-text-muted text-lg font-light">
               Аналитика инвестиционной привлекательности по ключевым направлениям работы.
             </p>
          </div>
          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-text/20">
                  <th className="py-4 px-6 font-serif text-lg font-medium text-text">Страна</th>
                  <th className="py-4 px-6 font-serif text-lg font-medium text-text">Мин. порог входа</th>
                  <th className="py-4 px-6 font-serif text-lg font-medium text-text">Доходность ($)</th>
                  <th className="py-4 px-6 font-serif text-lg font-medium text-text">ВНЖ / Резидентство</th>
                  <th className="py-4 px-6 font-serif text-lg font-medium text-text">Налог на прибыль</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { country: 'ОАЭ (Дубай)', entry: 'от $200,000', yield: '7-12%', res: 'Золотая виза (от $545k)', tax: '0% (отсутствует)' },
                  { country: 'Кипр', entry: 'от €300,000', yield: '5-8%', res: 'ПМЖ за инвестиции', tax: 'Оптимизированный' },
                  { country: 'Таиланд (Пхукет)', entry: 'от $130,000', yield: '8-15%', res: 'Elite Visa', tax: 'Зависит от структуры' },
                  { country: 'Турция', entry: 'от $400,000', yield: '6-10%', res: 'Гражданство', tax: 'От 15%' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-text/5 hover:bg-surface/50 transition-colors">
                    <td className="py-5 px-6 text-text font-medium">{row.country}</td>
                    <td className="py-5 px-6 text-text-muted font-light">{row.entry}</td>
                    <td className="py-5 px-6 text-accent font-medium tracking-wide">{row.yield}</td>
                    <td className="py-5 px-6 text-text-muted font-light">{row.res}</td>
                    <td className="py-5 px-6 text-text-muted font-light">{row.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Premium Spotlight Catalog Wrapper */}
      <section id="catalog" className="py-24 bg-secondary/30 border-y border-text/5 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div>
                <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">Эксклюзив</h2>
                <p className="text-text-muted text-lg font-light">Подборка актуальных предложений за рубежом.</p>
             </div>
             <Link 
               href="/catalog" 
               className="inline-flex items-center text-accent uppercase text-sm font-semibold tracking-widest hover:text-accent-light transition-colors"
             >
               Все объекты <ArrowUpRight className="ml-1 w-4 h-4" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((item) => (
              <Link href={`/catalog/${item.id}`} key={item.id} className="block group h-full">
                <SpotlightCard className="h-full flex flex-col p-4 bg-surface backdrop-blur-md hover:bg-surface/80 transition-colors border-text/10">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-secondary">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/60 backdrop-blur-md rounded-full border border-text/10 group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-colors text-text">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow relative z-20">
                    <h3 className="font-serif text-xl font-medium text-text group-hover:text-accent transition-colors leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-5 flex-grow font-light flex items-center gap-1.5 align-top">
                      <MapPin className="w-3.5 h-3.5 text-accent" /> {item.location}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-text/10">
                      <div className="flex items-center gap-3 text-text-muted text-sm font-light">
                        <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-accent/50" /> {item.specs.beds}</span>
                        <span className="flex items-center gap-1"><Bath className="w-4 h-4 text-accent/50" /> {item.specs.baths}</span>
                      </div>
                      <div className="font-medium text-text text-lg">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / Process Section */}
      <section className="py-24 bg-bg relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-6">Почему инвестиции за рубежом?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: 'Резидентство и ВНЖ', desc: 'Оформление вида на жительство (ВНЖ) или гражданства за инвестиции для всей семьи.' },
              { icon: TrendingUp, title: 'Высокая доходность', desc: 'Гарантированная рентабельность от 8 до 15% годовых в твердой валюте на растущих рынках.' },
              { icon: ShieldCheck, title: 'Юридическая защита', desc: 'Счета эскроу, полная прозрачность сделок и отсутствие рисков долгостроев.' }
            ].map((feature, i) => (
              <div key={i} className="bg-surface/60 backdrop-blur-md border border-text/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-bg border border-text/10 rounded-full flex items-center justify-center mb-6 text-accent">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-medium text-text mb-4">{feature.title}</h4>
                <p className="text-text-muted font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30 relative border-t border-text/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-6">Частые вопросы</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Как проходит процесс дистанционной сделки?', a: 'Мы проводим подробные видео-показы объектов, проверяем застройщика и организуем безопасный перевод средств через эскроу-счета или крипто-платежи. Подписание договора происходит онлайн.' },
              { q: 'Можно ли получить ВНЖ при покупке строящегося объекта?', a: 'Зависит от юрисдикции. В ОАЭ Золотую визу можно получить после выплаты 2 млн дирхамов, на Кипре — ПМЖ выдается сразу при покупке от €300,000, в том числе off-plan.' },
              { q: 'Кто занимается сдачей недвижимости в аренду?', a: 'В большинстве стран наши партнеры - управляющие компании застройщиков берут недвижимость в управление "под ключ", обеспечивая вам пассивный доход в валюте.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-surface/60 backdrop-blur-md border border-text/10 rounded-2xl open:bg-surface/100 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-serif text-xl font-medium text-text group-open:text-accent transition-colors">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-text-muted font-light leading-relaxed border-t border-text/5 pt-4 mt-2">
                  {faq.a}
                </div>
              </details>
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
