'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Clock, Shield } from 'lucide-react';

export const CTABanner = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    
    setSubmitted(true);
    
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, interest })
      });
    } catch (error) {
      console.error('Failed to submit lead', error);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-bg w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-text/10 bg-dark p-6 sm:p-8 md:p-16 lg:p-20 mx-auto max-w-5xl"
        >
          {/* Background accents */}
          <div className="absolute -left-[15%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -right-[15%] bottom-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Offer */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase mb-4 sm:mb-5 leading-tight">
                Получите <span className="text-accent">3 варианта решения</span> квартирного вопроса
              </h2>
              <p className="text-white/60 text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 leading-relaxed max-w-lg">
                Расскажите о вашей ситуации — эксперт перезвонит за 15 минут, бесплатно оценит объект и предложит сценарии: от срочного выкупа до выгодного обмена с доплатой.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white/50 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" /> Ответ за 15 минут
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" /> Конфиденциально
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" /> Без спама
                </span>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full lg:w-[420px] shrink-0">
              {!submitted ? (
                <form 
                  className="flex flex-col gap-4 relative z-10" 
                  onSubmit={handleSubmit}
                >
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя" 
                    required
                    aria-label="Ваше имя"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors text-base"
                  />
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__" 
                    required
                    aria-label="Телефон"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors text-base"
                  />
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    aria-label="Что вас интересует"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-white/70 focus:outline-none focus:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors text-base appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C1A080' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                  >
                    <option value="" className="bg-dark">Что вас интересует?</option>
                    <option value="buy" className="bg-dark">Хочу купить квартиру</option>
                    <option value="sell" className="bg-dark">Нужно срочно продать</option>
                    <option value="exchange" className="bg-dark">Обмен на большую / меньшую</option>
                    <option value="fast-buy" className="bg-dark">Срочный выкуп за 3 дня</option>
                    <option value="mortgage" className="bg-dark">Помощь с ипотекой</option>
                    <option value="other" className="bg-dark">Другое</option>
                  </select>

                  <button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-[#d4b896] text-dark font-semibold uppercase tracking-[0.12em] py-4 rounded-xl transition-all duration-300 text-base flex items-center justify-center gap-2 mt-1 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                  >
                    Получить консультацию <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-white/25 font-light text-center mt-1">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white text-2xl font-serif">Заявка отправлена!</h3>
                  <p className="text-white/50 text-base font-light">
                    Персональный брокер свяжется с вами в течение 15 минут.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
