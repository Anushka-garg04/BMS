"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";

const businessHours = [
  { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
  { day: "Sunday", time: "10:00 AM – 6:00 PM" },
];

export default function BookNow() {
  const whatsappUrl =
    "https://wa.me/919410016655?text=Hi! I'd like to book an appointment at Bliss Makeup Studio";

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-burgundy-dark via-burgundy to-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_50%)] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-body">
              Book an Appointment
            </span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>

          <h2 className="text-4xl md:text-5xl font-heading text-cream">
            Ready to Look{" "}
            <span className="text-gold">Your Best?</span>
          </h2>
          <p className="mt-4 text-cream/60 max-w-xl mx-auto font-body">
            Book your appointment in seconds. Just tap the button below
            and send us a message on WhatsApp — we&apos;ll confirm your slot right
            away.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-green-600 hover:bg-green-700 text-white rounded-2xl transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={26} />
              </div>
              <div>
                <span className="text-lg font-heading font-bold block">
                  WhatsApp Us
                </span>
                <span className="text-sm text-white/70 font-body">
                  +91 94100 16655
                </span>
              </div>
            </a>

            <a
              href="tel:+919410016655"
              className="flex items-center gap-4 p-6 bg-gold hover:bg-gold-light text-charcoal rounded-2xl transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-charcoal/10 flex items-center justify-center flex-shrink-0">
                <Phone size={26} />
              </div>
              <div>
                <span className="text-lg font-heading font-bold block">
                  Call Us
                </span>
                <span className="text-sm text-charcoal/70 font-body">
                  +91 94100 16655
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 bg-white/5 border border-cream/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-gold" size={20} />
                <h3 className="font-heading font-bold text-cream">
                  Business Hours
                </h3>
              </div>
              {businessHours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between text-sm py-2 border-b border-cream/10 last:border-0"
                >
                  <span className="text-cream/70 font-body">{h.day}</span>
                  <span className="text-gold font-body font-semibold">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white/5 border border-cream/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-gold" size={20} />
                <h3 className="font-heading font-bold text-cream">
                  Visit Us
                </h3>
              </div>
              <p className="text-cream/70 text-sm font-body leading-relaxed">
                Himmat Singh Wali Gali,
                <br />
                Near Pandit Jewellers,
                <br />
                DM Road, Bulandshahr
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-cream/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27928.32704522889!2d77.84!3d28.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c91b4a8a0e1e3%3A0x6f0e3e0a1a6e0a0a!2sBulandshahr%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BMS Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}