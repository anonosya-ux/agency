import { Footer } from "@/components/Footer";
import { TrustBanner } from "@/components/TrustBanner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-32 px-4 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C1A080] hover:text-white transition-colors mb-12 font-bold">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-[#C1A080] block mb-4">Для Инвесторов</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] max-w-4xl mb-8 uppercase font-semibold">
            Коммерческая <br/><span className="text-[#C1A080] font-light">недвижимость.</span>
          </h1>
          <p className="text-lg font-light text-white/70 max-w-2xl leading-relaxed">
            Поиск, независимая оценка и брокеридж высокодоходных стрит-ритейл объектов, бизнес-центров А-класса и готового арендного бизнеса (ГАБ). Мы находим недооценённые off-market активы с потенциалом твердой капитализации и обеспечиваем абсолютную юридическую защиту капитала.
          </p>
        </div>
      </section>
      <TrustBanner />
      <Footer />
    </main>
  );
}
