'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export default function ContactsPage() {
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
                    <p className="text-text-muted font-light leading-relaxed">Москва, пл. Журавлёва<br />(м. Электрозаводская)<br />Деловой офис «Фатюхин и Ко»</p>
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
            </div>

            {/* Contact Form & Map */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <div className="bg-surface/80 backdrop-blur-xl border border-text/10 rounded-3xl p-8 lg:p-12 shadow-xl">
                <h3 className="font-serif text-2xl text-text uppercase mb-6">Оставить заявку</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full bg-bg border border-text/10 rounded-xl px-5 py-4 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                  <input 
                    type="tel" 
                    placeholder="Номер телефона" 
                    className="w-full bg-bg border border-text/10 rounded-xl px-5 py-4 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                  <div className="md:col-span-2">
                    <textarea 
                      placeholder="Комментарий (необязательно)" 
                      rows={4}
                      className="w-full bg-bg border border-text/10 rounded-xl px-5 py-4 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      type="button" 
                      className="w-full md:w-auto px-10 bg-accent hover:bg-accent-light text-white font-serif font-medium uppercase tracking-widest h-14 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Отправить <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-[400px] bg-secondary/50 rounded-3xl border border-text/10 overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale blend-luminosity" />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
