"use client";

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] mt-24 lg:mt-28 flex flex-col justify-center items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="relative z-20 w-full max-w-[1240px] px-4 mx-auto flex flex-col items-center mt-[-40px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex flex-col items-start w-max mx-auto"
        >
          <h1 className="font-serif text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[1.0] font-light text-white text-center drop-shadow-md mb-2">
            Экспертиза элитной <br/> недвижимости
          </h1>
          
          <ul className="flex flex-col text-sm sm:text-base md:text-xl lg:text-2xl font-light text-white opacity-95 gap-1 sm:gap-2 drop-shadow-md text-left ml-[10%] sm:ml-[15%] md:ml-[20%] mt-2 lg:mt-4">
            <li>&bull; зарубежная недвижимость</li>
            <li>&bull; подбор новостроек</li>
            <li>&bull; рента</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};
