"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";

interface Message {
  role: "user" | "ai";
  text: string;
}

const FEATURES = [
  { icon: TrendingUp, label: "Рыночный анализ" },
  { icon: Shield, label: "Юридический контроль" },
  { icon: Zap, label: "Результат за 15 сек" },
];

const HINTS = [
  "120 м², Москва, пл. Журавлёва, чистовая отделка",
  "Пентхаус 280 м², ЖК Ritz Carlton, panoramic view",
  "3-комнатная, Хамовники, ЦАО, сталинка, 95 м²",
];

export function AIEvaluation() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [hintIdx, setHintIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Rotate placeholder hints
  useEffect(() => {
    const t = setInterval(() => setHintIdx((i) => (i + 1) % HINTS.length), 3500);
    return () => clearInterval(t);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleEvaluate = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyDetails: trimmed }),
      });
      const data = await res.json();
      const aiText = data.report || "Не удалось получить оценку. Проверьте параметры объекта.";
      setMessages((prev) => [...prev, { role: "ai", text: aiText }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Сеть недоступна. Повторите запрос." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleHintClick = (hint: string) => {
    setInput(hint);
    inputRef.current?.focus();
  };

  return (
    <section id="ai-valuation" className="relative py-32 px-4 bg-[#0D0D0D] overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(197,160,89,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C1A080]/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:pt-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="w-8 h-[1px] bg-[#C1A080]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#C1A080] font-medium">
                AI Аналитика
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-text mb-8">
              Умная<br />
              оценка<br />
              актива.
            </h2>

            <p className="text-text/50 font-light text-lg leading-relaxed mb-14 max-w-sm">
              Опишите объект — и в течение секунды получите расчёт рыночной стоимости от AI-аналитика, обученного на закрытых реестрах сделок Москвы и Дубая.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-5">
              {FEATURES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-[#C1A080]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#C1A080]" />
                  </div>
                  <span className="text-sm text-text/60 uppercase tracking-[0.15em] font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="mt-14 text-text/20 text-xs font-light leading-relaxed max-w-xs">
              * Предварительная оценка. Для точного расчёта свяжитесь с аналитиком.
            </p>
          </motion.div>

          {/* ── Right Column — AI Widget ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Card */}
            <div className="relative rounded-2xl border border-white/[0.07] bg-[#141414] shadow-[0_0_80px_rgba(197,160,89,0.06)] overflow-hidden">

              {/* Card top bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    {["bg-red-500/40", "bg-yellow-500/40", "bg-green-500/40"].map((c, i) => (
                      <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                  </div>
                  <span className="text-[9px] text-text/25 uppercase tracking-[0.25em] font-mono ml-2">
                    fatukhin.ai / smart-valuation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C1A080] animate-pulse" />
                  <span className="text-[9px] text-[#C1A080] uppercase tracking-[0.2em] font-mono">Online</span>
                </div>
              </div>

              {/* Chat area */}
              <div
                ref={chatRef}
                className="px-6 py-6 min-h-[280px] max-h-[340px] overflow-y-auto flex flex-col gap-4 scroll-smooth"
              >
                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#C1A080]/10 border border-[#C1A080]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-[#C1A080]" />
                    </div>
                    <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl rounded-tl-none px-4 py-3 max-w-[85%]">
                      <p className="text-text/70 text-sm font-light leading-relaxed">
                        Здравствуйте. Укажите параметры объекта — площадь, класс, район, состояние — и я мгновенно подготовлю предварительный расчёт стоимости.
                      </p>
                    </div>
                  </motion.div>
                )}

                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      {msg.role === "ai" && (
                        <div className="w-6 h-6 rounded-full bg-[#C1A080]/10 border border-[#C1A080]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="w-3 h-3 text-[#C1A080]" />
                        </div>
                      )}
                      <div
                        className={`rounded-xl px-4 py-3 max-w-[85%] text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#C1A080]/10 border border-[#C1A080]/20 text-text/90 rounded-tr-none ml-auto"
                            : "bg-white/[0.04] border border-white/[0.06] text-text/80 font-light rounded-tl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#C1A080]/10 border border-[#C1A080]/20 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3 h-3 text-[#C1A080]" />
                    </div>
                    <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl rounded-tl-none px-4 py-3">
                      <div className="flex gap-1 items-center h-4">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[#C1A080]/60"
                            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Quick hints */}
              <div className="px-6 pb-3 flex flex-wrap gap-2">
                {HINTS.map((hint, i) => (
                  <button
                    key={i}
                    onClick={() => handleHintClick(hint)}
                    className="text-[10px] text-text/30 border border-white/[0.07] rounded-full px-3 py-1 hover:text-[#C1A080] hover:border-[#C1A080]/30 transition-colors duration-200 font-light"
                  >
                    {hint.length > 30 ? hint.slice(0, 28) + "…" : hint}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="px-6 pb-6">
                <form onSubmit={handleEvaluate} className="relative">
                  <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 focus-within:border-[#C1A080]/40 transition-colors duration-300">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={loading}
                      placeholder={HINTS[hintIdx]}
                      className="flex-1 bg-transparent text-text/80 text-sm font-light placeholder:text-text/20 outline-none disabled:opacity-40 transition-all"
                    />
                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="w-8 h-8 rounded-lg bg-[#C1A080] flex items-center justify-center shrink-0 hover:bg-[#d4b06a] disabled:opacity-30 transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                      <ArrowRight className="w-4 h-4 text-[#0D0D0D]" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Bottom disclaimer */}
              <div className="px-6 pb-5 flex items-center gap-2">
                <div className="w-3 h-3 rounded border border-[#C1A080]/30 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#C1A080]/60" />
                </div>
                <span className="text-[9px] text-text/20 uppercase tracking-[0.2em]">
                  Данные защищены · Анализ на основе 50 000+ сделок
                </span>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
