import { MOCK_PROPERTIES } from "@/data/mock";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Каталог Недвижимости | Фатюхин и Ко",
  description: "Эксклюзивная коллекция премиальной вторичной и загородной недвижимости, а также лучших новостроек Москвы."
};

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> На главную
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-4">Наши объекты</span>
            <h1 className="font-serif text-5xl lg:text-7xl text-[#1A1A1A]">Private Catalog</h1>
          </div>
          
          <div className="flex flex-wrap gap-4 font-medium text-xs uppercase tracking-widest">
            <button className="border border-[#EAEAEA] px-6 py-3 hover:border-[#1A1A1A] hover:bg-[#F8F8F8] transition-all">Все</button>
            <button className="border border-[#EAEAEA] px-6 py-3 hover:border-[#1A1A1A] hover:bg-[#F8F8F8] transition-all text-gray-400">Вторичная</button>
            <button className="border border-[#EAEAEA] px-6 py-3 hover:border-[#1A1A1A] hover:bg-[#F8F8F8] transition-all text-gray-400">Новостройки</button>
            <button className="border border-[#EAEAEA] px-6 py-3 hover:border-[#1A1A1A] hover:bg-[#F8F8F8] transition-all text-gray-400">Загородная</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROPERTIES.map((prop) => (
            <div key={prop.id} className="group cursor-pointer block">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
                <Image 
                  src={prop.img} 
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.25,1,0.5,1]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-[#1A1A1A]">
                    {prop.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl mb-2 group-hover:text-[#C5A059] transition-colors">{prop.title}</h3>
                  <p className="text-sm text-gray-400">{prop.area} м² • {prop.rooms} комн • {prop.district}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#1A1A1A]">{prop.priceStr}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
