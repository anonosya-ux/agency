import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BasicLegalPage({ title }: { title: string }) {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-32 px-4 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C1A080] hover:text-black transition-colors mb-12 font-bold">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-8 text-[#1A1A1A]">{title}</h1>
          <div className="prose prose-gray">
            <p>Настоящий документ определяет политику ООО «Фатюхин и Ко» в отношении обработки и защиты данных, а также проведения юридически значимых действий.</p>
            <p>Документы предоставляются по запросу клиента при заключении договора оказания услуг.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
