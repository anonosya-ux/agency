'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Bed, Bath, ArrowUpRight, CheckCircle2, ChevronLeft, MapPin, Maximize, CalendarDays, Key, X } from 'lucide-react';
import Link from 'next/link';
import { Property, properties, PropertyCategory } from '@/data/properties';
import { YMaps, Map as YandexMap, Placemark } from '@pbe/react-yandex-maps';

const classLabels: Record<string, string> = {
  elit: 'Элит',
  premium: 'Премиум',
  business: 'Бизнес',
  comfort: 'Комфорт'
};

const categoryLabels: Record<string, string> = {
  new: 'Новостройка',
  secondary: 'Вторичное',
  rent: 'Аренда',
  country: 'Загородная',
  commercial: 'Коммерческая',
  abroad: 'Зарубежная'
};

export function CatalogDetailClient({ property }: { property: Property }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const handleBooking = async () => {
    if (!name || !phone) {
      alert('Пожалуйста, введите ваше имя и номер телефона.');
      return;
    }
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, interest: `Запрос презентации объекта: ${property.title} (ID: ${property.id})` })
      });
      alert('Заявка успешно отправлена! Брокер свяжется с вами в течение 10 минут.');
      setName('');
      setPhone('');
    } catch {
      alert('Заявка отправлена!');
    }
  };

  const similarProperties = properties
    .filter(p => (p.propertyClass === property.propertyClass || p.category === property.category) && p.id !== property.id)
    .slice(0, 3);

  const mapCenter = property.coordinates || [55.751244, 37.618423];

  const fullGallery = [property.image, ...(property.gallery || [])];

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {galleryIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-4 flex-col"
          >
            <button onClick={() => setGalleryIndex(null)} className="absolute top-6 right-6 p-2 bg-surface text-text rounded-full hover:bg-accent hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="w-full max-w-6xl aspect-[16/9] relative rounded-2xl overflow-hidden bg-black/20">
              <img src={fullGallery[galleryIndex]} className="w-full h-full object-contain" alt={property.title} />
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto w-full max-w-6xl pb-2 scrollbar-hide">
              {fullGallery.map((img, i) => (
                <button key={i} onClick={() => setGalleryIndex(i)} className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 ${galleryIndex === i ? 'border-accent' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-6 border-b border-text/10 z-20 flex justify-between items-center text-sm mt-24">
        <div className="flex items-center gap-2 text-text/60 font-light overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="/" className="hover:text-accent transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-accent transition-colors">Каталог</Link>
          <span>/</span>
          <span className="text-text font-medium truncate max-w-[200px] md:max-w-md">{property.title}</span>
        </div>
        <Link href="/catalog" className="hidden md:inline-flex flex-shrink-0 items-center text-text/60 hover:text-text transition-colors border border-text/10 rounded-full px-4 py-1.5 ml-4 hover:border-text">
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span className="font-medium uppercase tracking-wide text-xs">Все объекты</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent uppercase tracking-widest">
                {classLabels[property.propertyClass || ''] || categoryLabels[property.category] || property.category}
              </span>
              {property.developer && (
                <span className="inline-block px-3 py-1 bg-surface border border-text/10 rounded-full text-xs text-text/70 uppercase tracking-widest font-medium">
                  {property.developer}
                </span>
              )}
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-text uppercase mb-3 leading-tight max-w-4xl">
              {property.title}
            </h1>
            <p className="text-text/60 text-lg flex items-center gap-2 font-light">
               <MapPin className="w-5 h-5 text-accent/70" /> {property.location}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end flex-shrink-0">
            <p className="text-text/40 text-sm uppercase tracking-widest mb-1 font-medium">Стоимость от</p>
            <div className="font-medium text-text text-3xl md:text-5xl tracking-tight drop-shadow-sm whitespace-nowrap">
              {property.price.replace('от ', '')}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16 h-[400px] md:h-[500px]">
          <div 
            onClick={() => setGalleryIndex(0)}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden bg-surface group cursor-pointer h-full border border-text/5"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10 opacity-30 group-hover:opacity-10 transition-opacity" />
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
              style={{ backgroundImage: `url(${fullGallery[0]})` }}
            />
          </div>
          <div className="hidden lg:flex flex-col gap-4 h-full">
            {fullGallery.slice(1, 4).map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setGalleryIndex(idx + 1)}
                className="flex-1 relative rounded-2xl overflow-hidden bg-surface group cursor-pointer border border-text/5"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-90" 
                  style={{ backgroundImage: `url(${img})` }} 
                />
                {idx === 2 && fullGallery.length > 4 && (
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-black/50 hover:bg-black/30 transition-colors">
                    <span className="text-white font-medium uppercase tracking-wider text-sm flex items-center gap-2">
                      <Maximize className="w-4 h-4" /> Ещё {fullGallery.length - 4}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Specs */}
          <div className="w-full lg:w-[65%]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              
              <h3 className="font-serif text-2xl text-text uppercase mb-6">Характеристики</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {property.specs.floors && (
                  <div className="flex flex-col gap-2 p-4 rounded-xl border border-text/5 bg-surface/30">
                    <span className="text-text/40 text-[10px] uppercase tracking-widest font-bold">Этажность</span>
                    <span className="text-text/80 text-sm">{property.specs.floors}</span>
                  </div>
                )}
                {property.specs.area && (
                  <div className="flex flex-col gap-2 p-4 rounded-xl border border-text/5 bg-surface/30">
                    <span className="text-text/40 text-[10px] uppercase tracking-widest font-bold">Площади</span>
                    <span className="text-text/80 text-sm">{property.specs.area}</span>
                  </div>
                )}
                {property.specs.ceilings && (
                  <div className="flex flex-col gap-2 p-4 rounded-xl border border-text/5 bg-surface/30">
                    <span className="text-text/40 text-[10px] uppercase tracking-widest font-bold">Потолки</span>
                    <span className="text-text/80 text-sm">{property.specs.ceilings}</span>
                  </div>
                )}
                {property.specs.parking && (
                  <div className="flex flex-col gap-2 p-4 rounded-xl border border-text/5 bg-surface/30">
                    <span className="text-text/40 text-[10px] uppercase tracking-widest font-bold">Паркинг</span>
                    <span className="text-text/80 text-sm">{property.specs.parking}</span>
                  </div>
                )}
                {property.specs.completion && (
                  <div className="flex flex-col gap-2 p-4 rounded-xl border border-text/5 bg-surface/30">
                    <span className="text-text/40 text-[10px] uppercase tracking-widest font-bold">Сдача</span>
                    <span className="text-text/80 text-sm">{property.specs.completion}</span>
                  </div>
                )}
                 {property.specs.beds && (
                  <div className="flex flex-col gap-2 p-4 rounded-xl border border-text/5 bg-surface/30">
                    <span className="text-text/40 text-[10px] uppercase tracking-widest font-bold">Формат</span>
                    <span className="text-text/80 text-sm">Студия – {property.specs.beds} комн.</span>
                  </div>
                )}
              </div>

              <h3 className="font-serif text-2xl text-text uppercase mb-6">Описание объекта</h3>
              <p className="text-text/70 text-lg font-light leading-relaxed mb-12">
                {property.description}
              </p>

              {(property.features || []).length > 0 && (
                <>
                  <h3 className="font-serif text-2xl text-text uppercase mb-6">Уникальные особенности</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                    {property.features!.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-text/80 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Map */}
              <h3 className="font-serif text-2xl text-text uppercase mb-6">Расположение</h3>
              <div className="w-full h-[400px] mb-20 rounded-2xl overflow-hidden border border-text/5">
                <YMaps query={{ apikey: 'fe2fe889-cb48-43d9-a7e8-eccbe9be0441' }}>
                  <YandexMap
                    defaultState={{ center: mapCenter, zoom: 14 }}
                    className="w-full h-full object-cover"
                    options={{ suppressMapOpenBlock: true }}
                  >
                    <Placemark 
                      geometry={mapCenter} 
                      options={{ preset: 'islands#darkOrangeDotIcon' }}
                      properties={{ balloonContent: property.title }}
                    />
                  </YandexMap>
                </YMaps>
              </div>

            </motion.div>
          </div>

          <div className="w-full lg:w-[35%] relative">
             <div className="sticky top-[100px] rounded-3xl border border-text/10 bg-surface/60 backdrop-blur-xl p-6 xl:p-8 flex flex-col shadow-2xl overflow-hidden group/card z-10">
               <div className="absolute -top-[50px] -right-[50px] w-40 h-40 bg-accent/20 rounded-full blur-[60px] pointer-events-none group-hover/card:bg-accent/30 transition-colors" />

               <h4 className="font-serif text-xl border-l-2 border-accent pl-3 text-text mb-4">Получить презентацию ЖК</h4>
               <p className="text-text/50 text-sm font-light mb-8">
                 Оставьте заявку, персональный брокер пришлет планировки, актуальные цены и организует приватный показ.
               </p>

               <form className="flex flex-col gap-4 mb-6 text-sm">
                 <input 
                   type="text" 
                   required
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Ваше имя" 
                   className="w-full bg-bg/50 border border-text/10 rounded-xl px-4 py-3.5 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                 />
                 <input 
                   type="tel" 
                   required
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   placeholder="Номер телефона" 
                   className="w-full bg-bg/50 border border-text/10 rounded-xl px-4 py-3.5 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                 />
                 <button 
                   type="button" 
                   onClick={handleBooking}
                   className="w-full bg-text hover:bg-text/80 text-bg font-serif font-medium uppercase tracking-widest h-12 rounded-xl transition-all duration-300 mt-2 flex items-center justify-center gap-2 shadow-lg"
                 >
                   Запросить цены <ArrowUpRight className="w-4 h-4" />
                 </button>
               </form>
            </div>
          </div>
        </div>
      </div>

      {similarProperties.length > 0 && (
        <div className="container mx-auto px-4 py-20 border-t border-text/10 mt-12 z-10 relative bg-surface/30">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-text uppercase">Похожие объекты</h3>
            <Link href="/catalog" className="hidden md:flex items-center gap-2 text-sm text-accent uppercase tracking-widest font-medium group">
              Весь каталог <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {similarProperties.map((item) => (
               <Link href={`/catalog/${item.id}`} key={item.id} className="block group h-full">
                 <SpotlightCard className="h-full flex flex-col p-3 bg-surface/30 hover:bg-surface/50 transition-colors border-text/5 hover:border-accent/20">
                   <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-secondary/30">
                     <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-80 z-10" />
                     <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.image})` }} 
                     />
                     <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] text-text uppercase font-semibold tracking-widest shadow-sm">
                       {classLabels[item.propertyClass || ''] || categoryLabels[item.category] || item.category}
                     </div>
                     <div className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-full border border-white/20 group-hover:bg-accent group-hover:text-white transition-colors">
                       <ArrowUpRight className="w-4 h-4" />
                     </div>
                     <div className="absolute bottom-3 left-3 z-20">
                        <span className="font-serif text-white text-xl drop-shadow-md">
                          {item.price}
                        </span>
                     </div>
                   </div>
                   <div className="flex flex-col flex-grow relative z-20 px-1">
                     <span className="text-[10px] text-text/40 uppercase tracking-widest font-bold mb-0.5">{item.developer}</span>
                     <h3 className="font-medium text-text group-hover:text-accent transition-colors leading-tight mb-1 line-clamp-2">{item.title}</h3>
                     <p className="text-text/50 text-xs mb-4 font-light flex items-center gap-1.5 line-clamp-1">
                       <MapPin className="w-3 h-3 text-accent/70 flex-shrink-0" /> {item.location}
                     </p>
                   </div>
                 </SpotlightCard>
               </Link>
             ))}
          </div>
        </div>
      )}
    </>
  );
}
