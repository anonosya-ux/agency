'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SpotlightCard } from './ui/spotlight-card';
import { Bed, Bath, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const catalogItems = [
  {
    id: 1,
    category: 'abroad',
    title: 'Вилла на Palm Jumeirah',
    location: 'Дубай, ОАЭ',
    price: '$ 4,500,000',
    specs: { beds: 5, baths: 6, area: '450 м²' },
    image: '/images/palm-villa.jpg',
  },
  {
    id: 2,
    category: 'new',
    title: 'Пентхаус в Capital Towers',
    location: 'Москва, Сити',
    price: '₽ 350,000,000',
    specs: { beds: 3, baths: 4, area: '210 м²' },
    image: '/images/capital-towers.jpg',
  },
  {
    id: 3,
    category: 'rent',
    title: 'Апартаменты Neva Towers',
    location: 'Москва, Сити',
    price: '₽ 500,000 / мес',
    specs: { beds: 2, baths: 2, area: '120 м²' },
    image: '/images/neva-towers.jpg',
  },
  {
    id: 4,
    category: 'abroad',
    title: 'Апартаменты в Address Beach Resort',
    location: 'Дубай, ОАЭ',
    price: '$ 2,100,000',
    specs: { beds: 2, baths: 3, area: '140 м²' },
    image: '/images/address-beach.jpg',
  },
  {
    id: 5,
    category: 'new',
    title: 'ЖК Bvlgari Hotel & Residences',
    location: 'Москва, Остоженка',
    price: 'По запросу',
    specs: { beds: 4, baths: 5, area: '310 м²' },
    image: '/images/bvlgari.jpg',
  },
  {
    id: 6,
    category: 'rent',
    title: 'Дизайнерская квартира на Патриарших',
    location: 'Москва, ЦАО',
    price: '₽ 900,000 / мес',
    specs: { beds: 3, baths: 3, area: '180 м²' },
    image: '/images/patriarshie.jpg',
  },
];

export const Catalog = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = catalogItems.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <section className="py-24 bg-bg w-full border-y border-text/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">
              Лучшие предложения
            </h2>
            <p className="text-text-muted text-lg max-w-xl font-light">
              Исключительные объекты недвижимости, отобранные нашими экспертами.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-surface/50 border border-text/10 p-1 rounded-full h-auto">
                <TabsTrigger value="all" className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-primary transition-all">Все</TabsTrigger>
                <TabsTrigger value="abroad" className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-primary transition-all">За рубежом</TabsTrigger>
                <TabsTrigger value="new" className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-primary transition-all">Новостройки</TabsTrigger>
                <TabsTrigger value="rent" className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-primary transition-all">Аренда</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <SpotlightCard className="h-full flex flex-col p-4">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-secondary/30">
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent z-10" />
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-text/10 text-xs text-text uppercase tracking-wider">
                      {item.category === 'abroad' ? 'Зарубежная' : item.category === 'new' ? 'Новостройка' : 'Аренда'}
                    </div>
                    <div className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border border-text/10 group-hover:bg-accent group-hover:text-primary transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow relative z-20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-medium text-text group-hover:text-accent transition-colors leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-text-muted text-sm mb-4 flex-grow font-light">
                      {item.location}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-text/10">
                      <div className="flex items-center gap-4 text-text-muted text-sm font-light">
                        <span className="flex items-center gap-1.5"><Bed className="w-4 h-4" /> {item.specs.beds}</span>
                        <span className="flex items-center gap-1.5"><Bath className="w-4 h-4" /> {item.specs.baths}</span>
                        <span className="opacity-50">|</span>
                        <span>{item.specs.area}</span>
                      </div>
                      <div className="font-medium text-text whitespace-nowrap pl-2">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link href="/catalog" className="inline-block px-8 py-4 rounded-full border border-accent/50 text-accent hover:bg-accent hover:text-primary transition-all font-medium uppercase tracking-widest text-sm relative overflow-hidden group">
            <span className="relative z-10">Смотреть все объекты</span>
            <div className="absolute inset-0 bg-accent/20 blur-md scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full" />
          </Link>
        </div>
      </div>
    </section>
  );
};
