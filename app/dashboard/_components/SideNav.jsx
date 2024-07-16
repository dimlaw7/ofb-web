"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import HeaderLogo from "@/components/HeaderLogo";
import Image from "next/image";
import { dashboardNavLinks } from "@/const";
import Link from "next/link";
import { Menu } from "lucide-react";

const SideNav = ({ userData }) => {
  const [showSideNav, setShowSideNav] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <aside
        className={`nav fixed bottom-0 top-0 z-10 w-full bg-[rgba(0,0,0,0.4)] pt-4 lg:block lg:w-auto ${showSideNav == true ? "" : "max-lg:-left-full"}`}
        onClick={() => setShowSideNav(!showSideNav)}
      >
        <div
          className={`fixed bottom-0 ${showSideNav == true ? "" : "max-lg:-left-full"} top-0 z-10 w-64 bg-[#17002f] pt-4 lg:block`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="logo-hamburger-search mx-6">
            <div className="logo-hamburger flex items-center justify-between">
              <HeaderLogo css="text-white" />
            </div>
            <div className="dp-profile my-8 flex items-center border-b border-t border-b-purp-60 border-t-purp-60 p-2">
              <div className="h-7 w-7 rounded-full">
                <Image
                  src="/icons/profile_account.svg"
                  width={28}
                  height={28}
                  alt="My DP"
                />
              </div>
              <div className="ml-2 text-xs">
                <p className="text-white">{userData.username}</p>
                <p className="text-[#ffffff80]">Member</p>
              </div>
            </div>
            <div className="search relative mt-8 hidden">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Something"
                className="w-full border bg-transparent text-white"
              />
              <Image
                src="/icons/dash_search.svg"
                width={24}
                height={24}
                className="absolute right-2 top-2"
                alt="Search"
              />
            </div>
          </div>
          <nav className="navigation">
            {dashboardNavLinks.map((item, index) => (
              <div
                key={index}
                className={`${pathname === item.url ? "bg-purp-60" : ""} px-9 py-4 text-white hover:outline hover:outline-2 hover:outline-purp-60`}
              >
                <Link href={item.url} className="flex items-center">
                  <item.icon />
                  <span className="ml-4 text-sm ">{item.title}</span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </aside>
      <div
        className="absolute left-[17px] top-[19px] cursor-pointer hover:bg-purp-60 lg:left-[17rem] lg:top-[29px]"
        onClick={() => {
          setShowSideNav(!showSideNav);
        }}
      >
        <Menu />
      </div>
    </>
  );
};

export default SideNav;
