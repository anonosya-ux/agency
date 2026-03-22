import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Назад к статьям
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-4">Аналитика</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-8">
            Налог при продаже недвижимости: Как законно сэкономить
          </h1>
          <p className="text-gray-500 font-light mb-12 text-lg">
            Подробный разбор изменений в налоговом законодательстве и легальных способов оптимизации налоговой базы при реализации объектов премиум-класса.
          </p>
        </div>
      </section>

      <div className="py-24 px-4">
        <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-[#1A1A1A] prose-a:text-[#C5A059]">
          <h2>Изменения в 2024 году</h2>
          <p>В этом году налоговое законодательство претерпело ряд изменений, которые критически важны для продавцов недвижимости с чеком от 50 млн рублей. Основной фокус сместился на контроль фактической стоимости сделок и противодействие занижению.</p>
          
          <h2>Легальные схемы оптимизации</h2>
          <p>При правильном структурировании сделки вы можете существенно снизить налоговую нагрузку. Основные методы включают:</p>
          <ul>
            <li>Учет расходов на реконструкцию и дизайнерский ремонт (при наличии строгой отчетности).</li>
            <li>Использование налоговых вычетов при цепочке сделок (альтернативная покупка).</li>
            <li>Грамотное распределение долей при продаже семейной недвижимости.</li>
          </ul>

          <h2>Глобальный вывод</h2>
          <p>Никогда не занижайте стоимость в договоре. Экономия 1-2 миллионов может обернуться блокировками счетов и штрафами, превышающими саму сумму налога. Обращайтесь к нам за легальной оптимизацией перед выходом на сделку.</p>
        </article>
      </div>

      <Footer />
    </main>
  );
}
// Required for static export with dynamic routes
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
