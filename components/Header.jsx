"use client";
import { useState } from "react";
import { navLinks } from "@/const";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";
import Hamburger from "@/public/icons/hamburger-2.svg";

const Header = () => {
  const [navBar, setnavBar] = useState(false);
  return (
    <header className="fixed left-1/2 top-2 z-50 flex w-[98%] -translate-x-1/2 items-center justify-between rounded-2xl border border-[#EAE1F3] bg-white px-8 py-4 shadow-lg lg:top-4">
      <HeaderLogo css="text-purp" />
      <nav
        className={`left-10 flex overflow-y-hidden transition-all max-sm:absolute max-sm:left-2 max-sm:right-2  max-sm:top-[73px] max-sm:flex-col max-sm:bg-inherit lg:gap-8 ${navBar != true ? "max-sm:h-0 max-sm:opacity-0" : "opacity-100 max-sm:h-[50vh]"}`}
      >
        {navLinks.map((item, index) => (
          <div key={index}>
            <Link
              href={item.url}
              className="font block text-sm font-medium text-purp hover:underline max-sm:px-8 max-sm:py-2"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
      <nav
        className={`flex gap-11 max-sm:absolute max-sm:left-10 max-sm:right-2 max-sm:top-[273px] ${navBar != true ? "max-sm:h-0 max-sm:opacity-0" : "opacity-100 max-sm:h-[50vh]"}`}
      >
        <Link href="/login">
          <button className="h-10 w-28 rounded-xl border border-purp text-sm font-medium text-purp hover:shadow-lg">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="h-10 w-28 rounded-xl bg-purp text-sm font-medium text-white hover:bg-purple-900">
            Register
          </button>
        </Link>
      </nav>
      <div className="hamburger lg:hidden" onClick={() => setnavBar(!navBar)}>
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
