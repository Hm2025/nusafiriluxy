import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const curatedServices = [
  {
    id: "hospitality-guest-management",
    number: "01",
    title: "Hospitality & Guest Management",
    image: "/Container.png",
    alt: "A guest enjoying a thoughtfully arranged hospitality experience",
    quote: "Make every guest feel expected, welcomed and valued.",
    paragraphs: [
      "We provide thoughtful guest management solutions for private individuals, organisations, events and hospitality partners.",
      "From arrival coordination and accommodation management to personalised assistance and on-ground support, we ensure guests experience comfort, clarity and care at every touchpoint.",
    ],
    listTitle: "Our hospitality & guest management services include:",
    features: [
      "Guest arrival & departure coordination",
      "Accommodation management",
      "Airport meet-and-greet services",
      "Guest logistics and transportation",
      "Hospitality desk & on-ground support",
      "Executive and VIP guest management",
      "Personalised welcome experiences",
      "Guest itinerary coordination",
    ],
    signoff: "Every detail matters when someone is in your care.",
  },
  {
    id: "vip-concierge",
    number: "02",
    title: "VIP Concierge services",
    image: "/Container-1.png",
    alt: "A private concierge welcoming a guest at a cafe",
    quote: "Your time is valuable. Your needs deserve attention.",
    paragraphs: [
      "Our VIP Concierge service is designed for individuals who expect more than convenience.",
      "We provide discreet, responsive and highly personalised assistance for executives, high-profile guests, private clients and discerning travellers.",
      "Whether you need access, arrangements or assistance, we help make the exceptional feel effortless.",
    ],
    listTitle: "Our VIP concierge services include:",
    features: [
      "Personal help & lifestyle management",
      "Premium accommodation bookings",
      "Private transportation and transfers",
      "Dining & exclusive reservation support",
      "Event and access coordination",
      "Shopping and lifestyle requests",
      "Executive travel assistance",
      "On-demand local support",
    ],
    signoff: "Consider it handled.",
  },
  {
    id: "travel-concierge",
    number: "03",
    title: "Travel Concierge",
    image: "/Container-2.png",
    alt: "Giraffes moving across a golden African savannah",
    quote: "Travel planning, with someone thoughtful in your corner.",
    paragraphs: [
      "Travel can involve many moving parts. We make them feel like one seamless experience.",
      "Our Travel Concierge service supports individuals, families, executives and groups with personalised travel planning and coordination, from the initial idea to the moment they return home.",
      "We take the time to understand your preferences, priorities and purpose before recommending the right options.",
    ],
    listTitle: "Our travel concierge services include:",
    features: [
      "Bespoke itinerary planning",
      "Flight & accommodation coordination",
      "Airport and ground transportation",
      "Visa & travel documentation support",
      "Trip research and recommendations",
      "Restaurant, activity and reservations",
      "Family and group travel coordination",
      "Business and executive travel support",
    ],
    signoff: "You focus on the journey. We manage the moving parts.",
  },
  {
    id: "bespoke-experiences",
    number: "04",
    title: "Bespoke Experiences",
    image: "/Container-3.png",
    alt: "A traveller enjoying a bespoke villa experience",
    quote: "Designed around your interests, your pace and your story.",
    paragraphs: [
      "Our Bespoke Experiences service creates personalised journeys that reflect what matters to you, from intimate wellness escapes and cultural immersions to private adventures, romantic getaways and meaningful personal retreats.",
      "We begin with your intention, then design around it.",
    ],
    listTitle: "Bespoke experiences may include:",
    features: [
      "Wellness and restoration retreats",
      "Cultural and heritage immersions",
      "Private culinary experiences",
      "Romantic escapes",
      "Family bonding journeys",
      "Adventure and discovery experiences",
      "Art, fashion and lifestyle explorations",
      "Personal milestone experiences",
    ],
    signoff: "Not everyone wants the same experience. Yours should feel unmistakably yours.",
  },
  {
    id: "destination-celebrations",
    number: "05",
    title: "Destination Celebrations",
    image: "/Container-4.png",
    alt: "A celebration in a beautiful private island destination",
    quote: "Give your special moments a setting worth remembering.",
    paragraphs: [
      "Some milestones deserve more than a gathering.",
      "They deserve a destination, an atmosphere and a story people will remember long after the celebration ends.",
      "NuSafiri designs and coordinates destination celebrations that bring people together beautifully, whether you are planning an intimate birthday escape, a destination wedding, an anniversary, a family reunion or a private corporate celebration.",
      "From guest travel and accommodation to venue coordination, activities and on-ground hospitality, we bring the details together so you can be fully present for the moment.",
    ],
    listTitle: "Our destination celebration services include:",
    features: [
      "Destination weddings and proposals",
      "Birthdays and milestone celebrations",
      "Anniversaries and romantic escapes",
      "Family reunions and group holidays",
      "Private parties & intimate gatherings",
      "Corporate retreats and celebrations",
      "Guest travel and accommodation",
      "Logistics and event coordination",
    ],
    signoff: "A setting worth remembering.",
  },
];

