import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

const testimonials = [
  { quote: "Nusafiri found us a private island that does not appear on any map. That level of access is simply extraordinary.", name: "Marcus Webb", location: "Dubai, UAE" },
  { quote: "Complete privacy, absolute luxury, and a team that anticipated every need. This was paradise, perfected.", name: "Isabella Romano", location: "Milan, Italy" },
];

export default function PrivateIslands() {
  return (
    <>
      <Header />
      <main>
        <Hero
          image="/hugh-whyte-uunjTbpjWAM-unsplash.jpg"
          headline={"Private Islands\n& Ultra-Luxury\nVillas"}
          subheadline="Where privacy becomes the destination"
          description="For travelers who value space, control, and true seclusion."
          height="h-screen"
        />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              There is no greater luxury than having an entire island to yourself. The silence, the space, the sense of being completely removed from the world — yet surrounded by every conceivable comfort. Our private island collection spans the globe's most coveted archipelagos.
            </p>
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">
              From the crystalline waters of the Maldives to the wild beauty of the Seychelles, from the Caribbean's hidden gems to the South Pacific's untouched atolls — we curate island experiences that redefine exclusivity.
            </p>
          </div>
        </section>
        <SplitFeature image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80" title="Indian Ocean" description="The Maldives and Seychelles offer the quintessential private island experience — overwater villas, pristine reefs, and service that anticipates your every desire. Our portfolio includes the most exclusive resorts and truly private islands available only through invitation." linkText="Explore Indian Ocean" linkHref="/plan-my-trip/" />
        <SplitFeature image="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=80" title="Caribbean & Pacific" description="The Caribbean's private islands offer a different flavor — vibrant culture meets absolute seclusion. In the South Pacific, Fiji, French Polynesia, and beyond offer islands so remote they feel like discovering a new world." linkText="Explore Caribbean & Pacific" linkHref="/plan-my-trip/" reversed />
        <Testimonials testimonials={testimonials} />
        <TrustBar />
      </main>
    </>
  );
}
