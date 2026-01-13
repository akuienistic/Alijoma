import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Music from "@/components/Music";
import Videos from "@/components/Videos";
import Discography from "@/components/Discography";
import Gallery from "@/components/GallerySection";
import Booking from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <Hero />
      <Stats />
      <section id="about">
        <About />
      </section>
      <section id="music">
        <Music />
      </section>
      <Videos />
      <Discography />
      <section id="gallery">
        <Gallery />
      </section>
      <section id="booking">
        <Booking />
      </section>
      <Footer />
    </motion.div>
  );
};

export default Index;
