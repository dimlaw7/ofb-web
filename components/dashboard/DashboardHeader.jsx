import Bell from "@/public/icons/notif_bell.svg";
import Hamburger from "@/public/icons/hamburger-2.svg";

const DashboardHeader = ({ userData }) => {
  return (
    <header className="flex justify-between self-start border-b border-purp-60 bg-white px-4 py-4">
      <div>
        <h6 className="font-sora text-xl font-bold text-purple-950">
          {userData.username}
        </h6>
        <p className=" text-sm text-[#00000080]">Welcome to your profile</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="wallet hidden font-semibold text-sec lg:inline">
          ₦{userData.wallet}
        </span>
        <Bell className="h-6 w-6 cursor-pointer" />
        <div className="flex h-6 w-6 cursor-pointer justify-center rounded-full bg-blue-100 text-xs leading-6">
          OL
        </div>
        <div className="invinsible cursor-pointer lg:visible">
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
