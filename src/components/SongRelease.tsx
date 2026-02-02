import { motion } from "framer-motion";
import { Music2, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SONG_TITLE = "Kede Piou";
const YOUTUBE_VIDEO_URL = "https://youtu.be/RV_FX8wc4wM?list=RDRV_FX8wc4wM";
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@Alijoma";

const SongRelease = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Now Streaming</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              <span className="text-gradient">{SONG_TITLE}</span>
            </h2>
            <p className="text-muted-foreground">New Single Out Now!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="/images/KedePiou.jpg" alt={`${SONG_TITLE} poster`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center md:text-left space-y-6"
            >
              <div>
                <p className="text-2xl font-semibold">The wait is over!</p>
                <p className="text-muted-foreground mt-2">
                  Watch "Kede Piou" now on YouTube and stream on all platforms!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href={YOUTUBE_VIDEO_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    <Play size={20} fill="currentColor" />
                    Watch Now
                  </Button>
                </a>
                <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2">
                    <ExternalLink size={20} />
                    Visit Channel
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground pt-4">
                Available on YouTube, Spotify, Apple Music, and all major streaming platforms.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SongRelease;
