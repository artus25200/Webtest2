import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "../lib/utils";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "Le Restaurant", href: "#about" },
  { label: "La Carte", href: "#menu" },
  { label: "Galerie", href: "#gallery" },
  { label: "Hôtel", href: "#hotel" },
  { label: "Avis", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-2xl sm:text-3xl font-bold font-serif text-primary tracking-tight transition-colors group-hover:text-accent">
            L'Ardoise
          </span>
          <span className="hidden sm:block text-lg font-serif italic text-muted-foreground">
            Gourmande
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33608988419"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            +33 6 08 98 84 19
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33608988419"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold justify-center mt-2"
            >
              <Phone className="w-4 h-4" />
              +33 6 08 98 84 19
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
