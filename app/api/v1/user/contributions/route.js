import pool from "@/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  let connection;
  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    const { username } = decoded;

    connection = await pool.getConnection();
    const [sqlData] = await connection.query(
      "SELECT c.month_number, p.id FROM contributions c INNER JOIN profiles p ON c.profile_id = p.id WHERE p.user = ? ORDER BY c.month_number",
      [username],
    );
    if (sqlData.length > 0) {
      return Response.json(sqlData);
    }
    return Response.json({ status: "error", msg: "error" });
  } catch (error) {
    return Response.json({ status: "error", msg: error.message });
  }
}
