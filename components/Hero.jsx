import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="ellipse">{/* Blur Pink ellipse floating in hero */}</div>
      <section className="hero relative overflow-hidden bg-[#EAE1F3] bg-home-hero-bg bg-cover bg-top after:absolute after:left-0 after:right-0 after:top-0 after:h-full after:bg-[rgb(0,0,0,0.2)]">
        <div className="ellipse-yellow">
          {/* Blur Yellow ellipse floating in hero */}
        </div>
        <div className="hero-container container relative z-10 mx-auto mt-24 flex flex-col items-center justify-center px-4 lg:mt-32 lg:flex-row lg:px-8">
          <div className="flex flex-col gap-16 lg:w-8/12">
            <div className="mb-4 flex flex-col text-white">
              <h1 className="text mb-8 font-Poppins text-3xl font-bold leading-[3rem] md:text-4xl md:leading-normal">
                Ticket to year-round savings and abundant{" "}
                <span className="text-sec">holiday meals.</span>
              </h1>
              <p className="max-w-xl leading-6">
                Save monthly and convert your budget into affordable foodstuff.
                Start saving today for a bountiful tomorrow!
              </p>
            </div>
            <div className="flex max-lg:justify-around">
              <a href="/get-started" className="mr-4">
                <button className="ofb-shadow h-12 rounded-full bg-purp px-4 text-sm font-semibold text-white hover:bg-purple-900">
                  Get Started
                </button>
              </a>
              <a>
                <button className="flex h-12 items-center gap-2 rounded-full border border-[#E5E4E4] bg-white px-4 text-sm font-semibold hover:border-purp">
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
              width={226}
              height={462}
              className="relative top-4 z-20 hidden lg:block"
            />
            <div className="send-icon ofb-shadow absolute left-[60%] top-[70%] hidden h-[40px] w-[40px] items-center justify-center rounded-full bg-tertiary lg:flex">
              <Image src="/icons/send.svg" width={25} height={25} />
            </div>
            <div className="user-icon ofb-shadow absolute left-[90%] top-[40%] hidden h-[40px] w-[40px] items-center justify-center rounded-full bg-yel lg:flex">
              <Image src="/icons/add-user.svg" width={25} height={25} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
