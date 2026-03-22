"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Пентхаус (Скрытая продажа)",
    price: "150 000 000 ₽",
    area: "140 м²",
    img: "https://images.unsplash.com/photo-1600607687931-ce8e00280f55?q=80&w=2000&auto=format&fit=crop",
    tags: ["Off-market", "White Box"]
  },
  {
    id: 2,
    title: "Особняк в Хамовниках",
    price: "210 000 000 ₽",
    area: "210 м²",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
    tags: ["Сдан", "Клубный дом"]
  },
  {
    id: 3,
    title: "Башня Федерация (ГАБ)",
    price: "95 000 000 ₽",
    area: "98 м²",
    img: "https://plus.unsplash.com/premium_photo-1661882269222-26edff7ad62d?q=80&w=2000&auto=format&fit=crop",
    tags: ["Готовый бизнес", "Арендатор"]
  }
];

export function Catalog() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] block mb-4">Наши объекты</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A]">Закрытая база</h2>
          </div>
          <Link href="/catalog" className="hidden md:flex items-center gap-2 uppercase tracking-widest text-xs font-semibold hover:text-[#C5A059] transition-colors">
            Смотреть все <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROPERTIES.map((prop, i) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
                <Image 
                  src={prop.img} 
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.25,1,0.5,1]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {prop.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-[#1A1A1A]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl mb-2 group-hover:text-[#C5A059] transition-colors">{prop.title}</h3>
                  <p className="text-sm text-gray-400">{prop.area}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#1A1A1A]">{prop.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
