import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    title: "The Art of Slow Travel: Why the Journey Matters More Than the Destination",
    excerpt: "In a world obsessed with checking destinations off a list, we explore why the most meaningful travel experiences come from embracing the journey itself.",
    slug: "art-of-slow-travel",
    date: "March 15, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    title: "Hidden Gems: Private Islands You Have Never Heard Of",
    excerpt: "Beyond the well-known retreats lie secret paradises waiting to be discovered. Our curators reveal their most treasured island escapes.",
    slug: "hidden-gems-private-islands",
    date: "February 28, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    title: "Wellness Journeys: Reconnecting Mind, Body, and Place",
    excerpt: "From ancient thermal baths in Tuscany to meditation retreats in Bhutan, discover how transformative wellness travel can be.",
    slug: "wellness-journeys",
    date: "February 10, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    title: "Solo Travel: The Ultimate Act of Self-Love",
    excerpt: "Why traveling alone might be the most empowering decision you ever make — and how to do it with confidence and style.",
    slug: "solo-travel",
    date: "January 22, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    title: "Safari Photography: Capturing the Soul of Africa",
    excerpt: "Tips from professional wildlife photographers on how to capture the magic of an African safari.",
    slug: "safari-photography",
    date: "January 5, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
    title: "Around the World in 30 Days: A Nusafiri Itinerary",
    excerpt: "A carefully curated month-long journey across six continents, designed for the traveler who wants it all.",
    slug: "around-the-world-30-days",
    date: "December 18, 2023",
  },
];

export default function TravelNotes() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80" headline="Memories" subheadline="Stories, Insights & Inspiration" height="h-screen" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-wide mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/travel-notes/${post.slug}/`} className="block">
                    <div className="relative h-64 md:h-72 overflow-hidden mb-5">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <p className="text-xs text-nusafiri-muted mb-2">{post.date}</p>
                    <h3 className="font-display text-xl md:text-2xl text-nusafiri-charcoal mb-3 group-hover:text-nusafiri-gold transition-colors">{post.title}</h3>
                    <p className="text-sm text-nusafiri-muted leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <span className="text-link-arrow text-xs">Read more<ArrowRight className="w-3 h-3" /></span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
