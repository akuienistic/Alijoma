import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Music from "@/components/Music";

const MusicPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Discography</span>
            </h1>
            <p className="text-muted-foreground">
              Explore Alijoma's albums, singles, and collaborations
            </p>
          </motion.div>
        </div>
        <Music />
      </main>
      <Footer />
    </div>
  );
};

export default MusicPage;
