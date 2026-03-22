import { Footer } from "@/components/Footer";
import { TrustBanner } from "@/components/TrustBanner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-32 px-4 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors mb-12 font-bold">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] max-w-4xl mb-8">Коммерческая недвижимость.</h1>
          <p className="text-xl font-light text-white/70 max-w-2xl">Поиск, оценка и продажа высокодоходных стрит-ритейл объектов, офисов А-класса и готового арендного бизнеса (ГАБ). Полное юридическое сопровождение инвестиций.</p>
        </div>
      </section>
      <TrustBanner />
      <Footer />
    </main>
  );
}
