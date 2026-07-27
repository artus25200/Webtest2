import { motion } from "framer-motion";
import { Bed, Wifi, Bath, Wind } from "lucide-react";

const amenities = [
  { icon: Bed, label: "Chambres rénovées" },
  { icon: Wifi, label: "Wi-Fi gratuit" },
  { icon: Bath, label: "Salle de bain privative" },
  { icon: Wind, label: "Climatisation" },
];

export default function HotelSection() {
  return (
    <section id="hotel" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop"
                alt="Chambre d'hôtel Ardoise Gourmande"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl hidden sm:block">
              <p className="text-3xl font-bold font-serif">2022</p>
              <p className="text-sm opacity-90">Ouverture de l'hôtel</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-4">
              Hôtel
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Séjournez au
              <br />
              Cœur de Carbonne
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Notre hôtel fraîchement rénové vous accueille à l'étage du
              restaurant, Place de la République. Idéal pour un week-end dans le
              Volvestre, un déplacement professionnel ou des vacances au calme.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Profitez de chambres confortables et climatisées, à deux pas des
              commerces et animations culturelles de Carbonne. Et pour le dîner,
              notre restaurant vous attend au rez-de-chaussée.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border"
                >
                  <amenity.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{amenity.label}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+33608988419"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent transition-colors shadow-md"
            >
              Réserver une chambre
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
