import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Alijoma</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Born on August 28, 1991, in Nyaang Pathuyith, Alijoma Mabil is a trailblazing South Sudanese
            recording artist and visionary businessman whose soul-stirring fusion of Afrobeat, Reggae,
            and Dancehall is redefining African music. From the vibrant streets of Bor Town, armed with
            a degree in Electrical Engineering, he dared to chase his true calling: creating music that
            unites hearts across continents!
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With over a decade of electrifying the music scene, drawing inspiration from African legends
            like Awilo Longomba, Koffi Olomide, and South Sudanese pioneers Panchol Deng Ajang and
            John Kudusay, Alijoma has unleashed blockbuster albums like "My Year" (2023) and
            "Love 'n' Fame" (2021) that continue to captivate and inspire millions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
