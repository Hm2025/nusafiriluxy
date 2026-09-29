import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

const testimonials = [
  { quote: "Our wedding in Santorini was not just an event — it was a work of art. Nusafiri orchestrated every detail with the precision of a symphony conductor.", name: "Sophie & Thomas Wright", location: "Paris, France" },
  { quote: "My 50th birthday celebration in Marrakech will be remembered by my guests for the rest of their lives. Nusafiri does not plan parties — they create legends.", name: "Jean-Pierre Dubois", location: "Geneva, Switzerland" },
];

export default function BespokeCelebrations() {
  return (
    <>
      <Header />
      <main>
        <Hero
          image="/Four-Seasons-Cap-Ferrat.jpg"
          headline={"Bespoke Celebrations,\nDesigned Without\nLimits"}
          subheadline="Ultra-luxury travel designed around life's most meaningful moments"
          description="From milestone birthdays and anniversaries to weddings and legacy gatherings, we design entirely bespoke celebrations shaped by your vision, elevated by rare access, and executed with flawless precision."
          height="h-screen"
        />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              Life's most significant moments deserve settings as extraordinary as the occasions themselves. Whether it is a destination wedding, a milestone birthday, an anniversary, or a celebration of achievement — we design events that transcend the ordinary and become part of your family's legacy.
            </p>
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">
              From intimate gatherings of ten to grand celebrations of two hundred, from cliffside ceremonies in Amalfi to desert soirées in Dubai — our celebration designers bring creativity, discretion, and flawless execution to every event.
            </p>
          </div>
        </section>
        <SplitFeature image="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80" title="Destination Weddings" description="Your wedding should be as unique as your love story. We design destination weddings that reflect your personalities, honor your cultures, and create memories that last generations. From venue selection to guest management, from floral design to fireworks — every detail is perfection." linkText="Plan Your Wedding" linkHref="/plan-my-trip/" />
        <SplitFeature image="/Four-Seasons-Cap-Ferrat.jpg" title="Milestone Celebrations" description="Significant birthdays, anniversaries, retirements, and achievements deserve to be marked in style. We create milestone celebrations that surprise, delight, and honor the journey that brought you to this moment." linkText="Celebrate in Style" linkHref="/plan-my-trip/" reversed />
        <SplitFeature image="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&q=80" title="Rare Access & Exclusive Venues" description="Private islands, full-property buyouts, and extraordinary venues create the setting for celebrations that cannot be replicated. We secure spaces chosen for privacy, atmosphere, and the freedom to host something truly one of a kind." linkText="Discover Exclusive Venues" linkHref="/plan-my-trip/" />
        <SplitFeature image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80" title="Seamless Global Coordination" description="From guest travel and accommodation to logistics, experiences, and on-site timing, one trusted team oversees every moving part. Our global coordination keeps complex celebrations feeling effortless from the first arrival to the final farewell." linkText="Plan Your Celebration" linkHref="/plan-my-trip/" reversed />
        <Testimonials testimonials={testimonials} />
        <TrustBar />
      </main>
    </>
  );
}
