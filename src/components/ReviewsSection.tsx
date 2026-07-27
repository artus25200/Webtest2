import { Star } from "lucide-react";

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
    <section id="reviews" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-[0.15em] font-medium mb-4">
            Avis Clients
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Ce Que Disent Nos Convives
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold font-serif">4.5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? "text-primary fill-primary" : "text-primary/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">sur 5</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
