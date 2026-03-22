import { Navigation } from "@/components/Navigation";
import { ElevatorScroll } from "@/components/ElevatorScroll";
import { Gateway } from "@/components/Gateway";
import { StatsCounter } from "@/components/StatsCounter";
import { Quiz } from "@/components/Quiz";
import { Founder } from "@/components/Founder";
import { TrustBanner } from "@/components/TrustBanner";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { AwardStrip } from "@/components/AwardStrip";
import { Catalog } from "@/components/Catalog";
import { AIEvaluation } from "@/components/AIEvaluation";
import { BlogPreview } from "@/components/BlogPreview";
import { HowWeWork } from "@/components/HowWeWork";
import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ElevatorScroll />
      <div id="directions">
        <Gateway />
      </div>
      <StatsCounter />
      <Quiz />
      <Founder />
      <TrustBanner />
      <div id="cases">
        <Cases />
      </div>
      <Testimonials />
      <AwardStrip />
      <div id="catalog">
        <Catalog />
      </div>
      <AIEvaluation />
      <BlogPreview />
      <HowWeWork />
      <Calculator />
      <div id="contacts">
        <Footer />
      </div>
    </main>
  );

}

