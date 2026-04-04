"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Building2, TrendingUp, ShieldCheck, Landmark, PieChart, FileSearch } from "lucide-react";
import { TrustBanner } from "@/components/TrustBanner";
import { Footer } from "@/components/Footer";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { BlogPreview } from "@/components/BlogPreview";
import { motion } from "framer-motion";

const commercialTypes = [
  { icon: Building2, title: "Стрит-ритейл", desc: "Помещения на первых этажах с отдельным входом и высоким трафиком. Арендаторы «Магнит», «Пятёрочка», аптеки." },
  { icon: Landmark, title: "Офисы A/B класса", desc: "Бизнес-центры с профессиональным управлением, парковкой, охраной. Долгосрочные арендаторы." },
  { icon: TrendingUp, title: "Готовый арендный бизнес (ГАБ)", desc: "Помещения с действующими арендаторами и подтверждёнными денежными потоками. Доходность 8-14%." },
  { icon: PieChart, title: "Инвестиционные лоты", desc: "Объекты с перспективой капитализации: на стадии строительства, в зонах редевелопмента." },
];

const gabAdvantages = [
  "Средняя доходность: 8–14% годовых",
  "Пассивный доход с первого месяца",
  "Надёжные федеральные арендаторы",
  "Полная юридическая проверка (due diligence)",
  "Проверка платёжеспособности арендатора",
  "Анализ локации и конкурентного окружения",
];

export default function CommercialPage() {
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
              <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Для Инвесторов</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] max-w-4xl mb-8 uppercase font-semibold text-dark">
                Коммерческая <br/><span className="text-[#C1A080] font-light">недвижимость.</span>
              </h1>
              <p className="text-lg font-light text-gray-600 max-w-2xl leading-relaxed mb-12">
                Поиск, независимая оценка и брокеридж высокодоходных стрит-ритейл объектов, бизнес-центров А-класса и готового арендного бизнеса (ГАБ). Мы находим недооценённые off-market активы с потенциалом твердой капитализации и обеспечиваем абсолютную юридическую защиту капитала.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/79951138937?text=${encodeURIComponent('Здравствуйте! Интересует подборка ГАБ и коммерческой недвижимости.')}`} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-text text-white px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-accent transition-all rounded-full">
                  Запросить подборку ГАБ
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <Link href="/catalog?category=commercial" className="group flex items-center justify-center gap-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gray-50 transition-all rounded-full">
                  Коммерческие объекты
                </Link>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop")' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Commercial RE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Типы объектов</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] uppercase font-light">
              Виды <span className="text-[#C1A080]">инвестиций</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#C1A080]/40 hover:shadow-lg transition-all"
              >
                <type.icon className="w-10 h-10 text-[#C1A080] mb-4" />
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">{type.title}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GAB Advantages */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Готовый арендный бизнес</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white uppercase font-light mb-12">
            Почему <span className="text-[#C1A080]">ГАБ?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {gabAdvantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 border border-white/10 rounded-xl"
              >
                <ShieldCheck className="w-5 h-5 text-[#C1A080] flex-shrink-0" />
                <span className="text-white/80 text-sm font-light">{adv}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustBanner />
      <Cases />
      <Team />
      <FAQ />
      <BlogPreview />
      <Footer />
    </main>
  );
}
