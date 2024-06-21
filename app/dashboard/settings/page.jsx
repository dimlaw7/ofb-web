import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import pool from "@/db";
import jwt from "jsonwebtoken";
import SideNav from "@/components/dashboard/SideNav";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { formatDate } from "@/const/dateTimeNow";
import Main from "./Main";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const page = async ({ params, searchParams }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  let connection;
  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    const { username } = decoded;
    connection = await pool.getConnection();
    const [sqlData] = await connection.query(
      "SELECT user, email, CONCAT(firstName, ' ', lastName) AS name FROM profiles WHERE user = ? LIMIT 1",
      [username],
    );

    return (
      <>
        <section className="navigation bg-grey-bg font-Poppins">
          <SideNav userData={decoded} />
          <div className="lg:ml-64">
            <DashboardHeader userData={decoded} />
            <Main sqlData={JSON.parse(JSON.stringify(sqlData))} />
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.log(err.message);
    redirect(`/login`);
  } finally {
    if (connection) connection.release();
  }
};

export default page;
