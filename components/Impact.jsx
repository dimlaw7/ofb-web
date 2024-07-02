import Image from "next/image";

const Impact = () => {
  return (
    <section className="impact flex flex-col-reverse bg-purple-50 font-Poppins lg:flex-row">
      <div className="lg:w-1/2">
        <Image
          src="/images/serve-feast.jpg"
          width={600}
          height={400}
          className="sca scale-75"
        />
      </div>
      <div className="right-col py-8 lg:w-1/2 lg:py-48">
        <h5 className="px-4 font-extrabold uppercase text-sec lg:text-xl">
          Impact
        </h5>
        <div className="mt-4 px-4">
          <h4 className="mb-2 text-2xl font-medium lg:text-3xl">
            Making an Impact through Food Basket
          </h4>
          <p>
            Positively impacting families across Nigeria without straining their
            finances.
          </p>
        </div>
        <a className="mt-4 inline-block pl-4">
          <button className="flex h-12 items-center gap-2 rounded-full border border-[#E5E4E4] bg-white px-4 py-2 text-sm font-semibold hover:border-purp">
            <Image src="/icons/play.svg" width={22} height={22} />
            Learn More
          </button>
        </a>
      </div>
    </section>
  );
};

export default Impact;
