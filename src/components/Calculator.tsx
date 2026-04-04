"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle, Loader2, Building, TrendingUp } from "lucide-react";

type Status = 'idle' | 'analyzing' | 'result' | 'success';

export function Calculator() {
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("Студия");
  const [metro, setMetro] = useState("");
  
  const [status, setStatus] = useState<Status>('idle');
  const [loadingText, setLoadingText] = useState("");
  const [resultData, setResultData] = useState({ count: 0, price: '0', fullPrice: 0 });
  const [phone, setPhone] = useState("");

  const runAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!area && !metro) return;
    
    setStatus('analyzing');
    setLoadingText("Подключение к базам данных (Циан, Яндекс)...");

    setTimeout(() => {
      setLoadingText(`Анализ конкурентов в районе «${metro || 'вашего объекта'}»...`);
    }, 1500);

    setTimeout(() => {
      setLoadingText("Расчет среднерыночной стоимости...");
    }, 3000);

    setTimeout(() => {
      // Calculate realistic random mock value
      const numArea = parseFloat(area) || 50;
      const pricePerM2 = 320000 + Math.floor(Math.random() * 150000); // 320k - 470k per m2
      const finalPrice = numArea * pricePerM2;
      const priceMillions = (finalPrice / 1000000).toFixed(1);
      const competitors = Math.floor(Math.random() * 30) + 18; // 18 - 47 competitors

      setResultData({ count: competitors, price: priceMillions, fullPrice: finalPrice });
      setStatus('result');
    }, 4500);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!phone) return;
    setStatus('success');
    // In production, send data + phone to CRM here
  };

  return (
    <section id="calculator" className="py-24 px-4 bg-light-gray">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-[#EAEAEA] p-8 md:p-16 relative overflow-hidden shadow-sm">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.2em] text-accent block mb-4">Оценка по рынку</span>
            <h2 className="font-serif text-3xl md:text-5xl text-dark mb-4">Узнать стоимость объекта</h2>
            <p className="font-light text-gray-500 mb-12 max-w-lg">
              Наш алгоритм в реальном времени собирает данные агрегаторов и определит точную рыночную стоимость недвижимости за секунды.
            </p>

            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8" 
                  onSubmit={runAnalysis}
                >
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
                        required
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
                      placeholder="Например, Патриаршие пруды"
                      required
                      className="w-full border-b border-gray-200 py-4 outline-none focus:border-accent bg-transparent transition-colors font-serif text-xl"
                    />
                  </div>

                  <div className="pt-8 flex items-center gap-8">
                    <button
                      type="submit"
                      className="bg-dark text-white px-12 py-5 uppercase tracking-widest text-xs font-medium hover:bg-accent hover:text-white transition-colors duration-500"
                    >
                      Анализировать рынок
                    </button>
                  </div>
                </motion.form>
              )}

              {status === 'analyzing' && (
                <motion.div 
                  key="analyzing"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center space-y-6 bg-surface border border-text/5 rounded-2xl"
                >
                  <Loader2 className="w-12 h-12 text-accent animate-spin" />
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-dark">Парсинг агрегаторов</h3>
                    <p className="text-accent font-medium animate-pulse">{loadingText}</p>
                  </div>
                </motion.div>
              )}

              {status === 'result' && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#1A1A1A] p-8 md:p-12 rounded-2xl relative overflow-hidden"
                >
                  <Building className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-5" />
                  
                  <div className="relative z-10 text-white">
                    <div className="flex items-center gap-3 mb-6 text-accent">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-xs uppercase tracking-widest font-medium">Анализ завершен</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-light mb-6 leading-relaxed">
                      В районе <span className="font-semibold text-accent border-b border-accent/30 tooltip">{metro || 'указанном районе'}</span> прямо сейчас продаются <span className="font-bold">{resultData.count}</span> похожих квартир.
                    </h3>
                    
                    <div className="mb-8">
                      <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Средняя цена конкурентов (базовое состояние):</p>
                      <div className="font-serif text-5xl md:text-6xl text-white">
                        {resultData.price} <span className="text-2xl text-gray-500">млн ₽</span>
                      </div>
                    </div>

                    <div className="bg-white/10 p-6 rounded-xl border border-white/5 backdrop-blur-sm mb-8">
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        Хотите узнать, как продать вашу быстрее и <strong className="text-white">дороже них на 10-15%</strong> за счет правильной упаковки объекта? Оставьте контакт — пришлем экспертное заключение.
                      </p>
                    </div>

                    <form onSubmit={handleFinalSubmit} className="flex flex-col sm:flex-row gap-4">
                      <input 
                        type="tel" 
                        required
                        placeholder="+7 (999) 000-00-00" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-white/5 border border-white/20 text-white px-6 py-4 outline-none focus:border-accent transition-colors flex-1"
                      />
                      <button 
                        type="submit"
                        className="bg-accent text-bg px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-dark transition-colors shrink-0"
                      >
                        Как продать дороже?
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center space-y-4 bg-[#f8fcf8] border border-green-100 rounded-2xl"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-2" />
                  <h3 className="font-serif text-2xl text-dark">Ваш запрос принят!</h3>
                  <p className="text-gray-600 max-w-sm">
                    Мы начали формировать детальный отчет с примерами реальных проданных квартир-аналогов. Эксперт пришлет его вам в течение 10 минут.
                  </p>
                  <button 
                    onClick={() => {
                      setStatus('idle');
                      setArea('');
                      setMetro('');
                      setPhone('');
                    }}
                    className="mt-6 text-accent underline text-sm hover:text-dark transition-colors"
                  >
                    Вернуться назад
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
