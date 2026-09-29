import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const articles: Record<string, { title: string; date: string; image: string; content: string[] }> = {
  "art-of-slow-travel": {
    title: "The Art of Slow Travel",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80",
    content: [
      "In an age of instant gratification and bucket-list tourism, the concept of slow travel feels almost radical. It asks us to do less, see less, and experience more. It invites us to trade the frenetic pace of modern tourism for something deeper, richer, and ultimately more transformative.",
      "Slow travel is not about moving at a snail's pace — it is about moving with intention. It is the difference between spending three days in Paris checking off landmarks and spending three weeks in a single arrondissement, learning the rhythm of the neighborhood, recognizing the baker, being recognized in return.",
      "At Nusafiri, we have long championed this philosophy. Some of our most cherished client feedback comes not from the grand gestures — the private dinners, the helicopter transfers — but from the quiet moments. The morning coffee on a Tuscan terrace. The afternoon spent watching fishermen mend nets in a Greek village. The evening stroll through a Moroccan medina with no destination in mind.",
      "The benefits of slow travel extend far beyond the immediate experience. Research consistently shows that travelers who spend more time in fewer places report higher satisfaction, deeper cultural connection, and more lasting memories. When we slow down, we open ourselves to serendipity — to the unplanned encounter, the unexpected invitation, the moment that changes everything.",
      "Designing a slow travel itinerary requires a different mindset. It means saying no to more than you say yes to. It means building in buffer time, resisting the urge to optimize every hour, and leaving space for the journey to unfold organically. Our travel architects specialize in this kind of curation — creating frameworks that are structured enough to ensure comfort and safety, yet flexible enough to allow for magic.",
      "The next time you plan a journey, consider doing less. Choose one region instead of three. Stay in one property for a week instead of hopping every two nights. Take the train instead of the plane. Walk instead of drive. You may be surprised by how much more you experience when you stop trying to experience everything.",
    ],
  },
  "hidden-gems-private-islands": {
    title: "Hidden Gems: Private Islands You Have Never Heard Of",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80",
    content: [
      "Beyond the famous island escapes are secluded places where the pace of life is slower, the beaches are quieter, and every arrival feels like a discovery.",
      "The most rewarding private island journeys are built around more than beautiful scenery. They balance privacy with thoughtful service, local character, and experiences that could not be replicated anywhere else.",
      "Our travel architects look beyond the obvious retreats to find private villas, hidden coves, and small island properties where the setting and the service feel entirely personal.",
    ],
  },
  "wellness-journeys": {
    title: "Wellness Journeys: Reconnecting Mind, Body, and Place",
    date: "February 10, 2024",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&q=80",
    content: [
      "The most meaningful wellness journeys create space to reset while connecting you to the character of a place.",
      "From thermal traditions in Tuscany to quiet mountain retreats in Bhutan, we design itineraries that combine expert practitioners, restorative surroundings, and a rhythm that leaves room to breathe.",
      "Wellness travel is not about following a rigid schedule. It is about returning home with more energy, clarity, and a renewed sense of what matters.",
    ],
  },
  "solo-travel": {
    title: "Solo Travel: The Ultimate Act of Self-Love",
    date: "January 22, 2024",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1920&q=80",
    content: [
      "Traveling alone offers a rare freedom: every decision belongs to you, from the pace of the morning to the direction of the afternoon.",
      "With the right planning and local support, solo travel can feel both liberating and deeply secure. We arrange trusted guides, seamless transfers, and spaces that encourage genuine connection.",
      "The result is a journey shaped around your curiosity, with enough structure to feel effortless and enough openness for unexpected moments.",
    ],
  },
  "safari-photography": {
    title: "Safari Photography: Capturing the Soul of Africa",
    date: "January 5, 2024",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80",
    content: [
      "Great safari photography begins with patience. The most memorable images often arrive after the camera has been ready and the vehicle has been still for a while.",
      "Light, distance, and respect for wildlife matter as much as equipment. Experienced guides help guests anticipate movement and find compositions without disturbing the animals.",
      "We pair exceptional camps with guides who understand both the landscape and the craft, creating opportunities to photograph Africa with care and perspective.",
    ],
  },
  "around-the-world-30-days": {
    title: "Around the World in 30 Days: A Nusafiri Itinerary",
    date: "December 18, 2023",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80",
    content: [
      "A month around the world needs more than a list of destinations. It needs a rhythm that makes every transition feel worthwhile.",
      "Our approach combines landmark cities, restorative stays, and carefully chosen connections so the journey feels cohesive rather than rushed.",
      "With private transfers, expert local hosts, and room to linger, a multi-continent itinerary can feel expansive without becoming exhausting.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug] || {
    title: "Article",
    date: "",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80",
    content: ["Article content coming soon."],
  };

  return (
    <>
      <Header />
      <main>
        <Hero image={article.image} headline={article.title} subheadline={article.date} height="h-screen" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6">
            <div className="mb-10">
              <Link href="/travel-notes/" className="text-link-arrow text-xs"><ArrowLeft className="w-3 h-3" />Back to Travel Notes</Link>
            </div>
            <article className="space-y-6">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg">{paragraph}</p>
              ))}
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
