"use client";

const awards = [
  "РБК Недвижимость",
  "Forbes Russia",
  "Коммерсантъ",
  "Ведомости",
  "BFM",
  "Новые Известия",
  "НГС.Недвижимость",
  "Топ-5 агентств Москвы",
  "Best Real Estate 2024",
  "Platinum Agent Award",
];

// Duplicate list for seamless loop
const items = [...awards, ...awards];

export function AwardStrip() {
  return (
    <section className="py-12 bg-[#1A1A1A] border-y border-white/5 overflow-hidden">
      <div className="mb-8 text-center">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-medium">
          Упоминания в СМИ и профессиональные признания
        </span>
      </div>

      {/* Marquee track */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex gap-16 items-center animate-marquee whitespace-nowrap pr-16">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-white/30 hover:text-[#C5A059] transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-medium cursor-default shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Second copy for seamless loop */}
        <div className="flex gap-16 items-center animate-marquee2 whitespace-nowrap absolute top-0 left-0 pr-16">
          {items.map((item, i) => (
            <span
              key={`b-${i}`}
              className="text-white/30 hover:text-[#C5A059] transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-medium cursor-default shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
