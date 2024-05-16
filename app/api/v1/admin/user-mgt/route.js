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
  const { action } = await request.json();

  if (!action) {
    try {
      const cookieData = jwt.verify(token.value, process.env.JWT_SECRET);
      const { username } = cookieData;

      const [sqlData] = await pool.query(
        "SELECT id, user, CONCAT(firstName, ' ', lastName) AS fullName, email, role FROM profiles ORDER BY role DESC",
      );

      return Response.json({ status: "ok", msg: "Succesful", data: sqlData });
    } catch (err) {
      return Response.json({ status: "error", msg: err.message });
    }
  }

  if (action == "modify") {
    try {
      const cookieData = jwt.verify(token.value, process.env.JWT_SECRET);
      const { username } = cookieData;

      const [sqlData] = await pool.query(
        "SELECT id, user, CONCAT(firstName, ' ', lastName) AS fullName, email, role FROM profiles ORDER BY role DESC",
      );

      return Response.json({ status: "ok", msg: "Succesful", data: sqlData });
    } catch (err) {
      return Response.json({ status: "error", msg: err.message });
    }
  }

  return Response.json({
    status: "error",
    msg: "An unknown error occured",
  });
}
