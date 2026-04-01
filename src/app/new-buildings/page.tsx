'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CTABanner } from '@/components/CTABanner';
import { MortgageCalculator } from '@/components/MortgageCalculator';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { ArrowUpRight, Search, MapPin, CheckCircle2, Building2, CalendarDays, Key, Droplet, Leaf, Train } from 'lucide-react';
import Link from 'next/link';
import { properties } from '@/data/properties';

export default function NewBuildingsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const newDevelopments = useMemo(() => {
    return properties.filter(p => p.category === 'new');
  }, []);

  const filteredDevelopments = useMemo(() => {
    return newDevelopments.filter((dev) => {
      const matchesSearch = dev.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            dev.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const isComfort = dev.propertyClass === 'comfort';
      const isBusinessOptions = dev.propertyClass === 'business' || dev.propertyClass === 'premium' || dev.propertyClass === 'elit';

      const matchesTab = activeTab === 'all' 
                          || (activeTab === 'Бизнес и Премиум' && isBusinessOptions)
                          || (activeTab === 'Комфорт' && isComfort)
                          || (activeTab === 'Сданы' && dev.specs.completion === 'Сдан')
                          || (activeTab === 'В стройке' && dev.specs.completion !== 'Сдан');
      return matchesSearch && matchesTab;
    });
  }, [activeTab, searchQuery, newDevelopments]);

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <Navigation />
      
      <section className="pt-32 pb-20 relative border-b border-text/10 overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 bg-surface/80 backdrop-blur-md border border-text/10 rounded-full text-xs text-accent uppercase tracking-widest mb-6">
                Первичный рынок
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-text uppercase leading-tight mb-6">
                Подбор <span className="text-accent font-light">Новостроек</span>
              </h1>
              <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Закрытые старты продаж, лучшие цены от застройщиков и субсидированная ипотека для клиентов «Фатюхин и Ко».
              </p>
              
              <div className="relative max-w-2xl mx-auto flex items-center bg-surface backdrop-blur-xl border border-text/20 rounded-full p-2 shadow-sm focus-within:ring-1 focus-within:ring-accent transition-shadow">
                <Search className="absolute left-6 w-5 h-5 text-text-muted" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ЖК, застройщик, район или метро..." 
                  className="w-full bg-transparent pl-14 pr-4 py-3 text-text placeholder:text-text-muted/60 focus:outline-none placeholder:font-light"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg border-b border-text/5">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          <div>
            <p className="text-center text-sm uppercase tracking-widest text-text-muted mb-8 font-serif">Официальные застройщики</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="font-sans text-xl font-bold tracking-tighter text-text hover:text-accent transition-colors">MR Group</span>
              <span className="font-serif text-xl text-text hover:text-accent transition-colors">Донстрой</span>
              <span className="font-sans text-xl uppercase tracking-widest text-text hover:text-accent transition-colors">Capital Group</span>
              <span className="font-sans text-xl font-medium text-text hover:text-accent transition-colors">ГК Основа</span>
              <span className="font-serif text-xl tracking-tight text-text hover:text-accent transition-colors">ЛСР</span>
            </div>
          </div>
          <div>
            <p className="text-center text-sm uppercase tracking-widest text-text-muted mb-8 font-serif">Банки-партнеры</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="font-sans text-xl font-bold tracking-tighter text-text hover:text-accent transition-colors">СБЕРБАНК</span>
              <span className="font-sans text-xl font-bold text-text hover:text-accent transition-colors">ВТБ</span>
              <span className="font-sans text-xl font-bold text-text hover:text-accent transition-colors">АЛЬФА БАНК</span>
              <span className="font-sans text-xl font-bold text-text hover:text-accent transition-colors">ГАЗПРОМБАНК</span>
              <span className="font-sans text-xl font-bold text-text hover:text-accent transition-colors">ДОМ.РФ</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg relative">
        <div className="container mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['Все жилые комплексы', 'Бизнес и Премиум', 'Комфорт', 'В стройке', 'Сданы'].map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i === 0 ? 'all' : tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    (i === 0 && activeTab === 'all') || activeTab === tab
                      ? 'bg-accent text-white border-accent shadow-sm' 
                      : 'bg-transparent text-text-muted border-text/20 hover:border-accent hover:text-accent'
                  }`}
                >
                  {tab}
                </button>
              ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredDevelopments.length > 0 ? filteredDevelopments.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={`/catalog/${item.id}`} className="block group h-full">
                    <SpotlightCard className="h-full flex flex-col p-4 bg-surface backdrop-blur-md hover:bg-surface/80 transition-colors border-text/10 overflow-hidden">
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-secondary">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        
                        <div className={`absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-md border border-text/10 rounded-full text-[10px] text-text font-semibold uppercase tracking-widest shadow-sm`}>
                          {item.propertyClass === 'elit' ? 'Элитный класс' : item.propertyClass === 'premium' ? 'Премиум' : item.propertyClass === 'business' ? 'Бизнес-класс' : 'Комфорт'}
                        </div>
                      </div>

                      <div className="flex flex-col flex-grow relative z-20">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-text-muted text-xs font-light flex items-center gap-1.5 uppercase tracking-wide">
                            <MapPin className="w-3.5 h-3.5 text-accent" /> {item.location.split(',')[0]}
                          </p>
                          <span className="text-[10px] font-bold uppercase text-text/50">{item.developer}</span>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-text group-hover:text-accent transition-colors leading-tight mb-5 drop-shadow-sm">
                          {item.title}
                        </h3>

                        <div className="space-y-2 mb-6 flex-grow">
                           {item.specs.completion && (
                            <p className="flex items-center gap-2 text-sm text-text/80 font-light">
                              <CalendarDays className="w-4 h-4 text-accent/50 shrink-0" /> {item.specs.completion}
                            </p>
                           )}
                           {item.specs.area && (
                            <p className="flex items-center gap-2 text-sm text-text/80 font-light">
                              <Building2 className="w-4 h-4 text-accent/50 shrink-0" /> Площади: {item.specs.area}
                            </p>
                           )}
                           {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                              {item.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="text-[10px] px-2 py-0.5 border border-text/10 rounded text-text/60">
                                  {tag}
                                </span>
                              ))}
                            </div>
                           )}
                        </div>

                        <div className="pt-4 border-t border-text/10 flex items-center justify-between">
                          <p className="text-xs text-text-muted uppercase tracking-widest">Стоимость</p>
                          <div className="font-semibold text-text text-lg">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </motion.div>
              )) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="col-span-full py-20 text-center"
                >
                  <Search className="w-12 h-12 text-text/10 mx-auto mb-4" />
                  <p className="text-text-muted text-lg font-light">К сожалению, по вашему запросу ничего не найдено.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setActiveTab('all'); }} 
                    className="mt-6 text-accent hover:underline hover:text-accent-light"
                  >
                    Сбросить фильтры
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30 border-y border-text/5 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-6">Ипотека от 4%</h2>
              <p className="text-text-muted text-lg font-light leading-relaxed mb-8">
                Наш ипотечный брокер бесплатно подберет оптимальную программу с минимальной ставкой. Мы являемся золотыми партнерами ведущих банков России, что дает доступ к закрытым ставкам.
              </p>
              <ul className="space-y-4 mb-8">
                {['Одобрение по двум документам за 1 день', 'Эксклюзивные дисконты от базовой ставки', 'Семейная и IT-ипотека', 'Беспроцентная рассрочка от застройщика до ключей'].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-text font-light">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent text-white px-8 py-3.5 rounded-xl font-serif uppercase tracking-widest text-sm hover:bg-accent-light transition-colors text-center shadow-lg shadow-accent/20">
                  Рассчитать ипотеку
                </button>
                <button className="bg-transparent border border-accent text-accent px-8 py-3.5 rounded-xl font-serif uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors text-center">
                  Консультация брокера
                </button>
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
               <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop')" }} />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-surface/90 backdrop-blur-xl border border-text/10 rounded-2xl p-6">
                   <p className="text-sm text-text-muted uppercase tracking-widest mb-2 font-medium">Одобрено заявок</p>
                   <p className="text-4xl font-serif text-text font-bold">98% <span className="text-lg font-sans text-accent font-normal">наших клиентов</span></p>
                   
                   <div className="mt-6 pt-6 border-t border-text/10 flex justify-between items-center">
                     <div>
                       <p className="text-xs text-text-muted uppercase tracking-widest mb-1">Экономия до</p>
                       <p className="text-xl font-serif text-text font-semibold">1.5 млн ₽</p>
                     </div>
                     <div className="w-px h-8 bg-text/10"></div>
                     <div>
                       <p className="text-xs text-text-muted uppercase tracking-widest mb-1">Время ответа</p>
                       <p className="text-xl font-serif text-text font-semibold">15 минут</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <MortgageCalculator />

      <div className="container mx-auto px-4 py-16">
        <CTABanner />
      </div>

      <Footer />
    </main>
  );
}
