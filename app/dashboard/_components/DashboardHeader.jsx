import useRadix from "@/hooks/useRadix";
import { Bell, Menu, Moon, Sun } from "lucide-react";
import Image from "next/image";

const DashboardHeader = ({ userData }) => {
  const wallet = useRadix(userData?.wallet);
  return (
    <header className="flex items-center justify-between self-start border border-b border-purp-60 bg-white px-4 py-4 shadow-md">
      <div className="left-col invisible flex items-center gap-3">
        <div className="hover:cursor-pointer">
          <Menu />
        </div>
        <div className="hidden hover:cursor-pointer lg:block">
          <Image
            src="/images/logoipsum.svg"
            width={120}
            height={50}
            alt="logo"
          />
        </div>
      </div>
      <div className="middle-col flex items-center gap-3 lg:hidden">
        <div className="hover:cursor-pointer">
          <Image
            src="/images/logoipsum.svg"
            width={120}
            height={50}
            alt="logo"
          />
        </div>
      </div>
      <div className="right-col flex items-center gap-8">
        <div className="sun-moon hidden items-center rounded-md bg-orange-50 p-1 md:flex">
          <div className="rounded-md bg-transparent px-2 py-1 hover:cursor-pointer">
            <Sun size={20} />
          </div>
          <div className="rounded-md bg-white p-2 hover:cursor-pointer">
            <Moon size={20} />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Bell />
          <div className="username-dp hidden items-center gap-1.5 lg:flex">
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-semibold leading-6">
              O
            </div>
            <div className="User-balance">
              <h6 className="font-sora font-semibold text-purple-950">
                {userData.username}
              </h6>
              <span className="wallet text-xs font-semibold text-sec lg:inline">
                ₦{wallet}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
