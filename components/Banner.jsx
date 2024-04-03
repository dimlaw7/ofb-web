import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto">
      <div className="mx-auto my-[90px] flex max-w-[1120px] justify-center gap-20 rounded-2xl bg-yellow-100 px-8 py-24">
        <div>
          <p className="text-2xl font-extrabold">Download the app...</p>
          <p className="font-rubik mt-4 text-[#00000080]">
            Join the club to begin your holiday saving
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href=""
            className="inline-flex rounded-2xl bg-black px-8 py-2 text-white"
          >
            <Image src="/icons/apple.svg" width={40} height={40} />
            <div className="font-rubik">
              <p>Get it on</p>
              <p className="font-extrabold">Appstore</p>
            </div>
          </a>
          <a
            href=""
            className="inline-flex rounded-2xl bg-black px-8 py-2 text-white"
          >
            <Image src="/icons/playstore.svg" width={40} height={40} />
            <div className="font-rubik">
              <p>Get it on</p>
              <p className="font-extrabold">Playstore</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
