import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f0eb] text-[#3c2d1d]">
      <Header variant="aboutHero" />
      <section className="about-hero" aria-labelledby="about-hero-title">
        <h1 id="about-hero-title" className="about-hero__title">
          <span>If you want to feel restored,</span>
          <span>we might design differently.</span>
        </h1>
      </section>

      <section className="about-experience" aria-labelledby="about-experience-title">
        <div className="about-experience__inner">
          <p className="about-experience__eyebrow">ABOUT US</p>
          <h2 id="about-experience-title" className="about-experience__title">
            The NuSafiri Experience
          </h2>
          <p className="about-experience__subtitle">A complete experience, thoughtfully managed.</p>

          <div className="about-experience__columns">
            <div className="about-experience__column">
              <p>
                Whether you are welcoming distinguished guests, planning a private getaway,
                celebrating a milestone abroad or coordinating travel for an important occasion,
                NuSafiri takes care of the details that make the experience memorable.
              </p>
              <p>
                We bring together the right people, places, services and moments to create
                experiences that flow naturally from one touchpoint to the next.
              </p>
              <p>
                That means a guest arriving to a warm welcome rather than a confusing process. A
                traveller enjoying a carefully considered itinerary without having to manage every
                detail. A host being fully present with their guests.
              </p>
            </div>

            <div className="about-experience__column">
              <p>
                because the logistics are already being handled. A celebration that feels seamless,
                personal and beautifully executed.
              </p>
              <p>
                Our role is to make the experience feel easy without making the thought behind it
                invisible.
              </p>
              <p>
                We manage the coordination, so you can focus on what matters: being present, enjoying
                the moment and creating memories that last.
              </p>
            </div>

            <div className="about-experience__column about-experience__commitments">
              <p className="about-experience__lead">
                At NuSafiri, every experience is shaped by three commitments:
              </p>
              <p>
                <strong>Personal Attention</strong>
                We listen closely and design around the people we serve, not generic expectations or
                pre-packaged solutions.
              </p>
              <p>
                <strong>Thoughtful Coordination</strong>
                We connect the details, anticipate potential challenges and ensure every element
                works together.
              </p>
              <p>
                <strong>Exceptional Care</strong>
                We create experiences where guests feel welcomed, valued and confidently looked
                after from beginning to end.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-itinerary" aria-labelledby="about-itinerary-title">
        <div className="about-itinerary__canvas">
          <img className="about-itinerary__image" src="/image%2020.png" alt="" aria-hidden="true" />
          <div className="about-itinerary__shade" aria-hidden="true" />
          <h2 id="about-itinerary-title" className="about-itinerary__title">
            Feeling is part of the itinerary.
          </h2>
        </div>
      </section>

      <section className="about-team" aria-labelledby="about-team-title">
        <div className="about-team__content">
          <h2 id="about-team-title" className="about-team__heading">
            OUR<br className="about-team__mobile-break" /> TEAM
          </h2>
          <div className="about-team__rule" aria-hidden="true" />

          <div className="about-team__profiles">
            {["first", "second"].map((profile, index) => (
              <div className="about-team__profile-block" key={profile}>
                {index > 0 && <div className="about-team__rule" aria-hidden="true" />}
                <article className="about-team__profile">
                  <div className="about-team__portrait-wrap">
                    <img
                      className="about-team__portrait"
                      src={profile === "first" ? "/image%2021.png" : "/image%2021%20(1).png"}
                      alt="Momo Etiko"
                    />
                    <h3 className="about-team__name">Momo Etiko</h3>
                  </div>
                  <div className="about-team__bio">
                    <p>
                      NuSafiri is an Experience Design and Hospitality Company creating seamless,
                      personalised experiences for individuals, families, executives, groups and
                      organisations.
                    </p>
                    <p>
                      We bring together hospitality, concierge services, travel management and
                      destination expertise to ensure every guest feels considered, every detail feels
                      intentional and every moment feels effortless.
                    </p>
                    <p>
                      From the first enquiry to the final farewell, we manage the experience around you,
                      anticipating needs, coordinating details and creating meaningful moments along the way.
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="about-team__visual" aria-label="A NuSafiri host welcoming a guest">
          <p className="about-team__message about-team__message--top">
            <span>The emotional</span>
            <span>outcome matters</span>
          </p>
          <img className="about-team__handshake" src="/image%2023.png" alt="A host welcoming a guest" />
          <p className="about-team__message about-team__message--bottom">
            <span>just as much</span>
            <span>as the logistics.</span>
          </p>
        </div>
      </section>
    </main>
  );
}
