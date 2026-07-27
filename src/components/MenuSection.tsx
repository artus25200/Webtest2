import { Beef, Fish, Salad, Coffee, Wine, CakeSlice } from "lucide-react";

const categories = [
  {
    icon: Beef,
    title: "Viandes",
    items: [
      { name: "Burger Maison", price: "16€", desc: "Pain brioché, steak haché frais, cheddar, frites maison" },
      { name: "Entrecôte Grillée", price: "22€", desc: "Sauce au choix, légumes de saison, pommes grenailles" },
      { name: "Magret de Canard", price: "21€", desc: "Miel et épices, purée maison, jeunes pousses" },
    ],
  },
  {
    icon: Fish,
    title: "Poissons",
    items: [
      { name: "Filet de Bar", price: "24€", desc: "Risotto crémeux, beurre blanc citronné" },
      { name: "Pavé de Saumon", price: "20€", desc: "Légumes rôtis, sauce vierge à l'huile d'olive" },
    ],
  },
  {
    icon: Salad,
    title: "Salades & Entrées",
    items: [
      { name: "Salade Gourmande", price: "14€", desc: "Chèvre chaud, noix, miel, jambon de pays" },
      { name: "Velouté du Moment", price: "9€", desc: "Légumes de saison, crème fraîche, croûtons" },
      { name: "Assiette de Charcuterie", price: "15€", desc: "Sélection du terroir, cornichons, pain grillé" },
    ],
  },
  {
    icon: CakeSlice,
    title: "Desserts Maison",
    items: [
      { name: "Fondant au Chocolat", price: "9€", desc: "Cœur coulant, glace vanille" },
      { name: "Tarte Tatin", price: "10€", desc: "Pommes caramélisées, crème fraîche" },
      { name: "Café Gourmand", price: "11€", desc: "Sélection de mignardises maison" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-[0.15em] font-medium mb-4">
            Notre Carte
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Une Cuisine d'Exception
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection de plats préparés avec passion à partir de
            produits frais et locaux. Carte complète disponible au restaurant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-background p-6 sm:p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                <cat.icon className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-serif font-bold">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start gap-4"
                  >
                    <div>
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                    <span className="text-foreground font-medium whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-background p-6 border border-border">
            <div className="flex items-center gap-2">
              <Wine className="w-4 h-4 text-primary" />
              <span className="text-sm">Menu Enfant · 10€</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-primary" />
              <span className="text-sm">Formule Midi · à partir de 16€</span>
            </div>
            <span className="text-sm text-muted-foreground">Plats à emporter disponibles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
