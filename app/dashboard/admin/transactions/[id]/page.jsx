import SideNav from "@/app/dashboard/_components/SideNav";
import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";
import PageDetails from "@/components/dashboard/PageDetails";
import { formatDate } from "@/const/dateTimeNow";
import pool from "@/db";
import Left1 from "@/public/icons/left1.svg";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { months } from "@/const";

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
    const [roleData] = await connection.query(
      "SELECT role FROM profiles WHERE user = ?",
      [username],
    );
    if (roleData.length === 0 || roleData[0].role < 1) {
      throw new Error("Unauthorized action");
    }

    const [sqlData] = await connection.query(
      "SELECT t.transaction_id id, t.transaction_date date, t.transaction_status status, t.transaction_type type, t.transaction_amount amount, t.payment_method method, CONCAT(p.firstName, ' ', p.lastName) AS fullName, t.month_ref, p.user, p.id userID FROM transactions t INNER JOIN profiles p ON t.member_id = p.id WHERE t.transaction_id = ? ORDER BY id DESC LIMIT 1",
      [params.id],
    );
    const [data] = sqlData;

    //Handle approval actions and redirect
    if (data.status == "Pending") {
      if (!isEmpty(searchParams)) {
        if (searchParams.action == "approve") {
          const [updateStatus] = await connection.query(
            "UPDATE transactions SET transaction_status = ? WHERE transaction_id = ?",
            ["Approved", params.id],
          );
          const [updateWallet] = await connection.query(
            "UPDATE profiles SET wallet = wallet + ? WHERE user = ?",
            [data.amount, data.user],
          );
          const [updateContributions] = await connection.query(
            "INSERT INTO `contributions`(`month`, `month_number`, `profile_id`, `year`, `datetime`) VALUES (?,?,?,?,?)",
            [
              months[data.month_ref],
              data.month_ref,
              data.userID,
              2024,
              data.date,
            ],
          );
          throw new Error("Data Updated");
        } else {
        }
      }
    }

    return (
      <section className="navigation bg-grey-bg font-Poppins">
        <SideNav userData={decoded} />
        <div className="lg:ml-64">
          <DashboardHeader userData={decoded} />
          <section>
            <PageDetails title="Transactions" />
            <div className="mx-4 bg-white p-4">
              <div className="lg:flex lg:justify-between">
                <div className="flex items-center gap-4">
                  <Link href="/dashboard/admin/transactions">
                    <Left1 className="h-8 w-8 rounded-full border bg-white shadow-md" />
                  </Link>
                  <h1 className="">Transaction Details</h1>
                </div>
                {data.status != "Pending" ? (
                  ""
                ) : (
                  <div className="action-btn flex justify-center gap-4 max-sm:mt-8">
                    <Link href="?action=approve">
                      <button className="h-8 w-28 rounded-md bg-purp text-xs font-light text-white">
                        Approve
                      </button>
                    </Link>
                    <Link href="?action=disprove">
                      <button className="h-8 w-28 rounded-md border border-[#fe6161] bg-[#FFEEF1] p-0 text-xs font-light text-[#fe6161]">
                        Decline
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <div className="amount mt-8 w-52 rounded-md border border-yellow-400 bg-yellow-50 p-4">
                <h6 className="text-sm font-medium">Approval requied for</h6>
                <h2 className="mt-2 font-semibold">₦{data.amount}</h2>
                <span className="mt-2 inline-block rounded-md bg-green-100 px-4 text-xs text-green-500">
                  {data.type}
                </span>
              </div>
              <div className="mt-8">
                <div className="-mx-4 border-b-2 border-grey-bg px-4 font-semibold text-greyscale">
                  <h4 className="relative inline-block border-b-2 border-purp-black py-2 text-purp-black before:absolute before:w-full">
                    Overview
                  </h4>
                </div>
                <div className="flex gap-4 border-b-4 border-dotted py-4">
                  <h4>From:</h4>
                  <h6 className="text-grey-txt">{data.fullName}</h6>
                </div>
                <div>
                  <div className="flex gap-4 border-b-4 border-dotted py-4">
                    <h4>Transaction Hash:</h4>
                    <h6 className="text-grey-txt">{data.id}</h6>
                  </div>
                  <div className="flex gap-4 border-b-4 border-dotted py-4">
                    <h4>Status</h4>
                    <h6 className="text-grey-txt">{data.status}</h6>
                  </div>
                  <div className="flex gap-4 border-b-4 border-dotted py-4">
                    <h4>Timestamp</h4>
                    <h6 className="text-grey-txt">
                      {formatDate(data.date).timestamp}
                    </h6>
                  </div>
                  <div className="flex gap-4 border-b-4 border-dotted py-4">
                    <h4>Method</h4>
                    <h6 className="text-grey-txt">{data.method}</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  } catch (err) {
    console.log(err.message);
    if (err.message == "Data Updated") {
      redirect("/dashboard/admin/transactions");
    }
    redirect(`/login`);
  } finally {
    if (connection) connection.release();
  }
};

export default page;
