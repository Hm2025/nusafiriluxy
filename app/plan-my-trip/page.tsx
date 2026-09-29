import Header from "@/components/Header";

const experienceOptions = [
  "Luxury hotels & resorts",
  "Private villa or estate",
  "Luxury cruise or yacht charter",
  "Safari & wildlife experiences",
  "Private guided tours & VIP access",
  "Wellness & spa retreat",
  "Culinary & wine experiences",
  "Adventure & expedition",
  "Bespoke event or celebration",
  "Private island buyout",
];

const investmentOptions = [
  ["$20,000 – $50,000", "Customized luxury travel with tailored experiences"],
  ["$50,000 – $100,000", "Fully bespoke journey with premium access and seamless planning"],
  ["$100,000 – $250,000", "Multi-destination, fully bespoke travel with priority access and elevated detail"],
  ["$250,000+", "Ultra-custom travel with private access, top-tier partners, and no compromises"],
  ["Prefer to discuss", "Seeking expert guidance"],
];

const inputClass = "mt-2 w-full border border-nusafiri-border bg-white px-4 py-3 text-sm text-nusafiri-charcoal outline-none transition-colors placeholder:text-nusafiri-muted/70 focus:border-nusafiri-gold";
const labelClass = "text-xs font-medium uppercase tracking-widest text-nusafiri-charcoal";

