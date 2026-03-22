"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function AIEvaluation() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleEvaluate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyDetails: input }),
      });
      const data = await res.json();
      if (data.report) {
        setResult(data.report);
      } else {
        setResult("Ошибка связи с R4X Core. Попробуйте снова.");
      }
    } catch (err) {
      setResult("Ошибка сети. Алгоритм недоступен.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 px-4 bg-[#1A1A1A] text-white relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C5A059 0%, transparent 50%)" }} />
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Copywriting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#C5A059] mb-6 block flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#C5A059]" /> Точечная Аналитика
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
            Оценка <br /> без случайностей.
          </h2>
          <p className="text-gray-400 font-light text-lg mb-10 max-w-md">
            Мы используем большие данные и закрытые реестры сделок для мгновенного преданализа вашего актива. Интеллектуальный расчет рыночной стоимости с учетом скрытых факторов.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span className="text-sm font-medium tracking-widest uppercase text-gray-300">Точность до 1%</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span className="text-sm font-medium tracking-widest uppercase text-gray-300">Мгновенный результат</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Working React AI Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full bg-black border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden flex flex-col h-[450px]"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <span className="ml-4 text-[10px] tracking-widest text-[#C5A059] uppercase font-mono">Fatukhin // Smart Valuation</span>
          </div>

          <div className="flex-1 overflow-y-auto font-mono text-sm text-gray-300 mb-6 flex flex-col gap-4">
            <div className="bg-white/5 p-4 rounded border border-white/5">
              Опишите базовые параметры объекта для получения расчетной стоимости (площадь, класс, расположение, состояние).
            </div>

            {result && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/10 border border-white/20 text-white p-4 rounded font-medium leading-relaxed">
                {result}
              </motion.div>
            )}
            
            {loading && (
              <div className="flex items-center gap-3 text-[#C5A059]">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Анализ рынка...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleEvaluate} className="relative mt-auto">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              placeholder="Ex: 120м2, Москва-Сити, Башня Федерация, черновая отделка..." 
              className="w-full bg-white/5 border border-white/10 p-4 pr-16 text-white font-mono text-sm focus:outline-none focus:border-[#C5A059] transition-colors disabled:opacity-50"
            />
            <button disabled={loading} type="submit" className="absolute right-0 top-0 bottom-0 px-4 text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-colors font-bold disabled:opacity-50">
              GO
            </button>
          </form>

        </motion.div>

      </div>
    </section>
  );
}
