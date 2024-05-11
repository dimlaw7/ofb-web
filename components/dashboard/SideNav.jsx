import HeaderLogo from "@/components/HeaderLogo";
import Image from "next/image";
import { dashboardNavLinks } from "@/const";

const SideNav = ({ userData }) => {
  return (
    <aside className="nav fixed bottom-0 top-0 hidden w-64 bg-[#17002f] pt-4 lg:block">
      <div className="logo-hamburger-search mx-6">
        <div className="logo-hamburger flex items-center justify-between">
          <HeaderLogo css="text-white" />
        </div>
        <div className="dp-profile my-8 flex items-center border-b border-t border-b-purp-60 border-t-purp-60 p-2">
          <div className="h-7 w-7 rounded-full bg-purp-60"></div>
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
            className={`${index == 0 ? "bg-purp-60" : ""} px-9 py-4`}
          >
            <a href="" className="flex text-white">
              <div>
                <Image src={item.icon} width={24} height={25} alt="icon" />
              </div>
              <span className="ml-4 text-sm ">{item.title}</span>
            </a>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
