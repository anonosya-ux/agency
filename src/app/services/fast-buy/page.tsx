"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Wallet, Shield, FileCheck, Zap, CircleDollarSign } from "lucide-react";
import { TrustBanner } from "@/components/TrustBanner";
import { Footer } from "@/components/Footer";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { BlogSnippet } from "@/components/BlogSnippet";
import { motion } from "framer-motion";

import Image from "next/image";

// ... existing code ...

const timeline = [
  { day: "День 1", icon: Zap, title: "Обращение и оценка", desc: "Вы звоните — мы выезжаем на объект в течение 2 часов. Проводим экспресс-оценку рыночной стоимости." },
  { day: "День 1-2", icon: Wallet, title: "Аванс", desc: "При согласии с ценой выплачиваем аванс наличными или безналично в день обращения." },
  { day: "День 2-5", icon: FileCheck, title: "Проверка документов", desc: "Полная юридическая экспертиза: выписка ЕГРН, обременения, неоплаченные налоги." },
  { day: "День 3-7", icon: CircleDollarSign, title: "Полный расчёт", desc: "Подписание ДКП, полная оплата через аккредитив. Сделка в течение 3-7 рабочих дней." },
];

const conditions = [
  { num: "от 3", label: "дней на сделку" },
  { num: "85-90%", label: "от рыночной стоимости" },
  { num: "24ч", label: "на принятие решения" },
  { num: "100%", label: "конфиденциальность" },
];

export default function FastBuyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors mb-12 font-bold">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Для Владельцев</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] max-w-4xl mb-8 uppercase font-semibold text-[#1A1A1A]">
                Срочный выкуп <br/><span className="text-[#C1A080] font-light">квартир в Москве.</span>
              </h1>
              <p className="text-lg font-light text-[#7A7A7A] max-w-2xl leading-relaxed mb-6">
                Выкупаем квартиры за собственные средства агентства за 3–7 дней. До 95% от рыночной стоимости. Аванс в день обращения.
              </p>
              <div className="text-sm text-[#7A7A7A] font-light mb-12 space-y-1">
                <p>✓ Квартира в ипотеке — поможем закрыть</p>
                <p>✓ Долги за ЖКХ — решаем за вас</p>
                <p>✓ Нужны деньги срочно — расчёт за 3 дня</p>
                <p>✓ Совладельцы против продажи — найдём выход</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/79951138937?text=${encodeURIComponent('Здравствуйте! Хочу получить онлайн оценку моей недвижимости для срочного выкупа.')}`} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-text text-white px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-accent transition-all rounded-full">
                  Получить оценку онлайн
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="tel:+79951138937" className="group flex items-center justify-center gap-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gray-50 transition-all rounded-full">
                  Позвонить сейчас
                </a>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden rounded-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
                alt="Срочный выкуп квартир в Москве: быстрая оценка недвижимости и выкуп за 3 дня"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Counter */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {conditions.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-serif text-4xl md:text-5xl text-[#C1A080] mb-2">{c.num}</p>
              <p className="text-white/60 text-sm font-light">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C1A080] block mb-4">Как это работает</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] uppercase font-light">
              Срочный выкуп <span className="text-[#C1A080]">за 3-7 дней</span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#C1A080]/30 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-8 items-start"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center flex-shrink-0 relative z-10">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 pb-8 border-b border-gray-100">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-2 font-medium">{step.day}</span>
                    <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{step.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
