import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Réservation",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nom: ${form.name}%0AEmail: ${form.email}%0ATéléphone: ${form.phone || "Non renseigné"}%0A%0A${form.message}`;
    window.open(`mailto:florian.taufine57@gmail.com?subject=${form.subject} - ${form.name}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-4">
              Contact
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Réservation &
              <br />
              Renseignements
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Pour réserver une table ou une chambre, ou pour toute question,
              n'hésitez pas à nous contacter. Nous vous répondrons dans les
              meilleurs délais.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Téléphone</p>
                <a
                  href="tel:+33608988419"
                  className="text-xl font-semibold hover:text-primary transition-colors"
                >
                  +33 6 08 98 84 19
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Adresse</p>
                <p className="text-xl font-semibold">
                  15 Place de la République
                  <br />
                  31390 Carbonne, France
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Horaires</p>
                <p className="font-medium">
                  Mar – Sam : 12h00 – 14h00 & 19h00 – 21h30
                  <br />
                  Dim : 12h00 – 00h00
                  <br />
                  <span className="text-muted-foreground">Fermé le lundi</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl p-8 border border-border shadow-sm"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="+33 ..."
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    <option>Réservation</option>
                    <option>Renseignement hôtel</option>
                    <option>Événement / Groupe</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:bg-accent transition-all shadow-md hover:shadow-lg"
                >
                  {sent ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message prêt à être envoyé !
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
