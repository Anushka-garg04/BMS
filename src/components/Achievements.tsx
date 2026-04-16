"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Star, Trophy } from "lucide-react";

const achievements = [
  { icon: Trophy, year: "2024", title: "Best Salon Award", desc: "Top beauty salon in Bulandshahr district" },
  { icon: GraduationCap, year: "2023", title: "Advanced Bridal Certification", desc: "Lakmé Academy, Mumbai" },
  { icon: Star, year: "2023", title: "4.9 Google Rating", desc: "500+ verified reviews" },
  { icon: Award, year: "2021", title: "COVID Safety Excellence", desc: "Certified hygiene standards" },
  { icon: GraduationCap, year: "2020", title: "L'Oréal Color Specialist", desc: "Expert colorist certification" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-[1px] w-12 bg-gold" />
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
            Achievements
          </span>
          <div className="h-[1px] w-12 bg-gold" />
        </div>
        <h2 className="text-4xl font-heading text-cream text-center">
          Milestones & Recognition
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-5 bg-white/5 rounded-xl border border-cream/5 hover:border-gold/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-burgundy/30 flex items-center justify-center mx-auto mb-3">
                <item.icon className="text-gold" size={22} />
              </div>
              <span className="text-gold text-xs tracking-wider uppercase font-body">
                {item.year}
              </span>
              <h3 className="font-heading font-bold text-cream text-sm mt-1">
                {item.title}
              </h3>
              <p className="text-cream/40 text-xs font-body mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}