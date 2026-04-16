"use client";

import { motion } from "framer-motion";
import { Heart, Award, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Heart, value: "2000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-burgundy to-burgundy-dark">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <span className="text-gold text-6xl font-heading">BMS</span>
                  <p className="text-cream/60 mt-2 tracking-widest uppercase text-sm">
                    Founder Portrait
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/30 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-gold" />
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading text-charcoal leading-tight">
              A Passion for
              <span className="text-burgundy"> Beautiful </span>
              Transformations
            </h2>

            <p className="mt-6 text-charcoal/70 leading-relaxed font-body">
              At Bliss Makeup Studio, we believe every person deserves to feel
              radiant. Founded with a deep passion for beauty and self-care, BMS
              has grown into Bulandshahr&apos;s trusted destination for premium beauty
              services. From everyday glam to bridal transformations, we bring
              artistry, warmth, and professionalism to every appointment.
            </p>

            <p className="mt-4 text-charcoal/70 leading-relaxed font-body">
              Our studio is more than just a salon—it&apos;s a space where confidence
              is crafted, where skilled hands and quality products come together
              to create looks that celebrate you.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-burgundy" size={20} />
                  </div>
                  <div className="text-2xl font-heading font-bold text-burgundy">
                    {stat.value}
                  </div>
                  <div className="text-xs text-charcoal/50 tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}