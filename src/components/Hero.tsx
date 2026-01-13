import { motion } from "framer-motion";
import { Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">ALIJOMA</span>
          </h1>
          <div className="mb-6 flex flex-wrap gap-2 justify-center lg:justify-start">
            <Badge variant="secondary" className="text-primary font-medium tracking-widest uppercase px-4 py-1">
              South Sudanese Recording Artist
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Afrobeat
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Reggae
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Dancehall
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            Ignite your soul with electrifying Afrobeat grooves, laid-back Reggae vibes, and infectious Dancehall beats!
            Alijoma brings the vibrant sounds of South Sudan straight to your heart.
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
