import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

// Mock database
const ARTICLES_DB: Record<string, any> = {
  "1": {
    title: "Налог при продаже недвижимости: Как законно сэкономить",
    category: "Юридический отдел",
    intro: "Подробный разбор изменений в налоговом законодательстве и легальных способов оптимизации налоговой базы при реализации объектов премиум-класса.",
    content: "В 2024 году налоговое законодательство претерпело ряд изменений, которые критически важны для продавцов недвижимости с чеком от 50 млн рублей. Основной фокус сместился на контроль фактической стоимости сделок и противодействие занижению.\n\nЛегальные схемы оптимизации:\n1. Учет расходов на реконструкцию и дизайнерский ремонт.\n2. Использование налоговых вычетов при цепочке сделок.\n3. Грамотное распределение долей при продаже семейной недвижимости."
  },
  "2": {
    title: "Топ-5 ЖК бизнес-класса, которые сдаются в этом году",
    category: "Аналитика",
    intro: "Где покупают инвесторы и почему именно эти локации покажут рост цены до 25% годовых.",
    content: "Аналитический отдел Фатюхин и Ко проанализировал 40+ стартов продаж. Лучшую динамику показывают объекты на Западе Москвы и в локациях редевелопмента бывших промзон.\n\nИнвестиционный совет: Входите в проекты на стадии закрытых пресейлов. Мы предоставляем доступ к бронированию квартир до официального старта продаж."
  },
  "3": {
    title: "Почему квартира не продается? Ошибки самостоятельной продажи",
    category: "Недвижимость",
    intro: "90% продавцов теряют до 15% стоимости объекта из-за неверного позиционирования и оценки.",
    content: "Рынок элитной недвижимости и бизнес-класса крайне специфичен. Объект не прощает плохих фотографий, завышенных ожиданий и токсичных цепочек.\n\nГлавная ошибка — переоценка из-за привязанности к ремонту. Технологии ИИ, применяемые в нашем агентстве, позволяют точно предсказать цену реализации с погрешностью в 1% и сроком экспозиции до 14 дней."
  }
};

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = ARTICLES_DB[params.id] || ARTICLES_DB["1"];

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Назад к статьям
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-4">{article.category}</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-8">
            {article.title}
          </h1>
          <p className="text-gray-500 font-light mb-12 text-lg">
            {article.intro}
          </p>
        </div>
      </section>

      <div className="py-24 px-4">
        <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-[#1A1A1A] prose-a:text-[#C5A059] whitespace-pre-wrap text-gray-700">
          {article.content}
        </article>
      </div>

      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
