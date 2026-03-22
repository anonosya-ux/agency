"use client";

import { motion } from "framer-motion";
import { Building2, Key, ReceiptRussianRuble, Search } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: 1, title: "Продать недвижимость", icon: Key, href: "/services/sell", detail: "Выгодная продажа на ваших условиях" },
  { id: 2, title: "Купить квартиру", icon: Search, href: "/services/buy", detail: "Подбор на вторичном рынке" },
  { id: 3, title: "Новостройки", icon: Building2, href: "/services/buy", detail: "Инвестиции и для жизни" },
  { id: 4, title: "Срочный выкуп", icon: ReceiptRussianRuble, href: "/services/fast-buy", detail: "Деньги в течение 3 дней" },
];

export function Gateway() {
  return (
    <section className="py-24 px-4 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link href={cat.href} className="group block bg-white p-8 border border-[#EAEAEA] hover:border-[#1A1A1A] transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#C5A059]/10 transition-colors duration-700" />
                
                <cat.icon className="w-8 h-8 text-[#1A1A1A] mb-8 group-hover:scale-110 transition-transform duration-500 ease-out" />
                
                <h3 className="font-serif text-2xl mb-3 text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors duration-300">
                  {cat.title}
                </h3>
                
                <p className="text-sm text-gray-500 font-light mb-8">
                  {cat.detail}
                </p>
                
                <span className="text-xs uppercase tracking-widest font-medium border-b border-[#1A1A1A] pb-1">
                  Подробнее
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
