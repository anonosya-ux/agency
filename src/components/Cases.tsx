"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Cases() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-4">Результаты</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] mb-8">Наши кейсы</h2>
            <p className="text-gray-500 font-light mb-8">Только цифры и факты. Как мы продали неликвид, как заработали инвесторам 30% годовых и как проводим сделки за 3 дня.</p>
            <button className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors">
              Смотреть портфолио
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F8F8F8] p-8 border border-[#EAEAEA]"
            >
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">ЖК Лица</h3>
              <p className="text-sm text-gray-400 mb-6">Продано за 11 дней.</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="textxs uppercase tracking-widest text-gray-400 mb-1">Выгода клиента</p>
                  <p className="text-2xl font-medium text-[#C5A059]">+15% к рынку</p>
                </div>
              </div>
            </motion.div>
            
            <div className="bg-[#F8F8F8] p-8 border border-[#EAEAEA]">
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">Особняк на Остоженке</h3>
              <p className="text-sm text-gray-400 mb-6">Сложная цепочка сделок.</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="textxs uppercase tracking-widest text-gray-400 mb-1">Сумма сделки</p>
                  <p className="text-2xl font-medium text-[#C5A059]">450 млн ₽</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
