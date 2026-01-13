import { motion } from "framer-motion";
import { Youtube, Music, Disc3, Calendar } from "lucide-react";

const stats = [
  { icon: Youtube, value: "39.4K+", label: "YouTube Subscribers" },
  { icon: Music, value: "6K+", label: "Monthly Spotify Listeners" },
  { icon: Disc3, value: "50+", label: "Songs Released" },
  { icon: Calendar, value: "10+", label: "Years in Music" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon size={24} />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
