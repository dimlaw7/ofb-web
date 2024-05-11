import Image from "next/image";

const DashboardHeader = ({ userData }) => {
  return (
    <header className="flex justify-between self-start border-b border-purp-60 py-4">
      <div>
        <h6 className="font-sora text-xl font-bold text-purple-950">
          {userData.username}
        </h6>
        <p className=" text-sm text-[#00000080]">Welcome to your profile</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="wallet font-semibold text-sec">
          ₦{userData.wallet}
        </span>
        <Image
          src="/icons/settings.svg"
          className="hidden lg:block"
          width={24}
          height={25}
          alt="settings"
        />
        <Image
          src="/icons/notif_bell.svg"
          width={24}
          height={24}
          alt="notification"
          style={{ width: "24px", height: "24px" }}
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
