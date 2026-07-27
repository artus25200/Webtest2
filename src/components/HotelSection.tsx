import { Bed, Wifi, Bath, Wind } from "lucide-react";

const amenities = [
  { icon: Bed, label: "Chambres rénovées" },
  { icon: Wifi, label: "Wi-Fi gratuit" },
  { icon: Bath, label: "Salle de bain privative" },
  { icon: Wind, label: "Climatisation" },
];

export default function HotelSection() {
  return (
    <section id="hotel" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src="/Webtest2/images/chambre.jpg"
                alt="Chambre d'hôtel Ardoise Gourmande"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-[0.15em] font-medium mb-4">
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
                  className="flex items-center gap-3 bg-background p-4 border border-border"
                >
                  <amenity.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{amenity.label}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+33608988419"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Réserver une chambre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
