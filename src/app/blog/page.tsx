import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogSnippet } from "@/components/BlogSnippet";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Блог и Аналитика | Фатюхин и Ко",
  description: "Экспертные статьи, аналитика рынка недвижимости Москвы и юридические советы для покупателей и продавцов."
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-4">Insights</span>
          <h1 className="font-serif text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.1] max-w-2xl">
            Публикации и Аналитика рынка.
          </h1>
        </div>
      </section>

      <div className="pt-12">
        <BlogSnippet />
      </div>

      <Footer />
    </main>
  );
}
