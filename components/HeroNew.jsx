import Image from "next/image";
import localFont from "next/font/local";
import AppImage from "./AppImage";

const Aeonik = localFont({
  src: [
    {
      path: "./fonts/AeonikPro-Black-Capitalised.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/AeonikPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AeonikPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const HeroNew = () => {
  return (
    <section className={`hero overflow-hidden ${Aeonik.className}`}>
      <div className="relative h-screen pt-48 md:pt-48">
        <div className="hero-imgs absolute top-0 -z-10 h-screen">
          <Image
            src="/images/sky.jpg"
            alt="baloons bg"
            width={1440}
            height={800}
            className="h-screen"
          />
          <Image
            src="/images/hero-face.png"
            alt="baloons bg"
            width={1440}
            height={800}
            className="absolute bottom-[20.2%] scale-[2.30] md:top-0 md:scale-[1.30]"
          />
        </div>
        <section className="hero-text container mx-auto flex flex-col gap-8 px-4 text-white md:py-4">
          <h1 className="max-w-[940px] text-3xl font-black md:text-7xl">
            Money And Grocery The Right Way!
          </h1>
          <span>
            <p className="md:max-w-[40%]">
              You get more for your money with Food Basket. Sign up for free in
              a blink.
            </p>
          </span>
          <div className="flex font-normal max-lg:justify-around">
            <a href="/get-started" className="mr-4">
              <button className="ofb-shadow h-12 rounded-full bg-purp px-4 text-sm text-white hover:bg-purple-900">
                Get Started
              </button>
            </a>
            <a>
              <button className="flex h-12 items-center gap-2 rounded-full border border-[#E5E4E4] bg-white px-4 text-sm text-black hover:border-purp">
                <Image src="/icons/play.svg" width={22} height={22} />
                Watch Demo
              </button>
            </a>
          </div>
        </section>
        <AppImage />
      </div>
    </section>
  );
};

export default HeroNew;
