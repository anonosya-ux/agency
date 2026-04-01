"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Shield, Search, FileCheck, Key, Banknote, UserCheck } from "lucide-react";
import { TrustBanner } from "@/components/TrustBanner";
import { Footer } from "@/components/Footer";
import { Quiz } from "@/components/Quiz";
import { FAQ } from "@/components/FAQ";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { BlogSnippet } from "@/components/BlogSnippet";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { motion } from "framer-motion";

const steps = [
  { icon: UserCheck, title: "Консультация", desc: "Определяем ваши потребности, бюджет и ключевые критерии. Бесплатно." },
  { icon: Search, title: "Подбор объектов", desc: "Предоставляем эксклюзивные off-market варианты и новостройки с дисконтом до 15%." },
  { icon: Shield, title: "Юридическая проверка", desc: "Полная верификация документов: обременения, судебные споры, история собственности." },
  { icon: Banknote, title: "Одобрение ипотеки", desc: "Сопровождаем заявку в 12+ банках-партнёрах. Ставки от 4,5% по субсидии." },
  { icon: FileCheck, title: "Сделка и регистрация", desc: "Организуем взаиморасчёты через аккредитив, подаём на регистрацию в Росреестр." },
  { icon: Key, title: "Передача ключей", desc: "Проверяем состояние квартиры, подписываем акт и передаём ключи." },
];

const advantages = [
  { num: "350+", label: "off-market объектов в базе" },
  { num: "12", label: "банков-партнёров" },
  { num: "0%", label: "комиссия для покупателя" },
  { num: "48ч", label: "предварительное одобрение" },
];

export default function BuyPage() {
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
              <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Для Покупателей</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.1] mb-8 font-semibold uppercase">
                Подбор идеального <br/><span className="text-[#C1A080] font-light">актива.</span>
              </h1>
              <p className="text-lg text-gray-500 font-light mb-12 max-w-lg leading-relaxed">
                Открываем доступ к закрытым пулам застройщиков (off-market) и ликвидным объектам Москвы с премиальным дисконтом. Мы не просто ищем квартиру — мы формируем ваш надежный инвестиционный портфель с юридической гарантией.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => { document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="group flex items-center justify-center gap-3 bg-text text-bg px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-accent hover:text-white transition-all rounded-full"
                >
                  Пройти квиз подбора
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <Link 
                  href="/catalog"
                  className="group flex items-center justify-center gap-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gray-50 transition-all rounded-full"
                >
                  Смотреть каталог
                </Link>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop")' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages counter */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-serif text-4xl md:text-5xl text-[#C1A080] mb-2">{a.num}</p>
              <p className="text-white/60 text-sm font-light">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Step-by-step process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Пошаговый процесс</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] uppercase font-light">
              Как мы <span className="text-[#C1A080]">работаем</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 border border-gray-200 rounded-2xl hover:border-[#C1A080]/40 transition-colors group"
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

      <MortgageCalculator />
      <TrustBanner />
      <Cases />
      <Team />
      <FAQ />
      <BlogSnippet />
      <Footer />
      <div id="quiz-section">
        <Quiz />
      </div>
    </main>
  );
}
