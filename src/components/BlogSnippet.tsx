import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const LATEST_ARTICLES = [
  {
    id: "sale-taxes-2026",
    title: "Налоги при продаже недвижимости в 2026: как законно сэкономить до 15 млн рублей",
    category: "Юридическая практика",
    date: "12 Марта 2026",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "urgent-buyout-risks",
    title: "Срочный выкуп: почему 90% предложений на рынке занижают реальную цену вашего актива",
    category: "Аналитика",
    date: "05 Марта 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mortgage-premium",
    title: "Материнский капитал в премиум-сегменте: легальные схемы интеграции в ипотеку от 100 млн",
    category: "Финансирование",
    date: "28 Февраля 2026",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop"
  }
];

export function BlogSnippet() {
  return (
    <section className="py-24 px-4 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Экспертиза</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A]">Блог и Аналитика</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 uppercase tracking-widest text-xs font-semibold hover:text-[#C1A080] transition-colors">
            Читать все статьи <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_ARTICLES.map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="group block">
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.25,1,0.5,1]"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">{article.category}</span>
              <h3 className="font-serif text-xl line-clamp-2 leading-snug group-hover:text-[#C1A080] transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
