import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              About <span className="text-gradient">Alijoma Mabil</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img
                src="/images/alijoma-gisma.jpg"
                alt="Alijoma"
                className="rounded-2xl border border-border"
              />
              <div className="space-y-6">
                <div>
                  <h3 className="text-primary font-semibold mb-2">Born</h3>
                  <p className="text-muted-foreground">August 28, 1991 — Nyaang Pathuyith, South Sudan</p>
                </div>
                <div>
                  <h3 className="text-primary font-semibold mb-2">Hometown</h3>
                  <p className="text-muted-foreground">Bor Town, South Sudan</p>
                </div>
                <div>
                  <h3 className="text-primary font-semibold mb-2">Genres</h3>
                  <p className="text-muted-foreground">Afrobeat, Reggae, Dancehall</p>
                </div>
                <div>
                  <h3 className="text-primary font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">Degree in Electrical Engineering</p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Alijoma is a South Sudanese recording artist and businessman known for his captivating 
                blend of Afrobeat, Reggae, and Dancehall music. His career spans over a decade, 
                with influences from Congolese artists like Awilo Longomba and Koffi Olomide, 
                as well as South Sudanese icons such as Panchol Deng Ajang and John Kudusay.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                He gained major recognition in 2014 and has since released hit albums including 
                "My Year" (2023) featuring 16 tracks, "Love 'n' Fame" (2021), and "Nyin Ngong" (2017). 
                With over 39,000 YouTube subscribers and thousands of monthly Spotify listeners, 
                Alijoma continues to grow his international fanbase.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His music carries emotional depth, often celebrating love, resilience, and African heritage. 
                Songs like "Beny Wei" (Mother of Life) showcase his ability to create soul-stirring 
                tributes that resonate deeply with listeners worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
