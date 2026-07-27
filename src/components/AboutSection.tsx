
import { UtensilsCrossed, ChefHat, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Chef Passionné",
    description:
      "Notre chef sublime les produits du terroir avec des recettes traditionnelles revisitées.",
  },
  {
    icon: Leaf,
    title: "Produits Frais & Locaux",
    description:
      "Tous nos ingrédients sont sélectionnés avec soin auprès de producteurs de la région.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cuisine Maison",
    description:
      "Chaque plat est préparé sur place, de l'entrée au dessert, avec une attention particulière.",
  },
  {
    icon: Users,
    title: "Cadre Convivial",
    description:
      "Une grande salle climatisée, une terrasse ensoleillée, et un accueil chaleureux.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-[0.15em] font-medium mb-4">
              Notre Histoire
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Bienvenue à
              <br />
              L'Ardoise Gourmande
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Situé sur la charmante Place de la République à Carbonne, notre
              restaurant vous accueille dans un cadre rénové et climatisé. À
              seulement 40 minutes de Toulouse et de Saint-Gaudens, nous
              proposons une cuisine française authentique qui met à l'honneur
              les produits de notre belle région du Volvestre.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Que ce soit pour un déjeuner d'affaires, un dîner en famille ou un
              repas entre amis, notre équipe attentionnée saura rendre votre
              expérience mémorable. Nous proposons également un service de plats
              à emporter pour vos pauses déjeuner.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Voir la carte
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card p-6 border border-border"
              >
                <feature.icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
