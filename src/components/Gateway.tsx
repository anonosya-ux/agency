"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Gateway() {
  const directions = [
    {
      title: "Элитная недвижимость",
      desc: "Квартиры, пентхаусы и особняки в Москве, Дубае и на Пхукете. Закрытые базы и off-market лоты.",
      link: "/services/buy",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000"
    },
    {
      title: "Коммерческая",
      desc: "Офисы А-класса, стрит-ритейл, готовый арендный бизнес (ГАБ). Доходность под контролем.",
      link: "/services/commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
    },
    {
      title: "Загородная",
      desc: "Резиденции и участки на Рублево-Успенском и Новорижском шоссе. Абсолютная приватность.",
      link: "/services/countryside",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000"
    },
    {
      title: "Ипотека & Срочный выкуп",
      desc: "Сложные одобрения, маткапитал в премиуме. Срочный выкуп дисконтных лотов за 3 дня за счет фонда.",
      link: "/services/finance",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#1A1A1A] text-text">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#C1A080] mb-4 block">Компетенции полного цикла</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]">
              Управляем недвижимостью<br/>во всех секторах рынка.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {directions.map((dir, idx) => (
            <Link key={idx} href={dir.link} className="group relative aspect-[16/9] md:aspect-square lg:aspect-[4/3] overflow-hidden bg-black flex flex-col justify-end p-8 border border-text/10 hover:border-[#C1A080]/50 transition-colors">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
                style={{ backgroundImage: `url(${dir.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-serif text-3xl md:text-4xl">{dir.title}</h3>
                  <div className="w-12 h-12 rounded-full border border-text/20 flex items-center justify-center group-hover:bg-[#C1A080] group-hover:border-[#C1A080] group-hover:text-black transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-text/70 font-light text-lg max-w-md line-clamp-2 group-hover:text-text transition-colors">
                  {dir.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
