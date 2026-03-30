'use client';

import { Marquee } from "./ui/marquee";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

// Яндекс.Карты review data
const reviews = [
  {
    name: "Ирина Гавр",
    text: "Обратились по рекомендации для покупки квартиры в Сити. Сделка прошла быстро, проверили все юридические тонкости. Очень профессиональный подход.",
    rating: 5,
  },
  {
    name: "Вадим Михалин",
    text: "Потрясающий сервис. Виталий лично курировал подбор инвестиционного объекта в Дубае. Оформление ВНЖ взяли на себя, мы только приехали на подписание.",
    rating: 5,
  },
  {
    name: "Вероника Л.",
    text: "Нужно было срочно продать загородный дом на Рублёвке. Команда Фатюхина нашла покупателя за неделю по отличной цене. Рекомендую однозначно.",
    rating: 5,
  },
  {
    name: "Елизавета Ефимова",
    text: "Арендовали через них коммерческое помещение под бутик. Брокер учел все требования к трафику и планировке. Договор согласовали блестяще.",
    rating: 5,
  },
  {
    name: "Андрей Лупанов",
    text: "Лучшее агентство элитной недвижимости из тех, с кем доводилось работать. Действительно индивидуальный подход и полная конфиденциальность.",
    rating: 5,
  },
  {
    name: "Алина Юзефович",
    text: "Помогли с выгодной покупкой новостройки премиум-класса на старте продаж. Аналитика рынка на высшем уровне, доходность уже радует.",
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
          <h4 className="font-semibold text-text/90 text-base">{review.name}</h4>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-base text-text/80 leading-relaxed font-light">{review.text}</p>
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-text/10 text-text/90 hover:bg-white/5 transition-all text-sm md:text-base group"
        >
          <span className="font-medium text-lg text-accent">5.0</span>
          <span className="group-hover:text-accent transition-colors">Читать все 61 отзыв на Яндекс.Картах &rarr;</span>
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
