"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeader from "./SectionHeader";

const galleryItems = [
  { id: 1, title: "Salon Interior", category: "Ambiance", aspect: "aspect-square" },
  { id: 2, title: "Bridal Suite", category: "Ambiance", aspect: "aspect-[3/4]" },
  { id: 3, title: "Hair Styling Station", category: "Ambiance", aspect: "aspect-square" },
  { id: 4, title: "Diwali Event", category: "Events", aspect: "aspect-[4/3]" },
  { id: 5, title: "Workshop Day", category: "Events", aspect: "aspect-square" },
  { id: 6, title: "BTS Photoshoot", category: "Behind the Scenes", aspect: "aspect-[3/4]" },
  { id: 7, title: "Product Display", category: "Ambiance", aspect: "aspect-square" },
  { id: 8, title: "Client Transformation", category: "Behind the Scenes", aspect: "aspect-[4/3]" },
  { id: 9, title: "Award Night", category: "Events", aspect: "aspect-square" },
  { id: 10, title: "Relaxation Corner", category: "Ambiance", aspect: "aspect-[3/4]" },
  { id: 11, title: "Team Photo", category: "Behind the Scenes", aspect: "aspect-square" },
  { id: 12, title: "Celebration Setup", category: "Events", aspect: "aspect-[3/4]" },
];

const gradients = [
  "from-pink-200 to-rose-400",
  "from-violet-200 to-purple-500",
  "from-cyan-200 to-teal-400",
  "from-amber-200 to-yellow-400",
  "from-lime-200 to-green-400",
  "from-sky-200 to-blue-400",
  "from-rose-200 to-pink-400",
  "from-orange-200 to-red-400",
  "from-emerald-200 to-green-500",
  "from-fuchsia-200 to-pink-500",
  "from-indigo-200 to-purple-400",
  "from-teal-200 to-cyan-400",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedItem = galleryItems.find((item) => item.id === selected);

  return (
    <section id="gallery" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Gallery"
          title="Inside Bliss"
          subtitle="Step inside our studio — a glimpse of our space, our events, and the moments that make BMS special."
        />

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelected(item.id)}
            >
              <div
                className={`relative ${item.aspect} rounded-xl overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[(item.id - 1) % gradients.length]}`}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <span className="text-white/80 text-sm tracking-[0.2em] uppercase font-body">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-heading text-white font-bold mt-1">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-1 bg-white/90 text-charcoal text-xs rounded font-body">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${gradients[(selectedItem.id - 1) % gradients.length]} flex items-center justify-center`}
              >
                <div className="text-center">
                  <span className="text-white/80 text-sm tracking-[0.2em] uppercase font-body">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-3xl font-heading text-white font-bold mt-2">
                    {selectedItem.title}
                  </h3>
                  <p className="text-white/60 mt-2 font-body text-sm">
                    Photo placeholder — replace with actual image
                  </p>
                </div>
              </div>
            </motion.div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-cream/80 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}