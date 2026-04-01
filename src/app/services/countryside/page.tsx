"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Trees, Mountain, Compass, Shield, Map, Home } from "lucide-react";
import { TrustBanner } from "@/components/TrustBanner";
import { Footer } from "@/components/Footer";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { BlogSnippet } from "@/components/BlogSnippet";
import { motion } from "framer-motion";

const directions = [
  { icon: Trees, name: "Рублёво-Успенское", desc: "Золотой стандарт загородной жизни. Барвиха, Жуковка, Горки-2. Лучшая инфраструктура.", price: "от 80 млн ₽" },
  { icon: Compass, name: "Новорижское", desc: "Современные коттеджные посёлки с лесными участками. Павлово, Millennium Park.", price: "от 40 млн ₽" },
  { icon: Mountain, name: "Ильинское", desc: "Тишина и экология. Элитные усадьбы вдоль Москвы-реки.", price: "от 50 млн ₽" },
  { icon: Map, name: "Калужское", desc: "Перспективное направление с развивающейся инфраструктурой. Новая Москва.", price: "от 25 млн ₽" },
];

const objectTypes = [
  { title: "Усадьбы и особняки", desc: "Классическая архитектура на участках от 30 соток с ландшафтным дизайном.", icon: Home },
  { title: "Современные резиденции", desc: "Hi-tech и минимализм. Панорамное остекление, «умный дом», бассейн.", icon: Shield },
  { title: "Земельные участки", desc: "ИЖС от 15 соток в охраняемых посёлках закрытого типа с коммуникациями.", icon: Trees },
  { title: "Таунхаусы", desc: "Малоэтажные клубные резиденции с общей территорией и безопасностью.", icon: Mountain },
];

export default function CountrysidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors mb-12 font-bold">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Жизнь вне мегаполиса</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] max-w-4xl mb-8 uppercase font-semibold text-dark">
                Загородные <br/><span className="text-[#C1A080] font-light">резиденции.</span>
              </h1>
              <p className="text-lg font-light text-gray-600 max-w-2xl leading-relaxed mb-12">
                Роскошные лесные усадьбы, ультрасовременные резиденции и видовые участки на Рублево-Успенском, Новорижском и Ильинском направлениях. Только эксклюзивные лоты закрытых продаж (off-market), не публикуемые в открытом доступе.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/79951138937?text=${encodeURIComponent('Здравствуйте! Интересует загородная недвижимость.')}`} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-text text-white px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-accent transition-all rounded-full">
                  Запросить подборку
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <Link href="/catalog?category=country" className="group flex items-center justify-center gap-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gray-50 transition-all rounded-full">
                  Смотреть объекты
                </Link>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop")' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">География</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] uppercase font-light">
              Направления <span className="text-[#C1A080]">Подмосковья</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directions.map((dir, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#C1A080]/40 hover:shadow-lg transition-all"
              >
                <dir.icon className="w-10 h-10 text-[#C1A080] mb-4" />
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl text-[#1A1A1A]">{dir.name}</h3>
                  <span className="text-[#C1A080] font-serif text-lg whitespace-nowrap ml-4">{dir.price}</span>
                </div>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{dir.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Object Types */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Типология</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white uppercase font-light">
              Типы <span className="text-[#C1A080]">объектов</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectTypes.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-white/10 rounded-xl text-center hover:border-[#C1A080]/40 transition-colors"
              >
                <obj.icon className="w-8 h-8 text-[#C1A080] mx-auto mb-4" />
                <h4 className="text-white font-medium mb-2">{obj.title}</h4>
                <p className="text-white/50 text-sm font-light">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustBanner />
      <Cases />
      <Team />
      <FAQ />
      <BlogSnippet />
      <Footer />
    </main>
  );
}
