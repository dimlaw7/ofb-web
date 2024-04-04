"use client";
import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/const";

const Header = () => {
  const [navBar, setnavBar] = useState(false);
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#EAE1F3] px-8 py-4">
      <a href="/" className="flex items-center">
        <Image src="/images/food-basket.png" width={40} height={43} />
        <h6 className="font-pacifico text-2xl text-purp">FoodBasket</h6>
      </a>
      <nav
        className={`flex transition-all max-sm:absolute max-sm:top-[73px] max-sm:min-h-screen max-sm:w-3/4 max-sm:flex-col max-sm:bg-inherit lg:gap-8 ${navBar == true ? "max-sm:left-0" : "max-sm:-left-full"}`}
      >
        {navLinks.map((item, index) => (
          <a
            href={item.url}
            className="font-jost text-purp hover:underline max-sm:px-8 max-sm:py-4"
            key={index}
          >
            {item.title}
          </a>
        ))}
      </nav>
      <nav className="hidden gap-11 lg:flex">
        <a href="/login">
          <button className="rounded-full border border-purp px-8 py-4 text-sm font-semibold text-purp hover:shadow-lg">
            Login
          </button>
        </a>
        <a href="/register">
          <button className="rounded-full bg-purp px-8 py-4 text-sm font-semibold text-white hover:bg-purple-900">
            Register
          </button>
        </a>
      </nav>
      <div className="hamburger lg:hidden" onClick={() => setnavBar(!navBar)}>
        <Image src="/icons/hamburger.svg" width={30} height={30} />
      </div>
    </header>
  );
};

export default Header;
