import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { AIConcierge } from "@/components/AIConcierge";
import { StickyCTA } from "@/components/StickyCTA";
import { PageTransition } from "@/components/PageTransition";
import { StructuredData } from "@/components/StructuredData";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MessengerButton } from "@/components/MessengerButton";
import { cn } from "@/lib/utils";

/* ── Fallback sans (system font for UI elements) ────────────────── */
const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

/* ── Blacker Sans Display — Hero headings (H1, H2) ──────────────── */
const blackerDisplay = localFont({
  src: [
    { path: '../../public/fonts/Blacker-Sans-Display-Light-trial.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Blacker-Sans-Display-Regular-trial.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Blacker-Sans-Display-Book-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Blacker-Sans-Display-Bold-trial.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});

/* ── Blacker Sans Pro — Subheadings, buttons, nav (H3–H6) ───────── */
const blackerPro = localFont({
  src: [
    { path: '../../public/fonts/Blacker-Sans-Pro-Light.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Blacker-Sans-Pro-Regular-trial.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Blacker-Sans-Pro-Medium-trial.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Blacker-Sans-Pro-Medium-Italic.ttf', weight: '500', style: 'italic' },
    { path: '../../public/fonts/Blacker-Sans-Pro-Bold-trial.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-heading',
  display: 'swap',
});

/* ── Blacker Sans Text — Body copy, paragraphs ───────────────────── */
const blackerText = localFont({
  src: [
    { path: '../../public/fonts/Blacker-Sans-Text-Light-trial.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Blacker-Sans-Text-Book-trial.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Blacker-Sans-Text-Regular-trial.ttf', weight: '450', style: 'normal' },
    { path: '../../public/fonts/Blacker-Sans-Text-Bold-trial.ttf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Blacker-Sans-Text-Heavy.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
});

/* ── Blacker Sans ExtraLight — Decorative, fine text ─────────────── */
const blackerExtraLight = localFont({
  src: [
    { path: '../../public/fonts/Blacker-Sans-Extralight-Italic-trial.ttf', weight: '200', style: 'italic' },
  ],
  variable: '--font-extralight',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fatukhin.ru'),
  title: "Фатюхин и Ко | Элитное Агентство Недвижимости Москва",
  description: "Покупка, срочный выкуп и продажа элитной недвижимости в Москве и Дубае. Квартиры, пентхаусы, особняки. Private Banking технологии в real estate. Инвестиции с AI.",
  keywords: ["элитная недвижимость", "агентство недвижимости", "Фатюхин и Ко", "купить квартиру Москва", "премиум недвижимость", "срочный выкуп квартир", "инвестиции в недвижимость", "загородная недвижимость"],
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
    <html lang="ru" className={cn(
      blackerDisplay.variable,
      blackerPro.variable,
      blackerText.variable,
      blackerExtraLight.variable,
      geist.variable,
      "font-sans"
    )}>
      <body className="antialiased bg-bg text-text font-body selection:bg-accent selection:text-text flex flex-col min-h-screen">
        <StructuredData />
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
          <AIConcierge />
          <StickyCTA />
          <MessengerButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
