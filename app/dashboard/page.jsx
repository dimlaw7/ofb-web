import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SideNav from "@/components/dashboard/SideNav";
import WalletOverview from "@/components/dashboard/WalletOverview";
import Services from "@/components/dashboard/DashboardServices";
import RecentActivity from "@/components/dashboard/RecentActivity";
import Footer from "@/components/Footer";

const page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);

    return (
      <>
        <section className="navigation flex min-h-screen font-openSans">
          <SideNav />
          <div className="mx-8 flex-1">
            <DashboardHeader userData={decoded} />
            <WalletOverview userData={decoded} />
            <Services />
            <RecentActivity />
          </div>
        </section>
        <Footer />
      </>
    );
  } catch (error) {
    redirect(`/login`);
  }
};

export default page;
