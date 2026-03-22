"use client";

import { motion } from "framer-motion";

export function TrustBanner() {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center px-6 pt-6 md:pt-0"
          >
            <span className="font-serif text-5xl lg:text-7xl mb-4 text-[#C5A059]">100%</span>
            <h4 className="font-medium uppercase tracking-[0.1em] text-sm mb-2">Финансовая защита</h4>
            <p className="font-light text-white/50 text-sm">Гарантируем чистоту каждой сделки и защищаем ваш капитал</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center px-6 pt-6 md:pt-0"
          >
            <span className="font-serif text-5xl lg:text-7xl mb-4 text-[#C5A059]">14</span>
            <h4 className="font-medium uppercase tracking-[0.1em] text-sm mb-2">Дней в среднем</h4>
            <p className="font-light text-white/50 text-sm">От публикации лота до выхода на эксклюзивную сделку</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center px-6 pt-6 md:pt-0"
          >
            <span className="font-serif text-5xl lg:text-7xl mb-4 text-[#C5A059]">&gt;30</span>
            <h4 className="font-medium uppercase tracking-[0.1em] text-sm mb-2">Объектов в работе</h4>
            <p className="font-light text-white/50 text-sm">Формируем портфель инвестиционной недвижимости</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