export default function PlanMyTrip() {
  return (
    <>
      <Header />
      <main className="bg-nusafiri-cream pt-[250px]">
        <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 flex items-center gap-6">
              <div className="h-px flex-1 bg-nusafiri-gold" />
              <h1 className="font-display text-4xl font-semibold text-[#1A1A1A] md:text-6xl">Let&apos;s Plan the Right Trip.</h1>
              <div className="h-px flex-1 bg-nusafiri-gold" />
            </div>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
              Tell us what you&apos;re considering. We&apos;ll help you choose the right destination, hotel, itinerary, and structure — so the trip fits how you actually travel.
            </p>
            <p className="mt-6 text-sm text-nusafiri-muted">
              Prefer to talk now? Skip the form and connect with an Advisor directly: {" "}
              <a href="mailto:concierge@theluxurytravelagency.com" className="text-nusafiri-gold hover:text-nusafiri-charcoal">Email</a> · {" "}
              <a href="tel:+16475514560" className="text-nusafiri-gold hover:text-nusafiri-charcoal">Call</a> · {" "}
              <a href="sms:+16475514560" className="text-nusafiri-gold hover:text-nusafiri-charcoal">Text</a> · {" "}
              <a href="https://wa.me/16475514560" className="text-nusafiri-gold hover:text-nusafiri-charcoal">WhatsApp</a>
            </p>
          </div>
        </section>

        <section className="border-y border-nusafiri-border bg-nusafiri-warm px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-nusafiri-gold">Why Book With Us</p>
            <h2 className="mb-10 font-display text-4xl font-semibold text-[#1A1A1A] md:text-5xl">The difference is in the access</h2>
            <div className="grid gap-8 text-center md:grid-cols-4 md:text-left">
              <div><p className="font-display text-3xl font-semibold text-nusafiri-charcoal">Virtuoso</p><p className="mt-2 text-sm text-nusafiri-muted">Membership opens doors most travellers never find.</p></div>
              <div><p className="font-display text-3xl font-semibold text-nusafiri-charcoal">10+ Years</p><p className="mt-2 text-sm text-nusafiri-muted">As a trusted Virtuoso member agency.</p></div>
              <div><p className="font-display text-3xl font-semibold text-nusafiri-charcoal">3,000+</p><p className="mt-2 text-sm text-nusafiri-muted">Preferred hotel and resort partners worldwide.</p></div>
              <div><p className="font-display text-3xl font-semibold text-nusafiri-charcoal">35+ Countries</p><p className="mt-2 text-sm text-nusafiri-muted">Our clients call home.</p></div>
              <div><p className="font-display text-3xl font-semibold text-nusafiri-charcoal">2 Dedicated offices</p><p className="mt-2 text-sm text-nusafiri-muted">Toronto &amp; Nashville.</p></div>
            </div>
          </div>
        </section>

        <form className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-28 lg:px-0" action="#" method="post">
          <section className="mb-20">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-nusafiri-gold">Full Journey Design</p>
            <h2 className="mb-3 font-display text-4xl font-semibold text-[#1A1A1A] md:text-5xl">What can we help you with?</h2>
            <p className="mb-10 text-nusafiri-muted">The more you share, the better we can curate. There are no wrong answers — if you&apos;re still figuring things out, just tell us where your imagination is taking you.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Full custom multi-destination journey", "Luxury hotel or resort booking only", "Private villa rental", "Safari", "Cruise or yacht charter", "Celebration or multi-generational trip", "Not sure yet"].map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-3 border border-nusafiri-border bg-white px-4 py-4 text-sm transition-colors hover:border-nusafiri-gold">
                  <input type="radio" name="tripType" value={option} className="h-4 w-4 accent-nusafiri-gold" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="mb-20 border-t border-nusafiri-border pt-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-nusafiri-gold">Your Journey</p>
            <h2 className="mb-10 font-display text-4xl font-semibold text-[#1A1A1A] md:text-5xl">Shape the details</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <label className={labelClass}>Where are you thinking?<span className="block normal-case tracking-normal text-nusafiri-muted">As specific or open as you like</span><input name="destination" className={inputClass} /></label>
              <label className={labelClass}>Approximate travel dates<span className="block normal-case tracking-normal text-nusafiri-muted">Exact dates not needed — a rough window is fine</span><input name="dates" className={inputClass} placeholder="e.g. May–June 2027" /></label>
              <label className={labelClass}>Trip length<input name="tripLength" className={inputClass} placeholder="e.g. 10–14 nights" /></label>
              <label className={labelClass}>Date flexibility<select name="flexibility" className={inputClass} defaultValue=""><option value="" disabled>Select one</option><option>Fixed dates</option><option>Some flexibility</option><option>Very flexible</option></select></label>
              <label className={labelClass}>Adults<input name="adults" type="number" min="1" className={inputClass} /></label>
              <label className={labelClass}>Children <span className="normal-case tracking-normal text-nusafiri-muted">optional</span><input name="children" type="number" min="0" className={inputClass} /></label>
              <label className={labelClass}>Occasion <span className="normal-case tracking-normal text-nusafiri-muted">optional</span><input name="occasion" className={inputClass} /></label>
            </div>
          </section>

          <section className="mb-20 border-t border-nusafiri-border pt-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-nusafiri-gold">Experience Preferences</p>
            <h2 className="mb-3 font-display text-4xl font-semibold text-[#1A1A1A] md:text-5xl">What kind of experience?</h2>
            <p className="mb-10 text-nusafiri-muted">Select all that apply.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {experienceOptions.map((option) => <label key={option} className="flex cursor-pointer items-center gap-3 border border-nusafiri-border bg-white px-4 py-4 text-sm transition-colors hover:border-nusafiri-gold"><input type="checkbox" name="experiences" value={option} className="h-4 w-4 accent-nusafiri-gold" /><span>{option}</span></label>)}
            </div>
          </section>

          <section className="mb-20 border-t border-nusafiri-border pt-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-nusafiri-gold">Total Trip Investment</p>
            <h2 className="mb-3 font-display text-4xl font-semibold text-[#1A1A1A] md:text-5xl">Excluding international flights</h2>
            <p className="mb-10 text-sm leading-relaxed text-nusafiri-muted">Our custom itineraries begin at $20,000. Hotel-only bookings begin at $800/night. If you&apos;re not yet sure of your budget, select &quot;Prefer to discuss&quot; — we&apos;re here to help you find the right fit.</p>
            <div className="space-y-4">
              {investmentOptions.map(([value, detail]) => <label key={value} className="flex cursor-pointer items-start gap-4 border border-nusafiri-border bg-white px-5 py-4 transition-colors hover:border-nusafiri-gold"><input type="radio" name="investment" value={value} className="mt-1 h-4 w-4 accent-nusafiri-gold" /><span><strong className="block text-sm font-medium">{value}</strong><span className="text-sm text-nusafiri-muted">{detail}</span></span></label>)}
            </div>
          </section>

          <section className="mb-16 border-t border-nusafiri-border pt-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-nusafiri-gold">Anything Else?</p>
            <h2 className="mb-10 font-display text-4xl font-semibold text-[#1A1A1A] md:text-5xl">Tell us more <span className="text-xl font-normal text-nusafiri-muted">optional but very helpful</span></h2>
            <textarea name="notes" rows={6} className="w-full border border-nusafiri-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-nusafiri-gold" />
          </section>

          <section className="border-t border-nusafiri-border pt-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-nusafiri-gold">Your Contact Details</p>
            <h2 className="mb-10 font-display text-4xl font-semibold text-[#1A1A1A] md:text-5xl">Start the conversation</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <label className={labelClass}>First name<input name="firstName" required className={inputClass} /></label>
              <label className={labelClass}>Last name<input name="lastName" required className={inputClass} /></label>
              <label className={labelClass}>Email address<input name="email" type="email" required className={inputClass} /></label>
              <label className={labelClass}>Phone / WhatsApp<input name="phone" type="tel" className={inputClass} /></label>
              <label className={labelClass}>City<input name="city" className={inputClass} /></label>
              <label className={labelClass}>Country<select name="country" className={inputClass} defaultValue=""><option value="" disabled>Select Country</option><option>Canada</option><option>United States</option><option>United Kingdom</option><option>United Arab Emirates</option><option>Other</option></select></label>
            </div>
            <fieldset className="mt-10">
              <legend className={labelClass}>Preferred contact method</legend>
              <div className="mt-4 flex flex-wrap gap-4">
                {["Email", "Phone", "WhatsApp"].map((method) => <label key={method} className="flex cursor-pointer items-center gap-2 text-sm"><input type="radio" name="contactMethod" value={method} defaultChecked={method === "Email"} className="h-4 w-4 accent-nusafiri-gold" />{method}</label>)}
              </div>
            </fieldset>
            <button type="submit" className="mt-12 bg-nusafiri-gold px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#b58f51]">Start Planning My Trip</button>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-nusafiri-muted">An Advisor will personally review your brief and reply the same day — usually within a few hours. Your information is never shared.</p>
          </section>
        </form>

        <section className="bg-white px-6 py-20 text-center md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <p className="font-display text-3xl font-semibold text-[#1A1A1A]">Just want to say hello first?</p>
            <p className="mt-3 text-nusafiri-muted">We&apos;re happy to chat.</p>
            <a href="/contact/" className="mt-8 inline-flex border border-nusafiri-gold px-8 py-3 text-xs font-semibold uppercase tracking-widest text-nusafiri-charcoal transition-colors hover:bg-nusafiri-gold hover:text-white">Contact Us</a>
          </div>
        </section>
      </main>
    </>
  );
}
