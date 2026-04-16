"use client";

import { motion } from "framer-motion";
import { Tag, Clock, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const offers = [
  {
    badge: "Most Popular",
    title: "Bridal Season Special",
    description:
      "Get 20% off on all bridal packages this wedding season. Includes pre-bridal skincare sessions complimentary.",
    discount: "20% OFF",
    validTill: "June 30, 2026",
    code: "BRIDAL20",
    gradient: "from-burgundy to-burgundy-light",
  },
  {
    badge: "New",
    title: "First Visit Discount",
    description:
      "New to Bliss? Enjoy 15% off your first appointment. Experience premium beauty services at an incredible price.",
    discount: "15% OFF",
    validTill: "Ongoing",
    code: "WELCOME15",
    gradient: "from-gold-dark to-gold",
  },
  {
    badge: "Limited Time",
    title: "Summer Glow Package",
    description:
      "Beat the heat! Book a facial + manicure + pedicure combo and save ₹800. The perfect self-care package.",
    discount: "Save ₹800",
    validTill: "August 31, 2026",
    code: "SUMMER26",
    gradient: "from-charcoal-light to-charcoal",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-16 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Special Offers"
          title="Ongoing Promotions"
          subtitle="Grab these exclusive deals before they're gone. Because you deserve premium beauty at incredible prices."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gold/10"
            >
              <div
                className={`bg-gradient-to-r ${offer.gradient} p-6 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 text-white text-xs tracking-wider uppercase rounded-full font-body">
                    <Tag size={12} />
                    {offer.badge}
                  </span>
                  <span className="text-3xl font-heading font-bold text-white">
                    {offer.discount}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-heading font-bold text-white">
                  {offer.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-charcoal/70 text-sm font-body leading-relaxed">
                  {offer.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-charcoal/50">
                  <Clock size={12} />
                  <span className="font-body">Valid till: {offer.validTill}</span>
                </div>

                <div className="mt-4 bg-cream rounded-lg p-3 text-center">
                  <span className="text-xs text-charcoal/50 font-body block">
                    Use Code
                  </span>
                  <span className="text-lg font-heading font-bold text-burgundy tracking-wider">
                    {offer.code}
                  </span>
                </div>

                <a
                  href="https://wa.me/919410016655?text=Hi! I'd like to avail the offer code {{CODE}} at Bliss Makeup Studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-burgundy text-cream rounded-full text-sm tracking-wider uppercase font-body hover:bg-burgundy-light transition-colors"
                >
                  Claim Offer
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 text-charcoal/40 text-xs font-body">
          * Offers cannot be combined. Terms & conditions apply. Check with studio for details.
        </p>
      </div>
    </section>
  );
}