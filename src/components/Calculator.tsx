"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function Calculator() {
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("Студия");
  const [metro, setMetro] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!area && !metro) return;
    // Show success state — in production this would send data to CRM/Telegram bot
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setArea("");
    setMetro("");
    setRooms("Студия");
  };

  return (
    <section id="calculator" className="py-24 px-4 bg-light-gray">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-[#EAEAEA] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-4">Оценка</span>
            <h2 className="font-serif text-3xl md:text-5xl text-dark mb-4">Узнать стоимость объекта</h2>
            <p className="font-light text-gray-500 mb-12 max-w-lg">
              Определяем точную рыночную стоимость недвижимости за 15 минут. Бесплатно и объективно.
            </p>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-gray-500">
                    Площадь (м²)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Например, 65"
                    min={1}
                    className="w-full border-b border-gray-200 py-4 outline-none focus:border-accent bg-transparent transition-colors font-serif text-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-medium text-gray-500">Комнат</label>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full border-b border-gray-200 py-4 outline-none focus:border-accent bg-transparent transition-colors font-serif text-xl appearance-none cursor-pointer"
                  >
                    <option>Студия</option>
                    <option>1 комната</option>
                    <option>2 комнаты</option>
                    <option>3 комнаты</option>
                    <option>4+ комнат</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium text-gray-500">
                  Станция метро / Район
                </label>
                <input
                  type="text"
                  value={metro}
                  onChange={(e) => setMetro(e.target.value)}
                  placeholder="Ближайшее метро"
                  className="w-full border-b border-gray-200 py-4 outline-none focus:border-accent bg-transparent transition-colors font-serif text-xl"
                />
              </div>

              <div className="pt-8 flex items-center gap-8 flex-wrap">
                <button
                  type="submit"
                  className="bg-dark text-text px-12 py-5 uppercase tracking-widest text-xs font-medium hover:bg-accent transition-colors duration-500 disabled:opacity-40"
                  disabled={submitted}
                >
                  Рассчитать стоимость
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-600"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-widest font-medium">
                        Запрос отправлен — мы свяжемся в течение 15 мин
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
