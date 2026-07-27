import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              L'Ardoise Gourmande
            </h3>
            <p className="text-stone-400 leading-relaxed mb-6">
              Restaurant de cuisine française traditionnelle et hôtel au cœur de
              Carbonne, dans le Volvestre.
            </p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Suivez-nous sur Facebook</span>
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=15+Place+de+la+République+31390+Carbonne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 mt-0.5 text-primary group-hover:text-amber-400 transition-colors" />
                <span>
                  15 Place de la République
                  <br />
                  31390 Carbonne, France
                </span>
              </a>
              <a
                href="tel:+33608988419"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary group-hover:text-amber-400 transition-colors" />
                <span>+33 6 08 98 84 19</span>
              </a>
              <a
                href="mailto:florian.taufine57@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary group-hover:text-amber-400 transition-colors" />
                <span>florian.taufine57@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Horaires</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-primary" />
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-white">Mardi – Samedi</p>
                    <p className="text-sm">12h00 – 14h00 & 19h00 – 21h30</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Dimanche</p>
                    <p className="text-sm">12h00 – 00h00</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-500">Lundi</p>
                    <p className="text-sm text-stone-500">Fermé</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} L'Ardoise Gourmande. Tous droits
            réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-300 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
