"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] mt-24 lg:mt-28 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Video / Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-20 w-full max-w-[1240px] px-4 mx-auto flex flex-col items-center mt-[-40px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="font-serif text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] font-light text-white text-center drop-shadow-lg mb-4 lg:mb-6">
            Решим ваш квартирный <br/> вопрос за <span className="text-accent">14&nbsp;дней</span>
          </h1>
          
          <ul className="flex flex-col text-sm sm:text-base md:text-xl lg:text-2xl font-light text-white/90 gap-2 sm:gap-3 drop-shadow-md text-center mt-2 lg:mt-4">
            <li>&bull; срочная продажа и выкуп квартир</li>
            <li>&bull; покупка квартир бизнес и премиум-класса</li>
            <li>&bull; обмен с доплатой и без</li>
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link 
              href="#cta-form"
              className="bg-accent hover:bg-[#d4b896] text-dark font-semibold uppercase tracking-[0.1em] px-8 py-4 rounded-xl transition-all duration-300 text-sm sm:text-base text-center"
            >
              Бесплатная консультация
            </Link>
            <Link
              href="/catalog"
              className="border border-white/30 hover:border-accent/60 text-white font-light uppercase tracking-[0.1em] px-8 py-4 rounded-xl transition-all duration-300 text-sm sm:text-base text-center backdrop-blur-md bg-white/5"
            >
              Смотреть каталог
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
