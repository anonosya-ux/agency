"use client";

import { MessageSquare, X, Send } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai'|'user', text: string}[]>([
    { role: 'ai', text: 'Здравствуйте! Я интеллектуальный консьерж агентства. Какую недвижимость вы ищете?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if(!input.trim()) return;
    setMessages(prev => [...prev, {role: 'user', text: input}]);
    setInput('');
    
    // Mock response
    setTimeout(() => {
      setMessages(prev => [...prev, {role: 'ai', text: 'Отличный запрос. Я передал информацию Виталию. Он свяжется с вами через 5 минут в Telegram или вы можете позвонить нам напрямую по номеру +7 (995) 113-89-37.'}]);
    }, 1500);
  };

  return (
    <>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#1A1A1A] rounded-full text-[#C1A080] flex items-center justify-center shadow-2xl z-50 border border-text/10 hidden md:flex"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 bg-white border border-[#EAEAEA] shadow-2xl z-50 overflow-hidden flex flex-col h-96 hidden md:flex"
          >
            <div className="bg-[#1A1A1A] p-4 flex justify-between items-center text-text">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C1A080] animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-medium">AI Консьерж</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-text transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3 text-sm">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 ${m.role === 'user' ? 'bg-[#1A1A1A] text-text' : 'bg-white border border-[#EAEAEA] text-[#1A1A1A]'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-3 bg-white border-t border-[#EAEAEA] flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ищу двушку..."
                className="flex-1 outline-none text-sm placeholder:text-gray-400"
              />
              <button onClick={handleSend} className="text-[#1A1A1A] hover:text-[#C1A080] transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
