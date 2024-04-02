import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero overflow-hidden bg-[#EAE1F3]">
      <div className="container mx-auto flex  min-h-screen items-center">
        <div className="flex w-7/12 flex-col gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text text-[53px] font-extrabold">
              Ticket to year-round savings{" "}
              <span className="text-sec">and abundant holiday meals.</span>
            </h1>
            <p className="font-jost">
              FoodBasket app is your one-stop shop for affordable, high-quality
              groceries. Save monthly, feast annually!
            </p>
          </div>
          <div className="flex gap-4">
            <a>
              <button className="ofb-shadow bg-purp rounded-full px-8 py-2 text-white">
                Get Started
              </button>
            </a>
            <a>
              <button className="flex gap-2 rounded-full border border-[#E5E4E4] bg-white px-8 py-2">
                <Image src="/icons/play.svg" width={24} height={24} />
                Watch Demo
              </button>
            </a>
          </div>
        </div>
        <div className="relative flex w-5/12 justify-center">
          <Image
            src="/illustrations/world.svg"
            width={772}
            height={287}
            className="absolute top-16"
          />
          <Image
            src="/images/App-Mockup.png"
            width={283}
            height={578}
            className="relative top-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