export default function UltraLuxury() {
  return (
    <>
      <Header variant="homeHero" logoSrc="/Nusafiri%20logo%20gold.png" />
      <main>
        <section className="experiences-hero" aria-labelledby="experiences-hero-title">
          <Image
            className="experiences-hero__background"
            src="/Section.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="experiences-hero__shade" aria-hidden="true" />
          <div className="experiences-hero__copy">
            <h1 id="experiences-hero-title">
              <span>Some experiences cannot be</span>{" "}
              <span>selected from a menu.</span>
            </h1>
            <p>They need to be imagined, curated and thoughtfully brought to life.</p>
          </div>
        </section>

        <section className="experiences-services" aria-label="Curated services">
          <div className="experiences-services__layout">
            <aside className="experiences-services__sidebar">
              <div className="experiences-services__index">
                <h2>Curated Services</h2>
                <nav aria-label="Curated services">
                  <ol>
                    {curatedServices.map((service) => (
                      <li key={service.id}>
                        <a
                          href={`#${service.id}`}
                          className={service.number === "01" ? "is-active" : undefined}
                          aria-current={service.number === "01" ? "location" : undefined}
                        >
                          <span>{service.number}</span>
                          {service.id === "hospitality-guest-management"
                            ? "Hospitality & Guest Mgmt"
                            : service.title.replace(" services", "")}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <div className="experiences-services__inquiry">
                  <p className="experiences-services__script">Tailored for your lifestyle</p>
                  <p>Require a custom itinerary or personal assistant arrangement?</p>
                  <Link href="/contact/">Inquire directly</Link>
                </div>
              </div>
            </aside>

            <div className="experiences-services__cards">
              {curatedServices.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="experiences-service-card"
                  aria-labelledby={`${service.id}-title`}
                >
                  <div className="experiences-service-card__image">
                    <Image src={service.image} alt={service.alt} fill sizes="(max-width: 900px) 100vw, 62vw" />
                    <span className="experiences-service-card__number">{service.number}</span>
                    <div className="experiences-service-card__image-title">
                      <p>Service Offering</p>
                      <h2 id={`${service.id}-title`}>{service.title}</h2>
                    </div>
                  </div>
                  <div className="experiences-service-card__body">
                    <blockquote>{service.quote}</blockquote>
                    <div className="experiences-service-card__description">
                      {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <h3>{service.listTitle}</h3>
                    <ul className="experiences-service-card__features">
                      {service.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <div className="experiences-service-card__footer">
                      <p>{`“${service.signoff}”`}</p>
                      <Link href="/contact/">Request Service</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experiences-closing" aria-labelledby="experiences-closing-title">
          <div className="experiences-closing__content">
            <h2 id="experiences-closing-title">Feeling is part of the itinerary.</h2>
            <p>
              Exceptional service lives in the details. The welcome that feels personal, the transfer
              that arrives on time, the room prepared with your preferences in mind.
            </p>
            <Link className="experiences-closing__button" href="/plan-my-trip/">
              Begin Your Journey
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
