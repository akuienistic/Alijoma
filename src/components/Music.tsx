import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const tracks = [
  { title: "Beny Wei", plays: "28K", image: "/images/alijoma-benywei.jpg" },
  { title: "Gisma Allah", plays: "282K", image: "/images/alijoma-gisma.jpg" },
  { title: "Salomi", plays: "158K", image: "/images/alijoma-salomi.jpg" },
  { title: "Chudier", plays: "77K", image: "/images/alijoma-chudier.jpg" },
];

const Music = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="text-gradient">Tracks</span>
          </h2>
          <p className="text-muted-foreground">Dive into Alijoma's chart-topping hits that are conquering hearts worldwide!</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="w-full">
                  <p className="text-white font-bold">{track.title}</p>
                  <p className="text-white/70 text-sm">{track.plays} views</p>
                </div>
                <button className="p-3 bg-primary rounded-full text-primary-foreground">
                  <Play size={20} />
                </button>
              </div>
              <div className="p-4">
                <p className="font-semibold">{track.title}</p>
                <p className="text-muted-foreground text-sm">{track.plays} views</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground italic text-lg">
            "Feel the rhythm, embrace the beat – Alijoma's music speaks to your soul!"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <iframe
            src="https://open.spotify.com/embed/artist/47zTPaJQpQls7xws7u4sTU?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="max-w-md rounded-xl"
          ></iframe>
        </motion.div>

        <div className="flex justify-center gap-4">
          <a href="https://open.spotify.com/artist/47zTPaJQpQls7xws7u4sTU" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              <ExternalLink size={18} /> Spotify
            </Button>
          </a>
          <a href="https://music.apple.com/us/artist/alijoma/1405286400" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              <ExternalLink size={18} /> Apple Music
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;
