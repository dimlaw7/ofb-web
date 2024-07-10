import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";
import SideNav from "@/app/dashboard/_components/SideNav";
import Link from "next/link";

const page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);

    return (
      <>
        <section className="navigation bg-grey-bg font-Poppins">
          <SideNav userData={decoded} />
          <div className="lg:ml-64">
            <DashboardHeader userData={decoded} />
            <div className="flex px-4">
              <Link href="admin/user-management">
                <div className="mt-8 flex flex-col lg:flex-row">
                  <div className="card mb-4 min-h-16 w-full rounded bg-white px-4 py-5 lg:mr-8 lg:w-60">
                    <h4 className="text-sm font-semibold text-purp">
                      User Management
                    </h4>
                  </div>
                </div>
              </Link>
              <Link href="admin/transactions">
                <div className="mt-8 flex flex-col lg:flex-row">
                  <div className="card mb-4 min-h-16 w-full rounded bg-white px-4 py-5 lg:mr-8 lg:w-60">
                    <h4 className="text-sm font-semibold text-purp">
                      Transactions
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    redirect(`/login`);
  }
};

export default page;
