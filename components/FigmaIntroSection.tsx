export default function FigmaIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-12 md:py-28 lg:min-h-[720px] lg:px-20 lg:py-32">
      <div className="container-wide relative mx-auto min-h-[620px]">
        <img
          src="/images/figma-image-3.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-28 w-64 opacity-[0.08] md:-left-40 md:w-80 lg:-bottom-36 lg:-left-48 lg:w-[360px]"
        />

        <div className="relative z-10 max-w-xl pt-4 md:pt-8 lg:ml-[6%] lg:max-w-[500px] lg:pt-8">
          <h2 className="font-caslon text-5xl font-medium italic leading-[1.08] text-[#111] md:text-6xl lg:text-[48px]">
            Crafting <span className="text-[#D69E4D]">Luxury</span>
            <br />
            Infused with Warmth,
            <br />
            Depth &amp; <span className="text-[#14044A]">Purpose.</span>
          </h2>

          <div className="mt-8 max-w-[560px] space-y-6 font-poppins text-sm font-light leading-[1.58] text-[#333] md:text-base lg:mt-12 lg:text-[15px]">
            <p>
              From bespoke travel and wellness journeys to high-level guest management, event logistics, and intentional convenings, we offer a seamless fusion of service, excellence, and care to curate unforgettable experiences.
            </p>
            <p>
              Our services span local and global landscapes, always designed with depth and purpose. We believe in hospitality as a healing tool, experiences as an art, and logistics as convenience in motion. Every detail we craft is intentional, making every moment feel whole and serene.
            </p>
          </div>
        </div>

        <div className="relative mt-14 h-[470px] md:mt-8 md:h-[560px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[52%]">
          <div className="absolute right-[24%] top-0 h-[390px] w-[280px] rounded-[10px] border-[10px] border-white bg-white shadow-[5px_4px_33.5px_5px_rgba(0,0,0,0.25)] md:h-[510px] md:w-[370px] md:border-[14px] lg:right-[34%] lg:h-[619px] lg:w-[450px] lg:border-[17px]">
            <img src="/images/figma-world.png" alt="Luxury hotel interior" className="h-full w-full rounded-[3px] object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 h-[360px] w-[300px] rounded-[14px] border-[10px] border-white bg-white shadow-[-6px_6px_27.2px_14px_rgba(0,0,0,0.16)] md:h-[450px] md:w-[380px] md:border-[14px] lg:bottom-[-2px] lg:h-[564px] lg:w-[474px] lg:rounded-[20px] lg:border-[17px]">
            <img src="/images/figma-image-4.png" alt="Luxury tropical resort" className="h-full w-full rounded-[8px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}