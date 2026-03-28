import type { Metadata } from "next";
import { Cinzel, Josefin_Sans, Geist } from "next/font/google";
import "./globals.css";
import { AIConcierge } from "@/components/AIConcierge";
import { StickyCTA } from "@/components/StickyCTA";
import { PageTransition } from "@/components/PageTransition";
import { StructuredData } from "@/components/StructuredData";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-heading" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL('https://fatukhin.ru'),
  title: "Фатюхин и Ко | Элитное Агентство Недвижимости Москва-Сити",
  description: "Покупка, срочный выкуп и продажа элитной недвижимости в Москве и Дубае. Квартиры, пентхаусы, особняки. Private Banking технологии в real estate. Инвестиции с AI.",
  keywords: ["элитная недвижимость", "агентство недвижимости", "Фатюхин и Ко", "купить квартиру Москва-Сити", "премиум недвижимость", "срочный выкуп квартир", "инвестиции в недвижимость", "загородная недвижимость"],
  openGraph: {
    title: "Фатюхин и Ко | Элитная Недвижимость",
    description: "Надежные сделки с элитной и коммерческой недвижимостью в Москве. Оценка ИИ.",
    url: "https://fatukhin.ru",
    siteName: "Фатюхин и Ко",
    images: [
      {
        url: "/renders/hero_skyscraper.png",
        width: 1200,
        height: 630,
        alt: "Фатюхин и Ко",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "Фатюхин и Ко",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn(cinzel.variable, josefin.variable, "font-sans", geist.variable)}>
      <body className="antialiased bg-[#0F0F1A] text-[#F5F5F5] font-body selection:bg-[#C9A84C] selection:text-[#0F0F1A] flex flex-col min-h-screen">
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
