import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-card via-card to-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-3xl blur-2xl" />
                <img
                  src="/images/Alijoma in the studio.jpg"
                  alt="Alijoma performing"
                  className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet <span className="text-gradient">Alijoma</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Born on August 28, 1991, in Nyaang Pathuyith, Alijoma Mabil is a trailblazing South Sudanese
                  recording artist and visionary businessman whose soul-stirring fusion of Afrobeat, Reggae,
                  and Dancehall is redefining African music.
                </p>
                <p>
                  From the vibrant streets of Bor Town, armed with a degree in Electrical Engineering, he dared
                  to chase his true calling: creating music that unites hearts across continents!
                </p>
                <p>
                  With over a decade of electrifying the music scene, drawing inspiration from African legends
                  like Awilo Longomba, Koffi Olomide, and South Sudanese pioneers Panchol Deng Ajang and
                  John Kudusay, Alijoma has unleashed blockbuster albums like "My Year" (2023) and
                  "Love 'n' Fame" (2021) that continue to captivate and inspire millions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
