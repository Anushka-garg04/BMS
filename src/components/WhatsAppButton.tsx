"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919410016655?text=Hi! I'd like to book an appointment at Bliss Makeup Studio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="hidden md:block pr-4 pl-5 text-sm font-body font-semibold tracking-wide">
        Book Appointment
      </span>
      <div className="w-14 h-14 md:w-12 md:h-12 md:mr-1 flex items-center justify-center rounded-full bg-green-500 md:bg-transparent">
        <MessageCircle size={26} className="md:group-hover:scale-110 transition-transform" />
      </div>
    </a>
  );
}