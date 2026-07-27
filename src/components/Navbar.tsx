import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-baseline gap-2 group">
            <span className="text-xl sm:text-2xl font-bold font-serif text-foreground tracking-tight">
              L'Ardoise
            </span>
            <span className="hidden sm:block text-base font-serif italic text-muted-foreground">
              Gourmande
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33608988419"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              <Phone className="w-4 h-4" />
              +33 6 08 98 84 19
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary py-2 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33608988419"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 text-sm font-medium mt-2"
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
