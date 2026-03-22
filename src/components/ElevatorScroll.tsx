"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Spline from '@splinetool/react-spline';

export function ElevatorScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background Image Parallax (Moving the building structure up as we "scroll down")
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);
  // Background overlay darkening
  const bgOpacity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0.4, 0.6, 0.7, 0.8, 0.9]);

  // Scene 1: Main Title (0% - 25%)
  const s1Opacity = useTransform(smoothProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const s1Y = useTransform(smoothProgress, [0, 0.25], ["0%", "-50%"]);
  // Magnetic reveal path
  const mask2 = useTransform(smoothProgress, [0.2, 0.3], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
  const s2Y = useTransform(smoothProgress, [0.2, 0.3, 0.55], ["50%", "0%", "-20%"]);
  
  const mask3 = useTransform(smoothProgress, [0.45, 0.55], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
  const s3Y = useTransform(smoothProgress, [0.45, 0.55, 0.8], ["50%", "0%", "-20%"]);

  const mask4 = useTransform(smoothProgress, [0.7, 0.8], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
  const s4Y = useTransform(smoothProgress, [0.7, 0.8, 1], ["50%", "0%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden text-[#1A1A1A] flex items-center justify-center">
        
        {/* Interactive 3D Spline Layer (R4X Bot or similar 3D Object) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-auto">
          {/* Note: Replace this URL with the EXACT Export URL from your Spline file export panel */}
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>

        {/* Cinematic Backdrop */}
        <motion.div 
          className="absolute inset-0 w-full h-[140%] -top-[20%] -z-10"
          style={{ y: bgY }}
        >
          <Image 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
            alt="Moscow Real Estate"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-white"
          style={{ opacity: bgOpacity }}
        />

        {/* Scene 1: Top of the Building */}
        <motion.div 
          style={{ opacity: s1Opacity, y: s1Y }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10"
        >
          <div className="overflow-hidden">
            <motion.p initial={{y: "100%"}} animate={{y: 0}} transition={{delay: 1, duration: 1}} className="text-xs uppercase tracking-[0.3em] mb-6 text-[#C5A059] font-semibold tracking-[0.4em]">Фатюхин и Ко • AI Real Estate</motion.p>
          </div>
          <div className="overflow-hidden py-4">
            <motion.h1 initial={{y: "100%"}} animate={{y: 0}} transition={{delay: 1.2, duration: 1.2, ease: [0.76, 0, 0.24, 1]}} className="font-serif text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter">
              Новая эра <br/> элитной <br/> недвижимости.
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-8">
            <motion.p initial={{y: "100%"}} animate={{y: 0}} transition={{delay: 1.5, duration: 1}} className="max-w-xl text-lg font-light text-[#1A1A1A]/70 mix-blend-difference">
              Искусственный интеллект и глубокая аналитика для покупки и продажи off-market объектов с максимальной доходностью.
            </motion.p>
          </div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2}} className="flex flex-col items-center gap-4 text-gray-400 mt-16 animate-pulse">
            <span className="text-[10px] uppercase tracking-[0.3em]">Лифт вниз</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Scene 2: Penthouses */}
        <motion.div 
          style={{ clipPath: mask2, pointerEvents: "auto" }}
          className="absolute inset-0 bg-white flex flex-col items-center justify-center md:flex-row gap-12 px-8 max-w-[100vw] mx-auto z-20"
        >
          <motion.div className="w-full md:w-1/2 md:pl-24" style={{ y: s2Y }}>
            <span className="text-xs uppercase tracking-[0.2em] block mb-4 text-[#C5A059] flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#C5A059]" /> Топ Локации
            </span>
            <h2 className="font-serif text-[8vw] md:text-7xl leading-[0.9] tracking-tighter mb-8">Новостройки<br/>Бизнес-класса</h2>
            <p className="text-[#1A1A1A]/70 font-light text-xl mb-10 max-w-md">Современные жилые комплексы в развитых районах. Удобные планировки, паркинги и инфраструктура для комфортной жизни.</p>
            <button data-magnetic="true" className="group relative overflow-hidden border border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 uppercase tracking-widest text-xs font-medium transition-colors">
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Смотреть лоты</span>
              <div className="absolute inset-0 bg-[#1A1A1A] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
            </button>
          </motion.div>
          <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-[4/5] relative overflow-hidden">
            <motion.div style={{ y: useTransform(smoothProgress, [0.2, 0.4], ["-20%", "20%"]) }} className="absolute inset-[-20%]">
              <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000" alt="Apartment" fill className="object-cover" />
            </motion.div>
          </div>
        </motion.div>

        {/* Scene 3: Residences */}
        <motion.div 
          style={{ clipPath: mask3, pointerEvents: "auto" }}
          className="absolute inset-0 bg-[#F8F8F8] flex flex-col items-center justify-center md:flex-row-reverse gap-12 px-8 max-w-[100vw] mx-auto z-30"
        >
          <motion.div className="w-full md:w-1/2 md:pr-24" style={{ y: s3Y }}>
            <span className="text-xs uppercase tracking-[0.2em] block mb-4 text-[#C5A059] flex items-center md:justify-end gap-4">
              Загородная <span className="w-12 h-[1px] bg-[#C5A059]" />
            </span>
            <h2 className="font-serif text-[8vw] md:text-7xl leading-[0.9] tracking-tighter mb-8 md:text-right">Загородные<br/>Дома</h2>
            <p className="text-[#1A1A1A]/70 font-light text-xl mb-10 max-w-md md:ml-auto md:text-right">Коттеджи и таунхаусы в экологически чистых направлениях Подмосковья для всей семьи.</p>
            <div className="flex md:justify-end">
              <button data-magnetic="true" className="group relative overflow-hidden border border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 uppercase tracking-widest text-xs font-medium transition-colors">
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Изучить проекты</span>
                <div className="absolute inset-0 bg-[#1A1A1A] transform scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              </button>
            </div>
          </motion.div>
          <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-[4/5] relative overflow-hidden">
            <motion.div style={{ y: useTransform(smoothProgress, [0.45, 0.65], ["-20%", "20%"]) }} className="absolute inset-[-20%]">
              <Image src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2000" alt="House" fill className="object-cover" />
            </motion.div>
          </div>
        </motion.div>

        {/* Scene 4: Ground Floor / Entrance */}
        <motion.div 
          style={{ clipPath: mask4, y: s4Y, pointerEvents: "auto" }}
          className="absolute inset-0 bg-[#C5A059] flex flex-col items-center justify-center text-center px-4 z-40 text-white"
        >
          <span className="text-xs uppercase tracking-[0.2em] mb-6 font-medium text-white/70">Private Banking в Недвижимости</span>
          <h2 className="font-serif text-[10vw] md:text-[8vw] leading-[0.9] tracking-tighter mb-10">
            Капитал. <br/>Статус. <br/>Приватность.
          </h2>
          <p className="text-white/80 font-light text-xl mb-12 max-w-xl">
            Оставим роботам аналитику, а людям — наслаждение жизнью. Оценим актив за 2 часа, выйдем на сделку за 3 дня.
          </p>
          <button data-magnetic="true" className="group relative overflow-hidden bg-white text-[#1A1A1A] px-12 py-6 uppercase tracking-[0.3em] text-xs font-bold shadow-2xl transition-transform hover:scale-105 duration-500">
            <span className="relative z-10">Записаться на консультацию</span>
          </button>
        </motion.div>

        {/* Progress Bar (Elevator shaft indicator) */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-[2px] h-48 bg-white/20 z-50 overflow-hidden">
          <motion.div 
            className="w-full bg-[#C5A059]" 
            style={{ height: "100%", originY: 0, scaleY: smoothProgress }} 
          />
        </div>

      </div>
    </div>
  );
}
