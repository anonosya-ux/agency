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
