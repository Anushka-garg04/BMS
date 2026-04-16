"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
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
          {badge}
        </span>
        <div className="h-[1px] w-12 bg-gold" />
      </div>
      <h2 className="text-4xl md:text-5xl font-heading text-charcoal">
        {title}
      </h2>
      <p className="mt-4 text-charcoal/60 max-w-2xl mx-auto font-body">
        {subtitle}
      </p>
    </motion.div>
  );
}