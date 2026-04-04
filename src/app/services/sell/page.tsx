"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Camera, BarChart3, Megaphone, Users, FileCheck, Handshake } from "lucide-react";
import { Calculator } from "@/components/Calculator";
import { TrustBanner } from "@/components/TrustBanner";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { BlogSnippet } from "@/components/BlogSnippet";
import { motion } from "framer-motion";

const sellSteps = [
  { icon: BarChart3, title: "Оценка объекта", desc: "Бесплатная рыночная оценка на основе аналогов и экспертной методологии. Выезд в течение 24 часов." },
  { icon: Camera, title: "Хоум-стейджинг и съёмка", desc: "Профессиональная подготовка квартиры к продаже: стейджинг, фото, видео, 3D-тур." },
  { icon: Megaphone, title: "Маркетинговая кампания", desc: "Размещение на 25+ платформах + таргетированная реклама на целевую аудиторию покупателей." },
  { icon: Users, title: "Показы и переговоры", desc: "Организуем показы, ведём торги и фильтруем нецелевые запросы." },
  { icon: FileCheck, title: "Юридическое сопровождение", desc: "Подготовка полного комплекта документов, проверка покупателя, аккредитив." },
  { icon: Handshake, title: "Закрытие сделки", desc: "Подписание ДКП, регистрация в Росреестре, передача ключей. Средний срок: 14-30 дней." },
];

const guarantees = [
  "Продажа по максимальной рыночной цене",
  "Полная конфиденциальность сделки",
  "Юридическая защита на всех этапах",
  "Средний срок продажи — 21 день",
];

export default function SellPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Для Владельцев</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.1] mb-8 font-semibold uppercase">
                Продать квартиру <br/><span className="text-[#C1A080] font-light">быстро и выгодно.</span>
              </h1>
              <p className="text-lg text-gray-500 font-light mb-6 max-w-lg leading-relaxed">
                Продадим вашу квартиру по максимальной рыночной цене за 14–30 дней. Профессиональный маркетинг, хоум-стейджинг и собственная база покупателей.
              </p>
              <div className="text-sm text-gray-400 font-light mb-12 space-y-1">
                <p>✓ Продажа квартиры для покупки другой (альтернативная сделка)</p>
                <p>✓ Продажа с долей несовершеннолетнего</p>
                <p>✓ Продажа ипотечной квартиры</p>
                <p>✓ Экспресс-оценка за 15 минут — бесплатно</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#calc" className="group flex items-center justify-center gap-3 bg-text text-white px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-accent transition-all rounded-full">
                  Оценить квартиру
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a 
                  href={`https://wa.me/79951138937?text=${encodeURIComponent('Здравствуйте! Хочу продать квартиру. Интересует оценка.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gray-50 transition-all rounded-full"
                >
                  Связаться в WhatsApp
                </a>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607688969-a5bfcd64bd15?q=80&w=2000&auto=format&fit=crop")' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-white/80 text-sm font-light"
              >
                <span className="w-6 h-6 rounded-full bg-[#C1A080] text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">✓</span>
                {g}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Этапы</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] uppercase font-light">
              Процесс <span className="text-[#C1A080]">продажи</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 border border-gray-200 rounded-2xl hover:border-[#C1A080]/40 transition-colors"
              >
                <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <step.icon className="w-8 h-8 text-[#C1A080] mb-4" />
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustBanner />

      <div id="calc">
        <Calculator />
      </div>
      
      <Cases />
      <Team />
      <FAQ />
      <BlogSnippet />
      <Footer />
    </main>
  );
}
