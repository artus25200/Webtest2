const images = [
  {
    src: "/Webtest2/images/facade.jpg",
    alt: "Façade du restaurant L'Ardoise Gourmande",
  },
  {
    src: "/Webtest2/images/plat1.jpg",
    alt: "Magret de canard à l'ardoise",
  },
  {
    src: "/Webtest2/images/plat2.jpg",
    alt: "Confit de canard et garniture",
  },
  {
    src: "/Webtest2/images/chambre.jpg",
    alt: "Chambre de l'hôtel",
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
            Quelques images de notre restaurant et de nos plats.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden aspect-[4/3] ${
                i === 0 ? "col-span-2" : ""
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
