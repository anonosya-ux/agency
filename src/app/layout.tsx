import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AIConcierge } from "@/components/AIConcierge";
import { StickyCTA } from "@/components/StickyCTA";
import { PageTransition } from "@/components/PageTransition";
import { StructuredData } from "@/components/StructuredData";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Фатюхин и Ко | Агентство Недвижимости в Москве",
  description: "Премиальное агентство недвижимости. Покупка, продажа, срочный выкуп и 100% юридическая гарантия чистоты сделки. Ваш капитал в безопасности.",
  openGraph: {
    title: "Фатюхин и Ко | Агентство Недвижимости",
    description: "Надежные сделки с элитной и коммерческой недвижимостью в Москве. Оплата за результат.",
    url: "https://fatukhin.ru",
    siteName: "Фатюхин и Ко",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[#F8F8F8] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-white flex flex-col min-h-screen">
        <StructuredData />
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
          <AIConcierge />
          <StickyCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
