import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplitFeature from "@/components/SplitFeature";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import Link from "next/link";

const testimonials = [
  { quote: "The safari experience Nusafiri arranged was beyond anything we could have imagined. Private guides, exclusive camps, and wildlife encounters that left us speechless.", name: "The Van der Berg Family", location: "Amsterdam, Netherlands" },
  { quote: "Waking up to the sound of lions in the distance, knowing you are in the hands of the best guides in Africa — that is the Nusafiri safari experience.", name: "Richard & Catherine Moore", location: "Toronto, Canada" },
];

export default function LuxuryAfricanSafaris() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=1920&q=85" headline={"Luxury African\nSafaris"} subheadline="From Kenya and Tanzania to Namibia and Beyond" height="h-screen" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              Africa is not a destination — it is a calling. The vast savannas, the thundering herds, the silent stalk of a leopard at dusk. We partner with the continent's most exclusive lodges and private conservancies to offer safaris that are as comfortable as they are transformative.
            </p>
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">
              From the Serengeti's great migration to the Okavango Delta's water wonderlands, from the dunes of Namibia to the gorilla forests of Rwanda — every Nusafiri safari is a masterclass in luxury and conservation.
            </p>
          </div>
        </section>
        <SplitFeature image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80" title="East Africa" description="Kenya and Tanzania offer the classic safari experience — vast open plains, the Great Migration, and some of the world's most iconic wildlife viewing. Our partner lodges include Singita, &Beyond, and Elewana, each offering unparalleled luxury in the heart of the wilderness." linkText="Explore East Africa" linkHref="/plan-my-trip/" />
        <SplitFeature image="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=1200&q=80" title="Southern Africa" description="Botswana, South Africa, Zambia, and Zimbabwe offer a different rhythm — water-based safaris, walking encounters, and some of the most diverse landscapes on the continent. Victoria Falls, the Okavango Delta, and the private reserves of Sabi Sands await." linkText="Explore Southern Africa" linkHref="/plan-my-trip/" reversed />
        <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36">
          <div className="container-narrow mx-auto text-center">
            <div className="mb-10 flex items-center gap-6">
              <div className="h-px flex-1 bg-nusafiri-gold" />
              <h2 className="font-display text-4xl font-semibold text-[#1A1A1A] md:text-5xl">Beyond the Safari</h2>
              <div className="h-px flex-1 bg-nusafiri-gold" />
            </div>
            <div className="space-y-6 text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
              <p>
                Our exploration extends beyond the savanna, from South Africa&apos;s Garden Route to the islands of Zanzibar, Seychelles, Mauritius, Madagascar, and Réunion. White-sand beaches, turquoise lagoons, private villas, and exceptional resorts create the perfect counterpoint to the wild.
              </p>
              <p>
                Every lodge, camp, and coastal retreat is selected for its authenticity, service, and sense of place. Whether you dream of gorilla trekking, wildlife across the plains, or quiet days beside a private island beach, we shape a seamless journey around you.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-nusafiri-cream px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32">
          <div className="container-narrow mx-auto">
            <h2 className="mb-6 font-display text-3xl font-semibold text-[#1A1A1A] md:text-4xl">Your African Journey Awaits</h2>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
              Africa is vast, varied, and endlessly captivating. Let us transform your safari dream into a thoughtful itinerary built around your passions, interests, and style.
            </p>
            <Link href="/plan-my-trip/" className="inline-flex rounded-full bg-nusafiri-gold px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#b58f51]">
              Plan Your African Journey
            </Link>
          </div>
        </section>
        <Testimonials testimonials={testimonials} />
        <TrustBar />
      </main>
    </>
  );
}
