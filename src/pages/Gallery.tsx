import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  { src: "/images/alijoma-gisma.jpg", alt: "Alijoma - Gisma Allah Performance" },
  { src: "/images/alijoma-salomi.jpg", alt: "Alijoma - Salomi Music Video" },
  { src: "/images/alijoma-benywei.jpg", alt: "Alijoma - Beny Wei" },
  { src: "/images/alijoma-chudier.jpg", alt: "Alijoma - Chudier" },
  { src: "/images/alijoma-performance.jpg", alt: "Alijoma Performance" },
  { src: "/images/alijoma-ayow.jpg", alt: "Alijoma - Ayow" },
  { src: "/images/alijoma-bebe.jpg", alt: "Alijoma - Bebe ft. Iyanya" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Photo <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-muted-foreground">A visual journey through Alijoma's career</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
