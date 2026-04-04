import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { StickyCTA } from "@/components/StickyCTA";
import { StructuredData } from "@/components/StructuredData";
import { Preloader } from "@/components/Preloader";
import Script from "next/script";
import { CustomCursor } from "@/components/CustomCursor";
import { MessengerButton } from "@/components/MessengerButton";
import { cn } from "@/lib/utils";
import { Playfair_Display, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['cyrillic', 'latin'],
  variable: '--next-font-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--next-font-sans',
  display: 'swap',
});

const actay = localFont({
  src: '../assets/fonts/Actay-Regular.otf',
  variable: '--font-actay',
  display: 'swap',
});

const trajan = localFont({
  src: '../assets/fonts/Trajan_Pro_3_Regular.otf',
  variable: '--font-trajan',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fatukhin.ru'),
  title: "Фатюхин и Ко — Элитное Агентство Недвижимости в Москве",
  description: "Агентство недвижимости в Москве. Купля, продажа, обмен премиальных квартир. Срочный выкуп, альтернативные сделки, помощь с ипотекой. Бесплатная консультация.",
  keywords: ["купить квартиру москва", "продать квартиру москва", "обмен квартиры москва", "срочный выкуп квартир", "агентство недвижимости москва", "альтернативная сделка", "обмен с доплатой", "Фатюхин и Ко"],
  openGraph: {
    title: "Фатюхин и Ко | Агентство Недвижимости",
    description: "Решим ваш квартирный вопрос за 14 дней. Квартиры бизнес и премиум-класса.",
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
    <html lang="ru" className={cn(
      playfair.variable,
      montserrat.variable,
      actay.variable,
      trajan.variable,
      "font-sans"
    )}>
      <body className="antialiased bg-bg text-text font-body selection:bg-accent selection:text-text flex flex-col min-h-screen">
        <StructuredData />
        <Preloader />
        <CustomCursor />
        <div className="flex-1 w-full">
          {children}
        </div>
        <StickyCTA />
        <MessengerButton />

        {/* Yandex Metrica (Stand-in ID per Phase 5 Req) */}
        <Script id="yandex-metrica" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(99999999, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
