"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden bg-dark text-[#F8F8F8]">
      {/* Background Video / Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.85] mix-blend-screen"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />
      
      <div className="relative z-10 w-full max-w-[1240px] mx-auto flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[1.0] tracking-tight mb-6 sm:mb-8 text-center drop-shadow-2xl"
        >
          Экспертиза элитной <br/> недвижимости
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center w-full"
        >
          {/* Constrain width to precisely align with text above in typical desktop view */}
          <div className="w-[300px] sm:w-[400px] md:w-[500px]">
            <ul className="flex flex-col text-lg sm:text-xl lg:text-3xl font-light tracking-wide opacity-95 gap-2 sm:gap-3 drop-shadow-lg items-start text-left">
              <li>&bull; зарубежная недвижимость</li>
              <li>&bull; подбор новостроек</li>
              <li>&bull; рента</li>
            </ul>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-80"
      >
        <div className="w-[1px] h-16 bg-white/40 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
