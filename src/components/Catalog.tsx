'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const topItems = [
  {
    title: 'Новостройки',
    link: '/catalog?category=new',
    image: '/images/capital-towers.png',
    clip: 'polygon(0 0, calc(100% - var(--dx)) 0, 100% 100%, 0 100%)',
    marginLeft: '0px',
    marginRight: '0px',
  },
  {
    title: 'Готовые квартиры',
    link: '/catalog?category=ready',
    image: '/images/patriarshie.png',
    clip: 'polygon(0 0, 100% 0, 100% 100%, var(--dx) 100%)',
    marginLeft: 'var(--dx)',
    marginRight: '0px',
  },
  {
    title: 'Аренда квартир',
    link: '/catalog?category=rent',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    clip: 'polygon(0 0, calc(100% - var(--dx)) 0, 100% 100%, 0 100%)',
    marginLeft: '0px',
    marginRight: '0px',
  },
  {
    title: 'Загородная недвижимость',
    link: '/services/countryside',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    clip: 'polygon(0 0, 100% 0, 100% 100%, var(--dx) 100%)',
    marginLeft: 'var(--dx)',
    marginRight: '0px',
  },
];

const bottomItems = [
  {
    title: 'Зарубежная недвижимость',
    link: '/catalog?category=abroad',
    image: '/images/palm-villa.png',
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - var(--dy-b)))',
    marginLeft: '0px',
    marginRight: '0px',
  },
  {
    title: 'Коммерческая недвижимость',
    link: '/services/commercial',
    image: '/images/address-beach.png',
    clip: 'polygon(0 0, 100% 0, 100% calc(100% - var(--dy-b)), 0 100%)',
    marginLeft: '0px',
    marginRight: '0px',
  },
];

export const Catalog = () => {
  return (
    <section className="pt-2 sm:pt-4 pb-16 sm:pb-24 w-full relative z-10 [--dx:0px] md:[--dx:18px] lg:[--dx:24px] [--dy-b:0px] md:[--dy-b:18px] lg:[--dy-b:24px] bg-white">
      <div className="max-w-[1240px] mx-auto px-4">

        {/* Description text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#7A7A7A] max-w-4xl mx-auto mb-10 md:mb-16 text-sm md:text-[15px] font-light leading-relaxed tracking-wide"
        >
          Помогаем купить квартиру и апартаменты в новых жилых комплексах центра Москвы, зарубежную недвижимость,
          коммерческую недвижимость и особняки, а также дома в элитных поселках Подмосковья.
        </motion.p>

        {/* ── Top Row: 4 Items ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-[6px] lg:gap-[10px] mb-8 md:mb-10 lg:mb-14">
          {topItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="overflow-hidden bg-white block">
                <div
                  className="w-full aspect-[3/4] relative hidden md:block"
                  style={{ clipPath: item.clip }}
                >
                  <Link href={item.link}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </Link>
                </div>
                {/* Mobile Fallback: no clip-path */}
                <div className="w-full aspect-[3/4] sm:aspect-[4/3] relative md:hidden mb-2">
                  <Link href={item.link}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="100vw"
                    />
                  </Link>
                </div>
              </div>

              {/* Label button below - exact matching margins from SVG bounding boxes */}
              <Link
                href={item.link}
                className="py-3 px-3 text-center md:text-left text-[14px] md:text-[15px] font-normal tracking-wide transition-colors duration-300 border border-[#C1A080] text-[#1a1a1a] hover:bg-[#C1A080] hover:text-white mt-1 md:mt-2 uppercase bg-[#FAF9F7]"
                style={{ 
                  marginRight: item.marginRight,
                  marginLeft: item.marginLeft,
                }}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Row: 2 Items ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[6px] lg:gap-[10px]">
          {bottomItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.08 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Label button ABOVE image - horizontal tops mean 100% wide text bounding box */}
              <Link
                href={item.link}
                className="py-3 px-3 text-center md:text-left text-[14px] lg:text-[15px] font-normal tracking-wide transition-colors duration-300 border border-[#C1A080] text-[#1a1a1a] hover:bg-[#C1A080] hover:text-white mb-2 md:mb-3 uppercase bg-[#FAF9F7]"
                style={{ 
                  marginRight: item.marginRight,
                  marginLeft: item.marginLeft,
                }}
              >
                {item.title}
              </Link>

              <div className="overflow-hidden bg-white block">
                <div
                  className="w-full h-[250px] sm:h-[350px] lg:h-[400px] xl:h-[450px] relative hidden md:block"
                  style={{ clipPath: item.clip }}
                >
                  <Link href={item.link}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="50vw"
                    />
                  </Link>
                </div>
                {/* Mobile Fallback */}
                <div className="w-full h-[250px] sm:h-[350px] relative md:hidden">
                  <Link href={item.link}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="100vw"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

