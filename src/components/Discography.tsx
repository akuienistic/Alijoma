import { motion } from "framer-motion";
import { ExternalLink, Calendar, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const albums = [
  {
    title: "My Year",
    year: "2023",
    tracks: 16,
    image: "/images/alijoma-gisma.jpg",
    spotifyUrl: "https://open.spotify.com/artist/47zTPaJQpQls7xws7u4sTU",
  },
  {
    title: "Love 'n' Fame",
    year: "2021",
    tracks: 12,
    image: "/images/alijoma-salomi.jpg",
    spotifyUrl: "https://open.spotify.com/artist/47zTPaJQpQls7xws7u4sTU",
  },
  {
    title: "Nyin Ngong",
    year: "2017",
    tracks: 10,
    image: "/images/alijoma-benywei.jpg",
    spotifyUrl: "https://open.spotify.com/artist/47zTPaJQpQls7xws7u4sTU",
  },
];

const Discography = () => {
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
            <span className="text-gradient">Discography</span>
          </h2>
          <p className="text-muted-foreground">Albums and EPs by Alijoma</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {album.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Music size={14} /> {album.tracks} tracks
                  </span>
                </div>
                <a href={album.spotifyUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <ExternalLink size={16} /> Listen on Spotify
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground italic text-lg">
            "Each album tells a story, each track captures a moment – dive into Alijoma's musical journey!"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Discography;
