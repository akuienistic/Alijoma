import { Youtube, Facebook, Music, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Music", id: "music" },
  { label: "Gallery", id: "gallery" },
  { label: "Booking", id: "booking" },
];

const streamingLinks = [
  { label: "Spotify", url: "https://open.spotify.com/artist/47zTPaJQpQls7xws7u4sTU" },
  { label: "Apple Music", url: "https://music.apple.com/us/artist/alijoma/1405286400" },
  { label: "YouTube Music", url: "https://www.youtube.com/@Alijomaofficial" },
  { label: "SoundCloud", url: "https://soundcloud.com/alijoma" },
];

const socialLinks = [
  { icon: Youtube, url: "https://www.youtube.com/@Alijomaofficial", label: "YouTube" },
  { icon: Facebook, url: "https://www.facebook.com/alijomaofficial", label: "Facebook" },
  { icon: Music, url: "https://open.spotify.com/artist/47zTPaJQpQls7xws7u4sTU", label: "Spotify" },
];

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">ALIJOMA</h3>
            <p className="text-muted-foreground text-sm mb-6">
              South Sudanese recording artist bringing Afrobeat, Reggae, and Dancehall 
              from Bor to the world.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Streaming */}
          <div>
            <h4 className="font-bold mb-4">Listen On</h4>
            <ul className="space-y-3">
              {streamingLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <ExternalLink size={14} /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={link.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground">
                Follow Alijoma on social media for the latest updates and behind-the-scenes content.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Alijoma. All rights reserved. • Designed & Built by{" "}
            <a
              href="https://web.facebook.com/profile.php?id=61572703111798"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Simon Star Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
