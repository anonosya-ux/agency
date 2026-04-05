'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function ContactsPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, interest: `Страница Контактов. Сообщение: ${comment}` })
      });
      setIsSubmitted(true);
    } catch (e) {
      setIsSubmitted(true);
    }
  };
  return (
    <main className="min-h-screen bg-bg flex flex-col">
      <Navigation />
      
      {/* Contacts Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-secondary/30 border-b border-text/5">
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-text uppercase leading-tight mb-6">
              Свяжитесь <span className="text-accent font-light">с нами</span>
            </h1>
            <p className="text-text-muted text-lg font-light leading-relaxed mb-4">
              Готовы обсудить ваши задачи в сфере элитной недвижимости. 
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-bg relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Details */}
            <div className="w-full lg:w-1/3">
              <h2 className="font-serif text-3xl text-text uppercase mb-8">Офис в Москве</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="text-text font-medium text-lg mb-1">Адрес</h4>
                    <p className="text-text-muted font-light leading-relaxed">Москва, площадь Журавлёва, 2, стр. 2<br />Деловой офис «Фатюхин и Ко»</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="text-text font-medium text-lg mb-1">Телефон</h4>
                    <a href="tel:+79951138937" className="text-text-muted font-light hover:text-accent transition-colors">+7 (995) 113-89-37</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="text-text font-medium text-lg mb-1">Email</h4>
                    <a href="mailto:info@fatukhin.ru" className="text-text-muted font-light hover:text-accent transition-colors">info@fatukhin.ru</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="text-text font-medium text-lg mb-1">Режим работы</h4>
                    <p className="text-text-muted font-light">Пн — Пт: 08:00 – 21:00<br />Сб — Вс: по предварительной записи</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-3">
                <a
                  href="https://t.me/fatukhin"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#0088cc] text-white px-6 py-3.5 uppercase tracking-widest text-xs font-medium hover:bg-[#007bb5] transition-all rounded-full w-full"
                >
                  <MessageCircle className="w-4 h-4" /> Написать в Telegram
                </a>
                <a
                  href={`https://wa.me/79951138937?text=${encodeURIComponent('Здравствуйте! Хотел бы обсудить вопрос по недвижимости.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-3.5 uppercase tracking-widest text-xs font-medium hover:bg-[#20BD5A] transition-all rounded-full w-full"
                >
                  <MessageCircle className="w-4 h-4" /> Написать в WhatsApp
                </a>
                <a
                  href="https://max.ru/u/f9LHodD0cOLl74KezdeYBu3fOVHAYqq3V3sIeBS8EAja_dROofdIIAV8or8"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#4F46E5] text-white px-6 py-3.5 uppercase tracking-widest text-xs font-medium hover:bg-[#4338CA] transition-all rounded-full w-full"
                >
                  <MessageCircle className="w-4 h-4" /> Написать в Max
                </a>
                <a
                  href="tel:+79951138937"
                  className="flex items-center justify-center gap-3 bg-text text-bg px-6 py-3.5 uppercase tracking-widest text-xs font-medium hover:bg-accent transition-all rounded-full w-full"
                >
                  <Phone className="w-4 h-4" /> Позвонить
                </a>
              </div>
            </div>

            {/* Contact Form & Map */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <div className="bg-surface/80 backdrop-blur-xl border border-text/10 rounded-3xl p-8 lg:p-12 shadow-xl">
                <h3 className="font-serif text-2xl text-text uppercase mb-6">Оставить заявку</h3>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                     <div className="w-20 h-20 bg-[#21A038]/10 rounded-full flex items-center justify-center mb-6 border border-[#21A038]/20">
                       <MessageCircle className="w-10 h-10 text-[#21A038]" />
                     </div>
                     <h5 className="font-serif text-3xl text-text mb-4">Успешно!</h5>
                     <p className="text-text-muted text-base font-light max-w-sm mx-auto">Мы получили ваше сообщение и свяжемся с вами в самое ближайшее время.</p>
                  </div>
                ) : (
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Ваше имя" 
                      className="w-full bg-bg border border-text/10 rounded-xl px-5 py-4 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    />
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Номер телефона" 
                      className="w-full bg-bg border border-text/10 rounded-xl px-5 py-4 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    />
                    <div className="md:col-span-2">
                      <textarea 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Комментарий (необязательно)" 
                        rows={4}
                        className="w-full bg-bg border border-text/10 rounded-xl px-5 py-4 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                      ></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <button 
                        type="submit" 
                        className="w-full md:w-auto px-10 bg-accent hover:bg-accent-light text-white font-serif font-medium uppercase tracking-widest h-14 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Отправить <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Interactive Yandex Map */}
              <div className="w-full h-[400px] rounded-3xl border border-text/10 overflow-hidden relative">
                <YMaps query={{ apikey: 'fe2fe889-cb48-43d9-a7e8-eccbe9be0441' }}>
                  <Map 
                    defaultState={{ 
                      center: [55.784015, 37.702292], 
                      zoom: 16 
                    }}
                    className="w-full h-full"
                    options={{
                      suppressMapOpenBlock: true,
                    }}
                  >
                    <Placemark 
                      geometry={[55.784015, 37.702292]}
                      options={{
                        preset: 'islands#darkOrangeDotIconWithCaption',
                        iconColor: '#C1A080',
                      }}
                      properties={{
                        iconCaption: 'Фатюхин и Ко',
                        hintContent: 'Агентство недвижимости «Фатюхин и Ко»',
                        balloonContent: `
                          <div style="padding: 8px; font-family: system-ui;">
                            <h4 style="margin: 0 0 4px; font-size: 15px; font-weight: 600;">Фатюхин и Ко</h4>
                            <p style="margin: 0 0 4px; font-size: 13px; color: #666;">Москва, площадь Журавлёва, 2, стр. 2</p>
                            <p style="margin: 0 0 8px; font-size: 13px; color: #C1A080; font-weight: 500;">+7 (995) 113-89-37</p>
                            <a href="https://yandex.com/maps/org/fatiukhin_co/54567120289/?ll=37.702292%2C55.784015&z=15" target="_blank" style="display: block; text-align: center; padding: 6px; border: 1px solid #C1A080; border-radius: 6px; color: #C1A080; text-decoration: none; font-size: 12px;">Открыть в Яндекс.Картах</a>
                          </div>
                        `,
                      }}
                    />
                  </Map>
                </YMaps>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
