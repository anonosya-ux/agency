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
  title: "Фатюхин и Ко | Купить, продать, обменять премиум квартиру в Москве",
  description: "Агентство недвижимости в Москве. Срочная покупка, продажа и обмен квартир бизнес и премиум-класса. Решим ваш квартирный вопрос за 14 дней. Бесплатная консультация.",
  alternates: {
    canonical: 'https://fatukhin.ru',
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Фатюхин и Ко — Агентство Недвижимости",
    "image": "https://fatukhin.ru/logo.png",
    "@id": "https://fatukhin.ru",
    "url": "https://fatukhin.ru",
    "telephone": "+79951138937",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Пресненская наб., 12",
      "addressLocality": "Москва",
      "postalCode": "123112",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.749792,
      "longitude": 37.537232
    },
    "areaServed": ["Москва", "Московская область"],
    "priceRange": "₽₽₽"
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
