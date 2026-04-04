"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

// Magic UI Marquee Component (from user docx)
export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// User's Yandex Reviews
const reviews = [
  {
    name: "Елена В.",
    username: "14 марта 2024",
    body: "Обратились в агентство за помощь в продаже квартиры. Очень быстро нашли покупателя. Сделка прошла четко и без нервов. Профессионалы своего дела!",
    rating: 5,
    img: "https://avatar.vercel.sh/elena",
  },
  {
    name: "Михаил Смирнов",
    username: "28 февраля 2024",
    body: "Профессиональный подход к делу. Ребята знают рынок от и до. Помогли выбрать отличную новостройку для инвестиций в правильном районе.",
    rating: 5,
    img: "https://avatar.vercel.sh/mikhail",
  },
  {
    name: "Александр Д.",
    username: "10 января 2024",
    body: "Спасибо большое за помощь! Искали коммерческое помещение под офис, подобрали несколько отличных вариантов, провели переговоры с собственником.",
    rating: 5,
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Виктория К.",
    username: "15 декабря 2023",
    body: "Лучшее агентство элитной недвижимости! Очень внимательное отношение к клиенту. Полное юридическое сопровождение сделки.",
    rating: 5,
    img: "https://avatar.vercel.sh/victoria",
  },
  {
    name: "Игорь Петрович",
    username: "05 ноября 2023",
    body: "Сотрудничаем уже не первый год по аренде нашей недвижимости. Всегда надежные арендаторы.",
    rating: 5,
    img: "https://avatar.vercel.sh/igor",
  },
  {
    name: "Ольга Макарова",
    username: "22 октября 2023",
    body: "Оперативно, грамотно, надежно. Подобрали дом по нашим строгим критериям. Рекомендую!",
    rating: 5,
    img: "https://avatar.vercel.sh/olga",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating,
}: typeof reviews[0]) => {
  return (
    <figure
      className={cn(
        "relative w-72 md:w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-text/10 bg-white hover:bg-gray-50 transition-colors shadow-sm",
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full" width="40" height="40" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-serif text-text">
            {name}
          </figcaption>
          <div className="flex items-center gap-2">
            <p className="text-xs text-text-muted">{username}</p>
            <div className="w-1 h-1 bg-text/20 rounded-full"></div>
            <span className="text-xs text-[#20BD5A] font-medium flex items-center gap-1">Яндекс <Star className="w-3 h-3 fill-[#20BD5A]" /></span>
          </div>
        </div>
      </div>
      <blockquote className="mt-4 text-sm font-light text-text-muted leading-relaxed">&quot;{body}&quot;</blockquote>
    </figure>
  );
};

export function Testimonials3D() {
  return (
    <section className="py-24 bg-bg w-full overflow-hidden relative border-y border-text/5">
      <div className="container mx-auto px-4 mb-16 text-center relative z-20">
        <span className="text-xs uppercase tracking-[0.3em] text-accent block mb-4">Репутация на Yandex</span>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-text uppercase mb-4">
          Нам <span className="text-accent font-light">доверяют</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto font-light mb-8">
          Более 1000 успешных сделок и безупречная репутация.
          Оцените качество нашей работы на основе реальных отзывов.
        </p>
        <a 
          href="https://yandex.com/maps/org/fatiukhin_co/54567120289/reviews/?ll=37.702292%2C55.784015&z=15" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-text text-white hover:bg-accent transition-all text-sm uppercase tracking-widest font-medium group"
        >
          Читать все 61 отзыв <span className="text-accent group-hover:text-white transition-colors bg-white/10 px-2 py-0.5 rounded ml-2">5.0</span>
        </a>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg"></div>
      </div>
    </section>
  );
}
