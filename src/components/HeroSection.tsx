import { motion } from "framer-motion";
import { ArrowDown, MapPin, Clock, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Webtest2/images/facade.jpg')",
        }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-white/80 text-sm sm:text-base uppercase tracking-[0.2em] mb-4 font-medium">
            Restaurant & Hôtel
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
            L'Ardoise
            <br />
            <span className="italic font-light">Gourmande</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Une cuisine française traditionnelle aux saveurs authentiques, des
            produits frais et locaux, dans un cadre chaleureux au cœur de
            Carbonne.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+33608988419"
              className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 text-lg font-medium hover:bg-background transition-colors"
            >
              Réserver une table
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-colors"
            >
              Découvrir
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>15 Place de la République, Carbonne</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mar-Sam · Midi & Soir</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>4.5 / 5</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
