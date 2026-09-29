import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

const testimonials = [
  { quote: "Our around-the-world journey was executed with military precision and artistic grace. Every transfer, every stay, every experience was flawless.", name: "Alexandra Petrov", location: "Moscow, Russia" },
  { quote: "Thirty days, twelve countries, and not a single hiccup. Nusafiri made the impossible feel effortless.", name: "The Nakamura Family", location: "Tokyo, Japan" },
];

export default function AroundTheWorld() {
  return (
    <>
      <Header />
      <main>
        <Hero
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85"
          headline={"Around-the-World\nJourneys"}
          subheadline="Iconic Capitals to the World's Most Remote Corners"
          description="Around-the-world journeys crafted to unfold naturally — fluid, cohesive, and deeply personal."
          height="h-screen"
        />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              There is something profoundly magical about circumnavigating the globe. The rhythm of departure and arrival, the accumulation of experiences, the way the world reveals itself piece by piece. Our around-the-world journeys are designed for travelers who refuse to choose just one dream.
            </p>
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">
              Whether by private jet, first-class commercial, or a combination of yachts, trains, and helicopters — we orchestrate seamless global itineraries that flow as naturally as a single destination trip.
            </p>
          </div>
        </section>
        <SplitFeature image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80" title="Private Jet Journeys" description="Circumnavigate the globe aboard a private aircraft, with every detail tailored to your preferences. Custom interiors, personal chefs, and the freedom to land where commercial airlines cannot. This is travel at its most liberating." linkText="Design Your Journey" linkHref="/plan-my-trip/" />
        <SplitFeature image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80" title="Curated Itineraries" description="For those who prefer commercial aviation or mixed modes of transport, we design meticulously planned around-the-world itineraries that maximize time and minimize friction. Every connection, every visa, every transfer is handled." linkText="Explore Itineraries" linkHref="/plan-my-trip/" reversed />
        <Testimonials testimonials={testimonials} />
        <TrustBar />
      </main>
    </>
  );
}
