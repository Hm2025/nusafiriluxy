import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

const testimonials = [
  { quote: "As someone who travels extensively for business, I have worked with many concierge services. Nusafiri stands in a league of its own.", name: "James Carter", location: "New York, USA" },
  { quote: "My productivity has increased dramatically since partnering with Nusafiri for corporate travel. They handle everything, so I can focus on what matters.", name: "Priya Sharma", location: "Mumbai, India" },
];

export default function Business() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" headline="Business Travel" subheadline="Precision Meets Luxury" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              Executive travel is not a luxury — it is a necessity. In the high-stakes world of global business, every minute matters, every detail counts, and every journey must be executed with flawless precision. Nusafiri's corporate travel division understands this implicitly.
            </p>
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">
              We combine the efficiency of a world-class travel management company with the bespoke service of a luxury concierge. The result is business travel that is seamless, comfortable, and optimized for productivity.
            </p>
          </div>
        </section>
        <SplitFeature image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80" title="Executive Travel" description="For C-suite executives and high-net-worth individuals, we provide white-glove travel management that includes private aviation, ground transportation, security coordination, and 24/7 support. Your time is your most valuable asset — we protect it fiercely." linkText="Learn More" linkHref="/contact/" />
        <SplitFeature image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80" title="Corporate Programs" description="For organizations with multiple traveling executives, we design and manage corporate travel programs that reduce costs, increase compliance, and improve traveler satisfaction. Our technology platform integrates seamlessly with your existing systems." linkText="Corporate Solutions" linkHref="/contact/" reversed />
        <Testimonials testimonials={testimonials} />
        <TrustBar />
      </main>
    </>
  );
}
