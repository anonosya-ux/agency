'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CTABanner } from '@/components/CTABanner';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { ArrowUpRight, Search, MapPin, Bed, Bath, ShieldCheck, Key, Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const featuredRent = [
  {
    id: 12,
    title: 'Пентхаус в ОКО',
    location: 'Москва, Сити',
    price: '₽ 800,000 / мес',
    specs: { beds: 3, baths: 3, area: '210 м²' },
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 14,
    title: 'Апартаменты Neva Towers',
    location: 'Москва, Сити',
    price: '₽ 450,000 / мес',
    specs: { beds: 2, baths: 2, area: '105 м²' },
    image: 'https://images.unsplash.com/photo-1502672260266-1c1e52b1f4c2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 15,
    title: 'Особняк в Жуковке',
    location: 'МО, Рублево-успенское ш.',
    price: '₽ 1,500,000 / мес',
    specs: { beds: 5, baths: 4, area: '650 м²' },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80'
  }
];

export default function RentPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, interest: `СДАЧА В АРЕНДУ. ЖК/Адрес: ${address}, Площадь: ${area}м2, Ставка: ${price}` })
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <Navigation />
      
      {/* Rent Hero Section */}
      <section className="pt-32 pb-20 relative border-b border-text/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 bg-surface/80 backdrop-blur-md border border-text/10 rounded-full text-xs text-accent uppercase tracking-widest mb-6">
                Премиальная аренда
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-text uppercase leading-tight mb-6">
                Аренда <br />
                <span className="text-accent font-light">Элитной Недвижимости</span>
              </h1>
              <p className="text-text-muted text-lg max-w-lg mb-8 font-light leading-relaxed">
                Доступ к закрытой базе особняков, пентхаусов и видовых апартаментов в Москве и Подмосковье. Мы подбираем объекты формата off-market для самых взыскательных клиентов с гарантией абсолютной конфиденциальности.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link 
                  href="/catalog"
                  className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-xl font-serif uppercase tracking-widest text-sm hover:bg-accent-light transition-colors"
                >
                  Найти квартиру <Search className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  href="#contact"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-xl font-serif uppercase tracking-widest text-sm hover:bg-accent/10 transition-colors"
                >
                  Сдать объект <Home className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
               <div className="absolute inset-0 bg-black/10 z-10" />
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop')] bg-cover bg-center" />
               <div className="absolute bottom-6 left-6 z-20 bg-surface/80 backdrop-blur-xl border border-text/10 rounded-2xl p-4 flex items-center gap-4 text-text">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <Key className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Заселение за 1 день</p>
                    <p className="text-xs text-text-muted">Проверенные собственники</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured For Rent Grid */}
      <section className="py-24 bg-bg border-y border-text/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
             <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">Топ предложений</h2>
             <p className="text-text-muted text-lg font-light">Доступны для просмотра и заселения уже сегодня.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredRent.map((item) => (
              <Link href={`/catalog/${item.id}`} key={item.id} className="block group h-full">
                <SpotlightCard className="h-full flex flex-col p-4 bg-surface backdrop-blur-md hover:bg-surface/80 transition-colors border-text/10 line-clamp-2">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-secondary">
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                     <div 
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" 
                        style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                     />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/80 backdrop-blur-md border border-text/10 rounded-full text-[10px] text-text font-semibold uppercase tracking-widest flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#21A038] animate-pulse" /> Готово к заселению
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow relative z-20">
                    <h3 className="font-serif text-xl font-medium text-text group-hover:text-accent transition-colors leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-5 font-light flex items-center gap-1.5 align-top">
                      <MapPin className="w-3.5 h-3.5 text-accent" /> {item.location}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-text/10">
                      <div className="font-medium text-text text-lg tracking-tight">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/catalog" 
              className="inline-flex items-center text-accent uppercase text-sm font-semibold tracking-widest hover:text-accent-light transition-colors"
            >
              Смотреть все варианты из базы <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tenant Benefits */}
      <section className="py-24 bg-surface/30 relative border-b border-text/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center px-4">
              <div className="w-14 h-14 mx-auto bg-bg border border-text/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-medium text-text mb-3">Приватность</h4>
              <p className="text-text-muted font-light leading-relaxed">Полная конфиденциальность вашей аренды. Работаем с закрытыми базами (off-market) без публикации в интернете.</p>
            </div>
            <div className="text-center px-4">
              <div className="w-14 h-14 mx-auto bg-bg border border-text/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-medium text-text mb-3">Юридический щит</h4>
              <p className="text-text-muted font-light leading-relaxed">Тщательная проверка собственников и объектов. Жесткий договор, защищающий ваши интересы как арендатора.</p>
            </div>
            <div className="text-center px-4">
              <div className="w-14 h-14 mx-auto bg-bg border border-text/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <Key className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-medium text-text mb-3">Сервис 24/7</h4>
              <p className="text-text-muted font-light leading-relaxed">Личный менеджер организует клининг, ремонт или переезд после подписания договора. Вы только наслаждаетесь жизнью.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Benefits Section */}
      <section id="contact" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-6">Сдать элитную недвижимость</h2>
            <p className="text-text-muted text-lg font-light leading-relaxed">
              Возьмем на себя все заботы по сдаче вашего объекта в аренду. От профессиональной предпродажной подготовки до подбора надежных статусных арендаторов.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Оценка объекта', icon: TrendingUp },
              { title: 'Профильная съемка', icon: ShieldCheck },
              { title: 'Закрытый показ', icon: Key },
              { title: 'Договор и страховка', icon: Home }
            ].map((step, i) => (
              <div key={i} className="bg-surface backdrop-blur-md border border-text/10 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4 relative z-10">
                  <step.icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-text relative z-10">{i + 1}. {step.title}</h4>
              </div>
            ))}
          </div>

          {/* Owner Contract Form */}
          <div className="mt-16 max-w-2xl mx-auto bg-surface/80 backdrop-blur-xl border border-text/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
             
             <h3 className="font-serif text-2xl font-medium text-text mb-2 text-center relative z-10">Оставить заявку на аренду</h3>
             <p className="text-text-muted font-light text-center mb-8 relative z-10 text-sm">Мы свяжемся с вами в течение 15 минут для обсуждения условий.</p>
             
             {isSubmitted ? (
               <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500 relative z-10">
                 <div className="w-20 h-20 bg-[#21A038]/10 rounded-full flex items-center justify-center mb-6 border border-[#21A038]/20">
                   <ShieldCheck className="w-10 h-10 text-[#21A038]" />
                 </div>
                 <h5 className="font-serif text-3xl text-text mb-4">Ждем вас в закрытом клубе!</h5>
                 <p className="text-text-muted text-base font-light max-w-sm mx-auto">Брокер свяжется с вами в течение 15 минут для конфиденциального обсуждения условий аренды.</p>
               </div>
             ) : (
               <form className="flex flex-col gap-4 relative z-10" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <input 
                     type="text" 
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                     placeholder="Ваше имя" 
                     className="w-full bg-black/5 border border-text/10 rounded-xl px-5 py-3.5 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                   />
                   <input 
                     type="tel" 
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                     required
                     placeholder="Номер телефона" 
                     className="w-full bg-black/5 border border-text/10 rounded-xl px-5 py-3.5 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                   />
                 </div>
                 <input 
                   type="text" 
                   value={address}
                   onChange={(e) => setAddress(e.target.value)}
                   placeholder="Название ЖК / Адрес объекта" 
                   className="w-full bg-black/5 border border-text/10 rounded-xl px-5 py-3.5 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                 />
                 <div className="grid grid-cols-2 gap-4">
                   <input 
                     type="text" 
                     value={area}
                     onChange={(e) => setArea(e.target.value)}
                     placeholder="Площадь, м²" 
                     className="w-full bg-black/5 border border-text/10 rounded-xl px-5 py-3.5 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                   />
                   <input 
                     type="text" 
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                     placeholder="Ожидаемая ставка" 
                     className="w-full bg-black/5 border border-text/10 rounded-xl px-5 py-3.5 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
                   />
                 </div>
                 <button 
                   type="submit" 
                   className="w-full bg-accent hover:bg-accent-light text-primary font-serif font-medium uppercase tracking-widest h-14 rounded-xl transition-all duration-300 mt-4 shadow-lg hover:shadow-xl hover:shadow-accent/20 flex flex-col items-center justify-center"
                 >
                   Сдать недвижимость
                 </button>
                 <p className="text-center text-xs text-text/40 mt-2 font-light">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
               </form>
             )}
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
