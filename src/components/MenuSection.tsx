import { motion } from "framer-motion";
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
    <section id="menu" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Notre Carte
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Une Cuisine d'Exception
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection de plats préparés avec passion à partir de
            produits frais et locaux. Carte complète disponible au restaurant.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <cat.icon className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-serif font-bold">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                    <span className="text-primary font-bold whitespace-nowrap text-lg font-serif">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-background rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-2">
              <Wine className="w-5 h-5 text-primary" />
              <span className="font-medium">Menu Enfant · 10€</span>
            </div>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-primary" />
              <span className="font-medium">Formule Midi · à partir de 16€</span>
            </div>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <span className="text-muted-foreground">Plats à emporter disponibles</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
