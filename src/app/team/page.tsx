import { Footer } from "@/components/Footer";
import { Founder } from "@/components/Founder";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-20 px-4 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors mb-12 font-bold">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] max-w-4xl mb-8">Наш подход к капиталу.</h1>
        </div>
      </section>
      <Founder />
      <Footer />
    </main>
  );
}
