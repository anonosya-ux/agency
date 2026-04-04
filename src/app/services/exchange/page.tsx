"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, RefreshCcw, Home, FileCheck, Handshake } from "lucide-react";
import { TrustBanner } from "@/components/TrustBanner";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { motion } from "framer-motion";
import Image from "next/image";

const exchangeSteps = [
  { icon: Home, title: "Оценка вашей квартиры", desc: "Бесплатная рыночная оценка. Определяем реальную стоимость и размер доплаты." },
  { icon: RefreshCcw, title: "Подбор вариантов обмена", desc: "Подбираем подходящие квартиры по базам Москвы и МО за 24 часа." },
  { icon: FileCheck, title: "Юридическая проверка", desc: "Проверяем чистоту обоих объектов. Предоставляем правовой сертификат." },
  { icon: Handshake, title: "Одновременная сделка", desc: "Проводим продажу и покупку в один день. Подписание ДКП, расчёты, регистрация." },
];

const exchangeTypes = [
  "Обмен квартиры на большую с доплатой",
  "Обмен на меньшую с получением разницы",
  "Обмен квартиры в ипотеке",
  "Обмен старой квартиры на новостройку",
  "Обмен район на район",
  "Размен квартиры на две жилплощади",
  "Альтернативная сделка с цепочкой",
];

const stats = [
  { num: "24ч", label: "на подбор вариантов" },
  { num: "1", label: "день на обе сделки" },
  { num: "100%", label: "юридическая защита" },
  { num: "0₽", label: "за консультацию" },
];

export default function ExchangePage() {
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
              <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Обмен квартир</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.1] mb-8 font-semibold uppercase">
                Обмен квартиры <br/><span className="text-[#C1A080] font-light">с доплатой и без.</span>
              </h1>
              <p className="text-lg text-gray-500 font-light mb-6 max-w-lg leading-relaxed">
                Поменяем вашу квартиру на большую или меньшую. Оформим продажу и покупку в один день. Подберём варианты обмена за 24 часа по всей Москве и МО.
              </p>
              <div className="text-sm text-gray-400 font-light mb-12 space-y-1">
                <p>✓ Подберём варианты за 24 часа</p>
                <p>✓ Обе сделки в один день</p>
                <p>✓ Помощь с доплатой через ипотеку</p>
                <p>✓ Юридическая проверка обоих объектов</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/79951138937?text=${encodeURIComponent('Здравствуйте! Хочу обменять квартиру. Интересует подбор вариантов.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-text text-white px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-accent transition-all rounded-full"
                >
                  Подобрать варианты обмена
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="tel:+79951138937" className="group flex items-center justify-center gap-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gray-50 transition-all rounded-full">
                  Позвонить сейчас
                </a>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden rounded-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000&auto=format&fit=crop"
                alt="Обмен квартиры в Москве с доплатой: одновременная сделка"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-serif text-4xl md:text-5xl text-[#C1A080] mb-2">{s.num}</p>
              <p className="text-white/60 text-sm font-light">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Exchange Types */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Виды обмена</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] uppercase font-light">
              Какой обмен <span className="text-[#C1A080]">вам подходит?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exchangeTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:border-[#C1A080]/40 transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#C1A080] text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-[#1A1A1A] font-light">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Пошагово</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] uppercase font-light">
              Как мы <span className="text-[#C1A080]">работаем</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exchangeSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#C1A080]/40 transition-colors"
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
      <Cases />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
