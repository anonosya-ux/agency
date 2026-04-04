'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { value: 61, label: 'Отзывов', desc: 'На Яндекс.Картах' },
  { value: 15, label: 'Лет', desc: 'Безупречной репутации' },
  { value: 100, label: 'Млрд ₽+', desc: 'Объем продаж за 2025' },
  { value: 50, label: 'Наград', desc: 'На престижных премиях' },
];

const awardsData = [
  '/images/awards/award_new_1.jpeg',
  '/images/awards/award_new_2.jpeg',
  '/images/awards/award_new_3.jpeg',
  '/images/awards/award_new_4.jpeg',
  '/images/awards/award_new_5.jpeg',
  '/images/awards/award_new_6.jpeg',
  '/images/awards/award_new_7.jpeg',
  '/images/awards/award_new_8.jpeg',
  '/images/awards/award_new_9.jpeg'
];

function Counter({ from, to, duration = 2.5 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (val) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(val).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef} />;
}

export const AwardStrip = () => {
  return (
    <section className="py-24 bg-surface/50 border-y border-text/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">
            Первые места по продажам
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto font-light">
            Официальное признание от ведущих застройщиков и профессионального сообщества. 
            Десятки наград подтверждают наше лидерство.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-serif text-5xl md:text-6xl font-bold text-accent drop-shadow-[0_0_15px_rgba(193,160,128,0.5)]">
                  <Counter from={0} to={stat.value} />
                </span>
              </div>
              <h4 className="text-text text-lg font-medium tracking-wide uppercase mb-1">{stat.label}</h4>
              <p className="text-text-muted text-sm font-light max-w-[150px]">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Certificate preview Marquee */}
        <div className="mt-20 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex w-max animate-marquee [--duration:50s] gap-6 px-3">
                {awardsData.map((src, i) => (
                    <div key={`cert-${i}`} className="w-[320px] md:w-[400px] h-[240px] md:h-[280px] rounded border border-text/10 bg-surface/80 backdrop-blur-md flex items-center justify-center relative overflow-hidden group p-2">
                        <Image src={src} alt="Награда агентства" fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                ))}
            </div>
            <div className="flex w-max animate-marquee [--duration:50s] gap-6 px-3" aria-hidden="true">
                {awardsData.map((src, i) => (
                    <div key={`cert-dup-${i}`} className="w-[320px] md:w-[400px] h-[240px] md:h-[280px] rounded border border-text/10 bg-surface/80 backdrop-blur-md flex items-center justify-center relative overflow-hidden group p-2">
                        <Image src={src} alt="Награда агентства" fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
