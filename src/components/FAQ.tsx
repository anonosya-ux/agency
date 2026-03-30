"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Как приобрести жилую недвижимость в браке, чтобы при разводе она досталась одному из супругов?",
    a: "Для этого необходимо заключить брачный договор, в котором прописать условия раздельной собственности на конкретный объект. Наши юристы помогут подготовить все документы и проведут сделку с учётом этих условий."
  },
  {
    q: "Что нужно знать при покупке квартиры с использованием материнского капитала?",
    a: "Необходимо выделить доли детям в приобретаемом жилье. Мы контролируем весь процесс: от согласования с Пенсионным фондом до регистрации права собственности, чтобы все требования закона были соблюдены."
  },
  {
    q: "Можно ли продать свою долю в квартире?",
    a: "Да, но сперва нужно уведомить остальных собственников о намерении продать долю — они имеют преимущественное право покупки. Если в течение 30 дней отказ не получен, можно продавать третьим лицам. Мы берём на себя всю юридическую подготовку."
  },
  {
    q: "Проводите ли вы сделку под ключ?",
    a: "Да. Мы сопровождаем клиента на каждом этапе: поиск объекта, проверка юридической чистоты, переговоры, оформление документов, расчёты и передача ключей. Оплата только за результат."
  },
  {
    q: "Как заказать услугу?",
    a: "Позвоните нам по телефону +7 (995) 113-89-37 или оставьте заявку на сайте. Мы свяжемся с вами в течение 15 минут и проведём бесплатную консультацию по вашему запросу."
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
                <span className="text-[#C1A080] flex-shrink-0">
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
