'use client';

import Link from 'next/link';
import { Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary w-full pt-20 pb-10 border-t border-text/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="font-serif text-2xl font-bold tracking-widest uppercase text-text mb-6">
              Fatukhin <span className="text-accent font-light text-xl">&</span> Ko
            </Link>
            <p className="text-text-muted text-sm font-light leading-relaxed max-w-sm mb-8">
              Агентство недвижимости полного цикла в Москве. Покупка, продажа, аренда и срочный выкуп. Гарантия качества на каждом этапе.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-text/10 flex items-center justify-center text-text/70 hover:bg-accent hover:text-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-text/10 flex items-center justify-center text-text/70 hover:bg-accent hover:text-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-text/10 flex items-center justify-center text-text/70 hover:bg-accent hover:text-primary transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-text font-medium uppercase tracking-wider text-sm mb-6">Каталог</h4>
            <ul className="space-y-4">
              <li><Link href="/abroad" className="text-text-muted hover:text-accent font-light text-sm transition-colors">Зарубежная недвижимость</Link></li>
              <li><Link href="/new-buildings" className="text-text-muted hover:text-accent font-light text-sm transition-colors">Новостройки</Link></li>
              <li><Link href="/rent" className="text-text-muted hover:text-accent font-light text-sm transition-colors">Аренда</Link></li>
              <li><Link href="/services/commercial" className="text-text-muted hover:text-accent font-light text-sm transition-colors">Коммерческая</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-text font-medium uppercase tracking-wider text-sm mb-6">Компания</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-text-muted hover:text-accent font-light text-sm transition-colors">О нас</Link></li>
              <li><Link href="/team" className="text-text-muted hover:text-accent font-light text-sm transition-colors">Команда</Link></li>
              <li><Link href="/services/buy" className="text-text-muted hover:text-accent font-light text-sm transition-colors">Услуги</Link></li>
              <li><Link href="/blog" className="text-text-muted hover:text-accent font-light text-sm transition-colors">Блог и аналитика</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-text font-medium uppercase tracking-wider text-sm mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+79951138937" className="block text-text hover:text-accent font-light text-sm transition-colors">+7 (995) 113-89-37</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@fatukhin.ru" className="text-text-muted hover:text-accent font-light text-sm transition-colors">info@fatukhin.ru</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-text-muted font-light text-sm">Москва, пл. Журавлёва<br />(м. Электрозаводская)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-text/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text/40 text-xs font-light">
            © {new Date().getFullYear()} Фатюхин и Ко. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-text/40 hover:text-text text-xs font-light transition-colors">Политика конфиденциальности</Link>
            <Link href="/terms" className="text-text/40 hover:text-text text-xs font-light transition-colors">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
