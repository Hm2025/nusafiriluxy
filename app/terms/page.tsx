import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Terms() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80" headline="Terms & Conditions" subheadline="Please Read Carefully" height="h-screen" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-narrow mx-auto px-6 space-y-8">
            <div>
              <h2 className="font-display text-2xl text-nusafiri-charcoal mb-4">1. Introduction</h2>
              <p className="text-nusafiri-muted leading-relaxed">
                These Terms and Conditions govern your use of the Nusafiri website and services. By accessing our website or engaging our services, you agree to be bound by these terms. Please read them carefully before proceeding.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-nusafiri-charcoal mb-4">2. Services</h2>
              <p className="text-nusafiri-muted leading-relaxed">
                Nusafiri provides luxury travel planning, concierge services, hotel bookings, and related hospitality services. All services are subject to availability and confirmation. We act as an intermediary between you and third-party service providers.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-nusafiri-charcoal mb-4">3. Bookings & Payments</h2>
              <p className="text-nusafiri-muted leading-relaxed">
                All bookings require a deposit as specified in your travel proposal. Full payment terms will be outlined in your individual agreement. Cancellation policies vary by supplier and will be clearly communicated at the time of booking.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-nusafiri-charcoal mb-4">4. Liability</h2>
              <p className="text-nusafiri-muted leading-relaxed">
                While we take every precaution to ensure the quality of your experience, Nusafiri is not liable for acts, omissions, or failures of third-party suppliers. We strongly recommend comprehensive travel insurance for all journeys.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-nusafiri-charcoal mb-4">5. Privacy</h2>
              <p className="text-nusafiri-muted leading-relaxed">
                Your privacy is of utmost importance to us. All personal information collected is handled in accordance with applicable data protection laws and our Privacy Policy.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-nusafiri-charcoal mb-4">6. Changes to Terms</h2>
              <p className="text-nusafiri-muted leading-relaxed">
                Nusafiri reserves the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of the revised terms.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
