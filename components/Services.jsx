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
    <section className="services overflow-x-hidden px-4 lg:px-0">
      <div className="container mx-auto flex flex-col items-center justify-between py-8 lg:flex-row lg:py-16">
        <div data-aos="zoom-in-right" className="w-full pb-4 lg:w-3/12 lg:pb-0">
          <h5 className="font-extrabold text-sec lg:text-2xl">Services</h5>
          <h4 className="text-2xl font-extrabold lg:text-4xl">What We Offer</h4>
        </div>
        <div className="wrap-cards flex w-full flex-col gap-4 sm:flex-row lg:w-9/12">
          {services.map((item, index) => (
            <div
              data-aos={item.aos}
              className={`card flex max-w-full shrink-0 flex-col items-center gap-8 rounded-3xl border border-light px-8 py-24 shadow sm:w-1/3 ${index == 1 ? "lg:ofb-shadow" : ""}`}
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

export default Services;
