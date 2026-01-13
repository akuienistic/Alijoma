import { motion } from "framer-motion";

const images = [
  { src: "/images/alijoma-gisma.jpg", alt: "Alijoma - Gisma Allah" },
  { src: "/images/alijoma-salomi.jpg", alt: "Alijoma - Salomi" },
  { src: "/images/alijoma-benywei.jpg", alt: "Alijoma - Beny Wei" },
  { src: "/images/alijoma-chudier.jpg", alt: "Alijoma - Chudier" },
  { src: "/images/alijoma-bebe.jpg", alt: "Alijoma - Bebe" },
  { src: "/images/alijoma-ayow.jpg", alt: "Alijoma - Ayow" },
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-muted-foreground">A visual journey through Alijoma's career</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
