"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bridal Client",
    rating: 5,
    text: "I was so nervous about my bridal look, but the team at BMS made me feel like a queen. The makeup lasted the entire day — from the ceremony to the reception. Absolutely flawless!",
    service: "Bridal Makeup",
  },
  {
    name: "Anjali Gupta",
    role: "Regular Client",
    rating: 5,
    text: "I've been coming here for over 2 years now. The hair spa treatments are incredible, and they always suggest what works best for my hair type. Highly recommend!",
    service: "Hair Spa",
  },
  {
    name: "Neha Verma",
    role: "Party Makeup Client",
    rating: 5,
    text: "Got my party makeup done for a Diwali event and received so many compliments! They really listen to what you want and deliver beyond expectations.",
    service: "Party Makeup",
  },
  {
    name: "Ritu Singh",
    role: "Bridal Client",
    rating: 5,
    text: "The gold bridal package was worth every rupee. Pre-bridal skincare sessions transformed my skin, and the wedding day look was exactly what I dreamed of. Thank you BMS!",
    service: "Bridal Package",
  },
  {
    name: "Kavita Joshi",
    role: "Skincare Client",
    rating: 4,
    text: "The de-tan facial worked wonders for my skin. It felt so refreshing and I could see visible brightening after just one session. Will definitely come back!",
    service: "De-Tan Facial",
  },
  {
    name: "Sakshi Rathi",
    role: "Nail Art Client",
    rating: 5,
    text: "Best nail art in Bulandshahr! The attention to detail is amazing. I got premium nail art done for my engagement and it looked stunning in all the photos.",
    service: "Nail Art",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent(
        (prev) => (prev + newDirection + testimonials.length) % testimonials.length
      );
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real stories from real clients — the smiles and satisfaction speak for themselves."
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4 }}
                className="bg-charcoal-light rounded-2xl p-8 md:p-12 relative"
              >
                <Quote className="absolute top-6 left-6 text-gold/20" size={48} />

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < t.rating
                          ? "text-gold fill-gold"
                          : "text-cream/20 fill-cream/20"
                      }
                    />
                  ))}
                </div>

                <p className="text-cream/80 text-lg md:text-xl leading-relaxed font-body italic relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy to-burgundy-light flex items-center justify-center text-gold font-heading font-bold text-lg">
                      {t.name[0]}
                    </div>
                    <div className="mt-3">
                      <div className="font-heading font-bold text-cream">
                        {t.name}
                      </div>
                      <div className="text-cream/40 text-sm font-body">
                        {t.role}
                      </div>
                    </div>
                  </div>

                  <span className="px-4 py-1.5 bg-gold/10 text-gold text-xs tracking-wider uppercase rounded-full font-body border border-gold/20">
                    {t.service}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current
                        ? "bg-gold w-8"
                        : "bg-cream/20 hover:bg-cream/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => paginate(-1)}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:border-gold hover:text-gold transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { value: "4.9", label: "Google Rating" },
                { value: "500+", label: "Reviews" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-cream/5 rounded-xl p-4 border border-cream/5"
                >
                  <div className="text-2xl font-heading font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-cream/40 text-xs tracking-wider uppercase font-body mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}