"use client";

import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingTelegram() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px to avoid cluttering the hero
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="https://t.me/PlaceholderUsername" // REQUIRES CONFIRMATION
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-0 bg-dark text-text rounded-full shadow-2xl hover:shadow-accent/20 transition-all duration-300 overflow-hidden"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-accent text-text group-hover:bg-white group-hover:text-dark transition-colors shrink-0">
              <Send className="w-5 h-5 ml-1" />
            </div>
            <div className="max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
              <span className="px-5 text-xs font-medium uppercase tracking-widest">
                Связаться с агентом
              </span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
