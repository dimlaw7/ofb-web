import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Why />
      <Banner />
      <Footer />
    </>
  );
}
