import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import pool from "@/db";
import jwt from "jsonwebtoken";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SideNav from "@/app/dashboard/_components/SideNav";
import PageDetails from "@/components/dashboard/PageDetails";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";

const page = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  let connection;
  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    const { username } = decoded;
    connection = await pool.getConnection();
    const [roleData] = await connection.query(
      "SELECT role FROM profiles WHERE user = ?",
      [username],
    );
    if (roleData[0].role < 1) throw new Error("Unauthorized action");

    const [sqlData] = await connection.query(
      "SELECT id, user, CONCAT(firstName, ' ', lastName) AS fullName, email, role FROM profiles ORDER BY role DESC",
    );

    const plainData = JSON.parse(JSON.stringify(sqlData));
    return (
      <>
        <section className="navigation bg-grey-bg font-Poppins">
          <SideNav userData={decoded} />
          <div className="lg:ml-64">
            <DashboardHeader userData={decoded} />
            <section>
              <PageDetails title="User Management">
                <div className="mt-4 flex lg:mt-0">
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search User"
                      className="mb-0 h-full w-60 rounded-md border border-purp-60"
                    />
                  </div>
                  <button className="rank-user ml-4 rounded-md bg-yellow-400 p-2 text-sm font-medium text-purp-black lg:min-w-32">
                    Rank User
                  </button>
                </div>
              </PageDetails>
              <div className="px-4">
                <table className="w-full border-separate rounded-md border bg-white">
                  <TableHead />
                  <TableBody data={plainData} />
                </table>
              </div>
            </section>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.log(error.message);
    redirect(`/login`);
  } finally {
    if (connection) connection.release();
  }
};

export default page;
