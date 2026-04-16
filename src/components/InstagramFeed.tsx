"use client";

import { Camera, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const INSTAGRAM_PROFILE = "https://instagram.com/monica_.garg";
const LIGHTWIDGET_ID = "PASTE_YOUR_LIGHTWIDGET_ID_HERE";

export default function InstagramFeed() {
  const isLiveFeed = LIGHTWIDGET_ID !== "PASTE_YOUR_LIGHTWIDGET_ID_HERE";

  return (
    <section id="instagram" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Instagram"
          title="@monica_.garg"
          subtitle="Follow us on Instagram for the latest looks, behind-the-scenes moments, and beauty inspiration."
        />

        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-burgundy hover:text-gold transition-colors font-body text-sm"
          >
            <Camera size={16} />
            instagram.com/monica_.garg
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="mt-10">
          {isLiveFeed ? (
            <div className="rounded-xl overflow-hidden">
              <iframe
                src={`https://cdn.lightwidget.com/widgets/${LIGHTWIDGET_ID}.html`}
                scrolling="no"
                allowTransparency
                className="lightwidget-widget w-full border-0"
                style={{ overflow: "hidden", width: "100%" }}
                title="Instagram Feed"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <a
                  key={i}
                  href={INSTAGRAM_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square bg-gradient-to-br from-rose-100 to-pink-200 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={28} className="text-white" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-full font-body font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/20"
          >
            <Camera size={18} />
            Follow @monica_.garg on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}