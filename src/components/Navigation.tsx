"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Каталог", href: "/catalog" },
  { label: "Новостройки", href: "/new-buildings" },
  { label: "Зарубежная", href: "/abroad" },
  { label: "Аренда", href: "/rent" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] transition-colors duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(17,17,17,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center justify-center group w-32 md:w-40 hover:opacity-80 transition-opacity">
            <Logo className={`w-full h-auto transition-colors duration-500 ${scrolled ? 'text-white' : 'text-text'}`} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text/70 hover:text-text text-[11px] uppercase tracking-[0.18em] font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+79951138937"
              className="flex items-center gap-2 text-text/70 hover:text-accent transition-colors text-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-light tracking-wide">+7 (995) 113-89-37</span>
            </a>
            <Link
              href="/contacts"
              className="group relative overflow-hidden bg-accent text-[#1A1A1A] px-6 py-3 uppercase tracking-[0.15em] text-[10px] font-bold hover:scale-105 transition-transform duration-300"
            >
              Консультация
            </Link>
          </div>

          {/* Mobile/Tablet Burger */}
          <button
            className="lg:hidden text-text p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile/Tablet Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-[90] bg-[#111111] flex flex-col items-center justify-center gap-10 lg:hidden"
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
              className="font-serif text-4xl text-text hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.a
          href="tel:+79951138937"
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ delay: menuOpen ? 0.45 : 0 }}
          className="text-accent text-xl mt-6"
        >
          +7 (995) 113-89-37
        </motion.a>
      </motion.div>
    </>
  );
}
