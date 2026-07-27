import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-white/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              L'Ardoise Gourmande
            </h3>
            <p className="text-white/70 leading-relaxed">
              Restaurant de cuisine française traditionnelle et hôtel au cœur de
              Carbonne, dans le Volvestre.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=15+Place+de+la+République+31390+Carbonne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-sm">
                  15 Place de la République
                  <br />
                  31390 Carbonne, France
                </span>
              </a>
              <a
                href="tel:+33608988419"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+33 6 08 98 84 19</span>
              </a>
              <a
                href="mailto:florian.taufine57@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">florian.taufine57@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Horaires</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-primary" />
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-white">Mardi – Samedi</p>
                  <p className="text-white/70">12h00 – 14h00 & 19h00 – 21h30</p>
                </div>
                <div>
                  <p className="text-white">Dimanche</p>
                  <p className="text-white/70">12h00 – 00h00</p>
                </div>
                <div>
                  <p className="text-white/50">Lundi</p>
                  <p className="text-white/50">Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} L'Ardoise Gourmande. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
