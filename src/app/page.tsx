import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { DirectionsGrid } from "@/components/DirectionsGrid";
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
  title: "Фатюхин и Ко | Элитное Агентство Недвижимости Москва",
  description: "Покупка, срочный выкуп и продажа элитной недвижимости в Москве и Дубае. Квартиры, пентхаусы, особняки. Private Banking технологии в real estate. Инвестиции с AI.",
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
      <BlogPreview />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
