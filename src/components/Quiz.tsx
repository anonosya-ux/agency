"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";

export function Quiz({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ goal: "", budget: "", location: "", phone: "" });

  const steps = [
    {
      title: "Какая у вас цель?",
      options: ["Инвестиции", "Для собственного проживания", "Расселение", "Коммерческое использование"],
      field: "goal"
    },
    {
      title: "Ваш примерный бюджет?",
      options: ["От 40 до 80 млн ₽", "От 80 до 150 млн ₽", "Свыше 150 млн ₽", "Ипотека / Подбор программ"],
      field: "budget"
    },
    {
      title: "Предпочтительные районы?",
      options: ["ЦАО (Хамовники, Патрики)", "Запад / Рублево-Успенское", "Москва-Сити", "Не имеет значения"],
      field: "location"
    }
  ];

  const handleSelect = (field: string, val: string) => {
    setData(p => ({ ...p, [field]: val }));
    if (step < steps.length) setStep(s => s + 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-xl p-4"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
            className="w-full max-w-2xl bg-white border border-[#EAEAEA] shadow-2xl relative overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-[#1A1A1A] z-10 transition-colors">
              <X className="w-5 h-5" />
            </button>
            
            <div className="h-2 bg-gray-50 flex w-full absolute top-0 left-0">
              <motion.div 
                className="h-full bg-[#C5A059]" 
                animate={{ width: `${(step / steps.length) * 100}%` }} 
                transition={{ duration: 0.4 }} 
              />
            </div>

            <div className="p-8 md:p-16">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] block mb-4">
                {step < steps.length ? `Шаг 0${step + 1} / 0${steps.length}` : "Финал"}
              </span>

              {step < steps.length ? (
                <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-8">{steps[step].title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {steps[step].options.map(opt => (
                      <button 
                        key={opt}
                        onClick={() => handleSelect(steps[step].field, opt)}
                        className="text-left p-6 border border-[#EAEAEA] hover:border-[#C5A059] hover:bg-[#F8F8F8] transition-all duration-300 font-medium text-sm text-[#1A1A1A] group flex justify-between items-center"
                      >
                        {opt}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059] -translate-x-2 group-hover:translate-x-0" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                  <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">Отлично, мы подобрали варианты!</h2>
                  <p className="text-gray-500 font-light mb-8 max-w-sm mx-auto text-sm">Оставьте свой телефон или Telegram. Мы пришлем персональную подборку из 5 объектов через 15 минут.</p>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <input 
                      type="text" 
                      placeholder="+7 (999) 000-00-00" 
                      value={data.phone}
                      onChange={e => setData(p => ({...p, phone: e.target.value}))}
                      className="border-b border-[#EAEAEA] py-4 px-2 outline-none focus:border-[#C5A059] font-serif text-xl"
                    />
                    <button 
                      onClick={onClose}
                      className="bg-[#1A1A1A] text-white px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-[#C5A059] transition-colors"
                    >
                      Получить лоты
                    </button>
                  </div>
                </motion.div>
              )}

              {step > 0 && step < steps.length && (
                <button onClick={() => setStep(s => s - 1)} className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors">
                  <ArrowLeft className="w-3 h-3" /> Назад
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
