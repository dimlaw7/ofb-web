import { Moon, Sun } from "lucide-react";

const DashboardSubHeader = ({ userData }) => {
  return (
    <div className="flex justify-between bg-white p-4 lg:hidden">
      <div className="flex items-center gap-1.5">
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-semibold leading-6">
          O
        </div>
        <div className="welcome-text">
          <h6 className="font-sora font-semibold text-purple-950">
            {userData.username}
          </h6>
          <p className=" text-sm text-slate-400">Welcome to your profile</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="sun-moon flex items-center rounded-md bg-orange-50 p-1">
          <div className="rounded-md bg-transparent px-2 py-1">
            <Sun size={20} />
          </div>
          <div className="rounded-md bg-white p-2">
            <Moon size={20} />
          </div>
        </div>
        <div className="invinsible cursor-pointer lg:visible"></div>
      </div>
    </div>
  );
};

export default DashboardSubHeader;
