import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SideNav from "@/components/dashboard/SideNav";
import WalletOverview from "@/components/dashboard/WalletOverview";
import Services from "@/components/dashboard/DashboardServices";
import RecentActivity from "@/components/dashboard/RecentActivity";

const page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);

    return (
      <>
        <section className="navigation font-Poppins">
          <SideNav userData={decoded} />
          <div className="mx-8 lg:ml-72 lg:mr-8">
            <DashboardHeader userData={decoded} />
            <WalletOverview userData={decoded} />
            <Services />
            <RecentActivity />
          </div>
        </section>
      </>
    );
  } catch (error) {
    redirect(`/login`);
  }
};

export default page;
