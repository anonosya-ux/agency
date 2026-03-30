"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BROKERS = [
  {
    name: "Виталий Фатюхин",
    role: "Основатель, Управляющий Партнер",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000"
  },
  {
    name: "Екатерина Соколова",
    role: "Директор по продажам элитной недвижимости",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000"
  },
  {
    name: "Михаил Державин",
    role: "Руководитель департамента инвестиций",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000"
  }
];

export function Team() {
  return (
    <section className="py-24 px-4 bg-[#1A1A1A] text-text overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Инсайдеры</span>
          <h2 className="font-serif text-4xl lg:text-5xl">Команда Экспертов</h2>
        </motion.div>

        <div className="grid grid-cols-1 justify-center md:grid-cols-3 gap-8">
          {BROKERS.map((broker, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-black/50 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={broker.image} 
                  alt={broker.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl mb-1 group-hover:text-[#C1A080] transition-colors">{broker.name}</h3>
              <p className="text-xs uppercase tracking-widest text-text/50">{broker.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
