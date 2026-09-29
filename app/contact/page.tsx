import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" headline="Contact" subheadline="We Would Love to Hear From You" />
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-wide mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-nusafiri-charcoal mb-6">Get in Touch</h2>
                <div className="divider-line-dark mb-8" />
                <p className="text-nusafiri-muted leading-relaxed mb-10">
                  Whether you are ready to plan your next journey or simply want to learn more about how Nusafiri can serve you, our team is here to help. Reach out through any of the channels below, and we will respond within 24 hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-nusafiri-border flex items-center justify-center flex-shrink-0"><Mail className="w-4 h-4 text-nusafiri-gold" /></div>
                    <div><p className="text-xs uppercase tracking-widest text-nusafiri-muted mb-1">Email</p><a href="mailto:hello@nusafiri.com" className="text-nusafiri-charcoal hover:text-nusafiri-gold transition-colors">hello@nusafiri.com</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-nusafiri-border flex items-center justify-center flex-shrink-0"><Phone className="w-4 h-4 text-nusafiri-gold" /></div>
                    <div><p className="text-xs uppercase tracking-widest text-nusafiri-muted mb-1">Phone</p><a href="tel:+1234567890" className="text-nusafiri-charcoal hover:text-nusafiri-gold transition-colors">+1 (234) 567-890</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-nusafiri-border flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-nusafiri-gold" /></div>
                    <div><p className="text-xs uppercase tracking-widest text-nusafiri-muted mb-1">Office</p><p className="text-nusafiri-charcoal">123 Luxury Lane, Suite 500<br />New York, NY 10001</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-10 border border-nusafiri-border">
                <h3 className="font-display text-xl text-nusafiri-charcoal mb-6">Send a Message</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" placeholder="First Name" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors" />
                    <input type="text" placeholder="Last Name" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors" />
                  <input type="text" placeholder="Subject" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors" />
                  <textarea rows={5} placeholder="Your message" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors resize-none" />
                  <button type="submit" className="w-full bg-nusafiri-charcoal text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-nusafiri-gold hover:text-nusafiri-charcoal transition-colors duration-300">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
