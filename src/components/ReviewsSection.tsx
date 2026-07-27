import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Francis C.",
    date: "Avril 2024",
    rating: 5,
    text: "Très agréablement surpris ! Accueil chaleureux, cuisine gastronomique simple et efficace, de très bon goût. Prix justifiés. Continuez comme cela, je reviendrai et je recommande.",
  },
  {
    name: "Mylène D.",
    date: "Avril 2024",
    rating: 5,
    text: "Super restaurant, une cuisine familiale ! Le service est au top !",
  },
  {
    name: "Catherine M.",
    date: "Décembre 2022",
    rating: 5,
    text: "Merci pour votre accueil chaleureux et vos bons petits plats.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Avis Clients
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Ce Que Disent Nos Convives
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl font-bold font-serif">4.5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? "text-amber-400 fill-amber-400" : "text-amber-200 fill-amber-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">sur 5</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
