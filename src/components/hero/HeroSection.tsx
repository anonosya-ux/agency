"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100dvh] pt-[100px] md:pt-[120px] pb-10 md:pb-0 flex flex-col justify-center overflow-hidden bg-dark">
      {/* Background Video / Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      
      {/* Content wrapper: centered vertically */}
      <div className="relative z-20 w-full flex flex-col justify-center mt-0 md:mt-[-40px] xl:mt-8 flex-1">
        
        {/* Main Title Group (Left Aligned) */}
        <div className="w-full max-w-[1440px] px-4 lg:px-8 mx-auto mb-6 sm:mb-8 md:mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex flex-col items-start w-full"
          >
            <h2 className="uppercase tracking-[0.1em] sm:tracking-[0.25em] md:tracking-[0.3em] font-medium text-white/90 text-[9px] sm:text-xs md:text-[14px] lg:text-[16px] mb-2 lg:mb-3 drop-shadow-md text-left">
              Агентство недвижимости полного цикла
            </h2>
            <h1 className="font-serif text-[28px] xs:text-[34px] sm:text-[48px] md:text-[60px] lg:text-[76px] xl:text-[88px] leading-[1.1] md:leading-[1.05] font-normal text-white text-left drop-shadow-xl uppercase" style={{ fontVariant: 'small-caps' }}>
              Элитная недвижимость <br className="hidden sm:block" /> в Москве и за рубежом
            </h1>
          </motion.div>
        </div>

        {/* Full-width Glass Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full relative py-4 sm:py-6 md:py-8 lg:py-10"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Light reflection stripe across the top */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          
          <div className="w-full max-w-[1440px] px-4 lg:px-8 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
            
            {/* List - Left Aligned to match the logo and title left marin */}
            <ul className="text-dark/90 md:text-dark/80 text-[13px] sm:text-[15px] md:text-[20px] lg:text-[24px] leading-[1.5] md:leading-[1.6] font-light space-y-1 w-full md:w-auto list-none text-left tracking-wide">
              <li>&bull; зарубежная недвижимость</li>
              <li>&bull; подбор новостроек в Москве</li>
              <li>&bull; загородная недвижимость</li>
              <li>&bull; рента</li>
            </ul>

            {/* Buttons - Right Aligned block */}
            <div className="flex flex-col gap-2 md:gap-4 w-full md:w-[320px] xl:w-[360px] shrink-0 mt-2 md:mt-0">
              <Link 
                href="#cta-form"
                className="bg-[#C1A080] hover:bg-[#b08e6e] text-white font-medium uppercase tracking-[0.05em] md:tracking-[0.1em] px-4 md:px-6 py-3.5 md:py-4 transition-colors text-[11px] md:text-sm text-center shadow-lg"
              >
                Подобрать объект
              </Link>
              <Link 
                href="/contacts"
                className="bg-white hover:bg-gray-50 text-[#C1A080] font-medium uppercase tracking-[0.05em] md:tracking-[0.1em] px-4 md:px-6 py-3.5 md:py-4 transition-colors text-[11px] md:text-sm text-center shadow-lg"
              >
                Консультация беспл.
              </Link>
            </div>
            
          </div>
        </motion.div>

      </div>
      
    </section>
  );
};
