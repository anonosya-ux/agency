"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(to: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, to);
      setCount(Math.floor(start));
      if (start >= to) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [to, duration, started]);

  return count;
}

const stats = [
  { value: 16, suffix: "", label: "лет на рынке", prefix: "" },
  { value: 2000, suffix: "+", label: "закрытых сделок", prefix: "" },
  { value: 98, suffix: "%", label: "клиентов приходят повторно", prefix: "" },
  { value: 120, suffix: " млрд ₽", label: "объём сделок за историю", prefix: ">" },
];

function StatItem({ value, suffix, label, prefix, started }: typeof stats[0] & { started: boolean }) {
  const count = useCountUp(value, 2200, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center text-center gap-3"
    >
      <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-accent tracking-tighter leading-none">
        {prefix}{count.toLocaleString("ru-RU")}{suffix}
      </span>
      <span className="text-xs uppercase tracking-[0.2em] text-text/50 font-medium">
        {label}
      </span>
    </motion.div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-28 px-4 bg-[#111111] border-y border-text/5 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-medium"
          >
            В цифрах
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-text mt-4 leading-tight"
          >
            Доверие, которое<br />измеряется результатом.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y-2 lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="pt-8 lg:pt-0 first:pt-0 lg:px-8 first:lg:pl-0 last:lg:pr-0">
              <StatItem {...stat} started={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
