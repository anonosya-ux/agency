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

            {/* Social links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://t.me/fatukhin_re"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg>
              </a>
              <a
                href="https://wa.me/74950000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a
                href="https://instagram.com/fatukhin.realty"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>

            <div className="mt-2 pt-4 border-t border-white/10">
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
