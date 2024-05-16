import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SideNav from "@/components/dashboard/SideNav";
import PageDetails from "./components/PageDetails";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";

const page = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    const response = await fetch(process.env.URL + "/api/v1/admin/user-mgt", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Cookie: `token=${token.value};`,
      },
      body: JSON.stringify({ action: null }),
    });
    const apiData = await response.json();
    const { data } = apiData;

    return (
      <>
        <section className="navigation bg-grey-bg font-Poppins">
          <SideNav userData={decoded} />
          <div className="mx-8 lg:ml-72 lg:mr-8">
            <DashboardHeader userData={decoded} />
            <section>
              <PageDetails />
              <table className="w-full border-separate rounded-md border bg-white">
                <TableHead />
                <TableBody data={data} />
              </table>
            </section>
          </div>
        </section>
      </>
    );
  } catch (error) {
    redirect(`/login`);
  }
};

export default page;
