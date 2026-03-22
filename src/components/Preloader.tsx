"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = '';
        }, 500); // Small delay at 100%
      }
      setProgress(currentProgress);
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1A1A1A] text-white"
        >
          <div className="flex flex-col items-center gap-8">
            <span className="text-xs uppercase tracking-[0.4em] font-light text-[#C5A059]">
              Фатюхин и Ко
            </span>
            <div className="font-serif text-[12vw] md:text-9xl font-light tabular-nums tracking-tighter mix-blend-difference overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block"
              >
                {progress}%
              </motion.span>
            </div>
            
            <div className="w-48 h-[1px] bg-white/20 mt-8 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
