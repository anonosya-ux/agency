'use client';

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Bed, Bath, ArrowUpRight, CheckCircle2, ChevronLeft, MapPin, Maximize, CalendarDays, Key } from 'lucide-react';
import Link from 'next/link';

// Detailed mockup data
const propertyDetails = {
    category: 'abroad',
    title: 'Эксклюзивная Вилла на Palm Jumeirah',
    location: 'Дубай, ОАЭ',
    price: '$ 4,500,000',
    specs: { beds: 5, baths: 6, area: '450 м²' },
    description: 'Великолепная современная вилла расположенная на культовом острове Palm Jumeirah. Панорамное остекление, собственный пляж, инфинити-бассейн и система «Умный дом».',
    images: [
      '/images/placeholder-0.jpg',
      '/images/placeholder-1.jpg',
      '/images/placeholder-2.jpg'
    ],
    features: [
      'Собственный выход к морю',
      'Панорамный вид на залив',
      'Бассейн Infinity',
      'Система кондиционирования',
      'Охраняемая территория 24/7',
      'Паркинг на 3 автомобиля'
    ],
    amenities: [
      { icon: Bed, label: '5 спален' },
      { icon: Bath, label: '6 ванных комнат' },
      { icon: Maximize, label: 'Площадь 450 м²' },
      { icon: CalendarDays, label: 'Год постройки 2024' },
      { icon: Key, label: 'Готовность: Сдан' }
    ]
};

export default function CatalogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Use React.use() to unwrap params
  const { id } = use(params);

  return (
    <main className="min-h-screen bg-bg flex flex-col pt-24">
      <Navigation />
      
      {/* Top Bar with Breadcrumbs & Back btn */}
      <div className="container mx-auto px-4 py-6 border-b border-text/10 z-20 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2 text-text-muted font-light overflow-x-auto whitespace-nowrap hide-scrollbar">
          <Link href="/" className="hover:text-accent transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-accent transition-colors">Каталог</Link>
          <span>/</span>
          <span className="text-text font-medium">{propertyDetails.title}</span>
        </div>
        <Link href="/catalog" className="hidden md:inline-flex flex-shrink-0 items-center text-text-muted hover:text-text transition-colors border border-text/10 rounded-full px-4 py-1.5 ml-4">
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span className="font-medium uppercase tracking-wide text-xs">Назад</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-xs text-accent uppercase tracking-widest mb-4">
              Зарубежная недвижимость
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-text uppercase mb-3 leading-tight">
              {propertyDetails.title}
            </h1>
            <p className="text-text-muted text-lg flex items-center gap-2 font-light">
               <MapPin className="w-5 h-5 text-accent/70" /> {propertyDetails.location}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-text-muted text-sm uppercase tracking-widest mb-1">Стоимость</p>
            <div className="font-medium text-text text-3xl md:text-5xl tracking-tight drop-shadow-md">
              {propertyDetails.price}
            </div>
          </div>
        </div>

        {/* Hero Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 h-[500px]">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden bg-surface group">
            {/* Main Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10 opacity-60" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <div className="h-1/2 relative rounded-2xl overflow-hidden bg-surface group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="h-1/2 relative rounded-2xl overflow-hidden bg-surface group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-text font-medium uppercase tracking-wider text-sm flex items-center gap-2">
                      <Maximize className="w-4 h-4" /> Показать все фото
                    </span>
                </div>
            </div>
          </div>
        </div>

        {/* Content & Sticky Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Specs */}
          <div className="w-full lg:w-2/3">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl text-text uppercase mb-6">Характеристики</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                {propertyDetails.amenities.map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 rounded-xl border border-text/10 bg-surface/30">
                    <item.icon className="w-6 h-6 text-accent" />
                    <span className="text-text/80 text-sm font-light">{item.label}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-2xl text-text uppercase mb-6">Описание объекта</h3>
              <p className="text-text-muted text-lg font-light leading-relaxed mb-12">
                {propertyDetails.description}
              </p>

              <h3 className="font-serif text-2xl text-text uppercase mb-6">Особенности</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
                {propertyDetails.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-text font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-[100px] rounded-3xl border border-text/10 bg-surface/60 backdrop-blur-xl p-8 flex flex-col shadow-2xl overflow-hidden group/card">
               {/* Ambient Glow */}
               <div className="absolute -top-[50px] -right-[50px] w-40 h-40 bg-accent/20 rounded-full blur-[60px] pointer-events-none group-hover/card:bg-accent/30 transition-colors" />

               <h4 className="font-serif text-xl text-text mb-2">Назначить просмотр</h4>
               <p className="text-text-muted text-sm font-light mb-8">
                 Оставьте заявку, персональный брокер организует для вас приватный показ объекта #{id}.
               </p>

               <form className="flex flex-col gap-4 mb-6 text-sm">
                 <input 
                   type="text" 
                   placeholder="Ваше имя" 
                   className="w-full bg-surface/40 border border-text/10 rounded-xl px-4 py-3.5 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                 />
                 <input 
                   type="tel" 
                   placeholder="Номер телефона" 
                   className="w-full bg-surface/40 border border-text/10 rounded-xl px-4 py-3.5 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                 />
                 <button 
                   type="button" 
                   className="w-full bg-accent hover:bg-accent-light text-primary font-serif font-medium uppercase tracking-widest h-12 rounded-xl transition-all duration-300 mt-2 flex items-center justify-center gap-2"
                 >
                   Записаться <ArrowUpRight className="w-4 h-4" />
                 </button>
               </form>
               
               <p className="text-text/50 text-[10px] font-light leading-relaxed text-center">
                 Ваши данные в безопасности. Мы соблюдаем строгие стандарты конфиденциальности.
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      <div className="container mx-auto px-4 py-20 border-t border-text/10 mt-12 z-10 relative">
        <h3 className="font-serif text-3xl text-text uppercase mb-10 text-center">Похожие объекты</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[1, 2, 3].map((i) => (
             <Link href={`/catalog/${i}`} key={i} className="block group h-full">
               <SpotlightCard className="h-full flex flex-col p-4 bg-surface/40 hover:bg-surface/60 transition-colors border-text/10">
                 <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-secondary/30">
                   <div className="absolute inset-0 bg-black/10 transition-colors z-10" />
                   <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-text/10 text-[10px] text-text uppercase tracking-widest">
                     Зарубежная
                   </div>
                 </div>
                 <div className="flex flex-col flex-grow relative z-20">
                   <h3 className="font-serif text-xl font-medium text-text group-hover:text-accent transition-colors leading-tight mb-2">Апартаменты Dubai Marina</h3>
                   <p className="text-text-muted text-sm mb-5 font-light flex items-center gap-1.5 align-top">
                     <MapPin className="w-3.5 h-3.5 text-accent/70" /> Дубай, ОАЭ
                   </p>
                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-text/10">
                     <span className="font-medium text-text text-lg drop-shadow-md">$ 1,200,000</span>
                   </div>
                 </div>
               </SpotlightCard>
             </Link>
           ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
