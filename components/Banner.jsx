import Image from "next/image";

const Banner = () => {
  return (
    <section className="mx-auto bg-purple-50 px-8 py-8">
      <div className="banner container mx-auto flex max-w-[1120px] flex-col justify-center gap-8 rounded-2xl bg-yellow-100 px-4 py-8 lg:my-[90px] lg:flex-row lg:gap-20 lg:px-8 lg:py-8">
        <div>
          <p className="text-lg font-extrabold lg:text-xl">
            Download the app...
          </p>
          <p className="mt-4 font-rubik text-[#00000080]">
            Join the club to begin your holiday saving.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href=""
            className="inline-flex h-12 min-w-32 items-center justify-center rounded-xl bg-black text-white"
          >
            <Image src="/icons/apple.svg" width={30} height={30} />
            <div className="font-rubik">
              <p className="text-sm">Get it on</p>
              <p className="font-extrabold max-sm:text-sm">Appstore</p>
            </div>
          </a>
          <a
            href=""
            className="inline-flex h-12 min-w-32 items-center justify-center rounded-xl bg-black text-white"
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
