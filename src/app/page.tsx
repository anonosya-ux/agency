import { ElevatorScroll } from "@/components/ElevatorScroll";
import { Gateway } from "@/components/Gateway";
import { TrustBanner } from "@/components/TrustBanner";
import { Catalog } from "@/components/Catalog";
import { AIEvaluation } from "@/components/AIEvaluation";
import { HowWeWork } from "@/components/HowWeWork";
import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ElevatorScroll />
      <div id="directions">
        <Gateway />
      </div>
      <TrustBanner />
      <Catalog />
      <AIEvaluation />
      <HowWeWork />
      <Calculator />
      <Footer />
    </main>
  );
}
