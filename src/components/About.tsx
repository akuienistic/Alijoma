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
            Born on August 28, 1991, in Nyaang Pathuyith, Alijoma Mabil is a South Sudanese 
            recording artist and businessman known for his soulful blend of Afrobeat, Reggae, 
            and Dancehall. Raised in Bor Town, he holds a degree in Electrical Engineering 
            but followed his passion for music.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With over a decade in the industry, influenced by legends like Awilo Longomba, 
            Koffi Olomide, and South Sudanese icons Panchol Deng Ajang and John Kudusay, 
            Alijoma has released hit albums including "My Year" (2023) and "Love 'n' Fame" (2021).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
