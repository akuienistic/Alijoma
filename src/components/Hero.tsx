import { motion } from "framer-motion";
import { Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-primary font-medium mb-4 tracking-widest uppercase">
            South Sudanese Recording Artist
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">ALIJOMA</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            Afrobeat • Reggae • Dancehall — Blending African rhythms with heartfelt melodies from Bor, South Sudan to the world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button size="lg" className="gap-2" onClick={() => scrollToSection("music")}>
              <Play size={20} /> Listen Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => scrollToSection("booking")}>
              <Music size={20} /> Book Alijoma
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-orange-600/30 rounded-full blur-3xl" />
            <img
              src="/images/alijoma-gisma.jpg"
              alt="Alijoma performing"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-border"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
