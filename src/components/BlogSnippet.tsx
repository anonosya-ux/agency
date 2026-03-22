import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ARTICLES = [
  {
    id: 1,
    title: "Налог при продаже недвижимости в 2024: Как законно сэкономить",
    category: "Юридический отдел",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000"
  },
  {
    id: 2,
    title: "Топ-5 ЖК бизнес-класса, которые сдаются в этом году",
    category: "Аналитика",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
  },
  {
    id: 3,
    title: "Почему квартира не продается? Ошибки самостоятельной продажи",
    category: "Недвижимость",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000"
  }
];

export function BlogSnippet() {
  return (
    <section className="py-24 px-4 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-4">Экспертиза</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A]">Блог и Аналитика</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 uppercase tracking-widest text-xs font-semibold hover:text-[#C5A059] transition-colors">
            Читать все статьи <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
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
              <h3 className="font-serif text-xl line-clamp-2 leading-snug group-hover:text-[#C5A059] transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
