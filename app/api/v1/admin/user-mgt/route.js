import { cookies } from "next/headers";
import pool from "@/db";
import jwt from "jsonwebtoken";

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
  const { action, userID, roleInput } = await request.json();

  if (action == "modify") {
    try {
      const cookieData = jwt.verify(token.value, process.env.JWT_SECRET);
      const { username } = cookieData;

      const [roleData] = await pool.query(
        "SELECT role FROM profiles WHERE user = ?",
        [username],
      );

      if (roleData[0].role < 1) throw new Error("Unauthorized action");

      const [sqlData] = await pool.query(
        "UPDATE profiles SET role = ? WHERE id = ?",
        [roleInput, userID],
      );

      const [sqlData2] = await pool.query(
        "SELECT id, user, CONCAT(firstName, ' ', lastName) AS fullName, email, role FROM profiles ORDER BY role DESC",
      );

      return Response.json({ status: "ok", msg: "Succesful", data: sqlData2 });
    } catch (err) {
      return Response.json({ status: "error", msg: err.message });
    }
  }

  return Response.json({
    status: "error",
    msg: "An unknown error occured",
  });
}
