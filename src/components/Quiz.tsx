"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

type Step = 1 | 2 | 3;

export function Quiz() {
  const [step, setStep] = useState<Step>(1);
  const [goal, setGoal] = useState("");
  const [budget, setBudget] = useState("");

  const goals = [
    "Купить недвижимость",
    "Продать актив",
    "Срочный выкуп за 3 дня",
    "Доходные инвестиции (ГАБ)",
    "Юридическая консультация"
  ];

  const budgets = [
    "До 50 млн ₽",
    "50 - 100 млн ₽",
    "100 - 300 млн ₽",
    "Свыше 300 млн ₽",
    "Бюджет не определен"
  ];

  const handleGoal = (g: string) => {
    setGoal(g);
    setStep(2);
  };

  const handleBudget = (b: string) => {
    setBudget(b);
    setStep(3);
  };

  return (
    <section className="py-24 px-4 bg-light-gray border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-accent mb-4 block">Подбор стратегии</span>
          <h2 className="font-serif text-3xl md:text-5xl text-dark leading-[1.1]">
            Какая задача стоит перед вами?
          </h2>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 min-h-[400px] flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: GOAL */}
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {goals.map((g) => (
                    <button 
                      key={g} 
                      onClick={() => handleGoal(g)}
                      className="text-left px-6 py-4 border border-gray-200 hover:border-dark hover:bg-dark hover:text-text transition-all duration-300 group flex justify-between items-center"
                    >
                      <span className="font-light">{g}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: BUDGET */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-4"
              >
                <button onClick={() => setStep(1)} className="text-xs text-gray-400 hover:text-black mb-4 flex items-center gap-1 uppercase tracking-widest">
                  <ArrowRight className="w-3 h-3 rotate-180" /> Назад
                </button>
                <h3 className="font-serif text-2xl mb-6 text-center">Ориентировочный капитал?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgets.map((b) => (
                    <button 
                      key={b} 
                      onClick={() => handleBudget(b)}
                      className="text-left px-6 py-4 border border-gray-200 hover:border-dark hover:bg-dark hover:text-text transition-all duration-300 group flex justify-between items-center"
                    >
                      <span className="font-light">{b}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: TELEGRAM ROUTING */}
            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center flex flex-col items-center justify-center py-8"
              >
                <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mb-6 text-accent">
                  <Send className="w-6 h-6 ml-1" />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-dark">Аналитика сформирована</h3>
                <p className="text-gray-500 font-light max-w-md mx-auto mb-8">
                  Мы подготовили экспертный ответ под профиль: <br/>
                  <span className="text-dark font-medium">{goal} ({budget})</span>. <br/>
                  Перейдите в наш закрытый Telegram для связи со старшим партнером.
                </p>
                <a 
                  href="https://t.me/PlaceholderUsername" // REQUIRES CONFIRMATION: Actual TG link
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark text-text px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-accent transition-colors flex items-center gap-3"
                >
                  <Send className="w-4 h-4" /> Перейти в Telegram
                </a>
                <button onClick={() => setStep(1)} className="text-xs text-gray-400 hover:text-black mt-8 uppercase tracking-widest">
                  Начать заново
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
