"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { services } from "@/const";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="services overflow-x-hidden bg-grey-bg px-4 font-Poppins lg:px-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 py-8 lg:py-16">
        <div
          data-aos="zoom-in-right"
          className="w-full pb-4 text-center lg:w-3/12 lg:pb-0"
        >
          <h5 className="font-extrabold text-sec lg:text-xl">Services</h5>
          <h4 className="text-2xl font-extrabold lg:text-3xl">What We Offer</h4>
        </div>
        <div className="wrap-cards flex w-full flex-col sm:flex-row">
          {services.map((item, index) => (
            <div
              // data-aos={item.aos}
              className={`card flex max-w-full shrink-0 flex-col items-center gap-4 px-4 py-2 sm:w-1/4 lg:gap-4`}
              key={index}
            >
              <Image src={item.icon} width={100} height={100} />
              <h6 className="text-center font-bold">{item.title}</h6>
              <p className="text-center text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
