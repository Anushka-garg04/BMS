"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Offers", href: "#offers" },
  { label: "Bridal", href: "#bridal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-gold/60 rounded-sm rotate-45 group-hover:border-gold transition-colors" />
            <span className="relative z-10 font-heading font-bold text-gold text-lg leading-none">
              B
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-heading font-bold text-cream tracking-wide group-hover:text-gold transition-colors">
              Bliss
            </span>
            <span className="text-[10px] text-cream/50 font-body tracking-[0.25em] uppercase">
              Makeup Studio
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wider uppercase font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919410016655?text=Hi! I'd like to book an appointment at Bliss Makeup Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 bg-gold text-charcoal text-sm font-semibold rounded-full hover:bg-gold-light transition-colors tracking-wide uppercase"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-cream hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/80 hover:text-gold transition-colors text-sm tracking-wider uppercase font-body"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/919410016655?text=Hi! I'd like to book an appointment at Bliss Makeup Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gold text-charcoal text-sm font-semibold rounded-full hover:bg-gold-light transition-colors tracking-wide uppercase"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}