import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function BookAHotel() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80" headline="Book a Hotel" subheadline="The World's Finest Properties" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              Through our relationships with the world's leading luxury hotel brands and independent properties, we offer our clients exclusive rates, complimentary upgrades, and VIP amenities that are not available through public booking channels.
            </p>
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-10">
              Contact our reservations team to discuss your upcoming stay, and let us unlock the best possible experience at your chosen property.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {["Aman", "Four Seasons", "Ritz-Carlton", "St. Regis", "Rosewood", "Mandarin Oriental"].map((brand) => (
                <div key={brand} className="p-6 border border-nusafiri-border bg-white">
                  <h3 className="font-display text-xl text-nusafiri-charcoal mb-2">{brand}</h3>
                  <p className="text-sm text-nusafiri-muted">Preferred partner rates and exclusive amenities available.</p>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <a href="mailto:reservations@nusafiri.com" className="inline-flex items-center gap-2 bg-nusafiri-charcoal text-white px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-nusafiri-gold hover:text-nusafiri-charcoal transition-colors duration-300">
                Contact Reservations
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
