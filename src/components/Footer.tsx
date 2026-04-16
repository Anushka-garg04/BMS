import { Heart, Camera } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Gallery", href: "#gallery" },
  { label: "Achievements", href: "#achievements" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Offers", href: "#offers" },
];

const serviceLinks = [
  "Hair Styling & Cuts",
  "Skincare & Facials",
  "Bridal Makeup",
  "Party Makeup",
  "Nail Art & Manicure",
  "Keratin Treatments",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-heading font-bold text-gold tracking-wider">
                BMS
              </span>
            </div>
            <p className="text-sm font-body leading-relaxed">
              Where Beauty Meets Elegance. Premium beauty services in the heart
              of Bulandshahr, crafted with passion and expertise.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/monica_.garg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all text-sm font-body"
                aria-label="Instagram"
              >
                <Camera size={18} />
              </a>
              <a
                href="https://wa.me/919410016655"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all text-sm font-body"
                aria-label="WhatsApp"
              >
                W
              </a>
              <a
                href="tel:+919410016655"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all text-sm font-body"
                aria-label="Call"
              >
                P
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-cream mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-body hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-cream mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm font-body hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-cream mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm font-body">
              <p>
                Himmat Singh Wali Gali,
                <br />
                Near Pandit Jewellers,
                <br />
                DM Road, Bulandshahr
              </p>
              <p>
                <a
                  href="tel:+919410016655"
                  className="hover:text-gold transition-colors"
                >
                  +91 94100 16655
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/919410016655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-cream/40">
            &copy; {new Date().getFullYear()} Bliss Makeup Studio. All rights
            reserved.
          </p>
          <p className="text-xs font-body text-cream/40 flex items-center gap-1">
            Made with <Heart size={10} className="text-gold" /> in Bulandshahr
          </p>
        </div>
      </div>
    </footer>
  );
}