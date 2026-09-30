const assetPathPrefix = "https://www.figma.com/api/mcp/asset/50a7106a-b128-4f5a-87db-2c7214e17c6d";
const imgPictureJhid5ZaqJpeg = `${assetPathPrefix}/2db9b.png`;
const imgAfricanSunsetWithGiraffeSafariVehicle2 = `${assetPathPrefix}/0858d.png`;
const imgContainer = `${assetPathPrefix}/ad041.png`;
const imgImage3 = `${assetPathPrefix}/d56a9.png`;
const imgImage2 = `${assetPathPrefix}/08353.png`;
const imgPlumeriaFrangipaniTempleTreeFlowerCloseUpSingleWhiteyellowPlumeriaFlowersBouquetIsolatedWhiteBackground1 = `${assetPathPrefix}/d169a.png`;
const imgImage15 = "/image%2015.png";
const imgImage22 = "/image%2022.png";
const imgImage26 = "/image%2026.png";
const imgGeminiGeneratedImage8Ly3R98Ly3R98Ly3Photoroom1 = "/Gemini_Generated_Image_8ly3r98ly3r98ly3-Photoroom%201.png";
const imgLuxuryVillaWithPoolGarden1 = "/luxury-villa-with-pool-garden%201.png";
const imgImage19 = "/image%2019.png";
const imgImage20 = "/image%2019%20(1).png";
const imgImage21 = "/image%2019%20(2).png";
const imgImage23 = "/image%2019%20(4).png";
const imgImage24 = "/image%2019%20(3).png";
const imgVector5 = `${assetPathPrefix}/e39ea.svg`;
const imgFrame49 = "/figma/nusafiri-logo.svg";

import Header from "@/components/Header";
import Link from "next/link";

const experienceItems = [
  { title: "VIP\nConcierge", text: "Make every guest feel expected, welcomed and valued.", href: "/plan-my-trip/" },
  { title: "Travel\nConcierge", text: "Your time is valuable. Your needs deserve attention.", href: "/plan-my-trip/" },
  { title: "Guest\nManagement", text: "Travel planning, with someone thoughtful in your corner.", href: "/business/" },
  { title: "Bespoke\nExperiences", text: "Designed around your interests, your pace and your story.", href: "/ultra-luxury/" },
  { title: "Destination\nCelebrations", text: "Give your special moments a setting worth remembering.", href: "/ultra-luxury/bespoke-celebrations/" },
];

