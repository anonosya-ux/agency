import { Footer } from "@/components/Footer";
import { TrustBanner } from "@/components/TrustBanner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-32 px-4 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C1A080] hover:text-white transition-colors mb-12 font-bold">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Структурирование сделок</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] max-w-4xl mb-8 uppercase font-semibold">
            Финансирование <br/><span className="text-[#C1A080] font-light">и Выкуп.</span>
          </h1>
          <p className="text-lg font-light text-white/70 max-w-2xl leading-relaxed">
            Комплексные финансовые решения для премиум-сегмента. Одобрение VIP-ипотеки (субсидии от 4%), инвестиционный кредитный консалтинг и мгновенный выкуп активов за счет фонда агентства с гарантией сохранения конфиденциальности.
          </p>
        </div>
      </section>
      <TrustBanner />
      <Footer />
    </main>
  );
}
