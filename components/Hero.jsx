import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="ellipse absolute -left-[20%] -top-[50%] z-10 h-[500px] w-[500px] rounded-full bg-sec blur-[400px]"></div>
      <div className="ellipse absolute -bottom-[50%] -right-[20%] z-10 h-[500px] w-[500px] rounded-full bg-yel blur-[400px]"></div>
      <section className="hero relative overflow-hidden bg-[#EAE1F3]">
        <div className="hero-container container mx-auto flex items-center">
          <div data-aos="zoom-in" className="flex w-7/12 flex-col gap-16">
            <div className="flex flex-col gap-8">
              <h1 className="text text-[53px] font-extrabold">
                Ticket to year-round savings{" "}
                <span className="text-sec">and abundant holiday meals.</span>
              </h1>
              <p className="font-jost">
                FoodBasket app is your one-stop shop for affordable,
                high-quality groceries. Save monthly, feast annually!
              </p>
            </div>
            <div className="flex gap-4">
              <a>
                <button className="ofb-shadow rounded-full bg-purp px-8 py-4 text-sm font-semibold text-white">
                  Get Started
                </button>
              </a>
              <a>
                <button className="flex gap-2 rounded-full border border-[#E5E4E4] bg-white px-8 py-4 text-sm font-semibold">
                  <Image src="/icons/play.svg" width={24} height={24} />
                  Watch Demo
                </button>
              </a>
            </div>
          </div>
          <div className="flex w-5/12 justify-center">
            <Image
              src="/illustrations/world.svg"
              width={772}
              height={287}
              className="absolute -right-14 top-auto"
            />
            <Image
              data-aos="zoom-in"
              src="/images/App-Mockup.png"
              width={283}
              height={578}
              className="relative top-20"
            />
            <div className="ofb-shadow absolute left-[60%] top-[40%] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-sec">
              <Image src="/icons/send.svg" width={32} height={32} />
            </div>
            <div className="ofb-shadow absolute left-[90%] top-[80%] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-yel">
              <Image src="/icons/add-user.svg" width={32} height={32} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