const experienceImages = [imgImage19, imgImage20, imgImage21, imgImage23, imgImage24];
const aboutInteriorImage = "/images/abt1.png";
const aboutDestinationImage = "/images/abt2.png";
const aboutFlowerImage = "/images/abt3.png";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f5f1eb] text-[#473921]">
      <div className="relative flex w-full flex-col items-start overflow-x-hidden" data-node-id="2022:337">
        <section className="home-hero relative h-[1055px] w-full overflow-hidden" data-node-id="2016:4">
          <div className="absolute inset-0 overflow-hidden" data-node-id="2016:6">
            <div className="absolute inset-0 overflow-hidden">
              <picture className="absolute inset-0">
                <source media="(max-width: 760px)" srcSet="/Overlay%20(2).png" />
                <img alt="" className="home-hero__background absolute h-[110.08%] left-0 max-w-none top-[-5.04%] w-full" src={imgPictureJhid5ZaqJpeg} />
              </picture>
            </div>
            <div className="home-hero__desktop-image absolute left-1/2 top-[-0.5px] h-[1300px] w-[1950px] -translate-x-1/2" data-node-id="2016:7">
              <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgAfricanSunsetWithGiraffeSafariVehicle2} />
            </div>
          </div>

          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute size-full max-w-none object-cover" src={imgContainer} />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />
          </div>

          <Header variant="homeHero" />

          <div className="home-hero__copy absolute left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center px-4 pb-12 pt-[138px] text-center text-white md:px-[510px] md:pb-[160px] md:pt-[195px]" data-node-id="2016:9">
            <div className="home-hero__copy-inner flex max-w-[900px] flex-col items-center justify-center gap-[23.3px]">
              <div className="home-hero__title-wrap flex h-[280px] w-full items-end justify-center" data-node-id="2016:10">
                <h1
                  className="home-hero__title whitespace-nowrap text-[clamp(2.8rem,7vw,8rem)] italic leading-[140px] tracking-[-0.04em] text-white [text-shadow:0_0_100px_rgba(0,0,0,0.5)] md:text-[160px] md:leading-[140px] md:tracking-[-6.4px]"
                  style={{
                    fontFamily: '"Kaufmann BT", "Kaufmann BT Regular", "Libre Baskerville", Georgia, serif',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    letterSpacing: '-0.04em',
                  }}
                >
                  We design experiences
                </h1>
              </div>

              <div className="home-hero__subtitle-wrap flex h-[120.7px] w-full items-start justify-center pt-[0.7px] md:w-[912px]" data-node-id="2016:12">
                <p
                  className="home-hero__subtitle h-[120px] w-full whitespace-pre text-[clamp(1.1rem,2.1vw,2.5rem)] leading-[60px] text-white [text-shadow:0_0_100px_rgba(0,0,0,0.5)] md:w-[912px] md:text-[40px]"
                  style={{ fontFamily: '"Poppins", "Montserrat", sans-serif', fontWeight: 300, lineHeight: "60px" }}
                >
                  {`that take you away, so you can find your way \nback to yourself.`}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[306px] h-0 w-[1318.5px] -translate-x-1/2" data-node-id="2018:321">
            <div className="absolute inset-[-1px_0]">
              <img alt="" className="block max-w-none size-full" src={imgVector5} />
            </div>
          </div>
        </section>

        <section className="about-export" aria-labelledby="about-export-title">
          <div className="about-export__canvas">
            <div className="about-export__copy">
              <p className="about-export__eyebrow">ABOUT US</p>
              <h2 id="about-export-title" className="about-export__title">
                <span>Hospitality, Thoughtfully<br className="about-export__mobile-break" /> Personalized.</span>
                <span>Experiences,<br className="about-export__mobile-break" /> Beautifully Orchestrated.</span>
              </h2>
              <div className="about-export__body">
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
            </div>

            <div className="about-export__art" aria-label="Hospitality, destination and floral imagery">
              <img className="about-export__interior" src="/image%203.png" alt="Elegant hotel interior" />
              <img className="about-export__destination" src="/image%202.png" alt="Whitewashed Mediterranean village" />
              <img className="about-export__flowers" src="/plumeria-frangipani-temple-tree-flower-close-up-single-whiteyellow-plumeria-flowers-bouquet-isolated-white-background%201.png" alt="White and yellow plumeria flowers" />
            </div>
          </div>
        </section>

        <section className="itinerary-hero" data-node-id="2016:83" aria-label="NuSafiri travel experiences">
          <div className="itinerary-hero__canvas">
            <img className="itinerary-hero__background" alt="" src={imgImage15} />
            <div className="itinerary-hero__shade" aria-hidden="true" />
            <img className="itinerary-hero__logo" alt="NuSafiri" src={imgFrame49} />
            <img
              className="itinerary-hero__photo"
              alt="A group of NuSafiri guests enjoying a trip to Santorini"
              src={imgImage22}
            />
            <h2 className="itinerary-hero__headline">Feeling is part of the itinerary.</h2>
          </div>
        </section>

        <section className="service-story" aria-labelledby="service-story-title">
          <div className="service-story__canvas">
            <img className="service-story__coast" src={imgImage26} alt="" aria-hidden="true" />
            <div className="service-story__panel" aria-hidden="true" />
            <div className="service-story__pattern-frame" aria-hidden="true">
              <img className="service-story__pattern" src="/Logo%26Patterns-03%206%20(Traced).png" alt="" />
            </div>
            <div className="service-story__copy">
              <h2 id="service-story-title">
                At NuSafiri, we believe exceptional<br className="service-story__desktop-break" /> service is found in the details.
              </h2>
              <p>
                The welcome that feels personal, the transfer that arrives on time, the room prepared with your preferences in mind, the recommendation that feels like it was made just for you. The small problem resolved before it becomes your concern.
              </p>
            </div>
            <p className="service-story__signature">Your story comes first.</p>
            <img
              className="service-story__luggage"
              src={imgGeminiGeneratedImage8Ly3R98Ly3R98Ly3Photoroom1}
              alt=""
              aria-hidden="true"
            />
          </div>
        </section>

        <section className="experiences-export" aria-labelledby="experiences-export-title">
          <img className="experiences-export__backdrop" src={imgLuxuryVillaWithPoolGarden1} alt="" aria-hidden="true" />
          <div className="experiences-export__panel">
            <h2 id="experiences-export-title" className="experiences-export__heading">
              <span>OUR</span>
              <span>EXPERIENCES</span>
            </h2>
            <div className="experiences-export__cards">
              {experienceItems.map((item, index) => (
                <Link key={item.title} href={item.href} className="experience-card">
                  <img className="experience-card__image" src={experienceImages[index]} alt="" />
                  <div className="experience-card__caption">
                    <h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                    <p>{item.text}</p>
                  </div>
                </Link>
              ))}
              <Link href={experienceItems[0].href} className="experience-card experience-card--mobile-only">
                <img className="experience-card__image" src={experienceImages[0]} alt="" />
                <div className="experience-card__caption">
                  <h3><span>VIP</span><span>Concierge</span></h3>
                  <p>Make every guest feel expected, welcomed and valued.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
