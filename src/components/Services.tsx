"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Paintbrush, Gem, Crown } from "lucide-react";
import SectionHeader from "./SectionHeader";

const categories = [
  {
    icon: Scissors,
    title: "Hair Styling",
    subtitle: "Cuts, Color & Treatments",
    services: [
      { name: "Haircut & Styling", price: "₹500" },
      { name: "Hair Coloring", price: "₹2,000" },
      { name: "Global Hair Color", price: "₹4,000" },
      { name: "Hair Spa Treatment", price: "₹1,200" },
      { name: "Keratin Treatment", price: "₹5,000" },
      { name: "Blowout & Styling", price: "₹800" },
    ],
  },
  {
    icon: Sparkles,
    title: "Skincare",
    subtitle: "Facials & Skin Treatments",
    services: [
      { name: "Classic Facial", price: "₹1,000" },
      { name: "Anti-Aging Facial", price: "₹2,500" },
      { name: "De-Tan Facial", price: "₹1,500" },
      { name: "Gold Facial", price: "₹2,000" },
      { name: "Acne Treatment", price: "₹1,800" },
      { name: "Skin Brightening", price: "₹2,200" },
    ],
  },
  {
    icon: Paintbrush,
    title: "Makeup",
    subtitle: "Party, Bridal & Everyday",
    services: [
      { name: "Party Makeup", price: "₹1,500" },
      { name: "Engagement Makeup", price: "₹5,000" },
      { name: "Bridal Makeup", price: "₹15,000" },
      { name: "HD Airbrush Makeup", price: "₹20,000" },
      { name: "Everyday Glam", price: "₹800" },
      { name: "Pre-Wedding Shoot", price: "₹8,000" },
    ],
  },
  {
    icon: Gem,
    title: "Nails",
    subtitle: "Manicure, Pedicure & Nail Art",
    services: [
      { name: "Classic Manicure", price: "₹500" },
      { name: "Gel Manicure", price: "₹1,000" },
      { name: "Classic Pedicure", price: "₹600" },
      { name: "Spa Pedicure", price: "₹1,200" },
      { name: "Nail Art (Basic)", price: "₹300" },
      { name: "Nail Art (Premium)", price: "₹800" },
    ],
  },
  {
    icon: Crown,
    title: "Bridal Packages",
    subtitle: "Complete Bridal Solutions",
    services: [
      { name: "Silver Package", price: "₹25,000" },
      { name: "Gold Package", price: "₹40,000" },
      { name: "Platinum Package", price: "₹60,000" },
      { name: "Mehendi Makeup", price: "₹3,000" },
      { name: "Reception Look", price: "₹8,000" },
      { name: "Bridesmaid Package", price: "₹5,000" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Our Services"
          title="Premium Beauty Services"
          subtitle="From everyday glam to bridal transformations — we offer a complete range of beauty services crafted with care and expertise."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gold/10 hover:border-gold/30"
            >
              <div className="p-6 bg-gradient-to-r from-burgundy to-burgundy-light">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <cat.icon className="text-gold" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-cream">
                      {cat.title}
                    </h3>
                    <p className="text-cream/60 text-xs tracking-wider uppercase">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {cat.services.map((service) => (
                    <li
                      key={service.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-charcoal/80 font-body">
                        {service.name}
                      </span>
                      <span className="text-burgundy font-semibold font-body">
                        {service.price}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/919410016655?text=Hi! I'd like to book an appointment at Bliss Makeup Studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center py-2.5 border border-gold/40 text-gold-dark rounded-full text-sm tracking-wider uppercase hover:bg-gold hover:text-charcoal transition-all font-body"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-charcoal/50 text-sm font-body">
          * Prices are indicative. Final pricing may vary based on hair length,
          product choice, and specific requirements.
        </p>
      </div>
    </section>
  );
}