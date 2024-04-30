import HeaderLogo from "@/components/HeaderLogo";
import Image from "next/image";
import { dashboardNavLinks } from "@/const";

const SideNav = () => {
  return (
    <aside className="nav w-64 bg-purp pt-4">
      <div className="logo-hamburger-search mx-6">
        <div className="logo-hamburger flex items-center justify-between">
          <HeaderLogo css="text-white" />
          <div className="hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                stroke="rgba(255, 255, 255)"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </div>
        </div>
        <div className="search relative mt-8">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Something"
            className="w-full border bg-purp-60 text-white placeholder:text-white"
          />
          <Image
            src="/icons/dash_search.svg"
            width={24}
            height={24}
            className="absolute right-2 top-2"
          />
        </div>
      </div>
      <nav className="navigation">
        {dashboardNavLinks.map((item, index) => (
          <div
            key={index}
            className={`${index == 0 ? "bg-purp-60" : ""} px-9 py-4`}
          >
            <a href="" className="flex text-white">
              <div>
                <Image src={item.icon} width={24} height={24} />
              </div>
              <span className="font-base ml-4 font-semibold">{item.title}</span>
            </a>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
