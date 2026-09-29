import Header from "@/components/Header";
import Hero from "@/components/Hero";

const galleryImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
  "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
];

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80" headline="Gallery" subheadline="A Window Into Extraordinary Journeys" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-wide mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                  <img src={src} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
