import { why } from "@/const";
import Image from "next/image";

const Why = () => {
  return (
    <section className="why-OFB overflow-x-hidden bg-purple-50 px-4 py-8">
      <div className="container mx-auto lg:w-[800px]">
        <div data-aos="fade-left" className="pb-8">
          <h5 className="font-extrabold text-sec lg:text-xl">Why FoodBasket</h5>
          <h4 className="text-2xl font-extrabold lg:text-3xl">
            Feasting Made Easy!
          </h4>
        </div>
        <div className="flex flex-col justify-around gap-4 font-jost sm:flex-row lg:justify-normal lg:gap-8">
          {why.map((item, index) => (
            <div
              // data-aos="zoom-in"
              className="card flex flex-col items-center gap-4 rounded-xl border border-light bg-white px-4 py-8 text-center shadow sm:w-1/3"
              key={index}
            >
              <Image src={item.icon} width={60} height={60} />
              <h6 className="font-bold">{item.title}</h6>
              <p className="text-[#00000080]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
