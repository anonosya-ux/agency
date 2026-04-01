'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const team = [
  {
    name: 'Виталий Фатюхин',
    role: 'Основатель и руководитель',
    experience: '15+ лет на рынке',
    image: '/images/team/vitaly_f.jpeg',
  },
  {
    name: 'Александр Чернышев',
    role: 'Ведущий специалист по недвижимости',
    experience: 'Проверка и сопровождение сделок',
    image: '/images/team/alexander.jpeg',
  },
  {
    name: 'Виталий Ерошкин',
    role: 'Специалист по недвижимости',
    experience: 'Эксперт по сделкам полного цикла',
    image: '/images/team/vitaly_e.jpeg',
  },
  {
    name: 'Ольга Острикова',
    role: 'Менеджер по работе с клиентами',
    experience: 'Специалист по подбору объектов',
    image: '/images/team/olga.jpeg',
  },
];

export const AboutTeam = () => {
  return (
    <section className="py-24 bg-surface/30 w-full relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute -right-[20%] top-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center lg:items-start">
          
          {/* Founder Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 xl:w-1/2 flex flex-col pt-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-6">
              Команда <span className="text-accent/80 font-light drop-shadow-md pb-[-1rem]">профессионалов</span>
            </h2>
            <div className="relative mb-8 rounded-2xl overflow-hidden aspect-[4/5] max-w-sm border border-text/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-secondary/40 z-0 transition-transform duration-700 group-hover:scale-105">
                {/* Founder Image */}
                <Image src="/images/team/vitaly_f.jpeg" alt="Основатель" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                <h3 className="font-serif text-2xl text-text mb-1 drop-shadow-md">Виталий Фатюхин</h3>
                <p className="text-accent text-sm uppercase tracking-wider mb-4 drop-shadow-md">Основатель</p>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 rounded-full border border-text/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-text/70 hover:bg-accent hover:text-primary transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full border border-text/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-text/70 hover:bg-accent hover:text-primary transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-text-muted font-light leading-relaxed max-w-md">
              <p>
                «Недвижимость премиум-класса — это не просто квадратные метры. Это ваш образ жизни, статус и капитал. Наша миссия — сделать процесс выбора и покупки безупречным от первой встречи до передачи ключей.»
              </p>
              <p className="font-serif text-lg text-text/80">
                Мы продаем спокойствие и уверенность в завтрашнем дне.
              </p>
            </div>
          </motion.div>

          {/* Team Grid */}
          <div className="w-full lg:w-7/12 xl:w-1/2 mt-12 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="overflow-hidden border-text/10 bg-surface/50 backdrop-blur-md hover:border-accent/30 transition-all duration-300 group">
                    <div className="relative aspect-square overflow-hidden bg-secondary/30">
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                         {/* Team Image */}
                         <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                      </div>
                      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                        <a href="#" className="w-8 h-8 rounded-full bg-text/5 backdrop-blur-md flex items-center justify-center text-text hover:bg-accent hover:text-primary transition-colors">
                          <Phone className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                    <div className="p-5 pt-4 relative z-20 bg-surface">
                      <h4 className="font-serif text-lg text-text mb-1 group-hover:text-accent transition-colors">{member.name}</h4>
                      <p className="text-text-muted text-xs uppercase tracking-wide mb-2">{member.role}</p>
                      <p className="text-text/50 text-xs font-light">{member.experience}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
