"use client";

import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-dark via-burgundy to-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-gold)_0%,_transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-gold)_0%,_transparent_60%)] opacity-10" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold/20 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-gold/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-gold/60" />
          <Sparkles className="text-gold" size={20} />
          <div className="h-[1px] w-12 bg-gold/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading text-cream leading-tight"
        >
          Bliss
          <span className="block">
            Makeup <span className="text-gold">Studio</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-cream/70 text-lg sm:text-xl tracking-[0.3em] uppercase font-body"
        >
          Where Beauty Meets Elegance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 flex items-center justify-center gap-2 text-cream/50 text-sm font-body"
        >
          <span className="w-1.5 h-1.5 bg-gold/60 rounded-full" />
          Hair &bull; Skin &bull; Makeup &bull; Nails &bull; Bridal
          <span className="w-1.5 h-1.5 bg-gold/60 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919410016655?text=Hi! I'd like to book an appointment at Bliss Makeup Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all tracking-wider uppercase text-sm shadow-lg shadow-gold/20 hover:shadow-gold/40"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-cream/30 text-cream rounded-full hover:bg-cream/10 transition-all tracking-wider uppercase text-sm"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/40 hover:text-gold transition-colors"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.a>
    </section>
  );
}