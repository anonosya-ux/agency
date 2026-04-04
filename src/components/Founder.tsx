"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Founder() {
  return (
    <section className="py-24 px-4 bg-light-gray">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24">
        
        {/* Left: Founder Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12 aspect-[3/4] relative rounded-lg overflow-hidden shrink-0 shadow-2xl"
        >
          <Image 
            src="/images/team/vitaly_f.jpeg" 
            alt="Виталий Фатюхин" 
            fill 
            className="object-cover transition-all duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Right: Founder Speech */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-7/12 flex flex-col gap-8"
        >
          <span className="text-sm uppercase tracking-[0.2em] font-medium text-accent flex items-center gap-4">
            <span className="w-8 h-[1px] bg-accent" /> Слово Основателя
          </span>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-[1.2] text-dark">
            «Для нас хорошая сделка — это не подписанный договор. Это уверенность клиента, что его капитал находится в абсолютной безопасности.»
          </h2>

          <div className="flex flex-col gap-6 text-gray-500 font-light text-lg">
            <p>
              В недвижимости не бывает мелочей. Когда речь идет о сотнях миллионов рублей, любая недосказанность, юридическая небрежность или попытка срезать углы может обернуться катастрофой. 
            </p>
            <p>
              Именно поэтому мы строим свою работу на принципах Private Banking. Мы не пытаемся продать быстрее. Мы проводим глубочайшую юридическую проверку (21 пункт Legal Check), согласовываем безопасные схемы расчетов и ведем прозрачную коммуникацию от первого звонка до получения выписки из ЕГРН.
            </p>
            <p>
              Моя личная гарантия: мы не входим в сделки, в которых есть хотя бы 1% юридического или финансового непрогнозируемого риска для клиента.
            </p>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-8 flex items-center justify-between">
            <div>
              <p className="font-serif text-2xl text-dark">Виталий Фатюхин</p>
              <p className="text-base text-gray-400 uppercase tracking-widest mt-1">Основатель, Управляющий партнер</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
