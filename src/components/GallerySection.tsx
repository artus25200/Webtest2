const images = [
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=2070&auto=format&fit=crop",
    alt: "Salle du restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop",
    alt: "Plat gastronomique",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "Intérieur chaleureux",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    alt: "Assiette raffinée",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-[0.15em] font-medium mb-4">
            Galerie
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            L'Art de Recevoir
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un aperçu de notre cadre chaleureux et de nos créations culinaires.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden aspect-[4/3] ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
