"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Как быстро вы сможете продать мою квартиру?",
    a: "Средний срок экспозиции объектов у нас составляет от 14 до 30 дней благодаря нашему пулу инвесторов и премиальному маркетингу."
  },
  {
    q: "В чем ваша гарантия юридической чистоты?",
    a: "Каждая сделка застрахована. Мы проводим глубокий due diligence объекта перед покупкой, защищая капитал клиента на 100%."
  },
  {
    q: "Вы работаете только с элитной недвижимостью?",
    a: "Наш фокус — бизнес, премиум и делюкс сегменты в Москве и ближайшем Подмосковье, но мы также берем в работу высоколиквидные объекты комфорт-класса."
  },
  {
    q: "Как происходит срочный выкуп?",
    a: "Мы оцениваем ваш объект за 2 часа, согласовываем дисконт к рыночной цене (до 10%) и переводим деньги или кладем на аккредитив за счет собственных средств агентства в течение 3-х дней."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-[#F8F8F8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] text-center mb-16">Частые вопросы</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-[#EAEAEA] bg-white transition-colors duration-300 ${openIndex === idx ? 'border-[#1A1A1A]' : 'hover:border-gray-300'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-6 flex justify-between items-center"
              >
                <span className="font-serif text-xl pr-8">{faq.q}</span>
                <span className="text-[#C5A059] flex-shrink-0">
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-500 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
