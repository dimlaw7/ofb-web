import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto px-8">
      <div className="banner mx-auto my-8 flex max-w-[1120px] flex-col justify-center gap-20 rounded-2xl bg-yellow-100 px-4 py-8 lg:my-[90px] lg:flex-row lg:px-8 lg:py-8">
        <div>
          <p className="font-extrabold lg:text-xl">Download the app...</p>
          <p className="mt-4 font-rubik text-[#00000080]">
            Join the club to begin your holiday saving
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href=""
            className="inline-flex items-center rounded-2xl bg-black px-2 py-2 text-white lg:px-8"
          >
            <Image src="/icons/apple.svg" width={30} height={30} />
            <div className="font-rubik">
              <p className="text-sm">Get it on</p>
              <p className="font-extrabold max-sm:text-sm">Appstore</p>
            </div>
          </a>
          <a
            href=""
            className="inline-flex items-center rounded-2xl bg-black px-2 py-2 text-white lg:px-8"
          >
            <Image src="/icons/playstore.svg" width={30} height={30} />
            <div className="font-rubik">
              <p className="text-sm">Get it on</p>
              <p className="font-extrabold max-sm:text-sm">Playstore</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
