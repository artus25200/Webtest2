import { motion } from "framer-motion";
import { ArrowDown, MapPin, Clock, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/50 to-amber-950/60 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-amber-300 text-sm sm:text-base uppercase tracking-[0.3em] mb-4 font-medium">
            Restaurant & Hôtel
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
            L'Ardoise
            <br />
            <span className="text-amber-200 italic">Gourmande</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Une cuisine française traditionnelle aux saveurs authentiques, des
            produits frais et locaux, dans un cadre chaleureux au cœur de
            Carbonne.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+33608988419"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Réserver une table
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-white/10"
            >
              Découvrir
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>15 Place de la République, Carbonne</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Mar-Sam · Midi & Soir</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
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
