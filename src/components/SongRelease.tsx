import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Music2, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SONG_TITLE = "Kede Piou";
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@Alijoma";
const RELEASE_HOUR_EAT = 6;
const RELEASE_MINUTE_EAT = 30;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  // Get current UTC time by compensating for local timezone offset
  const now = new Date();
  const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000);

  // EAT is UTC+3, so 6:30 PM EAT = 15:30 UTC = 18:30 in 24h format
  const eatOffset = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
  const eatNow = new Date(utcNow.getTime() + eatOffset);

  // Set target to today's 6:30 PM EAT
  const target = new Date(eatNow);
  target.setHours(18, 30, 0, 0); // 6:30 PM = 18:30

  // If we've passed today's release time (6:30 PM has passed), target tomorrow
  if (target.getTime() <= eatNow.getTime()) {
    target.setDate(target.getDate() + 1);
  }

  const diff = target.getTime() - eatNow.getTime();

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
};

const SongRelease = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Check if release time has passed (within same minute)
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsLive(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
              <Music2 size={20} />
              <span className="text-sm font-medium">New Release Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              <span className="text-gradient">{SONG_TITLE}</span>
            </h2>
            <p className="text-muted-foreground">Dropping at 6:30 PM EAT</p>
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
              className="text-center md:text-left"
            >
              {isLive ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 text-green-500 rounded-full">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-bold">LIVE NOW!</span>
                  </div>
                  <p className="text-2xl font-semibold">The wait is over!</p>
                  <p className="text-muted-foreground">Watch "Kede Piou" now on YouTube!</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2">
                        <Play size={20} fill="currentColor" />
                        Watch on YouTube
                      </Button>
                    </a>
                    <a
                      href="https://open.spotify.com/artist/47zTPaJQpls7xws7u4sTU"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" variant="outline" className="gap-2">
                        <ExternalLink size={20} />
                        Stream on Spotify
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-6 text-muted-foreground">
                    <Clock size={20} />
                    <span>Countdown to Release</span>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {timeUnits.map((unit, index) => (
                      <motion.div
                        key={unit.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="bg-card border border-border rounded-xl p-4 text-center"
                      >
                        <div className="text-3xl md:text-4xl font-bold text-primary">
                          {String(unit.value).padStart(2, "0")}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{unit.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-sm text-muted-foreground"
                  >
                    <p>East Africa Time (EAT) • UTC+3</p>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SongRelease;
