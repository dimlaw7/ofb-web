import pool from "@/db";
import jwt from "jsonwebtoken";

export async function POST(request) {
  let connection;
  //Get jwt token from request body
  const { token } = await request.json();
  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    connection = await pool.getConnection();
    const [results, fields] = await connection.query(
      "SELECT user, firstName, lastName, wallet, package_id FROM `profiles` WHERE user = ?",
      [userData.username],
    );

    if (results.length == 0) {
      throw new Error("Data not found");
    }

    return Response.json({
      status: "ok",
      msg: "Fetch Successful",
      data: results[0],
    });
  } catch (error) {
    return Response.json({ status: "error", msg: error.message });
  } finally {
    if (connection) connection.release();
  }
}
