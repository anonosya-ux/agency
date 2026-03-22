import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Heavy Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 border-b border-white/10 pb-24">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-8">
            <span className="text-lg uppercase tracking-[0.3em] font-light text-[#C5A059]">Фатюхин и Ко</span>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs">
              Бутиковое агентство недвижимости полного цикла. Безопасность, конфиденциальность и точный расчет инвестиций.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/40">Направления</span>
            <ul className="flex flex-col gap-4 font-light text-white/80">
              <li><Link href="/services/buy" className="hover:text-[#C5A059] transition-colors">Элитная недвижимость</Link></li>
              <li><Link href="/services/commercial" className="hover:text-[#C5A059] transition-colors">Коммерческие активы</Link></li>
              <li><Link href="/services/finance" className="hover:text-[#C5A059] transition-colors">Ипотека и Маткапитал</Link></li>
              <li><Link href="/services/finance" className="hover:text-[#C5A059] transition-colors">Срочный выкуп объектов</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/40">О компании</span>
            <ul className="flex flex-col gap-4 font-light text-white/80">
              <li><Link href="/cases" className="hover:text-[#C5A059] transition-colors">Сложные кейсы</Link></li>
              <li><Link href="/team" className="hover:text-[#C5A059] transition-colors">Слово основателя</Link></li>
              <li><Link href="/blog" className="hover:text-[#C5A059] transition-colors">Журнал и Аналитика</Link></li>
              <li><Link href="/contacts" className="hover:text-[#C5A059] transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/40">Связь с агентом</span>
            <a href="tel:+74950000000" className="text-2xl font-serif hover:text-[#C5A059] transition-colors">+7 (495) 000-00-00</a>
            <a href="mailto:Vitali.fatukhin@mail.ru" className="font-light text-white/80 hover:text-[#C5A059] transition-colors">Vitali.fatukhin@mail.ru</a>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm font-light text-white/60 mb-2">Москва-Сити, Пресненская наб. 12</p>
              <a href="#" className="text-xs uppercase tracking-widest text-[#C5A059] hover:underline flex items-center gap-1">Построить маршрут <ArrowUpRight className="w-3 h-3"/></a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[11px] text-white/40 uppercase tracking-widest leading-loose">
          <div className="flex flex-col gap-2">
            <span>© 2010—2026 ООО «Фатюхин и Ко». Все права защищены.</span>
            <span>ОГРН: 1234567891011 | ИНН: 7701234567</span>
          </div>
          <div className="flex flex-wrap gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Пользовательское соглашение</Link>
            <Link href="/aml" className="hover:text-white transition-colors">ПОД/ФТ (Anti-Money Laundering)</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
