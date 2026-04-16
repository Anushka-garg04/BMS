import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bliss Makeup Studio | Where Beauty Meets Elegance",
  description:
    "Bliss Makeup Studio (BMS) — Premium beauty salon in Bulandshahr offering hair styling, skincare, makeup, nails, and bridal packages. Book your appointment today!",
  keywords: [
    "beauty salon",
    "makeup studio",
    "hair styling",
    "skincare",
    "bridal makeup",
    "nails",
    "Bulandshahr",
    "Bliss Makeup Studio",
    "BMS",
  ],
  openGraph: {
    title: "Bliss Makeup Studio | Where Beauty Meets Elegance",
    description:
      "Premium beauty salon in Bulandshahr offering hair styling, skincare, makeup, nails, and bridal packages.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}