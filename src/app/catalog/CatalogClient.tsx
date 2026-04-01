'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Bed, Bath, ArrowUpRight, Filter, Search, MapPin, SlidersHorizontal, X, ChevronDown, Map as MapIcon, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { YMaps, Map as YandexMap, Placemark } from '@pbe/react-yandex-maps';
import { properties } from '@/data/properties';

type SortMode = 'default' | 'price-asc' | 'price-desc' | 'area-asc' | 'area-desc';

const classOptions = [
  { label: 'Все', value: '' },
  { label: 'Элит', value: 'elit' },
  { label: 'Премиум', value: 'premium' },
  { label: 'Бизнес', value: 'business' },
  { label: 'Комфорт', value: 'comfort' }
];

const developerOptions = [
  'Все', 'MR Group', 'Capital Group', 'Донстрой', 'ГК Основа', 'AEON Development', 'Группа ЛСР', 'ГК INGRAD', 'Э.К. Девелопмент'
];

export default function CatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL state
  const initialClass = searchParams.get('class') || '';
  const initialDev = searchParams.get('dev') || 'Все';
  const initialSearch = searchParams.get('q') || '';
  const initialSort = (searchParams.get('sort') || 'default') as SortMode;

  const [activeClass, setActiveClass] = useState(initialClass);
  const [activeDev, setActiveDev] = useState(initialDev);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [hoveredPropertyId, setHoveredPropertyId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showMapMobile, setShowMapMobile] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>(initialSort);

  // Sync to URL
  const syncUrl = useCallback(() => {
    const params = new URLSearchParams();
    if (activeClass) params.set('class', activeClass);
    if (activeDev !== 'Все') params.set('dev', activeDev);
    if (searchQuery) params.set('q', searchQuery);
    if (sortMode !== 'default') params.set('sort', sortMode);
    
    const qs = params.toString();
    router.replace(`/catalog${qs ? `?${qs}` : ''}`, { scroll: false });
  }, [activeClass, activeDev, searchQuery, sortMode, router]);

  useEffect(() => { syncUrl(); }, [syncUrl]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (activeClass) count++;
    if (activeDev !== 'Все') count++;
    if (sortMode !== 'default') count++;
    return count;
  }, [activeClass, activeDev, sortMode]);

  const resetFilters = () => {
    setActiveClass('');
    setActiveDev('Все');
    setSearchQuery('');
    setSortMode('default');
  };

  const filteredItems = useMemo(() => {
    const result = properties.filter(item => {
      // Только новостройки в этом каталоге по умолчанию, но мы покажем все что есть 
      // if (item.category !== 'new') return false; 
      
      // Class filter
      if (activeClass && item.propertyClass !== activeClass) return false;
      
      // Developer filter
      if (activeDev !== 'Все' && item.developer !== activeDev) return false;
      
      // Text search
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!item.title.toLowerCase().includes(q) && !item.location.toLowerCase().includes(q)) return false;
      }
      return true;
    });

    // Sorting
    if (sortMode === 'price-asc') result.sort((a, b) => a.priceNum - b.priceNum);
    if (sortMode === 'price-desc') result.sort((a, b) => b.priceNum - a.priceNum);
    if (sortMode === 'area-asc') result.sort((a, b) => a.specs.areaNum - b.specs.areaNum);
    if (sortMode === 'area-desc') result.sort((a, b) => b.specs.areaNum - a.specs.areaNum);

    return result;
  }, [activeClass, activeDev, searchQuery, sortMode]);

  const getMarkerColor = (pClass?: string) => {
    switch (pClass) {
      case 'elit': return '#C1A080'; // gold
      case 'premium': return '#800020'; // bordeaux
      case 'business': return '#1E3A8A'; // blue
      case 'comfort': return '#166534'; // green
      default: return '#1A1A1A';
    }
  };

  const getClassLabel = (pClass?: string) => {
    const opt = classOptions.find(o => o.value === pClass);
    return opt ? opt.label : '';
  };

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <Navigation />
      
      {/* Header & Map Map Section */}
      <section className="pt-24 z-20">
        <div className="container mx-auto px-4 mb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="font-serif text-3xl md:text-5xl font-light text-text uppercase tracking-wide">
              Каталог <span className="text-accent italic">Недвижимости</span>
            </h1>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-64 flex-shrink-0">
                <input 
                  type="text" 
                  placeholder="Поиск по названию..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface/50 border border-text/10 rounded-full pl-10 pr-4 py-2.5 text-text text-sm placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40" />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex-shrink-0 flex items-center justify-center p-2.5 rounded-full transition-colors border ${
                  showFilters || activeFilterCount > 0
                    ? 'bg-accent text-white border-accent'
                    : 'bg-surface/50 text-text/60 border-text/10 hover:border-text hover:text-text'
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-surface/30 border-y border-text/5 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                  {/* Class Filter */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-text/60 mb-3 block">Класс жилья</label>
                    <div className="flex flex-wrap gap-2">
                      {classOptions.map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => setActiveClass(opt.value)}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                            activeClass === opt.value
                              ? 'bg-text text-bg border-text' 
                              : 'bg-bg text-text/70 border-text/10 hover:border-text/40'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Developer Filter */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-text/60 mb-3 block">Застройщик</label>
                    <div className="relative">
                      <select
                        value={activeDev}
                        onChange={(e) => setActiveDev(e.target.value)}
                        className="w-full appearance-none bg-bg border border-text/10 rounded-xl px-4 py-2.5 text-sm text-text pr-10 focus:outline-none focus:border-accent transition-colors"
                      >
                        {developerOptions.map(dev => (
                          <option key={dev} value={dev}>{dev}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40 pointer-events-none" />
                    </div>
                  </div>

                  {/* Sort Mode */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-text/60 mb-3 block">Сортировка</label>
                    <div className="relative">
                      <select
                        value={sortMode}
                        onChange={(e) => setSortMode(e.target.value as SortMode)}
                        className="w-full appearance-none bg-bg border border-text/10 rounded-xl px-4 py-2.5 text-sm text-text pr-10 focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="default">По умолчанию</option>
                        <option value="price-asc">Сначала дешевле</option>
                        <option value="price-desc">Сначала дороже</option>
                        <option value="area-desc">Сначала просторные</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {activeFilterCount > 0 && (
                  <div className="mt-6 flex justify-end">
                    <button onClick={resetFilters} className="text-xs text-text/50 uppercase tracking-widest hover:text-accent flex items-center gap-1">
                      <X className="w-3 h-3" /> Сбросить фильтры
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map Header Component */}
        <div className="w-full relative">
          <div className="md:hidden p-4 bg-bg border-b border-text/5 flex justify-between items-center z-10 relative">
            <span className="text-sm font-medium uppercase tracking-widest font-serif flex items-center gap-2">
              <MapIcon className="w-4 h-4 text-accent" /> Карта объектов
            </span>
            <button 
              onClick={() => setShowMapMobile(!showMapMobile)} 
              className="p-1 px-3 bg-surface border border-text/10 rounded-full text-xs text-text flex items-center gap-1"
            >
              {showMapMobile ? 'Скрыть' : 'Показать'}
              {showMapMobile ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
          
          <AnimatePresence initial={false}>
            {(showMapMobile || typeof window !== 'undefined' && window.innerWidth >= 768) && (
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: typeof window !== 'undefined' && window.innerWidth >= 768 ? 400 : 250 }}
                exit={{ height: 0 }}
                className="w-full relative bg-secondary/20 overflow-hidden"
              >
                <YMaps query={{ apikey: 'fe2fe889-cb48-43d9-a7e8-eccbe9be0441' }}>
                  <YandexMap 
                    defaultState={{ center: [55.751244, 37.618423], zoom: 10 }}
                    width="100%"
                    height="100%"
                    options={{
                      suppressMapOpenBlock: true,
                    }}
                  >
                    {filteredItems.map(item => (
                      item.coordinates && (
                        <Placemark 
                          key={item.id} 
                          geometry={item.coordinates} 
                          options={{
                            preset: 'islands#circleDotIcon',
                            iconColor: getMarkerColor(item.propertyClass)
                          }}
                          properties={{
                            hintContent: `${item.title} — ${item.price}`,
                            balloonContent: `
                              <div style="font-family: inherit; padding: 4px; max-width: 200px;">
                                <img src="${item.image}" width="100%" height="100" style="object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />
                                <div style="font-size:10px; text-transform:uppercase; color:${getMarkerColor(item.propertyClass)}; font-weight:bold; margin-bottom:2px;">
                                  ${getClassLabel(item.propertyClass)}
                                </div>
                                <h4 style="margin:0 0 4px 0; font-size: 14px; font-weight: 500; font-family:serif;">${item.title}</h4>
                                <p style="margin:0; font-size: 14px; font-weight: bold; color: #1a1a1a;">${item.price}</p>
                                <a href="/catalog/${item.id}" style="display: block; margin-top: 10px; background: #1a1a1a; color: #fff; text-decoration: none; padding: 6px; text-align: center; border-radius: 6px; font-size: 12px; text-transform: uppercase;">Детальнее</a>
                              </div>
                            `
                          }}
                        />
                      )
                    ))}
                  </YandexMap>
                </YMaps>
                
                {/* Visual shade at bottom of map */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Grid Content */}
      <section className="flex-grow py-12 container mx-auto px-4 z-20 bg-bg">
        <div className="mb-8 flex justify-between items-center text-sm font-light text-text/60">
          <p>Найдено комплексов: <span className="font-semibold text-text">{filteredItems.length}</span></p>
        </div>

        {filteredItems.length > 0 ? (
          <motion.div layout className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredPropertyId(item.id)}
                  onMouseLeave={() => setHoveredPropertyId(null)}
                >
                  <Link href={`/catalog/${item.id}`} className="block h-full cursor-pointer group">
                    <SpotlightCard className="h-full flex flex-col p-3 bg-surface/30 hover:bg-surface/60 transition-colors border-text/5 hover:border-accent/20">
                      
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-secondary/30">
                        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent z-10" />
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        
                        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                          <span 
                            className="px-2.5 py-1 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-widest text-white shadow-sm"
                            style={{ backgroundColor: getMarkerColor(item.propertyClass) }}
                          >
                            {getClassLabel(item.propertyClass)}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-full border border-white/20 group-hover:bg-accent group-hover:text-white transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>

                        <div className="absolute bottom-3 left-3 z-20">
                          <span className="font-serif text-white text-lg drop-shadow-md">
                            {item.price}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col flex-grow px-1">
                        <div className="text-[10px] text-text/40 uppercase tracking-widest font-medium mb-1">
                          {item.developer}
                        </div>
                        <h3 className="font-medium text-text group-hover:text-accent transition-colors leading-tight mb-2 text-[15px]">
                          {item.title}
                        </h3>
                        
                        <p className="text-text/50 text-xs mb-4 flex-grow font-light flex items-center gap-1.5 line-clamp-1">
                          <MapPin className="w-3 h-3 text-accent/60 flex-shrink-0" /> {item.location}
                        </p>

                        {/* Top Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {item.tags.slice(0, 2).map((tag, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 border border-text/10 rounded-md text-text/60">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-text/5">
                          <div className="flex flex-row gap-3 text-text/60 text-xs font-light">
                            {item.specs.beds && <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> Спален: {item.specs.beds}</span>}
                            <span>{item.specs.area}</span>
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
          <div className="w-full py-24 flex flex-col items-center justify-center text-center">
            <Filter className="w-10 h-10 text-text/20 mb-4" />
            <h3 className="text-lg font-serif text-text mb-2">Объекты не найдены</h3>
            <p className="text-text/50 font-light text-sm max-w-sm">Измените параметры поиска или позвоните нам.</p>
            <button 
              onClick={resetFilters}
              className="mt-6 px-6 py-2 border border-accent/40 text-accent rounded-full text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-colors"
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
