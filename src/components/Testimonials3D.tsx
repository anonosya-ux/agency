'use client';

import { Marquee } from "./ui/marquee";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

// Яндекс.Карты review data
const reviews = [
  {
    name: "Александр Д.",
    date: "12 марта 2026",
    text: "Идеальная работа. Подобрали квартиру в Сити за 2 дня, учли все пожелания по виду и этажу. Сделка прошла безупречно.",
    rating: 5,
  },
  {
    name: "Елена С.",
    date: "28 февраля 2026",
    text: "Покупали виллу в Дубае через агентство Фатюхина. Огромное спасибо за профессионализм и полное сопровождение от первого звонка до ключей.",
    rating: 5,
  },
  {
    name: "Михаил Воронов",
    date: "15 января 2026",
    text: "Быстрый выкуп моей квартиры на Остоженке. Предложили лучшую цену на рынке, вышли на сделку за 3 дня.",
    rating: 5,
  },
  {
    name: "Виктория К.",
    date: "10 декабря 2025",
    text: "Снимаю элитные апартаменты. Агентство решило все вопросы с собственником моментально. Очень приятный сервис.",
    rating: 5,
  },
  {
    name: "Дмитрий П.",
    date: "5 ноября 2025",
    text: "Инвестировали в новостройку премиум-класса. Доходность уже превысила ожидания. Отличная аналитика рынка.",
    rating: 5,
  },
  {
    name: "Анна Романова",
    date: "20 октября 2025",
    text: "Сотрудники агентства — настоящие профи. Не просто показывают квартиры, а дают полную картину по инфраструктуре и соседям.",
    rating: 5,
  },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <Card className="w-80 sm:w-80 shrink-0 p-6 bg-surface/80 backdrop-blur-md border-text/10 hover:border-accent/40 transition-colors shadow-none text-left">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12 border border-text/10">
          <AvatarFallback className="bg-primary text-accent">{review.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-text/90 text-sm">{review.name}</h4>
          <p className="text-xs text-text-muted">{review.date}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-sm text-text/80 leading-relaxed font-light">{review.text}</p>
    </Card>
  );
};

export const Testimonials3D = () => {
  // Split reviews deterministically to prevent SSR hydration errors
  const col1 = [...reviews];
  const col2 = [...reviews].reverse();
  const col3 = [...reviews.slice(2), ...reviews.slice(0, 2)];
  const col4 = [...reviews.slice(4), ...reviews.slice(0, 4)];

  return (
    <section className="py-24 bg-bg w-full overflow-hidden relative border-y border-text/5">
      <div className="container mx-auto px-4 mb-16 text-center relative z-20">
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">Нам доверяют</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto font-light mb-8">
          Более 1000 успешных сделок и безупречная репутация.
          Оцените качество нашей работы на основе реальных отзывов.
        </p>
        <a 
          href="https://yandex.ru/maps/-/CDu~Y4Lp" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-text/10 text-text/90 hover:bg-white/5 transition-all"
        >
          <span className="font-medium text-lg text-accent">5.0</span>
          <span>Рейтинг на Яндекс.Картах</span>
        </a>
      </div>

      <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden [perspective:1000px] z-10">
        <div
          className="flex flex-row items-center justify-center gap-6"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:50s]">
            {col1.map((r, i) => <ReviewCard key={`c1-${i}`} review={r} />)}
          </Marquee>
          <Marquee reverse vertical pauseOnHover repeat={3} className="[--duration:45s]">
            {col2.map((r, i) => <ReviewCard key={`c2-${i}`} review={r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:55s]">
            {col3.map((r, i) => <ReviewCard key={`c3-${i}`} review={r} />)}
          </Marquee>
          <Marquee reverse vertical pauseOnHover repeat={3} className="[--duration:60s] hidden md:flex">
            {col4.map((r, i) => <ReviewCard key={`c4-${i}`} review={r} />)}
          </Marquee>
        </div>

        {/* Gradient overlays for smooth fading at top and bottom */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-bg to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent"></div>
        {/* Horizontal gradients to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-bg to-transparent hidden md:block"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-bg to-transparent hidden md:block"></div>
      </div>
    </section>
  );
};
