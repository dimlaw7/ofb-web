import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import pool from "@/db";
import jwt from "jsonwebtoken";
import SideNav from "@/components/dashboard/SideNav";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageDetails from "@/components/dashboard/PageDetails";
import { formatDate } from "@/const/dateTimeNow";
import Link from "next/link";

const page = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const thData = ["Date", "Status", "Type", "Amount", "Name", "Method"];

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
      "SELECT t.transaction_id id, t.transaction_date date, t.transaction_status status, t.transaction_type type, t.transaction_amount amount, t.transaction_id id, t.payment_method method, p.firstName FROM transactions t INNER JOIN profiles p ON t.member_id = p.id ORDER BY id DESC",
    );

    //const plainData = JSON.parse(JSON.stringify(sqlData));

    return (
      <section className="navigation bg-grey-bg font-Poppins">
        <SideNav userData={decoded} />
        <div className="lg:ml-64">
          <DashboardHeader userData={decoded} />
          <section>
            <PageDetails title="Transactions" />
            <div className="px-4">
              <table className="w-full border-separate rounded-md border bg-white">
                <thead>
                  <tr className="borber-b">
                    {thData.map((item, index) => (
                      <th
                        key={index}
                        className="hidden p-2 text-left text-sm font-semibold text-purp-black lg:table-cell"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="bg-grey-bg p-2 text-sm text-grey-txt"
                      colSpan={6}
                    >
                      Showing 7 of 56 total users
                    </td>
                  </tr>
                  {sqlData.map((item, index) => (
                    <tr className="text-sm" key={index}>
                      <td className="user-role border-b p-2 text-xs">
                        {formatDate(item.date).datestamp}
                      </td>
                      <td className="user-role border-b p-2">
                        <Link href={"transactions/" + item.id}>
                          <span
                            className={`inline-block rounded-md bg-yellow-100 p-2 text-sm text-yellow-500`}
                          >
                            {item.status}
                          </span>
                        </Link>
                      </td>
                      <td className="user-role border-b p-2">{item.type}</td>
                      <td className="user-role border-b p-2">{item.amount}</td>
                      <td className="user-role border-b p-2">
                        {item.firstName}
                      </td>
                      <td className="user-role border-b p-2">{item.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    );
  } catch (err) {
    console.log(err.message);
    redirect(`/login`);
  } finally {
    if (connection) connection.release();
  }
};

export default page;
