"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Андрей Соколов",
    role: "Предприниматель",
    deal: "Продажа пентхауса в Москва",
    text: "Продавал пентхаус с непростой историей — незарегистрированная перепланировка и арест по бизнес-делу. Команда Виталия за две недели сняла арест, легализовала перепланировку и закрыла сделку на 12% выше моих ожиданий. Профессионализм не слова, а цифры.",
    stars: 5,
  },
  {
    name: "Екатерина Всеволодова",
    role: "Частный инвестор",
    deal: "Покупка офиса А-класса под ГАБ",
    text: "Искала готовый арендный бизнес с доходностью выше 8%. Фатюхин и Ко нашли объект в закрытой базе — арендатор с договором до 2029 года. Полностью проверили историю помещения, аккредитив открыли в тот же день. Идеально.",
    stars: 5,
  },
  {
    name: "Михаил Дорохов",
    role: "IT-директор",
    deal: "Покупка загородного дома",
    text: "Обращался в три агентства — везде «быстро и легко». У Фатюхина честно сказали: дом с обременением, нужно 3 недели на юридическую чистку. Так и вышло. Зато сейчас живу спокойно, зная что документы в порядке.",
    stars: 5,
  },
  {
    name: "Ирина Малинина",
    role: "Владелец бизнеса",
    deal: "Срочный выкуп квартиры",
    text: "Нужен был срочный выкуп: долг, исполнительное производство, торги через 18 дней. Казалось, нереально. Виталий лично взял контроль над процессом. Деньги получила через 11 дней. Сохранила 38 млн рублей капитала.",
    stars: 5,
  },
  {
    name: "Сергей Ветров",
    role: "Частное лицо",
    deal: "Сложная цепочка: 3 квартиры → особняк",
    text: "Нам нужно было продать три объекта одновременно, чтобы купить один дом. Юридические сложности у каждой кваритры. Фатюхин и Ко синхронизировали всё — сделки прошли день в день. Мы заехали в дом по плану.",
    stars: 5,
  },
  {
    name: "Дмитрий Воронов",
    role: "Директор фонда",
    deal: "Off-market портфель из 4 лотов",
    text: "Требовалась максимальная конфиденциальность: не просто объект, а портфель. Подписали NDA, сформировали закрытый меморандум. Ни один лот не появился в открытом доступе. Все четыре сделки закрыты в рамках нашей семейной стратегии.",
    stars: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(next, 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoplay, current]);

  const pause = () => {
    setAutoplay(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <section className="py-28 px-4 bg-[#F8F8F8] overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-accent mb-4 block">
              Клиенты о нас
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-[1.1] max-w-xl">
              Реальные люди.<br /> Реальные сделки.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => { pause(); prev(); }}
              className="w-12 h-12 border border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-text transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => { pause(); next(); }}
              className="w-12 h-12 border border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-text transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Review Card */}
        <div className="relative min-h-[340px] md:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-white border border-gray-100 p-8 md:p-12 flex flex-col gap-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: reviews[current].stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C1A080] stroke-[#C1A080]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#1A1A1A]/80 font-light text-lg md:text-xl leading-relaxed max-w-4xl">
                &ldquo;{reviews[current].text}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-6 border-t border-gray-100">
                <div>
                  <p className="font-serif text-xl text-[#1A1A1A]">{reviews[current].name}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{reviews[current].role}</p>
                </div>
                <div className="h-px w-12 bg-accent hidden sm:block" />
                <p className="text-sm text-gray-500 font-light">{reviews[current].deal}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { pause(); setCurrent(i); }}
              className={`h-[2px] transition-all duration-500 ${i === current ? "w-8 bg-accent" : "w-4 bg-gray-300"}`}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
          <span className="ml-auto text-xs text-gray-400 tracking-widest">
            {String(current + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
}
