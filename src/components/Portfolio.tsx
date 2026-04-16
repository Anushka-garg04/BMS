"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

const categories = ["All", "Bridal", "Party", "Natural", "Editorial"];

const portfolioItems = [
  { id: 1, category: "Bridal", title: "Royal Bridal Look", desc: "Traditional bridal transformation" },
  { id: 2, category: "Party", title: "Glam Night Out", desc: "Bold and beautiful party glam" },
  { id: 3, category: "Natural", title: "Soft Dewy Glow", desc: "Natural everyday radiance" },
  { id: 4, category: "Bridal", title: "Reception Elegance", desc: "Elegant reception styling" },
  { id: 5, category: "Editorial", title: "Fashion Forward", desc: "Bold creative editorial look" },
  { id: 6, category: "Party", title: "Festive Glam", desc: "Diwali & festive season looks" },
  { id: 7, category: "Natural", title: "Barely There", desc: "Minimal makeup, maximum impact" },
  { id: 8, category: "Editorial", title: "Avant-Garde", desc: "Artistic & experimental styling" },
  { id: 9, category: "Bridal", title: "Mehendi Glow", desc: "Vibrant mehendi ceremony look" },
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
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Portfolio"
          title="Our Transformations"
          subtitle="Every face tells a story. Here are some of our favorite chapters — from bridal radiance to everyday elegance."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm tracking-wider uppercase font-body transition-all ${
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
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[(item.id - 1) % gradients.length]}`}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs tracking-[0.2em] uppercase text-white/70 font-body">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-heading text-white font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 font-body mt-1">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1 bg-gold/90 text-charcoal text-xs tracking-wider uppercase rounded-full font-body">
                    Before & After
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