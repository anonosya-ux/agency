"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Каталог", href: "/catalog" },
  { label: "Купить", href: "/services/buy" },
  { label: "Продать", href: "/services/sell" },
  { label: "Обмен", href: "/services/exchange" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 10));
    return unsub;
  }, [scrollY]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] transition-colors duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.55)" : "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-20 md:h-24 lg:h-28 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center justify-center group w-28 md:w-40 py-2 hover:opacity-80 transition-opacity">
            <Logo className="w-full h-auto text-accent" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 pl-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark/80 hover:text-accent font-[family-name:var(--font-actay)] text-[13px] xl:text-[15px] tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA / Contact Info */}
          <div className="hidden lg:flex flex-col items-end gap-2 shrink-0">
            <div className="flex items-center gap-4 xl:gap-5">
              <a href="https://t.me/fatukhin" target="_blank" rel="noreferrer" className="text-dark/60 hover:text-accent transition-colors">
                <FaTelegramPlane className="w-6 h-6 xl:w-7 xl:h-7" />
              </a>
              <a href="https://wa.me/79951138937" target="_blank" rel="noreferrer" className="text-dark/60 hover:text-accent transition-colors">
                <FaWhatsapp className="w-6 h-6 xl:w-7 xl:h-7" />
              </a>
              <a href="https://max.ru/+79951138937" target="_blank" rel="noreferrer" title="Написать в Max" className="text-dark/60 hover:text-accent transition-colors mt-[1px]">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 xl:w-7 xl:h-7">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 13h-2v-3.5L11.5 14h-1L9 11.5V15H7V9h2l1.5 2.5L12 9h2v6z"/>
                </svg>
              </a>
              <div className="h-4 w-[1px] bg-dark/10 mx-2"></div>
              <a
                href="tel:+79951138937"
                className="flex items-center gap-2 text-dark font-[family-name:var(--font-actay)] text-lg xl:text-xl hover:text-accent transition-colors"
                style={{ padding: "4px 8px", border: "1px solid rgba(193, 160, 128, 0.5)", borderRadius: "2px" }}
              >
                <span className="font-medium tracking-wide text-accent">+7 995 113 89 37</span>
              </a>
            </div>
            
            {/* Search Input Fake box */}
            <div className="flex items-center justify-between w-[200px] border-b border-dark/20 pb-1 mt-1 cursor-text">
               <span className="text-dark/30 text-[10px] uppercase tracking-wider">Поиск...</span>
               <Search className="w-3 h-3 text-dark/30" />
            </div>
          </div>

          {/* Mobile/Tablet Burger */}
          <button
            className="lg:hidden text-dark p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile/Tablet Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-[90] bg-bg/95 flex flex-col items-center justify-center gap-10 lg:hidden font-[family-name:var(--font-actay)] backdrop-blur-md"
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
            transition={{ delay: menuOpen ? i * 0.07 + 0.1 : 0 }}
          >
            <Link
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl md:text-3xl text-dark hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ delay: menuOpen ? 0.45 : 0 }}
          className="flex flex-col items-center gap-4 mt-6"
        >
          <a
            href="tel:+79951138937"
            onClick={() => setMenuOpen(false)}
            className="text-accent text-xl border border-accent/50 px-6 py-2"
          >
            +7 995 113 89 37
          </a>
          <div className="flex gap-5 mt-2">
            <a href="https://t.me/fatukhin" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="w-11 h-11 rounded-full bg-[#0088cc] flex items-center justify-center text-white">
              <FaTelegramPlane className="w-5 h-5" />
            </a>
            <a href="https://wa.me/79951138937" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white">
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
