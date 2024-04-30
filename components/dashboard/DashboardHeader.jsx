import Image from "next/image";

const DashboardHeader = ({ userData }) => {
  return (
    <header className="flex justify-between self-start border-b border-purp-60 px-8 py-4">
      <div>
        <h6 className="text-2xl font-extrabold text-purple-950">
          {userData.username}
        </h6>
        <p className=" text-[#00000080]">Welcome to your profile</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="wallet font-bold text-sec">₦{userData.wallet}</span>
        <Image src="/icons/settings.svg" width={24} height={24} />
        <Image src="/icons/notif_bell.svg" width={24} height={24} />
      </div>
    </header>
  );
};

export default DashboardHeader;
