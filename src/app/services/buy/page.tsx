"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { TrustBanner } from "@/components/TrustBanner";
import { Footer } from "@/components/Footer";
import { Quiz } from "@/components/Quiz";
import { FAQ } from "@/components/FAQ";
import { Cases } from "@/components/Cases";
import { Team } from "@/components/Team";
import { BlogSnippet } from "@/components/BlogSnippet";
import { useState } from "react";

export default function BuyPage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <main className="min-h-screen">
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
                  onClick={() => setIsQuizOpen(true)}
                  className="group flex items-center justify-center gap-3 bg-[#1A1A1A] text-text px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-[#C1A080] transition-all"
                >
                  Пройти квиз подбора
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <Link 
                  href="/catalog"
                  className="group flex items-center justify-center gap-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gray-50 transition-all"
                >
                  Смотреть каталог
                </Link>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop")' }}
              />
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
      
      <Quiz />
    </main>
  );
}
