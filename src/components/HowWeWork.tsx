"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Знакомство & Оценка", desc: "Анализируем объект, определяем рыночную стоимость и составляем стратегию: продажа, срочный выкуп или юридическая проверка." },
  { id: "02", title: "Эксклюзивный договор", desc: "Подписываем прозрачное соглашение. Мы берем на себя все риски и маркетинг, вы получаете персонального брокера 24/7." },
  { id: "03", title: "Упаковка & Продвижение", desc: "Профессиональный хоум-стейджинг, фотосъемка архитектурного уровня и размещение в приватных базах и на премиум-площадках." },
  { id: "04", title: "Сделка & Расчет", desc: "Проводим показы, торгуемся в ваших интересах. Обеспечиваем безопасные расчеты и 100% юридическую чистоту." }
];

export function HowWeWork() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-4">Процесс</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A]">Как мы работаем</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-6 left-6 right-6 h-[1px] bg-gray-200" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative relative z-10"
            >
              <div className="w-12 h-12 bg-white border border-[#EAEAEA] flex items-center justify-center font-serif text-lg text-[#C5A059] mb-8 group-hover:bg-[#1A1A1A] transition-colors">
                {step.id}
              </div>
              <h3 className="font-serif text-xl mb-4 text-[#1A1A1A]">{step.title}</h3>
              <p className="text-sm font-light text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
