"use client";

import { Send } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50 h-16 bg-white/90 backdrop-blur-md border border-[#EAEAEA] shadow-xl flex items-center px-4 justify-between gap-3">
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] uppercase tracking-widest text-gray-400">Связь</span>
        <a href="tel:+79951138937" className="text-sm font-medium text-dark truncate">+7 (995) 113-89-37</a>
      </div>
      <a 
        href="https://t.me/Vitali_fat"
        target="_blank"
        rel="noreferrer" 
        className="flex-shrink-0 bg-dark text-text px-5 py-2.5 uppercase tracking-widest text-[10px] font-medium flex items-center gap-2 hover:bg-accent transition-colors whitespace-nowrap"
      >
        Telegram <Send className="w-3 h-3" />
      </a>
    </div>
  );
}
