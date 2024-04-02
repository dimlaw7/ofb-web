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
    <section className="services overflow-x-hidden">
      <div className="container mx-auto flex items-center justify-between py-16">
        <div data-aos="zoom-in-right" className="w-3/12">
          <h5 className="text-2xl font-extrabold text-sec">Services</h5>
          <h4 className="text-4xl font-extrabold">What We Offer</h4>
        </div>
        <div className="wrap-cards flex w-9/12 gap-4">
          {services.map((item, index) => (
            <div
              data-aos={item.aos}
              className={`card flex w-[300px] shrink-0 flex-col items-center gap-8 rounded-3xl border border-light px-8 py-24 shadow ${index == 1 ? "ofb-shadow" : ""}`}
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
