"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Landmark, Percent, BadgeCheck, FileText, CreditCard, Building } from "lucide-react";
import { TrustBanner } from "@/components/TrustBanner";
import { Footer } from "@/components/Footer";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { BlogPreview } from "@/components/BlogPreview";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { motion } from "framer-motion";

const banks = [
  { name: "Сбер", rate: "от 5,3%", note: "Субсидия застройщика" },
  { name: "ВТБ", rate: "от 5,5%", note: "Ипотека с ИТ-льготой" },
  { name: "Альфа-Банк", rate: "от 5,9%", note: "Семейная ипотека" },
  { name: "Газпромбанк", rate: "от 6,0%", note: "Военная ипотека" },
  { name: "Росбанк", rate: "от 6,2%", note: "Рефинансирование" },
  { name: "ДОМ.РФ", rate: "от 4,5%", note: "Господдержка" },
];

const services = [
  { icon: Percent, title: "Субсидированные ставки", desc: "Доступ к эксклюзивным программам от застройщиков со ставками от 0,01% на период строительства." },
  { icon: CreditCard, title: "Материнский капитал", desc: "Легальные схемы интеграции маткапитала в покупку недвижимости премиум-сегмента." },
  { icon: BadgeCheck, title: "Предодобрение за 48 часов", desc: "Подаём заявки сразу в несколько банков и получаем лучшие условия." },
  { icon: FileText, title: "Сложные сделки", desc: "Нестандартные случаи: ИП, самозанятые, иностранные граждане, сложная кредитная история." },
];

export default function FinancePage() {
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
              <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Для Покупателей</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] max-w-4xl mb-8 uppercase font-semibold text-dark">
                Финансирование и <br/><span className="text-[#C1A080] font-light">ипотека.</span>
              </h1>
              <p className="text-lg font-light text-gray-600 max-w-2xl leading-relaxed mb-12">
                Сложные ипотечные сделки с чеком от 50 млн рублей. Привлечение финансирования, субсидированные ставки от застройщиков и легальные схемы интеграции материнского капитала в премиум-сегменте. Индивидуальные условия от банков-партнеров.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/79951138937?text=${encodeURIComponent('Здравствуйте! Интересует помощь с одобрением ипотеки.')}`} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-text text-white px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-accent transition-all rounded-full">
                  Получить расчёт
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="#calc" className="group flex items-center justify-center gap-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gray-50 transition-all rounded-full">
                  Калькулятор ипотеки
                </a>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop")' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Что мы делаем</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] uppercase font-light">
              Финансовые <span className="text-[#C1A080]">услуги</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#C1A080]/40 hover:shadow-lg transition-all"
              >
                <s.icon className="w-10 h-10 text-[#C1A080] mb-4" />
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{s.title}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Banks */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Партнёры</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white uppercase font-light mb-4">
              Банки-<span className="text-[#C1A080]">партнёры</span>
            </h2>
            <p className="text-white/50 font-light">Подаём заявки одновременно в 12+ банков для получения лучших условий</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {banks.map((bank, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md hover:border-[#C1A080]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Landmark className="w-5 h-5 text-[#C1A080]" />
                  <h4 className="text-white font-medium">{bank.name}</h4>
                </div>
                <p className="text-[#C1A080] font-serif text-2xl mb-1">{bank.rate}</p>
                <p className="text-white/40 text-xs">{bank.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div id="calc">
        <MortgageCalculator />
      </div>
      
      <TrustBanner />
      <Cases />
      <Team />
      <FAQ />
      <BlogPreview />
      <Footer />
    </main>
  );
}
