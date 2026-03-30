import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Срочный Выкуп Недвижимости | Фатюхин и Ко"
};

export default function FastBuyPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-24 px-4 bg-[#1A1A1A] text-white min-h-[90vh] flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Быстрая сделка за счет собственных средств
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-8 uppercase font-semibold">
              Срочный выкуп <br/><span className="text-[#C1A080] font-light">до 90% от рынка.</span>
            </h1>
            <p className="text-lg text-white/70 font-light mb-12 max-w-xl leading-relaxed">
              Жизненные ситуации требуют быстрых решений. Мы выкупаем вашу квартиру, коммерческую недвижимость или дом за свои средства в течение 3 дней. Без долгих показов и торгов.
            </p>
            
            <a 
              href="https://t.me/Vitali_fat"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#C1A080] text-text px-10 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-[#1A1A1A] transition-all duration-500"
            >
              Получить предложение за 1 час
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
