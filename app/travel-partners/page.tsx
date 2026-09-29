import Header from "@/components/Header";
import Hero from "@/components/Hero";

const partners = [
  { name: "Aman", category: "Hotels & Resorts" },
  { name: "Belmond", category: "Hotels & Trains" },
  { name: "Four Seasons", category: "Hotels & Resorts" },
  { name: "Ritz-Carlton Reserve", category: "Luxury Hotels" },
  { name: "St. Regis", category: "Luxury Hotels" },
  { name: "Rosewood", category: "Hotels & Resorts" },
  { name: "Mandarin Oriental", category: "Luxury Hotels" },
  { name: "The Peninsula", category: "Luxury Hotels" },
  { name: "Oberoi", category: "Hotels & Resorts" },
  { name: "Taj Hotels", category: "Luxury Hotels" },
  { name: "One&Only", category: "Resorts" },
  { name: "Six Senses", category: "Wellness Resorts" },
  { name: "COMO Hotels", category: "Hotels & Resorts" },
  { name: "Singita", category: "Safari Lodges" },
  { name: "andBeyond", category: "Safari & Conservation" },
  { name: "Auberge Resorts", category: "Boutique Resorts" },
  { name: "Montage", category: "Hotels & Resorts" },
  { name: "Fairmont", category: "Luxury Hotels" },
  { name: "Raffles", category: "Legendary Hotels" },
  { name: "Ponant", category: "Expedition Cruises" },
];

export default function TravelPartners() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80" headline="Travel Partners" subheadline="The World's Finest Brands" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center mb-14">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">
              Nusafiri's strength lies in our relationships. We are proud to partner with the world's leading luxury travel brands, each selected for their commitment to excellence, innovation, and guest experience.
            </p>
          </div>
          <div className="container-wide mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div key={partner.name} className="p-6 border border-nusafiri-border bg-white text-center hover:border-nusafiri-gold transition-colors duration-300">
                  <h3 className="font-display text-lg text-nusafiri-charcoal mb-1">{partner.name}</h3>
                  <p className="text-xs text-nusafiri-muted uppercase tracking-wider">{partner.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
