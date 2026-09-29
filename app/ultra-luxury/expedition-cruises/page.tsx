import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

const testimonials = [
  { quote: "Antarctica by expedition cruise was the most profound travel experience of my life. Nusafiri ensured every moment was comfortable, safe, and utterly magical.", name: "Dr. Helen Foster", location: "London, UK" },
  { quote: "The Galapagos expedition was perfectly balanced — rigorous exploration by day, absolute luxury by night. A masterclass in expedition cruising.", name: "Robert & Linda Hayes", location: "Chicago, USA" },
];

export default function ExpeditionCruises() {
  return (
    <>
      <Header />
      <main>
        <Hero
          image="/xuyu-chi-Xodpk0gAJzI-unsplash.jpg"
          headline="Expedition Cruises"
          subheadline="Where Exploration Meets Uncompromising Luxury"
          description="Expedition cruising is about access — reaching the most remote corners of the world in exceptional comfort, guided by expert teams and elevated by refined onboard living."
          height="h-screen"
        />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              Expedition cruising represents the perfect marriage of adventure and luxury. Intimate vessels, expert naturalists, and access to places that larger ships simply cannot reach. From the polar regions to the Amazon, from the Galapagos to the Kimberley Coast.
            </p>
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">
              We partner with the world's finest expedition cruise operators — Ponant, Silversea Expeditions, Seabourn, and Scenic — to offer journeys that are as comfortable as they are adventurous.
            </p>
          </div>
        </section>
        <SplitFeature image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80" title="Polar Expeditions" description="Antarctica and the Arctic represent the final frontiers of luxury travel. Our polar expeditions combine cutting-edge ice-class vessels with world-class comfort, expert guides, and the kind of wildlife encounters that change your perspective forever." linkText="Explore Polar Cruises" linkHref="/plan-my-trip/" />
        <SplitFeature image="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80" title="Tropical Expeditions" description="The Galapagos, Papua New Guinea, the Kimberley Coast, and the Amazon — these are places where biodiversity reigns supreme. Our tropical expedition cruises bring you face-to-face with nature at its most exuberant, all from the comfort of a luxury vessel." linkText="Explore Tropical Cruises" linkHref="/plan-my-trip/" reversed />
        <Testimonials testimonials={testimonials} />
        <TrustBar />
      </main>
    </>
  );
}
