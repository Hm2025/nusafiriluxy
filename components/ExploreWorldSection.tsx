export default function ExploreWorldSection() {
  return (
    <section className="relative h-[520px] overflow-hidden bg-[#111] md:h-[590px]">
      <img
        src="/images/figma-world-background.png"
        alt="Tropical landscape with mountain villas and a rainbow"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative flex h-[520px] items-end justify-end px-6 pb-16 md:h-[590px] md:px-12 md:pb-20 lg:px-[8%] lg:pb-20">
        <h2 className="max-w-[680px] text-right font-caslon text-5xl font-medium italic leading-[1.1] text-white md:text-7xl lg:text-[72px] xl:text-[88px]">
          We explore the word for you
        </h2>
      </div>
    </section>
  );
}