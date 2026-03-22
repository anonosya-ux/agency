"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// 10/10 Senior Dev: Code-splitting the heavy WebGL engine so it doesn't block the main thread.
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 border border-gray-100/50 rounded-2xl animate-pulse">
      <span className="text-[10px] uppercase tracking-widest text-[#C5A059]">Инициализация AI...</span>
    </div>
  ),
});

export function AIEvaluation() {
  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Copywriting (10/10 Marketer) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#C5A059] mb-6 block">Fatukhin Vision™</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1A1A1A] mb-8">
            Оценка <br /> алгоритмами.
          </h2>
          <p className="text-gray-500 font-light text-lg mb-10 max-w-md">
            Вместо того, чтобы гадать о стоимости вашей недвижимости, наш R4X Bot анализирует сотни скрытых сделок, предсказывая реальную рыночную стоимость с точностью до 1%.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-sm font-medium tracking-wide uppercase text-gray-400">+15% к цене сделки</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-sm font-medium tracking-wide uppercase text-gray-400">Срок экспозиции 14 дней</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Spline R4X Bot Container (10/10 Designer) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/3] w-full"
        >
          <div className="absolute inset-0 z-0 pointer-events-auto cursor-crosshair">
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 text-[10px] tracking-widest uppercase text-gray-400 pointer-events-none">
            Interactive WebGL
          </div>
        </motion.div>

      </div>
    </section>
  );
}
