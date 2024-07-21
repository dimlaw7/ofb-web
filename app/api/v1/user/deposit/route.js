import { cookies } from "next/headers";
import pool from "@/db";
import jwt from "jsonwebtoken";
import getCurrentDateTime from "@/const/dateTimeNow";

export async function POST(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    //Block Acces if Cookie is not available
    return Response.json({
      status: "error",
      msg: "You don't have acces to this feature",
    });
  }

  let connection;
  try {
    //Get username from valied cookie
    const cookieData = jwt.verify(token.value, process.env.JWT_SECRET);
    const { username } = cookieData;

    //Get payload from request
    const requestData = await request.json();
    let { amount, month } = requestData;
    amount = amount.replace(/[^\d.]+/g, "");
    amount = parseFloat(amount);
    //Get payload from user profile in database
    connection = await pool.getConnection();
    const [sqlData] = await connection.query(
      "SELECT * FROM `profiles` WHERE user = ?",
      [username],
    );

    // Insert transaction details
    const sql =
      "INSERT INTO `transactions`(`transaction_type`, `transaction_date`, `member_id`, `transaction_amount`, `month_ref`, `payment_method`, `transaction_status`) VALUES (?,?,?,?,?,?,?)";
    const values = [
      "Deposit",
      getCurrentDateTime(),
      sqlData[0].id,
      amount,
      month,
      "Bank Transfer",
      "Pending",
    ];

    const [result] = await connection.query(sql, values);

    return Response.json({ status: "ok", msg: "Deposit Created" });
  } catch (err) {
    return Response.json({ status: "error", msg: err.message });
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
