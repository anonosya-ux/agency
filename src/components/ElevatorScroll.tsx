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
  const s1Scale = useTransform(smoothProgress, [0, 0.25], [1, 0.9]);

  // Scene 2: Penthouses (25% - 50%)
  const s2Opacity = useTransform(smoothProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const s2Y = useTransform(smoothProgress, [0.2, 0.3, 0.55], ["20%", "0%", "-20%"]);
  const s2Scale = useTransform(smoothProgress, [0.2, 0.3, 0.55], [0.95, 1, 1.05]);

  // Scene 3: Residences (50% - 75%)
  const s3Opacity = useTransform(smoothProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const s3Y = useTransform(smoothProgress, [0.45, 0.55, 0.8], ["20%", "0%", "-20%"]);
  const s3Scale = useTransform(smoothProgress, [0.45, 0.55, 0.8], [0.95, 1, 1.05]);

  // Scene 4: Ground Floor / Final CTA (75% - 100%)
  const s4Opacity = useTransform(smoothProgress, [0.7, 0.8, 1], [0, 1, 1]);
  const s4Y = useTransform(smoothProgress, [0.7, 0.8, 1], ["20%", "0%", "0%"]);
  const s4Scale = useTransform(smoothProgress, [0.7, 0.8, 1], [0.95, 1, 1]);

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
          style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-6 text-[#C5A059]">Фатюхин и Ко</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
            Стремление <br/> к совершенству.
          </h1>
          <p className="max-w-xl text-lg font-light opacity-80 mb-12">
            Скролльте вниз, чтобы погрузиться в архитектурный процесс и эксклюзивную недвижимость.
          </p>
          <div className="flex flex-col items-center gap-4 opacity-50 animate-bounce">
            <span className="text-[10px] uppercase tracking-widest">Скролл вниз</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Scene 2: Penthouses */}
        <motion.div 
          style={{ opacity: s2Opacity, y: s2Y, scale: s2Scale, pointerEvents: s2Opacity.get() === 0 ? "none" : "auto" }}
          className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12 px-8 max-w-7xl mx-auto z-20"
        >
          <div className="w-full md:w-1/2">
            <span className="text-xs uppercase tracking-[0.2em] block mb-4 text-[#C5A059] flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C5A059]" /> Топ Локации
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Новостройки Бизнес-класса</h2>
            <p className="text-gray-500 font-light text-lg mb-8 max-w-md">Современные жилые комплексы в развитых районах. Удобные планировки, паркинги и инфраструктура для комфортной жизни.</p>
            <button className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors">
              Смотреть лоты
            </button>
          </div>
          <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] relative">
            <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000" alt="Apartment" fill className="object-cover shadow-2xl" />
          </div>
        </motion.div>

        {/* Scene 3: Residences */}
        <motion.div 
          style={{ opacity: s3Opacity, y: s3Y, scale: s3Scale, pointerEvents: s3Opacity.get() === 0 ? "none" : "auto" }}
          className="absolute inset-0 flex flex-col md:flex-row-reverse items-center justify-center gap-12 px-8 max-w-7xl mx-auto z-30"
        >
          <div className="w-full md:w-1/2">
            <span className="text-xs uppercase tracking-[0.2em] block mb-4 text-[#C5A059] flex items-center justify-end gap-4">
              Загородная <span className="w-8 h-[1px] bg-[#C5A059]" />
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 md:text-right">Загородные Дома</h2>
            <p className="text-gray-500 font-light text-lg mb-8 max-w-md md:ml-auto md:text-right">Коттеджи и таунхаусы в экологически чистых направлениях Подмосковья для всей семьи.</p>
            <div className="flex md:justify-end">
              <button className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors">
                Изучить проекты
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] relative">
            <Image src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2000" alt="House" fill className="object-cover shadow-2xl" />
          </div>
        </motion.div>

        {/* Scene 4: Ground Floor / Entrance */}
        <motion.div 
          style={{ opacity: s4Opacity, y: s4Y, scale: s4Scale, pointerEvents: s4Opacity.get() === 0 ? "none" : "auto" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-40 bg-gradient-to-t from-white via-transparent to-transparent"
        >
          <span className="text-xs uppercase tracking-[0.2em] mb-4 text-[#C5A059]">Уровень 1</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-6">Ваша сделка <br/>начинается здесь.</h2>
          <p className="text-gray-500 font-light text-lg mb-10 max-w-lg">Продажа, покупка, коммерция или срочный выкуп.</p>
          <button className="bg-[#1A1A1A] text-white px-10 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-[#C5A059] transition-colors">
            Выбрать направление
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
