"use client";
import { useState } from "react";
import { navLinks } from "@/const";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";
import Hamburger from "@/public/icons/hamburger-2.svg";
import { Menu } from "lucide-react";

const Header = () => {
  const [navBar, setnavBar] = useState(false);
  return (
    <header className="fixed left-1/2 top-2 z-50 flex w-[95%] -translate-x-1/2 items-center justify-between rounded-2xl border border-[#EAE1F3] bg-white px-8 shadow-lg lg:top-4">
      <HeaderLogo css="text-purp" />
      <nav
        className={`left-10 flex overflow-y-hidden transition-all max-lg:absolute max-lg:left-2 max-lg:right-2  max-lg:top-[73px] max-lg:flex-col max-lg:bg-inherit lg:gap-8 ${navBar != true ? "max-lg:h-0 max-lg:opacity-0" : "opacity-100 max-lg:h-[50vh]"}`}
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
        className={`flex gap-11 max-lg:absolute max-lg:left-10 max-lg:right-2 max-lg:top-[273px] ${navBar != true ? "max-lg:h-0 max-lg:opacity-0" : "opacity-100 max-lg:h-[50vh]"}`}
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
        <Menu />
      </div>
    </header>
  );
};

export default Header;
