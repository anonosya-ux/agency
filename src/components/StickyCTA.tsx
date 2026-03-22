"use client";

import { Send } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 h-16 bg-white/80 backdrop-blur-md border border-[#EAEAEA] shadow-xl flex items-center px-4 justify-between">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-gray-400">Связь</span>
        <a href="tel:+79951138937" className="text-sm font-medium text-[#1A1A1A]">+7 (995) 113-89-37</a>
      </div>
      <a 
        href="https://t.me/Vitali_fat"
        target="_blank"
        rel="noreferrer" 
        className="bg-[#1A1A1A] text-white px-6 py-2 uppercase tracking-widest text-[10px] font-medium flex items-center gap-2 hover:bg-[#C5A059] transition-colors"
      >
        Telegram <Send className="w-3 h-3" />
      </a>
    </div>
  );
}
