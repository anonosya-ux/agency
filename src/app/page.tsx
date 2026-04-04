import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { DirectionsGrid } from "@/components/DirectionsGrid";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { Catalog } from "@/components/Catalog";
import { AwardStrip } from "@/components/AwardStrip";
import { Testimonials3D } from "@/components/Testimonials3D";
import { HowWeWork } from "@/components/HowWeWork";
import { AboutTeam } from "@/components/AboutTeam";
import { BlogPreview } from "@/components/BlogPreview";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фатюхин и Ко | Купить, продать, обменять квартиру в Москве | 10–50 млн ₽",
  description: "Агентство недвижимости в Москве. Срочная покупка, продажа и обмен квартир бизнес и премиум-класса от 10 до 50 млн ₽. Решим ваш квартирный вопрос за 14 дней. Бесплатная консультация.",
  alternates: {
    canonical: 'https://fatukhin.ru',
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <DirectionsGrid />
      <Catalog />
      <AwardStrip />
      <Testimonials3D />
      <HowWeWork />
      <AboutTeam />
      <MortgageCalculator />
      <BlogPreview />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
