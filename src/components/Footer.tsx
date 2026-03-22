import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl md:text-5xl mb-8">Фатюхин и Ко</h2>
            <p className="font-light text-gray-400 max-w-sm mb-12">
              Агентство премиальной недвижимости в Москве. Уверенность и интеллект в каждой сделке.
            </p>
            
            <a 
              href="https://t.me/Vitali_fat" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#2A2A2A] px-6 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors duration-500"
            >
              Написать в Telegram <Send className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs font-semibold mb-6 text-[#C5A059]">Услуги</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link href="/services/sell" className="hover:text-white transition-colors">Продажа объектов</Link></li>
              <li><Link href="/services/buy" className="hover:text-white transition-colors">Покупка квартир</Link></li>
              <li><Link href="/services/buy" className="hover:text-white transition-colors">Новостройки</Link></li>
              <li><Link href="/services/fast-buy" className="hover:text-white transition-colors">Срочный выкуп</Link></li>
              <li><Link href="/catalog" className="hover:text-white transition-colors">Каталог лотов</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-xs font-semibold mb-6 text-[#C5A059]">Контакты</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="tel:+79951138937" className="hover:text-white transition-colors block text-lg font-medium text-white mb-2">+7 (995) 113-89-37</a></li>
              <li><a href="mailto:Vitali.fatukhin@mail.ru" className="hover:text-white transition-colors">Vitali.fatukhin@mail.ru</a></li>
              <li className="pt-2">
                Москва, Площадь Журавлева,<br/>
                д. 2, стр. 2, офис 402
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Фатюхин и Ко. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Политика</Link>
            <Link href="#" className="hover:text-white transition-colors">Реквизиты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
