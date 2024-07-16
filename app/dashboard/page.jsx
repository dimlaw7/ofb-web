import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";
import Services from "@/app/dashboard/_components/Services";
import SideNav from "@/app/dashboard/_components/SideNav";
import WalletOverview from "@/app/dashboard/_components/WalletOverview";
import DashboardSubHeader from "@/app/dashboard/_components/DashboardSubHeader";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Advert from "./_components/Advert";
import DebtWarning from "./_components/DebtWarning";
import PackageType from "./_components/PackageType";
import SavingsCard from "./_components/SavingsCard";
import Transactions from "./_components/Transactions";

const page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token") || {};
  let decoded = null;
  try {
    decoded = jwt.verify(token.value, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error.message);
  }
  return (
    <>
      <section className="navigation bg-grey-bg font-Poppins">
        <SideNav userData={decoded} />
        <div className="lg:ml-64">
          <DashboardHeader userData={decoded} />
          <DashboardSubHeader userData={decoded} />
          <DebtWarning userData={decoded} />
          <section className="main my-6 flex w-full flex-col justify-between gap-4 px-4 lg:flex-row lg:px-8">
            <div className="lt-col lg:w-[700px]">
              <div className="wallet-package mb-8 flex">
                <WalletOverview token={token.value} />
                <PackageType />
              </div>
              <Services />
              <Transactions userData={decoded} />
            </div>
            <div className="rt-col flex flex-col gap-4">
              <SavingsCard userData={decoded} />
              <Advert />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default page;
