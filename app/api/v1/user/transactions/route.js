import { cookies } from "next/headers";
import pool from "@/db";
import jwt from "jsonwebtoken";

export async function POST() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    //Block Acces if Cookie is not available
    return Response.json({
      status: "error",
      msg: "You don't have acces to this feature",
    });
  }

  try {
    const cookieData = jwt.verify(token.value, process.env.JWT_SECRET);
    const { username } = cookieData;

    const [sqlData] = await pool.query(
      "SELECT t.transaction_type, t.transaction_date, t.transaction_amount, t.transaction_status FROM profiles p INNER JOIN transactions t ON p.id=t.member_id WHERE p.user = ? ORDER BY t.transaction_date DESC",
      [username],
    );

    return Response.json({ status: "ok", msg: "Succesful", data: sqlData });
  } catch (err) {
    return Response.json({ status: "error", msg: err.message });
  }
}
