'use client';

import { useState, useCallback } from 'react';
import { Calculator as CalcIcon, TrendingUp } from 'lucide-react';

export function MortgageCalculator() {
  const [price, setPrice] = useState(15000000);
  const [downPayment, setDownPayment] = useState(20);
  const [rate, setRate] = useState(6);
  const [term, setTerm] = useState(20);

  const calculate = useCallback(() => {
    const loanAmount = price * (1 - downPayment / 100);
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;
    
    if (monthlyRate === 0) return { monthly: Math.round(loanAmount / months), total: loanAmount, overpay: 0, loan: loanAmount };
    
    const monthly = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const total = monthly * months;
    const overpay = total - loanAmount;
    
    return { monthly: Math.round(monthly), total: Math.round(total), overpay: Math.round(overpay), loan: Math.round(loanAmount) };
  }, [price, downPayment, rate, term]);

  const result = calculate();

  const formatNum = (n: number) => n.toLocaleString('ru-RU');

  return (
    <section className="py-24 bg-white border-y border-text/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-medium mb-4 flex items-center justify-center gap-2">
            <CalcIcon className="w-4 h-4" /> Финансовое планирование
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-text uppercase tracking-wide">
            Калькулятор ипотеки
          </h2>
          <p className="text-text-muted font-light mt-4 max-w-xl mx-auto">
            Рассчитайте ежемесячный платёж и узнайте, сколько стоит ваша мечта. Мы поможем получить одобрение от 4,5%.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Controls */}
          <div className="lg:col-span-3 space-y-8">
            {/* Price */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm text-text font-medium uppercase tracking-wider">Стоимость объекта</label>
                <span className="text-accent font-serif text-xl">{formatNum(price)} ₽</span>
              </div>
              <input 
                type="range" min={3000000} max={100000000} step={500000} value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-text/10 rounded-full appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1">
                <span>3 млн</span><span>100 млн</span>
              </div>
            </div>

            {/* Down payment */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm text-text font-medium uppercase tracking-wider">Первоначальный взнос</label>
                <span className="text-accent font-serif text-xl">{downPayment}% ({formatNum(Math.round(price * downPayment / 100))} ₽)</span>
              </div>
              <input 
                type="range" min={10} max={90} step={5} value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-1.5 bg-text/10 rounded-full appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1">
                <span>10%</span><span>90%</span>
              </div>
            </div>

            {/* Rate */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm text-text font-medium uppercase tracking-wider">Ставка</label>
                <span className="text-accent font-serif text-xl">{rate}%</span>
              </div>
              <input 
                type="range" min={1} max={25} step={0.5} value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-1.5 bg-text/10 rounded-full appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1">
                <span>1%</span><span>25%</span>
              </div>
            </div>

            {/* Term */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm text-text font-medium uppercase tracking-wider">Срок кредита</label>
                <span className="text-accent font-serif text-xl">{term} лет</span>
              </div>
              <input 
                type="range" min={1} max={30} step={1} value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full h-1.5 bg-text/10 rounded-full appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1">
                <span>1 год</span><span>30 лет</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2 bg-[#1A1A1A] text-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-white/50 uppercase tracking-widest text-[10px] mb-2">Ежемесячный платёж</p>
              <p className="font-serif text-4xl md:text-5xl text-accent mb-8 tracking-tight">{formatNum(result.monthly)} ₽</p>
            </div>
            
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex justify-between">
                <span className="text-white/50 text-sm">Сумма кредита</span>
                <span className="text-white font-medium">{formatNum(result.loan)} ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50 text-sm">Переплата</span>
                <span className="text-white font-medium">{formatNum(result.overpay)} ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50 text-sm">Общая выплата</span>
                <span className="text-white font-medium">{formatNum(result.total)} ₽</span>
              </div>
            </div>

            <a 
              href="tel:+79951138937"
              className="mt-8 block text-center bg-accent text-[#1A1A1A] py-4 uppercase tracking-[0.15em] text-xs font-bold hover:bg-white transition-colors duration-300"
            >
              Получить одобрение
            </a>
            
            <p className="text-white/30 text-[10px] mt-4 text-center leading-relaxed">
              Расчёт является предварительным.<br/>Точные условия уточняйте у менеджера.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
