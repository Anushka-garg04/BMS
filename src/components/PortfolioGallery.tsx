"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Heart } from "lucide-react";
import SectionHeader from "./SectionHeader";

const filters = ["All", "Bridal", "Party", "Natural", "Editorial", "Studio"];

const items = [
  { id: 1, cat: "Bridal", title: "Royal Bridal Look", type: "portfolio" as const },
  { id: 2, cat: "Party", title: "Glam Night Out", type: "portfolio" as const },
  { id: 3, cat: "Natural", title: "Soft Dewy Glow", type: "portfolio" as const },
  { id: 4, cat: "Bridal", title: "Reception Elegance", type: "portfolio" as const },
  { id: 5, cat: "Studio", title: "Salon Interior", type: "gallery" as const },
  { id: 6, cat: "Editorial", title: "Fashion Forward", type: "portfolio" as const },
  { id: 7, cat: "Party", title: "Festive Glam", type: "portfolio" as const },
  { id: 8, cat: "Studio", title: "Bridal Suite", type: "gallery" as const },
  { id: 9, cat: "Natural", title: "Barely There", type: "portfolio" as const },
  { id: 10, cat: "Bridal", title: "Mehendi Glow", type: "portfolio" as const },
  { id: 11, cat: "Studio", title: "Workshop Day", type: "gallery" as const },
  { id: 12, cat: "Editorial", title: "Avant-Garde", type: "portfolio" as const },
];

const gradients = [
  "from-rose-300 to-pink-500",
  "from-purple-300 to-indigo-500",
  "from-amber-200 to-orange-400",
  "from-teal-300 to-emerald-500",
  "from-fuchsia-300 to-pink-600",
  "from-sky-300 to-blue-500",
  "from-lime-200 to-green-400",
  "from-red-300 to-rose-600",
  "from-yellow-200 to-amber-500",
  "from-pink-400 to-rose-600",
  "from-cyan-200 to-teal-400",
  "from-indigo-300 to-purple-500",
];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.cat === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Portfolio & Gallery"
          title="Our Work & Studio"
          subtitle="Transformations, looks, and a peek inside Bliss Makeup Studio."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs tracking-wider uppercase font-body transition-all ${
                activeFilter === cat
                  ? "bg-burgundy text-cream"
                  : "bg-white text-charcoal/60 border border-charcoal/10 hover:border-gold hover:text-burgundy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[(item.id - 1) % gradients.length]}`}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === "gallery" ? (
                    <Camera size={24} className="text-white/80 mb-1" />
                  ) : (
                    <Heart size={24} className="text-white/80 mb-1" />
                  )}
                  <p className="text-white text-xs font-body">{item.title}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] text-white/70 font-body tracking-wider uppercase">
                    {item.type === "gallery" ? "Studio" : item.cat}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}