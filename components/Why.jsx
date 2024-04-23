import { why } from "@/const";
import Image from "next/image";

const Why = () => {
  return (
    <section className="why-OFB overflow-x-hidden bg-purple-200 px-4 py-8 lg:px-8 lg:py-16">
      <div className="container mx-auto">
        <div data-aos="fade-left" className="pb-8">
          <h5 className="font-extrabold text-sec lg:text-2xl">
            Why FoodBasket
          </h5>
          <h4 className="text-2xl font-extrabold lg:text-4xl">
            Feasting Made Easy!
          </h4>
        </div>
        <div className="flex flex-col justify-around gap-4 sm:flex-row lg:gap-0">
          {why.map((item, index) => (
            <div
              data-aos="zoom-in"
              className="card flex max-w-full shrink-0 flex-col items-center gap-8 rounded-3xl border border-light bg-white px-8 py-24 shadow sm:w-1/3"
              key={index}
            >
              <Image src={item.icon} width={60} height={60} />
              <h6 className="text-center font-bold">{item.title}</h6>
              <p className="text-center text-[#00000080]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
