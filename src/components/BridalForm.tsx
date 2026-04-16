"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Heart, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";

const occasions = [
  "Wedding",
  "Engagement",
  "Reception",
  "Mehendi",
  "Pre-Wedding Shoot",
  "Other",
];

const services = [
  "Bridal Makeup",
  "Hair Styling",
  "Skincare / Facials",
  "Nail Art",
  "Full Bridal Package",
  "Bridesmaid Package",
];

export default function BridalForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occasion: "",
    date: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'd like to book a pre-bridal consultation at Bliss Makeup Studio.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Occasion:* ${formData.occasion}
*Event Date:* ${formData.date}
*Service:* ${formData.service}
*Message:* ${formData.message}`;

    const encoded = encodeURIComponent(message);
    window.open(
      `https://wa.me/919410016655?text=${encoded}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="bridal" className="py-16 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-burgundy)_0%,_transparent_60%)] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              badge="Pre-Bridal Consultation"
              title="Your Bridal Journey Starts Here"
              subtitle="Tell us about your big day and we'll craft the perfect look for you. Get a personalized plan with skincare prep, trial sessions, and the flawless bridal look you deserve."
            />

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Heart,
                  title: "Personalized Plan",
                  desc: "Customized skincare & beauty schedule leading up to your wedding day",
                },
                {
                  icon: Calendar,
                  title: "Trial Session",
                  desc: "Book a trial run to finalize your look — no surprises on the big day",
                },
                {
                  icon: Sparkles,
                  title: "Day-of Perfection",
                  desc: "Our team arrives on-site for flawless execution on your special day",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-cream/10 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-cream text-sm">
                      {item.title}
                    </h4>
                    <p className="text-cream/50 text-xs font-body mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-gold/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-green-400" size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold text-cream">
                  Request Sent!
                </h3>
                <p className="text-cream/60 font-body text-sm mt-2">
                  We&apos;ll get back to you on WhatsApp shortly to discuss your
                  bridal plan.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-cream/10 rounded-2xl p-6 sm:p-8 space-y-4"
              >
                <div>
                  <label className="block text-cream/70 text-xs font-body tracking-wider uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 font-body text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-cream/70 text-xs font-body tracking-wider uppercase mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 font-body text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/70 text-xs font-body tracking-wider uppercase mb-1.5">
                      Occasion
                    </label>
                    <select
                      name="occasion"
                      required
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-cream/10 rounded-lg px-4 py-3 text-cream font-body text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-charcoal">
                        Select
                      </option>
                      {occasions.map((o) => (
                        <option key={o} value={o} className="bg-charcoal">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-cream/70 text-xs font-body tracking-wider uppercase mb-1.5">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-cream/10 rounded-lg px-4 py-3 text-cream font-body text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cream/70 text-xs font-body tracking-wider uppercase mb-1.5">
                    Service Interested In
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((s) => (
                      <label
                        key={s}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all text-xs font-body ${
                          formData.service === s
                            ? "border-gold bg-gold/10 text-gold"
                            : "border-cream/10 bg-white/5 text-cream/60 hover:border-cream/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={s}
                          checked={formData.service === s}
                          onChange={handleChange}
                          className="hidden"
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-cream/70 text-xs font-body tracking-wider uppercase mb-1.5">
                    Any Special Requests?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your dream look, inspiration, or anything specific..."
                    className="w-full bg-white/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 font-body text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gold text-charcoal font-heading font-bold rounded-full tracking-wider uppercase text-sm hover:bg-gold-light transition-colors"
                >
                  Book Consultation via WhatsApp
                </button>

                <p className="text-cream/30 text-[10px] text-center font-body">
                  This will open WhatsApp with your details pre-filled.
                  <br />
                  We&apos;ll never share your information.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}