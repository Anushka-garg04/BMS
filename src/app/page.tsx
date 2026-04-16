import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PortfolioGallery from "@/components/PortfolioGallery";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Offers from "@/components/Offers";
import BridalForm from "@/components/BridalForm";
import FAQ from "@/components/FAQ";
import BookNow from "@/components/BookNow";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <PortfolioGallery />
        <Achievements />
        <Testimonials />
        <Offers />
        <BridalForm />
        <FAQ />
        <BookNow />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}