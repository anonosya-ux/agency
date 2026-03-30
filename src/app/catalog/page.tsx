'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Bed, Bath, ArrowUpRight, Filter, Search, MapPin } from 'lucide-react';
import Link from 'next/link';

const catalogItems = [
  // === НОВОСТРОЙКИ (с fatukhin.ru) ===
  {
    id: 101,
    category: 'new',
    title: 'ЖК «Ренессанс»',
    location: 'Москва, ВАО (м. Сокольники)',
    price: 'от 18 200 000 ₽',
    specs: { beds: 2, baths: 1, area: '52 м²' },
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd15?w=800&auto=format&fit=crop',
  },
  {
    id: 102,
    category: 'new',
    title: 'ЖК «Архитектор»',
    location: 'Москва, ЮЗАО',
    price: 'от 22 500 000 ₽',
    specs: { beds: 2, baths: 1, area: '73 м²' },
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
  },
  {
    id: 103,
    category: 'new',
    title: 'ЖК «Дюна» Котельники',
    location: 'МО, Котельники',
    price: 'от 8 900 000 ₽',
    specs: { beds: 1, baths: 1, area: '38 м²' },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
  },
  {
    id: 104,
    category: 'new',
    title: 'Клубный дом «ЭЛЬЙОН»',
    location: 'Москва, ЦАО',
    price: 'от 45 000 000 ₽',
    specs: { beds: 3, baths: 2, area: '120 м²' },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
  },
  // === ВТОРИЧНОЕ ЖИЛЬЁ (с fatukhin.ru) ===
  {
    id: 201,
    category: 'secondary',
    title: '2-комн. квартира, ул. Буракова 15/1',
    location: 'Москва, ВАО',
    price: '14 800 000 ₽',
    specs: { beds: 2, baths: 1, area: '54 м²' },
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
  },
  {
    id: 202,
    category: 'secondary',
    title: '2-комн. квартира, Б. Переяславская 17',
    location: 'Москва, СВАО',
    price: '19 500 000 ₽',
    specs: { beds: 2, baths: 1, area: '62 м²' },
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop',
  },
  {
    id: 203,
    category: 'secondary',
    title: '3-комн. квартира, ул. Коненкова 6А',
    location: 'Москва, СВАО',
    price: '22 700 000 ₽',
    specs: { beds: 3, baths: 1, area: '78 м²' },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
  },
  {
    id: 204,
    category: 'secondary',
    title: '2-комн. квартира, Осенний бульвар 6',
    location: 'Москва, ЗАО (Крылатское)',
    price: '28 900 000 ₽',
    specs: { beds: 2, baths: 1, area: '68 м²' },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
  },
  {
    id: 205,
    category: 'secondary',
    title: '3-комн. квартира, Загородное шоссе 9к1',
    location: 'Москва, ЮАО',
    price: '18 400 000 ₽',
    specs: { beds: 3, baths: 1, area: '72 м²' },
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop',
  },
  {
    id: 206,
    category: 'secondary',
    title: '2-комн. квартира, Суворовская 2/1',
    location: 'Москва, СВАО',
    price: '16 200 000 ₽',
    specs: { beds: 2, baths: 1, area: '56 м²' },
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&auto=format&fit=crop',
  },
  {
    id: 207,
    category: 'secondary',
    title: '3-комн. квартира, Ярославское ш. 8к2',
    location: 'Москва, СВАО',
    price: '21 300 000 ₽',
    specs: { beds: 3, baths: 2, area: '82 м²' },
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop',
  },
  {
    id: 208,
    category: 'secondary',
    title: '1-комн. квартира, Хабаровская 21',
    location: 'Москва, ВАО',
    price: '10 900 000 ₽',
    specs: { beds: 1, baths: 1, area: '38 м²' },
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop',
  },
  // === АРЕНДА ===
  {
    id: 301,
    category: 'rent',
    title: 'Дом в с. Ромашково, ул. Светлая 44',
    location: 'МО, Одинцовский р-н',
    price: '350 000 ₽ / мес',
    specs: { beds: 4, baths: 3, area: '280 м²' },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
  },
  // === ЗАГОРОДНАЯ ===
  {
    id: 401,
    category: 'country',
    title: '1-комн. квартира, Мытищи, ул. Мира 30',
    location: 'МО, Мытищи',
    price: '7 200 000 ₽',
    specs: { beds: 1, baths: 1, area: '42 м²' },
    image: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&auto=format&fit=crop',
  },
];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'Все объекты', value: 'all' },
    { label: 'Новостройки', value: 'new' },
    { label: 'Вторичное', value: 'secondary' },
    { label: 'Аренда', value: 'rent' },
    { label: 'Загородная', value: 'country' },
  ];

  const filteredItems = useMemo(() => catalogItems.filter(item => 
    (activeCategory === 'all' || item.category === activeCategory) &&
    (item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.location.toLowerCase().includes(searchQuery.toLowerCase()))
  ), [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <Navigation />
      
      {/* Catalog Hero */}
      <section className="pt-40 pb-16 relative border-b border-text/10 z-10 w-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-xs font-medium mb-4">Более 50 проверенных объектов</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-text uppercase mb-6 tracking-wide">
              Эксклюзивный <span className="text-accent">каталог</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl font-light leading-relaxed">
              Каждый объект прошёл юридическую проверку. Мы не размещаем то, что не готовы рекомендовать клиентам лично.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="py-8 sticky top-0 md:top-[72px] bg-bg/80 backdrop-blur-xl border-b border-text/10 z-40 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat.value 
                      ? 'bg-accent text-white border-accent shadow-sm' 
                      : 'bg-transparent text-text/70 border-text/20 hover:border-accent hover:text-accent'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80 flex-shrink-0">
              <input 
                type="text" 
                placeholder="Адрес, район, метро..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface/50 border border-text/20 rounded-full pl-12 pr-5 py-3 text-text text-sm placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 flex-grow container mx-auto px-4 relative z-10">
        {filteredItems.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={`/catalog/${item.id}`} className="block h-full cursor-pointer group">
                    <SpotlightCard className="h-full flex flex-col p-4 bg-surface/40 hover:bg-surface/60 transition-colors border-text/10">
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-secondary/30">
                        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent z-10" />
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-text/10 text-[10px] text-text font-semibold uppercase tracking-widest">
                          {item.category === 'new' ? 'Новостройка' : item.category === 'secondary' ? 'Вторичное' : item.category === 'rent' ? 'Аренда' : 'Загородная'}
                        </div>
                        <div className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/60 backdrop-blur-md rounded-full border border-text/10 group-hover:bg-accent group-hover:text-white transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="flex flex-col flex-grow relative z-20">
                        <h3 className="font-serif text-lg font-medium text-text group-hover:text-accent transition-colors leading-tight mb-1.5">
                          {item.title}
                        </h3>
                        
                        <p className="text-text-muted text-sm mb-5 flex-grow font-light flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-accent/70" /> {item.location}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-text/10">
                          <div className="flex flex-row gap-4 text-text-muted text-sm font-light">
                            <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-accent/50" /> {item.specs.beds}</span>
                            <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-accent/50" /> {item.specs.baths}</span>
                            <span className="opacity-50">|</span>
                            <span>{item.specs.area}</span>
                          </div>
                          <div className="font-semibold text-text whitespace-nowrap pl-2 text-base">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center">
            <Filter className="w-12 h-12 text-text/20 mb-4" />
            <h3 className="text-xl font-serif text-text mb-2">По вашему запросу ничего не найдено</h3>
            <p className="text-text-muted font-light">Попробуйте изменить параметры фильтрации.</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-6 px-6 py-2 border border-accent/50 text-accent rounded-full text-sm uppercase tracking-wider hover:bg-accent hover:text-white transition-colors"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
