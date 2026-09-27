const cards = [
  {
    title: "Restaurants",
    description: "Savor local flavors at top-rated spots.",
    image: "/images/business-sightseeing.png",
  },
  {
    title: "Sightseeing",
    description: "Explore iconic sights and hidden gems.",
    image: "/images/business-restaurants.png",
  },
  {
    title: "Where to Stay",
    description: "Find comfort in top-rated stays.",
    image: "/images/business-shops.png",
  },
  {
    title: "Shops & Boutiques",
    description: "Discover unique finds and local treasures.",
    image: "/images/business-stays.png",
  },
];

export default function BusinessTravelSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-16 pt-16 md:px-12 md:pb-20 md:pt-20 lg:px-20 lg:pb-20 lg:pt-24">
      <img
        src="/images/business-wild.png"
        alt="African wildlife"
        className="pointer-events-none absolute -bottom-24 -left-20 z-0 w-[480px] max-w-none md:-bottom-28 md:-left-32 md:w-[620px] lg:-bottom-36 lg:-left-36 lg:w-[720px]"
      />

      <div className="relative z-10 mx-auto max-w-[1355px]">
        <h2 className="font-caslon text-5xl font-medium italic leading-[1.08] text-[#111] md:text-7xl lg:text-[76px]">
          Where Business Meets{" "}
          <span className="bg-gradient-to-r from-[#DE9B23] via-[#FFD45F] to-[#DE9B23] bg-clip-text text-transparent">
            Pleasure
          </span>
        </h2>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(260px,0.82fr)_minmax(620px,1.65fr)] lg:gap-8">
          <div className="relative z-10 max-w-[360px] pt-0 lg:pt-[135px]">
            <p className="font-poppins text-sm font-light leading-[1.6] text-[#666] md:text-base lg:text-[15px]">
              Executive travel demands precision, efficiency, and seamless execution. Our corporate travel specialists ensure that every business journey is optimized for productivity while maintaining the comfort and luxury that discerning professionals expect.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-4">
            {cards.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-[10px] bg-[#f2efea] p-4 md:p-5 ${index > 1 ? "lg:translate-x-[28%]" : ""}`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="aspect-[275/140] w-full rounded-[10px] object-cover"
                />
                <h3 className="mt-3 text-center font-caslon text-xl font-medium italic leading-tight text-[#111] md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-center font-poppins text-xs leading-[1.6] text-[#666] md:text-sm">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}