import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="ellipse absolute -left-[20%] z-10 h-52 w-52 rounded-full bg-sec blur-[200px] lg:-top-2/4 lg:h-[500px] lg:w-[500px] lg:blur-[400px]">
        {/* Blur Pink ellipse floating in hero */}
      </div>
      <section className="hero relative overflow-hidden bg-[#EAE1F3]">
        <div className="ellipse absolute -bottom-[50%] -right-[20%] z-10 h-[500px] w-[500px] rounded-full bg-yel blur-[200px]">
          {/* Blur Yellow ellipse floating in hero */}
        </div>
        <div className="hero-container container relative z-10 mx-auto flex flex-col items-center justify-center px-8 lg:flex-row lg:px-0">
          <div data-aos="zoom-in" className="flex flex-col gap-16 lg:w-7/12">
            <div className="flex flex-col gap-8">
              <h1 className="text text-2xl font-extrabold leading-normal lg:text-[53px]">
                Ticket to year-round savings{" "}
                <span className="text-sec">and abundant holiday meals.</span>
              </h1>
              <p className="font-jost">
                FoodBasket app is your one-stop shop for affordable,
                high-quality groceries. Save monthly, feast annually!
              </p>
            </div>
            <div className="flex gap-4">
              <a href="/get-started">
                <button className="ofb-shadow rounded-full bg-purp px-4 py-2 text-sm font-semibold text-white hover:bg-purple-900 lg:px-8 lg:py-4">
                  Get Started
                </button>
              </a>
              <a>
                <button className="flex gap-2 rounded-full border border-[#E5E4E4] bg-white px-4 py-2 text-sm font-semibold hover:border-purp lg:px-8 lg:py-4">
                  <Image src="/icons/play.svg" width={22} height={22} />
                  Watch Demo
                </button>
              </a>
            </div>
          </div>
          <div className="hero-right flex w-5/12 justify-center">
            <Image
              src="/illustrations/world.svg"
              width={772}
              height={287}
              className="absolute top-auto lg:-right-14"
            />
            <Image
              data-aos="zoom-in"
              src="/images/App-Mockup.png"
              width={283}
              height={578}
              className="relative top-20 z-20 hidden lg:block"
            />
            <div className="send-icon ofb-shadow absolute left-[60%] top-[70%] hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-sec lg:flex">
              <Image src="/icons/send.svg" width={32} height={32} />
            </div>
            <div className="user-icon ofb-shadow absolute left-[90%] top-[40%] hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-yel lg:flex">
              <Image src="/icons/add-user.svg" width={32} height={32} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
