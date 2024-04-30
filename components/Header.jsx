"use client";
import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/const";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  const [navBar, setnavBar] = useState(false);
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#EAE1F3] px-8 py-4">
      <HeaderLogo css="text-purp" />
      <nav
        className={`flex transition-all max-sm:absolute max-sm:top-[73px] max-sm:min-h-screen max-sm:w-3/4 max-sm:flex-col max-sm:bg-inherit lg:gap-8 ${navBar == true ? "max-sm:left-0" : "max-sm:-left-full"}`}
      >
        {navLinks.map((item, index) => (
          <div key={index}>
            <Link
              href={item.url}
              className="font-jost text-purp hover:underline max-sm:px-8 max-sm:py-4"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
      <nav className="hidden gap-11 lg:flex">
        <Link href="/login">
          <button className="rounded-full border border-purp px-8 py-4 text-sm font-semibold text-purp hover:shadow-lg">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="rounded-full bg-purp px-8 py-4 text-sm font-semibold text-white hover:bg-purple-900">
            Register
          </button>
        </Link>
      </nav>
      <div className="hamburger lg:hidden" onClick={() => setnavBar(!navBar)}>
        <Image src="/icons/hamburger.svg" width={30} height={30} />
      </div>
    </header>
  );
};

export default Header;
