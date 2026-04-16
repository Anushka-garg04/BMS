"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "How do I book an appointment at Bliss Makeup Studio?",
    a: "You can book directly through our WhatsApp at +91 94100 16655, or call us during business hours. We recommend booking at least 2-3 days in advance, especially for bridal and party makeup services.",
  },
  {
    q: "What are your business hours?",
    a: "We're open Monday through Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 6:00 PM. For bridal bookings, early morning slots can be arranged with prior notice.",
  },
  {
    q: "Do I need to pay an advance for bridal package bookings?",
    a: "Yes, we require a 30% advance to confirm your bridal booking. This ensures your date and time slot are reserved exclusively for you. The remaining amount can be paid on the day of the service.",
  },
  {
    q: "What products do you use?",
    a: "We use premium, professional-grade products from brands like MAC, Bobbi Brown, Lakmé, L'Oréal Professionnel, and Schwarzkopf. For bridal services, we also offer HD and airbrush makeup options.",
  },
  {
    q: "Can I get a patch test before my bridal appointment?",
    a: "Absolutely! We highly recommend a patch test at least 3-5 days before your bridal appointment. This helps ensure there are no allergic reactions and gives us a chance to fine-tune your look.",
  },
  {
    q: "Do you offer home visits for bridal makeup?",
    a: "Yes, we offer home visit services for bridal makeup within Bulandshahr. A nominal travel charge applies depending on the location. Please confirm availability at the time of booking.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations made 48+ hours before the appointment are fully refundable. Cancellations within 24-48 hours will receive 50% of the advance back. Same-day cancellations are non-refundable.",
  },
  {
    q: "Can I customize a package for my needs?",
    a: "Of course! We love creating personalized packages. Whether it's a combination of skincare sessions leading up to your wedding day, or a group package for bridesmaids, just tell us what you need and we'll tailor it for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          badge="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know before your visit. Can't find what you're looking for? Just WhatsApp us!"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border border-gold/15 rounded-xl overflow-hidden bg-white hover:border-gold/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-heading font-semibold text-charcoal pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-charcoal/60 font-body text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-charcoal/50 text-sm font-body">
            Still have questions? We&apos;re happy to help!
          </p>
          <a
            href="https://wa.me/919410016655?text=Hi! I have a question about Bliss Makeup Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-6 py-2.5 bg-green-600 text-white rounded-full text-sm font-body font-semibold hover:bg-green-700 transition-colors"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}