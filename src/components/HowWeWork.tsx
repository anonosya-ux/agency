'use client';

import { motion } from 'framer-motion';
import { Search, Home, FileCheck, Key } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Аналитика и подбор',
    desc: 'Персональный брокер собирает эксклюзивную подборку объектов (включая off-market) под ваш запрос.',
  },
  {
    icon: Home,
    title: 'Показ и оценка',
    desc: 'Организуем просмотры в удобное время, предоставляем независимую оценку и аудит лота.',
  },
  {
    icon: FileCheck,
    title: 'Сопровождение',
    desc: 'Наши юристы полностью берут на себя проверку чистоты сделки и подготовку документов.',
  },
  {
    icon: Key,
    title: 'Передача ключей',
    desc: 'Проводим безопасные расчеты и торжественно передаем ключи от вашей новой недвижимости.',
  },
];

export const HowWeWork = () => {
  return (
    <section className="py-24 bg-bg w-full">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">
            Как мы работаем
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto font-light">
            Прозрачный процесс, где на каждом этапе ваши интересы защищают эксперты рынка.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-[90px] h-[90px] rounded-full border border-text/10 bg-surface flex items-center justify-center mb-6 relative hover:border-accent/50 transition-colors duration-300">
                  <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                  <step.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center text-xs font-bold font-serif">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted font-light leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
