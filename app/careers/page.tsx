import Header from "@/components/Header";
import Hero from "@/components/Hero";

const openings = [
  { title: "Luxury Travel Designer", location: "New York / Remote", type: "Full-time" },
  { title: "VIP Concierge Specialist", location: "London", type: "Full-time" },
  { title: "Corporate Travel Manager", location: "Dubai", type: "Full-time" },
  { title: "Destination Wedding Coordinator", location: "Remote", type: "Contract" },
];

export default function Careers() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80" headline="Careers" subheadline="Join the Nusafiri Family" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 text-center mb-14">
            <p className="text-nusafiri-charcoal leading-relaxed text-base md:text-lg mb-6">
              At Nusafiri, we are always searching for passionate, talented individuals who share our love for extraordinary travel and unwavering commitment to excellence. If you believe you can contribute to our mission, we would love to hear from you.
            </p>
          </div>
          <div className="container-wide mx-auto px-6">
            <div className="space-y-4">
              {openings.map((job) => (
                <div key={job.title} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-nusafiri-border bg-white hover:border-nusafiri-gold transition-colors duration-300">
                  <div>
                    <h3 className="font-display text-xl text-nusafiri-charcoal mb-1">{job.title}</h3>
                    <p className="text-sm text-nusafiri-muted">{job.location} &mdash; {job.type}</p>
                  </div>
                  <a href="mailto:careers@nusafiri.com" className="mt-4 md:mt-0 inline-flex items-center justify-center bg-nusafiri-charcoal text-white px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-nusafiri-gold hover:text-nusafiri-charcoal transition-colors duration-300">Apply</a>
                </div>
              ))}
            </div>
            <div className="text-center mt-14">
              <p className="text-sm text-nusafiri-muted mb-4">Don't see a role that fits? Send us your resume anyway.</p>
              <a href="mailto:careers@nusafiri.com" className="text-link-arrow text-xs">careers@nusafiri.com</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
