import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import pool from "@/db";
import jwt from "jsonwebtoken";
import DashboardHeader from "@/app/dashboard/components/DashboardHeader";
import SideNav from "@/app/dashboard/components/SideNav";
import PageDetails from "./components/PageDetails";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";

const page = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    const { username } = decoded;
    const [roleData] = await pool.query(
      "SELECT role FROM profiles WHERE user = ?",
      [username],
    );
    if (roleData[0].role < 1) throw new Error("Unauthorized action");

    const [sqlData] = await pool.query(
      "SELECT id, user, CONCAT(firstName, ' ', lastName) AS fullName, email, role FROM profiles ORDER BY role DESC",
    );

    const plainData = JSON.parse(JSON.stringify(sqlData));

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
                <TableBody data={plainData} />
              </table>
            </section>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.log(error.message);
    redirect(`/login`);
  }
};

export default page;
