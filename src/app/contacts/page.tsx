import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react";

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-32 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] hover:text-black transition-colors mb-12 font-bold">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] max-w-4xl mb-16 text-[#1A1A1A]">Связь с агентом.</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4 text-[#C5A059]"><MapPin /> <h3 className="text-xl font-medium text-black">Офис</h3></div>
              <p className="text-gray-500">Москва-Сити, Пресненская набережная 12, Федерация Восток, 62 этаж.</p>
              <p className="text-sm text-gray-400 mt-2">Визиты только по предварительной записи.</p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4 text-[#C5A059]"><Phone /> <h3 className="text-xl font-medium text-black">Телефон</h3></div>
              <p className="text-gray-500 font-serif text-2xl">+7 (495) 000-00-00</p>
              <p className="text-sm text-gray-400 mt-2">Круглосуточный консьерж-сервис.</p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4 text-[#C5A059]"><Mail /> <h3 className="text-xl font-medium text-black">Email</h3></div>
              <p className="text-gray-500">Vitali.fatukhin@mail.ru</p>
              <p className="text-sm text-gray-400 mt-2">Для коммерческих предложений.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
