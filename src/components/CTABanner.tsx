'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const CTABanner = () => {
  return (
    <section className="py-24 bg-bg w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-text/10 bg-surface/60 backdrop-blur-xl p-8 md:p-16 lg:p-24 flex flex-col items-center text-center shadow-2xl mx-auto max-w-5xl"
        >
          {/* Glass glare effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="absolute -left-[20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -right-[20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-text uppercase mb-6 drop-shadow-md">
            Готовы обсудить ваш <span className="text-accent font-light">запрос?</span>
          </h2>
          <p className="text-text/80 text-lg md:text-xl max-w-2xl font-light mb-10">
            Оставьте заявку, и персональный брокер свяжется с вами в течение 15 минут для конфиденциальной консультации.
          </p>

          <form className="w-full max-w-md flex flex-col gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="w-full bg-black/40 border border-text/20 rounded-xl px-5 py-4 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
            />
            <input 
              type="tel" 
              placeholder="Номер телефона" 
              className="w-full bg-black/40 border border-text/20 rounded-xl px-5 py-4 text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
            />
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-accent hover:bg-accent-light text-primary font-serif font-medium uppercase tracking-widest h-14 rounded-xl transition-all duration-300 mt-2"
            >
              Отправить заявку <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-xs text-text/40 mt-3 font-light text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
