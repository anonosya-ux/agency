'use client';

import Link from 'next/link';
import { Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary w-full pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-text/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10 sm:mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold tracking-widest uppercase text-text mb-6">
              Fatukhin <span className="text-accent font-light text-xl">&</span> Ko
            </Link>
            <p className="text-text-muted text-sm font-light leading-relaxed max-w-sm mb-8">
              Агентство недвижимости полного цикла в Москве. Покупка, продажа, аренда и срочный выкуп. Гарантия качества на каждом этапе.
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/fatukhin" target="_blank" rel="noreferrer" title="Telegram" className="w-10 h-10 rounded-full bg-surface border border-text/10 flex items-center justify-center text-text/70 hover:bg-accent hover:text-primary transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.415-1.21.258-1.91.176-.184 3.246-2.977 3.305-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.506-.163-.908-.25-1.85-.44-1.024-.207-.946-.226-1.122-.44a.692.692 0 0 1 .14-1.002c1.472-.619 4.908-2.096 10.306-4.331 1.018-.421 1.23-.496 1.353-.5zm-4.717 6.47v.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/79951138937" target="_blank" rel="noreferrer" title="WhatsApp" className="w-10 h-10 rounded-full bg-surface border border-text/10 flex items-center justify-center text-text/70 hover:bg-accent hover:text-primary transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5">
                  <path d="M12.031 0h-.01C5.396 0 0 5.394 0 12.018c0 2.122.553 4.195 1.6 6L.518 22l4.135-1.085A11.927 11.927 0 0 0 12.021 24c6.621 0 12.01-5.395 12.01-12.018S18.643 0 12.031 0zm0 21.986c-1.787 0-3.535-.48-5.068-1.385l-.36-.213-3.076.805.826-2.997-.236-.375A9.972 9.972 0 0 1 2.014 12c0-5.516 4.492-10 10.017-10s10 4.484 10 10a10.02 10.02 0 0 1-10 10zM17.5 14.5c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3 0-.46.15-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37s-1.04 1.02-1.04 2.49 1.07 2.9 1.22 3.1c.15.2 2.12 3.23 5.12 4.52.71.3 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.19-.57-.34z"/>
                </svg>
              </a>
              <a href="https://max.ru/u/f9LHodD0cOLl74KezdeYBu3fOVHAYqq3V3sIeBS8EAja_dROofdIIAV8or8" target="_blank" rel="noreferrer" title="Написать в Max" className="w-10 h-10 rounded-full bg-surface border border-text/10 flex items-center justify-center text-text/70 hover:bg-accent hover:text-primary transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5">
                  <path d="M7 9v6h2v-3.5L10.5 14h1L13 11.5V15h2V9h-2l-1.5 2.5L10 9H7z"/>
                </svg>
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
                <a href="https://yandex.com/maps/org/fatiukhin_co/54567120289/?ll=37.702292%2C55.784015&z=15" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent font-light text-sm transition-colors">Москва, площадь Журавлёва, 2, стр. 2</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-text/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
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
